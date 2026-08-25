const fs = require('fs');
const path = require('path');

const TOPIC_DETAILS = {
  'lowiska': {
    title: 'Portal Wędkarski i Baza Łowisk',
    topic: 'Strona internetowa dla wędkarzy z dynamicznym pobieraniem danych o łowiskach, rybach drapieżnych i okresach ochronnych z bazy MySQL.',
    tech: ['HTML5', 'CSS3', 'PHP (mysqli)', 'MySQL']
  },
  'ryby': {
    title: 'Baza Danych Ryb i Zawody Wędkarskie',
    topic: 'Aplikacja prezentująca gatunki ryb, stanowiska wędkarskie oraz wyniki zawodów wędkarskich wraz z kwerendami SQL.',
    tech: ['HTML5', 'CSS3', 'PHP', 'MySQL']
  },
  'rybki': {
    title: 'Atlas Ryb i Wędkowanie',
    topic: 'Witryna prezentująca gatunki ryb z dynamicznym skryptem PHP łączącym się z relacyjną bazą danych.',
    tech: ['HTML5', 'CSS3', 'PHP', 'MySQL']
  },
  'ogloszenia': {
    title: 'Portal Ogłoszeń Drobnych',
    topic: 'Aplikacja portalu ogłoszeniowego z bazą kategorii, użytkowników i ogłoszeń. Skrypt PHP wyświetla ogłoszenia oraz obsługuje formularz dodawania.',
    tech: ['HTML5', 'CSS3', 'PHP (mysqli)', 'MySQL']
  },
  'auta': {
    title: 'Komis Samochodowy i Baza Pojazdów',
    topic: 'Strona komisu samochodowego z wyszukiwarką aut, filtrowaniem po marce, modelu, roczniku i cenie z bazy MySQL.',
    tech: ['HTML5', 'CSS3', 'PHP', 'MySQL']
  },
  'komis': {
    title: 'Baza Danych Komisu Samochodowego',
    topic: 'Projekt relacyjnej bazy danych komisu aut z kwerendami SQL oraz stroną prezentującą dostępne pojazdy.',
    tech: ['HTML5', 'CSS3', 'SQL (MySQL)', 'PHP']
  },
  'pesel': {
    title: 'Walidacja i Baza Danych PESEL',
    topic: 'Aplikacja weryfikująca poprawność numeru PESEL, wyznaczająca płeć i datę urodzenia oraz baza ewidencji ludności.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL']
  },
  'stacja_paliw': {
    title: 'Stacja Paliw i Kalkulator Kosztów',
    topic: 'Aplikacja dla stacji paliw z interaktywnym kalkulatorem kosztów tankowania i obliczaniem zasięgu pojazdu w JavaScript.',
    tech: ['HTML5', 'CSS3', 'JavaScript']
  },
  'obliczenia': {
    title: 'Kalkulator Kosztów Paliwa',
    topic: 'Interaktywny skrypt JavaScript kalkulujący koszt podróży na podstawie spalania, ceny paliwa i liczby kilometrów.',
    tech: ['HTML5', 'CSS3', 'JavaScript']
  },
  'kosmetyczka': {
    title: 'Salon Kosmetyczny i Cennik Zabiegów',
    topic: 'Witryna salonu piękności z podstronami zabiegów oraz skryptem JS wyliczającym łączną cenę wybranych usług kosmetycznych.',
    tech: ['HTML5', 'CSS3', 'JavaScript']
  },
  'twarz': {
    title: 'Kalkulator Usług Kosmetycznych',
    topic: 'Formularz wyboru zabiegów kosmetycznych z natychmiastowym podsumowaniem kosztów w JavaScript.',
    tech: ['HTML5', 'CSS3', 'JavaScript']
  },
  'pogotowie': {
    title: 'Dyspozytornia Pogotowia Ratunkowego',
    topic: 'System rejestracji wyjazdów karetek, zespołów ratowniczych i zgłoszeń medycznych z kwerendami SQL i panelem PHP.',
    tech: ['HTML5', 'CSS3', 'PHP', 'MySQL']
  },
  'prognoza': {
    title: 'Portal Prognozy Pogody (Meteo)',
    topic: 'Strona prezentująca aktualne warunki atmosferyczne, opady, temperaturę i ciśnienie dla miast pobierane z bazy MySQL.',
    tech: ['HTML5', 'CSS3', 'PHP (mysqli)', 'MySQL']
  },
  'organizer': {
    title: 'Miesięczny Organizer Zadań',
    topic: 'Aplikacja kalendarza i organizera zadań z podziałem na dni miesiąca, skryptem PHP pobierającym wpisy i formularzem notatek.',
    tech: ['HTML5', 'CSS3', 'PHP', 'MySQL']
  },
  'zdjecia': {
    title: 'Galeria Biura Podróży i Cennik Wycieczek',
    topic: 'Interaktywna galeria fotografii z miniaturami, powiększaniem zdjęć i dynamicznym cennikiem wycieczek turystycznych.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'PHP']
  },
  'wycieczki': {
    title: 'Oferty Biura Turystycznego',
    topic: 'Strona prezentująca destynacje wakacyjne, cenniki i galerie zdjęć z dynamicznym pobieraniem z bazy danych.',
    tech: ['HTML5', 'CSS3', 'PHP', 'MySQL']
  },
  'gielda': {
    title: 'Portal Notowań Giełdowych i Walut',
    topic: 'Aplikacja finansowa prezentująca kursy walut, spółek giełdowych z kalkulatorem przewalutowania w JavaScript/PHP.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'PHP']
  },
  'przychodnia': {
    title: 'Baza Danych Przychodni Lekarskiej',
    topic: 'System ewidencji pacjentów, lekarzy i wizyt lekarskich z zaawansowanymi kwerendami SQL łączącymi tabele relacyjne.',
    tech: ['SQL (MySQL)', 'HTML5', 'CSS3']
  },
  'zwierzeta': {
    title: 'Baza Danych Schroniska i Lecznicy Zwierząt',
    topic: 'Baza danych zwierząt, szczepień i właścicieli z kwerendami filtrującymi stan zdrowia i terminy wizyt.',
    tech: ['SQL (MySQL)', 'HTML5', 'CSS3']
  },
  'hurtownia': {
    title: 'System Magazynowy Hurtowni',
    topic: 'Aplikacja hurtowni z bazą produktów, stanów magazynowych, producentów i skryptem PHP generującym podsumowania.',
    tech: ['HTML5', 'CSS3', 'PHP', 'MySQL']
  },
  'szkola': {
    title: 'Baza Danych Uczniów i Ocen',
    topic: 'Relacyjna baza danych szkoły z kwerendami SQL obliczającymi średnie ocen, filtrującymi klasy i przedmioty.',
    tech: ['SQL (MySQL)', 'HTML5', 'CSS3']
  },
  'biblioteka': {
    title: 'Baza Czytelników i Wypożyczeń Książek',
    topic: 'System biblioteczny z ewidencją księgozbioru, autorów, czytelników i kwerendami SQL monitorującymi wypożyczenia.',
    tech: ['SQL (MySQL)', 'HTML5', 'CSS3']
  },
  'wesela': {
    title: 'Kalkulator Kosztów Przyjęcia Weselnego',
    topic: 'Formularz wyceny organizacji imprezy okolicznościowej z wyborem liczby gości, opcji poprawin i obliczeniami w JS.',
    tech: ['HTML5', 'CSS3', 'JavaScript']
  },
  'adres': {
    title: 'Formularz Adresowy i Rejestracja',
    topic: 'Formularz walidacji danych adresowych z dynamicznym sprawdzaniem formatu kodu pocztowego i e-maila w JavaScript.',
    tech: ['HTML5', 'CSS3', 'JavaScript']
  },
  'ciag': {
    title: 'Generator Ciągów Liczbowych',
    topic: 'Aplikacja generująca wyrazy ciągu arytmetycznego lub geometrycznego z walidacją danych wejściowych w JavaScript.',
    tech: ['HTML5', 'CSS3', 'JavaScript']
  },
  'fib': {
    title: 'Generator Ciągu Fibonacciego',
    topic: 'Skrypt obliczający i wypisujący kolejne wyrazy ciągu Fibonacciego z dynamiczną obsługą zdarzeń formularza w JS.',
    tech: ['HTML5', 'CSS3', 'JavaScript']
  },
  'liczenie': {
    title: 'Aplikacja Matematyczna i Działania',
    topic: 'Kalkulator podstawowych działań matematycznych (dodawanie, odejmowanie, mnożenie, dzielenie, potęgowanie) w JS.',
    tech: ['HTML5', 'CSS3', 'JavaScript']
  },
  'koty': {
    title: 'Strona Hodowli i Ras Kotów',
    topic: 'Responsywna witryna z podstronami ras kotów, opisem pielęgnacji, galerią zdjęć i formularzem kontaktowym.',
    tech: ['HTML5', 'CSS3']
  },
  'JS_Zadania': {
    title: 'Zestaw 16 Zadań Praktycznych JavaScript',
    topic: 'Komplet 16 mini-projektów egzaminacyjnych w czystym JavaScript: operacje na DOM, tablice, walidacja formularzy, kalkulatory i animacje.',
    tech: ['HTML5', 'CSS3', 'JavaScript']
  },
  'Arkusz_3': {
    title: 'Kompleksowy Arkusz Praktyczny (Strona z Nagrodami)',
    topic: 'Pełne rozwiązanie arkusza egzaminacyjnego: struktura HTML podstron, menu nawigacyjne, arkusz stylów CSS oraz skrypt JS.',
    tech: ['HTML5', 'CSS3', 'JavaScript']
  }
};

