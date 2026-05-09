let manifestData = [];
let currentFilter = 'All';

function init() {
    const basePath = "C:\\Users\\kamil\\Desktop\\egzaminy_technikum\\";
    manifestData = EXAM_DATA.map(item => ({
        ...item,
        RelativePath: item.Path.replace(basePath, '').replace(/\\/g, '/')
    }));

    renderList();
    setupEventListeners();
}

function renderList() {
    const grid = document.getElementById('exam-grid');
    const searchVal = document.getElementById('search-input').value.toLowerCase();
    
    const filtered = manifestData.filter(item => {
        const matchesSearch = item.Name.toLowerCase().includes(searchVal) || 
                            item.Category.toLowerCase().includes(searchVal);
        const matchesCategory = currentFilter === 'All' || item.Category === currentFilter;
        return matchesSearch && matchesCategory;
    });

    if (filtered.length === 0) {
        grid.innerHTML = '<div style="padding: 2rem; color: #666; text-align: center;">Nie znaleziono zadań dla tej frazy.</div>';
        return;
    }

    grid.innerHTML = filtered.map(item => {
        const categoryShort = item.Category.replace('Kwalifikacja_', '').replace('_', '.');
        const cardTitle = item.Name.replace(/_/g, ' ');
        
        return `
            <div class="card">
                <div class="card-info">
                    <div class="card-category">${categoryShort}</div>
                    <div class="card-title">${cardTitle}</div>
                </div>
                <div class="card-actions">
                    ${item.Archive ? `
                        <a href="${item.RelativePath}/${item.Archive}" class="btn btn-primary" download>
                            📥 Pobierz Wszystko (.zip)
                        </a>
                    ` : ''}
                    
                    ${item.Pdf ? `
                        <a href="${item.RelativePath}/${item.Pdf}" class="btn btn-secondary" target="_blank">
                            📄 Treść (PDF)
                        </a>
                    ` : ''}

                    ${item.Html ? `
                        <a href="${item.RelativePath}/${item.Html}" class="btn btn-secondary" target="_blank" onclick="return checkPhp('${item.Html}')">
                            🚀 Uruchom
                        </a>
                    ` : ''}
                </div>
            </div>
        `;
    }).join('');
}

function checkPhp(filename) {
    if (filename.endsWith('.php') && window.location.protocol === 'file:') {
        alert("💡 Przypomnienie: Pliki PHP wymagają serwera (np. XAMPP).");
    }
    return true;
}

function setupEventListeners() {
    document.getElementById('search-input').addEventListener('input', renderList);
    
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentFilter = e.target.dataset.category;
            renderList();
        });
    });
}

document.addEventListener('DOMContentLoaded', init);
