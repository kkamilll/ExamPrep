# 📖 Instrukcja Obsługi i Wskazówki

## 🚀 1. Uruchomienie projektu
Panel posiada wbudowany, lekki serwer HTTP w Node.js (bez zewnętrznych bibliotek).

- Wpisz w terminalu: `npm start` (lub `npm run dev`)
- Albo kliknij dwukrotnie plik `start.bat`
- Panel uruchomi się pod adresem: `http://localhost:3000`

---

## 🎯 2. Korzystanie z Panelu

| Przycisk | Co robi |
|---|---|
| **📄 PDF** | Otwiera oficjalny arkusz egzaminacyjny w przeglądarce. |
| **🌐 HTML** | Uruchamia stronę internetową zadania w nowej karcie. |
| **👁️ Kod / Rozwiązanie** | Otwiera okno z podglądem kodu PHP/SQL/HTML/CSS i możliwością skopiowania do schowka. |
| **📥 Paczka ZIP** | Pobiera pełne archiwum zadania na dysk. |

---

## 🛠️ 3. Praca z bazami MySQL i PHP w XAMPP

1. Uruchom **XAMPP Control Panel** i włącz **Apache** oraz **MySQL**.
2. Otwórz `http://localhost/phpmyadmin` w przeglądarce.
3. Utwórz nową bazę danych (nazwa jest podana w pliku SQL lub treści arkusza).
4. Kliknij zakładkę **Importuj** i wybierz plik `.sql` z katalogu danego zadania.
5. Jeśli plik `.php` łączy się z bazą, domyślne dane logowania w XAMPP to:
   - Host: `localhost`
   - Użytkownik: `root`
   - Hasło: *(puste)*