const JS_EXERCISE_DETAILS = {
  'JS1+.html': { name: 'JS Zadanie 01 — Dodawanie liczb (A + B)', topic: 'Kalkulator dodawania dwóch liczb wprowadzanych w polach tekstowych z obsługą pustych pól.', tech: ['HTML5', 'CSS3', 'JavaScript'] },
  'JS2+.html': { name: 'JS Zadanie 02 — Pole i obwód kwadratu', topic: 'Skrypt obliczający pole powierzchni i obwód kwadratu na podstawie długości boku z walidacją liczb.', tech: ['HTML5', 'CSS3', 'JavaScript'] },
  'JS3+.html': { name: 'JS Zadanie 03 — Przelicznik Celsjusza na Kelwiny', topic: 'Aplikacja konwertująca temperaturę w stopniach Celsjusza na skalę bezwzględną Kelwina (T + 273.15).', tech: ['HTML5', 'CSS3', 'JavaScript'] },
  'JS4.html': { name: 'JS Zadanie 04 — Walidator siły hasła', topic: 'Skrypt weryfikujący bezpieczeństwo hasła poprzez sprawdzanie występowania co najmniej jednej cyfry.', tech: ['HTML5', 'CSS3', 'JavaScript'] },
  'JS5+.html': { name: 'JS Zadanie 05 — Powierzchnia pokoju i ścian', topic: 'Kalkulator metrażu podłogi oraz łącznej powierzchni ścian pomieszczenia o wysokości 2.7m.', tech: ['HTML5', 'CSS3', 'JavaScript'] },
  'JS6+.html': { name: 'JS Zadanie 06 — Koszt malowania powierzchni', topic: 'Wycena malowania w zależności od wybranego wariantu (standard 70 zł/m² lub premium 80 zł/m²).', tech: ['HTML5', 'CSS3', 'JavaScript'] },
  'JS7+.html': { name: 'JS Zadanie 07 — Koszt remontu i kafelkowania', topic: 'Obliczanie całkowitego kosztu remontu mieszkania z uwzględnieniem liczby pokoi i opcji kafelkowania.', tech: ['HTML5', 'CSS3', 'JavaScript'] },
  'JS8+.html': { name: 'JS Zadanie 08 — Naliczanie rabatów i upustów', topic: 'Skrypt wyliczający rabat handlowy na podstawie zamawianego wolumenu towaru i opcji stałego klienta.', tech: ['HTML5', 'CSS3', 'JavaScript'] },
  'js9_idk.html': { name: 'JS Zadanie 09 — Zliczanie głosów kandydatów', topic: 'Aplikacja podliczająca głosy oddane na trzech kandydatów z automatyczną sumą i walidacją pól.', tech: ['HTML5', 'CSS3', 'JavaScript'] },
  'js10_idk.html': { name: 'JS Zadanie 10 — Wybory i procentowe poparcie', topic: 'Kalkulator procentowego udziału głosów wyborczych dla poszczególnych kandydatów.', tech: ['HTML5', 'CSS3', 'JavaScript'] },
  'JS11+.html': { name: 'JS Zadanie 11 — Koszt wesela i poprawin', topic: 'Wycena przyjęcia okolicznościowego: 100 zł/osobę oraz opcjonalne poprawiny (+30% kosztów).', tech: ['HTML5', 'CSS3', 'JavaScript'] },
  'JS12+.html': { name: 'JS Zadanie 12 — Kalkulator kosztu transportu', topic: 'Wyliczenie kosztu przewozu: stawka bazowa za kilometr oraz dopłata za teren górzysty.', tech: ['HTML5', 'CSS3', 'JavaScript'] },
  'JS13+.html': { name: 'JS Zadanie 13 — Dynamiczna zmiana kolorów tła', topic: 'Interaktywna manipulacja stylami CSS i klasami DOM po kliknięciu przycisków kolorów.', tech: ['HTML5', 'CSS3', 'JavaScript'] },
  'JS14+.html': { name: 'JS Zadanie 14 — Cennik przesyłek kurierskich', topic: 'Kalkulacja ceny wysyłki paczki w zależności od wybranego gabarytu i wagi w kilogramach.', tech: ['HTML5', 'CSS3', 'JavaScript'] },
  'JS15+.html': { name: 'JS Zadanie 15 — Rezerwacja usług fryzjerskich', topic: 'Formularz rezerwacji zabiegu pielęgnacyjnego z dynamiczną informacją o terminie i cenie.', tech: ['HTML5', 'CSS3', 'JavaScript'] },
  'JS16+.html': { name: 'JS Zadanie 16 — Formularz kontaktowy i zgłoszeniowy', topic: 'Formularz zgłoszeniowy z formatowaniem danych osobowych i potwierdzeniem wysłania w DOM.', tech: ['HTML5', 'CSS3', 'JavaScript'] }
};

