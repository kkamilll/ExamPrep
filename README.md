# 🎓 Exam Prep Dashboard (INF.03 / E.14 / EE.09)

![Status](https://img.shields.io/badge/Status-Zoptymalizowane-success)
![Kwalifikacje](https://img.shields.io/badge/Kwalifikacje-E.14%20|%20EE.09%20|%20INF.03-blue)
![Technologie](https://img.shields.io/badge/Tech-HTML5%20|%20CSS3%20|%20JS%20|%20PHP%20|%20SQL-yellow)

Prosty i przejrzysty panel do szybkiego przeglądania arkuszy oraz przykładów rozwiązań.

---

## 🚀 Szybki start

1. Otwórz `index.html` w przeglądarce.
2. Wpisz temat, rok lub nazwę zadania w polu wyszukiwania.
3. Wybierz filtr E.14, EE.09 lub Ćwiczenia.
4. Kliknij **PDF**, aby otworzyć arkusz.
5. Kliknij **Otwórz**, aby zobaczyć rozwiązanie.

> Uwaga: pliki `.php` działają poprawnie tylko z lokalnym serwerem (np. XAMPP).

---

## 🔍 Jak działa Dashboard

Panel umożliwia szybkie wyszukiwanie materiałów bez ręcznego przeglądania folderów.

- Wyszukuj po nazwie zadania, kategorii i typie pliku.
- Filtruj materiały według kwalifikacji.
- Otwieraj PDF, HTML/PHP, SQL i ZIP bez zbędnego klikania.

---

## 📁 Struktura projektu

```text
exam-prep-dashboard/
├── 📄 index.html        <-- Dashboard startowy
├── 📄 styles.css        <-- Style strony
├── 📄 app.js            <-- Logika listowania i filtrów
├── 📄 data.js           <-- Lista zadań i ścieżki do plików
├── 📂 Kwalifikacja_E14/ <-- Materiały E.14
├── 📂 Kwalifikacja_EE09/ <-- Materiały EE.09
└── 📂 Cwiczenia_i_Zadania/ <-- Zadania dodatkowe
```

---

## 🛠️ Instrukcja uruchomienia

### 1. Statyczne pliki (HTML, CSS, JS)

Większość zadań możesz uruchomić bez serwera, bezpośrednio przez `index.html`.

### 2. Pliki PHP i serwer lokalny

Pliki `.php` działają tylko po uruchomieniu lokalnego serwera:

1. Pobierz i zainstaluj [XAMPP](https://www.apachefriends.org/).
2. Skopiuj repozytorium do `C:\xampp\htdocs\exam-prep-dashboard\`.
3. Uruchom Apache i MySQL.
4. Otwórz `http://localhost/exam-prep-dashboard/index.html`.

> Jeśli folder ma inną nazwę, dostosuj adres w przeglądarce.

### 3. Import bazy danych

1. Otwórz `http://localhost/phpmyadmin`.
2. Utwórz nową bazę danych.
3. Zaimportuj plik `.sql` z właściwego katalogu.

---

Powodzenia w nauce! 💪
