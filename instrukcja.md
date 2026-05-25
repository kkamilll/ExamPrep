# 📖 Przewodnik po Zaktualizowanym Repozytorium

Wszystkie pliki zostały uporządkowane, naprawione i przygotowane do wygodnej nauki. Poniżej znajduje się opis wprowadzonych zmian i instrukcja obsługi.

## 🚀 Nowość: Interaktywny Dashboard

Stworzyłem dedykowany panel nawigacyjny, który pozwala na przeglądanie wszystkich zadań w jednym miejscu.

- **Jak uruchomić?** Otwórz plik [index.html](index.html) w swojej przeglądarce.
- **Funkcje:**
  - Wyszukiwanie zadań po nazwie lub numerze arkusza.
  - Filtrowanie według kwalifikacji (E.14, EE.09).
  - Szybki dostęp do arkuszy PDF, kodu HTML/PHP oraz plików baz danych SQL.

---

## 🛠️ Wykonane Prace Techniczne

### 1. Rozpakowanie Materiałów

Wszystkie archiwa `.zip`, które znajdowały się w folderach, zostały automatycznie wypakowane do swoich katalogów docelowych. Dzięki temu masz od razu dostęp do grafik i skryptów bez konieczności ręcznego klikania w każde zadanie.

### 2. Automatyczne Poprawki Kodu (Standardy 2024+)

Przeprowadziłem audyt i automatyczną naprawę plików HTML:

- **Usunięcie błędów struktury:** Naprawiłem błędy typu "podwójny DOCTYPE", które pojawiały się w niektórych arkuszach.
- **Kodowanie znaków:** Dodałem brakujące `<meta charset="utf-8">` tam, gdzie ich brakowało, aby polskie znaki wyświetlały się poprawnie.
- **Dostępność:** Dodałem atrybut `lang="pl"` do tagu `<html>`, co jest dobrą praktyką i poprawia interpretację strony przez przeglądarki.

### 3. Optymalizacja PHP

Skrypty PHP zostały zweryfikowane pod kątem współpracy z nowszymi wersjami serwerów (np. XAMPP z PHP 8.x). Używają one biblioteki `mysqli`, co jest wymagane na egzaminach.

---

## 📁 Nowa Struktura Folderów

```text
exam-prep-dashboard/
├── 📄 index.html        <-- TWÓJ START (Dashboard)
├── 📄 styles.css        <-- Style panelu
├── 📄 app.js            <-- Logika panelu
├── 📄 manifest.json     <-- Baza danych o zadaniach
├── 📂 Kwalifikacja_E14/ <-- Zadania E.14
├── 📂 Kwalifikacja_EE09/ <-- Zadania EE.09
└── 📂 Cwiczenia_i_Zadania/ <-- Dodatkowe materiały
```

## 💡 Porady dla Ucznia

1. **Bazy Danych:** Jeśli zadanie wymaga bazy, znajdź przycisk `🗄️ Baza (SQL)` w panelu. Zaimportuj ten plik w `phpMyAdmin`.
2. **Serwer Lokalny:** Pamiętaj, że pliki `.php` zadziałają tylko po uruchomieniu ich przez serwer (np. XAMPP). Pliki `.html` możesz otwierać bezpośrednio.
3. **Wyszukiwanie:** Jeśli szukasz konkretnego tematu (np. "ryby" lub "filmoteka"), wpisz to w wyszukiwarkę w Dashboardzie.

Powodzenia w nauce! 🎓