function getTopicInfo(folderName, relPath, files) {
  const combined = (folderName + ' ' + relPath + ' ' + files.join(' ')).toLowerCase();
  
  for (const [key, info] of Object.entries(TOPIC_DETAILS)) {
    if (combined.includes(key.toLowerCase())) {
      return info;
    }
  }

  const hasPhp = files.some(f => f.endsWith('.php'));
  const hasSql = files.some(f => f.endsWith('.sql'));
  const hasHtml = files.some(f => f.endsWith('.html') || f.endsWith('.htm'));
  const hasJs = files.some(f => f.endsWith('.js'));

  const tech = [];
  if (hasHtml) tech.push('HTML5');
  tech.push('CSS3');
  if (hasJs) tech.push('JavaScript');
  if (hasPhp) tech.push('PHP (mysqli)');
  if (hasSql) tech.push('MySQL');

  let title = folderName.replace(/_/g, ' ').replace(/-/g, ' ');
  let topic = 'Zadanie praktyczne z przygotowania do egzaminu zawodowego obejmujące tworzenie aplikacji internetowej, arkusza stylów CSS oraz relacyjnej bazy danych.';

  return { title, topic, tech };
}

function scanDir(dir) {
  if (!fs.existsSync(dir)) return { files: [], subdirs: [] };
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return {
    files: entries.filter(e => e.isFile()).map(e => e.name),
    subdirs: entries.filter(e => e.isDirectory()).map(e => e.name)
  };
}

