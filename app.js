/**
 * Exam Prep Hub - Core Application Logic
 */

let examData = [];
let activeCategory = 'All';
let activeChips = new Set();
let searchQuery = '';
let currentModalExam = null;
let currentModalFile = null;
let rawFileContent = '';

// Category Labels Mapping
const CATEGORIES = {
  'Kwalifikacja_E14': { label: 'Kwalifikacja E.14', short: 'E.14', badgeClass: 'cat-badge-e14' },
  'Kwalifikacja_EE09': { label: 'Kwalifikacja EE.09', short: 'EE.09', badgeClass: 'cat-badge-ee09' },
  'Cwiczenia_i_Zadania': { label: 'Ćwiczenia i Zadania', short: 'Ćwiczenia', badgeClass: 'cat-badge-cw' }
};

// Concise Exam Details Formatter for Modal
function formatExamDetails(exam) {
  if (!exam) return '<p>Brak danych zadania.</p>';

  const hasPhp = exam.phps && exam.phps.length > 0;
  const hasSql = exam.sqls && exam.sqls.length > 0;
  const hasJs = exam.scripts && exam.scripts.some(s => s.endsWith('.js'));
  const hasHtml = exam.htmls && exam.htmls.length > 0;

  const keyPoints = [];
  if (hasHtml) {
    const htmlFiles = exam.htmls.map(h => `<code>${h.split('/').pop()}</code>`).join(', ');
    keyPoints.push(`<li><strong>🌐 HTML (${htmlFiles}):</strong> Struktura strony, układ bloków i formularze.</li>`);
  }
  if (hasJs) {
    const jsFiles = exam.scripts.filter(s => s.endsWith('.js')).map(s => `<code>${s.split('/').pop()}</code>`).join(', ');
    keyPoints.push(`<li><strong>⚡ JavaScript (${jsFiles}):</strong> Logika obliczeń, walidacja pól i interakcja DOM.</li>`);
  }
  if (hasSql) {
    const sqlFiles = exam.sqls.map(s => `<code>${s.split('/').pop()}</code>`).join(', ');
    keyPoints.push(`<li><strong>💾 Baza SQL (${sqlFiles}):</strong> Tabele, relacje i zapytania filtrujące dane.</li>`);
  }
  if (hasPhp) {
    const phpFiles = exam.phps.map(p => `<code>${p.split('/').pop()}</code>`).join(', ');
    keyPoints.push(`<li><strong>🐘 Backend PHP (${phpFiles}):</strong> Połączenie z bazą przez <code>mysqli</code> i generowanie widoku.</li>`);
  }

  let runHint = '';
  if (hasPhp) {
    const phpFile = exam.mainPhp ? exam.mainPhp.split('/').pop() : 'index.php';
    const folder = exam.folder.split('/').pop();
    runHint = `
      <div class="concise-box">
        <strong>🚀 Jak uruchomić w XAMPP:</strong>
        <p>1. Zaimportuj plik <code>.sql</code> w <code>phpMyAdmin</code>.<br>
        2. Wklej folder do <code>C:\\xampp\\htdocs\\${folder}</code> i otwórz <code>http://localhost/${folder}/${phpFile}</code>.</p>
      </div>
    `;
  } else if (hasHtml) {
    const htmlFile = exam.mainHtml ? exam.mainHtml.split('/').pop() : 'index.html';
    runHint = `
      <div class="concise-box">
        <strong>🚀 Jak uruchomić:</strong>
        <p>Otwórz plik <code>${htmlFile}</code> bezpośrednio w przeglądarce lub kliknij przycisk <em>Otwórz</em> w panelu.</p>
      </div>
    `;
  }

  return `
    <div class="concise-explanation">
      <div class="concise-header">
        <h2>${escapeHtml(exam.title || exam.name)}</h2>
        <p class="concise-desc">${escapeHtml(exam.description || 'Zadanie egzaminacyjne z przygotowania zawodowego.')}</p>
      </div>

      <div class="concise-section">
        <h3>🛠️ Co zawiera rozwiązanie:</h3>
        <ul class="concise-list">
          ${keyPoints.join('')}
        </ul>
      </div>

      ${runHint}
    </div>
  `;
}

