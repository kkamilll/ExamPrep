const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Descriptions mapping by keyword / folder
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

function getTopicInfo(folderName, relPath, files) {
  const combined = (folderName + ' ' + relPath + ' ' + files.join(' ')).toLowerCase();
  
  for (const [key, info] of Object.entries(TOPIC_DETAILS)) {
    if (combined.includes(key.toLowerCase())) {
      return info;
    }
  }

  // Fallback generic info based on files
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

const categories = [
  { id: 'Kwalifikacja_E14', label: 'E.14 (Tworzenie aplikacji internetowych i baz danych)' },
  { id: 'Kwalifikacja_EE09', label: 'EE.09 (Programowanie i administrowanie stronami oraz bazami)' },
  { id: 'Cwiczenia_i_Zadania', label: 'Ćwiczenia i Zadania (INF.03 / E.14 / EE.09)' }
];

let generatedCount = 0;

for (const cat of categories) {
  if (!fs.existsSync(cat.id)) continue;
  const topDirs = fs.readdirSync(cat.id, { withFileTypes: true }).filter(d => d.isDirectory());
  
  for (const td of topDirs) {
    const topPath = path.join(cat.id, td.name);
    const subEntries = fs.readdirSync(topPath, { withFileTypes: true });
    const subDirs = subEntries.filter(s => s.isDirectory() && !['css', 'scss', 'img', 'images', 'witryna', 'site', 'baza'].includes(s.name.toLowerCase()));
    const topFiles = subEntries.filter(s => s.isFile());
    const hasTopCode = topFiles.some(f => f.name.match(/\.(php|html|pdf|sql)$/i));

    if (subDirs.length > 0) {
      if (hasTopCode) {
        processExamFolder(cat, td.name, topPath);
      }
      for (const sd of subDirs) {
        const subPath = path.join(topPath, sd.name);
        processExamFolder(cat, `${td.name} - ${sd.name}`, subPath);
      }
    } else {
      processExamFolder(cat, td.name, topPath);
    }
  }
}

function processExamFolder(cat, displayName, folderPath) {
  const allFiles = getAllFilesRec(folderPath);
  const fileNames = allFiles.map(f => f.name);
  const folderRel = folderPath.replace(/\\/g, '/');
  
  const topicInfo = getTopicInfo(displayName, folderRel, fileNames);
  
  const pdfs = allFiles.filter(f => f.name.match(/\.pdf$/i)).map(f => f.relPath);
  const htmls = allFiles.filter(f => f.name.match(/\.(html|htm)$/i)).map(f => f.relPath);
  const phps = allFiles.filter(f => f.name.match(/\.php$/i)).map(f => f.relPath);
  const sqls = allFiles.filter(f => f.name.match(/\.sql$/i)).map(f => f.relPath);
  const txts = allFiles.filter(f => f.name.match(/\.txt$/i) && !f.name.toLowerCase().includes('readme')).map(f => f.relPath);
  const cssList = allFiles.filter(f => f.name.match(/\.css$/i)).map(f => f.relPath);
  const jsList = allFiles.filter(f => f.name.match(/\.js$/i)).map(f => f.relPath);

  // Generate README.md content
  const hasPhp = phps.length > 0;
  const hasSql = sqls.length > 0;
  const hasHtml = htmls.length > 0;

  const filesListMd = [];
  if (pdfs.length) filesListMd.push(`- 📄 **Arkusz PDF:** \`${pdfs.join('`, `')}\``);
  if (htmls.length) filesListMd.push(`- 🌐 **Pliki HTML:** \`${htmls.join('`, `')}\``);
  if (phps.length) filesListMd.push(`- 🐘 **Skrypty PHP:** \`${phps.join('`, `')}\``);
  if (sqls.length) filesListMd.push(`- 💾 **Baza / Kwerendy SQL:** \`${sqls.join('`, `')}\``);
  if (txts.length) filesListMd.push(`- 📝 **Pliki tekstowe / Kwerendy:** \`${txts.join('`, `')}\``);
  if (cssList.length) filesListMd.push(`- 🎨 **Style CSS:** \`${cssList.join('`, `')}\``);
  if (jsList.length) filesListMd.push(`- ⚡ **Skrypty JS:** \`${jsList.join('`, `')}\``);

  const instructionsMd = [];
  instructionsMd.push('1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.');
  
  if (hasSql) {
    instructionsMd.push(`2. **Import bazy danych:**
   - Uruchom lokalny serwer MySQL (np. w panelu XAMPP).
   - Otwórz w przeglądarce \`http://localhost/phpmyadmin\`.
   - Utwórz nową bazę danych i zaimportuj plik SQL (${sqls.map(s => `\`${path.basename(s)}\``).join(', ')}).`);
  }

  if (hasPhp) {
    instructionsMd.push(`3. **Uruchomienie PHP:**
   - Skopiuj ten rozpakowany folder do katalogu \`C:\\xampp\\htdocs\\${path.basename(folderPath)}\`.
   - Uruchom moduł **Apache** w XAMPP.
   - Otwórz w przeglądarce adres: \`http://localhost/${path.basename(folderPath)}/${path.basename(phps[0])}\`.`);
  } else if (hasHtml) {
    instructionsMd.push(`2. **Uruchomienie strony WWW:**
   - Kliknij dwukrotnie plik \`${path.basename(htmls[0])}\` lub przeciągnij go do dowolnej przeglądarki.`);
  }

  const readmeContent = `# 📌 ${displayName} (${cat.label})

> **Temat zadania:** ${topicInfo.title}  
> **Kwalifikacja:** ${cat.label}  
> **Technologie:** ${topicInfo.tech.join(', ')}

---

## 📖 Opis zadania i co zostało zrobione

${topicInfo.topic}

### Główne elementy rozwiązania:
${hasHtml ? '- Opracowanie semantycznej struktury strony w standardzie HTML5.\n' : ''}${cssList.length ? '- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n' : ''}${hasSql ? '- Utworzenie tabel, relacji oraz przygotowanie poprawnych kwerend SQL (SELECT, INSERT, UPDATE).\n' : ''}${hasPhp ? '- Oprogramowanie skryptu backendowego w PHP (mysqli) do komunikacji z bazą danych MySQL.\n' : ''}${jsList.length ? '- Implementacja logiki i obsługi zdarzeń po stronie klienta w JavaScript.\n' : ''}
---

## 📁 Pliki w tym zadaniu

${filesListMd.join('\n')}

---

## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)

${instructionsMd.join('\n\n')}

---

*Powodzenia w nauce i na egzaminie zawodowym! 🎓*
`;

  // Write README.md into the folder
  const readmePath = path.join(folderPath, 'README.md');
  fs.writeFileSync(readmePath, readmeContent, 'utf8');

  // Create or refresh paczka_zadania.zip with all files + README.md
  try {
    const zipDest = path.join(folderPath, 'paczka_zadania.zip');
    // List files to add to archive (exclude existing .zip / .rar files to prevent nesting)
    const filesToZip = fs.readdirSync(folderPath).filter(f => !f.endsWith('.zip') && !f.endsWith('.rar'));
    if (filesToZip.length > 0) {
      const quotedFiles = filesToZip.map(f => `"${f}"`).join(' ');
      execSync(`tar -a -cf "paczka_zadania.zip" ${quotedFiles}`, { cwd: folderPath, stdio: 'ignore' });
    }
  } catch (err) {
    console.error(`Błąd tworzenia ZIP dla ${folderPath}:`, err.message);
  }

  generatedCount++;
}

console.log(`Wygenerowano instrukcje README.md i paczki ZIP dla ${generatedCount} zadań.`);