function getAllFilesRec(dir, baseRel = '') {
  let files = [];
  if (!fs.existsSync(dir)) return files;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const ent of entries) {
    const rel = baseRel ? baseRel + '/' + ent.name : ent.name;
    const full = path.join(dir, ent.name);
    if (ent.isFile()) {
      files.push({ name: ent.name, relPath: rel.replace(/\\/g, '/'), full });
    } else if (ent.isDirectory()) {
      files = files.concat(getAllFilesRec(full, rel));
    }
  }
  return files;
}

function cleanExamTitle(category, dirName, subName) {
  const p = dirName.replace(/_/g, ' ').replace(/-/g, ' ').trim();
  if (!subName) return p;
  
  // Format CKE code like E.14-01-16.01 or EE.09-01-19.06
  const e14Match = subName.match(/e\.?14[-_](\d+)[-_](\d+)[_.](\d+)/i);
  if (e14Match) {
    return `${p} — E.14-${e14Match[1]}-${e14Match[2]}.${e14Match[3]}`;
  }

  const ee09Match = subName.match(/ee\.?09[-_](\d+)[-_](\d+)[_.](\d+)/i);
  if (ee09Match) {
    return `${p} — EE.09-${ee09Match[1]}-${ee09Match[2]}.${ee09Match[3]}`;
  }

  const s = subName.replace(/_/g, ' ').replace(/-/g, ' ').trim();
  const pNorm = p.toLowerCase().replace(/[^a-z0-9]/g, '');
  const sNorm = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  if (pNorm === sNorm || pNorm.includes(sNorm) || sNorm.includes(pNorm)) {
    return s.length > p.length ? s : p;
  }
  return `${p} — ${s}`;
}