// Simple syntax highlighting regexes
function highlightSyntax(code, ext) {
  if (!code) return '';
  
  let escaped = code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  if (['sql'].includes(ext)) {
    const sqlKeywords = /\b(SELECT|INSERT|INTO|UPDATE|DELETE|FROM|WHERE|JOIN|LEFT|RIGHT|INNER|OUTER|ON|GROUP BY|ORDER BY|HAVING|CREATE|TABLE|DATABASE|ALTER|DROP|INDEX|VIEW|UNION|ALL|AS|AND|OR|NOT|NULL|IS|IN|EXISTS|LIKE|BETWEEN|PRIMARY|KEY|FOREIGN|REFERENCES|DEFAULT|AUTO_INCREMENT|VALUES|LIMIT|SET|COUNT|SUM|AVG|MAX|MIN|VARCHAR|INT|DECIMAL|DATE|DATETIME|TEXT)\b/gi;
    escaped = escaped
      .replace(/(--.*$|\/\*[\s\S]*?\*\/)/gm, '<span class="syn-comment">$1</span>')
      .replace(/('[^'\\]*(?:\\.[^'\\]*)*')/g, '<span class="syn-string">$1</span>')
      .replace(sqlKeywords, '<span class="syn-keyword">$1</span>')
      .replace(/\b(\d+)\b/g, '<span class="syn-number">$1</span>');
  } else if (['php', 'js'].includes(ext)) {
    const keywords = /\b(function|return|if|else|elseif|for|foreach|while|do|switch|case|break|continue|new|class|extends|public|private|protected|static|const|let|var|try|catch|throw|echo|include|require|include_once|require_once|global|namespace|use|true|false|null)\b/g;
    escaped = escaped
      .replace(/(\/\/.*$|\/\*[\s\S]*?\*\/|#.*$)/gm, '<span class="syn-comment">$1</span>')
      .replace(/(&quot;[^&quot;\\]*(?:\\.[^&quot;\\]*)*&quot;|'[^'\\]*(?:\\.[^'\\]*)*'|`[^`\\]*(?:\\.[^`\\]*)*`)/g, '<span class="syn-string">$1</span>')
      .replace(/(\$[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*)/g, '<span class="syn-variable">$1</span>')
      .replace(keywords, '<span class="syn-keyword">$1</span>')
      .replace(/\b(\d+)\b/g, '<span class="syn-number">$1</span>');
  } else if (['html', 'htm'].includes(ext)) {
    escaped = escaped
      .replace(/(&lt;!--[\s\S]*?--&gt;)/g, '<span class="syn-comment">$1</span>')
      .replace(/(&lt;\/?[a-zA-Z0-9\-]+)/g, '<span class="syn-tag">$1</span>')
      .replace(/(&gt;)/g, '<span class="syn-tag">$1</span>')
      .replace(/([a-zA-Z\-]+)=(&quot;[^&quot;]*&quot;|'[^']*')/g, '<span class="syn-keyword">$1</span>=<span class="syn-string">$2</span>');
  }

  return escaped;
}

// Initialization
function init() {
  if (typeof EXAM_DATA !== 'undefined' && Array.isArray(EXAM_DATA)) {
    examData = EXAM_DATA;
    finishInit();
  } else {
    fetch('manifest.json')
      .then(res => res.json())
      .then(data => {
        examData = data;
        finishInit();
      })
      .catch(err => {
        console.error('Błąd ładowania bazy zadań:', err);
        const grid = document.getElementById('exam-grid');
        grid.innerHTML = '<div class="empty-state"><div class="empty-icon">⚠️</div><div class="empty-title">Nie udało się załadować listy zadań</div><p>Uruchom serwer przez <code>npm start</code>.</p></div>';
      });
  }
}

function finishInit() {
  updateStats();
  setupEventListeners();
  renderGrid();
}

// Update Tab Counter Badges
function updateStats() {
  const total = examData.length;
  const countE14 = examData.filter(e => e.category === 'Kwalifikacja_E14').length;
  const countEE09 = examData.filter(e => e.category === 'Kwalifikacja_EE09').length;
  const countCW = examData.filter(e => e.category === 'Cwiczenia_i_Zadania').length;

  const countAllEl = document.getElementById('count-all');
  if (countAllEl) countAllEl.textContent = total;
  const countE14El = document.getElementById('count-e14');
  if (countE14El) countE14El.textContent = countE14;
  const countEE09El = document.getElementById('count-ee09');
  if (countEE09El) countEE09El.textContent = countEE09;
  const countCWEl = document.getElementById('count-cw');
  if (countCWEl) countCWEl.textContent = countCW;
}

// Filter and Render Exam Cards
function getFilteredExams() {
  const query = searchQuery.trim().toLowerCase();

  return examData.filter(item => {
    if (activeCategory !== 'All' && item.category !== activeCategory) {
      return false;
    }

    if (activeChips.has('hasPdf') && (!item.pdfs || item.pdfs.length === 0)) return false;
    if (activeChips.has('hasPhp') && (!item.phps || item.phps.length === 0)) return false;
    if (activeChips.has('hasSql') && (!item.sqls || item.sqls.length === 0)) return false;
    if (activeChips.has('hasHtml') && (!item.htmls || item.htmls.length === 0)) return false;

    if (query !== '') {
      const searchTokens = [
        item.name,
        item.title || '',
        item.description || '',
        item.category,
        item.folder,
        ...(item.technologies || []),
        ...(item.pdfs || []),
        ...(item.htmls || []),
        ...(item.phps || []),
        ...(item.sqls || []),
        ...(item.txts || [])
      ].join(' ').toLowerCase();

      return searchTokens.includes(query);
    }

    return true;
  });
}

function renderGrid() {
  const grid = document.getElementById('exam-grid');
  const summary = document.getElementById('results-count');
  const filtered = getFilteredExams();

  if (summary) {
    const categoryName = activeCategory === 'All' ? 'wszystkich kategorii' : (CATEGORIES[activeCategory]?.label || activeCategory);
    summary.innerHTML = `Znaleziono <strong>${filtered.length}</strong> zadań dla: ${categoryName}`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🔍</div>
        <div class="empty-title">Brak wyników wyszukiwania</div>
        <p>Spróbuj zmienić zapytanie lub wyczyść aktywne filtry.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(item => {
    const catMeta = CATEGORIES[item.category] || { short: item.category, badgeClass: 'cat-badge-e14' };
    
    // Paths
    const primaryPdf = item.mainPdf ? `${item.folder}/${item.mainPdf}` : null;
    const primaryZip = item.mainZip ? `${item.folder}/${item.mainZip}` : null;
    const canDirectOpen = !!item.mainHtml;

    return `
      <div class="exam-row" data-id="${item.id}">
        <div class="exam-info">
          <span class="cat-badge ${catMeta.badgeClass}">${catMeta.short}</span>
          <div class="exam-title-wrapper">
            <span class="exam-name">${escapeHtml(item.name)}</span>
            ${item.title ? `<span class="exam-subtitle">— ${escapeHtml(item.title)}</span>` : ''}
          </div>
        </div>

        <div class="exam-actions">
          ${canDirectOpen ? `
            <a href="${item.folder}/${item.mainHtml}" target="_blank" class="btn btn-open" title="Uruchom stronę HTML w nowej karcie">
              🚀 Uruchom
            </a>
          ` : ''}
          <button class="btn btn-code ${!canDirectOpen ? 'btn-primary-code' : ''}" onclick="openCodeModal('${item.id}')" title="Przeglądaj kod, kwerendy i rozwiązanie">
            👁️ Rozwiązanie
          </button>
          ${primaryPdf ? `<a href="${primaryPdf}" class="btn btn-pdf" target="_blank" title="Otwórz oficjalny arkusz PDF">📄 PDF</a>` : ''}
          ${primaryZip ? `<a href="${primaryZip}" class="btn btn-zip" download title="Pobierz paczkę ZIP (.zip)">📥 ZIP</a>` : ''}
        </div>
      </div>
    `;
  }).join('');
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Handling Open Project button
window.handleOpenProject = function(examId) {
  const exam = examData.find(e => e.id === examId);
  if (!exam) return;

  // If exam has a direct HTML file, open it directly in new tab
  if (exam.mainHtml) {
    const targetUrl = `${exam.folder}/${exam.mainHtml}`;
    window.open(targetUrl, '_blank');
    return;
  }

  // If exam is PHP/SQL based, show the helpful explanation modal
  showExplainModal(exam);
};

function showExplainModal(exam) {
  const modal = document.getElementById('explain-modal');
  const folderName = exam.folder.split('/').pop();
  const phpFile = exam.mainPhp ? exam.mainPhp.split('/').pop() : 'index.php';

  document.getElementById('explain-title').textContent = `${exam.name} — Jak uruchomić?`;
  document.getElementById('explain-task-name').textContent = `Zadanie "${exam.title || exam.name}" zawiera skrypt PHP i bazę danych MySQL.`;
  document.getElementById('explain-localhost-url').textContent = `http://localhost/${folderName}/${phpFile}`;

  // View code button
  document.getElementById('explain-view-code-btn').onclick = () => {
    closeExplainModal();
    openCodeModal(exam.id);
  };

  // Download zip button
  const zipBtn = document.getElementById('explain-download-zip-btn');
  if (exam.mainZip) {
    zipBtn.href = `${exam.folder}/${exam.mainZip}`;
    zipBtn.classList.remove('hidden');
  } else {
    zipBtn.classList.add('hidden');
  }

  // Force open button
  const forceBtn = document.getElementById('explain-force-open-btn');
  if (exam.mainPhp) {
    forceBtn.href = `${exam.folder}/${exam.mainPhp}`;
    forceBtn.classList.remove('hidden');
  } else {
    forceBtn.classList.add('hidden');
  }

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
}

function closeExplainModal() {
  const modal = document.getElementById('explain-modal');
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
}

// Code & Solution Modal Logic
window.openCodeModal = function(examId, preferredTab = null) {
  const exam = examData.find(e => e.id === examId);
  if (!exam) return;

  currentModalExam = exam;
  const modal = document.getElementById('code-modal');
  const catMeta = CATEGORIES[exam.category] || { short: exam.category };
  
  document.getElementById('modal-category-badge').textContent = catMeta.short;
  document.getElementById('modal-title').textContent = exam.name;

  // Set modal download ZIP button
  const modalZipBtn = document.getElementById('download-zip-modal-btn');
  if (exam.mainZip) {
    modalZipBtn.href = `${exam.folder}/${exam.mainZip}`;
    modalZipBtn.classList.remove('hidden');
  } else {
    modalZipBtn.classList.add('hidden');
  }

  // Build File Tabs
  const tabs = [];
  tabs.push({ file: 'README.md', type: 'readme', label: '📖 Opis & Instrukcja', special: true });

  if (exam.phps) exam.phps.forEach(f => tabs.push({ file: f, type: 'php', label: f.split('/').pop() }));
  if (exam.sqls) exam.sqls.forEach(f => tabs.push({ file: f, type: 'sql', label: f.split('/').pop() }));
  if (exam.htmls) exam.htmls.forEach(f => tabs.push({ file: f, type: 'html', label: f.split('/').pop() }));
  if (exam.txts) exam.txts.forEach(f => tabs.push({ file: f, type: 'txt', label: f.split('/').pop() }));
  if (exam.scripts) exam.scripts.forEach(f => tabs.push({ file: f, type: 'code', label: f.split('/').pop() }));

  const tabsContainer = document.getElementById('modal-files-tabs');
  tabsContainer.innerHTML = tabs.map((t, idx) => {
    const isSpecial = t.special ? 'special-tab' : '';
    const isActive = idx === 0 ? 'active' : '';
    return `<button class="file-tab-btn ${isSpecial} ${isActive}" onclick="selectModalFile('${escapeQuotes(t.file)}', '${t.type}')">${escapeHtml(t.label)}</button>`;
  }).join('');

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');

  if (tabs.length > 0) {
    selectModalFile(tabs[0].file, tabs[0].type);
  }
};

function escapeQuotes(str) {
  return (str || '').replace(/'/g, "\\'");
}

window.selectModalFile = function(relFilePath, fileType) {
  if (!currentModalExam) return;

  // Update tabs active state
  document.querySelectorAll('#modal-files-tabs .file-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.includes(relFilePath.split('/').pop()) || (relFilePath === 'README.md' && btn.textContent.includes('Opis & Instrukcja')));
  });

  currentModalFile = relFilePath;
  const fullPath = `${currentModalExam.folder}/${relFilePath}`;
  const ext = relFilePath.split('.').pop().toLowerCase();

  const readmeView = document.getElementById('modal-readme-view');
  const codeView = document.getElementById('code-container');
  const downloadFileBtn = document.getElementById('download-file-btn');
  const openTabBtn = document.getElementById('open-tab-btn');
  const banner = document.getElementById('modal-info-banner');

  downloadFileBtn.href = fullPath;
  downloadFileBtn.setAttribute('download', relFilePath.split('/').pop());

  // Show/Hide open in tab button
  if (['html', 'htm'].includes(ext)) {
    openTabBtn.href = fullPath;
    openTabBtn.classList.remove('hidden');
  } else {
    openTabBtn.classList.add('hidden');
  }

  // Handle README.md tab (Opis & Instrukcja)
  if (fileType === 'readme' || relFilePath === 'README.md') {
    codeView.classList.add('hidden');
    readmeView.classList.remove('hidden');
    banner.classList.add('hidden');

    readmeView.innerHTML = formatExamDetails(currentModalExam);
    rawFileContent = currentModalExam.readmeContent || currentModalExam.description || '';
    return;
  }

  // Handle Code files
  readmeView.classList.add('hidden');
  codeView.classList.remove('hidden');
  if (banner) banner.classList.add('hidden');

  const codeContentEl = document.getElementById('modal-code-content');

  // Check if content is pre-embedded (instant offline load)
  if (currentModalExam.fileContents) {
    const filename = relFilePath.split('/').pop();
    const matchedKey = Object.keys(currentModalExam.fileContents).find(k => k === relFilePath || k.endsWith(filename) || relFilePath.endsWith(k));
    const cachedContent = matchedKey ? currentModalExam.fileContents[matchedKey] : null;

    if (typeof cachedContent === 'string' && cachedContent.length > 0) {
      rawFileContent = cachedContent;
      codeContentEl.innerHTML = highlightSyntax(cachedContent, ext);
      return;
    }
  }

  codeContentEl.textContent = 'Ładowanie zawartości pliku...';

  fetch(`/api/source?file=${encodeURIComponent(fullPath)}`)
    .then(res => {
      if (!res.ok) throw new Error('Błąd HTTP ' + res.status);
      return res.json();
    })
    .then(data => {
      rawFileContent = data.content;
      codeContentEl.innerHTML = highlightSyntax(data.content, ext);
    })
    .catch(() => {
      fetch(fullPath)
        .then(res => res.text())
        .then(text => {
          rawFileContent = text;
          codeContentEl.innerHTML = highlightSyntax(text, ext);
        })
        .catch(err => {
          codeContentEl.textContent = `Nie udało się bezpośrednio załadować pliku: ${err.message}\n\nUżyj przycisku "Pobierz plik" powyżej.`;
          rawFileContent = '';
        });
    });
};

function closeModal() {
  const modal = document.getElementById('code-modal');
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  currentModalExam = null;
  currentModalFile = null;
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

// Event Listeners
function setupEventListeners() {
  const searchInput = document.getElementById('search-input');
  const searchClear = document.getElementById('search-clear-btn');

  let debounceTimer = null;
  searchInput.addEventListener('input', (e) => {
    clearTimeout(debounceTimer);
    searchQuery = e.target.value;
    searchClear.classList.toggle('hidden', searchQuery === '');

    debounceTimer = setTimeout(() => {
      renderGrid();
    }, 120);
  });

  searchClear.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    searchClear.classList.add('hidden');
    searchInput.focus();
    renderGrid();
  });

  // Global Keyboard Shortcuts
  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput.focus();
    } else if (e.key === 'Escape') {
      closeModal();
      closeExplainModal();
      closeHelpModal();
    }
  });

  // Category Tabs
  document.querySelectorAll('.cat-tab').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.cat-tab').forEach(b => b.classList.remove('active'));
      const target = e.currentTarget;
      target.classList.add('active');
      activeCategory = target.dataset.category;
      renderGrid();
    });
  });

  // Chip Filters
  document.querySelectorAll('.chip-btn').forEach(chip => {
    chip.addEventListener('click', (e) => {
      const target = e.currentTarget;
      const filterKey = target.dataset.filter;
      if (activeChips.has(filterKey)) {
        activeChips.delete(filterKey);
        target.classList.remove('active');
      } else {
        activeChips.add(filterKey);
        target.classList.add('active');
      }
      renderGrid();
    });
  });

  // Modal Closures
  const modalCloseBtn = document.getElementById('modal-close-btn');
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  const modalBackdrop = document.getElementById('modal-backdrop');
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

  const explainCloseBtn = document.getElementById('explain-close-btn');
  if (explainCloseBtn) explainCloseBtn.addEventListener('click', closeExplainModal);
  const explainBackdrop = document.getElementById('explain-backdrop');
  if (explainBackdrop) explainBackdrop.addEventListener('click', closeExplainModal);

  // Copy Code Button
  const copyCodeBtn = document.getElementById('copy-code-btn');
  if (copyCodeBtn) {
    copyCodeBtn.addEventListener('click', () => {
      if (!rawFileContent) return;
      navigator.clipboard.writeText(rawFileContent).then(() => {
        showToast('📋 Skopiowano do schowka!');
      }).catch(() => {
        showToast('⚠️ Nie udało się skopiować.');
      });
    });
  }

  // Help Modal
  const helpModal = document.getElementById('help-modal');
  const helpBtn = document.getElementById('help-btn');
  if (helpBtn && helpModal) {
    helpBtn.addEventListener('click', () => {
      helpModal.classList.add('active');
      helpModal.setAttribute('aria-hidden', 'false');
    });
  }

  const helpCloseBtn = document.getElementById('help-close-btn');
  if (helpCloseBtn) helpCloseBtn.addEventListener('click', closeHelpModal);
  const helpModalBackdrop = document.getElementById('help-modal-backdrop');
  if (helpModalBackdrop) helpModalBackdrop.addEventListener('click', closeHelpModal);
}

function closeHelpModal() {
  const helpModal = document.getElementById('help-modal');
  if (helpModal) {
    helpModal.classList.remove('active');
    helpModal.setAttribute('aria-hidden', 'true');
  }
}

// Start on DOM ready
document.addEventListener('DOMContentLoaded', init);
