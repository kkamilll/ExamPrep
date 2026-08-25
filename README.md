# 🎓 Exam Prep — Panel Przygotowania do Egzaminów Zawodowych (INF.03 / E.14 / EE.09)

Nowoczesny, szybki i przejrzysty panel do przeglądania oficjalnych arkuszy CKE, podglądu kodu rozwiązań (PHP, HTML, CSS, JavaScript, SQL), kopiowania kwerend, instrukcji krok po kroku oraz pobierania uporządkowanych paczek zadań.

---

## ⚡ Szybki start (3 sekundy)

Możesz uruchomić panel na **dowolny z poniższych sposobów**:

### Sposób 1 (Zalecany — z wbudowanym serwerem i podglądem kodu)
W terminalu wpisz:
```bash
npm start
```
*(lub `npm run dev`)* — automatycznie uruchomi lokalny, lekki serwer Node.js (zero zewnętrznych zależności) i otworzy przeglądarkę pod adresem `http://localhost:3000`.

### Sposób 2 (Jedno kliknięcie na Windows)
Uruchom plik **`start.bat`**.

### Sposób 3 (Bezpośrednio w przeglądarce)
Otwórz plik **`index.html`** w dowolnej przeglądarce internetowej.

---

## 🔍 Co oferuje panel?

- 📄 **Arkusze PDF** — otwieranie oryginalnych treści arkuszy CKE w nowej karcie.
- 🚀 **Bezpośrednie uruchamianie** — natychmiastowe otwieranie stron HTML oraz interaktywne instrukcje krok po kroku dla projektów PHP/MySQL.
- 👁️ **Wbudowany podgląd kodu i rozwiązań** — przeglądaj i kopiuj kod PHP, SQL, HTML, CSS i JS bezpośrednio w przeglądarce z kolorowaniem składni, bez otwierania zewnętrznych edytorów.
- 📖 **Wytłumaczenie i instrukcja do każdego zadania** — przejrzysty opis każdego egzaminu z podsumowaniem wykonanych wymagań, listą plików i instrukcją uruchomienia.
- 📥 **Czyste paczki ZIP** — natychmiastowe pobieranie uporządkowanego archiwum każdego zadania z kompletem kodu, zrzutem bazy SQL i instrukcją `README.md`.
- ⚡ **Wyszukiwarka i filtry** — filtrowanie po kwalifikacji (`E.14`, `EE.09`, `Ćwiczenia`), roczniku, tematyce oraz dostępnych zasobach (PDF, PHP, SQL, HTML).
- 🌙 **Elegancki tryb ciemny** — nowoczesny, responsywny interfejs stworzony z myślą o wygodzie i czytelności.

---

## 🐘 Uruchamianie projektów dynamicznych PHP z bazą MySQL (XAMPP)

Kod PHP i zapytania SQL możesz wygodnie czytać bezpośrednio w panelu. Jeśli chcesz przetestować pełne dynamiczne działanie skryptów PHP:

1. Pobierz i zainstaluj [XAMPP](https://www.apachefriends.org/), a następnie uruchom moduły **Apache** oraz **MySQL**.
2. Umieść ten folder w `C:\xampp\htdocs\exam_prep\`.
3. W `http://localhost/phpmyadmin` zaimportuj odpowiedni plik `.sql` zadania.
4. Otwórz projekt pod adresem `http://localhost/exam_prep/index.html`.

---

## 📁 Struktura repozytorium

```text
exam_prep/
├── 📄 index.html           # Główny interfejs panelu WWW
├── 📄 styles.css           # Style CSS i motyw graficzny
├── 📄 app.js               # Logika filtrowania, wyszukiwania i okien modalnych
├── 📄 server.js            # Wbudowany lokalny serwer HTTP (zero zależności)
├── 📄 start.bat            # Skrót uruchomieniowy na system Windows
├── 📄 data.js              # Baza zindeksowanych zadań i plików
├── 📄 build-data.js        # Generator indeksu zadań
├── 📂 Kwalifikacja_E14/    # Arkusze i uporządkowane rozwiązania E.14
├── 📂 Kwalifikacja_EE09/   # Arkusze i uporządkowane rozwiązania EE.09
└── 📂 Cwiczenia_i_Zadania/ # Zadania ćwiczeniowe, arkusze próbne i ćwiczenia JS
```

---

## 🛠️ Zastosowane technologie

- **Frontend:** HTML5, Modern CSS3 (zmienne CSS, flexbox/grid), Czysty JavaScript (ES6+).
- **Lokalny serwer:** Natywny Node.js (moduły `http`, `fs`, `path` — bez `node_modules`).
- **Technologie egzaminacyjne:** PHP (mysqli), MySQL / MariaDB, HTML5, CSS3, JavaScript.

---

## 📄 Licencja

Materiały edukacyjne przeznaczone do przygotowania do egzaminów zawodowych.