const categories = [
  { id: 'Kwalifikacja_E14', label: 'E.14' },
  { id: 'Kwalifikacja_EE09', label: 'EE.09' },
  { id: 'Cwiczenia_i_Zadania', label: 'Ćwiczenia i Zadania' }
];

const examList = [];

// 1. Scan Standard Categories
for (const cat of categories) {
  if (!fs.existsSync(cat.id)) continue;
  const { subdirs } = scanDir(cat.id);
  for (const dirName of subdirs) {
    const mainFolder = path.join(cat.id, dirName);
    const { subdirs: innerSubdirs, files: topFiles } = scanDir(mainFolder);
    
    // Ignore internal asset folders
    const examSubdirs = innerSubdirs.filter(s => !['css', 'scss', 'img', 'images', 'witryna', 'site', 'baza', 'kw', 'baza2', 'zad1', 'zad2', 'zad3', 'zad5', 'komis', 'materialy5-6'].includes(s.toLowerCase()));
    const hasTopExamFiles = topFiles.some(f => f.match(/\.(php|html|pdf|sql)$/i));
    
    if (examSubdirs.length > 0) {
      if (hasTopExamFiles) {
        const allFiles = getAllFilesRec(mainFolder);
        examList.push(buildExam(cat.id, cleanExamTitle(cat.id, dirName), mainFolder, allFiles));
      }
      for (const sub of examSubdirs) {
        const subFolder = path.join(mainFolder, sub);
        const { subdirs: deepSubdirs } = scanDir(subFolder);
        const deepExamDirs = deepSubdirs.filter(s => !['css', 'scss', 'img', 'images', 'witryna', 'site', 'baza', 'kw', 'baza2', 'zad1', 'zad2', 'zad3', 'zad5', 'komis'].includes(s.toLowerCase()));

        if (deepExamDirs.length > 0) {
          // Use the deep folder with actual code
          for (const deep of deepExamDirs) {
            const deepFolder = path.join(subFolder, deep);
            const deepAllFiles = getAllFilesRec(deepFolder);
            // Also include any PDF from parent if not in deep
            const parentFiles = getAllFilesRec(subFolder);
            const parentPdfs = parentFiles.filter(f => f.name.endsWith('.pdf'));
            parentPdfs.forEach(p => {
              if (!deepAllFiles.some(d => d.name === p.name)) {
                deepAllFiles.push(p);
              }
            });
            examList.push(buildExam(cat.id, cleanExamTitle(cat.id, dirName, `${sub} ${deep}`), deepFolder, deepAllFiles));
          }
        } else {
          const allFiles = getAllFilesRec(subFolder);
          examList.push(buildExam(cat.id, cleanExamTitle(cat.id, dirName, sub), subFolder, allFiles));
        }
      }
    } else {
      const allFiles = getAllFilesRec(mainFolder);
      examList.push(buildExam(cat.id, cleanExamTitle(cat.id, dirName), mainFolder, allFiles));
    }
  }
}

// 2. Expand individual JS exercises from JS_Zadania so all 16 are directly listed
const jsDir = 'Cwiczenia_i_Zadania/JS_Zadania';
if (fs.existsSync(jsDir)) {
  const jsFiles = fs.readdirSync(jsDir).filter(f => f.endsWith('.html'));
  for (const jsFile of jsFiles) {
    const details = JS_EXERCISE_DETAILS[jsFile] || {
      name: `JS Ćwiczenie ${jsFile.replace('.html', '')}`,
      topic: 'Zadanie ćwiczeniowe w języku JavaScript.',
      tech: ['HTML5', 'CSS3', 'JavaScript']
    };

    const filePath = `Cwiczenia_i_Zadania/JS_Zadania/${jsFile}`;
    const pdfPath = 'Cwiczenia_i_Zadania/JS_Zadania/js_-_zadania_egzaminacyjne.pdf';
    const zipPath = 'Cwiczenia_i_Zadania/JS_Zadania/paczka_zadania.zip';

    let jsContent = '';
    try {
      jsContent = fs.readFileSync(filePath, 'utf8');
    } catch(e) {}

    const fileContents = {};
    fileContents[jsFile] = jsContent;

    examList.push({
      id: `cw_js_${jsFile.replace(/[^a-zA-Z0-9]/g, '_')}`,
      category: 'Cwiczenia_i_Zadania',
      name: details.name,
      title: details.name,
      description: details.topic,
      technologies: details.tech,
      folder: 'Cwiczenia_i_Zadania/JS_Zadania',
      mainPdf: fs.existsSync(pdfPath) ? 'js_-_zadania_egzaminacyjne.pdf' : null,
      mainHtml: jsFile,
      mainPhp: null,
      mainSql: null,
      mainZip: 'paczka_zadania.zip',
      hasReadme: true,
      readmeContent: `# ${details.name}\n\n${details.topic}\n\nPlik źródłowy: \`${jsFile}\``,
      pdfs: ['js_-_zadania_egzaminacyjne.pdf'],
      htmls: [jsFile],
      phps: [],
      sqls: [],
      zips: ['paczka_zadania.zip'],
      txts: [],
      scripts: [jsFile],
      allFiles: [jsFile, 'js_-_zadania_egzaminacyjne.pdf'],
      fileContents
    });
  }
}

function buildExam(category, displayName, folderPath, allFiles) {
  const relPath = folderPath.replace(/\\/g, '/');
  const fileNames = allFiles.map(f => f.name);
  const topicInfo = getTopicInfo(displayName, relPath, fileNames);

  // Pre-load file contents and filter out empty / placeholder files
  const fileContents = {};
  for (const f of allFiles) {
    if (f.name.match(/\.(php|html|htm|sql|css|js|txt|md)$/i) && !f.name.match(/\.(zip|rar|7z|png|jpg|jpeg|gif|pdf)$/i)) {
      try {
        const content = fs.readFileSync(f.full, 'utf8');
        // Filter out empty 0-byte or 1-line dummy placeholder files
        if (f.name.endsWith('.sql') && content.trim().length < 25) {
          continue;
        }
        fileContents[f.relPath] = content;
      } catch(e) {}
    }
  }

  const pdfs = allFiles.filter(f => f.name.match(/\.pdf$/i)).map(f => f.relPath);
  const htmls = allFiles.filter(f => f.name.match(/\.(html|htm)$/i)).map(f => f.relPath);
  const phps = allFiles.filter(f => f.name.match(/\.php$/i)).map(f => f.relPath);
  const sqls = allFiles.filter(f => f.name.match(/\.sql$/i) && fileContents[f.relPath]).map(f => f.relPath);
  const zips = allFiles.filter(f => f.name.match(/\.(zip|rar|7z)$/i)).map(f => f.relPath);
  const txts = allFiles.filter(f => f.name.match(/\.txt$/i) && !f.name.toLowerCase().includes('readme') && fileContents[f.relPath]).map(f => f.relPath);
  const scripts = allFiles.filter(f => f.name.match(/\.(js|css)$/i)).map(f => f.relPath);
  
  // Read README content if exists
  let readmeContent = '';
  const readmeFilePath = path.join(folderPath, 'README.md');
  if (fs.existsSync(readmeFilePath)) {
    readmeContent = fs.readFileSync(readmeFilePath, 'utf8');
  }

  // Primary package zip (paczka_zadania.zip or first existing zip)
  let packageZip = 'paczka_zadania.zip';
  if (!fs.existsSync(path.join(folderPath, packageZip))) {
    packageZip = zips.length > 0 ? zips[0] : null;
  }

  return {
    id: relPath.replace(/[^a-zA-Z0-9_-]/g, '_'),
    category,
    name: displayName,
    title: topicInfo.title,
    description: topicInfo.topic,
    technologies: topicInfo.tech,
    folder: relPath,
    mainPdf: pdfs.length > 0 ? pdfs[0] : null,
    mainHtml: htmls.length > 0 ? htmls[0] : null,
    mainPhp: phps.length > 0 ? phps[0] : null,
    mainSql: sqls.length > 0 ? sqls[0] : null,
    mainZip: packageZip,
    hasReadme: fs.existsSync(readmeFilePath),
    readmeContent,
    pdfs,
    htmls,
    phps,
    sqls,
    zips,
    txts,
    scripts,
    allFiles: allFiles.map(f => f.relPath),
    fileContents
  };
}

// Write manifest.json
fs.writeFileSync('manifest.json', JSON.stringify(examList, null, 2), 'utf8');

// Write data.js
const dataJsContent = `// Automatycznie wygenerowany indeks zadan i plikow egzaminacyjnych
const EXAM_DATA = ${JSON.stringify(examList, null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = EXAM_DATA;
}
`;
fs.writeFileSync('data.js', dataJsContent, 'utf8');

console.log(`Zindeksowano pomyślnie ${examList.length} zadań egzaminacyjnych.`);

