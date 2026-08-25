// Automatycznie wygenerowany indeks zadan i plikow egzaminacyjnych
const EXAM_DATA = [
  {
    "id": "Kwalifikacja_E14_2016_zima_e14-01-16_01",
    "category": "Kwalifikacja_E14",
    "name": "2016 zima — E.14-01-16.01",
    "title": "Baza Czytelników i Wypożyczeń Książek",
    "description": "System biblioteczny z ewidencją księgozbioru, autorów, czytelników i kwerendami SQL monitorującymi wypożyczenia.",
    "technologies": [
      "SQL (MySQL)",
      "HTML5",
      "CSS3"
    ],
    "folder": "Kwalifikacja_E14/2016_zima/e14-01-16_01",
    "mainPdf": "E.14-01-16.01.pdf",
    "mainHtml": "index.html",
    "mainPhp": null,
    "mainSql": "baza_zad1.sql",
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# 📌 2016_zima - e14-01-16_01 (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** Baza Czytelników i Wypożyczeń Książek  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** SQL (MySQL), HTML5, CSS3\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nSystem biblioteczny z ewidencją księgozbioru, autorów, czytelników i kwerendami SQL monitorującymi wypożyczenia.\n\n### Główne elementy rozwiązania:\n- Opracowanie semantycznej struktury strony w standardzie HTML5.\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Utworzenie tabel, relacji oraz przygotowanie poprawnych kwerend SQL (SELECT, INSERT, UPDATE).\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 📄 **Arkusz PDF:** `E.14-01-16.01.pdf`\n- 🌐 **Pliki HTML:** `index.html`\n- 💾 **Baza / Kwerendy SQL:** `baza/eksport.sql`, `baza_zad1.sql`\n- 📝 **Pliki tekstowe / Kwerendy:** `baza/kwerendy.txt`\n- 🎨 **Style CSS:** `style.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Import bazy danych:**\n   - Uruchom lokalny serwer MySQL (np. w panelu XAMPP).\n   - Otwórz w przeglądarce `http://localhost/phpmyadmin`.\n   - Utwórz nową bazę danych i zaimportuj plik SQL (`eksport.sql`, `baza_zad1.sql`).\n\n2. **Uruchomienie strony WWW:**\n   - Kliknij dwukrotnie plik `index.html` lub przeciągnij go do dowolnej przeglądarki.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
    "pdfs": [
      "E.14-01-16.01.pdf"
    ],
    "htmls": [
      "index.html"
    ],
    "phps": [],
    "sqls": [
      "baza_zad1.sql"
    ],
    "zips": [
      "paczka_zadania.zip"
    ],
    "txts": [
      "baza/kwerendy.txt"
    ],
    "scripts": [
      "style.css"
    ],
    "allFiles": [
      "baza/biblioteka.accdb",
      "baza/eksport.sql",
      "baza/kwerendy.txt",
      "baza/projekt.jpg",
      "baza_zad1.sql",
      "E.14-01-16.01.pdf",
      "index.html",
      "paczka_zadania.zip",
      "README.md",
      "style.css"
    ],
    "fileContents": {
      "baza/kwerendy.txt": "1)SELECT * FROM `ksiazki` WHERE `Wydawnictwo` = \"Ossolineum\"\r\n2)SELECT ksiazki.Tytul, autorzy.Imie, autorzy.Nazwisko FROM ksiazki, autorzy WHERE ksiazki.AutorID = autorzy.IDAutor\r\n3)SELECT egzemplarze.IDEgzemplarz, ksiazki.Tytul FROM egzemplarze, ksiazki WHERE egzemplarze.DoWypozyczenia = 0 AND egzemplarze.KsiazkaID = ksiazki.IDKsiazki\r\n4)INSERT INTO `autorzy`(`IDAutor`, `Imie`, `Nazwisko`) VALUES (NULL,\"Adam\",\"Asnyk\")",
      "baza_zad1.sql": "-- phpMyAdmin SQL Dump\r\n-- version 4.1.12\r\n-- http://www.phpmyadmin.net\r\n--\r\n-- Host: 127.0.0.1\r\n-- Generation Time: 16 Mar 2015, 12:57\r\n-- Server version: 5.6.16\r\n-- PHP Version: 5.5.11\r\n\r\nSET SQL_MODE = \"NO_AUTO_VALUE_ON_ZERO\";\r\nSET time_zone = \"+00:00\";\r\n\r\n\r\n/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;\r\n/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;\r\n/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;\r\n/*!40101 SET NAMES utf8 */;\r\n\r\n--\r\n-- Database: `oke201601`\r\n--\r\n\r\n-- --------------------------------------------------------\r\n\r\n--\r\n-- Struktura tabeli dla tabeli `autorzy`\r\n--\r\n\r\nCREATE TABLE IF NOT EXISTS `autorzy` (\r\n  `IDAutor` int(10) unsigned NOT NULL AUTO_INCREMENT,\r\n  `Imie` text,\r\n  `Nazwisko` text,\r\n  PRIMARY KEY (`IDAutor`)\r\n) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;\r\n\r\n--\r\n-- Zrzut danych tabeli `autorzy`\r\n--\r\n\r\nINSERT INTO `autorzy` (`IDAutor`, `Imie`, `Nazwisko`) VALUES\r\n(1, 'Henryk', 'Sienkiewicz'),\r\n(2, 'Adam', 'Mickiewicz');\r\n\r\n-- --------------------------------------------------------\r\n\r\n--\r\n-- Struktura tabeli dla tabeli `egzemplarze`\r\n--\r\n\r\nCREATE TABLE IF NOT EXISTS `egzemplarze` (\r\n  `IDEgzemplarz` int(10) unsigned NOT NULL AUTO_INCREMENT,\r\n  `KsiazkaID` int(10) unsigned NOT NULL,\r\n  `DoWypozyczenia` tinyint(1) DEFAULT NULL,\r\n  PRIMARY KEY (`IDEgzemplarz`)\r\n) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=13 ;\r\n\r\n--\r\n-- Zrzut danych tabeli `egzemplarze`\r\n--\r\n\r\nINSERT INTO `egzemplarze` (`IDEgzemplarz`, `KsiazkaID`, `DoWypozyczenia`) VALUES\r\n(1, 1, 1),\r\n(2, 1, 1),\r\n(3, 1, 0),\r\n(4, 2, 1),\r\n(5, 2, 1),\r\n(6, 3, 1),\r\n(7, 4, 0),\r\n(8, 4, 1),\r\n(9, 4, 1),\r\n(10, 5, 1),\r\n(11, 5, 0),\r\n(12, 2, 1);\r\n\r\n-- --------------------------------------------------------\r\n\r\n--\r\n-- Struktura tabeli dla tabeli `ksiazki`\r\n--\r\n\r\nCREATE TABLE IF NOT EXISTS `ksiazki` (\r\n  `IDKsiazki` int(10) unsigned NOT NULL AUTO_INCREMENT,\r\n  `AutorID` int(10) unsigned NOT NULL,\r\n  `Tytul` text,\r\n  `Wydawnictwo` text,\r\n  `RokWydania` int(10) unsigned DEFAULT NULL,\r\n  PRIMARY KEY (`IDKsiazki`)\r\n) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;\r\n\r\n--\r\n-- Zrzut danych tabeli `ksiazki`\r\n--\r\n\r\nINSERT INTO `ksiazki` (`IDKsiazki`, `AutorID`, `Tytul`, `Wydawnictwo`, `RokWydania`) VALUES\r\n(1, 1, 'W pustyni i w puszczy', 'Znak', 2014),\r\n(2, 1, 'Quo vadis', 'Greg', 2014),\r\n(3, 2, 'Pan Tadeusz', 'Ossolineum', 2005),\r\n(4, 2, 'Ballady i romanse', 'Zielona Sowa', 2010),\r\n(5, 2, 'Dziady', 'Ossolineum', 2009);\r\n\r\n/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;\r\n/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;\r\n/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;\r\n",
      "index.html": "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"style.css\">\r\n\t<title>Baza danych biblioteki</title>\r\n</head>\r\n<body>\r\n\t<div id=\"cont\">\r\n\t\t<div id=\"baner\">\r\n\t\t\t<h1>PROJEKT ROZBUDOWY BAZY DANYCH BIBLIOTEKI</h1>\r\n\t\t</div>\r\n\t\t<div id=\"pl\">\r\n\t\t\t<img src=\"baza\\projekt.jpg\" alt=\"baza danych biblioteki\" vspace=\"20\" border=\"2px\">\r\n\t\t</div>\r\n\t\t<div id=\"pp\">\r\n\t\t\t<h3>AUTOR STRONY</h3>\r\n\t\t\t<p>PESEL</p>\r\n\t\t\t<h3>PLIKI DO POBRANIA</h3>\r\n\t\t\t<li><a href=\"baza/kwerendy.txt\">Kwerendy do bazy</a></li>\r\n\t\t\t<li><a href=\"baza/eksport.sql\">Eksport MySQL</a></li>\r\n\t\t</div>\r\n\t\t<div id=\"footer\">\r\n\t\t\t<h2>Egzamin E.14 Tworzenie aplikacji internetowych i baz danych oraz administrowanie bazami.</h2>\r\n\t\t</div>\r\n\t</div>\r\n</body>\r\n</html>",
      "README.md": "# 📌 2016_zima - e14-01-16_01 (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** Baza Czytelników i Wypożyczeń Książek  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** SQL (MySQL), HTML5, CSS3\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nSystem biblioteczny z ewidencją księgozbioru, autorów, czytelników i kwerendami SQL monitorującymi wypożyczenia.\n\n### Główne elementy rozwiązania:\n- Opracowanie semantycznej struktury strony w standardzie HTML5.\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Utworzenie tabel, relacji oraz przygotowanie poprawnych kwerend SQL (SELECT, INSERT, UPDATE).\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 📄 **Arkusz PDF:** `E.14-01-16.01.pdf`\n- 🌐 **Pliki HTML:** `index.html`\n- 💾 **Baza / Kwerendy SQL:** `baza/eksport.sql`, `baza_zad1.sql`\n- 📝 **Pliki tekstowe / Kwerendy:** `baza/kwerendy.txt`\n- 🎨 **Style CSS:** `style.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Import bazy danych:**\n   - Uruchom lokalny serwer MySQL (np. w panelu XAMPP).\n   - Otwórz w przeglądarce `http://localhost/phpmyadmin`.\n   - Utwórz nową bazę danych i zaimportuj plik SQL (`eksport.sql`, `baza_zad1.sql`).\n\n2. **Uruchomienie strony WWW:**\n   - Kliknij dwukrotnie plik `index.html` lub przeciągnij go do dowolnej przeglądarki.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
      "style.css": "body{\r\n\tmargin:0;\r\n}\r\n\r\n\r\n#cont{\r\nheight: 100%;\r\nwidth: 100%;\r\n}\r\n\r\n#baner{\r\nbackground-color: #3B85AA;\r\ncolor: white;\r\npadding: 10px;\r\ntext-align: center;\r\nfont-family: Arial;\r\n}\r\n\r\n#pl{\r\n\r\nwidth: 80%;\r\nheight: 450px;\r\ntext-align: center;\r\nfloat: left;\r\n}\r\n\r\n#pp{\r\nbackground-color: #4E9BB5;\r\nwidth: 20%;\r\nheight: 450px;\r\ncolor: white;\r\nfloat: left;\r\n}\r\n\r\n#footer { \r\n    background-color: #3B85AA;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 10px;\r\n    clear: both;\r\n    \r\n}\r\n\r\na:visited {\r\n    color: white;\r\n}\r\n\r\na:link {\r\n    color: white;\r\n}\r\n\r\nli {\r\n\t\r\n}\r\n\r\n"
    }
  },
  {
    "id": "Kwalifikacja_E14_2016_zima_e14-02-16_01",
    "category": "Kwalifikacja_E14",
    "name": "2016 zima — E.14-02-16.01",
    "title": "2016 zima — E.14 02 16.01",
    "description": "Zadanie praktyczne z przygotowania do egzaminu zawodowego obejmujące tworzenie aplikacji internetowej, arkusza stylów CSS oraz relacyjnej bazy danych.",
    "technologies": [
      "HTML5",
      "CSS3",
      "MySQL"
    ],
    "folder": "Kwalifikacja_E14/2016_zima/e14-02-16_01",
    "mainPdf": "E.14-02-16.01.pdf",
    "mainHtml": "index.html",
    "mainPhp": null,
    "mainSql": "baza/baza_zad2.sql",
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# 📌 2016_zima - e14-02-16_01 (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** 2016 zima   e14 02 16 01  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** HTML5, CSS3, MySQL\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nZadanie praktyczne z przygotowania do egzaminu zawodowego obejmujące tworzenie aplikacji internetowej, arkusza stylów CSS oraz relacyjnej bazy danych.\n\n### Główne elementy rozwiązania:\n- Opracowanie semantycznej struktury strony w standardzie HTML5.\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Utworzenie tabel, relacji oraz przygotowanie poprawnych kwerend SQL (SELECT, INSERT, UPDATE).\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 📄 **Arkusz PDF:** `E.14-02-16.01.pdf`\n- 🌐 **Pliki HTML:** `index.html`\n- 💾 **Baza / Kwerendy SQL:** `baza/baza_zad2.sql`\n- 📝 **Pliki tekstowe / Kwerendy:** `baza/kwerendy.txt`\n- 🎨 **Style CSS:** `style.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Import bazy danych:**\n   - Uruchom lokalny serwer MySQL (np. w panelu XAMPP).\n   - Otwórz w przeglądarce `http://localhost/phpmyadmin`.\n   - Utwórz nową bazę danych i zaimportuj plik SQL (`baza_zad2.sql`).\n\n2. **Uruchomienie strony WWW:**\n   - Kliknij dwukrotnie plik `index.html` lub przeciągnij go do dowolnej przeglądarki.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
    "pdfs": [
      "E.14-02-16.01.pdf"
    ],
    "htmls": [
      "index.html"
    ],
    "phps": [],
    "sqls": [
      "baza/baza_zad2.sql"
    ],
    "zips": [
      "paczka_zadania.zip"
    ],
    "txts": [
      "baza/kwerendy.txt"
    ],
    "scripts": [
      "style.css"
    ],
    "allFiles": [
      "baza/baza_zad2.sql",
      "baza/kwerendy.txt",
      "baza/projekt.jpg",
      "baza/sklep.accdb",
      "E.14-02-16.01.pdf",
      "index.html",
      "paczka_zadania.zip",
      "README.md",
      "style.css"
    ],
    "fileContents": {
      "baza/baza_zad2.sql": "-- phpMyAdmin SQL Dump\r\n-- version 4.1.12\r\n-- http://www.phpmyadmin.net\r\n--\r\n-- Host: 127.0.0.1\r\n-- Generation Time: 24 Mar 2015, 09:01\r\n-- Server version: 5.6.16\r\n-- PHP Version: 5.5.11\r\n\r\nSET SQL_MODE = \"NO_AUTO_VALUE_ON_ZERO\";\r\nSET time_zone = \"+00:00\";\r\n\r\n\r\n/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;\r\n/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;\r\n/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;\r\n/*!40101 SET NAMES utf8 */;\r\n\r\n--\r\n-- Database: `sklep`\r\n--\r\n\r\n-- --------------------------------------------------------\r\n\r\n--\r\n-- Struktura tabeli dla tabeli `artykuly`\r\n--\r\n\r\nCREATE TABLE IF NOT EXISTS `artykuly` (\r\n  `IDArtykuly` int(10) unsigned NOT NULL AUTO_INCREMENT,\r\n  `ProducenciID` int(10) unsigned NOT NULL,\r\n  `Model` text,\r\n  `Typ` text,\r\n  `Cena` double DEFAULT NULL,\r\n  `CenaPromocja` double DEFAULT NULL,\r\n  `Opis` longtext,\r\n  PRIMARY KEY (`IDArtykuly`)\r\n) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;\r\n\r\n--\r\n-- Zrzut danych tabeli `artykuly`\r\n--\r\n\r\nINSERT INTO `artykuly` (`IDArtykuly`, `ProducenciID`, `Model`, `Typ`, `Cena`, `CenaPromocja`, `Opis`) VALUES\r\n(1, 1, 'K551LB-XX180D', 'Notebook', 2500, 2400, 'Procesor i7, 4GB RAM'),\r\n(2, 1, 'X551CARF-HCL1201L', 'Notebook', 1000, 980, 'Procesor Intel Celeron 1007U, 4GB RAM'),\r\n(3, 2, 'PORTEGE R30-A-17K', 'Notebook', 4200, 3900, 'Procesor i5, 4GB RAM'),\r\n(4, 2, 'Partner 1TB', 'HDD USB', 250, 240, 'USB 3.0, 1TB');\r\n\r\n-- --------------------------------------------------------\r\n\r\n--\r\n-- Struktura tabeli dla tabeli `magazyn`\r\n--\r\n\r\nCREATE TABLE IF NOT EXISTS `magazyn` (\r\n  `IDMagazyn` int(10) unsigned NOT NULL AUTO_INCREMENT,\r\n  `Ilosc` int(10) unsigned DEFAULT NULL,\r\n  `CzyZamowic` tinyint(1) DEFAULT NULL,\r\n  PRIMARY KEY (`IDMagazyn`)\r\n) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;\r\n\r\n--\r\n-- Zrzut danych tabeli `magazyn`\r\n--\r\n\r\nINSERT INTO `magazyn` (`IDMagazyn`, `Ilosc`, `CzyZamowic`) VALUES\r\n(1, 4, 0),\r\n(2, 8, 0),\r\n(3, 0, 1),\r\n(4, 0, 1);\r\n\r\n-- --------------------------------------------------------\r\n\r\n--\r\n-- Struktura tabeli dla tabeli `producenci`\r\n--\r\n\r\nCREATE TABLE IF NOT EXISTS `producenci` (\r\n  `IDProducenci` int(10) unsigned NOT NULL AUTO_INCREMENT,\r\n  `Nazwa` text,\r\n  `URL` text,\r\n  PRIMARY KEY (`IDProducenci`)\r\n) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;\r\n\r\n--\r\n-- Zrzut danych tabeli `producenci`\r\n--\r\n\r\nINSERT INTO `producenci` (`IDProducenci`, `Nazwa`, `URL`) VALUES\r\n(1, 'Asus', 'asus.pl'),\r\n(2, 'Toshiba', 'toshiba.pl');\r\n\r\n/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;\r\n/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;\r\n/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;\r\n\r\n",
      "baza/kwerendy.txt": "a) SELECT Model, Typ FROM `artykuly` ORDER BY `artykuly`.`Cena` ASC\r\nb) SELECT `producenci`.`Nazwa` , `artykuly`.`Model`, `artykuly`.`Typ` FROM `artykuly` INNER JOIN `producenci` on `artykuly`.`ProducenciID`=`producenci`.`IDProducenci`\r\nc) SELECT `artykuly`.`Model` FROM `magazyn` INNER JOIN `artykuly` on `magazyn`.`IDMagazyn`=`artykuly`.`IDArtykuly` where `magazyn`.`Ilosc` = 0\r\nd) INSERT INTO `producenci` (`IDProducenci`, `Nazwa`, `URL`) VALUES ('3', 'Samsung', 'samsung.pl');",
      "index.html": "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"style.css\">\r\n\t<title>Baza danych sklep komputerowy</title>\r\n</head>\r\n<body>\r\n\t<div id=\"baner\">\r\n\t\t<h1>PROJEKT BAZY DANYCH SKLEPU KOMPUTEROWEGO</h1>\r\n\t</div>\r\n\t<div id=\"pl\">\r\n\t\t<h3>AUTOR STRONY</h3>\r\n\t\tPESEL\r\n\t\t<h3>PLIKI DO POBRANIA</h3>\r\n\t\t<ul>\r\n\t\t\t<li><a href=\"baza/kwerendy.txt\">Kwerendy</a></li>\r\n\t\t\t<li><a href=\"baza/sklep.accdb\">Eksport MySQL</a></li>\r\n\t\t</ul>\r\n\t</div>\r\n\t<div id=\"pp\">\r\n\t\t<img src=\"baza/projekt.jpg\" alt=\"sklep internetowy\" border=\"3\" vspace=\"50\">\r\n\t</div>\r\n\t<div id=\"stopka\">\r\n\t\t<h2>Egzamin E.14 Tworzenie aplikacji internetowych i baz danych oraz administrowanie bazami</h2>\r\n\t</div>\r\n</body>\r\n</html>",
      "README.md": "# 📌 2016_zima - e14-02-16_01 (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** 2016 zima   e14 02 16 01  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** HTML5, CSS3, MySQL\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nZadanie praktyczne z przygotowania do egzaminu zawodowego obejmujące tworzenie aplikacji internetowej, arkusza stylów CSS oraz relacyjnej bazy danych.\n\n### Główne elementy rozwiązania:\n- Opracowanie semantycznej struktury strony w standardzie HTML5.\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Utworzenie tabel, relacji oraz przygotowanie poprawnych kwerend SQL (SELECT, INSERT, UPDATE).\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 📄 **Arkusz PDF:** `E.14-02-16.01.pdf`\n- 🌐 **Pliki HTML:** `index.html`\n- 💾 **Baza / Kwerendy SQL:** `baza/baza_zad2.sql`\n- 📝 **Pliki tekstowe / Kwerendy:** `baza/kwerendy.txt`\n- 🎨 **Style CSS:** `style.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Import bazy danych:**\n   - Uruchom lokalny serwer MySQL (np. w panelu XAMPP).\n   - Otwórz w przeglądarce `http://localhost/phpmyadmin`.\n   - Utwórz nową bazę danych i zaimportuj plik SQL (`baza_zad2.sql`).\n\n2. **Uruchomienie strony WWW:**\n   - Kliknij dwukrotnie plik `index.html` lub przeciągnij go do dowolnej przeglądarki.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
      "style.css": "body\r\n{\r\n\tmargin: 0px;\r\n\tpadding: 0px;\r\n}\r\n#baner\r\n{\r\n\tcolor: white;\r\n\tbackground-color: #6F851E;\r\n\tpadding: 10px;\r\n\ttext-align: center;\r\n\ttext-decoration-style: initial;\r\n}\r\n\r\n#pl \r\n{\r\n\tcolor: white;\r\n\tbackground-color: #7C9421;\r\n\twidth: 25%;\r\n\theight: 400px;\r\n\ttext-align: center;\r\n\tfloat: left;\r\n}\r\n\r\n#pp\r\n{\r\n\twidth: 75%;\r\n\theight: 400px;\r\n\ttext-align: center;\t\r\n\tfloat: left;\r\n}\r\n\r\n#stopka\r\n{\r\n\tclear: left;\r\n\tcolor: white;\r\n\tbackground-color: #6F851E;\r\n\tpadding: 10px;\r\n\ttext-align: center;\r\n\ttext-decoration-style: initial;\r\n}\r\n\r\n#pl a\r\n{\r\n\tcolor: white;\r\n}"
    }
  },
  {
    "id": "Kwalifikacja_E14_2016_zima_e14-03-16_01",
    "category": "Kwalifikacja_E14",
    "name": "2016 zima — E.14-03-16.01",
    "title": "2016 zima — E.14 03 16.01",
    "description": "Zadanie praktyczne z przygotowania do egzaminu zawodowego obejmujące tworzenie aplikacji internetowej, arkusza stylów CSS oraz relacyjnej bazy danych.",
    "technologies": [
      "HTML5",
      "CSS3",
      "MySQL"
    ],
    "folder": "Kwalifikacja_E14/2016_zima/e14-03-16_01",
    "mainPdf": "E.14-03-16.01.pdf",
    "mainHtml": "index.html",
    "mainPhp": null,
    "mainSql": "baza/filmoteka.sql",
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# 📌 2016_zima - e14-03-16_01 (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** 2016 zima   e14 03 16 01  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** HTML5, CSS3, MySQL\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nZadanie praktyczne z przygotowania do egzaminu zawodowego obejmujące tworzenie aplikacji internetowej, arkusza stylów CSS oraz relacyjnej bazy danych.\n\n### Główne elementy rozwiązania:\n- Opracowanie semantycznej struktury strony w standardzie HTML5.\n- Utworzenie tabel, relacji oraz przygotowanie poprawnych kwerend SQL (SELECT, INSERT, UPDATE).\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 📄 **Arkusz PDF:** `E.14-03-16.01.pdf`\n- 🌐 **Pliki HTML:** `index.html`\n- 💾 **Baza / Kwerendy SQL:** `baza/filmoteka.sql`, `baza_zad3.sql`\n- 📝 **Pliki tekstowe / Kwerendy:** `baza/kwerendy.txt`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Import bazy danych:**\n   - Uruchom lokalny serwer MySQL (np. w panelu XAMPP).\n   - Otwórz w przeglądarce `http://localhost/phpmyadmin`.\n   - Utwórz nową bazę danych i zaimportuj plik SQL (`filmoteka.sql`, `baza_zad3.sql`).\n\n2. **Uruchomienie strony WWW:**\n   - Kliknij dwukrotnie plik `index.html` lub przeciągnij go do dowolnej przeglądarki.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
    "pdfs": [
      "E.14-03-16.01.pdf"
    ],
    "htmls": [
      "index.html"
    ],
    "phps": [],
    "sqls": [
      "baza/filmoteka.sql",
      "baza_zad3.sql"
    ],
    "zips": [
      "paczka_zadania.zip"
    ],
    "txts": [
      "baza/kwerendy.txt"
    ],
    "scripts": [],
    "allFiles": [
      "baza/filmoteka.accdb",
      "baza/filmoteka.sql",
      "baza/kwerendy.txt",
      "baza/projekt.jpg",
      "baza/zapytanie.a.jpg",
      "baza/zapytanie.b.jpg",
      "baza/zapytanie.c.jpg",
      "baza_zad3.sql",
      "E.14-03-16.01.pdf",
      "index.html",
      "paczka_zadania.zip",
      "README.md"
    ],
    "fileContents": {
      "baza/filmoteka.sql": "-- phpMyAdmin SQL Dump\n-- version 4.8.3\n-- https://www.phpmyadmin.net/\n--\n-- Host: 127.0.0.1\n-- Czas generowania: 03 Gru 2018, 17:58\n-- Wersja serwera: 10.1.36-MariaDB\n-- Wersja PHP: 7.2.10\n\nSET SQL_MODE = \"NO_AUTO_VALUE_ON_ZERO\";\nSET AUTOCOMMIT = 0;\nSTART TRANSACTION;\nSET time_zone = \"+00:00\";\n\n\n/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;\n/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;\n/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;\n/*!40101 SET NAMES utf8mb4 */;\n\n--\n-- Baza danych: `filmoteka`\n--\n\n-- --------------------------------------------------------\n\n--\n-- Struktura tabeli dla tabeli `filmy`\n--\n\nCREATE TABLE `filmy` (\n  `IDFilm` int(10) UNSIGNED NOT NULL,\n  `Tytul` text,\n  `Gatunek` text,\n  `RezyserID` int(10) UNSIGNED DEFAULT NULL,\n  `RecenzjaID` int(10) UNSIGNED DEFAULT NULL,\n  `Link` text\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\n\n--\n-- Zrzut danych tabeli `filmy`\n--\n\nINSERT INTO `filmy` (`IDFilm`, `Tytul`, `Gatunek`, `RezyserID`, `RecenzjaID`, `Link`) VALUES\n(1, 'Matrix', 'SF', 1, 1, NULL),\n(2, 'Gwiezdne Wojny', 'SF', 2, 2, NULL),\n(3, 'Indiana Jones i Ostatnia Krucjata', 'Przygodowy', 3, 3, NULL),\n(4, 'Jurassic Park', 'Przygodowy', 3, 4, NULL);\n\n-- --------------------------------------------------------\n\n--\n-- Struktura tabeli dla tabeli `recenzje`\n--\n\nCREATE TABLE `recenzje` (\n  `IDRecenzja` int(10) UNSIGNED NOT NULL,\n  `Ocena` int(10) UNSIGNED DEFAULT NULL,\n  `Tresc` longtext,\n  `Recenzent` text\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\n\n--\n-- Zrzut danych tabeli `recenzje`\n--\n\nINSERT INTO `recenzje` (`IDRecenzja`, `Ocena`, `Tresc`, `Recenzent`) VALUES\n(1, 5, 'Dobry film', 'Jan Nowak'),\n(2, 4, 'Klasyka gatunku', 'Jan Nowak'),\n(3, 4, 'Ciekawy', 'Andrzej Kowalski'),\n(4, 3, 'Dinozaury i ludzie', 'Andrzej Kowalski');\n\n-- --------------------------------------------------------\n\n--\n-- Struktura tabeli dla tabeli `rezyserzy`\n--\n\nCREATE TABLE `rezyserzy` (\n  `IDRezyser` int(10) UNSIGNED NOT NULL,\n  `Imie` text,\n  `Nazwisko` text\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\n\n--\n-- Zrzut danych tabeli `rezyserzy`\n--\n\nINSERT INTO `rezyserzy` (`IDRezyser`, `Imie`, `Nazwisko`) VALUES\n(1, 'Andy', 'Wachowski'),\n(2, 'George', 'Lucas'),\n(3, 'Steven', 'Spielberg'),\n(4, 'Andrzej', 'Wajda');\n\n--\n-- Indeksy dla zrzutów tabel\n--\n\n--\n-- Indeksy dla tabeli `filmy`\n--\nALTER TABLE `filmy`\n  ADD PRIMARY KEY (`IDFilm`);\n\n--\n-- Indeksy dla tabeli `recenzje`\n--\nALTER TABLE `recenzje`\n  ADD PRIMARY KEY (`IDRecenzja`);\n\n--\n-- Indeksy dla tabeli `rezyserzy`\n--\nALTER TABLE `rezyserzy`\n  ADD PRIMARY KEY (`IDRezyser`);\n\n--\n-- AUTO_INCREMENT for dumped tables\n--\n\n--\n-- AUTO_INCREMENT dla tabeli `filmy`\n--\nALTER TABLE `filmy`\n  MODIFY `IDFilm` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;\n\n--\n-- AUTO_INCREMENT dla tabeli `recenzje`\n--\nALTER TABLE `recenzje`\n  MODIFY `IDRecenzja` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;\n\n--\n-- AUTO_INCREMENT dla tabeli `rezyserzy`\n--\nALTER TABLE `rezyserzy`\n  MODIFY `IDRezyser` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;\nCOMMIT;\n\n/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;\n/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;\n/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;\n",
      "baza/kwerendy.txt": "Zapytanie 1: SELECT Tytul FROM filmy WHERE Gatunek = \"SF\";\r\nZapytanie 2: SELECT filmy.Tytul,rezyserzy.Nazwisko FROM filmy INNER JOIN rezyserzy ON filmy.IDFilm=rezyserzy.IDRezyser ;\r\nZapytanie 3: SELECT filmy.Tytul,recenzje.Ocena FROM filmy INNER JOIN recenzje ON filmy.RecenzjaID=recenzje.IDRecenzja WHERE recenzje.Ocena =4 ;\r\nZapytanie 4: INSERT INTO rezyserzy VALUES(4,'Andrzej','Wajda');",
      "baza_zad3.sql": "-- phpMyAdmin SQL Dump\r\n-- version 4.1.12\r\n-- http://www.phpmyadmin.net\r\n--\r\n-- Host: 127.0.0.1\r\n-- Generation Time: 26 Mar 2015, 12:02\r\n-- Server version: 5.6.16\r\n-- PHP Version: 5.5.11\r\n\r\nSET SQL_MODE = \"NO_AUTO_VALUE_ON_ZERO\";\r\nSET time_zone = \"+00:00\";\r\n\r\n\r\n/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;\r\n/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;\r\n/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;\r\n/*!40101 SET NAMES utf8 */;\r\n\r\n--\r\n-- Database: `filmoteka`\r\n--\r\n\r\n-- --------------------------------------------------------\r\n\r\n--\r\n-- Struktura tabeli dla tabeli `filmy`\r\n--\r\n\r\nCREATE TABLE IF NOT EXISTS `filmy` (\r\n  `IDFilm` int(10) unsigned NOT NULL AUTO_INCREMENT,\r\n  `Tytul` text,\r\n  `Gatunek` text,\r\n  `RezyserID` int(10) unsigned DEFAULT NULL,\r\n  `RecenzjaID` int(10) unsigned DEFAULT NULL,\r\n  `Link` text,\r\n  PRIMARY KEY (`IDFilm`)\r\n) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;\r\n\r\n--\r\n-- Zrzut danych tabeli `filmy`\r\n--\r\n\r\nINSERT INTO `filmy` (`IDFilm`, `Tytul`, `Gatunek`, `rezyserID`, `recenzjaID`, `link`) VALUES\r\n(1, 'Matrix', 'SF', 1, 1, NULL),\r\n(2, 'Gwiezdne Wojny', 'SF', 2, 2, NULL),\r\n(3, 'Indiana Jones i Ostatnia Krucjata', 'Przygodowy', 3, 3, NULL),\r\n(4, 'Jurassic Park', 'Przygodowy', 3, 4, NULL);\r\n\r\n-- --------------------------------------------------------\r\n\r\n--\r\n-- Struktura tabeli dla tabeli `recenzje`\r\n--\r\n\r\nCREATE TABLE IF NOT EXISTS `recenzje` (\r\n  `IDRecenzja` int(10) unsigned NOT NULL AUTO_INCREMENT,\r\n  `Ocena` int(10) unsigned DEFAULT NULL,\r\n  `Tresc` longtext,\r\n  `Recenzent` text,\r\n  PRIMARY KEY (`IDRecenzja`)\r\n) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;\r\n\r\n--\r\n-- Zrzut danych tabeli `recenzje`\r\n--\r\n\r\nINSERT INTO `recenzje` (`IDRecenzja`, `Ocena`, `Tresc`, `Recenzent`) VALUES\r\n(1, 5, 'Dobry film', 'Jan Nowak'),\r\n(2, 4, 'Klasyka gatunku', 'Jan Nowak'),\r\n(3, 4, 'Ciekawy', 'Andrzej Kowalski'),\r\n(4, 3, 'Dinozaury i ludzie', 'Andrzej Kowalski');\r\n\r\n-- --------------------------------------------------------\r\n\r\n--\r\n-- Struktura tabeli dla tabeli `rezyserzy`\r\n--\r\n\r\nCREATE TABLE IF NOT EXISTS `rezyserzy` (\r\n  `IDRezyser` int(10) unsigned NOT NULL AUTO_INCREMENT,\r\n  `Imie` text,\r\n  `Nazwisko` text,\r\n  PRIMARY KEY (`IDRezyser`)\r\n) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;\r\n\r\n--\r\n-- Zrzut danych tabeli `rezyserzy`\r\n--\r\n\r\nINSERT INTO `rezyserzy` (`IDRezyser`, `imie`, `nazwisko`) VALUES\r\n(1, 'Andy', 'Wachowski'),\r\n(2, 'George', 'Lucas'),\r\n(3, 'Steven', 'Spielberg');\r\n\r\n/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;\r\n/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;\r\n/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;\r\n\r\n",
      "index.html": "<DOCTYPE html>\r\n<html lang=\"pl\">\r\n<head>\r\n<meta charset=\"utf-8\">\r\n<title>Baza danych filmów</title>\r\n<style type=\"text/css\">\r\n\r\nbody,html\r\n{\r\n\tmargin: 0px;\r\n\tpadding: 0px;\r\n}\r\n#baner\r\n{\r\n\tcolor: white;\r\n\tbackground-color: #5F5D89;\r\n\tpadding:10px;\r\n\ttext-align: center;\r\n\tfont-family: Arial;\r\n}\r\n#pl\r\n{\r\n\tcolor: white;\r\n\tbackground-color: #716DA1;\r\n\twidth: 15%;\r\n\theight: 400px;\r\n\ttext-align: center;\r\n\tfloat: left;\r\n}\r\n#pp\r\n{\r\n\tcolor: white;\r\n\tbackground-color: #716DA1;\r\n\twidth: 15%;\r\n\theight: 400px;\r\n\ttext-align: center;\r\n\tfloat: left;\r\n}\r\n#ps\r\n{\r\n\twidth: 70%;\r\n\theight: 400px;\r\n\ttext-align: center;\r\n\tfloat: left;\r\n}\r\n#stopka\r\n{\r\n\tcolor: white;\r\n\tbackground-color: #5F5D89;\r\n\tpadding:10px;\r\n\ttext-align: center;\r\n\tfont-family: Arial;\r\n\tclear: both;\r\n}\r\na\r\n{\r\n\tcolor: white;\r\n}\r\n\r\n\r\n</style>\r\n</head>\r\n<body>\r\n<div id=\"calosc\">\r\n\t<div id=\"baner\">\r\n\t\t<h1>FILMY I AKTORZY – PROJEKT BAZY DANYCH</h1>\r\n\t</div>\r\n\t<div id=\"pl\">\r\n\t\t<h3>AUTOR STRONY</h3>\r\n\t\t00000000000\r\n\t</div>\r\n\t<div id=\"ps\">\r\n\t\t<img src=\"baza/projekt.jpg\" alt=\"filmoteka\" vspace=\"50\" border=\"1\">\r\n\t</div>\r\n\t<div id=\"pp\">\r\n\t\t<h3>PLIKI DO POBRANIA</h3> <br />\r\n\t\t<ul>\r\n\t\t\t<li><a href=\"baza/kwerendy.txt\">Kwerendy</a></li>\r\n\t\t\t<li><a href=\"baza/filmoteka.sql\">Eksport MySQL</a></li>\r\n\t\t</ul>\r\n\t</div>\r\n\t<div id=\"stopka\">\r\n\t\t<h2>Egzamin E.14 Tworzenie aplikacji internetowych i baz danych oraz administrowanie bazami.</h2>\r\n\t</div>\r\n</div>\r\n</body>\r\n</html>",
      "README.md": "# 📌 2016_zima - e14-03-16_01 (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** 2016 zima   e14 03 16 01  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** HTML5, CSS3, MySQL\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nZadanie praktyczne z przygotowania do egzaminu zawodowego obejmujące tworzenie aplikacji internetowej, arkusza stylów CSS oraz relacyjnej bazy danych.\n\n### Główne elementy rozwiązania:\n- Opracowanie semantycznej struktury strony w standardzie HTML5.\n- Utworzenie tabel, relacji oraz przygotowanie poprawnych kwerend SQL (SELECT, INSERT, UPDATE).\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 📄 **Arkusz PDF:** `E.14-03-16.01.pdf`\n- 🌐 **Pliki HTML:** `index.html`\n- 💾 **Baza / Kwerendy SQL:** `baza/filmoteka.sql`, `baza_zad3.sql`\n- 📝 **Pliki tekstowe / Kwerendy:** `baza/kwerendy.txt`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Import bazy danych:**\n   - Uruchom lokalny serwer MySQL (np. w panelu XAMPP).\n   - Otwórz w przeglądarce `http://localhost/phpmyadmin`.\n   - Utwórz nową bazę danych i zaimportuj plik SQL (`filmoteka.sql`, `baza_zad3.sql`).\n\n2. **Uruchomienie strony WWW:**\n   - Kliknij dwukrotnie plik `index.html` lub przeciągnij go do dowolnej przeglądarki.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n"
    }
  },
  {
    "id": "Kwalifikacja_E14_2016_zima_e14-05-16_01_WWW",
    "category": "Kwalifikacja_E14",
    "name": "2016 zima — E.14-05-16.01",
    "title": "2016 zima — E.14 05 16.01",
    "description": "Zadanie praktyczne z przygotowania do egzaminu zawodowego obejmujące tworzenie aplikacji internetowej, arkusza stylów CSS oraz relacyjnej bazy danych.",
    "technologies": [
      "CSS3"
    ],
    "folder": "Kwalifikacja_E14/2016_zima/e14-05-16_01/WWW",
    "mainPdf": "E.14-05-16.01.pdf",
    "mainHtml": null,
    "mainPhp": null,
    "mainSql": null,
    "mainZip": null,
    "hasReadme": false,
    "readmeContent": "",
    "pdfs": [
      "E.14-05-16.01.pdf"
    ],
    "htmls": [],
    "phps": [],
    "sqls": [],
    "zips": [],
    "txts": [],
    "scripts": [],
    "allFiles": [
      "kw1.jpg",
      "kw2.jpg",
      "kw3.jpg",
      "kw4.jpg",
      "E.14-05-16.01.pdf"
    ],
    "fileContents": {}
  },
  {
    "id": "Kwalifikacja_E14_2017_styczen",
    "category": "Kwalifikacja_E14",
    "name": "2017 styczen",
    "title": "Komis Samochodowy i Baza Pojazdów",
    "description": "Strona komisu samochodowego z wyszukiwarką aut, filtrowaniem po marce, modelu, roczniku i cenie z bazy MySQL.",
    "technologies": [
      "HTML5",
      "CSS3",
      "PHP",
      "MySQL"
    ],
    "folder": "Kwalifikacja_E14/2017_styczen",
    "mainPdf": null,
    "mainHtml": null,
    "mainPhp": "auta.php",
    "mainSql": null,
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# 📌 2017_styczen (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** Komis Samochodowy i Baza Pojazdów  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** HTML5, CSS3, PHP, MySQL\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nStrona komisu samochodowego z wyszukiwarką aut, filtrowaniem po marce, modelu, roczniku i cenie z bazy MySQL.\n\n### Główne elementy rozwiązania:\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Oprogramowanie skryptu backendowego w PHP (mysqli) do komunikacji z bazą danych MySQL.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 🐘 **Skrypty PHP:** `auta.php`\n- 🎨 **Style CSS:** `style.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n3. **Uruchomienie PHP:**\n   - Skopiuj ten rozpakowany folder do katalogu `C:\\xampp\\htdocs\\2017_styczen`.\n   - Uruchom moduł **Apache** w XAMPP.\n   - Otwórz w przeglądarce adres: `http://localhost/2017_styczen/auta.php`.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
    "pdfs": [],
    "htmls": [],
    "phps": [
      "auta.php"
    ],
    "sqls": [],
    "zips": [
      "paczka_zadania.zip"
    ],
    "txts": [],
    "scripts": [
      "style.css"
    ],
    "allFiles": [
      "auta.php",
      "paczka_zadania.zip",
      "README.md",
      "style.css"
    ],
    "fileContents": {
      "auta.php": "<!DOCTYPE html>\r\n<html lang=\"pl\">\r\n    <head>\r\n        <meta charset=\"utf-8\">\r\n        <title>Wykaz samochodów</title>\r\n        <link rel=\"stylesheet\" href=\"style.css\">\r\n    </head>\r\n    <body>\r\n        <div id=\"baner\"></div>\r\n        <div id=\"lewa\">\r\n        <H1>Wykaz samochodów</H1>\r\n            <ul>\r\n            <?php\r\n    error_reporting(E_ALL & ~E_NOTICE & ~E_WARNING);\r\n\r\n               $connect= mysqli_connect('localhost','root','','wedkarstwo') or die('blad w polaczeniu z baza danych');\r\n                $zapytanie1=\"select id, marka, model from samochody\";\r\n                $dane=mysqli_query($connect, $zapytanie1);\r\n                    foreach($dane as $dane1){\r\n                        echo \"<li>\".$dane1['id'].\" \";\r\n                        echo $dane1['marka'].\" \";\r\n                        echo $dane1['model'].\"</li>\";\r\n                    }\r\n                    mysqli_close($connect);\r\n                ?>\r\n        </ul>\r\n            <h1>Zamówienia</h1>\r\n            <ul>\r\n            <?php\r\n               $connect= mysqli_connect('localhost','root','','wedkarstwo') or die('blad w polaczeniu z baza danych');\r\n                $zapytanie2=\"select Samochody_id, Klient from zamowienia\";\r\n                $info1=mysqli_query($connect, $zapytanie2);\r\n                    foreach($info1 as $info2){\r\n                        echo \"<li>\".$info2['Samochody_id'].\" \";\r\n                        echo $info2['Klient'].\"</li>\";\r\n                    }\r\n                    mysqli_close($connect);\r\n                ?>\r\n        </ul>\r\n        </div>\r\n        <div id=\"prawa\">\r\n        <?php\r\n               $connect= mysqli_connect('localhost','root','','wedkarstwo') or die('blad w polaczeniu z baza danych');\r\n                $zapytanie2=\"select id, marka, model, rocznik, kolor, stan from samochody where marka='Fiat'\";\r\n                $info3=mysqli_query($connect, $zapytanie2);\r\n                    foreach($info3 as $info4){\r\n                        echo\"<p>\".$info4['id'].\"/\".$info4['marka'].\"/\".$info4['model'].\"/\".$info4['rocznik'].\"/\".$info4['kolor'].\"/\".$info4['stan'].\"</p>\";\r\n                    }\r\n                    mysqli_close($connect);\r\n                ?>\r\n        </div>\r\n        <div id=\"stopka\">sdsdsdsd</div>\r\n        \r\n        \r\n    </body>\r\n</html>\r\n    \r\n        ",
      "README.md": "# 📌 2017_styczen (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** Komis Samochodowy i Baza Pojazdów  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** HTML5, CSS3, PHP, MySQL\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nStrona komisu samochodowego z wyszukiwarką aut, filtrowaniem po marce, modelu, roczniku i cenie z bazy MySQL.\n\n### Główne elementy rozwiązania:\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Oprogramowanie skryptu backendowego w PHP (mysqli) do komunikacji z bazą danych MySQL.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 🐘 **Skrypty PHP:** `auta.php`\n- 🎨 **Style CSS:** `style.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n3. **Uruchomienie PHP:**\n   - Skopiuj ten rozpakowany folder do katalogu `C:\\xampp\\htdocs\\2017_styczen`.\n   - Uruchom moduł **Apache** w XAMPP.\n   - Otwórz w przeglądarce adres: `http://localhost/2017_styczen/auta.php`.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
      "style.css": "body{\r\n    margin:0;\r\n}\r\n\r\n#baner{\r\n    background-color: #45517D;\r\n    color:white;\r\n    font-size: 120%;\r\n    text-align:right;\r\n    height:60px;\r\n    width: 100%;\r\n}\r\n#lewa{\r\n    background-color: #61B2EC;\r\n    width:40%;\r\n    height: 500px;\r\n    float:left;\r\n}\r\n#prawa{\r\n    background-color: #8EC9F2;\r\n    width:60%;\r\n    height: 500px;\r\n    float:left;\r\n}\r\n\r\n#stopka{\r\n    background-color:#45517D;\r\n    clear:both;\r\n    color:white;\r\n    font-size: 150%;\r\n    text-align: center;\r\n}"
    }
  },
  {
    "id": "Kwalifikacja_E14_2017_wiosna_e14-01-17_06",
    "category": "Kwalifikacja_E14",
    "name": "2017 wiosna — E.14-01-17.06",
    "title": "Baza Danych Przychodni Lekarskiej",
    "description": "System ewidencji pacjentów, lekarzy i wizyt lekarskich z zaawansowanymi kwerendami SQL łączącymi tabele relacyjne.",
    "technologies": [
      "SQL (MySQL)",
      "HTML5",
      "CSS3"
    ],
    "folder": "Kwalifikacja_E14/2017_wiosna/e14-01-17_06",
    "mainPdf": "E.14-01-17.06.pdf",
    "mainHtml": null,
    "mainPhp": "pacjent.php",
    "mainSql": "przychodnia.sql",
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# 📌 2017_wiosna - e14-01-17_06 (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** Baza Danych Przychodni Lekarskiej  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** SQL (MySQL), HTML5, CSS3\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nSystem ewidencji pacjentów, lekarzy i wizyt lekarskich z zaawansowanymi kwerendami SQL łączącymi tabele relacyjne.\n\n### Główne elementy rozwiązania:\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Utworzenie tabel, relacji oraz przygotowanie poprawnych kwerend SQL (SELECT, INSERT, UPDATE).\n- Oprogramowanie skryptu backendowego w PHP (mysqli) do komunikacji z bazą danych MySQL.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 📄 **Arkusz PDF:** `E.14-01-17.06.pdf`\n- 🐘 **Skrypty PHP:** `pacjent.php`, `przychodnia.php`\n- 💾 **Baza / Kwerendy SQL:** `przychodnia.sql`\n- 📝 **Pliki tekstowe / Kwerendy:** `kwerendy.txt`\n- 🎨 **Style CSS:** `przychodnia.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Import bazy danych:**\n   - Uruchom lokalny serwer MySQL (np. w panelu XAMPP).\n   - Otwórz w przeglądarce `http://localhost/phpmyadmin`.\n   - Utwórz nową bazę danych i zaimportuj plik SQL (`przychodnia.sql`).\n\n3. **Uruchomienie PHP:**\n   - Skopiuj ten rozpakowany folder do katalogu `C:\\xampp\\htdocs\\e14-01-17_06`.\n   - Uruchom moduł **Apache** w XAMPP.\n   - Otwórz w przeglądarce adres: `http://localhost/e14-01-17_06/pacjent.php`.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
    "pdfs": [
      "E.14-01-17.06.pdf"
    ],
    "htmls": [],
    "phps": [
      "pacjent.php",
      "przychodnia.php"
    ],
    "sqls": [
      "przychodnia.sql"
    ],
    "zips": [
      "paczka_zadania.zip"
    ],
    "txts": [
      "kwerendy.txt"
    ],
    "scripts": [
      "przychodnia.css"
    ],
    "allFiles": [
      "E.14-01-17.06.pdf",
      "import-przychodnia.png",
      "kw1.jpg",
      "kw2.jpg",
      "kw3.jpg",
      "kwerendy.txt",
      "pacjent.php",
      "paczka_zadania.zip",
      "przychodnia.css",
      "przychodnia.php",
      "przychodnia.sql",
      "README.md"
    ],
    "fileContents": {
      "kwerendy.txt": "zapytanie 1: SELECT id, imie, nazwisko FROM `pacjenci`\r\n\r\nzapytanie 2: SELECT imie, nazwisko,choroby_przewlekle, uczulenia FROM `pacjenci`WHERE id=1\r\n\r\nzapytanie 3: SELECT imie, nazwisko FROM `pacjenci`WHERE uczulenia='brak'",
      "pacjent.php": "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"przychodnia.css\">\r\n\t<meta charset=\"utf-8\">\r\n\t<title>Przychodnia</title>\r\n</head>\r\n<body>\r\n\t<div id=\"cont\">\r\n\t\t<div id=\"baner\">\r\n\t\t\t<h1>PRAKTYKA LEKARZA RODZINNEGO</h1>\r\n\t\t</div>\r\n\t\t<div id=\"pl\">\r\n\t\t\t<h3>LISTA PACJENTÓW</h3>\r\n\t\t\t<?php \r\n\t\t\t\t$host=\"localhost\";\r\n\t\t\t\t$user=\"root\";\r\n\t\t\t\t$passwd=\"\";\r\n\t\t\t\t$dbname=\"przychodnia\";\r\n\t\t\t\t$polaczenie=mysqli_connect($host,$user,$passwd,$dbname);\r\n\t\t\t\t$sql=\"SELECT id, imie, nazwisko FROM `pacjenci`\";\r\n\t\t\t\t$wynik=mysqli_query($polaczenie,$sql);\r\n\t\t\t\twhile($wiersz=mysqli_fetch_assoc($wynik))\r\n\t\t\t\t{\t\t\r\n\t\t\t\t\techo '<p>'.$wiersz['id'].' '.$wiersz['imie'].' '.$wiersz['nazwisko'].'</p>';\r\n\t\t\t\t}\r\n\t\t\t\tmysqli_close($polaczenie);\r\n\r\n\t\t\t\t ?>\r\n\t\t\t<br><br>\r\n\t\t\t<form action=\"pacjent.php\" method=\"post\">  \r\n          \r\n    \t\t\tPodaj id:\r\n    \t\t\t<input type=\"number\" name=\"id\"/>    \r\n    \t\t\t<input type=\"submit\" value=\"Pokaż dane\"/>\r\n    \r\n  \t\t\t</form>\r\n  \t\t\t<h3>LEKARZE</h3>\r\n  \t\t\t\t<ul>\r\n  \t\t\t\t\t<li>pn - śr\r\n    \t\t\t\t\t<ol>\r\n      \t\t\t\t\t\t<li>Anna Kwaitkowska</li>\r\n      \t\t\t\t\t\t<li>Jan Kowalski</li>\r\n    \t\t\t\t\t</ol>\r\n  \t\t\t\t\t</li>\r\n  \t\t\t\t\t<li>czw - pt\r\n  \t\t\t\t\t\t<ol>\r\n      \t\t\t\t\t\t<li>Krzysztof Nowak</li>\r\n      \t\t\t\t\t</ol>\r\n  \t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t</div>\r\n\t\t<div id=\"pp\">\r\n\t\t\t<h2>INFORMACJE SZCZEGÓŁOWE O PACJENCIE</h2>\r\n\t\t\t<?php \r\n\t\t\t\t$id=$_POST['id'];\r\n\t\t\t\t$host=\"localhost\";\r\n\t\t\t\t$user=\"root\";\r\n\t\t\t\t$passwd=\"\";\r\n\t\t\t\t$dbname=\"przychodnia\";\r\n\t\t\t\t$polaczenie=mysqli_connect($host,$user,$passwd,$dbname);\r\n\t\t\t\t$sql=\"SELECT imie, nazwisko,choroby_przewlekle, uczulenia FROM `pacjenci`WHERE id=$id\";\r\n\t\t\t\t$wynik=mysqli_query($polaczenie,$sql);\r\n\t\t\t\twhile($wiersz=mysqli_fetch_assoc($wynik))\r\n\t\t\t\t{\t\t\r\n\t\t\t\t\techo '<p>Imię i Nazwisko: '.$wiersz['imie'].' '.$wiersz['nazwisko'].'</p>'.'<p>Choroby przewlekłe: '.$wiersz['choroby_przewlekle'].'</p>'.'<p>Uczulenia: '.$wiersz['uczulenia'].'</p>';\r\n\t\t\t\t}\r\n\t\t\t\tmysqli_close($polaczenie);\r\n\r\n\t\t\t\t ?>\r\n\t\t</div>\r\n\t\t<section id=\"footer\">\r\n\t\t\t<p>Utworzone przez: PESEL</p>\r\n\t\t\t<a href=\"kwerendy.txt\">Pobierz plik z kwerendami</a>\r\n\t\t</section>\r\n\t</div>\r\n</body>\r\n</html>",
      "przychodnia.css": "body{\r\n\tmargin: 0;\r\n}\r\n\r\n#cont{\r\nwidth: 100%;\r\nheight: 100%;\r\n}\r\n\r\n#baner{\r\nbackground-color: rgba(66, 22, 42);\r\ncolor: white;\r\nfont-size: 140%;\r\ntext-align: center;\r\nheight: 100px;\r\n}\r\n\r\n#pl{\r\nbackground-color: rgb(142, 115, 110);\r\nwidth: 30%;\r\nheight: 600px;\r\ncolor: white;\r\nfloat: left;\r\n}\r\n\r\n#pp{\r\nbackground-color: rgb(230, 230, 230);\r\nwidth: 70%;\r\nheight: 600px;\r\nfont-size: 140%;\r\nfloat: left;\r\n}\r\n\r\n#footer{\r\nbackground-color: rgb(142, 115,110);\r\ncolor: white;\r\ntext-align: right;\r\nheight: 100px;\r\nclear: both;\r\n}",
      "przychodnia.php": "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"przychodnia.css\">\r\n\t<meta charset=\"utf-8\">\r\n\t<title>Przychodnia</title>\r\n</head>\r\n<body>\r\n\t<div id=\"cont\">\r\n\t\t<div id=\"baner\">\r\n\t\t\t<h1>PRAKTYKA LEKARZA RODZINNEGO</h1>\r\n\t\t</div>\r\n\t\t<div id=\"pl\">\r\n\t\t\t<h3>LISTA PACJENTÓW</h3>\r\n\t\t\t\t<?php \r\n\t\t\t\t$host=\"localhost\";\r\n\t\t\t\t$user=\"root\";\r\n\t\t\t\t$passwd=\"\";\r\n\t\t\t\t$dbname=\"przychodnia\";\r\n\t\t\t\t$polaczenie=mysqli_connect($host,$user,$passwd,$dbname);\r\n\t\t\t\t$sql=\"SELECT id, imie, nazwisko FROM `pacjenci`\";\r\n\t\t\t\t$wynik=mysqli_query($polaczenie,$sql);\r\n\t\t\t\twhile($wiersz=mysqli_fetch_assoc($wynik))\r\n\t\t\t\t{\t\t\r\n\t\t\t\t\techo '<p>'.$wiersz['id'].' '.$wiersz['imie'].' '.$wiersz['nazwisko'].'</p>';\r\n\t\t\t\t}\r\n\t\t\t\tmysqli_close($polaczenie);\r\n\r\n\t\t\t\t ?>\r\n\t\t\t<br><br>\r\n\t\t\t<form action=\"pacjent.php\" method=\"post\">  \r\n          \r\n    \t\t\tPodaj id:\r\n    \t\t\t<input type=\"number\" name=\"id\"/>    \r\n    \t\t\t<input type=\"submit\" value=\"Pokaż dane\"/>\r\n    \r\n  \t\t\t</form>\r\n  \t\t\t<h3>LEKARZE</h3>\r\n  \t\t\t\t<ul>\r\n  \t\t\t\t\t<li>pn - śr\r\n    \t\t\t\t\t<ol>\r\n      \t\t\t\t\t\t<li>Anna Kwaitkowska</li>\r\n      \t\t\t\t\t\t<li>Jan Kowalski</li>\r\n    \t\t\t\t\t</ol>\r\n  \t\t\t\t\t</li>\r\n  \t\t\t\t\t<li>czw - pt\r\n  \t\t\t\t\t\t<ol>\r\n      \t\t\t\t\t\t<li>Krzysztof Nowak</li>\r\n      \t\t\t\t\t</ol>\r\n  \t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t</div>\r\n\t\t<div id=\"pp\">\r\n\t\t\t<h2>INFORMACJE SZCZEGÓŁOWE O PACJENCIE</h2>\r\n\t\t\t<p>Brak wybranego pacjenta</p>\r\n\t\t</div>\r\n\t\t<section id=\"footer\">\r\n\t\t\t<p>Utworzone przez: PESEL</p>\r\n\t\t\t<a href=\"kwerendy.txt\">Pobierz plik z kwerendami</a>\r\n\t\t</section>\r\n\t</div>\r\n</body>\r\n</html>",
      "przychodnia.sql": "-- phpMyAdmin SQL Dump\r\n-- version 4.5.1\r\n-- http://www.phpmyadmin.net\r\n--\r\n-- Host: 127.0.0.1\r\n-- Czas generowania: 30 Mar 2016, 08:45\r\n-- Wersja serwera: 10.1.9-MariaDB\r\n-- Wersja PHP: 5.6.15\r\n\r\nSET SQL_MODE = \"NO_AUTO_VALUE_ON_ZERO\";\r\nSET time_zone = \"+00:00\";\r\n\r\n\r\n/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;\r\n/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;\r\n/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;\r\n/*!40101 SET NAMES utf8mb4 */;\r\n\r\n--\r\n-- Baza danych: `przychodnia`\r\n--\r\n\r\n-- --------------------------------------------------------\r\n\r\n--\r\n-- Struktura tabeli dla tabeli `pacjenci`\r\n--\r\n\r\nCREATE TABLE `pacjenci` (\r\n  `id` int(10) UNSIGNED NOT NULL,\r\n  `imie` text,\r\n  `nazwisko` text,\r\n  `choroby_przewlekle` text,\r\n  `uczulenia` text,\r\n  `choroba` text,\r\n  `leki_przepisane` text,\r\n  `opis` text\r\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\r\n\r\n--\r\n-- Zrzut danych tabeli `pacjenci`\r\n--\r\n\r\nINSERT INTO `pacjenci` (`id`, `imie`, `nazwisko`, `choroby_przewlekle`, `uczulenia`, `choroba`, `leki_przepisane`, `opis`) VALUES\r\n(1, 'Anna', 'Kowalska', 'J45', 'trawy', 'J04', 'WitaminaC', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'),\r\n(2, 'Jan', 'Kowalski', 'E14', 'brak', 'J04', 'Glukoza', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'),\r\n(3, 'Jan', 'Nowak', 'B01', 'brak', 'J05', 'brak', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'),\r\n(4, 'Katarzyna', 'Nowak', 'B05', 'jajko, truskawki', 'J05', 'antybiotyk', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum');\r\n\r\n--\r\n-- Indeksy dla zrzutów tabel\r\n--\r\n\r\n--\r\n-- Indexes for table `pacjenci`\r\n--\r\nALTER TABLE `pacjenci`\r\n  ADD PRIMARY KEY (`id`);\r\n\r\n--\r\n-- AUTO_INCREMENT for dumped tables\r\n--\r\n\r\n--\r\n-- AUTO_INCREMENT dla tabeli `pacjenci`\r\n--\r\nALTER TABLE `pacjenci`\r\n  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;\r\n/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;\r\n/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;\r\n/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;\r\n\r\n",
      "README.md": "# 📌 2017_wiosna - e14-01-17_06 (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** Baza Danych Przychodni Lekarskiej  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** SQL (MySQL), HTML5, CSS3\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nSystem ewidencji pacjentów, lekarzy i wizyt lekarskich z zaawansowanymi kwerendami SQL łączącymi tabele relacyjne.\n\n### Główne elementy rozwiązania:\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Utworzenie tabel, relacji oraz przygotowanie poprawnych kwerend SQL (SELECT, INSERT, UPDATE).\n- Oprogramowanie skryptu backendowego w PHP (mysqli) do komunikacji z bazą danych MySQL.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 📄 **Arkusz PDF:** `E.14-01-17.06.pdf`\n- 🐘 **Skrypty PHP:** `pacjent.php`, `przychodnia.php`\n- 💾 **Baza / Kwerendy SQL:** `przychodnia.sql`\n- 📝 **Pliki tekstowe / Kwerendy:** `kwerendy.txt`\n- 🎨 **Style CSS:** `przychodnia.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Import bazy danych:**\n   - Uruchom lokalny serwer MySQL (np. w panelu XAMPP).\n   - Otwórz w przeglądarce `http://localhost/phpmyadmin`.\n   - Utwórz nową bazę danych i zaimportuj plik SQL (`przychodnia.sql`).\n\n3. **Uruchomienie PHP:**\n   - Skopiuj ten rozpakowany folder do katalogu `C:\\xampp\\htdocs\\e14-01-17_06`.\n   - Uruchom moduł **Apache** w XAMPP.\n   - Otwórz w przeglądarce adres: `http://localhost/e14-01-17_06/pacjent.php`.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n"
    }
  },
  {
    "id": "Kwalifikacja_E14_2017_wiosna_e14-02-17_06",
    "category": "Kwalifikacja_E14",
    "name": "2017 wiosna — E.14-02-17.06",
    "title": "Baza Danych Przychodni Lekarskiej",
    "description": "System ewidencji pacjentów, lekarzy i wizyt lekarskich z zaawansowanymi kwerendami SQL łączącymi tabele relacyjne.",
    "technologies": [
      "SQL (MySQL)",
      "HTML5",
      "CSS3"
    ],
    "folder": "Kwalifikacja_E14/2017_wiosna/e14-02-17_06",
    "mainPdf": "E.14-02-17.06.pdf",
    "mainHtml": null,
    "mainPhp": "pacjent.php",
    "mainSql": "przychodnia.sql",
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# 📌 2017_wiosna - e14-02-17_06 (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** Baza Danych Przychodni Lekarskiej  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** SQL (MySQL), HTML5, CSS3\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nSystem ewidencji pacjentów, lekarzy i wizyt lekarskich z zaawansowanymi kwerendami SQL łączącymi tabele relacyjne.\n\n### Główne elementy rozwiązania:\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Utworzenie tabel, relacji oraz przygotowanie poprawnych kwerend SQL (SELECT, INSERT, UPDATE).\n- Oprogramowanie skryptu backendowego w PHP (mysqli) do komunikacji z bazą danych MySQL.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 📄 **Arkusz PDF:** `E.14-02-17.06.pdf`\n- 🐘 **Skrypty PHP:** `pacjent.php`, `poradnia.php`\n- 💾 **Baza / Kwerendy SQL:** `przychodnia.sql`\n- 📝 **Pliki tekstowe / Kwerendy:** `kwerendy.txt`\n- 🎨 **Style CSS:** `poradnia.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Import bazy danych:**\n   - Uruchom lokalny serwer MySQL (np. w panelu XAMPP).\n   - Otwórz w przeglądarce `http://localhost/phpmyadmin`.\n   - Utwórz nową bazę danych i zaimportuj plik SQL (`przychodnia.sql`).\n\n3. **Uruchomienie PHP:**\n   - Skopiuj ten rozpakowany folder do katalogu `C:\\xampp\\htdocs\\e14-02-17_06`.\n   - Uruchom moduł **Apache** w XAMPP.\n   - Otwórz w przeglądarce adres: `http://localhost/e14-02-17_06/pacjent.php`.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
    "pdfs": [
      "E.14-02-17.06.pdf"
    ],
    "htmls": [],
    "phps": [
      "pacjent.php",
      "poradnia.php"
    ],
    "sqls": [
      "przychodnia.sql"
    ],
    "zips": [
      "paczka_zadania.zip"
    ],
    "txts": [
      "kwerendy.txt"
    ],
    "scripts": [
      "poradnia.css"
    ],
    "allFiles": [
      "E.14-02-17.06.pdf",
      "import-poradnia.png",
      "kw1.jpg",
      "kw2.jpg",
      "kw3.jpg",
      "kwerendy.txt",
      "pacjent.php",
      "paczka_zadania.zip",
      "poradnia.css",
      "poradnia.php",
      "przychodnia.sql",
      "README.md"
    ],
    "fileContents": {
      "kwerendy.txt": "Zapytanie 1: SELECT id, imie, nazwisko, choroba FROM `pacjenci`\r\nZapytanie 2: SELECT imie, nazwisko, leki_przepisane, opis FROM `pacjenci` WHERE id = 1\r\nZapytanie 3: SELECT imie, nazwisko FROM `pacjenci` WHERE choroba like \"J05\"",
      "pacjent.php": "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"poradnia.css\">\r\n\t<title>Poradnia</title>\r\n</head>\r\n<body>\r\n\t<header>\r\n\t\t<h1>PORADNIA SPECJALISTYCZNA</h1>\r\n\t</header>\r\n\t<nav>\r\n\t\t<h3>LEKARZE SPECJALIŚCI</h3>\r\n\t\t<table>\r\n\t\t\t<tr>\r\n\t\t\t\t<th colspan=\"2\">Poniedziałek</th>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<th>Anna Kowalska</th><th>otolaryngolog</th>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<th colspan=\"2\">Wtorek</th>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<th>Jan Nowak</th><th>kardiolog</th>\r\n\t\t\t</tr>\r\n\t\t</table>\r\n\t\t<h3>LISTA PACJENTÓW</h3>\r\n\t\t<?php \r\n\t\t\t$connect = mysqli_connect('localhost','root','','poradnia');\r\n\t\t\t$ask = \"SELECT id, imie, nazwisko, choroba FROM `pacjenci`\";\r\n\t\t\t$result = mysqli_query($connect,$ask);\r\n\t\t\twhile ($line=mysqli_fetch_row($result))\r\n\t\t\t{\r\n\t\t\t\techo $line[0].' '.$line[1].' '.$line\r\n\t\t\t\t[2].' '.$line[3].'<br>';\r\n\t\t\t}\r\n\r\n\t\t\tmysqli_close($connect);\r\n\t\t?>\r\n\t\t<br><br>\r\n\t\t<form method=\"post\" action=\"pacjent.php\">\r\n\t\t\t<label>Podaj id: <br>\r\n\t\t\t\t<input type=\"number\" name=\"id\"></label>\r\n\t\t\t\t<input type=\"submit\" value=\"Pokaż szczegóły\">\r\n\t\t</form>\r\n\t</nav>\r\n\t<main>\r\n\t\t<h2>KARTA PACJENTA</h2>\r\n\t\t<?php\r\n\t\t\t$id = $_POST['id'];\r\n\t\t\t$connect = mysqli_connect('localhost','root','','poradnia');\r\n\t\t\t$ask1 = \"SELECT imie, nazwisko, leki_przepisane, opis FROM `pacjenci` WHERE id = '$id'\";\r\n\t\t\t$result1 = mysqli_query($connect,$ask1);\r\n\t\t\twhile ($line1=mysqli_fetch_row($result1))\r\n\t\t\t{\r\n\t\t\t\techo '<p>Imię i Nazwisko: '.$line1[0].' '.$line1[1].'</p>'.'<p>Przepisane leki: '.$line1\r\n\t\t\t\t[2].'</p>'.'<p>Opis choroby: '.$line1[3].'</p>';\r\n\t\t\t}\r\n\r\n\t\t\tmysqli_close($connect);\r\n\t\t?>\r\n\t</main>\r\n\t<footer>\r\n\t\t<p>utworzone przez: </p>\r\n\t\t<a href=\"kwerendy.txt\">Kwerendy do pobrania</a>\r\n\t</footer>\r\n</body>\r\n</html>",
      "poradnia.css": "body, html\r\n{\r\n\tmargin: 0 auto;\r\n\tpadding: 0; \r\n}\r\n\r\nheader\r\n{\r\n\tbackground-color: rgb(48, 27, 94);\r\n\tcolor: white;\r\n\tfont-size:120%;\r\n\ttext-align: center;\r\n\theight: 80px;\r\n}\r\n\r\nnav\r\n{\r\n\tbackground-color: rgb(127, 118, 158);\r\n\twidth: 25%;\r\n\theight: 500px;\r\n\tcolor: white;\r\n\tfloat: left;\r\n}\r\n\r\nmain\r\n{\r\n\tbackground-color: rgb(220, 220, 220);\r\n\twidth: 75%;\r\n\theight: 500px;\r\n\tfont-size: 110%;\r\n\tfloat: left; \r\n}\r\n\r\nfooter\r\n{\r\n\tclear: left;\r\n\tbackground-color: rgb(127, 118, 158);\r\n\tcolor: white;\r\n\ttext-align: center;\r\n\theight: 80px;\r\n}\r\n\r\ntable, th, tr\r\n{\r\n\tborder: solid 1px;\r\n\tborder-color: white;\r\n}",
      "poradnia.php": "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"poradnia.css\">\r\n\t<title>Poradnia</title>\r\n</head>\r\n<body>\r\n\t<header>\r\n\t\t<h1>PORADNIA SPECJALISTYCZNA</h1>\r\n\t</header>\r\n\t<nav>\r\n\t\t<h3>LEKARZE SPECJALIŚCI</h3>\r\n\t\t<table>\r\n\t\t\t<tr>\r\n\t\t\t\t<th colspan=\"2\">Poniedziałek</th>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<th>Anna Kowalska</th><th>otolaryngolog</th>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<th colspan=\"2\">Wtorek</th>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<th>Jan Nowak</th><th>kardiolog</th>\r\n\t\t\t</tr>\r\n\t\t</table>\r\n\t\t<h3>LISTA PACJENTÓW</h3>\r\n\t\t<?php \r\n\t\t\t$connect = mysqli_connect('localhost','root','','poradnia');\r\n\t\t\t$ask = \"SELECT id, imie, nazwisko, choroba FROM `pacjenci`\";\r\n\t\t\t$result = mysqli_query($connect,$ask);\r\n\t\t\twhile ($line=mysqli_fetch_row($result))\r\n\t\t\t{\r\n\t\t\t\techo $line[0].' '.$line[1].' '.$line\r\n\t\t\t\t[2].' '.$line[3].'<br>';\r\n\t\t\t}\r\n\r\n\t\t\tmysqli_close($connect);\r\n\t\t?>\r\n\t\t<br><br>\r\n\t\t<form method=\"POST\" action=\"pacjent.php\">\r\n\t\t\t<label>Podaj id: <br>\r\n\t\t\t\t<input type=\"number\" name=\"id\"></label>\r\n\t\t\t\t<input type=\"submit\" value=\"Pokaż szczegóły\">\r\n\t\t</form>\r\n\t</nav>\r\n\t<main>\r\n\t\t<h2>KARTA PACJENTA</h2>\r\n\t\t<p>Nie wybrano pacjenta</p>\r\n\t</main>\r\n\t<footer>\r\n\t\t<p>utworzone przez: </p>\r\n\t\t<a href=\"kwerendy.txt\">Kwerendy do pobrania</a>\r\n\t</footer>\r\n</body>\r\n</html>",
      "przychodnia.sql": "-- phpMyAdmin SQL Dump\r\n-- version 4.5.1\r\n-- http://www.phpmyadmin.net\r\n--\r\n-- Host: 127.0.0.1\r\n-- Czas generowania: 30 Mar 2016, 08:45\r\n-- Wersja serwera: 10.1.9-MariaDB\r\n-- Wersja PHP: 5.6.15\r\n\r\nSET SQL_MODE = \"NO_AUTO_VALUE_ON_ZERO\";\r\nSET time_zone = \"+00:00\";\r\n\r\n\r\n/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;\r\n/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;\r\n/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;\r\n/*!40101 SET NAMES utf8mb4 */;\r\n\r\n--\r\n-- Baza danych: `przychodnia`\r\n--\r\n\r\n-- --------------------------------------------------------\r\n\r\n--\r\n-- Struktura tabeli dla tabeli `pacjenci`\r\n--\r\n\r\nCREATE TABLE `pacjenci` (\r\n  `id` int(10) UNSIGNED NOT NULL,\r\n  `imie` text,\r\n  `nazwisko` text,\r\n  `choroby_przewlekle` text,\r\n  `uczulenia` text,\r\n  `choroba` text,\r\n  `leki_przepisane` text,\r\n  `opis` text\r\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\r\n\r\n--\r\n-- Zrzut danych tabeli `pacjenci`\r\n--\r\n\r\nINSERT INTO `pacjenci` (`id`, `imie`, `nazwisko`, `choroby_przewlekle`, `uczulenia`, `choroba`, `leki_przepisane`, `opis`) VALUES\r\n(1, 'Anna', 'Kowalska', 'J45', 'trawy', 'J04', 'WitaminaC', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'),\r\n(2, 'Jan', 'Kowalski', 'E14', 'brak', 'J04', 'Glukoza', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'),\r\n(3, 'Jan', 'Nowak', 'B01', 'brak', 'J05', 'brak', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'),\r\n(4, 'Katarzyna', 'Nowak', 'B05', 'jajko, truskawki', 'J05', 'antybiotyk', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum');\r\n\r\n--\r\n-- Indeksy dla zrzutów tabel\r\n--\r\n\r\n--\r\n-- Indexes for table `pacjenci`\r\n--\r\nALTER TABLE `pacjenci`\r\n  ADD PRIMARY KEY (`id`);\r\n\r\n--\r\n-- AUTO_INCREMENT for dumped tables\r\n--\r\n\r\n--\r\n-- AUTO_INCREMENT dla tabeli `pacjenci`\r\n--\r\nALTER TABLE `pacjenci`\r\n  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;\r\n/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;\r\n/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;\r\n/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;\r\n\r\n",
      "README.md": "# 📌 2017_wiosna - e14-02-17_06 (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** Baza Danych Przychodni Lekarskiej  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** SQL (MySQL), HTML5, CSS3\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nSystem ewidencji pacjentów, lekarzy i wizyt lekarskich z zaawansowanymi kwerendami SQL łączącymi tabele relacyjne.\n\n### Główne elementy rozwiązania:\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Utworzenie tabel, relacji oraz przygotowanie poprawnych kwerend SQL (SELECT, INSERT, UPDATE).\n- Oprogramowanie skryptu backendowego w PHP (mysqli) do komunikacji z bazą danych MySQL.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 📄 **Arkusz PDF:** `E.14-02-17.06.pdf`\n- 🐘 **Skrypty PHP:** `pacjent.php`, `poradnia.php`\n- 💾 **Baza / Kwerendy SQL:** `przychodnia.sql`\n- 📝 **Pliki tekstowe / Kwerendy:** `kwerendy.txt`\n- 🎨 **Style CSS:** `poradnia.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Import bazy danych:**\n   - Uruchom lokalny serwer MySQL (np. w panelu XAMPP).\n   - Otwórz w przeglądarce `http://localhost/phpmyadmin`.\n   - Utwórz nową bazę danych i zaimportuj plik SQL (`przychodnia.sql`).\n\n3. **Uruchomienie PHP:**\n   - Skopiuj ten rozpakowany folder do katalogu `C:\\xampp\\htdocs\\e14-02-17_06`.\n   - Uruchom moduł **Apache** w XAMPP.\n   - Otwórz w przeglądarce adres: `http://localhost/e14-02-17_06/pacjent.php`.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n"
    }
  },
  {
    "id": "Kwalifikacja_E14_2017_wiosna_e14-03-17_06",
    "category": "Kwalifikacja_E14",
    "name": "2017 wiosna — E.14-03-17.06",
    "title": "Baza Danych Schroniska i Lecznicy Zwierząt",
    "description": "Baza danych zwierząt, szczepień i właścicieli z kwerendami filtrującymi stan zdrowia i terminy wizyt.",
    "technologies": [
      "SQL (MySQL)",
      "HTML5",
      "CSS3"
    ],
    "folder": "Kwalifikacja_E14/2017_wiosna/e14-03-17_06",
    "mainPdf": "E.14-03-17.06.pdf",
    "mainHtml": null,
    "mainPhp": "weterynarz.php",
    "mainSql": "zwierzeta.sql",
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# 📌 2017_wiosna - e14-03-17_06 (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** Baza Danych Schroniska i Lecznicy Zwierząt  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** SQL (MySQL), HTML5, CSS3\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nBaza danych zwierząt, szczepień i właścicieli z kwerendami filtrującymi stan zdrowia i terminy wizyt.\n\n### Główne elementy rozwiązania:\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Utworzenie tabel, relacji oraz przygotowanie poprawnych kwerend SQL (SELECT, INSERT, UPDATE).\n- Oprogramowanie skryptu backendowego w PHP (mysqli) do komunikacji z bazą danych MySQL.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 📄 **Arkusz PDF:** `E.14-03-17.06.pdf`\n- 🐘 **Skrypty PHP:** `weterynarz.php`\n- 💾 **Baza / Kwerendy SQL:** `zwierzeta.sql`\n- 📝 **Pliki tekstowe / Kwerendy:** `kwerendy.txt`\n- 🎨 **Style CSS:** `weterynarz.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Import bazy danych:**\n   - Uruchom lokalny serwer MySQL (np. w panelu XAMPP).\n   - Otwórz w przeglądarce `http://localhost/phpmyadmin`.\n   - Utwórz nową bazę danych i zaimportuj plik SQL (`zwierzeta.sql`).\n\n3. **Uruchomienie PHP:**\n   - Skopiuj ten rozpakowany folder do katalogu `C:\\xampp\\htdocs\\e14-03-17_06`.\n   - Uruchom moduł **Apache** w XAMPP.\n   - Otwórz w przeglądarce adres: `http://localhost/e14-03-17_06/weterynarz.php`.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
    "pdfs": [
      "E.14-03-17.06.pdf"
    ],
    "htmls": [],
    "phps": [
      "weterynarz.php"
    ],
    "sqls": [
      "zwierzeta.sql"
    ],
    "zips": [
      "paczka_zadania.zip"
    ],
    "txts": [
      "kwerendy.txt"
    ],
    "scripts": [
      "weterynarz.css"
    ],
    "allFiles": [
      "E.14-03-17.06.pdf",
      "import-weterynarz.png",
      "kw1.png",
      "kw2.png",
      "kw3.png",
      "kw4.png",
      "kwerendy.txt",
      "logo-mini.jpg",
      "logo.jpg",
      "paczka_zadania.zip",
      "README.md",
      "rys.png",
      "weterynarz.css",
      "weterynarz.php",
      "zwierzeta.sql"
    ],
    "fileContents": {
      "kwerendy.txt": "Zapytanie 1: SELECT imie, telefon, szczepienie, opis FROM `zwierzeta`\r\nZapytanie 2: SELECT id, imie, wlasciciel FROM `zwierzeta` WHERE `rodzaj`= 1\r\nZapytanie 3: SELECT `zwierzeta`.`imie`, `uslugi`.`nazwa` FROM `zwierzeta` INNER JOIN `uslugi` ON `zwierzeta`.`usluga_id` = `uslugi`.`id`\r\nZapytanie 4: SELECT AVG(`uslugi`.`cena`) FROM `uslugi`\r\n",
      "README.md": "# 📌 2017_wiosna - e14-03-17_06 (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** Baza Danych Schroniska i Lecznicy Zwierząt  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** SQL (MySQL), HTML5, CSS3\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nBaza danych zwierząt, szczepień i właścicieli z kwerendami filtrującymi stan zdrowia i terminy wizyt.\n\n### Główne elementy rozwiązania:\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Utworzenie tabel, relacji oraz przygotowanie poprawnych kwerend SQL (SELECT, INSERT, UPDATE).\n- Oprogramowanie skryptu backendowego w PHP (mysqli) do komunikacji z bazą danych MySQL.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 📄 **Arkusz PDF:** `E.14-03-17.06.pdf`\n- 🐘 **Skrypty PHP:** `weterynarz.php`\n- 💾 **Baza / Kwerendy SQL:** `zwierzeta.sql`\n- 📝 **Pliki tekstowe / Kwerendy:** `kwerendy.txt`\n- 🎨 **Style CSS:** `weterynarz.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Import bazy danych:**\n   - Uruchom lokalny serwer MySQL (np. w panelu XAMPP).\n   - Otwórz w przeglądarce `http://localhost/phpmyadmin`.\n   - Utwórz nową bazę danych i zaimportuj plik SQL (`zwierzeta.sql`).\n\n3. **Uruchomienie PHP:**\n   - Skopiuj ten rozpakowany folder do katalogu `C:\\xampp\\htdocs\\e14-03-17_06`.\n   - Uruchom moduł **Apache** w XAMPP.\n   - Otwórz w przeglądarce adres: `http://localhost/e14-03-17_06/weterynarz.php`.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
      "weterynarz.css": "body, html\r\n{\r\n\tmargin: 0 auto;\r\n\tpadding: 0;\r\n}\r\n\r\nheader\r\n{\r\n\tbackground-color: rgb(105, 88, 89);\r\n\tcolor: white;\r\n\tfont-size: 150%;\r\n\ttext-align: center;\r\n\theight: 80px;\r\n}\r\n\r\nnav\r\n{\r\n\tbackground-color: rgb(145, 127, 112);\r\n\twidth: 30%;\r\n\theight: 600px;\r\n\tfloat: left;\r\n}\r\n\r\nmain\r\n{\r\n\tbackground-color: rgb(184, 168, 169);\r\n\twidth: 50%;\r\n\theight: 600px;\r\n\tfloat: left;\r\n}\r\n\r\naside\r\n{\r\n\tbackground-color: rgb(145, 127, 112);\r\n\twidth: 20%;\r\n\theight: 600px;\r\n\tfloat: left;\r\n}\r\n\r\nh2\r\n{\r\n\tcolor: white;\r\n}\r\n\r\nimg\r\n{\r\n\tfloat: right;\r\n}\r\n\r\ntable, tr, th\r\n{\r\n\tborder: solid 1px;\r\n}",
      "weterynarz.php": "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"weterynarz.css\">\r\n\t<title>Weterynarz</title>\r\n</head>\r\n<body>\r\n\t<header>\r\n\t\t<h1>GABINET WETERYNARYJNY</h1>\r\n\t</header>\r\n\t<nav>\r\n\t\t<h2>PSY</h2>\r\n\t\t<?php\r\n\t\t$connect = mysqli_connect('localhost','root','','weterynarz');\r\n\t\t$ask = \"SELECT id, imie, wlasciciel FROM `zwierzeta` WHERE `rodzaj`= 1\";\r\n\t\t$result = mysqli_query($connect, $ask);\r\n\t\twhile ( $line= mysqli_fetch_row($result))\r\n\t\t{\r\n\t\t\techo $line[0].' '.$line[1].' '.$line[2].'<br>';\r\n\t\t}\r\n\r\n\r\n\t\tmysqli_close($connect);\r\n\t\t?>\r\n\t\t<h2>KOTY</h2>\r\n\t\t<?php\r\n\t\t$connect1 = mysqli_connect('localhost','root','','weterynarz');\r\n\t\t$ask1 = \"SELECT id, imie, wlasciciel FROM `zwierzeta` WHERE `rodzaj`= 2\";\r\n\t\t$result1 =mysqli_query($connect1,$ask1);\r\n\t\twhile ( $line1= mysqli_fetch_row($result1))\r\n\t\t{\r\n\t\t\techo $line1[0].' '.$line1[1].' '.$line1[2].'<br>';\r\n\t\t}\r\n\r\n\r\n\t\tmysqli_close($connect1);\r\n\t\t?>\r\n\t</nav>\r\n\t<main>\r\n\t\t<h2>SZCZEGÓŁOWA INFORMACJA O ZWIERZĘTACH</h2>\r\n\t\t<?php\r\n\t\t$connect2 = mysqli_connect('localhost','root','','weterynarz');\r\n\t\t$ask2 = \"SELECT imie, telefon, szczepienie, opis FROM `zwierzeta`\";\r\n\t\t$result2 = mysqli_query($connect2, $ask2) ;\r\n\t\twhile ($line2=mysqli_fetch_row($result2)) \r\n\t\t{\r\n\t\t\techo \"Pacjent: \".$line2[0].'<br>'.'Telefon właściciela: '.$line2[1].' '.' ostatnie szczepienie: '.$line2[2].'<br>'.'informacje: '.$line2[3].'<hr>';\r\n\t\t}\r\n\r\n\r\n\t\tmysqli_close($connect2);\r\n\t\t?>\r\n\t</main>\r\n\t<aside>\r\n\t\t<h2>WETERYNARZ</h2>\r\n\t\t<a href=\"logo.jpg\"><img src=\"logo-mini.jpg\"></a> \r\n\t\t<p>Krzysztof Nowakowski, lekarz weterynarii</p>\r\n\t\t<h2>GODZINY PRZYJĘĆ</h2>\r\n\t\t<table>\r\n\t\t\t<tr>\r\n\t\t\t\t<th>Poniedziałek</th><th>15:00 - 19:00</th>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<th>Wtorek</th><th>15:00 - 19:00</th>\r\n\t\t\t</tr>\r\n\t\t</table>\r\n\t</aside>\r\n</body>\r\n</html>",
      "zwierzeta.sql": "-- phpMyAdmin SQL Dump\r\n-- version 4.5.1\r\n-- http://www.phpmyadmin.net\r\n--\r\n-- Host: 127.0.0.1\r\n-- Czas generowania: 04 Kwi 2016, 10:24\r\n-- Wersja serwera: 10.1.9-MariaDB\r\n-- Wersja PHP: 5.6.15\r\n\r\nSET SQL_MODE = \"NO_AUTO_VALUE_ON_ZERO\";\r\nSET time_zone = \"+00:00\";\r\n\r\n\r\n/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;\r\n/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;\r\n/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;\r\n/*!40101 SET NAMES utf8mb4 */;\r\n\r\n--\r\n-- Baza danych: `wet2`\r\n--\r\n\r\n-- --------------------------------------------------------\r\n\r\n--\r\n-- Struktura tabeli dla tabeli `uslugi`\r\n--\r\n\r\nCREATE TABLE `uslugi` (\r\n  `id` int(10) UNSIGNED NOT NULL,\r\n  `nazwa` text,\r\n  `cena` float DEFAULT NULL\r\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\r\n\r\n--\r\n-- Zrzut danych tabeli `uslugi`\r\n--\r\n\r\nINSERT INTO `uslugi` (`id`, `nazwa`, `cena`) VALUES\r\n(1, 'pazury', 30),\r\n(2, 'mycie', 20),\r\n(3, 'czesanie', 10),\r\n(4, 'uszy', 30);\r\n\r\n-- --------------------------------------------------------\r\n\r\n--\r\n-- Struktura tabeli dla tabeli `zwierzeta`\r\n--\r\n\r\nCREATE TABLE `zwierzeta` (\r\n  `id` int(10) UNSIGNED NOT NULL,\r\n  `usluga_id` int(11) NOT NULL,\r\n  `rodzaj` int(10) UNSIGNED DEFAULT NULL,\r\n  `imie` text,\r\n  `wlasciciel` text,\r\n  `telefon` text,\r\n  `nastepna_wizyta` date DEFAULT NULL,\r\n  `szczepienie` year(4) DEFAULT NULL,\r\n  `opis` text\r\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\r\n\r\n--\r\n-- Zrzut danych tabeli `zwierzeta`\r\n--\r\n\r\nINSERT INTO `zwierzeta` (`id`, `usluga_id`, `rodzaj`, `imie`, `wlasciciel`, `telefon`, `nastepna_wizyta`, `szczepienie`, `opis`) VALUES\r\n(1, 3, 1, 'Fafik', 'Adam Kowalski', '111222333', '2017-06-30', 2016, 'problemy z uszami'),\r\n(2, 2, 1, 'Brutus', 'Anna Wysocka', '222333444', '2017-06-26', 2016, 'zapalenie krtani'),\r\n(4, 1, 1, 'Saba', 'Monika Nowak', '333444555', NULL, 2015, 'kroplówka'),\r\n(5, 0, 1, 'Alma', 'Jan Kowalewski', '444555666', '2017-07-03', NULL, 'antybiotyk'),\r\n(6, 4, 2, 'Figaro', 'Anna Kowalska', '555666777', NULL, NULL, 'problemy z uszami'),\r\n(7, 0, 2, 'Dika', 'Katarzyna Kowal', '666777888', '2017-06-30', 2016, 'operacja'),\r\n(8, 2, 2, 'Fuks', 'Jan Nowak', '888999111', '2017-07-04', 2016, 'antybiotyk');\r\n\r\n--\r\n-- Indeksy dla zrzutów tabel\r\n--\r\n\r\n--\r\n-- Indexes for table `uslugi`\r\n--\r\nALTER TABLE `uslugi`\r\n  ADD PRIMARY KEY (`id`);\r\n\r\n--\r\n-- Indexes for table `zwierzeta`\r\n--\r\nALTER TABLE `zwierzeta`\r\n  ADD PRIMARY KEY (`id`);\r\n\r\n--\r\n-- AUTO_INCREMENT for dumped tables\r\n--\r\n\r\n--\r\n-- AUTO_INCREMENT dla tabeli `uslugi`\r\n--\r\nALTER TABLE `uslugi`\r\n  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;\r\n--\r\n-- AUTO_INCREMENT dla tabeli `zwierzeta`\r\n--\r\nALTER TABLE `zwierzeta`\r\n  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;\r\n/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;\r\n/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;\r\n/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;\r\n\r\n"
    }
  },
  {
    "id": "Kwalifikacja_E14_2017_wiosna_e14-04-17_06",
    "category": "Kwalifikacja_E14",
    "name": "2017 wiosna — E.14-04-17.06",
    "title": "Baza Danych Schroniska i Lecznicy Zwierząt",
    "description": "Baza danych zwierząt, szczepień i właścicieli z kwerendami filtrującymi stan zdrowia i terminy wizyt.",
    "technologies": [
      "SQL (MySQL)",
      "HTML5",
      "CSS3"
    ],
    "folder": "Kwalifikacja_E14/2017_wiosna/e14-04-17_06",
    "mainPdf": "E.14-04-17.06.pdf",
    "mainHtml": null,
    "mainPhp": "salon.php",
    "mainSql": "zwierzeta.sql",
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# 📌 2017_wiosna - e14-04-17_06 (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** Baza Danych Schroniska i Lecznicy Zwierząt  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** SQL (MySQL), HTML5, CSS3\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nBaza danych zwierząt, szczepień i właścicieli z kwerendami filtrującymi stan zdrowia i terminy wizyt.\n\n### Główne elementy rozwiązania:\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Utworzenie tabel, relacji oraz przygotowanie poprawnych kwerend SQL (SELECT, INSERT, UPDATE).\n- Oprogramowanie skryptu backendowego w PHP (mysqli) do komunikacji z bazą danych MySQL.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 📄 **Arkusz PDF:** `E.14-04-17.06.pdf`\n- 🐘 **Skrypty PHP:** `salon.php`\n- 💾 **Baza / Kwerendy SQL:** `zwierzeta.sql`\n- 📝 **Pliki tekstowe / Kwerendy:** `kwerendy.txt`\n- 🎨 **Style CSS:** `salon.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Import bazy danych:**\n   - Uruchom lokalny serwer MySQL (np. w panelu XAMPP).\n   - Otwórz w przeglądarce `http://localhost/phpmyadmin`.\n   - Utwórz nową bazę danych i zaimportuj plik SQL (`zwierzeta.sql`).\n\n3. **Uruchomienie PHP:**\n   - Skopiuj ten rozpakowany folder do katalogu `C:\\xampp\\htdocs\\e14-04-17_06`.\n   - Uruchom moduł **Apache** w XAMPP.\n   - Otwórz w przeglądarce adres: `http://localhost/e14-04-17_06/salon.php`.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
    "pdfs": [
      "E.14-04-17.06.pdf"
    ],
    "htmls": [],
    "phps": [
      "salon.php"
    ],
    "sqls": [
      "zwierzeta.sql"
    ],
    "zips": [
      "paczka_zadania.zip"
    ],
    "txts": [
      "kwerendy.txt"
    ],
    "scripts": [
      "salon.css"
    ],
    "allFiles": [
      "E.14-04-17.06.pdf",
      "import-salon.png",
      "kw1.png",
      "kw2.png",
      "kw3.png",
      "kw4.png",
      "kwerendy.txt",
      "paczka_zadania.zip",
      "pies-mini.jpg",
      "pies.jpg",
      "README.md",
      "rys.png",
      "salon.css",
      "salon.php",
      "zwierzeta.sql"
    ],
    "fileContents": {
      "kwerendy.txt": "Zapytanie 1: SELECT nazwa, cena FROM `uslugi`\r\nZapytanie 2: SELECT `zwierzeta`.`imie`, `zwierzeta`.`rodzaj`, `zwierzeta`.`nastepna_wizyta`, `zwierzeta`.`telefon` FROM `zwierzeta` WHERE `zwierzeta`.`nastepna_wizyta` != 0\r\nZapytanie 3: SELECT `zwierzeta`.`rodzaj`, `uslugi`.`nazwa` FROM `zwierzeta` INNER JOIN `uslugi` ON `zwierzeta`.`usluga_id` = `uslugi`.`id`\r\nZapytanie 4: SELECT MIN(`uslugi`.`cena`) FROM `uslugi`",
      "README.md": "# 📌 2017_wiosna - e14-04-17_06 (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** Baza Danych Schroniska i Lecznicy Zwierząt  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** SQL (MySQL), HTML5, CSS3\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nBaza danych zwierząt, szczepień i właścicieli z kwerendami filtrującymi stan zdrowia i terminy wizyt.\n\n### Główne elementy rozwiązania:\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Utworzenie tabel, relacji oraz przygotowanie poprawnych kwerend SQL (SELECT, INSERT, UPDATE).\n- Oprogramowanie skryptu backendowego w PHP (mysqli) do komunikacji z bazą danych MySQL.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 📄 **Arkusz PDF:** `E.14-04-17.06.pdf`\n- 🐘 **Skrypty PHP:** `salon.php`\n- 💾 **Baza / Kwerendy SQL:** `zwierzeta.sql`\n- 📝 **Pliki tekstowe / Kwerendy:** `kwerendy.txt`\n- 🎨 **Style CSS:** `salon.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Import bazy danych:**\n   - Uruchom lokalny serwer MySQL (np. w panelu XAMPP).\n   - Otwórz w przeglądarce `http://localhost/phpmyadmin`.\n   - Utwórz nową bazę danych i zaimportuj plik SQL (`zwierzeta.sql`).\n\n3. **Uruchomienie PHP:**\n   - Skopiuj ten rozpakowany folder do katalogu `C:\\xampp\\htdocs\\e14-04-17_06`.\n   - Uruchom moduł **Apache** w XAMPP.\n   - Otwórz w przeglądarce adres: `http://localhost/e14-04-17_06/salon.php`.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
      "salon.css": "body, html\r\n{\r\n\tmargin: 0 auto;\r\n\tpadding: 0;\r\n}\r\n\r\nheader \r\n{\r\n\tbackground-color: rgb(30, 137, 157);\r\n\tcolor: white;\r\n\tfont-size: 120%;\r\n\ttext-align: right;\r\n\theight: 100px;\r\n}\r\n\r\nnav, aside\r\n{\r\n\tfloat: left;\r\n\tbackground-color: rgb(58, 159,178);\r\n\twidth: 20%;\r\n\theight: 550px;\r\n}\r\n\r\nmain\r\n{\r\n\tbackground-color: rgb(143, 212, 225);\r\n\twidth: 60%;\r\n\theight: 550px;\r\n\tfloat: left;\r\n}\r\n\r\nh3\r\n{\r\n\tcolor: white;\r\n}\r\n\r\nimg\r\n{\r\n\tfloat: left;\r\n}",
      "salon.php": "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"salon.css\">\r\n\t<title>Salon pielęgnacji</title>\r\n</head>\r\n<body>\r\n\t<header>\r\n\t\t<h1>SALON PIELĘGNACJI PSÓW I KOTÓW</h1>\r\n\t</header>\r\n\t<nav>\r\n\t\t<h3>SALON ZAPRASZA W DNIACH</h3>\r\n\t\t<ul>\r\n\t\t\t<li>Poniedziałek, 12:00 - 18:00</li>\r\n\t\t\t<li>Wtorek, 12:00 - 18:00</li>\r\n\t\t</ul>\r\n\t\t<a href=\"pies.jpg\"><img src=\"pies-mini.jpg\"></a>\r\n\t\t<p>Umów się telefonicznie na wizytę lub po prostu przyjdź!</p>\r\n\t</nav>\r\n\t<main>\r\n\t\t<h3>PRZYPOMNIENIE O NASTĘPNEJ WIZYCIE</h3>\r\n\t\t<?php\r\n\t\t$connect = mysqli_connect('localhost','root','','salon');\r\n\t\t$ask = \"SELECT `zwierzeta`.`imie`, `zwierzeta`.`rodzaj`, `zwierzeta`.`nastepna_wizyta`, `zwierzeta`.`telefon` FROM `zwierzeta` WHERE `zwierzeta`.`nastepna_wizyta` != 0\";\r\n\t\t$ask2 = \"SELECT `zwierzeta`.`imie`, `zwierzeta`.`rodzaj`, `zwierzeta`.`nastepna_wizyta`, `zwierzeta`.`telefon` FROM `zwierzeta` WHERE `zwierzeta`.`nastepna_wizyta` != 0 AND `zwierzeta`.`rodzaj` = 1\";\r\n\t\t$ask3 = \"SELECT `zwierzeta`.`imie`, `zwierzeta`.`rodzaj`, `zwierzeta`.`nastepna_wizyta`, `zwierzeta`.`telefon` FROM `zwierzeta` WHERE `zwierzeta`.`nastepna_wizyta` != 0 AND `zwierzeta`.`rodzaj` = 2\";\r\n\t\t$result = mysqli_query($connect, $ask);\r\n\t\t$result2 = mysqli_query($connect, $ask2);\t\t\r\n\t\t$result3 = mysqli_query($connect, $ask3);\t\t\r\n\t\twhile ($line = mysqli_fetch_row($result)) \r\n\t\t{\r\n\t\t\twhile ($line2 = mysqli_fetch_row($result2) ) \r\n\t\t\t{ \r\n\t\t\t\techo 'Pies: '.$line2[0].'<br>'.'Data następnej wizyty: '.$line2[2].', telefon właściciela: '.$line2[3].'<br>';\r\n\t\t\t}\r\n\t\t\twhile ($line3 = mysqli_fetch_row($result3) ) \r\n\t\t\t{ \r\n\t\t\t\techo 'Kot: '.$line3[0].'<br>'.'Data następnej wizyty: '.$line3[2].', telefon właściciela: '.$line3[3].'<br>';\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\tmysqli_close($connect);\r\n\t\t?>\r\n\t</main>\r\n\t<aside>\r\n\t\t<h3>USŁUGI</h3>\r\n\t\t<?php\r\n\t\t$connect = mysqli_connect('localhost','root','','salon');\r\n\t\t$ask1 = \"SELECT nazwa, cena FROM `uslugi`\";\r\n\t\t$result1 = mysqli_query($connect, $ask1);\r\n\t\twhile ($line1 = mysqli_fetch_row($result1))\r\n\t\t{\r\n\t\t\techo $line1[0].', '.$line1[1].'<br>';\r\n\t\t}\r\n\r\n\t\tmysqli_close($connect);\r\n\t\t?>\r\n\t</aside>\r\n</body>\r\n</html>",
      "zwierzeta.sql": "-- phpMyAdmin SQL Dump\r\n-- version 4.5.1\r\n-- http://www.phpmyadmin.net\r\n--\r\n-- Host: 127.0.0.1\r\n-- Czas generowania: 04 Kwi 2016, 10:24\r\n-- Wersja serwera: 10.1.9-MariaDB\r\n-- Wersja PHP: 5.6.15\r\n\r\nSET SQL_MODE = \"NO_AUTO_VALUE_ON_ZERO\";\r\nSET time_zone = \"+00:00\";\r\n\r\n\r\n/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;\r\n/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;\r\n/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;\r\n/*!40101 SET NAMES utf8mb4 */;\r\n\r\n--\r\n-- Baza danych: `wet2`\r\n--\r\n\r\n-- --------------------------------------------------------\r\n\r\n--\r\n-- Struktura tabeli dla tabeli `uslugi`\r\n--\r\n\r\nCREATE TABLE `uslugi` (\r\n  `id` int(10) UNSIGNED NOT NULL,\r\n  `nazwa` text,\r\n  `cena` float DEFAULT NULL\r\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\r\n\r\n--\r\n-- Zrzut danych tabeli `uslugi`\r\n--\r\n\r\nINSERT INTO `uslugi` (`id`, `nazwa`, `cena`) VALUES\r\n(1, 'pazury', 30),\r\n(2, 'mycie', 20),\r\n(3, 'czesanie', 10),\r\n(4, 'uszy', 30);\r\n\r\n-- --------------------------------------------------------\r\n\r\n--\r\n-- Struktura tabeli dla tabeli `zwierzeta`\r\n--\r\n\r\nCREATE TABLE `zwierzeta` (\r\n  `id` int(10) UNSIGNED NOT NULL,\r\n  `usluga_id` int(11) NOT NULL,\r\n  `rodzaj` int(10) UNSIGNED DEFAULT NULL,\r\n  `imie` text,\r\n  `wlasciciel` text,\r\n  `telefon` text,\r\n  `nastepna_wizyta` date DEFAULT NULL,\r\n  `szczepienie` year(4) DEFAULT NULL,\r\n  `opis` text\r\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\r\n\r\n--\r\n-- Zrzut danych tabeli `zwierzeta`\r\n--\r\n\r\nINSERT INTO `zwierzeta` (`id`, `usluga_id`, `rodzaj`, `imie`, `wlasciciel`, `telefon`, `nastepna_wizyta`, `szczepienie`, `opis`) VALUES\r\n(1, 3, 1, 'Fafik', 'Adam Kowalski', '111222333', '2017-06-30', 2016, 'problemy z uszami'),\r\n(2, 2, 1, 'Brutus', 'Anna Wysocka', '222333444', '2017-06-26', 2016, 'zapalenie krtani'),\r\n(4, 1, 1, 'Saba', 'Monika Nowak', '333444555', NULL, 2015, 'kroplówka'),\r\n(5, 0, 1, 'Alma', 'Jan Kowalewski', '444555666', '2017-07-03', NULL, 'antybiotyk'),\r\n(6, 4, 2, 'Figaro', 'Anna Kowalska', '555666777', NULL, NULL, 'problemy z uszami'),\r\n(7, 0, 2, 'Dika', 'Katarzyna Kowal', '666777888', '2017-06-30', 2016, 'operacja'),\r\n(8, 2, 2, 'Fuks', 'Jan Nowak', '888999111', '2017-07-04', 2016, 'antybiotyk');\r\n\r\n--\r\n-- Indeksy dla zrzutów tabel\r\n--\r\n\r\n--\r\n-- Indexes for table `uslugi`\r\n--\r\nALTER TABLE `uslugi`\r\n  ADD PRIMARY KEY (`id`);\r\n\r\n--\r\n-- Indexes for table `zwierzeta`\r\n--\r\nALTER TABLE `zwierzeta`\r\n  ADD PRIMARY KEY (`id`);\r\n\r\n--\r\n-- AUTO_INCREMENT for dumped tables\r\n--\r\n\r\n--\r\n-- AUTO_INCREMENT dla tabeli `uslugi`\r\n--\r\nALTER TABLE `uslugi`\r\n  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;\r\n--\r\n-- AUTO_INCREMENT dla tabeli `zwierzeta`\r\n--\r\nALTER TABLE `zwierzeta`\r\n  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;\r\n/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;\r\n/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;\r\n/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;\r\n\r\n"
    }
  },
  {
    "id": "Kwalifikacja_E14_2017_wiosna_e14-06-17_06",
    "category": "Kwalifikacja_E14",
    "name": "2017 wiosna — E.14-06-17.06",
    "title": "Formularz Adresowy i Rejestracja",
    "description": "Formularz walidacji danych adresowych z dynamicznym sprawdzaniem formatu kodu pocztowego i e-maila w JavaScript.",
    "technologies": [
      "HTML5",
      "CSS3",
      "JavaScript"
    ],
    "folder": "Kwalifikacja_E14/2017_wiosna/e14-06-17_06",
    "mainPdf": "E.14-06-17.06.pdf",
    "mainHtml": "adres.html",
    "mainPhp": null,
    "mainSql": null,
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# 📌 2017_wiosna - e14-06-17_06 (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** Formularz Adresowy i Rejestracja  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** HTML5, CSS3, JavaScript\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nFormularz walidacji danych adresowych z dynamicznym sprawdzaniem formatu kodu pocztowego i e-maila w JavaScript.\n\n### Główne elementy rozwiązania:\n- Opracowanie semantycznej struktury strony w standardzie HTML5.\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 📄 **Arkusz PDF:** `E.14-06-17.06.pdf`\n- 🌐 **Pliki HTML:** `adres.html`, `index.html`, `policz.html`\n- 🎨 **Style CSS:** `remont.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Uruchomienie strony WWW:**\n   - Kliknij dwukrotnie plik `adres.html` lub przeciągnij go do dowolnej przeglądarki.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
    "pdfs": [
      "E.14-06-17.06.pdf"
    ],
    "htmls": [
      "adres.html",
      "index.html",
      "policz.html"
    ],
    "phps": [],
    "sqls": [],
    "zips": [
      "paczka_zadania.zip"
    ],
    "txts": [],
    "scripts": [
      "remont.css"
    ],
    "allFiles": [
      "adres.html",
      "E.14-06-17.06.pdf",
      "index.html",
      "logotyp.png",
      "paczka_zadania.zip",
      "policz.html",
      "README.md",
      "remont.css",
      "zrzut1.jpg"
    ],
    "fileContents": {
      "adres.html": "<!DOCTYPE html>\r\n<!DOCTYPE html>\r\n<html>\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<title>Remonty mieszkań</title>\r\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"remont.css\">\r\n</head>\r\n<body>\r\n\t<div class=\"menu\">\r\n\t\t<img src=\"logotyp.png\">\r\n\t</div>\r\n\t<div class=\"menu\">\r\n\t\t<a href=\"index.html\">O FIRMIE</a>\r\n\t</div>\r\n\t<div class=\"menu\">\r\n\t\t<a href=\"adres.html\">ADRES</a>\r\n\t</div>\r\n\t<div class=\"menu\">\r\n\t\t<a href=\"policz.html\">POLICZ</a>\r\n\t</div>\r\n\t<div class=\"menu\">\r\n\t\t<a href=\"http://www.jakremontowac.pl/\" target=\"_blank\">LINKI</a>\r\n\t</div>\r\n\t<div id=\"bg\">\r\n\t\t<h1>Adres firmy</h1>\r\n\t\t<p>Remonty Mieszkań Krzysztof Kowalski</p>\r\n\t\t<p>ul. Korfantego 6</p>\r\n\t\t<p>Katowice</p>\r\n\t\t<a href=\"mailto:remonty@gmail.com\"><button>Skontaktuj się z nami</button></a>\r\n\t</div>\r\n\r\n\t<div id=\"stopka\">\r\n\t\t<p>Autor strony:00000000000</p>\r\n\t</div>\r\n\r\n</body>\r\n</html> ",
      "index.html": "<!DOCTYPE html>\r\n<!DOCTYPE html>\r\n<html>\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<title>Remonty mieszkań</title>\r\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"remont.css\">\r\n</head>\r\n<body>\r\n\t<div class=\"menu\">\r\n\t\t<img src=\"logotyp.png\">\r\n\t</div>\r\n\t<div class=\"menu\">\r\n\t\t<a href=\"index.html\">O FIRMIE</a>\r\n\t</div>\r\n\t<div class=\"menu\">\r\n\t\t<a href=\"adres.html\">ADRES</a>\r\n\t</div>\r\n\t<div class=\"menu\">\r\n\t\t<a href=\"policz.html\">POLICZ</a>\r\n\t</div>\r\n\t<div class=\"menu\">\r\n\t\t<a href=\"http://www.jakremontowac.pl/\" target=\"_blank\">LINKI</a>\r\n\t</div>\r\n\t<div id=\"bg\">\r\n\t\t\t<h1>Zakres prac</h1>\r\n\t\t\t<ul>\r\n\t\t\t\t<li>układanie podłóg</li>\r\n\t\t\t\t<li>układanie glazury\r\n\t\t\t\t\t<ol>\r\n\t\t\t\t\t\t<li>balkony</li>\r\n\t\t\t\t\t\t<li>łazienki</li>\r\n\t\t\t\t\t\t<li>kuchnie</li>\r\n\t\t\t\t\t</ol>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>malowanie</li>\r\n\t\t\t</ul>\r\n\t</div>\r\n\r\n\t<div id=\"stopka\">\r\n\t\t<p>Autor strony:00000000000</p>\r\n\t</div>\r\n\r\n</body>\r\n</html> ",
      "policz.html": "<!DOCTYPE html>\r\n<!DOCTYPE html>\r\n<html>\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<title>Remonty mieszkań</title>\r\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"remont.css\">\r\n\t<script type=\"text/javascript\">\r\n\t\tfunction obliczanie()\r\n\t\t{\r\n\t\t\tvar a= document.getElementById(\"num\").value;\r\n\t\t\tif (document.getElementById(\"plytki\").checked==true)\r\n\t\t\t {\r\n\t\t\t \tdocument.getElementById(\"wynik\").innerHTML=\"Koszt malowania: \" + a*70 + \"zł\";\r\n\t\t\t }\r\n\t\t\t else if (document.getElementById(\"plytki2\").checked==true) \r\n\t\t\t {\r\n\t\t\t \tdocument.getElementById(\"wynik\").innerHTML=\"Koszt malowania: \" + a*80 + \"zł\";\r\n\t\t\t }\r\n\t\t\t else\r\n\t\t\t {\r\n\t\t\t \tdocument.getElementById(\"wynik\").innerHTML=\"Wprowadź dane\";\r\n\t\t\t }\r\n\r\n\t\t}\r\n\t</script>\r\n</head>\r\n<body>\r\n\t<div class=\"menu\">\r\n\t\t<img src=\"logotyp.png\">\r\n\t</div>\r\n\t<div class=\"menu\">\r\n\t\t<a href=\"index.html\">O FIRMIE</a>\r\n\t</div>\r\n\t<div class=\"menu\">\r\n\t\t<a href=\"adres.html\">ADRES</a>\r\n\t</div>\r\n\t<div class=\"menu\">\r\n\t\t<a href=\"policz.html\">POLICZ</a>\r\n\t</div>\r\n\t<div class=\"menu\">\r\n\t\t<a href=\"http://www.jakremontowac.pl/\" target=\"_blank\">LINKI</a>\r\n\t</div>\r\n\t<div id=\"bg\">\r\n\t\t<h1>Kafelkowanie łazienki</h1>\r\n\t\t<p>powierzchnia w m2: <input type=\"number\" id=\"num\"></p> <br>\r\n\t\t<input type=\"radio\" id=\"plytki\">Płytki 20 x 20cm <input type=\"radio\" id=\"plytki2\"> Płytki 25 x 12 cm <br> <br>\r\n\t\t<input type=\"submit\" value=\"PRZELICZ\" id=\"przycisk\" onclick=\"obliczanie()\">\r\n\t\t<p id=\"wynik\"></p>\r\n\r\n\t</div>\r\n\r\n\t<div id=\"stopka\">\r\n\t\t<p>Autor strony:00000000000</p>\r\n\t</div>\r\n\r\n</body>\r\n</html> ",
      "README.md": "# 📌 2017_wiosna - e14-06-17_06 (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** Formularz Adresowy i Rejestracja  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** HTML5, CSS3, JavaScript\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nFormularz walidacji danych adresowych z dynamicznym sprawdzaniem formatu kodu pocztowego i e-maila w JavaScript.\n\n### Główne elementy rozwiązania:\n- Opracowanie semantycznej struktury strony w standardzie HTML5.\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 📄 **Arkusz PDF:** `E.14-06-17.06.pdf`\n- 🌐 **Pliki HTML:** `adres.html`, `index.html`, `policz.html`\n- 🎨 **Style CSS:** `remont.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Uruchomienie strony WWW:**\n   - Kliknij dwukrotnie plik `adres.html` lub przeciągnij go do dowolnej przeglądarki.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
      "remont.css": "body,html\r\n{\r\n\tmargin: 0px;\r\n\tpadding: 0px;\r\n}\r\n.menu\r\n{\r\n background-color: rgb(57, 180, 107);\r\n color: white;\r\n text-align: center;\r\n font-size: 150%;\r\n width: 20%;\r\n height: 220px;\r\n float: left;\r\n}\r\n#bg\r\n{\r\n\theight: 300px;\r\n\tclear: both;\r\n}\r\n#stopka\r\n{\r\n\tbackground-color: rgb(57, 180, 107);\r\n\tcolor: white;\r\n\ttext-align: center;\r\n\tfont-size: 150%;\r\n}\r\na\r\n{\r\n\tcolor: white;\r\n}\r\n#przycisk\r\n{\r\n\tbackground-color: green;\r\n\tborder: 1px green;\r\n\tcolor: white;\r\n\tfont-weight: bold;\r\n\tpadding: 15px;\r\n}\r\nh1\r\n{\r\n\tcolor: rgb(27, 163, 82);\r\n}"
    }
  },
  {
    "id": "Kwalifikacja_E14_2017_wiosna_e14-07-17_06",
    "category": "Kwalifikacja_E14",
    "name": "2017 wiosna — E.14-07-17.06",
    "title": "2017 wiosna — E.14 07 17.06",
    "description": "Zadanie praktyczne z przygotowania do egzaminu zawodowego obejmujące tworzenie aplikacji internetowej, arkusza stylów CSS oraz relacyjnej bazy danych.",
    "technologies": [
      "HTML5",
      "CSS3"
    ],
    "folder": "Kwalifikacja_E14/2017_wiosna/e14-07-17_06",
    "mainPdf": "E.14-07-17.06.pdf",
    "mainHtml": "index.html",
    "mainPhp": null,
    "mainSql": null,
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# 📌 2017_wiosna - e14-07-17_06 (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** 2017 wiosna   e14 07 17 06  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** HTML5, CSS3\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nZadanie praktyczne z przygotowania do egzaminu zawodowego obejmujące tworzenie aplikacji internetowej, arkusza stylów CSS oraz relacyjnej bazy danych.\n\n### Główne elementy rozwiązania:\n- Opracowanie semantycznej struktury strony w standardzie HTML5.\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 📄 **Arkusz PDF:** `E.14-07-17.06.pdf`\n- 🌐 **Pliki HTML:** `index.html`\n- 🎨 **Style CSS:** `agencja.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Uruchomienie strony WWW:**\n   - Kliknij dwukrotnie plik `index.html` lub przeciągnij go do dowolnej przeglądarki.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
    "pdfs": [
      "E.14-07-17.06.pdf"
    ],
    "htmls": [
      "index.html"
    ],
    "phps": [],
    "sqls": [],
    "zips": [
      "paczka_zadania.zip"
    ],
    "txts": [],
    "scripts": [
      "agencja.css"
    ],
    "allFiles": [
      "agencja.css",
      "E.14-07-17.06.pdf",
      "index.html",
      "logo.png",
      "paczka_zadania.zip",
      "projekt.png",
      "README.md",
      "zrzut1.jpg",
      "zrzut2.jpg"
    ],
    "fileContents": {
      "agencja.css": "body,html\r\n{\r\n\tmargin: 0px;\r\n\tpadding: 0px;\r\n}\r\n#pl\r\n{\r\n\twidth: 40%;\r\n\theight: 600px;\r\n\tbackground-color: #FF8989;\r\n\tfloat: left;\r\n}\r\n#pp\r\n{\r\n\twidth: 60%;\r\n\theight: 600px;\r\n\tbackground-color:  #7872D9;\r\n\tfloat: left;\r\n}\r\n#stopka\r\n{\r\n\tbackground-color: black;\r\n\tcolor: white;\r\n\tfont-size:150%;\r\n\ttext-align: right;\r\n\tclear: both;\r\n}\r\n\r\ntable,td\r\n{\r\n\tmargin: 20px;\r\n\tpadding: 30px;\r\n\tborder: 2px solid brown;\r\n\tborder-collapse: collapse;\r\n}\r\n#przycisk\r\n{\r\n\tmargin: 10px;\r\n\tpadding: 10px;\r\n\tborder: 2px solid blue;\r\n\tbackground-color: cyan;\r\n\tfont-size: 20px;\r\n}\r\nh1\r\n{\r\n\ttext-align: center;\r\n}",
      "index.html": "<!DOCTYPE html>\r\n<html lang=\"pl\">\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<title>Kup mieszkanie</title>\r\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"agencja.css\">\r\n\t<script type=\"text/javascript\">\r\n\t\tfunction obliczanie()\r\n\t\t{\r\n\t\t\tvar a= document.getElementById(\"num\").value;\r\n\t\t\tvar b= document.getElementById(\"num2\").value;\r\n\t\t\tvar suma=a*4000 + b*2000 + 2000;\r\n\t\t\tvar bezkafelkow= suma - 2000;\r\n\t\t\tif (document.getElementById(\"check\").checked==true) \r\n\t\t\t{\r\n\t\t\t\t\r\n\t\t\t\tdocument.getElementById(\"wynik\").innerHTML=\"Koszt mieszkania: \"+ suma + \"zł\";\r\n\t\t\t}\r\n\t\t\telse if (document.getElementById(\"check\").checked==false)\r\n\t\t\t {\r\n\t\t\t \tdocument.getElementById(\"wynik\").innerHTML=\"Koszt mieszkania: \"+ bezkafelkow + \"zł\";\r\n\t\t\t }\r\n\t\t}\r\n\t</script>\r\n</head>\r\n<body>\r\n\t<div id=\"pl\">\r\n\t\t<h1>AGENCJA NIERUCHOMOŚCI</h1>\r\n\t\t<h3>OFERUJEMY</h3>\r\n\t\t<ol>\r\n\t\t\t<li>Nowe mieszkania</li>\r\n\t\t\t<li>Domy w naszym mieście</li>\r\n\t\t\t<li>Domy w okolicy</li>\r\n\t\t</ol>\r\n\t\t<h3>NASI PRACOWNICY</h3>\r\n\t<table>\r\n\t\t<tr>\r\n\t\t\t<td rowspan=\"3\">Jan Nowak <br> Prezes</td>\r\n\t\t\t<td>Anna Kowalska</td>\r\n\t\t</tr> \r\n\t\t<tr>\r\n\t\t\t<td>Katarzyna Nowakowska</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>Krzysztof Kowalewski</td>\r\n\t\t</tr>\r\n\t</table>\r\n\t</div>\r\n\t<div id=\"pp\">\r\n\t\t<h1>KALKULATOR CENY MIESZKANIA</h1>\r\n\t\tPodaj metraż mieszkania w m<sup>2</sup> <br> \r\n\t\t<input type=\"number\" id=\"num\"> <br> <br>\r\n\t\tLiczba pokoi z zamontowanym okablowaniem sieciowym <br>\r\n\t\t<input type=\"number\" id=\"num2\"> <br> <br>\r\n\t\t<input type=\"checkbox\" id=\"check\">Kafelki w łazience? <br> <br>\r\n\t\t<input type=\"submit\" value=\"OBLICZ\" id=\"przycisk\" onclick=\"obliczanie()\">\r\n\t\t<p id=\"wynik\"></p>\r\n\t</div>\r\n\t<div id=\"stopka\">\r\n\t\t<p>Autor strony:000000000000<img src=\"logo.png\" alt=\"nieruchomości\"></p>\r\n\t\t\r\n\t</div>\r\n\r\n</body>\r\n</html>",
      "README.md": "# 📌 2017_wiosna - e14-07-17_06 (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** 2017 wiosna   e14 07 17 06  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** HTML5, CSS3\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nZadanie praktyczne z przygotowania do egzaminu zawodowego obejmujące tworzenie aplikacji internetowej, arkusza stylów CSS oraz relacyjnej bazy danych.\n\n### Główne elementy rozwiązania:\n- Opracowanie semantycznej struktury strony w standardzie HTML5.\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 📄 **Arkusz PDF:** `E.14-07-17.06.pdf`\n- 🌐 **Pliki HTML:** `index.html`\n- 🎨 **Style CSS:** `agencja.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Uruchomienie strony WWW:**\n   - Kliknij dwukrotnie plik `index.html` lub przeciągnij go do dowolnej przeglądarki.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n"
    }
  },
  {
    "id": "Kwalifikacja_E14_2017_zima_e14-01-17_01",
    "category": "Kwalifikacja_E14",
    "name": "2017 zima — E.14-01-17.01",
    "title": "Baza Danych Komisu Samochodowego",
    "description": "Projekt relacyjnej bazy danych komisu aut z kwerendami SQL oraz stroną prezentującą dostępne pojazdy.",
    "technologies": [
      "HTML5",
      "CSS3",
      "SQL (MySQL)",
      "PHP"
    ],
    "folder": "Kwalifikacja_E14/2017_zima/e14-01-17_01",
    "mainPdf": "E.14-01-17.01.pdf",
    "mainHtml": null,
    "mainPhp": "auto.php",
    "mainSql": "komis.sql",
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# 📌 2017_zima - e14-01-17_01 (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** Baza Danych Komisu Samochodowego  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** HTML5, CSS3, SQL (MySQL), PHP\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nProjekt relacyjnej bazy danych komisu aut z kwerendami SQL oraz stroną prezentującą dostępne pojazdy.\n\n### Główne elementy rozwiązania:\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Utworzenie tabel, relacji oraz przygotowanie poprawnych kwerend SQL (SELECT, INSERT, UPDATE).\n- Oprogramowanie skryptu backendowego w PHP (mysqli) do komunikacji z bazą danych MySQL.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 📄 **Arkusz PDF:** `E.14-01-17.01.pdf`\n- 🐘 **Skrypty PHP:** `auto.php`\n- 💾 **Baza / Kwerendy SQL:** `komis.sql`\n- 📝 **Pliki tekstowe / Kwerendy:** `kwerendy.txt`\n- 🎨 **Style CSS:** `style.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Import bazy danych:**\n   - Uruchom lokalny serwer MySQL (np. w panelu XAMPP).\n   - Otwórz w przeglądarce `http://localhost/phpmyadmin`.\n   - Utwórz nową bazę danych i zaimportuj plik SQL (`komis.sql`).\n\n3. **Uruchomienie PHP:**\n   - Skopiuj ten rozpakowany folder do katalogu `C:\\xampp\\htdocs\\e14-01-17_01`.\n   - Uruchom moduł **Apache** w XAMPP.\n   - Otwórz w przeglądarce adres: `http://localhost/e14-01-17_01/auto.php`.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
    "pdfs": [
      "E.14-01-17.01.pdf"
    ],
    "htmls": [],
    "phps": [
      "auto.php"
    ],
    "sqls": [
      "komis.sql"
    ],
    "zips": [
      "paczka_zadania.zip"
    ],
    "txts": [
      "kwerendy.txt"
    ],
    "scripts": [
      "style.css"
    ],
    "allFiles": [
      "auto.php",
      "auto.png",
      "bazalDanych.png",
      "E.14-01-17.01.pdf",
      "komis.sql",
      "kwerenda1.jpg",
      "kwerenda2.jpg",
      "kwerenda3.jpg",
      "kwerendy.txt",
      "paczka_zadania.zip",
      "README.md",
      "style.css"
    ],
    "fileContents": {
      "auto.php": "<!DOCTYPE html>\r\n<html>\r\n<meta charset=\"utf-8\">\r\n<link rel=\"stylesheet\" type=\"text/css\" href=\"style.css\">\r\n<head>\r\n\t<title>Komis Samochodowy</title>\r\n</head>\r\n<body>\r\n\t<div id=\"cont\">\r\n\t\t<div id=\"baner\">\r\n\t\t\t<h1>SAMOCHODY</h1>\t\t\t\r\n\t\t</div>\r\n\t\t<div id=\"pl\">\r\n\t\t\t<h2>Wykaz samochodów</h2>\r\n\t\t\t<?php\r\n\t\t\t\t$host=\"localhost\";\r\n\t\t\t\t$user=\"root\";\r\n\t\t\t\t$passwd=\"\";\r\n\t\t\t\t$dbname=\"komis\";\r\n\t\t\t\t$polaczenie=mysqli_connect($host,$user,$passwd,$dbname);\r\n\t\t\t\t$sql=\"SELECT id,marka,model FROM samochody\";\r\n\t\t\t\t$wynik=mysqli_query($polaczenie,$sql);\r\n\t\t\t\twhile($wiersz=mysqli_fetch_assoc($wynik))\r\n\t\t\t\t{\t\t\r\n\t\t\t\t\techo '<li>'.$wiersz['id'].' '.$wiersz['marka'].' '.$wiersz['model'].'</li>';\r\n\t\t\t\t}\r\n\t\t\t\tmysqli_close($polaczenie);\r\n\t\t\t?>\r\n\t\t\t<h2>Zamówienia</h2>\r\n\t\t\t<?php\r\n\t\t\t\t$host=\"localhost\";\r\n\t\t\t\t$user=\"root\";\r\n\t\t\t\t$passwd=\"\";\r\n\t\t\t\t$dbname=\"komis\";\r\n\t\t\t\t$polaczenie=mysqli_connect($host,$user,$passwd,$dbname);\r\n\t\t\t\t$sql=\"SELECT Samochody_id,Klient FROM zamowienia\";\r\n\t\t\t\t$wynik=mysqli_query($polaczenie,$sql);\r\n\t\t\t\twhile($wiersz=mysqli_fetch_assoc($wynik))\r\n\t\t\t\t{\t\t\r\n\t\t\t\t\techo '<li>'.$wiersz['Samochody_id'].' '.$wiersz['Klient'].' ' .'\t\t</li>';\r\n\t\t\t\t}\r\n\t\t\t\tmysqli_close($polaczenie);\r\n\t\t\t?>\r\n\t\t</div>\r\n\t\t<div id=\"pp\">\r\n\t\t\t<h2>Pełne dane: Fiat</h2>\r\n\t\t\t<?php\r\n\t\t\t\t$host=\"localhost\";\r\n\t\t\t\t$user=\"root\";\r\n\t\t\t\t$passwd=\"\";\r\n\t\t\t\t$dbname=\"komis\";\r\n\t\t\t\t$polaczenie=mysqli_connect($host,$user,$passwd,$dbname);\r\n\t\t\t\t$sql=\"SELECT id,marka,model,rocznik,kolor,stan FROM samochody WHERE marka LIKE 'Fiat'\";\r\n\t\t\t$wynik=mysqli_query($polaczenie,$sql);\r\n\t\t\twhile($wiersz=mysqli_fetch_assoc($wynik))\r\n\t\t\t{\t\t\r\n\t\t\techo $wiersz['id'].' / '.$wiersz['marka'].' / '.$wiersz['model'].' / '.$wiersz['rocznik'].' / '.$wiersz['kolor'].' / '.$wiersz['stan'].'</br>';\r\n\t\t}\r\n\t\tmysqli_close($polaczenie);\r\n\t?>\r\n\t\t</div>\r\n\t\t<section>\r\n  \t\t\t<table style=\"width:100%\">\r\n  \t\t\t\t<tr>\r\n    \t\t\t<th><a href=\"kwerendy.txt\">Kwerendy</a></th>\r\n    \t\t\t<th>Autor:</th>\r\n    \t\t\t<th><img src=\"auto.png\"></th>\r\n  \t\t\t\t</tr>\r\n  \t\t\t</table>\r\n\t\t</section>\r\n\t</div>\r\n\r\n</body>\r\n</html>",
      "komis.sql": "-- phpMyAdmin SQL Dump\r\n-- version 4.5.1\r\n-- http://www.phpmyadmin.net\r\n--\r\n-- Host: 127.0.0.1\r\n-- Czas generowania: 15 Lut 2016, 12:40\r\n-- Wersja serwera: 10.1.9-MariaDB\r\n-- Wersja PHP: 5.6.15\r\n\r\nSET SQL_MODE = \"NO_AUTO_VALUE_ON_ZERO\";\r\nSET time_zone = \"+00:00\";\r\n\r\n\r\n/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;\r\n/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;\r\n/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;\r\n/*!40101 SET NAMES utf8mb4 */;\r\n\r\n--\r\n-- Baza danych: `komis`\r\n--\r\n\r\n-- --------------------------------------------------------\r\n\r\n--\r\n-- Struktura tabeli dla tabeli `samochody`\r\n--\r\n\r\nCREATE TABLE `samochody` (\r\n  `id` int(10) UNSIGNED NOT NULL,\r\n  `marka` text,\r\n  `model` text,\r\n  `rocznik` year(4) DEFAULT NULL,\r\n  `kolor` text,\r\n  `stan` text\r\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\r\n\r\n--\r\n-- Zrzut danych tabeli `samochody`\r\n--\r\n\r\nINSERT INTO `samochody` (`id`, `marka`, `model`, `rocznik`, `kolor`, `stan`) VALUES\r\n(1, 'Fiat', 'Punto', 2016, 'czerwony', 'bardzo dobry'),\r\n(2, 'Fiat', 'Punto', 2002, 'czerwony', 'dobry'),\r\n(3, 'Fiat', 'Punto', 2007, 'niebieski', 'bardzo bobry'),\r\n(4, 'Opel', 'Corsa', 2016, 'grafitowy', 'bardzo dobry'),\r\n(5, 'Opel', 'Astra', 2003, 'niebieski', 'porysowany lakier'),\r\n(6, 'Toyota', 'Corolla', 2016, 'czerwony', 'bardzo dobry'),\r\n(7, 'Toyota', 'Corolla', 2014, 'szary', 'dobry'),\r\n(8, 'Toyota', 'Yaris', 2004, 'granatowy', 'dobry');\r\n\r\n-- --------------------------------------------------------\r\n\r\n--\r\n-- Struktura tabeli dla tabeli `zamowienia`\r\n--\r\n\r\nCREATE TABLE `zamowienia` (\r\n  `id` int(10) UNSIGNED NOT NULL,\r\n  `Samochody_id` int(10) UNSIGNED NOT NULL,\r\n  `Klient` text,\r\n  `telefon` text,\r\n  `dataZam` date DEFAULT NULL\r\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\r\n\r\n--\r\n-- Zrzut danych tabeli `zamowienia`\r\n--\r\n\r\nINSERT INTO `zamowienia` (`id`, `Samochody_id`, `Klient`, `telefon`, `dataZam`) VALUES\r\n(1, 3, 'Anna Kowalska', '111222333', '2016-02-15'),\r\n(2, 6, 'Jan Nowakowski', '222111333', '2016-02-15'),\r\n(3, 8, 'Marcin Kolwal', '333111222', '2016-02-15');\r\n\r\n--\r\n-- Indeksy dla zrzutów tabel\r\n--\r\n\r\n--\r\n-- Indexes for table `samochody`\r\n--\r\nALTER TABLE `samochody`\r\n  ADD PRIMARY KEY (`id`);\r\n\r\n--\r\n-- Indexes for table `zamowienia`\r\n--\r\nALTER TABLE `zamowienia`\r\n  ADD PRIMARY KEY (`id`);\r\n\r\n--\r\n-- AUTO_INCREMENT for dumped tables\r\n--\r\n\r\n--\r\n-- AUTO_INCREMENT dla tabeli `samochody`\r\n--\r\nALTER TABLE `samochody`\r\n  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;\r\n--\r\n-- AUTO_INCREMENT dla tabeli `zamowienia`\r\n--\r\nALTER TABLE `zamowienia`\r\n  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;\r\n/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;\r\n/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;\r\n/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */; \r\n\r\n",
      "kwerendy.txt": "ZAPYTANIE 1: SELECT `id`, `marka`, `model` FROM `samochody`\r\nZAPYTANIE 2: SELECT `Samochody_id`, `Klient` FROM `zamowienia`\r\nZAPYTANIE 3: SELECT * FROM `samochody` WHERE `marka` = 'Fiat'",
      "README.md": "# 📌 2017_zima - e14-01-17_01 (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** Baza Danych Komisu Samochodowego  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** HTML5, CSS3, SQL (MySQL), PHP\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nProjekt relacyjnej bazy danych komisu aut z kwerendami SQL oraz stroną prezentującą dostępne pojazdy.\n\n### Główne elementy rozwiązania:\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Utworzenie tabel, relacji oraz przygotowanie poprawnych kwerend SQL (SELECT, INSERT, UPDATE).\n- Oprogramowanie skryptu backendowego w PHP (mysqli) do komunikacji z bazą danych MySQL.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 📄 **Arkusz PDF:** `E.14-01-17.01.pdf`\n- 🐘 **Skrypty PHP:** `auto.php`\n- 💾 **Baza / Kwerendy SQL:** `komis.sql`\n- 📝 **Pliki tekstowe / Kwerendy:** `kwerendy.txt`\n- 🎨 **Style CSS:** `style.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Import bazy danych:**\n   - Uruchom lokalny serwer MySQL (np. w panelu XAMPP).\n   - Otwórz w przeglądarce `http://localhost/phpmyadmin`.\n   - Utwórz nową bazę danych i zaimportuj plik SQL (`komis.sql`).\n\n3. **Uruchomienie PHP:**\n   - Skopiuj ten rozpakowany folder do katalogu `C:\\xampp\\htdocs\\e14-01-17_01`.\n   - Uruchom moduł **Apache** w XAMPP.\n   - Otwórz w przeglądarce adres: `http://localhost/e14-01-17_01/auto.php`.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
      "style.css": "body{\r\n\tmargin:0;\r\n}\r\n\r\n\r\n#cont{\r\nheight: 100%;\r\nwidth: 100%;\r\n}\r\n\r\n#baner{\r\nbackground-color: #45517D;\r\ncolor: white;\r\nfont-size: 120%;\r\ntext-align: right;\r\nheight: 60px;\r\nwidth: 100%;\r\n}\r\n\r\n#pl{\r\nbackground-color: #61B2EC;\r\nwidth: 40%;\r\nheight: 500px;\r\nfloat: left;\r\n}\r\n\r\n#pp{\r\nbackground-color: #8EC9F2;\r\nwidth: 60%;\r\nheight: 500px;\r\nfloat: left;\r\n}\r\n\r\nsection { \r\n    display: block;\r\n    background-color: #45517D;\r\n    color:white;\r\n    font-size:150%;\r\n    text-align: center;\r\n}\r\n\r\na:visited {\r\n    color: green;\r\n}\r\n\r\na:link {\r\n    color: orange;\r\n}\r\n\r\nli {\r\n\tpadding: 2px;\r\n\tmargin-left: 10px;\r\n}"
    }
  },
  {
    "id": "Kwalifikacja_E14_2017_zima_e14-02-17_01",
    "category": "Kwalifikacja_E14",
    "name": "2017 zima — E.14-02-17.01",
    "title": "Baza Danych Komisu Samochodowego",
    "description": "Projekt relacyjnej bazy danych komisu aut z kwerendami SQL oraz stroną prezentującą dostępne pojazdy.",
    "technologies": [
      "HTML5",
      "CSS3",
      "SQL (MySQL)",
      "PHP"
    ],
    "folder": "Kwalifikacja_E14/2017_zima/e14-02-17_01",
    "mainPdf": "E.14-02-17.01.pdf",
    "mainHtml": null,
    "mainPhp": "samochody.php",
    "mainSql": "komis.sql",
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# 📌 2017_zima - e14-02-17_01 (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** Baza Danych Komisu Samochodowego  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** HTML5, CSS3, SQL (MySQL), PHP\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nProjekt relacyjnej bazy danych komisu aut z kwerendami SQL oraz stroną prezentującą dostępne pojazdy.\n\n### Główne elementy rozwiązania:\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Utworzenie tabel, relacji oraz przygotowanie poprawnych kwerend SQL (SELECT, INSERT, UPDATE).\n- Oprogramowanie skryptu backendowego w PHP (mysqli) do komunikacji z bazą danych MySQL.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 📄 **Arkusz PDF:** `E.14-02-17.01.pdf`\n- 🐘 **Skrypty PHP:** `samochody.php`\n- 💾 **Baza / Kwerendy SQL:** `komis.sql`\n- 📝 **Pliki tekstowe / Kwerendy:** `kwerendy.txt`\n- 🎨 **Style CSS:** `style.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Import bazy danych:**\n   - Uruchom lokalny serwer MySQL (np. w panelu XAMPP).\n   - Otwórz w przeglądarce `http://localhost/phpmyadmin`.\n   - Utwórz nową bazę danych i zaimportuj plik SQL (`komis.sql`).\n\n3. **Uruchomienie PHP:**\n   - Skopiuj ten rozpakowany folder do katalogu `C:\\xampp\\htdocs\\e14-02-17_01`.\n   - Uruchom moduł **Apache** w XAMPP.\n   - Otwórz w przeglądarce adres: `http://localhost/e14-02-17_01/samochody.php`.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
    "pdfs": [
      "E.14-02-17.01.pdf"
    ],
    "htmls": [],
    "phps": [
      "samochody.php"
    ],
    "sqls": [
      "komis.sql"
    ],
    "zips": [
      "paczka_zadania.zip"
    ],
    "txts": [
      "kwerendy.txt"
    ],
    "scripts": [
      "style.css"
    ],
    "allFiles": [
      "auto.png",
      "bazalDanych.png",
      "E.14-02-17.01.pdf",
      "komis.sql",
      "kw1.jpg",
      "kw2.jpg",
      "kw3.jpg",
      "kwerendy.txt",
      "paczka_zadania.zip",
      "README.md",
      "samochody.php",
      "style.css"
    ],
    "fileContents": {
      "komis.sql": "-- phpMyAdmin SQL Dump\r\n-- version 4.5.1\r\n-- http://www.phpmyadmin.net\r\n--\r\n-- Host: 127.0.0.1\r\n-- Czas generowania: 15 Lut 2016, 12:40\r\n-- Wersja serwera: 10.1.9-MariaDB\r\n-- Wersja PHP: 5.6.15\r\n\r\nSET SQL_MODE = \"NO_AUTO_VALUE_ON_ZERO\";\r\nSET time_zone = \"+00:00\";\r\n\r\n\r\n/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;\r\n/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;\r\n/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;\r\n/*!40101 SET NAMES utf8mb4 */;\r\n\r\n--\r\n-- Baza danych: `komis`\r\n--\r\n\r\n-- --------------------------------------------------------\r\n\r\n--\r\n-- Struktura tabeli dla tabeli `samochody`\r\n--\r\n\r\nCREATE TABLE `samochody` (\r\n  `id` int(10) UNSIGNED NOT NULL,\r\n  `marka` text,\r\n  `model` text,\r\n  `rocznik` year(4) DEFAULT NULL,\r\n  `kolor` text,\r\n  `stan` text\r\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\r\n\r\n--\r\n-- Zrzut danych tabeli `samochody`\r\n--\r\n\r\nINSERT INTO `samochody` (`id`, `marka`, `model`, `rocznik`, `kolor`, `stan`) VALUES\r\n(1, 'Fiat', 'Punto', 2016, 'czerwony', 'bardzo dobry'),\r\n(2, 'Fiat', 'Punto', 2002, 'czerwony', 'dobry'),\r\n(3, 'Fiat', 'Punto', 2007, 'niebieski', 'bardzo bobry'),\r\n(4, 'Opel', 'Corsa', 2016, 'grafitowy', 'bardzo dobry'),\r\n(5, 'Opel', 'Astra', 2003, 'niebieski', 'porysowany lakier'),\r\n(6, 'Toyota', 'Corolla', 2016, 'czerwony', 'bardzo dobry'),\r\n(7, 'Toyota', 'Corolla', 2014, 'szary', 'dobry'),\r\n(8, 'Toyota', 'Yaris', 2004, 'granatowy', 'dobry');\r\n\r\n-- --------------------------------------------------------\r\n\r\n--\r\n-- Struktura tabeli dla tabeli `zamowienia`\r\n--\r\n\r\nCREATE TABLE `zamowienia` (\r\n  `id` int(10) UNSIGNED NOT NULL,\r\n  `Samochody_id` int(10) UNSIGNED NOT NULL,\r\n  `Klient` text,\r\n  `telefon` text,\r\n  `dataZam` date DEFAULT NULL\r\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\r\n\r\n--\r\n-- Zrzut danych tabeli `zamowienia`\r\n--\r\n\r\nINSERT INTO `zamowienia` (`id`, `Samochody_id`, `Klient`, `telefon`, `dataZam`) VALUES\r\n(1, 3, 'Anna Kowalska', '111222333', '2016-02-15'),\r\n(2, 6, 'Jan Nowakowski', '222111333', '2016-02-15'),\r\n(3, 8, 'Marcin Kolwal', '333111222', '2016-02-15');\r\n\r\n--\r\n-- Indeksy dla zrzutów tabel\r\n--\r\n\r\n--\r\n-- Indexes for table `samochody`\r\n--\r\nALTER TABLE `samochody`\r\n  ADD PRIMARY KEY (`id`);\r\n\r\n--\r\n-- Indexes for table `zamowienia`\r\n--\r\nALTER TABLE `zamowienia`\r\n  ADD PRIMARY KEY (`id`);\r\n\r\n--\r\n-- AUTO_INCREMENT for dumped tables\r\n--\r\n\r\n--\r\n-- AUTO_INCREMENT dla tabeli `samochody`\r\n--\r\nALTER TABLE `samochody`\r\n  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;\r\n--\r\n-- AUTO_INCREMENT dla tabeli `zamowienia`\r\n--\r\nALTER TABLE `zamowienia`\r\n  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;\r\n/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;\r\n/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;\r\n/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */; \r\n\r\n",
      "kwerendy.txt": "Zapytanie 1: SELECT `id`, `model`, `kolor` FROM `samochody` WHERE `marka` LIKE \"Toyota\" AND `rocznik` = 2014\r\nZapytanie 2: SELECT `id`,`marka`, `model`, `rocznik` FROM `samochody`\r\nZapytanie 3: SELECT samochody.id, samochody.model, zamowienia.telefon FROM zamowienia, samochody WHERE samochody.id= zamowienia.id",
      "README.md": "# 📌 2017_zima - e14-02-17_01 (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** Baza Danych Komisu Samochodowego  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** HTML5, CSS3, SQL (MySQL), PHP\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nProjekt relacyjnej bazy danych komisu aut z kwerendami SQL oraz stroną prezentującą dostępne pojazdy.\n\n### Główne elementy rozwiązania:\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Utworzenie tabel, relacji oraz przygotowanie poprawnych kwerend SQL (SELECT, INSERT, UPDATE).\n- Oprogramowanie skryptu backendowego w PHP (mysqli) do komunikacji z bazą danych MySQL.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 📄 **Arkusz PDF:** `E.14-02-17.01.pdf`\n- 🐘 **Skrypty PHP:** `samochody.php`\n- 💾 **Baza / Kwerendy SQL:** `komis.sql`\n- 📝 **Pliki tekstowe / Kwerendy:** `kwerendy.txt`\n- 🎨 **Style CSS:** `style.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Import bazy danych:**\n   - Uruchom lokalny serwer MySQL (np. w panelu XAMPP).\n   - Otwórz w przeglądarce `http://localhost/phpmyadmin`.\n   - Utwórz nową bazę danych i zaimportuj plik SQL (`komis.sql`).\n\n3. **Uruchomienie PHP:**\n   - Skopiuj ten rozpakowany folder do katalogu `C:\\xampp\\htdocs\\e14-02-17_01`.\n   - Uruchom moduł **Apache** w XAMPP.\n   - Otwórz w przeglądarce adres: `http://localhost/e14-02-17_01/samochody.php`.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
      "samochody.php": "<!DOCTYPE html>\r\n<html>\r\n<meta charset=\"utf-8\">\r\n<link rel=\"stylesheet\" type=\"text/css\" href=\"style.css\">\r\n<head>\r\n\t<title>Wynajmujemy samochody</title>\r\n</head>\r\n<body>\r\n\t<div id=\"cont\">\r\n\t\t<div id=\"baner\">\r\n\t\t\t<h1>Wynajem Samochodów</h1>\t\t\t\r\n\t\t</div>\r\n\t\t<div id=\"pl\">\r\n\t\t\t<h2>DZIŚ POLECAMY TOYOTĘ ROCZNIK 2014</h2>\r\n\t\t\t<?php\r\n\t\t\t\t$host=\"localhost\";\r\n\t\t\t\t$user=\"root\";\r\n\t\t\t\t$passwd=\"\";\r\n\t\t\t\t$dbname=\"wynajem\";\r\n\t\t\t\t$polaczenie=mysqli_connect($host,$user,$passwd,$dbname);\r\n\t\t\t\t$sql=\"SELECT id,marka,kolor FROM samochody WHERE marka LIKE 'Toyota' AND  rocznik = 2014\";\r\n\t\t\t\t$wynik=mysqli_query($polaczenie,$sql);\r\n\t\t\t\twhile($wiersz=mysqli_fetch_assoc($wynik))\r\n\t\t\t\t{\t\t\r\n\t\t\t\t\techo '<ol>'.$wiersz['id'].' '.$wiersz['marka'].' '.$wiersz['kolor'].'</ol>';\r\n\t\t\t\t}\r\n\t\t\t\tmysqli_close($polaczenie);\r\n\t\t\t?>\r\n\t\t\t<h2>WSZYSTKIE DOSTĘPNE SAMOCHODY</h2>\r\n\t\t\t<?php\r\n\t\t\t\t$host=\"localhost\";\r\n\t\t\t\t$user=\"root\";\r\n\t\t\t\t$passwd=\"\";\r\n\t\t\t\t$dbname=\"wynajem\";\r\n\t\t\t\t$polaczenie=mysqli_connect($host,$user,$passwd,$dbname);\r\n\t\t\t\t$sql=\"SELECT id,marka,model,rocznik FROM samochody\";\r\n\t\t\t\t$wynik=mysqli_query($polaczenie,$sql);\r\n\t\t\t\twhile($wiersz=mysqli_fetch_assoc($wynik))\r\n\t\t\t\t{\t\t\r\n\t\t\t\t\techo '<ol>'.$wiersz['id'].' '.$wiersz['marka'].' '.$wiersz['model'].' '.$wiersz['rocznik'].' ' .'\t\t</ol>';\r\n\t\t\t\t}\r\n\t\t\t\tmysqli_close($polaczenie);\r\n\t\t\t?>\r\n\t\t</div>\r\n\t\t<div id=\"ps\">\r\n\t\t\t<h2>ZAMÓWIONE AUTA Z NUMERAMI TELEFONÓW KLIENTÓW</h2>\r\n\t\t\t<?php\r\n\t\t\t\t$host=\"localhost\";\r\n\t\t\t\t$user=\"root\";\r\n\t\t\t\t$passwd=\"\";\r\n\t\t\t\t$dbname=\"wynajem\";\r\n\t\t\t\t$polaczenie=mysqli_connect($host,$user,$passwd,$dbname);\r\n\t\t\t\t$sql=\"SELECT samochody.id, samochody.model, zamowienia.telefon FROM zamowienia, samochody WHERE samochody.id= zamowienia.id\";\r\n\t\t\t\t$wynik=mysqli_query($polaczenie,$sql);\r\n\t\t\t\twhile($wiersz=mysqli_fetch_assoc($wynik))\r\n\t\t\t\t{\t\t\r\n\t\t\t\t\techo '<ol>'.$wiersz['id'].' '.$wiersz['model'].' '.$wiersz['telefon'].' '.'</ol>';\r\n\t\t\t\t}\r\n\t\t\t\tmysqli_close($polaczenie);\r\n\t\t\t?>\r\n\t\t</div>\t\r\n\t\t\r\n\t\t<div id=\"pp\">\r\n\t\t\t<h2>NASZA OFERTA</h2>\r\n\t\t\t<li>Fiat</li>\r\n\t\t\t<li>Toyota</li>\r\n\t\t\t<li>Opel</li>\r\n\t\t\t<li>Mercedes</li>\r\n\t<p>Tu pobierzesz naszą <a href=\"komis.sql\">bazę danych </a></p>\r\n\t<p>Autor strony</p>\r\n\t\t</div>\r\n\t\t\r\n\t</div>\r\n\r\n</body>\r\n</html>",
      "style.css": "body{\r\n\tmargin:0;\r\n}\r\n\r\n\r\n#cont{\r\nheight: 100%;\r\nwidth: 100%;\r\n}\r\n\r\n#baner{\r\nbackground-color: #0B873D;\r\ncolor: white;\r\nfont-size: 150%;\r\ntext-align: center;\r\n}\r\n\r\n#pl{\r\nbackground-color: #8CE1AE;\r\nwidth: 40%;\r\nheight: 600px;\r\nfloat: left;\r\n}\r\n\r\n#ps{\r\n    background-color: #5CCB89;\r\nwidth: 40%;\r\nheight: 600px;\r\nfloat: left;\r\n}\r\n#pp{\r\nbackground-color: #1DA956;\r\nwidth: 20%;\r\nheight: 600px;\r\nfloat: left;\r\n}\r\n\r\nsection { \r\n    display: block;\r\n    background-color: #45517D;\r\n    color:white;\r\n    font-size:150%;\r\n    text-align: center;\r\n}\r\n\r\na:visited {\r\n    color: red;\r\n}\r\n\r\na:link {\r\n    color: brown;\r\n}\r\n\r\nli {\r\n\tmargin: 20px;\r\n    list-style-image: url(auto.png);\r\n}"
    }
  },
  {
    "id": "Kwalifikacja_E14_2017_zima_e14-03-17_01",
    "category": "Kwalifikacja_E14",
    "name": "2017 zima — E.14-03-17.01",
    "title": "2017 zima — E.14 03 17.01",
    "description": "Zadanie praktyczne z przygotowania do egzaminu zawodowego obejmujące tworzenie aplikacji internetowej, arkusza stylów CSS oraz relacyjnej bazy danych.",
    "technologies": [
      "HTML5",
      "CSS3",
      "PHP (mysqli)",
      "MySQL"
    ],
    "folder": "Kwalifikacja_E14/2017_zima/e14-03-17_01",
    "mainPdf": "E.14-03-17.01.pdf",
    "mainHtml": "sklep.html",
    "mainPhp": "formularz.php",
    "mainSql": "baza.sql",
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# 📌 2017_zima - e14-03-17_01 (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** 2017 zima   e14 03 17 01  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** HTML5, CSS3, PHP (mysqli), MySQL\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nZadanie praktyczne z przygotowania do egzaminu zawodowego obejmujące tworzenie aplikacji internetowej, arkusza stylów CSS oraz relacyjnej bazy danych.\n\n### Główne elementy rozwiązania:\n- Opracowanie semantycznej struktury strony w standardzie HTML5.\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Utworzenie tabel, relacji oraz przygotowanie poprawnych kwerend SQL (SELECT, INSERT, UPDATE).\n- Oprogramowanie skryptu backendowego w PHP (mysqli) do komunikacji z bazą danych MySQL.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 📄 **Arkusz PDF:** `E.14-03-17.01.pdf`\n- 🌐 **Pliki HTML:** `sklep.html`\n- 🐘 **Skrypty PHP:** `formularz.php`\n- 💾 **Baza / Kwerendy SQL:** `baza.sql`\n- 📝 **Pliki tekstowe / Kwerendy:** `kwerendy.txt`, `regulamin.txt`\n- 🎨 **Style CSS:** `muzyka.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Import bazy danych:**\n   - Uruchom lokalny serwer MySQL (np. w panelu XAMPP).\n   - Otwórz w przeglądarce `http://localhost/phpmyadmin`.\n   - Utwórz nową bazę danych i zaimportuj plik SQL (`baza.sql`).\n\n3. **Uruchomienie PHP:**\n   - Skopiuj ten rozpakowany folder do katalogu `C:\\xampp\\htdocs\\e14-03-17_01`.\n   - Uruchom moduł **Apache** w XAMPP.\n   - Otwórz w przeglądarce adres: `http://localhost/e14-03-17_01/formularz.php`.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
    "pdfs": [
      "E.14-03-17.01.pdf"
    ],
    "htmls": [
      "sklep.html"
    ],
    "phps": [
      "formularz.php"
    ],
    "sqls": [
      "baza.sql"
    ],
    "zips": [
      "paczka_zadania.zip"
    ],
    "txts": [
      "kwerendy.txt",
      "regulamin.txt"
    ],
    "scripts": [
      "muzyka.css"
    ],
    "allFiles": [
      "baza.sql",
      "bazaSklep.png",
      "E.14-03-17.01.pdf",
      "formularz.php",
      "kwerendy.txt",
      "muzyka.css",
      "paczka_zadania.zip",
      "README.md",
      "regulamin.txt",
      "sklep.html"
    ],
    "fileContents": {
      "baza.sql": "CREATE TABLE Konta (\r\n  id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,\r\n  login TEXT NULL,\r\n  haslo TEXT NULL,\r\n  PRIMARY KEY(id)\r\n);\r\n\r\nCREATE TABLE Uzytkownicy (\r\n  id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,\r\n  imie TEXT NULL,\r\n  nazwisko TEXT NULL,\r\n  adres TEXT NULL,\r\n  telefon TEXT NULL,\r\n  PRIMARY KEY(id)\r\n);\r\n\r\n",
      "formularz.php": "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<title>Sklep muzyczny</title>\r\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"muzyka.css\">\r\n</head>\r\n<body>\r\n\t<header>\r\n\t\t<h1>SKLEP MUZYCZNY</h1>\r\n\t</header>\r\n\t<nav>\r\n\t\t<h2>NASZA OFERTA</h2>\r\n\t\t<ol>\r\n\t\t\t<li>Instrumenty muzyczne</li>\r\n\t\t\t<li>Sprzęt audio</li>\r\n\t\t\t<li>Płyty CD</li>\r\n\t\t</ol>\r\n\t</nav>\r\n\t<main>\r\n\t<?php \r\n\t\t$imie=$_POST['name'];\r\n\t\t$nazw = $_POST['nazw'];\r\n\t\t$adr = $_POST['adr'];\r\n\t\t$tel = $_POST['tel'];\r\n\t\t$login = $_POST['log'];\r\n\t\t$passwd = $_POST['passwd'];\r\n\r\n\t\t$connect = mysqli_connect('localhost','root','','sklep') or die('błąd połączenia bazy danych');\r\n\t\t\r\n\r\n\t\tif(empty($imie) || empty($nazw) || empty($adr) || empty($tel))\r\n\t\t{\r\n\t\t\techo \"Nie podano danych użytkownika <br>\";\r\n\t\t}\r\n\t\telse if (isset($imie) || isset($nazw) || isset($adr) || isset($tel))\r\n\t\t{\r\n\t\t\t$sql = \"INSERT INTO `uzytkownicy` (`id`, `imie`, `nazwisko`, `adres`, `telefon`) VALUES (NULL, '$imie', '$nazw', '$adr', '$tel')\";\r\n\r\n\t\t\t$result = mysqli_query($connect, $sql);\r\n\t\t\techo 'Wpisano dane użytkownika <br> ';\r\n\t\t}\r\n\r\n\t\tif(empty($login) || empty($passwd))\r\n\t\t{\r\n\t\t\techo \"Nie podano danych logowania\";\r\n\t\t}\r\n\t\telse if (isset($login) || isset($passwd))\r\n\t\t{\r\n\t\t\t$sql1 = \"INSERT INTO `konta` (`id`, `login`, `haslo`) VALUES (NULL, '$login', '$passwd')\";\r\n\r\n\t\t\t$result1 = mysqli_query($connect, $sql1);\r\n\t\t\techo 'Wpisano dane logowania';\r\n\t\t}\r\n\r\n\t\t\r\n\r\n\t\tmysqli_close($connect);\r\n\t?>\r\n\t</main>\r\n</body>\r\n</html>",
      "kwerendy.txt": "Zapytanie 1: INSERT INTO `uzytkownicy` (`id`, `imie`, `nazwisko`, `adres`, `telefon`) VALUES (NULL, 'Jan', 'Nowak', 'Warszawa, Kopernika 4', '608111222');\r\nZapytanie 2: INSERT INTO `konta` (`id`, `login`, `haslo`) VALUES (NULL, 'janNowak', 'qwerty');\r\nZapytanie 3: SELECT `imie`, `nazwisko` FROM `uzytkownicy`\r\nZapytanie 4: SELECT `uzytkownicy`.`adres` FROM `uzytkownicy` WHERE `uzytkownicy`.`id` = 1",
      "muzyka.css": "html, body\r\n{\r\n\tmargin: auto;\r\n\theight: 100%;\r\n}\r\n\r\nheader\r\n{\r\n\tbackground-color: #812F8D;\r\n\tcolor: white;\r\n\tfont-size: 200%;\r\n\ttext-align: center;\r\n\tpadding: 10px;\r\n}\r\n\r\nnav\r\n{\r\n\tbackground-color: #BB74C4;\r\n\tcolor: white;\r\n\twidth: 25%;\r\n\tfloat: left;\r\n\theight: 100%;\t\r\n}\r\n\r\nmain\r\n{\r\n\twidth: 75%;\r\n\tfloat: left;\r\n}\r\nh2\r\n{\r\n\ttext-align: center;\r\n}\r\n\r\nform\r\n{\r\n\tmargin: 20px;\r\n}",
      "README.md": "# 📌 2017_zima - e14-03-17_01 (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** 2017 zima   e14 03 17 01  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** HTML5, CSS3, PHP (mysqli), MySQL\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nZadanie praktyczne z przygotowania do egzaminu zawodowego obejmujące tworzenie aplikacji internetowej, arkusza stylów CSS oraz relacyjnej bazy danych.\n\n### Główne elementy rozwiązania:\n- Opracowanie semantycznej struktury strony w standardzie HTML5.\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Utworzenie tabel, relacji oraz przygotowanie poprawnych kwerend SQL (SELECT, INSERT, UPDATE).\n- Oprogramowanie skryptu backendowego w PHP (mysqli) do komunikacji z bazą danych MySQL.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 📄 **Arkusz PDF:** `E.14-03-17.01.pdf`\n- 🌐 **Pliki HTML:** `sklep.html`\n- 🐘 **Skrypty PHP:** `formularz.php`\n- 💾 **Baza / Kwerendy SQL:** `baza.sql`\n- 📝 **Pliki tekstowe / Kwerendy:** `kwerendy.txt`, `regulamin.txt`\n- 🎨 **Style CSS:** `muzyka.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Import bazy danych:**\n   - Uruchom lokalny serwer MySQL (np. w panelu XAMPP).\n   - Otwórz w przeglądarce `http://localhost/phpmyadmin`.\n   - Utwórz nową bazę danych i zaimportuj plik SQL (`baza.sql`).\n\n3. **Uruchomienie PHP:**\n   - Skopiuj ten rozpakowany folder do katalogu `C:\\xampp\\htdocs\\e14-03-17_01`.\n   - Uruchom moduł **Apache** w XAMPP.\n   - Otwórz w przeglądarce adres: `http://localhost/e14-03-17_01/formularz.php`.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
      "regulamin.txt": "Regulamin sklepu muzycznego",
      "sklep.html": "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<title>Sklep muzyczny</title>\r\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"muzyka.css\">\r\n</head>\r\n<body>\r\n\t<header>\r\n\t\t<h1>SKLEP MUZYCZNY</h1>\r\n\t</header>\r\n\t<nav>\r\n\t\t<h2>NASZA OFERTA</h2>\r\n\t\t<ol>\r\n\t\t\t<li>Instrumenty muzyczne</li>\r\n\t\t\t<li>Sprzęt audio</li>\r\n\t\t\t<li>Płyty CD</li>\r\n\t\t</ol>\r\n\t</nav>\r\n\t<main>\r\n\t\t<h2>FORMULARZ REJESTRACYJNY</h2>\r\n\t\t<form method=\"post\" action=\"formularz.php\">\r\n\t\t\t<b><p>Dane osobowe</p></b>\r\n\t\t\t<label>Imię:<br>\r\n\t\t\t<input type=\"text\" name=\"name\"><br></label>\r\n\t\t\t<label>Nazwisko:<br>\r\n\t\t\t<input type=\"text\" name=\"nazw\"><br></label>\r\n\t\t\t<label>Adres:<br>\r\n\t\t\t<input type=\"text\" name=\"adr\"><br></label>\r\n\t\t\t<label>Telefon<br>\r\n\t\t\t<input type=\"number\" name=\"tel\"></label>\r\n\r\n\t\t<hr>\r\n\t\t\r\n\t\t<b><p>Dane logowania</p></b>\r\n\r\n\t\t<label>Login:<br>\r\n\t\t\t<input type=\"text\" name=\"log\"><br></label>\r\n\t\t\t<label>Hasło:<br>\r\n\t\t\t<input type=\"password\" name=\"passwd\"><br></label>\r\n\t\t\t<label><input type=\"checkbox\" name=\"ck\" checked>Akceptuję <a href=\"regulamin.txt\" target=\"_blank\">regulamin</a> sklepu<br></label>\r\n\t\t\t<input type=\"reset\" value=\"WYCZYŚĆ\" >\r\n\t\t\t<input type=\"submit\" value=\"REJESTRUJ\" >\t\t\t\r\n\t\t</form>\r\n\r\n\t\t\r\n\t</main>\r\n</body>\r\n</html>"
    }
  },
  {
    "id": "Kwalifikacja_E14_2017_zima_e14-04-17_01",
    "category": "Kwalifikacja_E14",
    "name": "2017 zima — E.14-04-17.01",
    "title": "2017 zima — E.14 04 17.01",
    "description": "Zadanie praktyczne z przygotowania do egzaminu zawodowego obejmujące tworzenie aplikacji internetowej, arkusza stylów CSS oraz relacyjnej bazy danych.",
    "technologies": [
      "HTML5",
      "CSS3",
      "PHP (mysqli)",
      "MySQL"
    ],
    "folder": "Kwalifikacja_E14/2017_zima/e14-04-17_01",
    "mainPdf": "E.14-04-17.01.pdf",
    "mainHtml": "forum.html",
    "mainPhp": "rejestracja.php",
    "mainSql": "forum.sql",
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# 📌 2017_zima - e14-04-17_01 (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** 2017 zima   e14 04 17 01  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** HTML5, CSS3, PHP (mysqli), MySQL\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nZadanie praktyczne z przygotowania do egzaminu zawodowego obejmujące tworzenie aplikacji internetowej, arkusza stylów CSS oraz relacyjnej bazy danych.\n\n### Główne elementy rozwiązania:\n- Opracowanie semantycznej struktury strony w standardzie HTML5.\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Utworzenie tabel, relacji oraz przygotowanie poprawnych kwerend SQL (SELECT, INSERT, UPDATE).\n- Oprogramowanie skryptu backendowego w PHP (mysqli) do komunikacji z bazą danych MySQL.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 📄 **Arkusz PDF:** `E.14-04-17.01.pdf`\n- 🌐 **Pliki HTML:** `forum.html`\n- 🐘 **Skrypty PHP:** `rejestracja.php`\n- 💾 **Baza / Kwerendy SQL:** `forum.sql`\n- 📝 **Pliki tekstowe / Kwerendy:** `kwerendy.txt`, `polityka.txt`\n- 🎨 **Style CSS:** `hobby.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Import bazy danych:**\n   - Uruchom lokalny serwer MySQL (np. w panelu XAMPP).\n   - Otwórz w przeglądarce `http://localhost/phpmyadmin`.\n   - Utwórz nową bazę danych i zaimportuj plik SQL (`forum.sql`).\n\n3. **Uruchomienie PHP:**\n   - Skopiuj ten rozpakowany folder do katalogu `C:\\xampp\\htdocs\\e14-04-17_01`.\n   - Uruchom moduł **Apache** w XAMPP.\n   - Otwórz w przeglądarce adres: `http://localhost/e14-04-17_01/rejestracja.php`.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
    "pdfs": [
      "E.14-04-17.01.pdf"
    ],
    "htmls": [
      "forum.html"
    ],
    "phps": [
      "rejestracja.php"
    ],
    "sqls": [
      "forum.sql"
    ],
    "zips": [
      "paczka_zadania.zip"
    ],
    "txts": [
      "kwerendy.txt",
      "polityka.txt"
    ],
    "scripts": [
      "hobby.css"
    ],
    "allFiles": [
      "E.14-04-17.01.pdf",
      "forum.html",
      "forum.sql",
      "hobby.css",
      "kw/bazaForum.jpg",
      "kw/kw1.jpg",
      "kw/kw2.jpg",
      "kw/kw3.jpg",
      "kw/kw4.jpg",
      "kwerendy.txt",
      "paczka_zadania.zip",
      "polityka.txt",
      "README.md",
      "rejestracja.php"
    ],
    "fileContents": {
      "forum.html": "<DOCTYPE html> \r\n<html lang=\"pl\">\r\n\t\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<title>Nasze hobby</title>\r\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"hobby.css\">\r\n</head>\r\n<body>\r\n\t<div id=\"baner\">FORUM HOBBYSTYCZNE</div>\r\n\t<div id=\"pl\">\r\n\t\t<h3>FORMULARZ REJESTRACJI DO FORUM</h3>\r\n\t\t<form method=\"post\" action=\"rejestracja.php\">\r\n\t\t\t<p><strong>Twoje dane</strong></p> <br />\r\n\t\t\t\t<label for=\"nick1\">Nick: </label> <br />\r\n\t\t\t\t<input type=\"text\" id=\"nick1\" name=\"nick\" >\r\n\t\t\t <br />\r\n\t\t\t\t<label for=\"hobby1\">Hobby:</label> <br />\r\n\t\t\t\t<input type=\"text\" name=\"hobby\" id=\"hobby1\">\r\n\t\t\t <br />\r\n\t\t\t\r\n\t\t\t\t<label for=\"zawod1\">Zawód: </label><br />\r\n\t\t\t\t<input type=\"text\" name=\"zawod\" id=\"zawod1\">\r\n\t\t\t <br />\r\n\r\n\t\t\t<input type=\"radio\" id=\"K\" name=\"zaznacz\" value=\"K\">\r\n\t\t\t<label for=\"K\">Kobieta</label> \r\n\t\t\t<input type=\"radio\" id=\"M\" name=\"zaznacz\" value=\"M\">\r\n\t\t\t<label for=\"M\">Mężczyzna</label> \r\n\r\n\t\t\t<hr>\r\n\r\n\t\t\t<p><strong>Dane logowania</strong></p> \r\n\t\t\t<label for=\"login1\">Login:</label> <br />\r\n\t\t\t<input type=\"text\" name=\"login\" id=\"login1\"> <br />\r\n\r\n\t\t\t<label for=\"haslo1\">Hasło: </label> <br />\r\n\t\t\t<input type=\"password\" name=\"haslo\" id=\"haslo1\"> <br /> <br />\r\n\r\n\t\t\t<input type=\"checkbox\" name=\"polityka\" checked=\"checked\">Zapoznałem się z <a href=\"polityka.txt\">Polityką bezpieczeństwa</a> <br />\r\n\t\t\t<input type=\"reset\" value=\"WYCZYŚĆ\">\r\n\t\t\t<input type=\"submit\" value=\"REJESTRUJ\">\r\n\r\n\r\n\r\n\t\t</form>\r\n\t</div>\r\n\t<div id=\"pp\">\r\n\t\t<h3>TEMATYKA FORUM</h3>\r\n\t\t\t<ul>\r\n\t\t\t\t<li>Hodowla zwierząt\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t<li>psy</li>\r\n\t\t\t\t\t<li>koty</li>\r\n\t\t\t\t    </ul>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>Muzyka</li>\r\n\t\t\t\t<li>Gry komputerowe</li>\r\n\t\t\t</ul>\r\n\t</div>\r\n\r\n</body>\r\n\r\n\r\n\r\n</html>",
      "forum.sql": "CREATE TABLE Uzytkownicy (\r\n  id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,\r\n  nick TEXT NULL,\r\n  zainteresowania TEXT NULL,\r\n  zawod TEXT NULL,\r\n  plec CHAR NULL,\r\n  PRIMARY KEY(id)\r\n);\r\n\r\nCREATE TABLE Konta (\r\n  id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,\r\n  login TEXT NULL,\r\n  haslo TEXT NULL,\r\n  PRIMARY KEY(id)\r\n);\r\n",
      "hobby.css": "#baner\r\n{\r\n\tbackground-color: #9A6000;\r\n\tcolor:white;\r\n\tfont-size: 180%;\r\n\ttext-align: center;\r\n\tpadding:20px;\r\n}\r\n#pl \r\n{\r\n\twidth: 60%;\r\n\tfloat: left;\r\n}\r\n#pp\r\n{\r\n\tbackground-color: #C47A00;\r\n\tcolor: white;\r\n\twidth: 40%;\r\n\theight: 100%;\r\n\tfloat: left;\r\n}\r\nh3 \r\n{\r\n\ttext-align: center;\r\n}\r\n#pp ul\r\n{\r\n margin: 10px;\r\n}",
      "kwerendy.txt": "Zapytanie 1: INSERT INTO uzytkownicy VALUES(NULL,'Anna','muzyka','informatyk','K');\r\nZapytanie 2: INSERT INTO konta  VALUES(NULL,'AKowalska','qazwsx');\r\nZapytanie 3: SELECT login,haslo FROM konta;\r\nZapytanie 4: SELECT zainteresowania FROM uzytkownicy WHERE id=1;",
      "polityka.txt": "Polityka Bezpiecze�stwa forum hobbystycznego",
      "README.md": "# 📌 2017_zima - e14-04-17_01 (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** 2017 zima   e14 04 17 01  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** HTML5, CSS3, PHP (mysqli), MySQL\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nZadanie praktyczne z przygotowania do egzaminu zawodowego obejmujące tworzenie aplikacji internetowej, arkusza stylów CSS oraz relacyjnej bazy danych.\n\n### Główne elementy rozwiązania:\n- Opracowanie semantycznej struktury strony w standardzie HTML5.\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Utworzenie tabel, relacji oraz przygotowanie poprawnych kwerend SQL (SELECT, INSERT, UPDATE).\n- Oprogramowanie skryptu backendowego w PHP (mysqli) do komunikacji z bazą danych MySQL.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 📄 **Arkusz PDF:** `E.14-04-17.01.pdf`\n- 🌐 **Pliki HTML:** `forum.html`\n- 🐘 **Skrypty PHP:** `rejestracja.php`\n- 💾 **Baza / Kwerendy SQL:** `forum.sql`\n- 📝 **Pliki tekstowe / Kwerendy:** `kwerendy.txt`, `polityka.txt`\n- 🎨 **Style CSS:** `hobby.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Import bazy danych:**\n   - Uruchom lokalny serwer MySQL (np. w panelu XAMPP).\n   - Otwórz w przeglądarce `http://localhost/phpmyadmin`.\n   - Utwórz nową bazę danych i zaimportuj plik SQL (`forum.sql`).\n\n3. **Uruchomienie PHP:**\n   - Skopiuj ten rozpakowany folder do katalogu `C:\\xampp\\htdocs\\e14-04-17_01`.\n   - Uruchom moduł **Apache** w XAMPP.\n   - Otwórz w przeglądarce adres: `http://localhost/e14-04-17_01/rejestracja.php`.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
      "rejestracja.php": "<DOCTYPE html> \r\n<html lang=\"pl\">\r\n\t\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<title>Nasze hobby</title>\r\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"hobby.css\">\r\n</head>\r\n<body>\r\n\t<div id=\"baner\">FORUM HOBBYSTYCZNE</div>\r\n\t<div id=\"pl\">\r\n\t\t<?php \r\n\r\n\t\t$nick=$_POST['nick'];\r\n\t\t$hobby=$_POST['hobby'];\r\n\t\t$zawod=$_POST['zawod'];\r\n\t\t$zaznacz=$_POST['zaznacz'];\r\n\t\t$login=$_POST['login'];\r\n\t\t$haslo=$_POST['haslo'];\r\n\t\t$polaczenie=mysqli_connect('localhost','root','','forum');\r\n\t\techo \"Konto $nick zostało zarejestrowane na forum hobbystycznym\";\r\n\t\t\tif (empty($zaznacz))\r\n\t\t\t{\r\n\t\t\t\techo \"Nie zaznaczono \";\r\n\t\t\t}\r\n\r\n\t\t\telse if (isset($_POST['zaznacz']))\r\n\t\t\t{\r\n\t\t\t\r\n\t\t\t\t$sql=\"INSERT INTO uzytkownicy VALUES(NULL,'$nick','$hobby','$zawod','$zaznacz')\";\r\n\t\t\t\t$wynik=mysqli_query($polaczenie,$sql);\r\n\t\t\t}\t\r\n\t\t\t\t\r\n\t\t\t\r\n\t\t\tif (empty($login) || empty($haslo)) \r\n\t\t\t{\r\n\t\t\t\techo \"Nie podano danych logowania\";\r\n\t\t\t}\r\n\r\n\t\t\telse if (isset($_POST['login']) && isset($_POST['haslo'])) {\r\n\t\t\t\t\t$sql2=\"INSERT INTO konta VALUES(NULL,'$login','$haslo')\";\r\n\t\t\t\t$wynik2=mysqli_query($polaczenie,$sql2);\r\n\t\t\t}\r\n\r\n\t\t\t \r\n\r\n\t\tmysqli_close($polaczenie);\r\n\t\t?>\r\n\t\t\t\r\n\t</div>\r\n\t<div id=\"pp\">\r\n\t\t<h3>TEMATYKA FORUM</h3>\r\n\t\t\t<ul>\r\n\t\t\t\t<li>Hodowla zwierząt\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t<li>psy</li>\r\n\t\t\t\t\t<li>koty</li>\r\n\t\t\t\t    </ul>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>Muzyka</li>\r\n\t\t\t\t<li>Gry komputerowe</li>\r\n\t\t\t</ul>\r\n\t</div>\r\n\r\n</body>\r\n\r\n\r\n\r\n</html>"
    }
  },
  {
    "id": "Kwalifikacja_E14_2018_styczen",
    "category": "Kwalifikacja_E14",
    "name": "2018 styczen",
    "title": "Portal Ogłoszeń Drobnych",
    "description": "Aplikacja portalu ogłoszeniowego z bazą kategorii, użytkowników i ogłoszeń. Skrypt PHP wyświetla ogłoszenia oraz obsługuje formularz dodawania.",
    "technologies": [
      "HTML5",
      "CSS3",
      "PHP (mysqli)",
      "MySQL"
    ],
    "folder": "Kwalifikacja_E14/2018_styczen",
    "mainPdf": null,
    "mainHtml": null,
    "mainPhp": "ogloszenia.php",
    "mainSql": null,
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# 📌 2018_styczen (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** Portal Ogłoszeń Drobnych  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** HTML5, CSS3, PHP (mysqli), MySQL\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nAplikacja portalu ogłoszeniowego z bazą kategorii, użytkowników i ogłoszeń. Skrypt PHP wyświetla ogłoszenia oraz obsługuje formularz dodawania.\n\n### Główne elementy rozwiązania:\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Oprogramowanie skryptu backendowego w PHP (mysqli) do komunikacji z bazą danych MySQL.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 🐘 **Skrypty PHP:** `ogloszenia.php`\n- 🎨 **Style CSS:** `styl.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n3. **Uruchomienie PHP:**\n   - Skopiuj ten rozpakowany folder do katalogu `C:\\xampp\\htdocs\\2018_styczen`.\n   - Uruchom moduł **Apache** w XAMPP.\n   - Otwórz w przeglądarce adres: `http://localhost/2018_styczen/ogloszenia.php`.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
    "pdfs": [],
    "htmls": [],
    "phps": [
      "ogloszenia.php"
    ],
    "sqls": [],
    "zips": [
      "paczka_zadania.zip"
    ],
    "txts": [],
    "scripts": [
      "styl.css"
    ],
    "allFiles": [
      "ksiazki.jpg",
      "ogloszenia.php",
      "paczka_zadania.zip",
      "README.md",
      "styl.css"
    ],
    "fileContents": {
      "ogloszenia.php": "<!DOCTYPE html>\r\n<html lang=\"pl\">\r\n    <head>\r\n        <meta charset=\"utf-8\">\r\n        <title>Portal ogłoszeniowy</title>\r\n        <link rel=\"stylesheet\" href=\"styl.css\">\r\n    </head>\r\n    <body>\r\n         <div id=\"baner\">\r\n        <h1>Portal ogłoszeniowy</h1>\r\n        </div>\r\n        <div id=\"lewy\">\r\n        <h2>Kategorie ogłoszeń</h2>\r\n            <ol>\r\n            <li>Książki</li>\r\n                <li>Muzyka</li>\r\n                <li>Filmy</li>\r\n            </ol>\r\n            <img src=\"ksiazki.jpg\" alt=\"Kupie/Sprzedam ksiazki\">\r\n            <table>\r\n            <tr><td>Liczba ogłoszeń</td><td>Cena ogłoszenia</td><td>Bonus</td></tr>\r\n                <tr><td>1-10</td><td>1zł</td><td rowspan=\"3\">Subskrypcja newslettera to upust 0,20zł na ogłoszenie</td></tr>\r\n                <tr><td>11-50</td><td>0,80zł</td>\r\n                <tr><td>51 i więcej</td><td>0,60zł</td>\r\n            </table>\r\n        </div>\r\n        <div id=\"prawy\">\r\n        <h2>Ogłoszenie kategorii książki</h2>\r\n          <?php\r\n    error_reporting(E_ALL & ~E_NOTICE & ~E_WARNING);\r\n\r\n            $conn=mysqli_connect('localhost','root','','ogloszenia') or die('Nie udało się połączyć');\r\n            $zapytanie1=\"select id,tytul,tresc from ogloszenie where kategoria=1\";\r\n                $dane=mysqli_query($conn, $zapytanie1);\r\n            foreach($dane as $dane1){\r\n                echo \"<h3>\".$dane1['id'].\" \";\r\n                echo $dane1['tytul'].\"</h3>\";\r\n                echo \"<p>\".$dane1['tresc'].\"</p>\";\r\n                $zapytanie2=\"select telefon from uzytkownik join ogloszenie on uzytkownik.id=ogloszenie.uzytkownik_id where ogloszenie.id=\".$dane1['id'];\r\n                    $telefon = mysqli_query($conn,$zapytanie2);\r\n                echo \"<p>Telefon kontaktowy: \".mysqli_fetch_row($telefon)[0].\"</p>\".\"<br>\";\r\n            }\r\n            ?>\r\n        </div>\r\n        <div id=\"stopka\">Portal opracował:xxxxxxxx</div>\r\n    </body>\r\n</html>",
      "README.md": "# 📌 2018_styczen (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** Portal Ogłoszeń Drobnych  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** HTML5, CSS3, PHP (mysqli), MySQL\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nAplikacja portalu ogłoszeniowego z bazą kategorii, użytkowników i ogłoszeń. Skrypt PHP wyświetla ogłoszenia oraz obsługuje formularz dodawania.\n\n### Główne elementy rozwiązania:\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Oprogramowanie skryptu backendowego w PHP (mysqli) do komunikacji z bazą danych MySQL.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 🐘 **Skrypty PHP:** `ogloszenia.php`\n- 🎨 **Style CSS:** `styl.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n3. **Uruchomienie PHP:**\n   - Skopiuj ten rozpakowany folder do katalogu `C:\\xampp\\htdocs\\2018_styczen`.\n   - Uruchom moduł **Apache** w XAMPP.\n   - Otwórz w przeglądarce adres: `http://localhost/2018_styczen/ogloszenia.php`.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
      "styl.css": "body{\r\n    margin:0;\r\n}\r\nh1{\r\n    margin:0;\r\n}\r\n#baner{\r\n    background-color: #40271A;\r\n    height:80px;\r\n    font-family: Tahoma;\r\n    color:white;\r\n    text-align: center;\r\n}\r\n#lewy{\r\n    background-color: #DBB29C;\r\n    width:40%;\r\n    height:700px;\r\n    float:left;\r\n}\r\n#prawy{\r\n    background-color: #FFE3D4;\r\n    width:60%;\r\n    height:700px;\r\n    float:left;\r\n}\r\n#stopka{\r\n    background-color: #40271A;\r\n    color:white;\r\n    text-align: center;\r\n}\r\nli{\r\n    list-style-type: upper-roman;\r\n}\r\nimg{\r\n    padding:30px;\r\n}\r\ntable,td,tr\r\n{\r\n    border: 1px dotted brown;\r\n    width: 500px;\r\n    margin: 10px;\r\n    text-align: center;"
    }
  },
  {
    "id": "Kwalifikacja_E14_2018_wiosna_e14-04-18_06",
    "category": "Kwalifikacja_E14",
    "name": "2018 wiosna — E.14-04-18.06",
    "title": "2018 wiosna — E.14 04 18.06",
    "description": "Zadanie praktyczne z przygotowania do egzaminu zawodowego obejmujące tworzenie aplikacji internetowej, arkusza stylów CSS oraz relacyjnej bazy danych.",
    "technologies": [
      "CSS3"
    ],
    "folder": "Kwalifikacja_E14/2018_wiosna/e14-04-18_06",
    "mainPdf": "E.14-04-18.06.pdf",
    "mainHtml": null,
    "mainPhp": null,
    "mainSql": null,
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# 📌 2018_wiosna - e14-04-18_06 (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** 2018 wiosna   e14 04 18 06  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** CSS3\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nZadanie praktyczne z przygotowania do egzaminu zawodowego obejmujące tworzenie aplikacji internetowej, arkusza stylów CSS oraz relacyjnej bazy danych.\n\n### Główne elementy rozwiązania:\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 📄 **Arkusz PDF:** `E.14-04-18.06.pdf`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
    "pdfs": [
      "E.14-04-18.06.pdf"
    ],
    "htmls": [],
    "phps": [],
    "sqls": [],
    "zips": [
      "paczka_zadania.zip"
    ],
    "txts": [],
    "scripts": [],
    "allFiles": [
      "E.14-04-18.06.pdf",
      "paczka_zadania.zip",
      "README.md"
    ],
    "fileContents": {
      "README.md": "# 📌 2018_wiosna - e14-04-18_06 (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** 2018 wiosna   e14 04 18 06  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** CSS3\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nZadanie praktyczne z przygotowania do egzaminu zawodowego obejmujące tworzenie aplikacji internetowej, arkusza stylów CSS oraz relacyjnej bazy danych.\n\n### Główne elementy rozwiązania:\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 📄 **Arkusz PDF:** `E.14-04-18.06.pdf`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n"
    }
  },
  {
    "id": "Kwalifikacja_E14_2018_wiosna_e14-05-18_06",
    "category": "Kwalifikacja_E14",
    "name": "2018 wiosna — E.14-05-18.06",
    "title": "Kalkulator Kosztów Przyjęcia Weselnego",
    "description": "Formularz wyceny organizacji imprezy okolicznościowej z wyborem liczby gości, opcji poprawin i obliczeniami w JS.",
    "technologies": [
      "HTML5",
      "CSS3",
      "JavaScript"
    ],
    "folder": "Kwalifikacja_E14/2018_wiosna/e14-05-18_06",
    "mainPdf": "E.14-05-18.06.pdf",
    "mainHtml": "wesela.html",
    "mainPhp": null,
    "mainSql": null,
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# 📌 2018_wiosna - e14-05-18_06 (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** Kalkulator Kosztów Przyjęcia Weselnego  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** HTML5, CSS3, JavaScript\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nFormularz wyceny organizacji imprezy okolicznościowej z wyborem liczby gości, opcji poprawin i obliczeniami w JS.\n\n### Główne elementy rozwiązania:\n- Opracowanie semantycznej struktury strony w standardzie HTML5.\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 📄 **Arkusz PDF:** `E.14-05-18.06.pdf`\n- 🌐 **Pliki HTML:** `wesela.html`\n- 📝 **Pliki tekstowe / Kwerendy:** `regulamin.txt`\n- 🎨 **Style CSS:** `styl5.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Uruchomienie strony WWW:**\n   - Kliknij dwukrotnie plik `wesela.html` lub przeciągnij go do dowolnej przeglądarki.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
    "pdfs": [
      "E.14-05-18.06.pdf"
    ],
    "htmls": [
      "wesela.html"
    ],
    "phps": [],
    "sqls": [],
    "zips": [
      "paczka_zadania.zip"
    ],
    "txts": [
      "regulamin.txt"
    ],
    "scripts": [
      "styl5.css"
    ],
    "allFiles": [
      "E.14-05-18.06.pdf",
      "logo.png",
      "paczka_zadania.zip",
      "README.md",
      "regulamin.txt",
      "styl5.css",
      "wesela.html"
    ],
    "fileContents": {
      "README.md": "# 📌 2018_wiosna - e14-05-18_06 (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** Kalkulator Kosztów Przyjęcia Weselnego  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** HTML5, CSS3, JavaScript\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nFormularz wyceny organizacji imprezy okolicznościowej z wyborem liczby gości, opcji poprawin i obliczeniami w JS.\n\n### Główne elementy rozwiązania:\n- Opracowanie semantycznej struktury strony w standardzie HTML5.\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 📄 **Arkusz PDF:** `E.14-05-18.06.pdf`\n- 🌐 **Pliki HTML:** `wesela.html`\n- 📝 **Pliki tekstowe / Kwerendy:** `regulamin.txt`\n- 🎨 **Style CSS:** `styl5.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Uruchomienie strony WWW:**\n   - Kliknij dwukrotnie plik `wesela.html` lub przeciągnij go do dowolnej przeglądarki.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
      "regulamin.txt": "Regulamin Domu Weselnego",
      "styl5.css": "body\r\n{\r\n\tmargin: 0px;\t\r\n}\r\nheader\r\n{\r\n\tbackground-color: #1C59A7;\r\n\tcolor: white;\r\n\ttext-align: center;\r\n\theight: 80px;\r\n}\r\n\r\n#pl\r\n{\r\n\tbackground-color: #3A70B5;\r\n\twidth: 33%;\r\n\theight: 200px;\r\n\tfloat: left;\r\n}\r\n\r\n#ps\r\n{\r\n\tbackground-color: #5A8AC8;\r\n\twidth: 33%;\r\n\theight: 200px;\r\n\tfloat: left;\r\n}\r\n\r\n#pp\r\n{\r\n\tbackground-color:  #86ACDD;\r\n\ttext-align: center;\r\n\twidth: 34%;\r\n\theight: 200px;\r\n\tfloat: left;\r\n}\r\n\r\n#pd\r\n{\r\n\tclear:left;\r\n\tbackground-color: #86ACDD;\r\n\ttext-align: center;\r\n\theight: 300px;\r\n\r\n}\r\n\r\nfooter\r\n{\r\n\tbackground-color: #1C59A7;\r\n\tcolor: white;\r\n}\r\n\r\n#pp a\r\n{\r\n\tbackground-color: yellow;\r\n\tcolor: blue;\r\n\tpadding: 10px;\r\n}",
      "wesela.html": "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"styl5.css\">\r\n\t<title>Dom Weselny</title>\r\n\t<script type=\"text/javascript\" >\r\n\t\t\r\n\t\tfunction licz() \r\n\t\t{\r\n\t\t\tvar l = document.getElementById(\"liczba\").value;\r\n\t\t\tvar suma;\r\n\t\t\t suma = l*100;\r\n\t\t\tif (document.getElementById(\"check\").checked) \r\n\t\t\t{\r\n\t\t\t\tsuma *= 1.3;\r\n\t\t\t}\r\n\t\t\tdocument.getElementById(\"sc\").innerHTML = suma;\r\n\t\t\r\n\t\t}\r\n\t</script>\t\r\n</head>\r\n<body>\r\n\t<header>\r\n\t\t<h1><img src=\"logo.png\" alt=\"\" height=\"70\">Dom Weselny zorganizuje wesele za Ciebie<img src=\"logo.png\" alt=\"\" height=\"70\"></h1>\r\n\t</header>\r\n\t<div id=\"pl\">\r\n\t\t<h2>Dom Weselny</h2>\r\n\t\t<p>ul. Przemysłowa 5</p>\r\n\t\t<p>Kalisz</p>\r\n\t\t<p><a href=\"logo.png\">Pobierz logo</a></p>\r\n\t</div>\r\n\t<div id=\"ps\">\r\n\t\t<h2>Oferujemy</h2>\r\n\t\t<ul>\r\n\t\t\t<li>Wesela</li>\r\n\t\t\t<li>Bankiety</li>\r\n\t\t\t<li>Konferencje</li>\r\n\t\t</ul>\r\n\t</div>\r\n\t<div id=\"pp\">\r\n\t\t<p><a href=\"Regulamin.txt\">czytaj regulamin</a></p>\t\t\r\n\t</div>\r\n\t<div id=\"pd\">\r\n\t\t\r\n\t\t<h2>Ile będzie kosztowało moje wesele?</h2>\r\n\t\t<label for=\"liczba\">Podaj liczbę gości: </label><input type=\"number\" id=\"liczba\">\r\n\t\t<br>\r\n\t\t<input type=\"checkbox\" id=\"check\"><label for=\"check\">Wesele z poprawinami?</label>\t\r\n\t\t<br>\r\n\t\t<input type=\"submit\" value=\"Oblicz koszt\" onclick=\"licz()\">\r\n\t\t\r\n\t\t<p id=\"sc\"></p>\r\n\t\t\r\n\t</div>\r\n\t<footer>\r\n\t\tStronę internetową opracował: 000000000\r\n\t</footer>\r\n</body>\r\n</html>"
    }
  },
  {
    "id": "Kwalifikacja_E14_2018_wiosna_e14-06-18_06",
    "category": "Kwalifikacja_E14",
    "name": "2018 wiosna — E.14-06-18.06",
    "title": "2018 wiosna — E.14 06 18.06",
    "description": "Zadanie praktyczne z przygotowania do egzaminu zawodowego obejmujące tworzenie aplikacji internetowej, arkusza stylów CSS oraz relacyjnej bazy danych.",
    "technologies": [
      "HTML5",
      "CSS3"
    ],
    "folder": "Kwalifikacja_E14/2018_wiosna/e14-06-18_06",
    "mainPdf": "E.14-06-18.06.pdf",
    "mainHtml": "pizzeria.html",
    "mainPhp": null,
    "mainSql": null,
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# 📌 2018_wiosna - e14-06-18_06 (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** 2018 wiosna   e14 06 18 06  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** HTML5, CSS3\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nZadanie praktyczne z przygotowania do egzaminu zawodowego obejmujące tworzenie aplikacji internetowej, arkusza stylów CSS oraz relacyjnej bazy danych.\n\n### Główne elementy rozwiązania:\n- Opracowanie semantycznej struktury strony w standardzie HTML5.\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 📄 **Arkusz PDF:** `E.14-06-18.06.pdf`\n- 🌐 **Pliki HTML:** `pizzeria.html`\n- 📝 **Pliki tekstowe / Kwerendy:** `Oferta.txt`\n- 🎨 **Style CSS:** `styl6.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Uruchomienie strony WWW:**\n   - Kliknij dwukrotnie plik `pizzeria.html` lub przeciągnij go do dowolnej przeglądarki.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
    "pdfs": [
      "E.14-06-18.06.pdf"
    ],
    "htmls": [
      "pizzeria.html"
    ],
    "phps": [],
    "sqls": [],
    "zips": [
      "paczka_zadania.zip"
    ],
    "txts": [
      "Oferta.txt"
    ],
    "scripts": [
      "styl6.css"
    ],
    "allFiles": [
      "E.14-06-18.06.pdf",
      "logo.png",
      "Oferta.txt",
      "paczka_zadania.zip",
      "pizzeria.html",
      "README.md",
      "styl6.css"
    ],
    "fileContents": {
      "Oferta.txt": "Pizza Margherita 20 z� ",
      "pizzeria.html": "<DOCTYPE html>\r\n<html lang=\"pl\">\r\n<head>\r\n<meta charset=\"utf-8\">\r\n<title>Pizzeria Margherita</title>\r\n<link rel=\"stylesheet\" type=\"text/css\" href=\"styl6.css\">\r\n<script type=\"text/javascript\">\r\n\tfunction obliczanie()\r\n\t{\r\n\t\tvar liczba=document.getElementById(\"num\").value;\r\n\t\tvar suma= liczba*2;\r\n\t\tif (document.getElementById(\"check\").checked==true) \r\n\t\t{\r\n\t\t\tdocument.getElementById(\"wynik\").innerHTML=\"Dowieziemy Twoją pizzę za darmo\";\r\n\t\t}\r\n\t\telse if (document.getElementById(\"check\").checked==false) \r\n\t\t{\r\n\t\t\tdocument.getElementById(\"wynik\").innerHTML=\"Dowóz będzie Cię kosztował \"+suma+ \" złotych\";\r\n\t\t}\r\n\t\t\r\n      \r\n\t}\r\n</script>\r\n</head>\r\n<body>\r\n<header>\r\n\t<h2>Najlepsza pizza w mieście\r\n\t\t<img src=\"logo.png\" height=\"100\">\r\n\t</h2>\r\n</header>\r\n<main>\r\n<section id=\"pl\">\r\n\t<p>U nas zamówisz pizzę z dowozem </p>\r\n\t<a href=\"logo.png\">Nasze logo</a>\r\n</section>\r\n<section id=\"ps\">\r\n\t<h3>Pizzeria Margherita</h3>\r\n\t<p>ul. Botaniczna 4, Zielona Góra</p>\r\n</section>\r\n<section id=\"pp\">\r\n\t<h3>Oferta</h3>\r\n\t\t<ol>\r\n\t\t\t<li>Pizza</li>\r\n\t\t\t<li>Lasagne</li>\r\n\t\t\t<li>Sałatki</li>\r\n\t\t</ol>\r\n\t\t<p><a href=\"Oferta.txt\">Pobiersz pełną ofertę</a></p>\r\n</section>\r\n<section id=\"pd\">\r\n\t<h3>Oblicz koszt dostawy</h3>\r\n\t<input type=\"checkbox\" id=\"check\">Jestem z Zielonej Góry <br>\r\n\t<p>albo</p> \r\n\tPodaj liczbę kilometrów od Zielonej Góry:<input type=\"number\" id=\"num\">\r\n\t<input type=\"submit\" value=\"Oblicz\" onclick=\"obliczanie();\">\r\n<p id=\"wynik\"></p>\t\r\n</section>\r\n</main>\r\n<footer>\r\n\tStronę internetową opracował:<strong>00000000000</strong>\r\n</footer>\r\n</body>\r\n</html>",
      "README.md": "# 📌 2018_wiosna - e14-06-18_06 (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** 2018 wiosna   e14 06 18 06  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** HTML5, CSS3\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nZadanie praktyczne z przygotowania do egzaminu zawodowego obejmujące tworzenie aplikacji internetowej, arkusza stylów CSS oraz relacyjnej bazy danych.\n\n### Główne elementy rozwiązania:\n- Opracowanie semantycznej struktury strony w standardzie HTML5.\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 📄 **Arkusz PDF:** `E.14-06-18.06.pdf`\n- 🌐 **Pliki HTML:** `pizzeria.html`\n- 📝 **Pliki tekstowe / Kwerendy:** `Oferta.txt`\n- 🎨 **Style CSS:** `styl6.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Uruchomienie strony WWW:**\n   - Kliknij dwukrotnie plik `pizzeria.html` lub przeciągnij go do dowolnej przeglądarki.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
      "styl6.css": "header\r\n{\r\n\tbackground-color: #4E885C;\r\n\tcolor: orange;\r\n\ttext-align:center;\r\n\theight: 110px;\r\n}\r\n#pl\r\n{\r\n\tbackground-color: #72A37D;\r\n\twidth: 30%;\r\n\theight: 300px;\r\n\tfloat: left;\r\n}\r\n#ps\r\n{\r\n\tbackground-image: url(\"logo.png\");\r\n\tbackground-repeat: no-repeat;\r\n\t background-position: right;\r\n\tbackground-color: #A2C3A9;\r\n\twidth: 40%;\r\n\theight: 300px;\r\n\tfloat: left;\r\n}\r\n#pp\r\n{\r\n\tbackground-color: #72A37D;\r\n\ttext-align: center;\r\n\twidth: 30%;\r\n\theight: 300px;\r\n\tfloat: left;\r\n}\r\n#pd\r\n{\r\n\tbackground-color: #A2C3A9;\r\n\ttext-align: center;\r\n\theight: 250px;\r\n\tclear: both;\r\n}\r\nfooter\r\n{\r\n\tbackground-color: #4E885C;\r\n\tcolor: orange;\r\n}\r\n#pp a\r\n{\r\n\tbackground-color: orange;\r\n\tcolor: green;\r\n\tpadding: 15px;\r\n}"
    }
  },
  {
    "id": "Kwalifikacja_E14_2018_zima_e14-01-18_01",
    "category": "Kwalifikacja_E14",
    "name": "2018 zima — E.14-01-18.01",
    "title": "Portal Ogłoszeń Drobnych",
    "description": "Aplikacja portalu ogłoszeniowego z bazą kategorii, użytkowników i ogłoszeń. Skrypt PHP wyświetla ogłoszenia oraz obsługuje formularz dodawania.",
    "technologies": [
      "HTML5",
      "CSS3",
      "PHP (mysqli)",
      "MySQL"
    ],
    "folder": "Kwalifikacja_E14/2018_zima/e14-01-18_01",
    "mainPdf": "E.14-01-18.01.pdf",
    "mainHtml": null,
    "mainPhp": "ogloszenia.php",
    "mainSql": null,
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# 📌 2018_zima - e14-01-18_01 (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** Portal Ogłoszeń Drobnych  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** HTML5, CSS3, PHP (mysqli), MySQL\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nAplikacja portalu ogłoszeniowego z bazą kategorii, użytkowników i ogłoszeń. Skrypt PHP wyświetla ogłoszenia oraz obsługuje formularz dodawania.\n\n### Główne elementy rozwiązania:\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Oprogramowanie skryptu backendowego w PHP (mysqli) do komunikacji z bazą danych MySQL.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 📄 **Arkusz PDF:** `E.14-01-18.01.pdf`\n- 🐘 **Skrypty PHP:** `ogloszenia.php`\n- 📝 **Pliki tekstowe / Kwerendy:** `kwerendy.txt`\n- 🎨 **Style CSS:** `styl1.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n3. **Uruchomienie PHP:**\n   - Skopiuj ten rozpakowany folder do katalogu `C:\\xampp\\htdocs\\e14-01-18_01`.\n   - Uruchom moduł **Apache** w XAMPP.\n   - Otwórz w przeglądarce adres: `http://localhost/e14-01-18_01/ogloszenia.php`.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
    "pdfs": [
      "E.14-01-18.01.pdf"
    ],
    "htmls": [],
    "phps": [
      "ogloszenia.php"
    ],
    "sqls": [],
    "zips": [
      "paczka_zadania.zip"
    ],
    "txts": [
      "kwerendy.txt"
    ],
    "scripts": [
      "styl1.css"
    ],
    "allFiles": [
      "E.14-01-18.01.pdf",
      "import.jpg",
      "ksiazki.jpg",
      "kw1.jpg",
      "kw2.jpg",
      "kw3.jpg",
      "kw4.jpg",
      "kwerendy.txt",
      "ogloszenia.php",
      "paczka_zadania.zip",
      "README.md",
      "styl1.css"
    ],
    "fileContents": {
      "kwerendy.txt": "1. SELECT id, tytul, tresc from ogloszenie WHERE kategoria = 1\r\n2. SELECT telefon FROM uzytkownik inner JOIN ogloszenie On uzytkownik.id = ogloszenie.uzytkownik_id WHERE ogloszenie.id = 1\r\n3. CREATE user 'moderator'@'localhost' IDENTIFIED BY 'qwerty';\r\n4. Grant SELECT, DROP on ogloszenia.ogloszenie to 'moderator'@'localhost'\r\n",
      "ogloszenia.php": "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"styl1.css\">\r\n\t<title>Portal ogłoszeniowy</title>\r\n</head>\r\n<body>\r\n\t<div id=\"baner\">\r\n\t\t<h1>Portal Ogłoszeniowy</h1>\r\n\t</div>\r\n\t<div id=\"pl\">\r\n\t\t<h2>Kategorie ogłoszeń</h2>\r\n\t\t<ol>\r\n\t\t\t<li>Książki</li>\r\n\t\t\t<li>Muzyka</li>\r\n\t\t\t<li>Filmy</li>\r\n\t\t</ol>\r\n\t\t<img src=\"ksiazki.jpg\" alt=\"Kupię / sprzedam książkę\">\r\n\t\t<table>\r\n\t\t\t<tr>\r\n\t\t\t\t<td>Lista ogłoszeń</td><td>Cena ogłoszenia</td><td>Bonus</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<td>1 - 10</td><td>1 PLN</td><td rowspan=\"3\" >Subskrypcja newslettera to upust 0,20 PLN na ogłoszenie</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<td>11 - 50</td><td>0,80 PLN</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<td>51 i więcej</td><td>0,60 PLN</td>\r\n\t\t\t</tr>\r\n\t\t</table>\r\n\t</div>\r\n\t<div id=\"pp\">\r\n\t\t<h2>Ogłoszenia kategorii książki</h2>\r\n\t\t<?php \r\n\t\t\t$con = mysqli_connect('localhost','root','','ogloszenia');\r\n\t\t\t$ask = \"SELECT id, tytul, tresc from ogloszenie WHERE kategoria = 1\";\r\n\t\t\t$ask1 = \"SELECT telefon FROM uzytkownik inner JOIN ogloszenie On uzytkownik.id = ogloszenie.uzytkownik_id \";\r\n\t\t\t$wynik = mysqli_query($con,$ask);\r\n\t\t\t$wynik1= mysqli_query($con,$ask1);\r\n\r\n\t\t\twhile ($wiersz = mysqli_fetch_row($wynik)) \r\n\t\t\t{\r\n\t\t\t\t$wiersz1 = mysqli_fetch_row($wynik1);\r\n\t\t\t\techo \"<h3>\".$wiersz[0].\" \".$wiersz[1].\"</h3>\";\r\n\t\t\t\techo \"<p>\".$wiersz[2].\"</p>\";\r\n\t\t\t\techo \"<p>\".\"Telefon kontaktowy: \".$wiersz1[0];\r\n\t\t\t}\r\n\t\t\tmysqli_close($con);\r\n\t\t ?>\r\n\t</div>\r\n\t<div id=\"stopka\">Portal ogłoszeniowy opracował:</div>\r\n</body>\r\n</html>",
      "README.md": "# 📌 2018_zima - e14-01-18_01 (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** Portal Ogłoszeń Drobnych  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** HTML5, CSS3, PHP (mysqli), MySQL\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nAplikacja portalu ogłoszeniowego z bazą kategorii, użytkowników i ogłoszeń. Skrypt PHP wyświetla ogłoszenia oraz obsługuje formularz dodawania.\n\n### Główne elementy rozwiązania:\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Oprogramowanie skryptu backendowego w PHP (mysqli) do komunikacji z bazą danych MySQL.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 📄 **Arkusz PDF:** `E.14-01-18.01.pdf`\n- 🐘 **Skrypty PHP:** `ogloszenia.php`\n- 📝 **Pliki tekstowe / Kwerendy:** `kwerendy.txt`\n- 🎨 **Style CSS:** `styl1.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n3. **Uruchomienie PHP:**\n   - Skopiuj ten rozpakowany folder do katalogu `C:\\xampp\\htdocs\\e14-01-18_01`.\n   - Uruchom moduł **Apache** w XAMPP.\n   - Otwórz w przeglądarce adres: `http://localhost/e14-01-18_01/ogloszenia.php`.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
      "styl1.css": "body\r\n{\r\nmargin: 0px;\r\npadding: 0px;\r\n}\r\n\r\n#baner\r\n{\r\nbackground-color: #40271A;\r\ncolor: white;\r\nfont-family: Tahoma;\r\ntext-align: center;\r\nheight: 80px;\r\n}\r\n\r\n#pl\r\n{\r\nbackground-color: #DBB29C;\r\nwidth: 40%;\r\nheight: 700px;\r\nfloat: left;\r\n}\r\n\r\n#pp\r\n{\r\nbackground-color:  #FFE3D4;\r\nwidth: 60%;\r\nheight: 700px;\r\nfloat: left;\r\n}\r\n\r\n#stopka\r\n{\r\nbackground-color: #40271A;\r\ncolor: white;\r\ntext-align: right;\r\n}\r\n\r\ntable, tr, td\r\n{\r\n\tborder: 1px dashed brown;\r\n\twidth: 500px;\r\n\tmargin:  10px;\r\n\ttext-align: center;\r\n}\r\nol\r\n{\r\n\tlist-style: upper-roman;\r\n}\r\n\r\nimg\r\n{\r\n\tpadding: 30px;\r\n}"
    }
  },
  {
    "id": "Kwalifikacja_E14_2018_zima_e14-02-18_01",
    "category": "Kwalifikacja_E14",
    "name": "2018 zima — E.14-02-18.01",
    "title": "2018 zima — E.14 02 18.01",
    "description": "Zadanie praktyczne z przygotowania do egzaminu zawodowego obejmujące tworzenie aplikacji internetowej, arkusza stylów CSS oraz relacyjnej bazy danych.",
    "technologies": [
      "CSS3",
      "PHP (mysqli)",
      "MySQL"
    ],
    "folder": "Kwalifikacja_E14/2018_zima/e14-02-18_01",
    "mainPdf": "E.14-02-18.01.pdf",
    "mainHtml": null,
    "mainPhp": "portal.php",
    "mainSql": "baza.sql",
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# 📌 2018_zima - e14-02-18_01 (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** 2018 zima   e14 02 18 01  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** CSS3, PHP (mysqli), MySQL\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nZadanie praktyczne z przygotowania do egzaminu zawodowego obejmujące tworzenie aplikacji internetowej, arkusza stylów CSS oraz relacyjnej bazy danych.\n\n### Główne elementy rozwiązania:\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Utworzenie tabel, relacji oraz przygotowanie poprawnych kwerend SQL (SELECT, INSERT, UPDATE).\n- Oprogramowanie skryptu backendowego w PHP (mysqli) do komunikacji z bazą danych MySQL.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 📄 **Arkusz PDF:** `E.14-02-18.01.pdf`\n- 🐘 **Skrypty PHP:** `portal.php`\n- 💾 **Baza / Kwerendy SQL:** `baza.sql`\n- 📝 **Pliki tekstowe / Kwerendy:** `kwerendy.txt`\n- 🎨 **Style CSS:** `styl2.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Import bazy danych:**\n   - Uruchom lokalny serwer MySQL (np. w panelu XAMPP).\n   - Otwórz w przeglądarce `http://localhost/phpmyadmin`.\n   - Utwórz nową bazę danych i zaimportuj plik SQL (`baza.sql`).\n\n3. **Uruchomienie PHP:**\n   - Skopiuj ten rozpakowany folder do katalogu `C:\\xampp\\htdocs\\e14-02-18_01`.\n   - Uruchom moduł **Apache** w XAMPP.\n   - Otwórz w przeglądarce adres: `http://localhost/e14-02-18_01/portal.php`.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
    "pdfs": [
      "E.14-02-18.01.pdf"
    ],
    "htmls": [],
    "phps": [
      "portal.php"
    ],
    "sqls": [
      "baza.sql"
    ],
    "zips": [
      "paczka_zadania.zip"
    ],
    "txts": [
      "kwerendy.txt"
    ],
    "scripts": [
      "styl2.css"
    ],
    "allFiles": [
      "baza.jpg",
      "baza.sql",
      "E.14-02-18.01.pdf",
      "ksiazki.jpg",
      "kw1.jpg",
      "kw2.jpg",
      "kw3.jpg",
      "kw4.jpg",
      "kwerendy.txt",
      "paczka_zadania.zip",
      "portal.php",
      "README.md",
      "styl2.css"
    ],
    "fileContents": {
      "baza.sql": "-- phpMyAdmin SQL Dump\r\n-- version 4.5.1\r\n-- http://www.phpmyadmin.net\r\n--\r\n-- Host: 127.0.0.1\r\n-- Czas generowania: 28 Lis 2016, 12:33\r\n-- Wersja serwera: 10.1.19-MariaDB\r\n-- Wersja PHP: 5.6.28\r\n\r\nSET SQL_MODE = \"NO_AUTO_VALUE_ON_ZERO\";\r\nSET time_zone = \"+00:00\";\r\n\r\n\r\n/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;\r\n/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;\r\n/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;\r\n/*!40101 SET NAMES utf8mb4 */;\r\n\r\n--\r\n-- Baza danych: `ogloszenia`\r\n--\r\n\r\n-- --------------------------------------------------------\r\n\r\n--\r\n-- Struktura tabeli dla tabeli `ogloszenie`\r\n--\r\n\r\nCREATE TABLE `ogloszenie` (\r\n  `id` int(10) UNSIGNED NOT NULL,\r\n  `uzytkownik_id` int(10) UNSIGNED NOT NULL,\r\n  `kategoria` int(10) UNSIGNED DEFAULT NULL,\r\n  `podkategoria` int(10) UNSIGNED DEFAULT NULL,\r\n  `tytul` text,\r\n  `tresc` text\r\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\r\n\r\n--\r\n-- Zrzut danych tabeli `ogloszenie`\r\n--\r\n\r\nINSERT INTO `ogloszenie` (`id`, `uzytkownik_id`, `kategoria`, `podkategoria`, `tytul`, `tresc`) VALUES\r\n(1, 1, 1, 12, 'Daniel Craig. Biografia', 'Biografia Daniela Craiga, niedrogo sprzedam'),\r\n(2, 1, 1, 13, 'Selekcja', 'Sprzedam: \"Selekcja\" J. Kellermana, niezniszczona'),\r\n(3, 2, 1, 13, 'Buick', 'Sprzedam horror Stephena Kinga w dobrym stanie'),\r\n(4, 2, 1, 14, 'Tytus, Romek i Atomek', 'Ks. IV do sprzedania, stan dobry'),\r\n(5, 2, 2, 0, 'Imagine Dragons', 'Sprzedam dwa CD Imagine Dragons');\r\n\r\n-- --------------------------------------------------------\r\n\r\n--\r\n-- Struktura tabeli dla tabeli `uzytkownik`\r\n--\r\n\r\nCREATE TABLE `uzytkownik` (\r\n  `id` int(10) UNSIGNED NOT NULL,\r\n  `imie` text,\r\n  `nazwisko` text,\r\n  `telefon` text,\r\n  `email` text\r\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\r\n\r\n--\r\n-- Zrzut danych tabeli `uzytkownik`\r\n--\r\n\r\nINSERT INTO `uzytkownik` (`id`, `imie`, `nazwisko`, `telefon`, `email`) VALUES\r\n(1, 'Anna', 'Kowalska', '601601601', 'anna@poczta.pl'),\r\n(2, 'Jan', 'Nowak', '608608608', 'jan@poczta.pl');\r\n\r\n--\r\n-- Indeksy dla zrzutów tabel\r\n--\r\n\r\n--\r\n-- Indexes for table `ogloszenie`\r\n--\r\nALTER TABLE `ogloszenie`\r\n  ADD PRIMARY KEY (`id`);\r\n\r\n--\r\n-- Indexes for table `uzytkownik`\r\n--\r\nALTER TABLE `uzytkownik`\r\n  ADD PRIMARY KEY (`id`);\r\n\r\n--\r\n-- AUTO_INCREMENT for dumped tables\r\n--\r\n\r\n--\r\n-- AUTO_INCREMENT dla tabeli `ogloszenie`\r\n--\r\nALTER TABLE `ogloszenie`\r\n  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;\r\n--\r\n-- AUTO_INCREMENT dla tabeli `uzytkownik`\r\n--\r\nALTER TABLE `uzytkownik`\r\n  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;\r\n/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;\r\n/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;\r\n/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;\r\n",
      "kwerendy.txt": "Zapytanie 1: SELECT id, imie, nazwisko, email FROM `uzytkownik` WHERE `uzytkownik`.`id` < 4\r\nZapytanie 2: SELECT `ogloszenie`.`tytul` FROM `ogloszenie` WHERE `ogloszenie`.`uzytkownik_id` = 1\r\nZapytanie 3: CREATE USER 'admin'@'localhost' IDENTIFIED BY 'zaq1@'\r\nZapytanie 4: GRANT SELECT, DROP, UPDATE on ogloszenia.uzytkownik TO 'admin'@'localhost'",
      "portal.php": "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"styl2.css\">\r\n\t<title>Ogłoszenia drobne</title>\r\n</head>\r\n<body>\r\n\t<header>\r\n\t\t<h2>Ogłoszenia drobne</h2>\r\n\t</header>\r\n\t<nav>\r\n\t\t<h2>Ogłoszeniodawcy</h2>\r\n\t\t<?php\r\n\t\t$connect = mysqli_connect('localhost','root','','ogloszenia');\r\n\t\t$ask = \"SELECT `uzytkownik`.`id`, `uzytkownik`.`imie`, `uzytkownik`.`nazwisko`, `uzytkownik`.`email`, `ogloszenie`.`tytul` FROM `uzytkownik` inner join `ogloszenie` ON `uzytkownik`.`id` = `ogloszenie`.`uzytkownik_id` WHERE `uzytkownik`.`id` < 4 GROUP by `uzytkownik`.`id`\";\r\n\t\t$result = mysqli_query($connect, $ask);\r\n\t\twhile ($line=mysqli_fetch_row($result)) \r\n\t\t{\r\n\t\t\techo '<h3>'.$line[0].' '. $line[1].' '.$line[2].'</h3>';\r\n\t\t\techo '<p>'.$line[3].'</p>';\r\n\t\t\techo '<p>Ogłoszenie: '.$line[4];\r\n\t\t}\r\n\r\n\t\tmysqli_close($connect);\r\n\t\t\r\n\t\t?>\r\n\t</nav>\r\n\t<main>\r\n\t\t<h2>Nasze kategorie</h2>\r\n\t\t<ul>\r\n\t\t\t<li>Książki</li>\r\n\t\t\t<li>Muzyka</li>\r\n\t\t\t<li>Multimedia</li>\r\n\t\t</ul>\r\n\t\t<img src=\"ksiazki.jpg\" alt=\"uwolnij swoją książkę\"\">\r\n\t\t<table border=1>\r\n\t\t\t<tr>\r\n\t\t\t\t<th>Ile?</th><th>Koszt</th><th >Promocja</th>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<th>1-40</th><th>1,20 PLN</th><th rowspan=\"2\">Subskrybuj newsletter upust 0,30 PLN na ogłoszenie</th>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<th>41 i więcej</th><th>0,70 PLN</th>\r\n\t\t</table>\r\n\t</main>\r\n\t<footer>\r\n\t\tPortal ogłoszenia drobne opracował:\r\n\t</footer>\r\n</body>\r\n</html>",
      "README.md": "# 📌 2018_zima - e14-02-18_01 (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** 2018 zima   e14 02 18 01  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** CSS3, PHP (mysqli), MySQL\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nZadanie praktyczne z przygotowania do egzaminu zawodowego obejmujące tworzenie aplikacji internetowej, arkusza stylów CSS oraz relacyjnej bazy danych.\n\n### Główne elementy rozwiązania:\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Utworzenie tabel, relacji oraz przygotowanie poprawnych kwerend SQL (SELECT, INSERT, UPDATE).\n- Oprogramowanie skryptu backendowego w PHP (mysqli) do komunikacji z bazą danych MySQL.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 📄 **Arkusz PDF:** `E.14-02-18.01.pdf`\n- 🐘 **Skrypty PHP:** `portal.php`\n- 💾 **Baza / Kwerendy SQL:** `baza.sql`\n- 📝 **Pliki tekstowe / Kwerendy:** `kwerendy.txt`\n- 🎨 **Style CSS:** `styl2.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Import bazy danych:**\n   - Uruchom lokalny serwer MySQL (np. w panelu XAMPP).\n   - Otwórz w przeglądarce `http://localhost/phpmyadmin`.\n   - Utwórz nową bazę danych i zaimportuj plik SQL (`baza.sql`).\n\n3. **Uruchomienie PHP:**\n   - Skopiuj ten rozpakowany folder do katalogu `C:\\xampp\\htdocs\\e14-02-18_01`.\n   - Uruchom moduł **Apache** w XAMPP.\n   - Otwórz w przeglądarce adres: `http://localhost/e14-02-18_01/portal.php`.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
      "styl2.css": "body, html \r\n{\r\n\tmargin: 0 auto;\r\n\tpadding: 0; \r\n}\r\n\r\nheader\r\n{\r\n\tbackground-color: #5A9089;\r\n\tcolor: white;\r\n\tfont-family: Verdana;\r\n\ttext-align: center;\r\n\theight: 100px;\r\n}\r\n\r\nnav\r\n{\r\n\tbackground-color: #BAD2CF;\r\n\twidth: 55%;\r\n\theight: 600px;\r\n\tfloat: left;\r\n}\r\n\r\nmain\r\n{\r\n\tbackground-color: #88AFAA;\r\n\twidth: 45%;\r\n\theight: 600px;\r\n\tfloat: left;\r\n}\r\n\r\nfooter\r\n{\r\n\tclear: left;\r\n\tbackground-color: #5A9089;\r\n\tcolor: white;\r\n\ttext-align: right;\r\n}\r\n\r\ntable, th\r\n{\r\n\tborder: 1px dotted green; \r\n\twidth: 400px;\r\n\tmargin: 15px;\r\n\ttext-align: center;\r\n}\r\n\r\nol\r\n{\r\n\tlist-style-type: circle; \r\n}\r\n\r\nimg\r\n{\r\n\tpadding: 25px;\r\n}"
    }
  },
  {
    "id": "Kwalifikacja_E14_2018_zima_e14-03-18_01",
    "category": "Kwalifikacja_E14",
    "name": "2018 zima — E.14-03-18.01",
    "title": "2018 zima — E.14 03 18.01",
    "description": "Zadanie praktyczne z przygotowania do egzaminu zawodowego obejmujące tworzenie aplikacji internetowej, arkusza stylów CSS oraz relacyjnej bazy danych.",
    "technologies": [
      "HTML5",
      "CSS3",
      "PHP (mysqli)",
      "MySQL"
    ],
    "folder": "Kwalifikacja_E14/2018_zima/e14-03-18_01",
    "mainPdf": "E.14-03-18.01.pdf",
    "mainHtml": "formularz.html",
    "mainPhp": "dodajRekord.php",
    "mainSql": "baza.sql",
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# 📌 2018_zima - e14-03-18_01 (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** 2018 zima   e14 03 18 01  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** HTML5, CSS3, PHP (mysqli), MySQL\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nZadanie praktyczne z przygotowania do egzaminu zawodowego obejmujące tworzenie aplikacji internetowej, arkusza stylów CSS oraz relacyjnej bazy danych.\n\n### Główne elementy rozwiązania:\n- Opracowanie semantycznej struktury strony w standardzie HTML5.\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Utworzenie tabel, relacji oraz przygotowanie poprawnych kwerend SQL (SELECT, INSERT, UPDATE).\n- Oprogramowanie skryptu backendowego w PHP (mysqli) do komunikacji z bazą danych MySQL.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 📄 **Arkusz PDF:** `E.14-03-18.01.pdf`\n- 🌐 **Pliki HTML:** `formularz.html`\n- 🐘 **Skrypty PHP:** `dodajRekord.php`\n- 💾 **Baza / Kwerendy SQL:** `baza.sql`\n- 📝 **Pliki tekstowe / Kwerendy:** `kwerendy.txt`\n- 🎨 **Style CSS:** `styl3.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Import bazy danych:**\n   - Uruchom lokalny serwer MySQL (np. w panelu XAMPP).\n   - Otwórz w przeglądarce `http://localhost/phpmyadmin`.\n   - Utwórz nową bazę danych i zaimportuj plik SQL (`baza.sql`).\n\n3. **Uruchomienie PHP:**\n   - Skopiuj ten rozpakowany folder do katalogu `C:\\xampp\\htdocs\\e14-03-18_01`.\n   - Uruchom moduł **Apache** w XAMPP.\n   - Otwórz w przeglądarce adres: `http://localhost/e14-03-18_01/dodajRekord.php`.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
    "pdfs": [
      "E.14-03-18.01.pdf"
    ],
    "htmls": [
      "formularz.html"
    ],
    "phps": [
      "dodajRekord.php"
    ],
    "sqls": [
      "baza.sql"
    ],
    "zips": [
      "paczka_zadania.zip"
    ],
    "txts": [
      "kwerendy.txt"
    ],
    "scripts": [
      "styl3.css"
    ],
    "allFiles": [
      "baza.sql",
      "dodajRekord.php",
      "E.14-03-18.01.pdf",
      "formularz.html",
      "import.jpg",
      "ksiazki.jpg",
      "kw1.jpg",
      "kw2.jpg",
      "kw3.jpg",
      "kw4.jpg",
      "kwerendy.txt",
      "paczka_zadania.zip",
      "README.md",
      "styl3.css"
    ],
    "fileContents": {
      "baza.sql": "-- phpMyAdmin SQL Dump\r\n-- version 4.5.1\r\n-- http://www.phpmyadmin.net\r\n--\r\n-- Host: 127.0.0.1\r\n-- Czas generowania: 28 Lis 2016, 12:33\r\n-- Wersja serwera: 10.1.19-MariaDB\r\n-- Wersja PHP: 5.6.28\r\n\r\nSET SQL_MODE = \"NO_AUTO_VALUE_ON_ZERO\";\r\nSET time_zone = \"+00:00\";\r\n\r\n\r\n/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;\r\n/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;\r\n/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;\r\n/*!40101 SET NAMES utf8mb4 */;\r\n\r\n--\r\n-- Baza danych: `ogloszenia`\r\n--\r\n\r\n-- --------------------------------------------------------\r\n\r\n--\r\n-- Struktura tabeli dla tabeli `ogloszenie`\r\n--\r\n\r\nCREATE TABLE `ogloszenie` (\r\n  `id` int(10) UNSIGNED NOT NULL,\r\n  `uzytkownik_id` int(10) UNSIGNED NOT NULL,\r\n  `kategoria` int(10) UNSIGNED DEFAULT NULL,\r\n  `podkategoria` int(10) UNSIGNED DEFAULT NULL,\r\n  `tytul` text,\r\n  `tresc` text\r\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\r\n\r\n--\r\n-- Zrzut danych tabeli `ogloszenie`\r\n--\r\n\r\nINSERT INTO `ogloszenie` (`id`, `uzytkownik_id`, `kategoria`, `podkategoria`, `tytul`, `tresc`) VALUES\r\n(1, 1, 1, 12, 'Daniel Craig. Biografia', 'Biografia Daniela Craiga, niedrogo sprzedam'),\r\n(2, 1, 1, 13, 'Selekcja', 'Sprzedam: \"Selekcja\" J. Kellermana, niezniszczona'),\r\n(3, 2, 1, 13, 'Buick', 'Sprzedam horror Stephena Kinga w dobrym stanie'),\r\n(4, 2, 1, 14, 'Tytus, Romek i Atomek', 'Ks. IV do sprzedania, stan dobry'),\r\n(5, 2, 2, 0, 'Imagine Dragons', 'Sprzedam dwa CD Imagine Dragons');\r\n\r\n-- --------------------------------------------------------\r\n\r\n--\r\n-- Struktura tabeli dla tabeli `uzytkownik`\r\n--\r\n\r\nCREATE TABLE `uzytkownik` (\r\n  `id` int(10) UNSIGNED NOT NULL,\r\n  `imie` text,\r\n  `nazwisko` text,\r\n  `telefon` text,\r\n  `email` text\r\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\r\n\r\n--\r\n-- Zrzut danych tabeli `uzytkownik`\r\n--\r\n\r\nINSERT INTO `uzytkownik` (`id`, `imie`, `nazwisko`, `telefon`, `email`) VALUES\r\n(1, 'Anna', 'Kowalska', '601601601', 'anna@poczta.pl'),\r\n(2, 'Jan', 'Nowak', '608608608', 'jan@poczta.pl');\r\n\r\n--\r\n-- Indeksy dla zrzutów tabel\r\n--\r\n\r\n--\r\n-- Indexes for table `ogloszenie`\r\n--\r\nALTER TABLE `ogloszenie`\r\n  ADD PRIMARY KEY (`id`);\r\n\r\n--\r\n-- Indexes for table `uzytkownik`\r\n--\r\nALTER TABLE `uzytkownik`\r\n  ADD PRIMARY KEY (`id`);\r\n\r\n--\r\n-- AUTO_INCREMENT for dumped tables\r\n--\r\n\r\n--\r\n-- AUTO_INCREMENT dla tabeli `ogloszenie`\r\n--\r\nALTER TABLE `ogloszenie`\r\n  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;\r\n--\r\n-- AUTO_INCREMENT dla tabeli `uzytkownik`\r\n--\r\nALTER TABLE `uzytkownik`\r\n  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;\r\n/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;\r\n/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;\r\n/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;\r\n",
      "dodajRekord.php": "<?php \r\n\t$connect = mysqli_connect('localhost','root','','ogloszenia');\r\n\t$kat = $_POST['kat']; \r\n\t$pkat = $_POST['pkat'];\r\n\t$title = $_POST['title'];\r\n\t$tr = $_POST['tr'];\r\n\t$ask = \"INSERT INTO `ogloszenie` (`id`, `uzytkownik_id`, `kategoria`, `podkategoria`, `tytul`, `tresc`) VALUES\r\n(NULL, 1, '$kat', '$pkat', '$title', '$tr')\";\t\r\n\tif (isset($kat) || isset($pkat) || isset($title) || isset($tr)) \r\n\t{\r\n\t\tmysqli_query($connect,$ask);\r\n\t\techo \"Dane zostały dodane\";\r\n\t}\r\n\r\n\tmysqli_close($connect);\r\n?>",
      "formularz.html": "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"styl3.css\">\r\n\t<title>Dodaj ogłoszenie</title>\r\n</head>\r\n<body>\r\n\t<header>\r\n\t\t<h2>Portal Ogłoszeniowy</h2>\r\n\t</header>\r\n\t<nav>\r\n\t\t<h2>Kategorie</h2>\r\n\t\t<ul>\r\n\t\t\t<li>Książki</li>\r\n\t\t\t<li>Muzyka</li>\r\n\t\t\t<li>Filmy</li>\r\n\t\t</ul>\r\n\t\t<h2>Podkategorie</h2>\r\n\t\t<ul>\r\n\t\t\t<li>Romans</li>\r\n\t\t\t<li>Biografia</li>\r\n\t\t\t<li>Kryminał</li>\r\n\t\t\t<li>Komiks</li>\r\n\t\t</ul>\r\n\t\t<img src=\"ksiazki.jpg\" alt=\"Dodaj ogłoszenie\"><br>\r\n\t\t<a href=\"kwerendy.txt\">Pobierz kwerendy</a>\r\n\t</nav>\r\n\t<main>\r\n\t\t<h2>Anna Kowalska – dodanie ogłoszenia</h2>\r\n\t\t<form method=\"post\" action=\"dodajRekord.php\">\r\n\t\t\t<label>Kategoria:<br><input type=\"number\" name=\"kat\"><br></label>\r\n\t\t\t<label>Podkategoria:<br><input type=\"number\" name=\"pkat\"><br></label>\r\n\t\t\t<label>Tytuł:<br><input type=\"text\" name=\"title\"><br></label>\r\n\t\t\t<label>Treść:<br><textarea name=\"tr\" rows=\"10\" cols=\"40\"></textarea></label><br>\r\n\t\t\t<input class=\"in\" type=\"reset\" name=\"cls\" value=\"WYCZYŚĆ\">\r\n\t\t\t<input class=\"in\" type=\"submit\" name=\"send\" value=\"ZAPISZ\">\r\n\t\t</form>\r\n\t</main>\r\n\t<footer>\r\n\t\tPortal ogłoszeniowy opracował:\r\n\t</footer>\r\n</body>\r\n</html>",
      "kwerendy.txt": "Zapytanie 1: INSERT INTO `ogloszenie` (`id`, `uzytkownik_id`, `kategoria`, `podkategoria`, `tytul`, `tresc`) VALUES\r\n(NULL, 1, 2, 13, 'Celine Dion', 'Sprzedam CD piosenkarki');\r\nZapytanie 2: SELECT `ogloszenie`.`tytul`, `ogloszenie`.`tresc` FROM `ogloszenie` WHERE `ogloszenie`.`kategoria` = 1 AND `ogloszenie`.`podkategoria` = 13\r\nZapytanie 3: CREATE USER 'andrzej'@'localhost' IDENTIFIED BY 'xsw23'\r\nZapytanie 4: GRANT SELECT, ALTER ON `ogloszenia`.`ogloszenie` TO 'andrzej'@'localhost'",
      "README.md": "# 📌 2018_zima - e14-03-18_01 (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** 2018 zima   e14 03 18 01  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** HTML5, CSS3, PHP (mysqli), MySQL\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nZadanie praktyczne z przygotowania do egzaminu zawodowego obejmujące tworzenie aplikacji internetowej, arkusza stylów CSS oraz relacyjnej bazy danych.\n\n### Główne elementy rozwiązania:\n- Opracowanie semantycznej struktury strony w standardzie HTML5.\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Utworzenie tabel, relacji oraz przygotowanie poprawnych kwerend SQL (SELECT, INSERT, UPDATE).\n- Oprogramowanie skryptu backendowego w PHP (mysqli) do komunikacji z bazą danych MySQL.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 📄 **Arkusz PDF:** `E.14-03-18.01.pdf`\n- 🌐 **Pliki HTML:** `formularz.html`\n- 🐘 **Skrypty PHP:** `dodajRekord.php`\n- 💾 **Baza / Kwerendy SQL:** `baza.sql`\n- 📝 **Pliki tekstowe / Kwerendy:** `kwerendy.txt`\n- 🎨 **Style CSS:** `styl3.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Import bazy danych:**\n   - Uruchom lokalny serwer MySQL (np. w panelu XAMPP).\n   - Otwórz w przeglądarce `http://localhost/phpmyadmin`.\n   - Utwórz nową bazę danych i zaimportuj plik SQL (`baza.sql`).\n\n3. **Uruchomienie PHP:**\n   - Skopiuj ten rozpakowany folder do katalogu `C:\\xampp\\htdocs\\e14-03-18_01`.\n   - Uruchom moduł **Apache** w XAMPP.\n   - Otwórz w przeglądarce adres: `http://localhost/e14-03-18_01/dodajRekord.php`.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
      "styl3.css": "body, html\r\n{\r\n\tmargin: 0 auto;\r\n\tpadding: 0;\r\n}\r\n\r\nheader\r\n{\r\n\tbackground-color: #00839C;\r\n\tcolor: white;\r\n\tfont-family: Tahoma;\r\n\ttext-align: center;\r\n\theight: 80px;\r\n}\r\n\r\nnav\r\n{\r\n\tbackground-color: #20D9FB;\r\n\twidth: 30%;\r\n\theight: 750px;\r\n\tfloat: left;\t\r\n}\r\n\r\nmain\r\n{\r\n\tbackground-color: #00BDE2;\r\n\twidth: 70%;\r\n\theight: 750px;\r\n\tfloat: left;\r\n}\r\n\r\nfooter\r\n{\r\n\tbackground-color: #00839C;\r\n\tcolor: white;\r\n\ttext-align: right;\r\n\tclear: left;\r\n}\r\n\r\nimg\r\n{\r\n\tpadding: 30px;\r\n\tborder: 2px solid blue;\r\n}\r\n\r\na:hover\r\n{\t\r\n\tcolor: white;\r\n}\r\n\r\na\r\n{\r\n\tcolor:black;\r\n}\r\n\r\n.in\r\n{\r\n\tbackground-color: blue;\r\n\tcolor: white;\r\n\tborder: 0px;\r\n\tmargin: 20px;\r\n}"
    }
  },
  {
    "id": "Kwalifikacja_E14_2018_zima_e14-04-18_01",
    "category": "Kwalifikacja_E14",
    "name": "2018 zima — E.14-04-18.01",
    "title": "2018 zima — E.14 04 18.01",
    "description": "Zadanie praktyczne z przygotowania do egzaminu zawodowego obejmujące tworzenie aplikacji internetowej, arkusza stylów CSS oraz relacyjnej bazy danych.",
    "technologies": [
      "HTML5",
      "CSS3",
      "PHP (mysqli)",
      "MySQL"
    ],
    "folder": "Kwalifikacja_E14/2018_zima/e14-04-18_01",
    "mainPdf": "E.14-04-18.01.pdf",
    "mainHtml": "rejestracja.html",
    "mainPhp": "dodajDane.php",
    "mainSql": "baza.sql",
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# 📌 2018_zima - e14-04-18_01 (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** 2018 zima   e14 04 18 01  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** HTML5, CSS3, PHP (mysqli), MySQL\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nZadanie praktyczne z przygotowania do egzaminu zawodowego obejmujące tworzenie aplikacji internetowej, arkusza stylów CSS oraz relacyjnej bazy danych.\n\n### Główne elementy rozwiązania:\n- Opracowanie semantycznej struktury strony w standardzie HTML5.\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Utworzenie tabel, relacji oraz przygotowanie poprawnych kwerend SQL (SELECT, INSERT, UPDATE).\n- Oprogramowanie skryptu backendowego w PHP (mysqli) do komunikacji z bazą danych MySQL.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 📄 **Arkusz PDF:** `E.14-04-18.01.pdf`\n- 🌐 **Pliki HTML:** `rejestracja.html`\n- 🐘 **Skrypty PHP:** `dodajDane.php`\n- 💾 **Baza / Kwerendy SQL:** `baza.sql`\n- 📝 **Pliki tekstowe / Kwerendy:** `kwerendy.txt`\n- 🎨 **Style CSS:** `styl4.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Import bazy danych:**\n   - Uruchom lokalny serwer MySQL (np. w panelu XAMPP).\n   - Otwórz w przeglądarce `http://localhost/phpmyadmin`.\n   - Utwórz nową bazę danych i zaimportuj plik SQL (`baza.sql`).\n\n3. **Uruchomienie PHP:**\n   - Skopiuj ten rozpakowany folder do katalogu `C:\\xampp\\htdocs\\e14-04-18_01`.\n   - Uruchom moduł **Apache** w XAMPP.\n   - Otwórz w przeglądarce adres: `http://localhost/e14-04-18_01/dodajDane.php`.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
    "pdfs": [
      "E.14-04-18.01.pdf"
    ],
    "htmls": [
      "rejestracja.html"
    ],
    "phps": [
      "dodajDane.php"
    ],
    "sqls": [
      "baza.sql"
    ],
    "zips": [
      "paczka_zadania.zip"
    ],
    "txts": [
      "kwerendy.txt"
    ],
    "scripts": [
      "styl4.css"
    ],
    "allFiles": [
      "baza.sql",
      "dane.jpg",
      "dodajDane.php",
      "E.14-04-18.01.pdf",
      "ksiazki.jpg",
      "kw1.jpg",
      "kw2.jpg",
      "kw3.jpg",
      "kw4.jpg",
      "kwerendy.txt",
      "paczka_zadania.zip",
      "README.md",
      "rejestracja.html",
      "styl4.css"
    ],
    "fileContents": {
      "baza.sql": "-- phpMyAdmin SQL Dump\r\n-- version 4.5.1\r\n-- http://www.phpmyadmin.net\r\n--\r\n-- Host: 127.0.0.1\r\n-- Czas generowania: 28 Lis 2016, 12:33\r\n-- Wersja serwera: 10.1.19-MariaDB\r\n-- Wersja PHP: 5.6.28\r\n\r\nSET SQL_MODE = \"NO_AUTO_VALUE_ON_ZERO\";\r\nSET time_zone = \"+00:00\";\r\n\r\n\r\n/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;\r\n/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;\r\n/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;\r\n/*!40101 SET NAMES utf8mb4 */;\r\n\r\n--\r\n-- Baza danych: `ogloszenia`\r\n--\r\n\r\n-- --------------------------------------------------------\r\n\r\n--\r\n-- Struktura tabeli dla tabeli `ogloszenie`\r\n--\r\n\r\nCREATE TABLE `ogloszenie` (\r\n  `id` int(10) UNSIGNED NOT NULL,\r\n  `uzytkownik_id` int(10) UNSIGNED NOT NULL,\r\n  `kategoria` int(10) UNSIGNED DEFAULT NULL,\r\n  `podkategoria` int(10) UNSIGNED DEFAULT NULL,\r\n  `tytul` text,\r\n  `tresc` text\r\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\r\n\r\n--\r\n-- Zrzut danych tabeli `ogloszenie`\r\n--\r\n\r\nINSERT INTO `ogloszenie` (`id`, `uzytkownik_id`, `kategoria`, `podkategoria`, `tytul`, `tresc`) VALUES\r\n(1, 1, 1, 12, 'Daniel Craig. Biografia', 'Biografia Daniela Craiga, niedrogo sprzedam'),\r\n(2, 1, 1, 13, 'Selekcja', 'Sprzedam: \"Selekcja\" J. Kellermana, niezniszczona'),\r\n(3, 2, 1, 13, 'Buick', 'Sprzedam horror Stephena Kinga w dobrym stanie'),\r\n(4, 2, 1, 14, 'Tytus, Romek i Atomek', 'Ks. IV do sprzedania, stan dobry'),\r\n(5, 2, 2, 0, 'Imagine Dragons', 'Sprzedam dwa CD Imagine Dragons');\r\n\r\n-- --------------------------------------------------------\r\n\r\n--\r\n-- Struktura tabeli dla tabeli `uzytkownik`\r\n--\r\n\r\nCREATE TABLE `uzytkownik` (\r\n  `id` int(10) UNSIGNED NOT NULL,\r\n  `imie` text,\r\n  `nazwisko` text,\r\n  `telefon` text,\r\n  `email` text\r\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\r\n\r\n--\r\n-- Zrzut danych tabeli `uzytkownik`\r\n--\r\n\r\nINSERT INTO `uzytkownik` (`id`, `imie`, `nazwisko`, `telefon`, `email`) VALUES\r\n(1, 'Anna', 'Kowalska', '601601601', 'anna@poczta.pl'),\r\n(2, 'Jan', 'Nowak', '608608608', 'jan@poczta.pl');\r\n\r\n--\r\n-- Indeksy dla zrzutów tabel\r\n--\r\n\r\n--\r\n-- Indexes for table `ogloszenie`\r\n--\r\nALTER TABLE `ogloszenie`\r\n  ADD PRIMARY KEY (`id`);\r\n\r\n--\r\n-- Indexes for table `uzytkownik`\r\n--\r\nALTER TABLE `uzytkownik`\r\n  ADD PRIMARY KEY (`id`);\r\n\r\n--\r\n-- AUTO_INCREMENT for dumped tables\r\n--\r\n\r\n--\r\n-- AUTO_INCREMENT dla tabeli `ogloszenie`\r\n--\r\nALTER TABLE `ogloszenie`\r\n  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;\r\n--\r\n-- AUTO_INCREMENT dla tabeli `uzytkownik`\r\n--\r\nALTER TABLE `uzytkownik`\r\n  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;\r\n/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;\r\n/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;\r\n/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;\r\n",
      "dodajDane.php": "<?php \r\n\t$connect = mysqli_connect('localhost','root','','ogloszenia');\r\n\t$name = $_POST['name'];\r\n\t$nazw = $_POST['nazw'];\r\n\t$tel = $_POST['tel'];\r\n\t$mail = $_POST['mail'];\r\n\t$ask = \"INSERT INTO `uzytkownik` (`id`, `imie`, `nazwisko`, `telefon`, `email`) VALUES (NULL, '$name', '$nazw', '$tel', '$mail')\";\r\n\r\n\tif (isset($name) || isset($nazw) || isset($tel) || isset($mail))\r\n\t{ \r\n\t\tmysqli_query($connect, $ask);\r\n\t\techo \"Dodano dane\";\r\n\t}\r\n\r\n\tmysqli_close($connect);\r\n?>\r\n\r\n",
      "kwerendy.txt": "Zapytanie 1: INSERT INTO `uzytkownik` (`id`, `imie`, `nazwisko`, `telefon`, `email`) VALUES (NULL, 'Jolanta', 'Jasny', '600600600', 'jolanta@poczta.pl');\r\nZapytanie 2: SELECT `ogloszenie`.`tytul`, `ogloszenie`.`tresc`, `podkategoria` FROM `ogloszenie` WHERE `ogloszenie`.`uzytkownik_id` = 1 AND `ogloszenie`.`kategoria`= 1\r\nZapytanie 3: CREATE USER 'jolanta'@'localhost' IDENTIFIED BY 'jol1@'\r\nZapytanie 4: GRANT SELECT, UPDATE ON `ogloszenia`.`uzytkownik` TO 'jolanta'@'localhost'",
      "README.md": "# 📌 2018_zima - e14-04-18_01 (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** 2018 zima   e14 04 18 01  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** HTML5, CSS3, PHP (mysqli), MySQL\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nZadanie praktyczne z przygotowania do egzaminu zawodowego obejmujące tworzenie aplikacji internetowej, arkusza stylów CSS oraz relacyjnej bazy danych.\n\n### Główne elementy rozwiązania:\n- Opracowanie semantycznej struktury strony w standardzie HTML5.\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Utworzenie tabel, relacji oraz przygotowanie poprawnych kwerend SQL (SELECT, INSERT, UPDATE).\n- Oprogramowanie skryptu backendowego w PHP (mysqli) do komunikacji z bazą danych MySQL.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 📄 **Arkusz PDF:** `E.14-04-18.01.pdf`\n- 🌐 **Pliki HTML:** `rejestracja.html`\n- 🐘 **Skrypty PHP:** `dodajDane.php`\n- 💾 **Baza / Kwerendy SQL:** `baza.sql`\n- 📝 **Pliki tekstowe / Kwerendy:** `kwerendy.txt`\n- 🎨 **Style CSS:** `styl4.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Import bazy danych:**\n   - Uruchom lokalny serwer MySQL (np. w panelu XAMPP).\n   - Otwórz w przeglądarce `http://localhost/phpmyadmin`.\n   - Utwórz nową bazę danych i zaimportuj plik SQL (`baza.sql`).\n\n3. **Uruchomienie PHP:**\n   - Skopiuj ten rozpakowany folder do katalogu `C:\\xampp\\htdocs\\e14-04-18_01`.\n   - Uruchom moduł **Apache** w XAMPP.\n   - Otwórz w przeglądarce adres: `http://localhost/e14-04-18_01/dodajDane.php`.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
      "rejestracja.html": "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"styl4.css\">\r\n\t<title>Dodaj Użytkownika</title>\r\n</head>\r\n<body>\r\n\t<header>\r\n\t\t<h2>Rejestracja użytkownika</h2>\r\n\t</header>\r\n\t<nav>\r\n\t\t<h3>Wpisz swoje dane</h3>\r\n\t\t<form method=\"POST\" action=\"dodajDane.php\">\r\n\t\t\t<label>Imię:<br><input type=\"text\" name=\"name\"><br></label>\r\n\t\t\t<label>Nazwisko:<br><input type=\"text\" name=\"nazw\" size=\"40\"><br></label>\r\n\t\t\t<label>Telefon:<br><input type=\"text\" name=\"tel\"><br></label>\r\n\t\t\t<label>Email:<br><input type=\"text\" name=\"mail\" size=\"40\"><br></label>\r\n\t\t\t<input class=\"in\" type=\"reset\" name=\"cls\" value=\"CZYŚĆ\">\r\n\t\t\t<input class=\"in\" type=\"submit\" name=\"send\" value=\"WYŚLIJ\">\r\n\t\t</form>\r\n\t</nav>\r\n\t<main>\r\n\t\t<img src=\"ksiazki.jpg\" alt=\"sprzedaj książkę\"><br>\r\n\t\t<a href=\"kwerendy.txt\">kwerendy SQL</a>\r\n\t\t<h3>Podkategorie</h3>\r\n\t\t<ul>\r\n\t\t\t<li>Książki</li>\r\n\t\t\t<li>Muzyka</li>\r\n\t\t\t<li>Filmy</li>\r\n\t\t</ul>\r\n\t\t<h3>Podkategorie</h3>\r\n\t\t<ul>\r\n\t\t\t<li>Biografia</li>\r\n\t\t\t<li>Kryminał</li>\r\n\t\t\t<li>Komiks</li>\r\n\t\t</ul>\r\n\t</main>\r\n\t<footer>\r\n\t\tPortal ogłoszeniowy opracował:\r\n\t</footer>\r\n</body>\r\n</html>",
      "styl4.css": "body, html\r\n{\r\n\tmargin: 0 auto;\r\n\tpadding: 0;\r\n}\r\n\r\nheader\r\n{\r\n\tbackground-color: #301B5E;\r\n\tcolor: white;\r\n\tfont-family: Arial;\r\n\theight: 60px;\r\n\tpadding: 20px;\r\n}\r\n\r\nnav\r\n{\r\n\tbackground-color: #0193DA;\r\n\twidth: 60%;\r\n\theight: 700px;\r\n\tfloat: left;\r\n}\r\n\r\nmain\r\n{\r\n\tbackground-color: #2DAFEE;\r\n\twidth: 40%;\r\n\theight: 700px;\r\n\ttext-align: center;\r\n\tfloat: left;\r\n}\r\n\r\nfooter\r\n{\r\n\tbackground-color: #301B5E;\r\n\tcolor: white;\r\n\ttext-align: center;\r\n\tclear: left;\t\r\n}\r\n\r\na\r\n{\r\n\tcolor: white;\r\n}\r\n\r\na:hover\r\n{\r\n\tcolor: red;\r\n}\r\n\r\n.in\r\n{\r\n\tbackground-color: orange;\r\n\tcolor: white;\r\n\tborder: 0px;\r\n\tpadding: 20px;\r\n}"
    }
  },
  {
    "id": "Kwalifikacja_E14_2018_zima_e14-05-18_01",
    "category": "Kwalifikacja_E14",
    "name": "2018 zima — E.14-05-18.01",
    "title": "2018 zima — E.14 05 18.01",
    "description": "Zadanie praktyczne z przygotowania do egzaminu zawodowego obejmujące tworzenie aplikacji internetowej, arkusza stylów CSS oraz relacyjnej bazy danych.",
    "technologies": [
      "HTML5",
      "CSS3"
    ],
    "folder": "Kwalifikacja_E14/2018_zima/e14-05-18_01",
    "mainPdf": "E.14-05-18.01.pdf",
    "mainHtml": "index.html",
    "mainPhp": null,
    "mainSql": null,
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# 📌 2018_zima - e14-05-18_01 (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** 2018 zima   e14 05 18 01  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** HTML5, CSS3\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nZadanie praktyczne z przygotowania do egzaminu zawodowego obejmujące tworzenie aplikacji internetowej, arkusza stylów CSS oraz relacyjnej bazy danych.\n\n### Główne elementy rozwiązania:\n- Opracowanie semantycznej struktury strony w standardzie HTML5.\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 📄 **Arkusz PDF:** `E.14-05-18.01.pdf`\n- 🌐 **Pliki HTML:** `index.html`\n- 🎨 **Style CSS:** `styl5.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Uruchomienie strony WWW:**\n   - Kliknij dwukrotnie plik `index.html` lub przeciągnij go do dowolnej przeglądarki.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
    "pdfs": [
      "E.14-05-18.01.pdf"
    ],
    "htmls": [
      "index.html"
    ],
    "phps": [],
    "sqls": [],
    "zips": [
      "paczka_zadania.zip"
    ],
    "txts": [],
    "scripts": [
      "styl5.css"
    ],
    "allFiles": [
      "E.14-05-18.01.pdf",
      "index.html",
      "logo-duze.png",
      "logo-male.png",
      "paczka_zadania.zip",
      "README.md",
      "styl5.css"
    ],
    "fileContents": {
      "index.html": "<!DOCTYPE html>\r\n<!DOCTYPE html>\r\n<html lang=\"pl\">\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<title>Portal ogłoszeniowy</title>\r\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"styl5.css\">\r\n\t<script type=\"text/javascript\">\r\n\t\tfunction obliczanie()\r\n\t\t{\r\n\t\t\tvar x=document.getElementById(\"num\").value;\r\n\t\t\tvar suma=(x*2)-(0.1*2*x);\r\n\t\t\tvar suma2=(x*1)-(0.2*1*x);\r\n\t\t\t\r\n\t\t\tif (x>=1 && x<=50 && document.getElementById(\"check\").checked==false) \r\n\t\t\t{\r\n\t\t\t\tdocument.getElementById(\"wynik\").innerHTML=\"Koszt ogłoszeń: \"+x*2+ \" PLN\";\r\n\t\t\t}\r\n\t\t\telse if (x>=1 && x<=50 && document.getElementById(\"check\").checked==true)\r\n\t\t\t{\r\n\t\t\t\tdocument.getElementById(\"wynik\").innerHTML=\"Koszt ogłoszeń: \" + suma + \" PLN\";\r\n\t\t\t}\r\n\t\t\telse if (x>=51 && document.getElementById(\"check\").checked==false)\r\n\t\t\t {\r\n\t\t\t \tdocument.getElementById(\"wynik\").innerHTML=\"Koszt ogłoszeń: \"+x*1+\" PLN\";\r\n\t\t\t }\r\n\t\t\t else if (x>=51 && document.getElementById(\"check\").checked==true ) \r\n\t\t\t {\r\n\t\t\t \tdocument.getElementById(\"wynik\").innerHTML=\"Koszt ogłoszeń: \"+suma2+\" PLN\";\r\n\t\t\t }\r\n\t\t\t else\r\n\t\t\t {\r\n\t\t\t \tdocument.getElementById(\"wynik\").innerHTML=\"Wprowadź dane\";\r\n\t\t\t }\r\n\t\t}\r\n\t</script>\r\n</head>\r\n<body>\r\n<div id=\"baner\">\r\n\t\t<h1>Portal Ogłoszeniowy</h1>\r\n</div>\r\n<div class=\"info\">\r\n\t<img src=\"logo-male.png\">\r\n</div>\r\n<div class=\"info\">\r\n\t<h3>Adres</h3>\r\n\t<p>ul.Morska 45 Gdynia</p>\r\n</div>\r\n<div class=\"info\">\r\n\t<h3>telefon</h3>\r\n\t<p>601601601</p>\r\n</div>\r\n<div class=\"info\">\r\n\t<h3>e-mail</h3>\r\n\t<p>ogloszenia@poczta.pl</p>\r\n</div>\r\n<div id=\"pl\">\r\n\t<h2>Ceny ogłoszeń</h2>\r\n\t\t<table>\r\n\t\t\t<tr>\r\n\t\t\t\t\t<td>Liczba ogłoszeń</td> <td>Cena ogłoszenia</td> <td>Bonus</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t\t<td>1-50</td> \t\t\t <td>2 PLN</td>           <td rowspan=\"2\">Subskrypcja newslettera to upust 0,20 PLN  na ogłoszenie</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t\t<td>51 i więcej</td>\t <td>1 PLN</td>           \r\n\t\t\t</tr>\r\n\t\t</table>\r\n</div>\r\n<div id=\"ps\">\r\n\t<h2>Witamy na stronie naszego portalu!</h2>\r\n\t<img src=\"logo-duze.png\" alt=\"ogłoszenia\">\r\n</div>\t\r\n<div id=\"pp\">\r\n\t<h2>Ile kosztuje ogłoszenie?</h2>\r\n\tPodaj liczbę ogłoszeń: <input type=\"number\" id=\"num\"> <br>\r\n\t<input type=\"checkbox\" id=\"check\"> Policz upust na newsletter <br>\r\n\t<input type=\"submit\" value=\"Oblicz\" id=\"przycisk\" onclick=\"obliczanie()\">\r\n\t<p id=\"wynik\"></p>\r\n</div>\r\n<div id=\"stopka\">\r\n\tPortal ogłoszeniowy opracował: 00000000000\r\n</div>\r\n\r\n\r\n</body>\r\n</html>",
      "README.md": "# 📌 2018_zima - e14-05-18_01 (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** 2018 zima   e14 05 18 01  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** HTML5, CSS3\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nZadanie praktyczne z przygotowania do egzaminu zawodowego obejmujące tworzenie aplikacji internetowej, arkusza stylów CSS oraz relacyjnej bazy danych.\n\n### Główne elementy rozwiązania:\n- Opracowanie semantycznej struktury strony w standardzie HTML5.\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 📄 **Arkusz PDF:** `E.14-05-18.01.pdf`\n- 🌐 **Pliki HTML:** `index.html`\n- 🎨 **Style CSS:** `styl5.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Uruchomienie strony WWW:**\n   - Kliknij dwukrotnie plik `index.html` lub przeciągnij go do dowolnej przeglądarki.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
      "styl5.css": "body,html\r\n{\r\n\tmargin: 0px;\r\n\tpadding: 0px;\r\n}\r\n#baner \r\n{\r\n\tbackground-color: #009999;\r\n\tcolor: white;\r\n\ttext-align: center;\r\n\theight: 80px;\r\n}\r\n.info\r\n{\r\n\tfont-family: Arial;\r\n\tbackground-color: #009999;\r\n\tcolor: white;\r\n\ttext-align: center;\r\n\twidth: 25%;\r\n\theight: 150px;\r\n\tfloat: left;\r\n}\r\n#pl \r\n{\r\n\tbackground-color: #669999;\r\n\twidth: 30%;\r\n\theight: 600px;\r\n\tfloat: left;\r\n}\r\n#pp\r\n{\r\n\tbackground-color: #669999;\r\n\twidth: 30%;\r\n\theight: 600px;\r\n\tfloat: left;\r\n}\r\n#ps\r\n{\r\n\tbackground-color: #99CCCC;\r\n\twidth: 40%;\r\n\theight: 600px;\r\n\ttext-align: center;\r\n\tfloat: left;\r\n}\r\n#stopka\r\n{\r\n\tbackground-color: #009999;\r\n\tcolor: white;\r\n\ttext-align: right;\r\n\tclear: both;\r\n}\r\ntable,td\r\n{\r\n\tborder: 1px solid green;\r\n\ttext-align: center;\r\n}\r\n#przycisk\r\n{\r\n\tborder: none;\r\n\tmargin: 10px;\r\n\tbackground-color: green;\r\n\tcolor: white;\r\n}"
    }
  },
  {
    "id": "Kwalifikacja_E14_2018_zima_e14-06-18_01",
    "category": "Kwalifikacja_E14",
    "name": "2018 zima — E.14-06-18.01",
    "title": "2018 zima — E.14 06 18.01",
    "description": "Zadanie praktyczne z przygotowania do egzaminu zawodowego obejmujące tworzenie aplikacji internetowej, arkusza stylów CSS oraz relacyjnej bazy danych.",
    "technologies": [
      "HTML5",
      "CSS3"
    ],
    "folder": "Kwalifikacja_E14/2018_zima/e14-06-18_01",
    "mainPdf": "E.14-06-18.01.pdf",
    "mainHtml": "portal.html",
    "mainPhp": null,
    "mainSql": null,
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# 📌 2018_zima - e14-06-18_01 (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** 2018 zima   e14 06 18 01  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** HTML5, CSS3\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nZadanie praktyczne z przygotowania do egzaminu zawodowego obejmujące tworzenie aplikacji internetowej, arkusza stylów CSS oraz relacyjnej bazy danych.\n\n### Główne elementy rozwiązania:\n- Opracowanie semantycznej struktury strony w standardzie HTML5.\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 📄 **Arkusz PDF:** `E.14-06-18.01.pdf`\n- 🌐 **Pliki HTML:** `portal.html`\n- 🎨 **Style CSS:** `styl6.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Uruchomienie strony WWW:**\n   - Kliknij dwukrotnie plik `portal.html` lub przeciągnij go do dowolnej przeglądarki.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
    "pdfs": [
      "E.14-06-18.01.pdf"
    ],
    "htmls": [
      "portal.html"
    ],
    "phps": [],
    "sqls": [],
    "zips": [
      "paczka_zadania.zip"
    ],
    "txts": [],
    "scripts": [
      "styl6.css"
    ],
    "allFiles": [
      "E.14-06-18.01.pdf",
      "grafika.png",
      "logo.png",
      "paczka_zadania.zip",
      "portal.html",
      "README.md",
      "styl6.css"
    ],
    "fileContents": {
      "portal.html": "<!DOCTYPE html>\r\n<!DOCTYPE html>\r\n<html lang=\"pl\">\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<title>Ogłoszenia</title>\r\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"styl6.css\">\r\n\t<script type=\"text/javascript\">\r\n\t\tfunction obliczanie()\r\n\t\t{\r\n\t\t\tvar x = document.getElementById(\"num\").value;\r\n\t\t\tvar suma=(x*3)-(0.1*3*x);\r\n\t\t\tvar suma2=(x*2)-(0.15*2*x);\r\n\t\t\t\r\n\t\t\tif (x>=1 && x<=40 && document.getElementById(\"check\").checked==false)\r\n\t\t\t{\r\n\t\t\t\tdocument.getElementById(\"wynik\").innerHTML=\"Twoje ogłoszenia będą kosztować: \"+x*3+ \" PLN\";\r\n\t\t\t}\r\n\t\t\telse if (x>=1 && x<=40 && document.getElementById(\"check\").checked==true)\r\n\t\t\t{\r\n\t\t\t\tdocument.getElementById(\"wynik\").innerHTML=\"Twoje ogłoszenia będą kosztować: \"+ suma + \" PLN\";\r\n\t\t\t}\r\n\t\t\telse if (x>=41 &&  document.getElementById(\"check\").checked==false)\r\n\t\t\t {\r\n\t\t\t \tdocument.getElementById(\"wynik\").innerHTML=\"Twoje ogłoszenia będą kosztować: \"+x*2+ \" PLN\";\r\n\t\t\t }\r\n\t\t\t  else if (x>=41 &&  document.getElementById(\"check\").checked==true) \r\n\t\t\t {\r\n\t\t\t \tdocument.getElementById(\"wynik\").innerHTML=\"Twoje ogłoszenia będą kosztować: \"+ suma2 + \" PLN\";\r\n\t\t\t }\r\n\t\t\t\r\n\t\t}\r\n\t</script>\r\n</head>\r\n<body>\r\n<div id=\"baner\">\r\n\t<h1>Ogłoszenia drobne</h1>\r\n</div>\r\n<div class=\"info\">\r\n\t<h3>telefon</h3>\r\n\t<p>601601601</p>\r\n</div>\r\n<div class=\"info\">\r\n\t<h3>e-mail</h3>\r\n\t<p>ogloszenia@poczta.pl</p>\r\n</div>\r\n<div class=\"info\">\r\n\t<h3>Adres</h3>\r\n\t<p>ul. Morska 45 Gdynia</p>\r\n</div>\r\n<div class=\"info\">\r\n\t<img src=\"logo.png\">\r\n</div>\r\n<div id=\"pl\">\r\n\t<h2>Ceny</h2>\r\n\t\t<table>\r\n\t\t\t<tr>\r\n\t\t\t\t <td>Ile?</td> <td>Koszt</td> <td>Upust</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t <td>1-40</td> <td>3 PLN</td> <td rowspan=\"2\">0,30 PLN dla stałych klientów</td>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<td>41 i więcej</td> <td>2 PLN</td> \r\n\t\t\t</tr>\r\n\t\t</table>\r\n</div>\r\n<div id=\"ps\">\r\n\t<h2>Policz koszta</h2>\r\n\tLiczba ogłoszeń: <input type=\"number\" id=\"num\"> <br>\r\n\t<input type=\"checkbox\" id=\"check\">Jestem stałym klientem <br>\r\n\t<input type=\"submit\" value=\"Kalkulacja\" id=\"przycisk\" onclick=\"obliczanie()\">\r\n\t<p id=\"wynik\"></p>\r\n</div>\r\n<div id=\"pp\">\r\n\t<h2>Znajdujesz się na stronie portalu ogłoszeniowego</h2>\r\n\t<img src=\"grafika.png\" alt=\"Oblicz koszt ogłoszenia\">\r\n</div>\r\n<div id=\"stopka\">\r\n\tPortal ogłoszeniowy opracował: 00000000000\r\n</div>\r\n</body>\r\n</html>",
      "README.md": "# 📌 2018_zima - e14-06-18_01 (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** 2018 zima   e14 06 18 01  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** HTML5, CSS3\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nZadanie praktyczne z przygotowania do egzaminu zawodowego obejmujące tworzenie aplikacji internetowej, arkusza stylów CSS oraz relacyjnej bazy danych.\n\n### Główne elementy rozwiązania:\n- Opracowanie semantycznej struktury strony w standardzie HTML5.\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 📄 **Arkusz PDF:** `E.14-06-18.01.pdf`\n- 🌐 **Pliki HTML:** `portal.html`\n- 🎨 **Style CSS:** `styl6.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Uruchomienie strony WWW:**\n   - Kliknij dwukrotnie plik `portal.html` lub przeciągnij go do dowolnej przeglądarki.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
      "styl6.css": "body,html\r\n{\r\n\tmargin: 0px;\r\n\tpadding: 0px;\r\n}\r\n#baner\r\n{\r\n\tbackground-color: #993333;\r\n\tcolor:white;\r\n\ttext-align: center;\r\n\theight: 80px;\r\n}\r\n.info\r\n{\r\n\tfont-family: Tahoma;\r\n\tbackground-color: #CC6666;\r\n\tcolor:white;\r\n\ttext-align: center;\r\n\twidth: 25%;\r\n\theight: 150px;\r\n\tfloat: left;\r\n}\r\n#pp,#pl\r\n{\r\n\tbackground-color: #CC9999;\r\n\twidth: 40%;\r\n\theight: 550px;\r\n\tfloat: left;\r\n}\r\n#ps\r\n{\r\n\tbackground-color: #FFCCCC;\r\n\twidth: 20%;\r\n\theight: 550px;\r\n\tfloat: left;\r\n}\r\n#stopka\r\n{\r\n\tbackground-color: #993333;\r\n\tcolor:white;\r\n\ttext-align: right;\r\n\tclear: both;\r\n}\r\ntable\r\n{\r\n\tborder: 1px dotted red;\r\n\twidth: 100%;\r\n}\r\ntd\r\n{\r\n\ttext-align: center;\r\n}\r\n#przycisk\r\n{\r\n\tborder: none;\r\n\tpadding: 20px;\r\n\tbackground-color: red;\r\n\tcolor: white;\r\n\r\n}\r\n"
    }
  },
  {
    "id": "Kwalifikacja_E14_2018_zima_e14-07-18_01_www",
    "category": "Kwalifikacja_E14",
    "name": "2018 zima — E.14-07-18.01",
    "title": "2018 zima — E.14 07 18.01",
    "description": "Zadanie praktyczne z przygotowania do egzaminu zawodowego obejmujące tworzenie aplikacji internetowej, arkusza stylów CSS oraz relacyjnej bazy danych.",
    "technologies": [
      "HTML5",
      "CSS3"
    ],
    "folder": "Kwalifikacja_E14/2018_zima/e14-07-18_01/www",
    "mainPdf": "E.14-07-18.01.pdf",
    "mainHtml": "index.html",
    "mainPhp": null,
    "mainSql": null,
    "mainZip": null,
    "hasReadme": false,
    "readmeContent": "",
    "pdfs": [
      "E.14-07-18.01.pdf"
    ],
    "htmls": [
      "index.html"
    ],
    "phps": [],
    "sqls": [],
    "zips": [],
    "txts": [],
    "scripts": [
      "styl.css"
    ],
    "allFiles": [
      "index.html",
      "kwerenda1.jpg",
      "kwerenda2.jpg",
      "nowy_uzytkownik.jpg",
      "styl.css",
      "uprawnienia.jpg",
      "E.14-07-18.01.pdf"
    ],
    "fileContents": {
      "index.html": "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"styl.css\">\r\n\t<title>Szkoła ponadgimnazjalna</title>\r\n\t<script type=\"text/javascript\">\r\n\t\tfunction licz() {\r\n\t\t\tvar p = document.getElementById('p').value;\r\n\t\t\tvar n = document.getElementById('n').value;\r\n\t\t\tvar r = document.getElementById('r').value;\r\n\t\t\tvar sr = (parseInt(p)+parseInt(n)+parseInt(r))/3\r\n\r\n\t\t\tif ( isNaN(sr) || isNaN(p || n || r) || p  === \"\" || n  === \"\" || r  === \"\" ) \r\n\t\t\t{\r\n\t\t\t\talert(\"wpisz poprawne dane\");\r\n\t\t\t}\r\n\t\t\telse\r\n\t\t\t{\t\r\n\t\t\tdocument.getElementById('out').innerHTML = sr ;\r\n\t\t\t}\r\n\t\t}\r\n\t</script>\r\n</head>\r\n<body>\r\n\t<header>\r\n\t\t<h2>Projekt strony internetowej szkoły ponadgimnazjalnej</h2>\r\n\t</header>\r\n\t<nav>\r\n\t\t<h3>Do pobrania</h3>\r\n\t\t<ul>\r\n\t\t\t<a href=\"../baza/zapytania.txt\"><li>Zapytania SQL</li></a>\r\n\t\t\t<a href=\"../baza/szkola_nowa.sql\"><li>baza danych</li></a>\r\n\t\t</ul>\r\n\t</nav>\r\n\t<main>\r\n\t\t<table>\r\n\t\t\t<tr>\r\n\t\t\t\t<th>Treść zapytania</th><th width=\"405\">Zrzut ekranu</th>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<th>INSERT INTO `uczen` (`id`, `nazwisko`, `imie`, `id_klasy`) VALUES ('27', 'Jasny', 'Wiktoria', '1');</th><th><img src=\"kwerenda1.jpg\" alt=\"kwerenda1.jpg\"></th>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<th> SELECT wychowawca.imie, wychowawca.nazwisko FROM wychowawca inner JOIN uczen ON wychowawca.id_klasy= uczen.id_klasy where uczen.nazwisko = \"Markiewicz\"</th><th><img src=\"kwerenda2.jpg\" alt=\"kwerenda2.jpg\"></th>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<th>CREATE USER 'Jan_Bogucki'@'localhost' IDENTIFIED BY 'jb_123'</th><th><img src=\"nowy_uzytkownik.jpg\" alt=\"nowy_uzytkownik.jpg\"></th>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<th>GRANT SELECT, INSERT, DROP ON szkola.uczen TO 'Jan_Bogucki'@'localhost'</th><th><img src=\"uprawnienia.jpg\" alt=\"uprawnienia.jpg\"></th>\r\n\t\t\t</tr>\r\n\t\t</table>\r\n\t</main>\r\n\t<aside>\r\n\t\t<h4>Obliczanie średniej ocen</h4>\r\n\t\t<ul>\r\n\t\t\t<label><li>Polak<input type=\"text\" id=\"p\"></li></label>\r\n\t\t\t<label><li>Nowak<input type=\"text\" id=\"n\"></li></label>\r\n\t\t\t<label><li>Rysik<input type=\"text\" id=\"r\"></li></label>\r\n\t\t</ul>\r\n\t\t<input type=\"submit\" name=\"send\" value=\"oblicz\" onclick=\"licz()\">\r\n\t\t<h4>Średnia ocen:</h4><h4 id=\"out\"></h4>\r\n\t</aside>\r\n\t<footer>\r\n\t\t<h5>autor strony: ………….</h5>\r\n\t</footer>\r\n</body>\r\n</html>",
      "styl.css": "body, html\r\n{\r\n\tmargin: 0 auto;\r\n\tpadding: 0;\r\n\tfont-family: Verdana;\r\n}\r\n\r\nheader\r\n{\r\n\tbackground-color: #ffb31c;\r\n\ttext-align:center;\r\n\theight: 60px;\r\n}\r\n\r\nnav\r\n{\r\n\tbackground-color: #ffb31c;\r\n\twidth: 20%;\r\n\theight: 480px;\r\n\tfloat: left;\r\n}\r\n\r\nmain\r\n{\r\n\tbackground-color: #ffcb71;\r\n\twidth: 60%;\r\n\theight: 480px;\r\n\tfloat: left;\r\n\toverflow: scroll;\r\n}\r\n\r\naside\r\n{\r\n\tbackground-color: #ffb31c;\r\n\ttext-align: right;\r\n\twidth: 20%;\r\n\theight: 480px;\r\n\tfloat: left;\r\n}\r\n\r\nfooter\r\n{\r\n\tbackground-color: #ffb31c;\r\n\ttext-align:center;\r\n\theight: 30px;\r\n\tclear: left;\r\n}\r\n\r\na\r\n{\r\n\tcolor: brown;\r\n}\r\n\r\nul\r\n{\r\n\tlist-style: square;\r\n}\r\n\r\nth\r\n{\r\n\tborder: 1px solid black;\r\n}"
    }
  },
  {
    "id": "Kwalifikacja_E14_2018_zima_e14-08-18_01_www",
    "category": "Kwalifikacja_E14",
    "name": "2018 zima — E.14-08-18.01",
    "title": "2018 zima — E.14 08 18.01",
    "description": "Zadanie praktyczne z przygotowania do egzaminu zawodowego obejmujące tworzenie aplikacji internetowej, arkusza stylów CSS oraz relacyjnej bazy danych.",
    "technologies": [
      "HTML5",
      "CSS3"
    ],
    "folder": "Kwalifikacja_E14/2018_zima/e14-08-18_01/www",
    "mainPdf": "E.14-08-18.01.pdf",
    "mainHtml": "index.html",
    "mainPhp": null,
    "mainSql": null,
    "mainZip": null,
    "hasReadme": false,
    "readmeContent": "",
    "pdfs": [
      "E.14-08-18.01.pdf"
    ],
    "htmls": [
      "index.html"
    ],
    "phps": [],
    "sqls": [],
    "zips": [],
    "txts": [],
    "scripts": [
      "styl.css"
    ],
    "allFiles": [
      "index.html",
      "kwerenda1.jpg",
      "kwerenda2.jpg",
      "nowy_uzytkownik.jpg",
      "styl.css",
      "uprawnienia.jpg",
      "E.14-08-18.01.pdf"
    ],
    "fileContents": {
      "index.html": "<!DOCTYPE html>\r\n<!DOCTYPE html>\r\n<html lang=\"pl\">\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<title>Szkoła ponadgimnazjalna</title>\r\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"styl.css\">\r\n\t<script type=\"text/javascript\">\r\n\t\tfunction obliczanie()\r\n\t\t{\r\n\t\t\tvar polak = document.getElementById(\"polak\").value;\r\n\t\t\tvar nowak = document.getElementById(\"nowak\").value;\r\n\t\t\tvar rysik = document.getElementById(\"rysik\").value;\r\n\t\t\tif (isNaN(polak) || isNaN(nowak) || isNaN(rysik) || !polak==1 || !nowak==1 || !rysik==1)\r\n\t\t\t {\r\n\t\t\t \r\n\t\t\t \talert(\"Wpisz poprawne dane\");\r\n\t\t\t }\r\n\t\t\t else if (!polak==0 && !nowak==0 && !rysik==0)\r\n\t\t\t {\r\n\t\t\t \r\n\t\t\t \ta=parseFloat(polak);\r\n\t\t\t \tb=parseFloat(nowak);\r\n\t\t\t \tc=parseFloat(rysik);\r\n\t\t\t \tsrednia=Math.max(a,b,c);\r\n\t\t\t \tdocument.getElementById(\"wynik\").innerHTML=\"Najwyższa średnia to: \"+srednia;\r\n\t\t\t \r\n\t\t\t }\r\n\r\n\t\t}\r\n\t</script>\r\n</head>\r\n<body>\r\n<div id=\"baner\">\r\n\t<h1>Projekt strony internetowej szkoły ponadgimnazjalnej</h1>\r\n</div>\r\n<div id=\"pl\">\r\n\t<h3>Do pobrania</h3>\r\n\t<ul>\r\n\t\t<li><a href=\"../baza/zapytania.txt\">Zapytania SQL</a></li>\r\n\t\t<li><a href=\"../baza/szkola_nowa.sql\">baza danych</a></li>\r\n\t</ul>\r\n\t<hr>\r\n\t<ul>\r\n\t\t<li>Polak<input type=\"text\" id=\"polak\"></li>\r\n\t\t<li>Nowak<input type=\"text\" id=\"nowak\"></li>\r\n\t\t<li>Rysik<input type=\"text\" id=\"rysik\"> </li><br>\r\n\t</ul>\r\n\t<label for=\"przycisk\">\r\n\t<input type=\"submit\" value=\"wyznacz\" id=\"przycisk\" onclick=\"obliczanie()\"></label>\r\n\t<p><h3>Najwyższa średnia:</h3></p>\r\n\t<p id=\"wynik\"></p>\r\n</div>\r\n<div id=\"pp\">\r\n\t<table>\r\n\t\t<th>Treść zapytania</th>\t<th>Zrzut ekranu</th>\r\n\t\t<tr>\r\n\t\t\t<td>INSERT INTO wychowawca VALUES(5,'Maciej','Stasiak','5');</td> <td class=\"prawy\"><img src=\"kwerenda1.jpg\" alt=\"kwerenda1\"></td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>SELECT uczen.nazwisko, uczen.imie FROM uczen INNER JOIN wychowawca ON uczen.id_klasy=wychowawca.id_klasy WHERE wychowawca.nazwisko=\"Michalska\";</td>\r\n\t\t\t<td class=\"prawy\"><img src=\"kwerenda2.jpg\" alt=\"kwerenda2\"></td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>CREATE USER 'K_Pietkiewicz'@'localhost' IDENTIFIED BY 'kp_123';</td>\r\n\t\t\t<td class=\"prawy\"><img src=\"nowy_uzytkownik.jpg\" alt=\"nowy_uzytkownik\"></td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>GRANT SELECT,INSERT ON uczen TO 'K_Pietkiewicz'@'localhost';</td>\r\n\t\t\t<td class=\"prawy\"><img src=\"uprawnienia.jpg\" alt=\"uprawnienia\"></td>\r\n\t\t</tr>\r\n\t</table>\r\n</div>\r\n<div id=\"stopka\">\r\n\t<h4>stronę wykonał: 00000000000</h4>\r\n</div>\r\n\r\n</body>\r\n</html>",
      "styl.css": "body,html\r\n{\r\n\tmargin: 0px;\r\n\tpadding: 0px;\r\n}\r\nbody\r\n{\r\n\tfont-family: Tahoma;\r\n}\r\n#baner\r\n{\r\n\tbackground-color:  #af8c4b;\r\n\ttext-align: center;\r\n\theight: 60px;\r\n}\r\n#pl\r\n{\r\n\tbackground-color:  #af8c4b;\r\n\ttext-align: right;\r\n\twidth: 30%;\r\n\theight: 500px;\r\n\tfloat: left;\r\n}\r\n#pl li\r\n{\r\n\tlist-style-type: circle;\r\n}\r\n#pp\r\n{\r\n\tbackground-color: #ffd87e;\r\n\twidth: 70%;\r\n\theight: 500px;\r\n\tfloat: left;\r\n\toverflow: scroll;\r\n\r\n}\r\n#stopka\r\n{\r\n\tbackground-color:  #af8c4b;\r\n\ttext-align: center;\r\n\theight: 25px;\r\n\tclear: both;\r\n\r\n}\r\nhr\r\n{\r\n\tbackground-color: #ffd87e;\r\n}\r\ntd, th\r\n{\r\n\tborder: 1px dotted black;\r\n}\r\na\r\n{\r\n\tcolor: #ffd87e;\r\n}\r\n.prawy\r\n{\r\n\twidth: 405px;\r\n}"
    }
  },
  {
    "id": "Kwalifikacja_E14_2018_zima_e14-09-18_01_www",
    "category": "Kwalifikacja_E14",
    "name": "2018 zima — E.14-09-18.01",
    "title": "2018 zima — E.14 09 18.01",
    "description": "Zadanie praktyczne z przygotowania do egzaminu zawodowego obejmujące tworzenie aplikacji internetowej, arkusza stylów CSS oraz relacyjnej bazy danych.",
    "technologies": [
      "HTML5",
      "CSS3"
    ],
    "folder": "Kwalifikacja_E14/2018_zima/e14-09-18_01/www",
    "mainPdf": "E.14-09-18.01.pdf",
    "mainHtml": "index.html",
    "mainPhp": null,
    "mainSql": null,
    "mainZip": null,
    "hasReadme": false,
    "readmeContent": "",
    "pdfs": [
      "E.14-09-18.01.pdf"
    ],
    "htmls": [
      "index.html"
    ],
    "phps": [],
    "sqls": [],
    "zips": [],
    "txts": [],
    "scripts": [
      "styl.css"
    ],
    "allFiles": [
      "index.html",
      "kwerenda1.jpg",
      "kwerenda2.jpg",
      "nowy_uzytkownik.jpg",
      "styl.css",
      "uprawnienia.jpg",
      "E.14-09-18.01.pdf"
    ],
    "fileContents": {
      "index.html": "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"styl.css\">\r\n\t<title>Szkoła ponadgimnazjalna</title>\r\n\t<script type=\"text/javascript\">\r\n\t\tfunction licz() {\r\n\t\t\tvar p = document.getElementById('p').value;\r\n\t\t\tvar n = document.getElementById('n').value;\r\n\t\t\tvar r = document.getElementById('r').value;\r\n\t\t\tvar sr = Math.min(p,n,r)\r\n\r\n\t\t\tif ( isNaN(sr) || isNaN(p || n || r) || p  === \"\" || n  === \"\" || r  === \"\" ) \r\n\t\t\t{\r\n\t\t\t\talert(\"wpisz poprawne dane\");\r\n\t\t\t}\r\n\t\t\telse\r\n\t\t\t{\t\r\n\t\t\tdocument.getElementById('out').innerHTML = sr ;\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t</script>\r\n</head>\r\n<body>\r\n\t<header>\r\n\t\t<h1>Projekt strony internetowej szkoły ponadgimnazjalnej</h1>\r\n\t</header>\r\n\t<nav>\r\n\t\t<table>\r\n\t\t\t<tr>\r\n\t\t\t\t<th>Treść zapytania</th><th width=\"400\">Zrzut ekranu</th>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<th>INSERT INTO `klasa` (`id`, `nazwa`) VALUES ('5', '3a');</th><th><img src=\"kwerenda1.jpg\" alt=\"kwerenda1.jpg\"></th>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<th>SELECT `klasa`.`nazwa`, AVG(`uczen`.`Srednia_ocen`) FROM `klasa` INNER JOIN `uczen` ON `klasa`.`id` = `uczen`.`id_klasy` GROUP BY `klasa`.`nazwa`</th><th><img src=\"kwerenda2.jpg\" alt=\"kwerenda2.jpg\"></th>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<th>CREATE USER 'Dyrektor'@'localhost' IDENTIFIED BY 'dyr_123'</th><th><img src=\"nowy_uzytkownik.jpg\" alt=\"nowy_uzytkownik.jpg\"></th>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<th>GRANT ALL ON `szkola`.* TO 'Dyrektor'@'localhost'</th><th><img src=\"uprawnienia.jpg\" alt=\"uprawnienia.jpg\"></th>\r\n\t\t\t</tr>\r\n\t\t</table>\r\n\t</nav>\r\n\t<main>\r\n\t\t<h2>Do pobrania</h2>\r\n\t\t<ul class=\"pt\">\r\n\t\t\t<li><a href=\"../baza/zapytania.txt\" >zapytania SQL</a></li>\r\n\t\t\t<li><a href=\"../baza/szkola_nowa.sql\">baza danych</a></li>\r\n\t\t</ul>\r\n\t\t<hr class=\"hr\">\r\n\t\t<h3>Wyznaczanie najniższej średniej</h3>\r\n\t\t<ul class=\"pt\">\r\n\t\t\t<li><label>Polak <input type=\"text\" id=\"p\"></label></li>\r\n\t\t\t<li><label>Nowak <input type=\"text\" id=\"n\"></label></li>\r\n\t\t\t<li><label>Rysik <input type=\"text\" id=\"r\"></label></li>\r\n\t\t</ul>\r\n\t\t<input type=\"submit\" id=\"send\" value=\"wyznacz\" onclick=\"licz()\">\r\n\t\t<h3>Najniższa średnia: </h3><h3 id=\"out\"></h3>\r\n\t</main>\r\n\t<footer>\r\n\t\t<h3>stronę wykonał:</h3>\r\n\t</footer>\r\n</body>\r\n</html>",
      "styl.css": "body, html \r\n{\r\n\tmargin: 0 auto;\r\n\tpadding: 0;\r\n\tfont-family: Arial;\r\n\tcolor: white;\r\n}\r\n\r\nheader\r\n{\r\n\tbackground-color: #5957a1;\r\n\ttext-align: center;\r\n\tpadding: 10px;\r\n\theight: 70px;\r\n}\r\n\r\nnav\r\n{\r\n\tbackground-color: #bbadcd;\r\n\twidth: 65%;\r\n\theight: 450px;\r\n\tfloat: left;\r\n\toverflow: scroll;\r\n}\r\n\r\nmain\r\n{\r\n\tbackground-color: #5957a1;\r\n\ttext-align: center;\r\n\twidth: 35%;\r\n\theight: 450px;\r\n\tfloat: left;\r\n}\r\n\r\nfooter\r\n{\r\n\tbackground-color: #5957a1;\r\n\ttext-align: center;\r\n\theight: 50px;\r\n\tclear: left;\r\n}\r\n\r\n.hr\r\n{\r\n\tcolor: yellow;\r\n}\r\n\r\n.pt\r\n{\r\n\tlist-style-type: square;\r\n}\r\n\r\na\r\n{\r\n\tcolor: yellow;\r\n}\r\n\r\nth\r\n{\r\n\tborder: 1px dashed black;\r\n}"
    }
  },
  {
    "id": "Kwalifikacja_E14_2019_php",
    "category": "Kwalifikacja_E14",
    "name": "2019 php",
    "title": "2019 php",
    "description": "Zadanie praktyczne z przygotowania do egzaminu zawodowego obejmujące tworzenie aplikacji internetowej, arkusza stylów CSS oraz relacyjnej bazy danych.",
    "technologies": [
      "HTML5",
      "CSS3",
      "PHP (mysqli)"
    ],
    "folder": "Kwalifikacja_E14/2019_php",
    "mainPdf": null,
    "mainHtml": "index.html",
    "mainPhp": "skrypt.php",
    "mainSql": null,
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# 📌 2019_php (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** 2019 php  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** HTML5, CSS3, PHP (mysqli)\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nZadanie praktyczne z przygotowania do egzaminu zawodowego obejmujące tworzenie aplikacji internetowej, arkusza stylów CSS oraz relacyjnej bazy danych.\n\n### Główne elementy rozwiązania:\n- Opracowanie semantycznej struktury strony w standardzie HTML5.\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Oprogramowanie skryptu backendowego w PHP (mysqli) do komunikacji z bazą danych MySQL.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 🌐 **Pliki HTML:** `index.html`\n- 🐘 **Skrypty PHP:** `skrypt.php`\n- 🎨 **Style CSS:** `style2.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n3. **Uruchomienie PHP:**\n   - Skopiuj ten rozpakowany folder do katalogu `C:\\xampp\\htdocs\\2019_php`.\n   - Uruchom moduł **Apache** w XAMPP.\n   - Otwórz w przeglądarce adres: `http://localhost/2019_php/skrypt.php`.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
    "pdfs": [],
    "htmls": [
      "index.html"
    ],
    "phps": [
      "skrypt.php"
    ],
    "sqls": [],
    "zips": [
      "paczka_zadania.zip"
    ],
    "txts": [],
    "scripts": [
      "style2.css"
    ],
    "allFiles": [
      "index.html",
      "kadr.jpg",
      "paczka_zadania.zip",
      "README.md",
      "skrypt.php",
      "style2.css"
    ],
    "fileContents": {
      "index.html": "<!DOCTYPE html>\r\n<html lang=\"pl\">\r\n    <head>\r\n        <meta charset=\"utf-8\">\r\n        <title>Filmoteka</title>\r\n        <link rel=\"stylesheet\" href=\"style2.css\">\r\n    </head>\r\n    <body>\r\n        <div id=\"lewa\">\r\n        <h3>Dostępne gatunki filmowe</h3>\r\n            <ol>\r\n            <li>Sci-Fi</li>\r\n                <li>animacja</li>\r\n                <li>dramat</li>\r\n                <li>horror</li>\r\n                <li>komedia</li>\r\n            </ol>\r\n            <p><a href=\"kadr.jpg\">Pobierz obraz</a></p>\r\n             <p><a href=\"http://repertuar-kin.pl\" target=\"_blank\">Sprawdź repertuar kin</a></p>\r\n        </div>\r\n        <div id=\"prawa1\">\r\n        <h1>Filmoteka</h1>\r\n        </div>\r\n        <div id=\"prawa2\">\r\n        <form method=\"post\" action=\"skrypt.php\">\r\n           Tytuł filmu <input type=\"text\" name=\"tytul\"><br>\r\n             Gatunek<input type=\"number\" name=\"gatunek\"><br>\r\n             Rok produkcji<input type=\"number\" name=\"rok\"><br>\r\n            Ocena <input type=\"number\" name=\"ocena\"><br>\r\n            <input type=\"reset\" name=\"czysc\" value=\"czyść\">\r\n            <input type=\"submit\" name=\"wyslij\" value=\"wyślij\">\r\n            </form>\r\n        </div>\r\n        <div id=\"prawa3\"><center><img src=\"kadr.jpg\" alt=\"zdjecia filmowe\"></center></div>\r\n        <div id=\"stopka\">Autor strony:</div>\r\n    \r\n    </body>\r\n</html>\r\n    \r\n        ",
      "README.md": "# 📌 2019_php (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** 2019 php  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** HTML5, CSS3, PHP (mysqli)\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nZadanie praktyczne z przygotowania do egzaminu zawodowego obejmujące tworzenie aplikacji internetowej, arkusza stylów CSS oraz relacyjnej bazy danych.\n\n### Główne elementy rozwiązania:\n- Opracowanie semantycznej struktury strony w standardzie HTML5.\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Oprogramowanie skryptu backendowego w PHP (mysqli) do komunikacji z bazą danych MySQL.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 🌐 **Pliki HTML:** `index.html`\n- 🐘 **Skrypty PHP:** `skrypt.php`\n- 🎨 **Style CSS:** `style2.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n3. **Uruchomienie PHP:**\n   - Skopiuj ten rozpakowany folder do katalogu `C:\\xampp\\htdocs\\2019_php`.\n   - Uruchom moduł **Apache** w XAMPP.\n   - Otwórz w przeglądarce adres: `http://localhost/2019_php/skrypt.php`.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
      "skrypt.php": "<?php\r\n    error_reporting(E_ALL & ~E_NOTICE & ~E_WARNING);\r\n \r\n\t\t$tytul = $_POST['tytul'];\r\n\t\t$gatunek = $_POST['gatunek'];\r\n\t\t$rok = $_POST['rok'];\r\n\t\t$ocena = $_POST['ocena'];\r\n\r\n\t\t$connect = mysqli_connect('localhost','root','','dane') or die('błąd w połączeniu z bazą danych: dane');\r\n\t\t\r\n\t\t\t$sql = \"INSERT INTO filmy (id, gatunki_id,tytul,rok,ocena ) VALUES (NULL, '$gatunek', '$tytul', '$rok', '$ocena')\";\r\n\r\n\t\t\tmysqli_query($connect, $sql);\r\n\t\t\techo 'Film '.$tytul.' został dodany do bazy';\t\r\n\t\t\r\nmysqli_close($connect);\r\n\t?>",
      "style2.css": "body{\r\n    font-family: Helvetica;\r\n    margin:0px;\r\n}\r\n\r\n#lewa{\r\n    background-color: Navy;\r\n    color:white;\r\n    width:25%;\r\n    height: 700px;\r\n    float:left;\r\n}\r\n#prawa1{\r\n    background-color: royalblue;\r\n    height: 100px;\r\n    width:75%;\r\n    float:right;\r\n    text-align: center;\r\n}\r\n#prawa2{\r\n    background-color: steelblue;\r\n    height: 300px;\r\n    width:75%;\r\n    float:right;\r\n}\r\n#prawa3{\r\n    background-color: royalblue;\r\n    height: 300px;\r\n    width:75%;\r\n    float:right;\r\n}\r\n#stopka{\r\n    background-color: steelblue;\r\n    text-align: center;\r\n    padding: 20px;\r\n    clear:both;\r\n}\r\nform{\r\n    margin:30px;\r\n    line-height: 3;\r\n}\r\nform:hover{\r\nbackground-color: deepskyblue;\r\n}"
    }
  },
  {
    "id": "Kwalifikacja_E14_2019_zima_e14-07-19_01",
    "category": "Kwalifikacja_E14",
    "name": "2019 zima — E.14-07-19.01",
    "title": "2019 zima — E.14 07 19.01",
    "description": "Zadanie praktyczne z przygotowania do egzaminu zawodowego obejmujące tworzenie aplikacji internetowej, arkusza stylów CSS oraz relacyjnej bazy danych.",
    "technologies": [
      "CSS3",
      "PHP (mysqli)",
      "MySQL"
    ],
    "folder": "Kwalifikacja_E14/2019_zima/e14-07-19_01",
    "mainPdf": "E.14-07-19.01.pdf",
    "mainHtml": null,
    "mainPhp": "sklep.php",
    "mainSql": "baza.sql",
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# 📌 2019_zima - e14-07-19_01 (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** 2019 zima   e14 07 19 01  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** CSS3, PHP (mysqli), MySQL\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nZadanie praktyczne z przygotowania do egzaminu zawodowego obejmujące tworzenie aplikacji internetowej, arkusza stylów CSS oraz relacyjnej bazy danych.\n\n### Główne elementy rozwiązania:\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Utworzenie tabel, relacji oraz przygotowanie poprawnych kwerend SQL (SELECT, INSERT, UPDATE).\n- Oprogramowanie skryptu backendowego w PHP (mysqli) do komunikacji z bazą danych MySQL.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 📄 **Arkusz PDF:** `E.14-07-19.01.pdf`\n- 🐘 **Skrypty PHP:** `sklep.php`\n- 💾 **Baza / Kwerendy SQL:** `baza.sql`\n- 📝 **Pliki tekstowe / Kwerendy:** `kwerendy.txt`\n- 🎨 **Style CSS:** `styl1.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Import bazy danych:**\n   - Uruchom lokalny serwer MySQL (np. w panelu XAMPP).\n   - Otwórz w przeglądarce `http://localhost/phpmyadmin`.\n   - Utwórz nową bazę danych i zaimportuj plik SQL (`baza.sql`).\n\n3. **Uruchomienie PHP:**\n   - Skopiuj ten rozpakowany folder do katalogu `C:\\xampp\\htdocs\\e14-07-19_01`.\n   - Uruchom moduł **Apache** w XAMPP.\n   - Otwórz w przeglądarce adres: `http://localhost/e14-07-19_01/sklep.php`.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
    "pdfs": [
      "E.14-07-19.01.pdf"
    ],
    "htmls": [],
    "phps": [
      "sklep.php"
    ],
    "sqls": [
      "baza.sql"
    ],
    "zips": [
      "paczka_zadania.zip"
    ],
    "txts": [
      "kwerendy.txt"
    ],
    "scripts": [
      "styl1.css"
    ],
    "allFiles": [
      "baza.sql",
      "E.14-07-19.01.pdf",
      "import.png",
      "komputer.png",
      "kw1.jpg",
      "kw2.jpg",
      "kw3.jpg",
      "kw4.jpg",
      "kwerendy.txt",
      "paczka_zadania.zip",
      "README.md",
      "sklep.php",
      "styl1.css",
      "zad1.png"
    ],
    "fileContents": {
      "baza.sql": "-- phpMyAdmin SQL Dump\n-- version 4.8.3\n-- https://www.phpmyadmin.net/\n--\n-- Host: 127.0.0.1\n-- Czas generowania: 14 Sty 2019, 18:00\n-- Wersja serwera: 10.1.36-MariaDB\n-- Wersja PHP: 7.2.10\n\nSET SQL_MODE = \"NO_AUTO_VALUE_ON_ZERO\";\nSET AUTOCOMMIT = 0;\nSTART TRANSACTION;\nSET time_zone = \"+00:00\";\n\n\n/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;\n/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;\n/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;\n/*!40101 SET NAMES utf8mb4 */;\n\n--\n-- Baza danych: `sklep`\n--\n\n-- --------------------------------------------------------\n\n--\n-- Struktura tabeli dla tabeli `podzespoly`\n--\n\nCREATE TABLE `podzespoly` (\n  `id` int(10) UNSIGNED NOT NULL,\n  `typy_id` int(10) UNSIGNED NOT NULL,\n  `producenci_id` int(10) UNSIGNED NOT NULL,\n  `nazwa` text,\n  `opis` text,\n  `dostepnosc` tinyint(1) DEFAULT NULL,\n  `cena` float NOT NULL\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\n\n--\n-- Zrzut danych tabeli `podzespoly`\n--\n\nINSERT INTO `podzespoly` (`id`, `typy_id`, `producenci_id`, `nazwa`, `opis`, `dostepnosc`, `cena`) VALUES\n(1, 1, 1, 'Core i5-7640X', 'Procesor Intel Core i5-7640X 4,2 GHz LGA 2066 Box', 1, 1000),\n(2, 1, 1, 'Core i3-6300', 'Procesor Intel Core i3-6300 3,8 GHz 4MB cache s. 1151 Box', 1, 575),\n(3, 1, 1, 'Core i7-6700K', 'Procesor Intel Core i7-6700K 4,0 GHz 8MB cache s. 1151 Box', 0, 1400),\n(4, 1, 2, 'X6 FX-6350', 'Procesor AMD X6 FX-6350 s.AM3+ BOX', 1, 380),\n(5, 2, 7, 'Savage', 'RAM HyperX 16GB (2x8GB) DDR3-1866 Dual Chanel Kit Non-ECC CL9 XMP Savage Series HX318C9SRK2/16', 1, 535),\n(6, 2, 7, 'Savage', 'HyperX 4GB DDR3-1600 Non-ECC CL9 XMP Savage Series HX316C9SR/4', 0, 150),\n(7, 2, 8, 'Signature', 'RAM Patriot Signature DDR3 8GB (2x4GB) 1600 CL9 PSD38G1600KH', 0, 250),\n(8, 5, 9, 'GTX 1060', 'Karta graficzna Asus DUAL NVIDIA GeForce GTX 1060 3072MB GDDR5 192b PCI-E x16 v. 3.0 (1594MHz/8008MHz) OC Edition', 1, 1189),\n(9, 5, 9, 'GeForce 210', 'Karta graficzna ASUS GeForce 210 1024MB 64bit PCI-E', 0, 145),\n(10, 6, 6, 'WD Black', 'Dysk WD Black WD1003FZEX 1TB sATA III 64MB', 0, 315),\n(11, 6, 6, 'WD Blue', 'Dysk WD Blue WD10EZEX 1TB sATA III 64MB', 1, 195),\n(12, 6, 5, 'AHD650-1TU3-CBK', 'Dysk USB ADATA AHD650-1TU3-CBK 1TB 2.5\\' HD650 USB 3.0 Czarny', 1, 210);\n\n-- --------------------------------------------------------\n\n--\n-- Struktura tabeli dla tabeli `producenci`\n--\n\nCREATE TABLE `producenci` (\n  `id` int(10) UNSIGNED NOT NULL,\n  `nazwa` text,\n  `opis` text\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\n\n--\n-- Zrzut danych tabeli `producenci`\n--\n\nINSERT INTO `producenci` (`id`, `nazwa`, `opis`) VALUES\n(1, 'Intel', NULL),\n(2, 'AMD', NULL),\n(5, 'ADATA', NULL),\n(6, 'WD', NULL),\n(7, 'Kingstone', NULL),\n(8, 'Patriot', NULL),\n(9, 'ASUS', NULL);\n\n-- --------------------------------------------------------\n\n--\n-- Struktura tabeli dla tabeli `typy`\n--\n\nCREATE TABLE `typy` (\n  `id` int(10) UNSIGNED NOT NULL,\n  `kategoria` text\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\n\n--\n-- Zrzut danych tabeli `typy`\n--\n\nINSERT INTO `typy` (`id`, `kategoria`) VALUES\n(1, 'Procesor'),\n(2, 'RAM'),\n(5, 'karta graficzna'),\n(6, 'HDD');\n\n--\n-- Indeksy dla zrzutów tabel\n--\n\n--\n-- Indeksy dla tabeli `podzespoly`\n--\nALTER TABLE `podzespoly`\n  ADD PRIMARY KEY (`id`);\n\n--\n-- Indeksy dla tabeli `producenci`\n--\nALTER TABLE `producenci`\n  ADD PRIMARY KEY (`id`);\n\n--\n-- Indeksy dla tabeli `typy`\n--\nALTER TABLE `typy`\n  ADD PRIMARY KEY (`id`);\n\n--\n-- AUTO_INCREMENT for dumped tables\n--\n\n--\n-- AUTO_INCREMENT dla tabeli `podzespoly`\n--\nALTER TABLE `podzespoly`\n  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;\n\n--\n-- AUTO_INCREMENT dla tabeli `producenci`\n--\nALTER TABLE `producenci`\n  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;\n\n--\n-- AUTO_INCREMENT dla tabeli `typy`\n--\nALTER TABLE `typy`\n  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;\nCOMMIT;\n\n/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;\n/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;\n/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;\n",
      "kwerendy.txt": "Zapytanie 1: SELECT nazwa, opis, cena FROM podzespoly WHERE typy_id = 1;\r\nZapytanie 2: SELECT id, nazwa FROM podzespoly WHERE dostepnosc = 1 AND cena < 400;\r\nZapytanie 3: SELECT podzespoly.nazwa, typy.kategoria FROM podzespoly JOIN typy ON podzespoly.typy_id = typy.id WHERE typy_id = 1;\r\nZapytanie 4: ALTER TABLE TYPY ADD opis TEXT;",
      "README.md": "# 📌 2019_zima - e14-07-19_01 (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** 2019 zima   e14 07 19 01  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** CSS3, PHP (mysqli), MySQL\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nZadanie praktyczne z przygotowania do egzaminu zawodowego obejmujące tworzenie aplikacji internetowej, arkusza stylów CSS oraz relacyjnej bazy danych.\n\n### Główne elementy rozwiązania:\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Utworzenie tabel, relacji oraz przygotowanie poprawnych kwerend SQL (SELECT, INSERT, UPDATE).\n- Oprogramowanie skryptu backendowego w PHP (mysqli) do komunikacji z bazą danych MySQL.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 📄 **Arkusz PDF:** `E.14-07-19.01.pdf`\n- 🐘 **Skrypty PHP:** `sklep.php`\n- 💾 **Baza / Kwerendy SQL:** `baza.sql`\n- 📝 **Pliki tekstowe / Kwerendy:** `kwerendy.txt`\n- 🎨 **Style CSS:** `styl1.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Import bazy danych:**\n   - Uruchom lokalny serwer MySQL (np. w panelu XAMPP).\n   - Otwórz w przeglądarce `http://localhost/phpmyadmin`.\n   - Utwórz nową bazę danych i zaimportuj plik SQL (`baza.sql`).\n\n3. **Uruchomienie PHP:**\n   - Skopiuj ten rozpakowany folder do katalogu `C:\\xampp\\htdocs\\e14-07-19_01`.\n   - Uruchom moduł **Apache** w XAMPP.\n   - Otwórz w przeglądarce adres: `http://localhost/e14-07-19_01/sklep.php`.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
      "sklep.php": "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n\t<title>Hurtownia</title>\r\n\t<meta charset=\"utf-8\">\r\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"styl1.css\">\r\n</head>\r\n<body>\r\n\t<div id=\"logo\"><img src=\"komputer.png\" alt=\"hurtownia komputerowa\"></div>\r\n\t<div id=\"lista\">\r\n\t\t<ul>\r\n\t\t\t<li>Sprzęt\r\n\t\t\t\t<ol>\r\n\t\t\t\t\t<li>Procesory</li>\r\n\t\t\t\t\t<li>Pamięci RAM</li>\r\n\t\t\t\t\t<li>Monitory</li>\r\n\t\t\t\t\t<li>Obudowy</li>\r\n\t\t\t\t\t<li>Karty graficzne</li>\r\n\t\t\t\t\t<li>Dyski twarde</li>\r\n\t\t\t\t</ol>\r\n\t\t\t</li>\r\n\t\t\t<li>Oprogramowanie</li>\r\n\t\t</ul>\r\n\t</div>\r\n\t<div id=\"form\">\r\n\t\t<h2>Hurtownia komputerowa</h2>\r\n\t\t<form action=\"sklep.php\" method=\"POST\">\r\n\t\t\tWybierz kategorię sprzętu<input type=\"number\" name=\"kat\"> \r\n\t\t\t\t\t\t\t\t\t <input type=\"submit\" value=\"SPRAWDŹ\">\r\n\t\t</form>\r\n\t</div>\r\n\t<div id=\"glowny\">\r\n\t\t<h1>Podzespoły we wskazanej kategorii</h1>\r\n\t\t<?php\r\n\t\t$connect = mysqli_connect('localhost', 'root', '','sklep');\r\n\t\tif (!isset($_POST[\"kat\"])) \r\n      echo \"Wybierz poprawną kategorię sprzętu\";\r\n     else\r\n     {\r\n     \t$kat=$_POST['kat'];\r\n     \t$sql=\"SELECT nazwa, opis, cena FROM podzespoly WHERE typy_id = $kat\";\r\n     \t$query=mysqli_query($connect,$sql);\r\n     \twhile ($linia=mysqli_fetch_assoc($query))\r\n     \t {\r\n     \t\techo \"<p>\".$linia[\"nazwa\"].\" \".$linia[\"opis\"].\" \".\"CENA:\".$linia[\"cena\"].\"</p>\";\r\n     \t}\r\n     \t\r\n     }\r\n\t\tmysqli_close($connect);\r\n\t\t ?>\r\n\t</div>\r\n\t<div id=\"stopka\">\r\n\t\t<h3>Hurtownia działa od poniedziałku do soboty w godzinach 7<sup>00</sup>-16<sup>00</sup></h3>\r\n\t\t<a href=\"mailto:bok@hurtownia.pl\">Napisz do nas</a>\r\n\t\tPartnerzy <a href=\"http://intel.pl\" target=\"_blank\">Intel</a><a href=\"http://amd.pl\" target=\"_blank\">AMD</a>\r\n\t\t<p>Stronę wykonał: 00000000000</p>\r\n\t</div>\r\n</body>\r\n</html>",
      "styl1.css": "body\r\n{\r\n\tfont-family: Verdana;\r\n}\r\n#logo\r\n{\r\n\tbackground-color: #FF9F79;\r\n\theight: 270px;\r\n\twidth: 30%;\r\n\tfloat: left;\r\n}\r\n#lista, #form\r\n{\r\n\tbackground-color: #FF9F79;\r\n\tcolor: green;\r\n\theight: 270px;\r\n\twidth: 35%;\r\n\tfloat: left;\r\n}\r\n#glowny\r\n{\r\n\tbackground-color: #80CDAC;\r\n\theight: 400px;\r\n\tpadding: 30px;\r\n\ttext-align: center;\r\n\tclear: both;\r\n}\r\n#stopka\r\n{\r\n\tbackground-color: #188256;\r\n\theight: 150px;\r\n\tpadding: 10px;\r\n}\r\na\r\n{\r\n\tbackground-color: green;\r\n\tmargin: 10px;\r\n\tpadding: 10px;\r\n\tborder: 2px solid orange;\r\n}\r\na:visited\r\n{\r\n\tbackground-color: violet;\r\n}"
    }
  },
  {
    "id": "Kwalifikacja_E14_2019_zima_e14-08-19_01",
    "category": "Kwalifikacja_E14",
    "name": "2019 zima — E.14-08-19.01",
    "title": "System Magazynowy Hurtowni",
    "description": "Aplikacja hurtowni z bazą produktów, stanów magazynowych, producentów i skryptem PHP generującym podsumowania.",
    "technologies": [
      "HTML5",
      "CSS3",
      "PHP",
      "MySQL"
    ],
    "folder": "Kwalifikacja_E14/2019_zima/e14-08-19_01",
    "mainPdf": "E.14-08-19.01.pdf",
    "mainHtml": null,
    "mainPhp": "hurtownia.php",
    "mainSql": "baza.sql",
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# 📌 2019_zima - e14-08-19_01 (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** System Magazynowy Hurtowni  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** HTML5, CSS3, PHP, MySQL\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nAplikacja hurtowni z bazą produktów, stanów magazynowych, producentów i skryptem PHP generującym podsumowania.\n\n### Główne elementy rozwiązania:\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Utworzenie tabel, relacji oraz przygotowanie poprawnych kwerend SQL (SELECT, INSERT, UPDATE).\n- Oprogramowanie skryptu backendowego w PHP (mysqli) do komunikacji z bazą danych MySQL.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 📄 **Arkusz PDF:** `E.14-08-19.01.pdf`\n- 🐘 **Skrypty PHP:** `hurtownia.php`\n- 💾 **Baza / Kwerendy SQL:** `baza.sql`\n- 📝 **Pliki tekstowe / Kwerendy:** `kwerendy.txt`\n- 🎨 **Style CSS:** `styl2.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Import bazy danych:**\n   - Uruchom lokalny serwer MySQL (np. w panelu XAMPP).\n   - Otwórz w przeglądarce `http://localhost/phpmyadmin`.\n   - Utwórz nową bazę danych i zaimportuj plik SQL (`baza.sql`).\n\n3. **Uruchomienie PHP:**\n   - Skopiuj ten rozpakowany folder do katalogu `C:\\xampp\\htdocs\\e14-08-19_01`.\n   - Uruchom moduł **Apache** w XAMPP.\n   - Otwórz w przeglądarce adres: `http://localhost/e14-08-19_01/hurtownia.php`.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
    "pdfs": [
      "E.14-08-19.01.pdf"
    ],
    "htmls": [],
    "phps": [
      "hurtownia.php"
    ],
    "sqls": [
      "baza.sql"
    ],
    "zips": [
      "paczka_zadania.zip"
    ],
    "txts": [
      "kwerendy.txt"
    ],
    "scripts": [
      "styl2.css"
    ],
    "allFiles": [
      "baza.sql",
      "E.14-08-19.01.pdf",
      "hurtownia.php",
      "import.png",
      "kw1.jpg",
      "kw2.jpg",
      "kw3.jpg",
      "kw4.jpg",
      "kwerendy.txt",
      "paczka_zadania.zip",
      "README.md",
      "sprzet.png",
      "styl2.css",
      "zad2.png"
    ],
    "fileContents": {
      "baza.sql": "-- phpMyAdmin SQL Dump\n-- version 4.8.3\n-- https://www.phpmyadmin.net/\n--\n-- Host: 127.0.0.1\n-- Czas generowania: 14 Sty 2019, 18:00\n-- Wersja serwera: 10.1.36-MariaDB\n-- Wersja PHP: 7.2.10\n\nSET SQL_MODE = \"NO_AUTO_VALUE_ON_ZERO\";\nSET AUTOCOMMIT = 0;\nSTART TRANSACTION;\nSET time_zone = \"+00:00\";\n\n\n/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;\n/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;\n/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;\n/*!40101 SET NAMES utf8mb4 */;\n\n--\n-- Baza danych: `sklep`\n--\n\n-- --------------------------------------------------------\n\n--\n-- Struktura tabeli dla tabeli `podzespoly`\n--\n\nCREATE TABLE `podzespoly` (\n  `id` int(10) UNSIGNED NOT NULL,\n  `typy_id` int(10) UNSIGNED NOT NULL,\n  `producenci_id` int(10) UNSIGNED NOT NULL,\n  `nazwa` text,\n  `opis` text,\n  `dostepnosc` tinyint(1) DEFAULT NULL,\n  `cena` float NOT NULL\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\n\n--\n-- Zrzut danych tabeli `podzespoly`\n--\n\nINSERT INTO `podzespoly` (`id`, `typy_id`, `producenci_id`, `nazwa`, `opis`, `dostepnosc`, `cena`) VALUES\n(1, 1, 1, 'Core i5-7640X', 'Procesor Intel Core i5-7640X 4,2 GHz LGA 2066 Box', 1, 1000),\n(2, 1, 1, 'Core i3-6300', 'Procesor Intel Core i3-6300 3,8 GHz 4MB cache s. 1151 Box', 1, 575),\n(3, 1, 1, 'Core i7-6700K', 'Procesor Intel Core i7-6700K 4,0 GHz 8MB cache s. 1151 Box', 0, 1400),\n(4, 1, 2, 'X6 FX-6350', 'Procesor AMD X6 FX-6350 s.AM3+ BOX', 1, 380),\n(5, 2, 7, 'Savage', 'RAM HyperX 16GB (2x8GB) DDR3-1866 Dual Chanel Kit Non-ECC CL9 XMP Savage Series HX318C9SRK2/16', 1, 535),\n(6, 2, 7, 'Savage', 'HyperX 4GB DDR3-1600 Non-ECC CL9 XMP Savage Series HX316C9SR/4', 0, 150),\n(7, 2, 8, 'Signature', 'RAM Patriot Signature DDR3 8GB (2x4GB) 1600 CL9 PSD38G1600KH', 0, 250),\n(8, 5, 9, 'GTX 1060', 'Karta graficzna Asus DUAL NVIDIA GeForce GTX 1060 3072MB GDDR5 192b PCI-E x16 v. 3.0 (1594MHz/8008MHz) OC Edition', 1, 1189),\n(9, 5, 9, 'GeForce 210', 'Karta graficzna ASUS GeForce 210 1024MB 64bit PCI-E', 0, 145),\n(10, 6, 6, 'WD Black', 'Dysk WD Black WD1003FZEX 1TB sATA III 64MB', 0, 315),\n(11, 6, 6, 'WD Blue', 'Dysk WD Blue WD10EZEX 1TB sATA III 64MB', 1, 195),\n(12, 6, 5, 'AHD650-1TU3-CBK', 'Dysk USB ADATA AHD650-1TU3-CBK 1TB 2.5\\' HD650 USB 3.0 Czarny', 1, 210);\n\n-- --------------------------------------------------------\n\n--\n-- Struktura tabeli dla tabeli `producenci`\n--\n\nCREATE TABLE `producenci` (\n  `id` int(10) UNSIGNED NOT NULL,\n  `nazwa` text,\n  `opis` text\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\n\n--\n-- Zrzut danych tabeli `producenci`\n--\n\nINSERT INTO `producenci` (`id`, `nazwa`, `opis`) VALUES\n(1, 'Intel', NULL),\n(2, 'AMD', NULL),\n(5, 'ADATA', NULL),\n(6, 'WD', NULL),\n(7, 'Kingstone', NULL),\n(8, 'Patriot', NULL),\n(9, 'ASUS', NULL);\n\n-- --------------------------------------------------------\n\n--\n-- Struktura tabeli dla tabeli `typy`\n--\n\nCREATE TABLE `typy` (\n  `id` int(10) UNSIGNED NOT NULL,\n  `kategoria` text\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\n\n--\n-- Zrzut danych tabeli `typy`\n--\n\nINSERT INTO `typy` (`id`, `kategoria`) VALUES\n(1, 'Procesor'),\n(2, 'RAM'),\n(5, 'karta graficzna'),\n(6, 'HDD');\n\n--\n-- Indeksy dla zrzutów tabel\n--\n\n--\n-- Indeksy dla tabeli `podzespoly`\n--\nALTER TABLE `podzespoly`\n  ADD PRIMARY KEY (`id`);\n\n--\n-- Indeksy dla tabeli `producenci`\n--\nALTER TABLE `producenci`\n  ADD PRIMARY KEY (`id`);\n\n--\n-- Indeksy dla tabeli `typy`\n--\nALTER TABLE `typy`\n  ADD PRIMARY KEY (`id`);\n\n--\n-- AUTO_INCREMENT for dumped tables\n--\n\n--\n-- AUTO_INCREMENT dla tabeli `podzespoly`\n--\nALTER TABLE `podzespoly`\n  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;\n\n--\n-- AUTO_INCREMENT dla tabeli `producenci`\n--\nALTER TABLE `producenci`\n  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;\n\n--\n-- AUTO_INCREMENT dla tabeli `typy`\n--\nALTER TABLE `typy`\n  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;\nCOMMIT;\n\n/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;\n/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;\n/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;\n",
      "hurtownia.php": "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n\t<title>Hurtownia komputerowa</title>\r\n\t<meta charset=\"utf-8\">\r\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"styl2.css\">\r\n</head>\r\n<body>\r\n\t<div id=\"lista\">\r\n\t\t<ul>\r\n\t\t\t<li>Producenci\r\n\t\t\t\t<ol>\r\n\t\t\t\t\t<li>Intel</li>\r\n\t\t\t\t\t<li>AMD</li>\r\n\t\t\t\t\t<li>Motorola</li>\r\n\t\t\t\t\t<li>Corsair</li>\r\n\t\t\t\t\t<li>ADATA</li>\r\n\t\t\t\t\t<li>WD</li>\r\n\t\t\t\t\t<li>Kingstone</li>\r\n\t\t\t\t\t<li>Patriot</li>\r\n\t\t\t\t\t<li>Asus</li>\r\n\t\t\t\t</ol>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\t</div>\r\n\t<div id=\"form\">\r\n\t\t<h1>Dystrybucja sprzętu komputerowego</h1>\r\n\t\t<form action=\"hurtownia.php\" method=\"post\">\r\n\t\t\t<input type=\"number\" name=\"prod\">\r\n\t\t\t<input type=\"submit\" value=\"WYŚWIETL\">\r\n\t\t</form>\r\n\t</div>\r\n\t<div id=\"logo\">\r\n\t\t<img src=\"sprzet.png\" alt=\"Sprzedajemy komputery\">\r\n\t</div>\r\n\t<div id=\"glowny\">\r\n\t\t<h1>Podzespoły wybranego producenta</h1>\r\n\t\t<?php \r\n\t\t\t$connect= mysqli_connect('localhost', 'root', '','sklep');\r\n\t\t\tif (!isset($_POST[\"prod\"])) \r\n      echo \"Wybierz producenta\";\r\n \t\t\telse\r\n \t\t\t{\r\n \t\t\t\t$prod=$_POST['prod'];\r\n\r\n \t\t\t\t$sql=\"SELECT nazwa, dostepnosc, cena FROM podzespoly WHERE producenci_id = $prod\";\r\n \t\t\t\t$query= mysqli_query($connect,$sql);\r\n \t\t\t\twhile ($linia= mysqli_fetch_assoc($query))\r\n \t\t\t\t{\r\n \t\t\t\t\tif ($linia['dostepnosc']==1)\r\n \t\t\t\t\t{\r\n \t\t\t\t\techo \"<p>\".$linia['nazwa'].\" \".\"CENA:\".$linia['cena'].\" DOSTĘPNY\".\"</p>\";\r\n \t\t\t\t\t}\r\n \t\t\t\t\telse\r\n \t\t\t\t\t{\r\n \t\t\t\t\t\techo \"<p>\".$linia['nazwa'].\" \".\"CENA:\".$linia['cena'].\" NIEDOSTĘPNY\".\"</p>\";\r\n \t\t\t\t\t}\r\n \t\t\t\t\t\r\n \t\t\t\t}\r\n \t\t\t}\r\n\t\t?>\r\n\t</div>\r\n\t<div id=\"stopka\">\r\n\t\t<h3>Zapraszamy od poniedziałku do soboty w godzinach 7<sup>00</sup>-16<sup>30</sup></h3>\r\n\t\tStrony partnerow: <a href=\"http://adata.pl/\" target=\"_blank\">ADATA</a> <a href=\"http://patriot.pl/\" target=\"_blank\">Patriot</a>\r\n\t\t<a href=\"mailto:biuro@hurt.pl\">Napisz</a>\r\n\t\t<p>Stronę wykonał: 00000000000</p>\r\n\t</div>\r\n</body>\r\n</html>",
      "kwerendy.txt": "Zapytanie 1: SELECT nazwa, dostepnosc, cena FROM podzespoly WHERE producenci_id = 5;\r\nZapytanie 2: SELECT id, opis FROM podzespoly WHERE dostepnosc = 0 AND producenci_id = 1 OR producenci_id = 2;\r\nZapytanie 3: SELECT podzespoly.opis, podzespoly.cena, producenci.nazwa FROM podzespoly, producenci WHERE podzespoly.producenci_id = producenci.id;\r\nZapytanie 4: ALTER TABLE producenci ADD priorytet INT;\r\n\r\n",
      "README.md": "# 📌 2019_zima - e14-08-19_01 (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** System Magazynowy Hurtowni  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** HTML5, CSS3, PHP, MySQL\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nAplikacja hurtowni z bazą produktów, stanów magazynowych, producentów i skryptem PHP generującym podsumowania.\n\n### Główne elementy rozwiązania:\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Utworzenie tabel, relacji oraz przygotowanie poprawnych kwerend SQL (SELECT, INSERT, UPDATE).\n- Oprogramowanie skryptu backendowego w PHP (mysqli) do komunikacji z bazą danych MySQL.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 📄 **Arkusz PDF:** `E.14-08-19.01.pdf`\n- 🐘 **Skrypty PHP:** `hurtownia.php`\n- 💾 **Baza / Kwerendy SQL:** `baza.sql`\n- 📝 **Pliki tekstowe / Kwerendy:** `kwerendy.txt`\n- 🎨 **Style CSS:** `styl2.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Import bazy danych:**\n   - Uruchom lokalny serwer MySQL (np. w panelu XAMPP).\n   - Otwórz w przeglądarce `http://localhost/phpmyadmin`.\n   - Utwórz nową bazę danych i zaimportuj plik SQL (`baza.sql`).\n\n3. **Uruchomienie PHP:**\n   - Skopiuj ten rozpakowany folder do katalogu `C:\\xampp\\htdocs\\e14-08-19_01`.\n   - Uruchom moduł **Apache** w XAMPP.\n   - Otwórz w przeglądarce adres: `http://localhost/e14-08-19_01/hurtownia.php`.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
      "styl2.css": "body\r\n{\r\n\tfont-family: Helvetica;\r\n}\r\n#lista, #logo\r\n{\r\n\tbackground-color: #6FACE3;\r\n\tcolor: blue;\r\n\theight: 300px;\r\n\twidth: 30%;\r\n\tfloat: left;\r\n}\r\n#form\r\n{\r\n\tbackground-color: #6FACE3;\r\n\theight: 300px;\r\n\twidth: 40%;\r\n\tfloat: left;\r\n}\r\n#glowny\r\n{\r\n\tbackground-color: #4C93D2;\r\n\theight: 350px;\r\n\tpadding: 20px;\r\n\ttext-align: center;\r\n\tclear: both;\r\n}\r\n#stopka\r\n{\r\n\tbackground-color: #2D77BA;\r\n\theight: 170px;\r\n\tpadding: 15px;\r\n\tcolor: white;\r\n}\r\na\r\n{\r\n\tbackground-color: LightSkyBlue;\r\n\tmargin: 5px;\r\n\tpadding: 10px;\r\n}\r\na:visited\r\n{\r\n\tbackground-color: LightSteelBlue;\r\n}"
    }
  },
  {
    "id": "Kwalifikacja_E14_2019_zima_e14-09-19_01",
    "category": "Kwalifikacja_E14",
    "name": "2019 zima — E.14-09-19.01",
    "title": "Baza Danych Schroniska i Lecznicy Zwierząt",
    "description": "Baza danych zwierząt, szczepień i właścicieli z kwerendami filtrującymi stan zdrowia i terminy wizyt.",
    "technologies": [
      "SQL (MySQL)",
      "HTML5",
      "CSS3"
    ],
    "folder": "Kwalifikacja_E14/2019_zima/e14-09-19_01",
    "mainPdf": "E.14-09-19.01.pdf",
    "mainHtml": null,
    "mainPhp": "index.php",
    "mainSql": "baza2.sql",
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# 📌 2019_zima - e14-09-19_01 (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** Baza Danych Schroniska i Lecznicy Zwierząt  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** SQL (MySQL), HTML5, CSS3\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nBaza danych zwierząt, szczepień i właścicieli z kwerendami filtrującymi stan zdrowia i terminy wizyt.\n\n### Główne elementy rozwiązania:\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Utworzenie tabel, relacji oraz przygotowanie poprawnych kwerend SQL (SELECT, INSERT, UPDATE).\n- Oprogramowanie skryptu backendowego w PHP (mysqli) do komunikacji z bazą danych MySQL.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 📄 **Arkusz PDF:** `E.14-09-19.01.pdf`\n- 🐘 **Skrypty PHP:** `index.php`\n- 💾 **Baza / Kwerendy SQL:** `baza2.sql`\n- 📝 **Pliki tekstowe / Kwerendy:** `kwerendy.txt`\n- 🎨 **Style CSS:** `styl3.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Import bazy danych:**\n   - Uruchom lokalny serwer MySQL (np. w panelu XAMPP).\n   - Otwórz w przeglądarce `http://localhost/phpmyadmin`.\n   - Utwórz nową bazę danych i zaimportuj plik SQL (`baza2.sql`).\n\n3. **Uruchomienie PHP:**\n   - Skopiuj ten rozpakowany folder do katalogu `C:\\xampp\\htdocs\\e14-09-19_01`.\n   - Uruchom moduł **Apache** w XAMPP.\n   - Otwórz w przeglądarce adres: `http://localhost/e14-09-19_01/index.php`.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
    "pdfs": [
      "E.14-09-19.01.pdf"
    ],
    "htmls": [],
    "phps": [
      "index.php"
    ],
    "sqls": [
      "baza2.sql"
    ],
    "zips": [
      "paczka_zadania.zip"
    ],
    "txts": [
      "kwerendy.txt"
    ],
    "scripts": [
      "styl3.css"
    ],
    "allFiles": [
      "baza2.sql",
      "E.14-09-19.01.pdf",
      "import.png",
      "index.php",
      "kw1.jpg",
      "kw2.jpg",
      "kw3.jpg",
      "kw4.jpg",
      "kwerendy.txt",
      "paczka_zadania.zip",
      "README.md",
      "styl3.css",
      "zwierzeta.jpg"
    ],
    "fileContents": {
      "baza2.sql": "-- phpMyAdmin SQL Dump\n-- version 4.8.3\n-- https://www.phpmyadmin.net/\n--\n-- Host: 127.0.0.1\n-- Czas generowania: 15 Sty 2019, 14:42\n-- Wersja serwera: 10.1.36-MariaDB\n-- Wersja PHP: 7.2.10\n\nSET SQL_MODE = \"NO_AUTO_VALUE_ON_ZERO\";\nSET AUTOCOMMIT = 0;\nSTART TRANSACTION;\nSET time_zone = \"+00:00\";\n\n\n/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;\n/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;\n/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;\n/*!40101 SET NAMES utf8mb4 */;\n\n--\n-- Baza danych: `baza`\n--\n\n-- --------------------------------------------------------\n\n--\n-- Struktura tabeli dla tabeli `gromady`\n--\n\nCREATE TABLE `gromady` (\n  `id` int(10) UNSIGNED NOT NULL,\n  `nazwa` text,\n  `opis` text NOT NULL\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\n\n--\n-- Zrzut danych tabeli `gromady`\n--\n\nINSERT INTO `gromady` (`id`, `nazwa`, `opis`) VALUES\n(1, 'ryby', ''),\n(2, 'plazy', ''),\n(3, 'gady', ''),\n(4, 'ptaki', ''),\n(5, 'ssaki', '');\n\n-- --------------------------------------------------------\n\n--\n-- Struktura tabeli dla tabeli `odzywianie`\n--\n\nCREATE TABLE `odzywianie` (\n  `id` int(10) UNSIGNED NOT NULL,\n  `rodzaj` text,\n  `informacja` text NOT NULL\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\n\n--\n-- Zrzut danych tabeli `odzywianie`\n--\n\nINSERT INTO `odzywianie` (`id`, `rodzaj`, `informacja`) VALUES\n(1, 'drapieznik', ''),\n(2, 'roslinozerny', ''),\n(3, 'padlinozerny', ''),\n(4, 'wszystkozerny', '');\n\n-- --------------------------------------------------------\n\n--\n-- Struktura tabeli dla tabeli `zwierzeta`\n--\n\nCREATE TABLE `zwierzeta` (\n  `id` int(10) UNSIGNED NOT NULL,\n  `Gromady_id` int(10) UNSIGNED NOT NULL,\n  `Odzywianie_id` int(10) UNSIGNED NOT NULL,\n  `gatunek` text,\n  `wystepowanie` text,\n  `czy_zagrozony` tinyint(1) DEFAULT NULL,\n  `obraz` text NOT NULL\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\n\n--\n-- Zrzut danych tabeli `zwierzeta`\n--\n\nINSERT INTO `zwierzeta` (`id`, `Gromady_id`, `Odzywianie_id`, `gatunek`, `wystepowanie`, `czy_zagrozony`, `obraz`) VALUES\n(1, 1, 1, 'Sum pospolity', 'Eurazja', 0, 'sum.jpg'),\n(2, 1, 1, 'Jesiotr zachodni', 'Europa', 1, 'jesiotr.jpg'),\n(3, 4, 4, 'Wrona siwa', 'Europa', 0, 'wrona.jpg'),\n(4, 4, 1, 'Puszczyk zwyczajny', 'Eurazja', 0, 'puszczyk.jpg'),\n(5, 4, 4, 'Sroka zwyczajna', 'Eurazja', 0, 'sroka.jpg'),\n(6, 5, 1, 'Wilk szary', 'Europa, Ameryka', 0, 'wilk.jpg'),\n(7, 5, 3, 'Hiena brunatna', 'Afryka', 0, 'hiena.jpg'),\n(8, 5, 2, 'Sarna europejska', 'Europa', 0, 'sarna.jpg'),\n(9, 5, 1, 'Dingo australijski', 'Australia', 1, 'dingo.jpg');\n\n--\n-- Indeksy dla zrzutów tabel\n--\n\n--\n-- Indeksy dla tabeli `gromady`\n--\nALTER TABLE `gromady`\n  ADD PRIMARY KEY (`id`);\n\n--\n-- Indeksy dla tabeli `odzywianie`\n--\nALTER TABLE `odzywianie`\n  ADD PRIMARY KEY (`id`);\n\n--\n-- Indeksy dla tabeli `zwierzeta`\n--\nALTER TABLE `zwierzeta`\n  ADD PRIMARY KEY (`id`);\n\n--\n-- AUTO_INCREMENT for dumped tables\n--\n\n--\n-- AUTO_INCREMENT dla tabeli `gromady`\n--\nALTER TABLE `gromady`\n  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;\n\n--\n-- AUTO_INCREMENT dla tabeli `odzywianie`\n--\nALTER TABLE `odzywianie`\n  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;\n\n--\n-- AUTO_INCREMENT dla tabeli `zwierzeta`\n--\nALTER TABLE `zwierzeta`\n  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;\nCOMMIT;\n\n/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;\n/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;\n/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;\n",
      "index.php": "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n\t<title>Dane o zwierzętach</title>\r\n\t<meta charset=\"utf-8\">\r\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"styl3.css\">\r\n</head>\r\n<body>\r\n\t<div id=\"baner\">\r\n\t\t<h1>ATLAS ZWIERZĄT</h1>\r\n\t</div>\r\n\t<div id=\"form\">\r\n\t\t<h2>Gromady</h2>\r\n\t\t<ol>\r\n\t\t\t<li>Ryby</li>\r\n\t\t\t<li>Płazy</li>\r\n\t\t\t<li>Gady</li>\r\n\t\t\t<li>Ptaki</li>\r\n\t\t\t<li>Ssaki</li>\r\n\t\t</ol>\r\n\t\t<form action=\"index.php\" method=\"POST\">\r\n\t\t\tWybierz gromadę<input type=\"number\" name=\"num\"> <input type=\"submit\" value=\"WYŚWIETL\">\r\n\t\t</form>\r\n\t</div>\r\n\t<div id=\"pl\"><img src=\"zwierzeta.jpg\" alt=\"dzikie zwierzęta\"></div>\r\n\t<div id=\"ps\">\r\n\t\t<?php \r\n\t\t$connect =mysqli_connect('localhost','root','','baza');\r\n\t\t \r\n\t\tif (isset($_POST['num']))\r\n\t\t{\r\n\t\t\t$num = $_POST['num'];\r\n\t\t\r\n\t\t   if ($num == 1)\r\n\t{\r\n      echo \"<h2>\".\"RYBY\".\"</h2>\";\r\n    }\r\n    else if ($num == 2)\r\n    {\r\n      echo \"<h2>\".\"PLAZY\".\"</h2>\";\r\n    }\r\n    else if ($num == 3)\r\n    {\r\n      echo \"<h2>\".\"GADY\".\"</h2>\";\r\n    }\r\n    else if ($num == 4)\r\n    {\r\n      echo \"<h2>\".\"PTAKI\".\"</h2>\";\r\n    }\r\n    else if ($num == 5)\r\n    {\r\n      echo \"<h2>\".\"SSAKI\".\"</h2>\";\r\n    }\r\n    $sql=\"SELECT gatunek, wystepowanie FROM zwierzeta WHERE Gromady_id = $num\";\r\n    $query= mysqli_query($connect,$sql);\r\n    while ($linia=mysqli_fetch_assoc($query))\r\n    {\r\n    \techo \"<p>\".$linia['gatunek'].\" \".$linia['wystepowanie'].\"</p>\";\r\n    }\r\n}\r\n\t\t mysqli_close($connect);\r\n\t\t?>\r\n\t</div>\r\n\t<div id=\"pp\">\r\n\t\t<h2>Wszystkie zwierzęta w bazie</h2>\r\n\t\t<?php\r\n\t\t $connect =mysqli_connect('localhost','root','','baza');\r\n\t\t $sql=\"SELECT zwierzeta.id, zwierzeta.gatunek, gromady.nazwa FROM zwierzeta INNER JOIN gromady WHERE zwierzeta.Gromady_id = gromady.id\";\r\n\t\t $query= mysqli_query($connect,$sql);\r\n\t\t while ($linia=mysqli_fetch_assoc($query))\r\n\t\t {\r\n\t\t \techo $linia['id'].\" \".$linia['gatunek'].\",\".\" \".$linia['nazwa'].\"<br>\";\r\n\t\t }\r\n\t\t mysqli_close($connect);\r\n\t\t?>\r\n\t</div>\r\n\t<div id=\"stopka\">\r\n\t\t<a href=\"http://atlas-zwierzat.pl\" target=\"_blank\">Poznaj inne  strony o zwierzętach</a>\r\n\t\tautor Atlasu zwierząt: 00000000000\r\n\t</div>\r\n\r\n</body>\r\n</html>",
      "kwerendy.txt": "Zapytanie 1: SELECT gatunek, wystepowanie FROM zwierzeta WHERE Gromady_id = 1;\r\nZapytanie 2: SELECT zwierzeta.id, zwierzeta.gatunek, gromady.nazwa FROM zwierzeta INNER JOIN gromady WHERE zwierzeta.Gromady_id = gromady.id;\r\nZapytanie 3: SELECT COUNT(*) FROM  zwierzeta WHERE Gromady_id = 1;\r\nZapytanie 4: CREATE USER KatarzynaNowak IDENTIFIED BY \"K4tNow\";",
      "README.md": "# 📌 2019_zima - e14-09-19_01 (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** Baza Danych Schroniska i Lecznicy Zwierząt  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** SQL (MySQL), HTML5, CSS3\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nBaza danych zwierząt, szczepień i właścicieli z kwerendami filtrującymi stan zdrowia i terminy wizyt.\n\n### Główne elementy rozwiązania:\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Utworzenie tabel, relacji oraz przygotowanie poprawnych kwerend SQL (SELECT, INSERT, UPDATE).\n- Oprogramowanie skryptu backendowego w PHP (mysqli) do komunikacji z bazą danych MySQL.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 📄 **Arkusz PDF:** `E.14-09-19.01.pdf`\n- 🐘 **Skrypty PHP:** `index.php`\n- 💾 **Baza / Kwerendy SQL:** `baza2.sql`\n- 📝 **Pliki tekstowe / Kwerendy:** `kwerendy.txt`\n- 🎨 **Style CSS:** `styl3.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Import bazy danych:**\n   - Uruchom lokalny serwer MySQL (np. w panelu XAMPP).\n   - Otwórz w przeglądarce `http://localhost/phpmyadmin`.\n   - Utwórz nową bazę danych i zaimportuj plik SQL (`baza2.sql`).\n\n3. **Uruchomienie PHP:**\n   - Skopiuj ten rozpakowany folder do katalogu `C:\\xampp\\htdocs\\e14-09-19_01`.\n   - Uruchom moduł **Apache** w XAMPP.\n   - Otwórz w przeglądarce adres: `http://localhost/e14-09-19_01/index.php`.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
      "styl3.css": "body\r\n{\r\n\tfont-family: Garamond;\r\n}\r\n#baner\r\n{\r\n\tbackground-color: RosyBrown;\r\n\tcolor: white;\r\n\ttext-align: center;\r\n\tpadding: 10px;\r\n}\r\n#form\r\n{\r\n\tbackground-color: DarkSalmon;\r\n\ttext-align: center;\r\n\tpadding: 40px;\r\n}\r\n#pl, #pp\r\n{\r\n\tbackground-color: LightSalmon;\r\n\theight: 300px;\r\n\twidth: 30%;\r\n\tfloat: left;\r\n}\r\n#ps\r\n{\r\n\tbackground-color: LightSalmon;\r\n\theight: 300px;\r\n\twidth: 40%;\r\n\tfloat: left;\r\n}\r\n#stopka\r\n{\r\n\tbackground-color: RosyBrown;\r\n\tcolor: white;\r\n\ttext-align: center;\r\n\tpadding: 30px;\r\n\tclear: both;\r\n}\r\nol\r\n{\r\n border: 2px solid rgb(205,92,92);\r\n font-size: 150%;\r\n}"
    }
  },
  {
    "id": "Kwalifikacja_E14_2019_zima_e14-10-19_01",
    "category": "Kwalifikacja_E14",
    "name": "2019 zima — E.14-10-19.01",
    "title": "2019 zima — E.14 10 19.01",
    "description": "Zadanie praktyczne z przygotowania do egzaminu zawodowego obejmujące tworzenie aplikacji internetowej, arkusza stylów CSS oraz relacyjnej bazy danych.",
    "technologies": [
      "CSS3",
      "PHP (mysqli)",
      "MySQL"
    ],
    "folder": "Kwalifikacja_E14/2019_zima/e14-10-19_01",
    "mainPdf": "E.14-10-19.01.pdf",
    "mainHtml": null,
    "mainPhp": "index.php",
    "mainSql": "baza2.sql",
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# 📌 2019_zima - e14-10-19_01 (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** 2019 zima   e14 10 19 01  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** CSS3, PHP (mysqli), MySQL\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nZadanie praktyczne z przygotowania do egzaminu zawodowego obejmujące tworzenie aplikacji internetowej, arkusza stylów CSS oraz relacyjnej bazy danych.\n\n### Główne elementy rozwiązania:\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Utworzenie tabel, relacji oraz przygotowanie poprawnych kwerend SQL (SELECT, INSERT, UPDATE).\n- Oprogramowanie skryptu backendowego w PHP (mysqli) do komunikacji z bazą danych MySQL.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 📄 **Arkusz PDF:** `E.14-10-19.01.pdf`\n- 🐘 **Skrypty PHP:** `index.php`\n- 💾 **Baza / Kwerendy SQL:** `baza2.sql`\n- 📝 **Pliki tekstowe / Kwerendy:** `kwerendy.txt`\n- 🎨 **Style CSS:** `style4.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Import bazy danych:**\n   - Uruchom lokalny serwer MySQL (np. w panelu XAMPP).\n   - Otwórz w przeglądarce `http://localhost/phpmyadmin`.\n   - Utwórz nową bazę danych i zaimportuj plik SQL (`baza2.sql`).\n\n3. **Uruchomienie PHP:**\n   - Skopiuj ten rozpakowany folder do katalogu `C:\\xampp\\htdocs\\e14-10-19_01`.\n   - Uruchom moduł **Apache** w XAMPP.\n   - Otwórz w przeglądarce adres: `http://localhost/e14-10-19_01/index.php`.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
    "pdfs": [
      "E.14-10-19.01.pdf"
    ],
    "htmls": [],
    "phps": [
      "index.php"
    ],
    "sqls": [
      "baza2.sql"
    ],
    "zips": [
      "paczka_zadania.zip"
    ],
    "txts": [
      "kwerendy.txt"
    ],
    "scripts": [
      "style4.css"
    ],
    "allFiles": [
      "baza2.sql",
      "drapieznik.jpg",
      "E.14-10-19.01.pdf",
      "import.png",
      "index.php",
      "kw1.jpg",
      "kw2.jpg",
      "kw3.jpg",
      "kw4.jpg",
      "kwerendy.txt",
      "paczka_zadania.zip",
      "README.md",
      "style4.css"
    ],
    "fileContents": {
      "baza2.sql": "-- phpMyAdmin SQL Dump\n-- version 4.7.4\n-- https://www.phpmyadmin.net/\n--\n-- Host: 127.0.0.1\n-- Czas generowania: 13 Lis 2017, 10:09\n-- Wersja serwera: 10.1.28-MariaDB\n-- Wersja PHP: 7.1.10\n\nSET SQL_MODE = \"NO_AUTO_VALUE_ON_ZERO\";\nSET AUTOCOMMIT = 0;\nSTART TRANSACTION;\nSET time_zone = \"+00:00\";\n\n\n/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;\n/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;\n/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;\n/*!40101 SET NAMES utf8mb4 */;\n\n--\n-- Baza danych: `baza`\n--\n\n-- --------------------------------------------------------\n\n--\n-- Struktura tabeli dla tabeli `dania`\n--\n\nCREATE TABLE `dania` (\n  `id` int(10) UNSIGNED NOT NULL,\n  `typ` int(10) UNSIGNED DEFAULT NULL,\n  `nazwa` text,\n  `cena` int(10) UNSIGNED DEFAULT NULL\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\n\n--\n-- Zrzut danych tabeli `dania`\n--\n\nINSERT INTO `dania` (`id`, `typ`, `nazwa`, `cena`) VALUES\n(1, 1, 'Gazpacho', 20),\n(2, 1, 'Krem z warzyw', 25),\n(3, 1, 'Gulaszowa ostra', 30),\n(4, 2, 'Kaczka i owoc', 30),\n(5, 2, 'Kurczak pieczony', 40),\n(6, 2, 'wieprzowy przysmak', 35),\n(7, 2, 'Mintaj w panierce', 30),\n(8, 2, 'Alle kotlet', 30),\n(9, 3, 'Owoce morza', 20),\n(10, 3, 'Grzybki, warzywka, sos', 15),\n(11, 3, 'Orzechy i chipsy', 10),\n(12, 3, 'Tatar i jajo', 15),\n(13, 3, 'Bukiet warzyw', 10),\n(14, 4, 'Sok porzeczkowy', 3),\n(15, 4, 'Cola', 3),\n(16, 4, 'Woda', 2);\n\n-- --------------------------------------------------------\n\n--\n-- Struktura tabeli dla tabeli `gromady`\n--\n\nCREATE TABLE `gromady` (\n  `id` int(10) UNSIGNED NOT NULL,\n  `nazwa` text,\n  `opis` text NOT NULL\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\n\n--\n-- Zrzut danych tabeli `gromady`\n--\n\nINSERT INTO `gromady` (`id`, `nazwa`, `opis`) VALUES\n(1, 'ryby', ''),\n(2, 'plazy', ''),\n(3, 'gady', ''),\n(4, 'ptaki', ''),\n(5, 'ssaki', '');\n\n-- --------------------------------------------------------\n\n--\n-- Struktura tabeli dla tabeli `odzywianie`\n--\n\nCREATE TABLE `odzywianie` (\n  `id` int(10) UNSIGNED NOT NULL,\n  `rodzaj` text,\n  `informacja` text NOT NULL\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\n\n--\n-- Zrzut danych tabeli `odzywianie`\n--\n\nINSERT INTO `odzywianie` (`id`, `rodzaj`, `informacja`) VALUES\n(1, 'drapieznik', ''),\n(2, 'roslinozerny', ''),\n(3, 'padlinozerny', ''),\n(4, 'wszystkozerny', '');\n\n\n-- --------------------------------------------------------\n\n--\n-- Struktura tabeli dla tabeli `ogloszenie`\n--\n\nCREATE TABLE `ogloszenie` (\n  `id` int(10) UNSIGNED NOT NULL,\n  `uzytkownik_id` int(10) UNSIGNED NOT NULL,\n  `kategoria` int(10) UNSIGNED DEFAULT NULL,\n  `podkategoria` int(10) UNSIGNED DEFAULT NULL,\n  `tytul` text,\n  `tresc` text\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\n\n--\n-- Zrzut danych tabeli `ogloszenie`\n--\n\nINSERT INTO `ogloszenie` (`id`, `uzytkownik_id`, `kategoria`, `podkategoria`, `tytul`, `tresc`) VALUES\n(1, 1, 1, 12, 'Daniel Craig. Biografia', 'Biografia Daniela Craiga, niedrogo sprzedam'),\n(2, 1, 1, 13, 'Selekcja', 'Sprzedam: \\\"Selekcja\\\" J. Kellermana, niezniszczona'),\n(3, 2, 1, 13, 'Buick', 'Sprzedam horror Stephena Kinga w dobrym stanie'),\n(4, 2, 1, 14, 'Tytus, Romek i Atomek', 'Ks. IV do sprzedania, stan dobry'),\n(5, 2, 2, 0, 'Imagine Dragons', 'Sprzedam dwa CD Imagine Dragons');\n\n-- --------------------------------------------------------\n\n--\n-- Struktura tabeli dla tabeli `podzespoly`\n--\n\nCREATE TABLE `podzespoly` (\n  `id` int(10) UNSIGNED NOT NULL,\n  `typy_id` int(10) UNSIGNED NOT NULL,\n  `producenci_id` int(10) UNSIGNED NOT NULL,\n  `nazwa` text,\n  `opis` text,\n  `dostepnosc` tinyint(1) DEFAULT NULL,\n  `cena` float NOT NULL\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\n\n--\n-- Zrzut danych tabeli `podzespoly`\n--\n\nINSERT INTO `podzespoly` (`id`, `typy_id`, `producenci_id`, `nazwa`, `opis`, `dostepnosc`, `cena`) VALUES\n(1, 1, 1, 'Core i5-7640X', 'Procesor Intel Core i5-7640X 4,2 GHz LGA 2066 Box', 1, 1000),\n(2, 1, 1, 'Core i3-6300', 'Procesor Intel Core i3-6300 3,8 GHz 4MB cache s. 1151 Box', 1, 575),\n(3, 1, 1, 'Core i7-6700K', 'Procesor Intel Core i7-6700K 4,0 GHz 8MB cache s. 1151 Box', 0, 1400),\n(4, 1, 2, 'X6 FX-6350', 'Procesor AMD X6 FX-6350 s.AM3+ BOX', 1, 380),\n(5, 2, 7, 'Savage', 'RAM HyperX 16GB (2x8GB) DDR3-1866 Dual Chanel Kit Non-ECC CL9 XMP Savage Series HX318C9SRK2/16', 1, 535),\n(6, 2, 7, 'Savage', 'HyperX 4GB DDR3-1600 Non-ECC CL9 XMP Savage Series HX316C9SR/4', 0, 150),\n(7, 2, 8, 'Signature', 'RAM Patriot Signature DDR3 8GB (2x4GB) 1600 CL9 PSD38G1600KH', 0, 250),\n(8, 5, 9, 'GTX 1060', 'Karta graficzna Asus DUAL NVIDIA GeForce GTX 1060 3072MB GDDR5 192b PCI-E x16 v. 3.0 (1594MHz/8008MHz) OC Edition', 1, 1189),\n(9, 5, 9, 'GeForce 210', 'Karta graficzna ASUS GeForce 210 1024MB 64bit PCI-E', 0, 145),\n(10, 6, 6, 'WD Black', 'Dysk WD Black WD1003FZEX 1TB sATA III 64MB', 0, 315),\n(11, 6, 6, 'WD Blue', 'Dysk WD Blue WD10EZEX 1TB sATA III 64MB', 1, 195),\n(12, 6, 5, 'AHD650-1TU3-CBK', 'Dysk USB ADATA AHD650-1TU3-CBK 1TB 2.5\\' HD650 USB 3.0 Czarny', 1, 210);\n\n-- --------------------------------------------------------\n\n--\n-- Struktura tabeli dla tabeli `pracownicy`\n--\n\nCREATE TABLE `pracownicy` (\n  `id` int(10) UNSIGNED NOT NULL,\n  `imie` text,\n  `nazwisko` text,\n  `stanowisko` int(11) NOT NULL\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\n\n--\n-- Zrzut danych tabeli `pracownicy`\n--\n\nINSERT INTO `pracownicy` (`id`, `imie`, `nazwisko`, `stanowisko`) VALUES\n(1, 'Anna', 'Kowalska', 1),\n(2, 'Monika', 'Nowak', 2),\n(3, 'Ewelina', 'Nowakowska', 2),\n(4, 'Anna', 'Przybylska', 3),\n(5, 'Maria', 'Kowal', 3),\n(6, 'Ewa', 'Nowacka', 4);\n\n-- --------------------------------------------------------\n\n--\n-- Struktura tabeli dla tabeli `typy`\n--\n\nCREATE TABLE `typy` (\n  `id` int(10) UNSIGNED NOT NULL,\n  `kategoria` text,\n  `opis` text\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\n\n--\n-- Zrzut danych tabeli `typy`\n--\n\nINSERT INTO `typy` (`id`, `kategoria`, `opis`) VALUES\n(1, 'Procesor', NULL),\n(2, 'RAM', NULL),\n(5, 'karta graficzna', NULL),\n(6, 'HDD', NULL);\n\n-- --------------------------------------------------------\n\n--\n-- Struktura tabeli dla tabeli `uczniowie`\n--\n\nCREATE TABLE `uczniowie` (\n  `imie` text,\n  `nazwisko` text,\n  `wiek` int(11) DEFAULT NULL\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\n\n--\n-- Zrzut danych tabeli `uczniowie`\n--\n\nINSERT INTO `uczniowie` (`imie`, `nazwisko`, `wiek`) VALUES\n('Kamil', 'Ryba', 11),\n('Karolina', 'Witecka', 8),\n('Karol', 'Rybacki', 9),\n('Marina', 'Damiencka', 9);\n\n-- --------------------------------------------------------\n\n--\n-- Struktura tabeli dla tabeli `uzytkownik`\n--\n\nCREATE TABLE `uzytkownik` (\n  `id` int(10) UNSIGNED NOT NULL,\n  `imie` text,\n  `nazwisko` text,\n  `telefon` text,\n  `email` text\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\n\n--\n-- Zrzut danych tabeli `uzytkownik`\n--\n\nINSERT INTO `uzytkownik` (`id`, `imie`, `nazwisko`, `telefon`, `email`) VALUES\n(1, 'Anna', 'Kowalska', '601601601', 'anna@poczta.pl'),\n(2, 'Jan', 'Nowak', '608608608', 'jan@poczta.pl'),\n(3, 'Jolanta', 'Jasny', '606606606', 'jolanta@poczta.pl'),\n(4, 'qqq', 'www', '345', 'dsfsdklfs@daskl');\n\n-- --------------------------------------------------------\n\n--\n-- Struktura tabeli dla tabeli `wyniki`\n--\n\nCREATE TABLE `wyniki` (\n  `id` int(10) UNSIGNED NOT NULL,\n  `dyscyplina_id` int(10) UNSIGNED NOT NULL,\n  `sportowiec_id` int(10) UNSIGNED NOT NULL,\n  `wynik` decimal(5,2) DEFAULT NULL,\n  `dataUstanowienia` date DEFAULT NULL\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\n\n--\n-- Zrzut danych tabeli `wyniki`\n--\n\nINSERT INTO `wyniki` (`id`, `dyscyplina_id`, `sportowiec_id`, `wynik`, `dataUstanowienia`) VALUES\n(1, 1, 1, '12.40', '2015-10-14'),\n(2, 1, 1, '12.00', '2015-10-06'),\n(3, 1, 2, '11.80', '2015-10-14'),\n(4, 1, 2, '11.90', '2015-10-06'),\n(5, 1, 3, '11.50', '2015-10-14'),\n(6, 1, 3, '11.56', '2015-10-06'),\n(7, 1, 4, '11.70', '2015-10-14'),\n(8, 1, 4, '11.67', '2015-10-06'),\n(9, 1, 5, '11.30', '2015-10-14'),\n(10, 1, 5, '11.52', '2015-10-06'),\n(11, 1, 6, '12.10', '2015-10-14'),\n(12, 1, 6, '12.00', '2015-10-06'),\n(13, 3, 1, '63.00', '2015-11-11'),\n(14, 3, 1, '63.60', '2015-10-13'),\n(15, 3, 2, '64.00', '2015-11-11'),\n(16, 3, 2, '63.60', '2015-10-13'),\n(17, 3, 3, '60.00', '2015-11-11'),\n(18, 3, 3, '61.60', '2015-10-13'),\n(19, 3, 4, '63.50', '2015-11-11'),\n(20, 3, 4, '63.60', '2015-10-13'),\n(21, 3, 5, '70.00', '2015-10-07'),\n(22, 3, 6, '68.00', '2015-10-07');\n\n-- --------------------------------------------------------\n\n--\n-- Struktura tabeli dla tabeli `zamowienia`\n--\n\nCREATE TABLE `zamowienia` (\n  `id` int(10) UNSIGNED NOT NULL,\n  `Samochody_id` int(10) UNSIGNED NOT NULL,\n  `Klient` text,\n  `telefon` text,\n  `dataZam` date DEFAULT NULL\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\n\n--\n-- Zrzut danych tabeli `zamowienia`\n--\n\nINSERT INTO `zamowienia` (`id`, `Samochody_id`, `Klient`, `telefon`, `dataZam`) VALUES\n(1, 3, 'Anna Kowalska', '111222333', '2016-02-15'),\n(2, 6, 'Jan Nowakowski', '222111333', '2016-02-15'),\n(3, 8, 'Marcin Kolwal', '333111222', '2016-02-15');\n\n-- --------------------------------------------------------\n\n--\n-- Struktura tabeli dla tabeli `zwierzeta`\n--\n\nCREATE TABLE `zwierzeta` (\n  `id` int(10) UNSIGNED NOT NULL,\n  `Gromady_id` int(10) UNSIGNED NOT NULL,\n  `Odzywianie_id` int(10) UNSIGNED NOT NULL,\n  `gatunek` text,\n  `wystepowanie` text,\n  `czy_zagrozony` tinyint(1) DEFAULT NULL,\n  `obraz` text NOT NULL\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\n\n--\n-- Zrzut danych tabeli `zwierzeta`\n--\n\nINSERT INTO `zwierzeta` (`id`, `Gromady_id`, `Odzywianie_id`, `gatunek`, `wystepowanie`, `czy_zagrozony`, `obraz`) VALUES\n(1, 1, 1, 'Sum pospolity', 'Eurazja', 0, 'sum.jpg'),\n(2, 1, 1, 'Jesiotr zachodni', 'Europa', 1, 'jesiotr.jpg'),\n(3, 4, 4, 'Wrona siwa', 'Europa', 0, 'wrona.jpg'),\n(4, 4, 1, 'Puszczyk zwyczajny', 'Eurazja', 0, 'puszczyk.jpg'),\n(5, 4, 4, 'Sroka zwyczajna', 'Eurazja', 0, 'sroka.jpg'),\n(6, 5, 1, 'Wilk szary', 'Europa, Ameryka', 0, 'wilk.jpg'),\n(7, 5, 3, 'Hiena brunatna', 'Afryka', 0, 'hiena.jpg'),\n(8, 5, 2, 'Sarna europejska', 'Europa', 0, 'sarna.jpg'),\n(9, 5, 1, 'Dingo australijski', 'Australia', 1, 'dingo.jpg');\n\n--\n-- Indeksy dla zrzutów tabel\n--\n\n--\n-- Indexes for table `dania`\n--\nALTER TABLE `dania`\n  ADD PRIMARY KEY (`id`);\n\n--\n-- Indexes for table `gromady`\n--\nALTER TABLE `gromady`\n  ADD PRIMARY KEY (`id`);\n\n--\n-- Indexes for table `odzywianie`\n--\nALTER TABLE `odzywianie`\n  ADD PRIMARY KEY (`id`);\n\n--\n-- Indexes for table `ogloszenie`\n--\nALTER TABLE `ogloszenie`\n  ADD PRIMARY KEY (`id`);\n\n--\n-- Indexes for table `podzespoly`\n--\nALTER TABLE `podzespoly`\n  ADD PRIMARY KEY (`id`);\n\n--\n-- Indexes for table `pracownicy`\n--\nALTER TABLE `pracownicy`\n  ADD PRIMARY KEY (`id`);\n\n--\n-- Indexes for table `typy`\n--\nALTER TABLE `typy`\n  ADD PRIMARY KEY (`id`);\n\n--\n-- Indexes for table `uzytkownik`\n--\nALTER TABLE `uzytkownik`\n  ADD PRIMARY KEY (`id`);\n\n--\n-- Indexes for table `wyniki`\n--\nALTER TABLE `wyniki`\n  ADD PRIMARY KEY (`id`);\n\n--\n-- Indexes for table `zamowienia`\n--\nALTER TABLE `zamowienia`\n  ADD PRIMARY KEY (`id`);\n\n--\n-- Indexes for table `zwierzeta`\n--\nALTER TABLE `zwierzeta`\n  ADD PRIMARY KEY (`id`);\n\n--\n-- AUTO_INCREMENT for dumped tables\n--\n\n--\n-- AUTO_INCREMENT dla tabeli `dania`\n--\nALTER TABLE `dania`\n  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;\n\n--\n-- AUTO_INCREMENT dla tabeli `gromady`\n--\nALTER TABLE `gromady`\n  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;\n\n--\n-- AUTO_INCREMENT dla tabeli `odzywianie`\n--\nALTER TABLE `odzywianie`\n  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;\n\n--\n-- AUTO_INCREMENT dla tabeli `ogloszenie`\n--\nALTER TABLE `ogloszenie`\n  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;\n\n--\n-- AUTO_INCREMENT dla tabeli `podzespoly`\n--\nALTER TABLE `podzespoly`\n  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;\n\n--\n-- AUTO_INCREMENT dla tabeli `pracownicy`\n--\nALTER TABLE `pracownicy`\n  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;\n\n--\n-- AUTO_INCREMENT dla tabeli `typy`\n--\nALTER TABLE `typy`\n  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;\n\n--\n-- AUTO_INCREMENT dla tabeli `uzytkownik`\n--\nALTER TABLE `uzytkownik`\n  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;\n\n--\n-- AUTO_INCREMENT dla tabeli `wyniki`\n--\nALTER TABLE `wyniki`\n  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;\n\n--\n-- AUTO_INCREMENT dla tabeli `zamowienia`\n--\nALTER TABLE `zamowienia`\n  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;\n\n--\n-- AUTO_INCREMENT dla tabeli `zwierzeta`\n--\nALTER TABLE `zwierzeta`\n  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;\nCOMMIT;\n\n/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;\n/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;\n/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;\n",
      "index.php": "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"style4.css\">\r\n\t<title>Odżywianie zwierząt</title>\r\n</head>\r\n<body>\r\n\t<header>\r\n\t\t<h2>DRAPIEŻNIKI I INNE</h2>\r\n\t</header>\r\n\t<nav>\r\n\t\t<h3>Wybierz styl życia:</h3>\r\n\t\t<form action=\"index.php\" method=\"POST\">\r\n\t\t\t<select name=\"list\">\r\n\t\t\t\t<option value=\"1\">Drapieżniki</option>\r\n\t\t\t\t<option value=\"2\">Roślinożerne</option>\r\n\t\t\t\t<option value=\"3\">Padlinożerne</option>\r\n\t\t\t\t<option value=\"4\">Wszytkożerne</option>\r\n\t\t\t</select>\r\n\t\t\t<input type=\"submit\" value=\"Zobacz\">\r\n\t\t</form>\r\n\t</nav>\r\n\t<section id=\"bl\" class=\"blocks\">\r\n\t\t<h3>Lista zwierząt</h3>\r\n\t\t<ul>\r\n\t\t<?php\r\n\t\t\t$connect =mysqli_connect('localhost','root','','baza');\r\n\t\t\t$sql=\"SELECT `zwierzeta`.`gatunek`, `odzywianie`.`rodzaj` FROM `zwierzeta` INNER JOIN `odzywianie` ON `odzywianie`.`id` = `zwierzeta`.`Odzywianie_id`\";\r\n\t\t \t$query= mysqli_query($connect,$sql);\r\n\t\t \twhile ($linia=mysqli_fetch_assoc($query))\r\n\t\t \t{\r\n\t\t \t\techo \"<li>\".$linia['gatunek'].\" \".$linia['rodzaj'].\"</li>\";\r\n\t\t \t}\r\n\r\n\r\n\t\t\t mysqli_close($connect);\r\n\t\t?>\r\n\t\t</ul>\r\n\t</section>\r\n\t<section id=\"bs\" class=\"blocks\">\r\n\t\t<?php\r\n\t\t\t$connect =mysqli_connect('localhost','root','','baza');\r\n\t\t\t$list = $_POST['list'];\r\n\t\t\t$sql=\"SELECT `zwierzeta`.`id`, `zwierzeta`.`gatunek`, `zwierzeta`.`wystepowanie` FROM `zwierzeta` INNER JOIN `odzywianie` ON `odzywianie`.`id` = `zwierzeta`.`Odzywianie_id` WHERE `zwierzeta`.`Odzywianie_id` = $list \";\r\n\t\t \t$query= mysqli_query($connect,$sql);\t\t \t\r\n\r\n\t\t \tif (isset($_POST['list']))\r\n\t\t\t{\t\t\r\n\t\t\t   \tif ($list == 1)\r\n\t\t\t\t{\r\n\t\t\t      echo \"<h3>\".\"Drapieżniki\".\"</h3>\";\r\n\t\t\t    }\r\n\t\t\t    else if ($list == 2)\r\n\t\t\t    {\r\n\t\t\t      echo \"<h3>\".\"Roślinożerne\".\"</h3>\";\r\n\t\t\t    }\r\n\t\t\t    else if ($list == 3)\r\n\t\t\t    {\r\n\t\t\t      echo \"<h3>\".\"Padlinożerne\".\"</h3>\";\r\n\t\t\t    }\r\n\t\t\t    else if ($list == 4)\r\n\t\t\t    {\r\n\t\t\t      echo \"<h3>\".\"Wszytkożerne\".\"</h3>\";\r\n\t\t\t    }\r\n\t\t\t}\t\t\t\r\n\r\n\t\t\twhile ($linia=mysqli_fetch_assoc($query))\r\n\t\t \t{\r\n\t\t \t\techo $linia['id'].\", \".$linia['gatunek'].\", \".$linia['wystepowanie'].\"<br>\";\r\n\t\t \t}\t    \r\n\t\t\tmysqli_close($connect);\r\n\t\t?>\r\n\t</section>\r\n\t<section id=\"bp\">\r\n\t\t<img src=\"drapieznik.jpg\" alt=\"Wilki\">\r\n\t</section>\r\n\t<footer>\r\n\t\t<a href=\"https://pl.wikipedia.org\" target=\"blank\">Poczytaj o zwierzętach na Wikipedii</a>\r\n\t\tautor strony: 00000000000\r\n\t</footer>\r\n</body>\r\n</html>",
      "kwerendy.txt": "Zapytanie 1: SELECT `zwierzeta`.`id`, `zwierzeta`.`gatunek`, `zwierzeta`.`wystepowanie` FROM `zwierzeta` INNER JOIN `odzywianie` ON `odzywianie`.`id` = `zwierzeta`.`Odzywianie_id` WHERE `odzywianie`.`rodzaj` LIKE \"wszystkozerny\";\r\n\r\nZapytanie 2: SELECT `zwierzeta`.`gatunek`, `odzywianie`.`rodzaj` FROM `zwierzeta` INNER JOIN `odzywianie` ON `odzywianie`.`id` = `zwierzeta`.`Odzywianie_id`\r\n\r\nZapytanie 3: SELECT COUNT(*) FROM `zwierzeta` INNER JOIN `odzywianie` ON `odzywianie`.`id` = `zwierzeta`.`Odzywianie_id` WHERE `odzywianie`.`rodzaj` LIKE \"drapieznik\"\r\n\r\nZapytanie 4: CREATE USER JanKowalski IDENTIFIED BY \"J4nKow\"",
      "README.md": "# 📌 2019_zima - e14-10-19_01 (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** 2019 zima   e14 10 19 01  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** CSS3, PHP (mysqli), MySQL\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nZadanie praktyczne z przygotowania do egzaminu zawodowego obejmujące tworzenie aplikacji internetowej, arkusza stylów CSS oraz relacyjnej bazy danych.\n\n### Główne elementy rozwiązania:\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Utworzenie tabel, relacji oraz przygotowanie poprawnych kwerend SQL (SELECT, INSERT, UPDATE).\n- Oprogramowanie skryptu backendowego w PHP (mysqli) do komunikacji z bazą danych MySQL.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 📄 **Arkusz PDF:** `E.14-10-19.01.pdf`\n- 🐘 **Skrypty PHP:** `index.php`\n- 💾 **Baza / Kwerendy SQL:** `baza2.sql`\n- 📝 **Pliki tekstowe / Kwerendy:** `kwerendy.txt`\n- 🎨 **Style CSS:** `style4.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Import bazy danych:**\n   - Uruchom lokalny serwer MySQL (np. w panelu XAMPP).\n   - Otwórz w przeglądarce `http://localhost/phpmyadmin`.\n   - Utwórz nową bazę danych i zaimportuj plik SQL (`baza2.sql`).\n\n3. **Uruchomienie PHP:**\n   - Skopiuj ten rozpakowany folder do katalogu `C:\\xampp\\htdocs\\e14-10-19_01`.\n   - Uruchom moduł **Apache** w XAMPP.\n   - Otwórz w przeglądarce adres: `http://localhost/e14-10-19_01/index.php`.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
      "style4.css": "body\r\n{\r\n\tfont-family: Helvetica;\r\n\tpadding: 0px;\r\n\tmargin: 0px;\r\n}\r\n\r\nheader\r\n{\r\n\tbackground-color: DarkCyan;\r\n\ttext-align: center;\r\n\tpadding: 20px;\r\n}\r\n\r\nnav\r\n{\r\n\tbackground-color: LightSeaGreen;\r\n\ttext-align: center;\r\n\tpadding: 60px;\r\n}\r\n\r\n.blocks\r\n{\r\n\tfloat: left;\r\n\tbackground-color: Teal;\r\n\tcolor: white;\r\n\ttext-align: center;\r\n\theight: 350px;\r\n\twidth: 25%;\r\n}\r\n\r\n#bp\r\n{\r\n\tfloat: left;\r\n\tbackground-color: Teal;\r\n\theight: 350px;\r\n\twidth: 50%;\r\n}\r\n\r\nfooter\r\n{\r\n\tclear: both;\r\n\tbackground-color: DarkCyan;\r\n\tcolor: white;\r\n\tpadding: 40px;\r\n}\r\n\r\nul\r\n{\r\n\tborder: 4px dotted rgb(127,255,212);\r\n}"
    }
  },
  {
    "id": "Kwalifikacja_E14_2019_zima_e14-11-19_01",
    "category": "Kwalifikacja_E14",
    "name": "2019 zima — E.14-11-19.01",
    "title": "Strona Hodowli i Ras Kotów",
    "description": "Responsywna witryna z podstronami ras kotów, opisem pielęgnacji, galerią zdjęć i formularzem kontaktowym.",
    "technologies": [
      "HTML5",
      "CSS3"
    ],
    "folder": "Kwalifikacja_E14/2019_zima/e14-11-19_01",
    "mainPdf": "E.14-11-19.01.pdf",
    "mainHtml": "index.html",
    "mainPhp": null,
    "mainSql": null,
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# 📌 2019_zima - e14-11-19_01 (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** Strona Hodowli i Ras Kotów  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** HTML5, CSS3\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nResponsywna witryna z podstronami ras kotów, opisem pielęgnacji, galerią zdjęć i formularzem kontaktowym.\n\n### Główne elementy rozwiązania:\n- Opracowanie semantycznej struktury strony w standardzie HTML5.\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 📄 **Arkusz PDF:** `E.14-11-19.01.pdf`\n- 🌐 **Pliki HTML:** `index.html`, `koty.html`, `psy.html`\n- 🎨 **Style CSS:** `style5.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Uruchomienie strony WWW:**\n   - Kliknij dwukrotnie plik `index.html` lub przeciągnij go do dowolnej przeglądarki.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
    "pdfs": [
      "E.14-11-19.01.pdf"
    ],
    "htmls": [
      "index.html",
      "koty.html",
      "psy.html"
    ],
    "phps": [],
    "sqls": [],
    "zips": [
      "paczka_zadania.zip"
    ],
    "txts": [],
    "scripts": [
      "style5.css"
    ],
    "allFiles": [
      "E.14-11-19.01.pdf",
      "index.html",
      "kot1-szary.jpg",
      "kot1.jpg",
      "koty.html",
      "paczka_zadania.zip",
      "pies1-szary.jpg",
      "pies1.jpg",
      "pies2-szary.jpg",
      "pies2.jpg",
      "pies3-szary.jpg",
      "pies3.jpg",
      "psy.html",
      "README.md",
      "style5.css"
    ],
    "fileContents": {
      "index.html": "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"style5.css\">\r\n\t<title>Galeria zdjęć</title>\r\n</head>\r\n<body>\r\n\t<header>\r\n\t\t<h1>Zdjęcia naszych pupilów</h1>\r\n\t</header>\r\n\t<nav>\r\n\t\t<h2>Kategorie</h2>\r\n\t\t<ul>\r\n\t\t\t<a href=\"psy.html\"><li>Psy</li></a>\r\n\t\t\t<a href=\"koty.html\"><li>Koty</li></a>\r\n\t\t\t<li>Gryzonie</li>\r\n\t\t\t<li>Jaszczurki</li>\r\n\t\t\t<li>Inne zdjęcia</li>\r\n\t\t</ul>\r\n\t\t<a href=\"index.html\"><h4>Powrót do strony głownej</h4></a>\r\n\t</nav>\t\r\n\t<main id=\"pg\">\r\n\t\t<h1>Zdjęcia tygodnia</h1>\r\n\t\t<p>Azor, 4 miesiące</p>\r\n\t</main>\r\n\t<main id=\"pd\">\r\n\t\t<img src=\"pies2.jpg\" alt=\"Azor\" class=\"pd\">\r\n\t</main>\r\n\t\r\n\t<footer>Galerię zdjęć opracował 00000000000</footer>\t\r\n</body>\r\n</html>",
      "koty.html": "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"style5.css\">\r\n\t<title>Galeria zdjęć</title>\r\n\r\n\t<script type=\"text/javascript\">\r\n\t\tfunction over(id, img) \r\n\t\t{\t\t\t\r\n\t\t\tdocument.getElementById(id).src = img;\t\t\t\r\n\t\t}\r\n\r\n\t\tfunction clicked(id, img)\r\n\t\t{\t\t\t\r\n\t\t\tdocument.getElementById('set').src = img;\r\n\t\t\tout(id, img);\t\t\t\r\n\t\t}\r\n\r\n\t\tfunction out(id, img)\r\n\t\t{\r\n\t\t\tdocument.getElementById(id).src = img;\r\n\t\t}\r\n\t</script>\r\n\r\n</head>\r\n<body>\r\n\t<header>\r\n\t\t<h1>Zdjęcia kotów</h1>\r\n\t</header>\r\n\t<nav>\r\n\t\t<h2>Kategorie</h2>\r\n\t\t<ul>\r\n\t\t\t<a href=\"psy.html\"><li>Psy</li></a>\r\n\t\t\t<a href=\"koty.html\"><li>Koty</li></a>\r\n\t\t\t<li>Gryzonie</li>\r\n\t\t\t<li>Jaszczurki</li>\r\n\t\t\t<li>Inne zdjęcia</li>\r\n\t\t</ul>\r\n\t\t<a href=\"index.html\"><h4>Powrót do strony głownej</h4></a>\r\n\t</nav>\t\r\n\t<main id=\"pg\">\r\n\t\t<h1>Wybierz zdjęcie</h1>\r\n\t\t<img id=\"1\" src=\"kot1.jpg\" alt=\"kot1\" onclick=\"clicked('1', 'kot1.jpg')\" onmouseover=\"over('1', 'kot1-szary.jpg')\" onmouseout=\"out('1', 'kot1.jpg')\">\r\n\t</main>\r\n\t<main id=\"pd\">\r\n\t\t<p><img id=\"set\" src=\"kot1.jpg\" alt=\"kot-duzy\" class=\"pd\"></p>\r\n\t</main>\t\r\n\t<footer>Galerię zdjęć opracował 00000000000</footer>\t\r\n</body>\r\n</html>",
      "psy.html": "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"style5.css\">\r\n\t<title>Galeria zdjęć</title>\t\r\n\r\n\t<script type=\"text/javascript\">\r\n\t\tfunction over(id, img) \r\n\t\t{\t\t\t\r\n\t\t\tdocument.getElementById(id).src = img;\t\t\t\r\n\t\t}\r\n\r\n\t\tfunction clicked(id, img)\r\n\t\t{\t\t\t\r\n\t\t\tdocument.getElementById('set').src = img;\r\n\t\t\tover(id,img);\r\n\t\t}\r\n\r\n\t\tfunction out(id, img)\r\n\t\t{\r\n\t\t\tdocument.getElementById(id).src = img;\r\n\t\t}\r\n\t</script>\r\n\r\n</head>\r\n<body>\r\n\t<header>\r\n\t\t<h1>Zdjęcia psów</h1>\r\n\t</header>\r\n\t<nav>\r\n\t\t<h2>Kategorie</h2>\r\n\t\t<ul>\r\n\t\t\t<a href=\"psy.html\"><li>Psy</li></a>\r\n\t\t\t<a href=\"koty.html\"><li>Koty</li></a>\r\n\t\t\t<li>Gryzonie</li>\r\n\t\t\t<li>Jaszczurki</li>\r\n\t\t\t<li>Inne zdjęcia</li>\r\n\t\t</ul>\r\n\t\t<a href=\"index.html\"><h4>Powrót do strony głownej</h4></a>\r\n\t</nav>\t\r\n\t<main id=\"pg\">\r\n\t\t<h1>Wybierz zdjęcie</h1>\r\n\t\t<img src=\"pies1.jpg\" alt=\"pies1\" onclick=\"clicked('1', 'pies1.jpg')\" onmouseover=\"over('1', 'pies1-szary.jpg')\" onmouseout=\"out('1', 'pies1.jpg')\" id=\"1\">\r\n        <img src=\"pies2.jpg\" alt=\"pies2\" onclick=\"clicked('2', 'pies2.jpg')\" onmouseover=\"over('2', 'pies2-szary.jpg')\" onmouseout=\"out('2', 'pies2.jpg')\" id=\"2\">\r\n        <img src=\"pies3.jpg\" alt=\"pies3\" onclick=\"clicked('3', 'pies3.jpg')\" onmouseover=\"over('3', 'pies3-szary.jpg')\"onmouseout=\"out('3', 'pies3.jpg')\" id=\"3\">\r\n\t</main>\r\n\t<main id=\"pd\">\r\n\t\t <p><img id=\"set\" src=\"pies1.jpg\" alt=\"pies-duży\"></p>\r\n\t</main>\t\r\n\t<footer>Galerię zdjęć opracował 00000000000</footer>\t\r\n</body>\r\n</html>",
      "README.md": "# 📌 2019_zima - e14-11-19_01 (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** Strona Hodowli i Ras Kotów  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** HTML5, CSS3\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nResponsywna witryna z podstronami ras kotów, opisem pielęgnacji, galerią zdjęć i formularzem kontaktowym.\n\n### Główne elementy rozwiązania:\n- Opracowanie semantycznej struktury strony w standardzie HTML5.\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 📄 **Arkusz PDF:** `E.14-11-19.01.pdf`\n- 🌐 **Pliki HTML:** `index.html`, `koty.html`, `psy.html`\n- 🎨 **Style CSS:** `style5.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Uruchomienie strony WWW:**\n   - Kliknij dwukrotnie plik `index.html` lub przeciągnij go do dowolnej przeglądarki.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
      "style5.css": "body\r\n{\r\n\tfont-family: Verdana;\r\n\tmargin: 0px;\r\n\tpadding: 0px; \r\n}\r\n\r\nheader\r\n{\r\n\tbackground-color: #9692B1;\r\n\tcolor: white;\r\n\ttext-align: center;\r\n\theight: 80px;\r\n}\r\n\r\nnav\r\n{\r\n\tfloat: left;\r\n\tbackground-color: #9692B1;\r\n\tcolor: white;\r\n\twidth: 20%;\r\n\theight: 750px;\r\n}\r\n\r\n\r\n\r\n#pg\r\n{\r\n\tfloat: left;\r\n\tbackground-color: #FFF4CC;\r\n\twidth: 80%;\r\n\theight: 300px;\r\n\ttext-align: center; \r\n}\r\n\r\n#pd\r\n{\r\n\tfloat: right;\r\n\tbackground-color: #DBCC93;\r\n\twidth: 80%;\r\n\theight: 450px;\r\n\ttext-align: center;\r\n}\r\n\r\nfooter\r\n{\r\n\tclear: both;\r\n\tbackground-color: #9692B1;\r\n\tcolor: white;\r\n\ttext-align: right;\r\n}\r\n\r\na\r\n{\r\n\tcolor: white;\r\n}\r\n\r\n#pg img\r\n{\r\n\twidth: 15%;\r\n\tmargin: 20px;\r\n}\r\n\r\n#pd img\r\n{\r\n\tborder: 4px solid #9692B1;\r\n\t\r\n}\r\n\r\n#pd img:hover\r\n{\r\n\tborder: 4px solid grey;\t\r\n}"
    }
  },
  {
    "id": "Kwalifikacja_E14_e14_cwiczenia",
    "category": "Kwalifikacja_E14",
    "name": "e14 cwiczenia",
    "title": "e14 cwiczenia",
    "description": "Zadanie praktyczne z przygotowania do egzaminu zawodowego obejmujące tworzenie aplikacji internetowej, arkusza stylów CSS oraz relacyjnej bazy danych.",
    "technologies": [
      "HTML5",
      "CSS3",
      "JavaScript"
    ],
    "folder": "Kwalifikacja_E14/e14_cwiczenia",
    "mainPdf": null,
    "mainHtml": "formaty.html",
    "mainPhp": null,
    "mainSql": null,
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# 📌 e14_cwiczenia (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** e14 cwiczenia  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** HTML5, CSS3, JavaScript\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nZadanie praktyczne z przygotowania do egzaminu zawodowego obejmujące tworzenie aplikacji internetowej, arkusza stylów CSS oraz relacyjnej bazy danych.\n\n### Główne elementy rozwiązania:\n- Opracowanie semantycznej struktury strony w standardzie HTML5.\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Implementacja logiki i obsługi zdarzeń po stronie klienta w JavaScript.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 🌐 **Pliki HTML:** `formaty.html`\n- 🎨 **Style CSS:** `style2.css`\n- ⚡ **Skrypty JS:** `skrypt.js`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Uruchomienie strony WWW:**\n   - Kliknij dwukrotnie plik `formaty.html` lub przeciągnij go do dowolnej przeglądarki.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
    "pdfs": [],
    "htmls": [
      "formaty.html"
    ],
    "phps": [],
    "sqls": [],
    "zips": [
      "paczka_zadania.zip"
    ],
    "txts": [],
    "scripts": [
      "skrypt.js",
      "style2.css"
    ],
    "allFiles": [
      "formaty.html",
      "napisy.png",
      "paczka_zadania.zip",
      "README.md",
      "skrypt.js",
      "style2.css"
    ],
    "fileContents": {
      "formaty.html": "<!DOCTYPE html>\r\n<html lang=\"pl\">\r\n    <head>\r\n        <meta charset=\"utf-8\">\r\n        <title>Formatowanie dokumentów HTML</title>\r\n        <link rel=\"stylesheet\" href=\"style2.css\">\r\n    </head>\r\n    <body>\r\n        <div id=\"baner\">\r\n            <h1>Formatowanie dokumentów HTML</h1>\r\n        </div>\r\n        <div id=\"g1\">\r\n            <h2>Przykład lity -hobby</h2>\r\n        <ul>\r\n            <li>muzyka</li>\r\n            <li>turystyka</li>\r\n            <ol>\r\n            <li>góry</li>\r\n            <li>jeziora</li>\r\n            <li>na rowerze</li>\r\n            </ol>\r\n            <li>książki</li>\r\n            </ul>\r\n        </div>\r\n        <div id=\"g2\">\r\n        <h2>Przykład tabeli -rozkład dnia</h2>\r\n        <table>\r\n            <tr>\r\n                <th>Pora dnia</th><th>obowiązki</th></tr> <tr><td>rano</td><td>nauka</td></tr> <tr><td>południe</td><td>zajęcia dodatkowe</td></tr> <tr><td>popołudnie</td> <td rowspan=\"2\">moje hobby</td> </tr> <tr><td>wieczór</td>\r\n            \r\n           \r\n            </table>\r\n        </div>\r\n        <div id=\"g3\"><img src=\"napisy.png\" alt=\"technologia web\"></div>\r\n        <div id=\"glowna\">\r\n        Podaj rozmiar tekstu w procentach: <input type=\"number\" id=\"numer\">%\r\n            <p><select id=\"typ\">\r\n                <option>prosty</option>\r\n                <option>kursywa</option>\r\n                </select></p>\r\n            <p>Jakim kolorem sformatować teskt? Wybierz przycisk</p>\r\n            <button class=\"button1\" onclick=\"formatujCz()\"></button><button class=\"button2\" onclick=\"formatujZ()\"></button><button class=\"button3\" onclick=\"formatujN()\"></button>\r\n            <p id=\"format\">To jest przykład paragrafu, który może być dowolnie formatowany przez Java Script</p>\r\n        </div>\r\n        <div id=\"stopka\"><p>Teskt sformatował:xxxxxx</p>\r\n        <a href=\"http://formatowanie.pl\" target=\"blank\">Odwiedz takze</a></div>\r\n        \r\n        <script>\r\n            function formatujCz(){\r\n           var typ= document.getElementById(\"typ\").value;\r\n                var format= document.getElementById(\"format\");\r\n                var rozmiar=document.getElementById(\"numer\").value;\r\n                \r\n              if(typ==\"kursywa\"){\r\n                  format.style.fontStyle=\"italic\";\r\n              }\r\n                else{\r\n                    format.style.fontStyle=\"normal\";\r\n                }\r\n                format.style.fontSize=\"\"+rozmiar+\"%\";\r\n                format.style.color=\"red\";\r\n            }\r\n            \r\n            \r\n            function formatujZ(){\r\n           var typ= document.getElementById(\"typ\").value;\r\n                var format= document.getElementById(\"format\");\r\n                var rozmiar=document.getElementById(\"numer\").value;\r\n                \r\n              if(typ==\"kursywa\"){\r\n                  format.style.fontStyle=\"italic\";\r\n              }\r\n                 else{\r\n                    format.style.fontStyle=\"normal\";\r\n                }\r\n                format.style.fontSize=\"\"+rozmiar+\"%\";\r\n                format.style.color=\"green\";\r\n            }\r\n            \r\n            \r\n            function formatujN(){\r\n           var typ= document.getElementById(\"typ\").value;\r\n                var format= document.getElementById(\"format\");\r\n                var rozmiar=document.getElementById(\"numer\").value;\r\n                \r\n              if(typ==\"kursywa\"){\r\n                  format.style.fontStyle=\"italic\";\r\n              }\r\n                 else{\r\n                    format.style.fontStyle=\"normal\";\r\n                }\r\n                format.style.fontSize=\"\"+rozmiar+\"%\";\r\n                format.style.color=\"blue\";\r\n            }\r\n        </script>\r\n        \r\n    </body>\r\n",
      "README.md": "# 📌 e14_cwiczenia (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** e14 cwiczenia  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** HTML5, CSS3, JavaScript\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nZadanie praktyczne z przygotowania do egzaminu zawodowego obejmujące tworzenie aplikacji internetowej, arkusza stylów CSS oraz relacyjnej bazy danych.\n\n### Główne elementy rozwiązania:\n- Opracowanie semantycznej struktury strony w standardzie HTML5.\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Implementacja logiki i obsługi zdarzeń po stronie klienta w JavaScript.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 🌐 **Pliki HTML:** `formaty.html`\n- 🎨 **Style CSS:** `style2.css`\n- ⚡ **Skrypty JS:** `skrypt.js`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Uruchomienie strony WWW:**\n   - Kliknij dwukrotnie plik `formaty.html` lub przeciągnij go do dowolnej przeglądarki.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
      "skrypt.js": "function formatuj(){\r\n    var rozmiar=document.getElementById(\"numer\").value\r\n    var wynik=document.getElementById(\"format\")\r\n    \r\n    wynik.style.fontSize=\"rozmiar\";\r\n}",
      "style2.css": "body {\r\n    font-family: Georgia;\r\n    margin:0px;\r\n}\r\n\r\n#baner{\r\n    background-color: #824555;\r\n    color:white;\r\n    text-align:center;\r\n    padding:20px;\r\n}\r\n#g1,#g2{\r\n    width:30%;\r\n    height: 300px;\r\n    background-color: #A26475;\r\n    color:white;\r\n    float:left;\r\n}\r\n#g3{\r\n    width:40%;\r\n    height: 300px;\r\n    background-color: #A26475;\r\n    color:white;\r\n    float:left;\r\n}\r\n#glowna{\r\n    background-color: #F0EAE2;\r\n    padding:50px;\r\n    clear:both;\r\n}\r\n#stopka{\r\n    background-color: #824555;\r\n    color:white;\r\n    text-align: center;\r\n    padding:20px;\r\n}\r\ntable,th,td{\r\n    border-collapse: collapse;\r\n    border:2px solid;\r\n    border-color: #69293A;\r\n    padding:7px;\r\n}\r\n.button1{\r\n    background-color: red;\r\n    width: 40px;\r\n    height:40px;\r\n}\r\n.button2{\r\n    background-color: green;\r\n    width: 40px;\r\n    height:40px;\r\n}\r\n.button3{\r\n    background-color: blue;\r\n    width: 40px;\r\n    height:40px;\r\n}\r\nul{\r\n    list-style-type: square;\r\n}"
    }
  },
  {
    "id": "Kwalifikacja_E14_e14_koty",
    "category": "Kwalifikacja_E14",
    "name": "e14 koty",
    "title": "Strona Hodowli i Ras Kotów",
    "description": "Responsywna witryna z podstronami ras kotów, opisem pielęgnacji, galerią zdjęć i formularzem kontaktowym.",
    "technologies": [
      "HTML5",
      "CSS3"
    ],
    "folder": "Kwalifikacja_E14/e14_koty",
    "mainPdf": null,
    "mainHtml": "index.html",
    "mainPhp": null,
    "mainSql": null,
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# 📌 e14_koty (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** Strona Hodowli i Ras Kotów  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** HTML5, CSS3\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nResponsywna witryna z podstronami ras kotów, opisem pielęgnacji, galerią zdjęć i formularzem kontaktowym.\n\n### Główne elementy rozwiązania:\n- Opracowanie semantycznej struktury strony w standardzie HTML5.\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 🌐 **Pliki HTML:** `index.html`, `koty.html`, `psy.html`\n- 🎨 **Style CSS:** `style5.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Uruchomienie strony WWW:**\n   - Kliknij dwukrotnie plik `index.html` lub przeciągnij go do dowolnej przeglądarki.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
    "pdfs": [],
    "htmls": [
      "index.html",
      "koty.html",
      "psy.html"
    ],
    "phps": [],
    "sqls": [],
    "zips": [
      "paczka_zadania.zip"
    ],
    "txts": [],
    "scripts": [
      "style5.css"
    ],
    "allFiles": [
      "index.html",
      "kot1-szary.jpg",
      "kot1.jpg",
      "koty.html",
      "paczka_zadania.zip",
      "pies1-szary.jpg",
      "pies1.jpg",
      "pies2-szary.jpg",
      "pies2.jpg",
      "pies3-szary.jpg",
      "pies3.jpg",
      "psy.html",
      "README.md",
      "style5.css"
    ],
    "fileContents": {
      "index.html": "<!DOCTYPE html>\r\n<html lang=\"pl\">\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"style5.css\">\r\n\t<title>Galeria zdjęć</title>\r\n</head>\r\n<body>\r\n\t<header>\r\n\t\t<h1>Zdjęcia naszych pupilów</h1>\r\n\t</header>\r\n\t<nav>\r\n\t\t<h2>Kategorie</h2>\r\n\t\t<ul>\r\n\t\t\t<a href=\"psy.html\"><li>Psy</li></a>\r\n\t\t\t<a href=\"koty.html\"><li>Koty</li></a>\r\n\t\t\t<li>Gryzonie</li>\r\n\t\t\t<li>Jaszczurki</li>\r\n\t\t\t<li>Inne zdjęcia</li>\r\n\t\t</ul>\r\n\t\t<a href=\"index.html\"><h4>Powrót do strony głownej</h4></a>\r\n\t</nav>\t\r\n\t<main id=\"pg\">\r\n\t\t<h1>Zdjęcia tygodnia</h1>\r\n\t\t<p>Azor, 4 miesiące</p>\r\n\t</main>\r\n\t<main id=\"pd\">\r\n\t\t<img src=\"pies2.jpg\" alt=\"Azor\" class=\"pd\">\r\n\t</main>\r\n\t\r\n\t<footer>Galerię zdjęć opracował <i> 00000000000 </i></footer>\t\r\n</body>\r\n</html>",
      "koty.html": "<!DOCTYPE html>\r\n<html lang=\"pl\">\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"style5.css\">\r\n\t<title>Galeria zdjęć</title>\r\n\r\n\t<script type=\"text/javascript\">\r\n\t\tfunction over(id, img) \r\n\t\t{\t\t\t\r\n\t\t\tdocument.getElementById(id).src = img;\t\t\t\r\n\t\t}\r\n\r\n\t\tfunction clicked(id, img)\r\n\t\t{\t\t\t\r\n\t\t\tdocument.getElementById('set').src = img;\r\n\t\t\tout(id, img);\t\t\t\r\n\t\t}\r\n\r\n\t\tfunction out(id, img)\r\n\t\t{\r\n\t\t\tdocument.getElementById(id).src = img;\r\n\t\t}\r\n\t</script>\r\n\r\n</head>\r\n<body>\r\n\t<header>\r\n\t\t<h1>Zdjęcia kotów</h1>\r\n\t</header>\r\n\t<nav>\r\n\t\t<h2>Kategorie</h2>\r\n\t\t<ul>\r\n\t\t\t<a href=\"psy.html\"><li>Psy</li></a>\r\n\t\t\t<a href=\"koty.html\"><li>Koty</li></a>\r\n\t\t\t<li>Gryzonie</li>\r\n\t\t\t<li>Jaszczurki</li>\r\n\t\t\t<li>Inne zdjęcia</li>\r\n\t\t</ul>\r\n\t\t<a href=\"index.html\"><h4>Powrót do strony głownej</h4></a>\r\n\t</nav>\t\r\n\t<main id=\"pg\">\r\n\t\t<h1>Wybierz zdjęcie</h1>\r\n\t\t<img id=\"1\" src=\"kot1.jpg\" alt=\"kot1\" onclick=\"clicked('1', 'kot1.jpg')\" onmouseover=\"over('1', 'kot1-szary.jpg')\" onmouseout=\"out('1', 'kot1.jpg')\">\r\n\t</main>\r\n\t<main id=\"pd\">\r\n\t\t<p><img id=\"set\" src=\"kot1.jpg\" alt=\"kot-duzy\" class=\"pd\"></p>\r\n\t</main>\t\r\n\t<footer>Galerię zdjęć opracował 00000000000</footer>\t\r\n</body>\r\n</html>",
      "psy.html": "<!DOCTYPE html>\r\n<html lang=\"pl\">\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"style5.css\">\r\n\t<title>Galeria zdjęć</title>\t\r\n\r\n\t<script type=\"text/javascript\">\r\n\t\tfunction over(id, img) \r\n\t\t{\t\t\t\r\n\t\t\tdocument.getElementById(id).src = img;\t\t\t\r\n\t\t}\r\n\r\n\t\tfunction clicked(id, img)\r\n\t\t{\t\t\t\r\n\t\t\tdocument.getElementById('set').src = img;\r\n\t\t\tover(id,img);\r\n\t\t}\r\n\r\n\t\tfunction out(id, img)\r\n\t\t{\r\n\t\t\tdocument.getElementById(id).src = img;\r\n\t\t}\r\n\t</script>\r\n\r\n</head>\r\n<body>\r\n\t<header>\r\n\t\t<h1>Zdjęcia psów</h1>\r\n\t</header>\r\n\t<nav>\r\n\t\t<h2>Kategorie</h2>\r\n\t\t<ul>\r\n\t\t\t<a href=\"psy.html\"><li>Psy</li></a>\r\n\t\t\t<a href=\"koty.html\"><li>Koty</li></a>\r\n\t\t\t<li>Gryzonie</li>\r\n\t\t\t<li>Jaszczurki</li>\r\n\t\t\t<li>Inne zdjęcia</li>\r\n\t\t</ul>\r\n\t\t<a href=\"index.html\"><h4>Powrót do strony głownej</h4></a>\r\n\t</nav>\t\r\n\t<main id=\"pg\">\r\n\t\t<h1>Wybierz zdjęcie</h1>\r\n\t\t<img src=\"pies1.jpg\" alt=\"pies1\" onclick=\"clicked('1', 'pies1.jpg')\" onmouseover=\"over('1', 'pies1-szary.jpg')\" onmouseout=\"out('1', 'pies1.jpg')\" id=\"1\">\r\n        <img src=\"pies2.jpg\" alt=\"pies2\" onclick=\"clicked('2', 'pies2.jpg')\" onmouseover=\"over('2', 'pies2-szary.jpg')\" onmouseout=\"out('2', 'pies2.jpg')\" id=\"2\">\r\n        <img src=\"pies3.jpg\" alt=\"pies3\" onclick=\"clicked('3', 'pies3.jpg')\" onmouseover=\"over('3', 'pies3-szary.jpg')\"onmouseout=\"out('3', 'pies3.jpg')\" id=\"3\">\r\n\t</main>\r\n\t<main id=\"pd\">\r\n\t\t <p><img id=\"set\" src=\"pies1.jpg\" alt=\"pies-duży\"></p>\r\n\t</main>\t\r\n\t<footer>Galerię zdjęć opracował 00000000000</footer>\t\r\n</body>\r\n</html>",
      "README.md": "# 📌 e14_koty (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** Strona Hodowli i Ras Kotów  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** HTML5, CSS3\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nResponsywna witryna z podstronami ras kotów, opisem pielęgnacji, galerią zdjęć i formularzem kontaktowym.\n\n### Główne elementy rozwiązania:\n- Opracowanie semantycznej struktury strony w standardzie HTML5.\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 🌐 **Pliki HTML:** `index.html`, `koty.html`, `psy.html`\n- 🎨 **Style CSS:** `style5.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Uruchomienie strony WWW:**\n   - Kliknij dwukrotnie plik `index.html` lub przeciągnij go do dowolnej przeglądarki.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
      "style5.css": "body\r\n{\r\n\tfont-family: Verdana;\r\n\tmargin: 0px;\r\n\tpadding: 0px; \r\n}\r\n\r\nheader\r\n{\r\n\tbackground-color: #9692B1;\r\n\tcolor: white;\r\n\ttext-align: center;\r\n\theight: 80px;\r\n}\r\n\r\nnav\r\n{\r\n\tfloat: left;\r\n\tbackground-color: #9692B1;\r\n\tcolor: white;\r\n\twidth: 20%;\r\n\theight: 750px;\r\n}\r\n\r\n\r\n\r\n#pg\r\n{\r\n\tfloat: left;\r\n\tbackground-color: #FFF4CC;\r\n\twidth: 80%;\r\n\theight: 300px;\r\n\ttext-align: center; \r\n}\r\n\r\n#pd\r\n{\r\n\tfloat: right;\r\n\tbackground-color: #DBCC93;\r\n\twidth: 80%;\r\n\theight: 450px;\r\n\ttext-align: center;\r\n}\r\n\r\nfooter\r\n{\r\n\tclear: both;\r\n\tbackground-color: #9692B1;\r\n\tcolor: white;\r\n\ttext-align: right;\r\n}\r\n\r\na\r\n{\r\n\tcolor: white;\r\n}\r\n\r\n#pg img\r\n{\r\n\twidth: 15%;\r\n\tmargin: 20px;\r\n}\r\n\r\n#pd img\r\n{\r\n\tborder: 4px solid #9692B1;\r\n\t\r\n}\r\n\r\n#pd img:hover\r\n{\r\n\tborder: 4px solid grey;\t\r\n}"
    }
  },
  {
    "id": "Kwalifikacja_E14_e14_lowisko",
    "category": "Kwalifikacja_E14",
    "name": "e14 lowisko",
    "title": "e14 lowisko",
    "description": "Zadanie praktyczne z przygotowania do egzaminu zawodowego obejmujące tworzenie aplikacji internetowej, arkusza stylów CSS oraz relacyjnej bazy danych.",
    "technologies": [
      "HTML5",
      "CSS3",
      "PHP (mysqli)"
    ],
    "folder": "Kwalifikacja_E14/e14_lowisko",
    "mainPdf": null,
    "mainHtml": "zawody.html",
    "mainPhp": "zgloszenia.php",
    "mainSql": null,
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# 📌 e14_lowisko (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** e14 lowisko  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** HTML5, CSS3, PHP (mysqli)\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nZadanie praktyczne z przygotowania do egzaminu zawodowego obejmujące tworzenie aplikacji internetowej, arkusza stylów CSS oraz relacyjnej bazy danych.\n\n### Główne elementy rozwiązania:\n- Opracowanie semantycznej struktury strony w standardzie HTML5.\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Oprogramowanie skryptu backendowego w PHP (mysqli) do komunikacji z bazą danych MySQL.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 🌐 **Pliki HTML:** `zawody.html`\n- 🐘 **Skrypty PHP:** `zgloszenia.php`\n- 📝 **Pliki tekstowe / Kwerendy:** `kwerendy.txt`\n- 🎨 **Style CSS:** `styl.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n3. **Uruchomienie PHP:**\n   - Skopiuj ten rozpakowany folder do katalogu `C:\\xampp\\htdocs\\e14_lowisko`.\n   - Uruchom moduł **Apache** w XAMPP.\n   - Otwórz w przeglądarce adres: `http://localhost/e14_lowisko/zgloszenia.php`.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
    "pdfs": [],
    "htmls": [
      "zawody.html"
    ],
    "phps": [
      "zgloszenia.php"
    ],
    "sqls": [],
    "zips": [
      "paczka_zadania.zip"
    ],
    "txts": [
      "kwerendy.txt"
    ],
    "scripts": [
      "styl.css"
    ],
    "allFiles": [
      "kwerendy.txt",
      "paczka_zadania.zip",
      "README.md",
      "styl.css",
      "zawody.html",
      "zawody.jpg",
      "zgloszenia.php"
    ],
    "fileContents": {
      "kwerendy.txt": "mansahbahsvba",
      "README.md": "# 📌 e14_lowisko (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** e14 lowisko  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** HTML5, CSS3, PHP (mysqli)\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nZadanie praktyczne z przygotowania do egzaminu zawodowego obejmujące tworzenie aplikacji internetowej, arkusza stylów CSS oraz relacyjnej bazy danych.\n\n### Główne elementy rozwiązania:\n- Opracowanie semantycznej struktury strony w standardzie HTML5.\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Oprogramowanie skryptu backendowego w PHP (mysqli) do komunikacji z bazą danych MySQL.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 🌐 **Pliki HTML:** `zawody.html`\n- 🐘 **Skrypty PHP:** `zgloszenia.php`\n- 📝 **Pliki tekstowe / Kwerendy:** `kwerendy.txt`\n- 🎨 **Style CSS:** `styl.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n3. **Uruchomienie PHP:**\n   - Skopiuj ten rozpakowany folder do katalogu `C:\\xampp\\htdocs\\e14_lowisko`.\n   - Uruchom moduł **Apache** w XAMPP.\n   - Otwórz w przeglądarce adres: `http://localhost/e14_lowisko/zgloszenia.php`.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
      "styl.css": "body{\r\n    font-family: Tahoma;\r\n    margin:0px;\r\n    \r\n}\r\n#lewy{\r\n    background-color: rosybrown;\r\n    color:white;\r\n    width:30%;\r\n    height: 200px;\r\n    float:left;\r\n}\r\n#prawy{\r\n    background-color: rosybrown;\r\n    color:white;\r\n    width:30%;\r\n    height: 200px;\r\n    float:left;\r\n}\r\n#srodek{\r\n    background-color: rosybrown;\r\n    color:white;\r\n    width:40%;\r\n    height: 200px;\r\n    text-align: center;\r\n    float:left;\r\n}\r\n#main{\r\n    background-color: wheat;\r\n    padding:50px;\r\n    width:100%;\r\n    height:auto;\r\n    float:left;\r\n    }\r\n#stopka{\r\n    clear:both;\r\n    background-color: rosybrown;\r\n    color:white;\r\n    padding:5px;\r\n    text-align: center;\r\n}\r\na{\r\n    border: 2px solid Darkred;\r\n    background-color: Salmon;\r\n    color:Darkred;\r\n    padding:20px;\r\n    line-height: 200px;\r\n}",
      "zawody.html": "<!DOCTYPE html>\r\n<html lang=\"pl\">\r\n    <head>\r\n        <meta charset=\"utf-8\">\r\n        <title>Zawody wędkarskie</title>\r\n        <link rel=\"stylesheet\" href=\"styl.css\">\r\n    </head>\r\n    <body>\r\n   <div id=\"lewy\">\r\n        <img src=\"zawody.jpg\" alt=\"zawody wedkarskie\">\r\n        </div>\r\n        <div id=\"srodek\">\r\n        <h1>Zawody wędkarskie</h1>\r\n        </div>\r\n        <div id=\"prawy\">\r\n        <a href=\"kwerendy.txt\">Pobierz plik</a>\r\n        </div>\r\n        <div id=\"main\">\r\n        <h2>Dodaj nowe zawody wedkarskie</h2>\r\n            <form method=\"POST\" action=\"zgloszenia.php\">\r\n                Łowisko:<br>\r\n            <input type=\"number\" name=\"lowisko\"><br>\r\n            Data(rrrr-mm-dd):<br>\r\n                <input type=\"text\" name=\"data\"><br>\r\n                Sędzia:<br>\r\n                <input type=\"text\" name=\"sedzia\"><br>\r\n                <input type=\"reset\" name=\"czysc\">\r\n                <input type=\"submit\" name=\"wyslij\">\r\n                \r\n            </form>\r\n            <h2>Łowiska</h2>\r\n            <ol>\r\n            <li>Zalew Wegrowski</li>\r\n                <li>Zbiornik Bukówka</li>\r\n                <li>Jeziorka Bartbetowskie</li>\r\n                <li>Warta-Obrzycko</li>\r\n            </ol>\r\n        </div>\r\n        <div id=\"stopka\">\r\n        <p>Strone przygotował:xxxxxxx</p>\r\n        </div>\r\n    </body>\r\n</html>\r\n    \r\n        ",
      "zgloszenia.php": "<?php\r\n    error_reporting(E_ALL & ~E_NOTICE & ~E_WARNING);\r\n\r\n$lowisko=$_POST['lowisko'];\r\n    $data=$_POST['data'];\r\n$sedzia=$_POST['sedzia'];\r\n$conn=mysqli_connect('localhost','root','','wedkarstwo')\r\n    or die('blad w polaczeniu');\r\n$zapytanie=\"INSERT INTO zawody_wedkarskie (id, karty_wedkarskie_id,lowisko_id,data_zawodow,sedzia) VALUES (NULL, '0', '$lowisko', '$data', '$sedzia')\";\r\n$wynik=mysqli_query($conn,$zapytanie);\r\nmysqli_close($conn);\r\n\r\n\r\n\r\n\r\n\r\n?>"
    }
  },
  {
    "id": "Kwalifikacja_E14_egz_2",
    "category": "Kwalifikacja_E14",
    "name": "egz 2",
    "title": "egz 2",
    "description": "Zadanie praktyczne z przygotowania do egzaminu zawodowego obejmujące tworzenie aplikacji internetowej, arkusza stylów CSS oraz relacyjnej bazy danych.",
    "technologies": [
      "HTML5",
      "CSS3",
      "JavaScript"
    ],
    "folder": "Kwalifikacja_E14/egz_2",
    "mainPdf": "e_14_00_praktyczny_www.pdf",
    "mainHtml": "index.html",
    "mainPhp": null,
    "mainSql": null,
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# 📌 egz_2 (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** egz 2  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** HTML5, CSS3, JavaScript\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nZadanie praktyczne z przygotowania do egzaminu zawodowego obejmujące tworzenie aplikacji internetowej, arkusza stylów CSS oraz relacyjnej bazy danych.\n\n### Główne elementy rozwiązania:\n- Opracowanie semantycznej struktury strony w standardzie HTML5.\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Implementacja logiki i obsługi zdarzeń po stronie klienta w JavaScript.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 📄 **Arkusz PDF:** `e_14_00_praktyczny_www.pdf`\n- 🌐 **Pliki HTML:** `index.html`, `terminy.html`, `uczestnicy.html`\n- 🎨 **Style CSS:** `glowny.css`, `tabela.css`\n- ⚡ **Skrypty JS:** `aktualizacja.js`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Uruchomienie strony WWW:**\n   - Kliknij dwukrotnie plik `index.html` lub przeciągnij go do dowolnej przeglądarki.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
    "pdfs": [
      "e_14_00_praktyczny_www.pdf"
    ],
    "htmls": [
      "index.html",
      "terminy.html",
      "uczestnicy.html"
    ],
    "phps": [],
    "sqls": [],
    "zips": [
      "paczka_zadania.zip"
    ],
    "txts": [],
    "scripts": [
      "aktualizacja.js",
      "glowny.css",
      "tabela.css"
    ],
    "allFiles": [
      "a.jpg",
      "aktualizacja.js",
      "e_14_00_praktyczny_www.pdf",
      "glowny.css",
      "index.html",
      "paczka_zadania.zip",
      "README.md",
      "tabela.css",
      "terminy.html",
      "uczestnicy.html",
      "w.png"
    ],
    "fileContents": {
      "aktualizacja.js": "<script type=\"text/javascript\">\r\n<!-- \r\n document.write(\"Ostatnia aktualizacja: \" + document.lastModified); \r\n -->\r\n</script>\r\n",
      "glowny.css": " body\r\n { \r\n background-color:grey;\r\n }\r\n #gora\r\n {  \r\n\r\n\t \r\n\t width:100%;\r\n\t height:150px;\r\n\t background-color:#46462f;\r\n\t margin-left:auto;\r\n\t margin-right:auto;\r\n }\r\n #caly_blok {\r\n\t width: 1200px;\r\n        font-size:24px;\r\n      }\r\n\r\n      #naglowek {\r\n\t\tpadding-top:5px;\r\n\t\tpadding-bottom:5px;\r\n        background-color:gold;\r\n        text-align:center;\r\n      }\r\n\r\n      #lewy {\r\n        float:left;\r\n        background-color:#65665c;\r\n        min-height:550px;\r\n        width:300px;\r\n      }\r\n\r\n      #prawy {\r\n\t\t  padding-top:10px;\r\n\t\t  padding-bottom:10px;\r\n        float:left;\r\n        background-color:#65665c;\r\n        min-height:530px;\r\n        width:900px;\r\n      }\r\n      #stopka {\r\n        clear:both;\r\n        background-color:gold;\r\n       text-align:center;\r\n      }\r\n\t \r\n\t ",
      "index.html": "<!DOCTYPE html>\r\n<html lang=\"pl\">\r\n  <head>\r\n    <meta charset=\"utf-8\">\r\n    <title>Strona główna</title>\r\n<link rel=\"stylesheet\" type=\"text/css\" href=\"glowny.css\" />\r\n  </head>\r\n\r\n<body>\r\n\r\n  <div id=\"caly_blok\">\r\n  <div id=\"gora\"> <img style=\"padding:10px\" src=\"w.png\">\r\n  </div>\r\n    <div id=\"naglowek\">\r\n\t<marquee>Strona internetowa koła fizycznego</marquee>\r\n\t</div>\r\n\r\n    <div id=\"lewy\">\r\n  \r\n\t   <p> <a href=\"index.html\"> Strona główna </a></p>\r\n\t    <p> <a href=\"terminy.html\"> Terminy Spotkań </a> </p>\r\n\t\t<p><a href=\"mailto:fizyk@wp.pl\">Kontakt</a> </p>\r\n    </div>\r\n\r\n</script>\r\n    <div id=\"prawy\">\r\n      <img style=\"float:right\"src=\"a.jpg\">\r\n    </div>\r\n\r\n    <div id=\"stopka\">\r\n\t<script type=\"text/javascript\" >\r\n<!-- \r\n document.write(\"Ostatnia aktualizacja: \" + document.lastModified); \r\n -->\r\n</script>\r\n\r\n </div>\r\n  </div>\r\n\r\n</body>\r\n</html>\r\n \r\n \r\n ",
      "README.md": "# 📌 egz_2 (E.14 (Tworzenie aplikacji internetowych i baz danych))\n\n> **Temat zadania:** egz 2  \n> **Kwalifikacja:** E.14 (Tworzenie aplikacji internetowych i baz danych)  \n> **Technologie:** HTML5, CSS3, JavaScript\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nZadanie praktyczne z przygotowania do egzaminu zawodowego obejmujące tworzenie aplikacji internetowej, arkusza stylów CSS oraz relacyjnej bazy danych.\n\n### Główne elementy rozwiązania:\n- Opracowanie semantycznej struktury strony w standardzie HTML5.\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Implementacja logiki i obsługi zdarzeń po stronie klienta w JavaScript.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 📄 **Arkusz PDF:** `e_14_00_praktyczny_www.pdf`\n- 🌐 **Pliki HTML:** `index.html`, `terminy.html`, `uczestnicy.html`\n- 🎨 **Style CSS:** `glowny.css`, `tabela.css`\n- ⚡ **Skrypty JS:** `aktualizacja.js`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Uruchomienie strony WWW:**\n   - Kliknij dwukrotnie plik `index.html` lub przeciągnij go do dowolnej przeglądarki.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
      "tabela.css": "#a1\r\n{ \r\ncolor:red;\r\n}",
      "terminy.html": "<!DOCTYPE html>\r\n<html lang=\"pl\">\r\n  <head>\r\n    <meta charset=\"utf-8\">\r\n    <title>Strona główna</title>\r\n<link rel=\"stylesheet\" type=\"text/css\" href=\"glowny.css\" />\r\n<link rel=\"stylesheet\" type=\"text/css\" href=\"tabela.css\" />\r\n  </head>\r\n\r\n<body>\r\n\r\n  <div id=\"caly_blok\">\r\n  <div id=\"gora\"> <img style=\"padding:10px\" src=\"w.png\">\r\n  </div>\r\n    <div id=\"naglowek\">\r\n\t<marquee>Strona internetowa koła fizycznego</marquee>\r\n\t</div>\r\n\r\n    <div id=\"lewy\">\r\n  \r\n\t   <p> <a href=\"index.html\"> Strona główna </a></p>\r\n\t    <p> <a href=\"terminy.html\"> Terminy Spotkań </a> </p>\r\n\t\t<p><a href=\"mailto:fizyk@wp.pl\">Kontakt</a> </p>\r\n    </div>\r\n\r\n\r\n    <div id=\"prawy\">\r\n    <table border=1px;>\r\n\t<tr>\r\n\t<th>Rok szkolny</th>\r\n\t<th>Miesiąc</th>\r\n\t<th>Dzień</th>\r\n\t<th>Godzina</th>\r\n\t<th>Sala</th>\r\n\t</tr>\r\n\t<tr>\r\n\t<td rowspan=2>2013-2014</td>\r\n\t<td> wrzesień-styczeń </td>\r\n\t<td>poniedziałek</td>\r\n\t<td>8:00</td>\r\n\t<td rowspan=2>212</td>\r\n\t</tr>\r\n\t<tr> \r\n\t<td> luty-czerwiec</td>\r\n\t<td> środa </td>\r\n\t<td> 14.20</td>\r\n\t</tr>\r\n\t</table>\r\n\t<a id=\"a1\" href=\"uczestnicy.html\">Aktualni uczestnicy</a>\r\n    </div>\r\n\r\n    <div id=\"stopka\">\r\n\t<script type=\"text/javascript\" >\r\n<!-- \r\n document.write(\"Ostatnia aktualizacja: \" + document.lastModified); \r\n -->\r\n</script>\r\n\r\n </div>\r\n  </div>\r\n\r\n</body>\r\n</html>\r\n \r\n ",
      "uczestnicy.html": "<!DOCTYPE html>\r\n<html lang=\"pl\">\r\n  <head>\r\n    <meta charset=\"utf-8\">\r\n    <title>Strona główna</title>\r\n<link rel=\"stylesheet\" type=\"text/css\" href=\"glowny.css\" />\r\n  </head>\r\n\r\n<body>\r\n\r\n  <div id=\"caly_blok\">\r\n  <div id=\"gora\"> <img style=\"padding:10px\" src=\"w.png\">\r\n  </div>\r\n    <div id=\"naglowek\">\r\n\t<marquee>Strona internetowa koła fizycznego</marquee>\r\n\t</div>\r\n\r\n    <div id=\"lewy\">\r\n  \r\n\t   <p> <a href=\"index.html\"> Strona główna </a></p>\r\n\t    <p> <a href=\"terminy.html\"> Terminy Spotkań </a> </p>\r\n\t\t<p><a href=\"mailto:fizyk@wp.pl\">Kontakt</a> </p>\r\n    </div>\r\n\r\n\r\n    <div id=\"prawy\">\r\n    <table border=1px;>\r\n\t<tr>\r\n\t<th>Rok szkolny</th>\r\n\t<th>Miesiąc</th>\r\n\t<th>Dzień</th>\r\n\t<th>Godzina</th>\r\n\t<th>Sala</th>\r\n\t</tr>\r\n\t<tr>\r\n\t<td rowspan=2>2013-2014</td>\r\n\t<td> wrzesień-styczeń </td>\r\n\t<td>poniedziałek</td>\r\n\t<td>8:00</td>\r\n\t<td rowspan=2>212</td>\r\n\t</tr>\r\n\t<tr> \r\n\t<td> luty-czerwiec</td>\r\n\t<td> środa </td>\r\n\t<td> 14.20</td>\r\n\t</tr>\r\n\t</table>\r\n\t<a style=\"color:red\" href=\"uczestnicy.html\">Aktualni uczestnicy</a>\r\n    </div>\r\n\r\n    <div id=\"stopka\">\r\n\t<script type=\"text/javascript\" >\r\n<!-- \r\n document.write(\"Ostatnia aktualizacja: \" + document.lastModified); \r\n -->\r\n</script>\r\n\r\n </div>\r\n  </div>\r\n\r\n</body>\r\n</html>\r\n \r\n "
    }
  },
  {
    "id": "Kwalifikacja_EE09_ee09_2019",
    "category": "Kwalifikacja_EE09",
    "name": "ee09 2019",
    "title": "ee09 2019",
    "description": "Zadanie praktyczne z przygotowania do egzaminu zawodowego obejmujące tworzenie aplikacji internetowej, arkusza stylów CSS oraz relacyjnej bazy danych.",
    "technologies": [
      "CSS3",
      "PHP (mysqli)",
      "MySQL"
    ],
    "folder": "Kwalifikacja_EE09/ee09_2019",
    "mainPdf": null,
    "mainHtml": null,
    "mainPhp": "PESEL/connect.php",
    "mainSql": "baza.sql",
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# 📌 ee09_2019 (EE.09 (Programowanie i administrowanie stronami oraz bazami))\n\n> **Temat zadania:** ee09 2019  \n> **Kwalifikacja:** EE.09 (Programowanie i administrowanie stronami oraz bazami)  \n> **Technologie:** CSS3, PHP (mysqli), MySQL\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nZadanie praktyczne z przygotowania do egzaminu zawodowego obejmujące tworzenie aplikacji internetowej, arkusza stylów CSS oraz relacyjnej bazy danych.\n\n### Główne elementy rozwiązania:\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Utworzenie tabel, relacji oraz przygotowanie poprawnych kwerend SQL (SELECT, INSERT, UPDATE).\n- Oprogramowanie skryptu backendowego w PHP (mysqli) do komunikacji z bazą danych MySQL.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 🐘 **Skrypty PHP:** `PESEL/connect.php`, `PESEL/wedkuj.php`\n- 💾 **Baza / Kwerendy SQL:** `baza.sql`\n- 📝 **Pliki tekstowe / Kwerendy:** `PESEL/kwerendy.txt`\n- 🎨 **Style CSS:** `PESEL/styl_1.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Import bazy danych:**\n   - Uruchom lokalny serwer MySQL (np. w panelu XAMPP).\n   - Otwórz w przeglądarce `http://localhost/phpmyadmin`.\n   - Utwórz nową bazę danych i zaimportuj plik SQL (`baza.sql`).\n\n3. **Uruchomienie PHP:**\n   - Skopiuj ten rozpakowany folder do katalogu `C:\\xampp\\htdocs\\ee09_2019`.\n   - Uruchom moduł **Apache** w XAMPP.\n   - Otwórz w przeglądarce adres: `http://localhost/ee09_2019/connect.php`.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
    "pdfs": [],
    "htmls": [],
    "phps": [
      "PESEL/connect.php",
      "PESEL/wedkuj.php"
    ],
    "sqls": [
      "baza.sql"
    ],
    "zips": [
      "paczka_zadania.zip",
      "PESEL/paczka_zadania.zip"
    ],
    "txts": [
      "PESEL/kwerendy.txt"
    ],
    "scripts": [
      "PESEL/styl_1.css"
    ],
    "allFiles": [
      "baza.sql",
      "paczka_zadania.zip",
      "PESEL/connect.php",
      "PESEL/kw1.PNG",
      "PESEL/kw2.PNG",
      "PESEL/kw3.PNG",
      "PESEL/kw4.PNG",
      "PESEL/kwerendy.txt",
      "PESEL/paczka_zadania.zip",
      "PESEL/Przechwytywanie.PNG",
      "PESEL/README.md",
      "PESEL/ryba1.jpg",
      "PESEL/styl_1.css",
      "PESEL/wedkuj.php",
      "README.md"
    ],
    "fileContents": {
      "baza.sql": "-- phpMyAdmin SQL Dump\n-- version 4.7.4\n-- https://www.phpmyadmin.net/\n--\n-- Host: 127.0.0.1\n-- Czas generowania: 19 Lut 2018, 10:39\n-- Wersja serwera: 10.1.28-MariaDB\n-- Wersja PHP: 7.1.10\n\nSET SQL_MODE = \"NO_AUTO_VALUE_ON_ZERO\";\nSET AUTOCOMMIT = 0;\nSTART TRANSACTION;\nSET time_zone = \"+00:00\";\n\n\n/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;\n/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;\n/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;\n/*!40101 SET NAMES utf8mb4 */;\n\n--\n-- Baza danych: `wedkowanie`\n--\n\n-- --------------------------------------------------------\n\n--\n-- Struktura tabeli dla tabeli `lowisko`\n--\n\nCREATE TABLE `lowisko` (\n  `id` int(10) UNSIGNED NOT NULL,\n  `Ryby_id` int(10) UNSIGNED NOT NULL,\n  `akwen` text,\n  `wojewodztwo` text,\n  `rodzaj` int(10) UNSIGNED DEFAULT NULL\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\n\n--\n-- Zrzut danych tabeli `lowisko`\n--\n\nINSERT INTO `lowisko` (`id`, `Ryby_id`, `akwen`, `wojewodztwo`, `rodzaj`) VALUES\n(1, 2, 'Zalew Wegrowski', 'Mazowieckie', 4),\n(2, 3, 'Zbiornik Bukowka', 'Dolnoslaskie', 2),\n(3, 2, 'Jeziorko Bartbetowskie', 'Warminsko-Mazurskie', 2),\n(4, 1, 'Warta-Obrzycko', 'Wielkopolskie', 3),\n(5, 2, 'Stawy Milkow', 'Podkarpackie', 5),\n(6, 7, 'Przemsza k. Okradzinowa', 'Slaskie', 3);\n\n-- --------------------------------------------------------\n\n--\n-- Struktura tabeli dla tabeli `okres_ochronny`\n--\n\nCREATE TABLE `okres_ochronny` (\n  `id` int(10) UNSIGNED NOT NULL,\n  `Ryby_id` int(10) UNSIGNED NOT NULL,\n  `od_miesiaca` int(10) UNSIGNED DEFAULT NULL,\n  `do_miesiaca` int(10) UNSIGNED DEFAULT NULL,\n  `wymiar_ochronny` int(10) UNSIGNED DEFAULT NULL\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\n\n--\n-- Zrzut danych tabeli `okres_ochronny`\n--\n\nINSERT INTO `okres_ochronny` (`id`, `Ryby_id`, `od_miesiaca`, `do_miesiaca`, `wymiar_ochronny`) VALUES\n(1, 1, 1, 4, 50),\n(2, 2, 0, 0, 30),\n(3, 3, 1, 5, 50),\n(4, 4, 0, 0, 15),\n(5, 5, 11, 6, 70),\n(6, 6, 0, 0, 0),\n(7, 7, 0, 0, 0),\n(8, 8, 0, 0, 25);\n\n-- --------------------------------------------------------\n\n--\n-- Struktura tabeli dla tabeli `ryby`\n--\n\nCREATE TABLE `ryby` (\n  `id` int(10) UNSIGNED NOT NULL,\n  `nazwa` text,\n  `wystepowanie` text,\n  `styl_zycia` int(11) DEFAULT NULL\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\n\n--\n-- Zrzut danych tabeli `ryby`\n--\n\nINSERT INTO `ryby` (`id`, `nazwa`, `wystepowanie`, `styl_zycia`) VALUES\n(1, 'Szczupak', 'stawy, rzeki', 1),\n(2, 'Karp', 'stawy, jeziora', 2),\n(3, 'Sandacz', 'stawy, jeziora, rzeki', 1),\n(4, 'Okon', 'rzeki', 1),\n(5, 'Sum', 'jeziora, rzeki', 1),\n(6, 'Dorsz', 'morza, oceany', 1),\n(7, 'Leszcz', 'jeziora', 2),\n(8, 'Lin', 'jeziora', 2);\n\n-- --------------------------------------------------------\n\n--\n-- Struktura tabeli dla tabeli `samochody`\n--\n\nCREATE TABLE `samochody` (\n  `id` int(10) UNSIGNED NOT NULL,\n  `marka` text,\n  `model` text,\n  `rocznik` year(4) DEFAULT NULL,\n  `kolor` text,\n  `stan` text\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\n\n--\n-- Zrzut danych tabeli `samochody`\n--\n\nINSERT INTO `samochody` (`id`, `marka`, `model`, `rocznik`, `kolor`, `stan`) VALUES\n(1, 'Fiat', 'Punto', 2016, 'czerwony', 'bardzo dobry'),\n(2, 'Fiat', 'Punto', 2002, 'czerwony', 'dobry'),\n(3, 'Fiat', 'Punto', 2007, 'niebieski', 'bardzo bobry'),\n(4, 'Opel', 'Corsa', 2016, 'grafitowy', 'bardzo dobry'),\n(5, 'Opel', 'Astra', 2003, 'niebieski', 'porysowany lakier'),\n(6, 'Toyota', 'Corolla', 2016, 'czerwony', 'bardzo dobry'),\n(7, 'Toyota', 'Corolla', 2014, 'szary', 'dobry'),\n(8, 'Toyota', 'Yaris', 2004, 'granatowy', 'dobry');\n\n-- --------------------------------------------------------\n\n--\n-- Struktura tabeli dla tabeli `typy`\n--\n\nCREATE TABLE `typy` (\n  `id` int(10) UNSIGNED NOT NULL,\n  `kategoria` text\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\n\n--\n-- Zrzut danych tabeli `typy`\n--\n\nINSERT INTO `typy` (`id`, `kategoria`) VALUES\n(1, 'Procesor'),\n(2, 'RAM'),\n(5, 'karta graficzna'),\n(6, 'HDD');\n\n-- --------------------------------------------------------\n\n--\n-- Struktura tabeli dla tabeli `uczniowie`\n--\n\nCREATE TABLE `uczniowie` (\n  `imie` text,\n  `nazwisko` text,\n  `wiek` int(11) DEFAULT NULL\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\n\n--\n-- Zrzut danych tabeli `uczniowie`\n--\n\nINSERT INTO `uczniowie` (`imie`, `nazwisko`, `wiek`) VALUES\n('Kamil', 'Ryba', 11),\n('Karolina', 'Witecka', 8),\n('Karol', 'Rybacki', 9),\n('Marina', 'Damiencka', 9);\n\n-- --------------------------------------------------------\n\n--\n-- Struktura tabeli dla tabeli `uzytkownik`\n--\n\nCREATE TABLE `uzytkownik` (\n  `id` int(10) UNSIGNED NOT NULL,\n  `imie` text,\n  `nazwisko` text,\n  `telefon` text,\n  `email` text\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\n\n--\n-- Zrzut danych tabeli `uzytkownik`\n--\n\nINSERT INTO `uzytkownik` (`id`, `imie`, `nazwisko`, `telefon`, `email`) VALUES\n(1, 'Anna', 'Kowalska', '601601601', 'anna@poczta.pl'),\n(2, 'Jan', 'Nowak', '608608608', 'jan@poczta.pl'),\n(3, 'Jolanta', 'Jasny', '606606606', 'jolanta@poczta.pl'),\n(4, 'qqq', 'www', '345', 'dsfsdklfs@daskl');\n\n-- --------------------------------------------------------\n\n--\n-- Struktura tabeli dla tabeli `wyniki`\n--\n\nCREATE TABLE `wyniki` (\n  `id` int(10) UNSIGNED NOT NULL,\n  `dyscyplina_id` int(10) UNSIGNED NOT NULL,\n  `sportowiec_id` int(10) UNSIGNED NOT NULL,\n  `wynik` decimal(5,2) DEFAULT NULL,\n  `dataUstanowienia` date DEFAULT NULL\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\n\n--\n-- Zrzut danych tabeli `wyniki`\n--\n\nINSERT INTO `wyniki` (`id`, `dyscyplina_id`, `sportowiec_id`, `wynik`, `dataUstanowienia`) VALUES\n(1, 1, 1, '12.40', '2015-10-14'),\n(2, 1, 1, '12.00', '2015-10-06'),\n(3, 1, 2, '11.80', '2015-10-14'),\n(4, 1, 2, '11.90', '2015-10-06'),\n(5, 1, 3, '11.50', '2015-10-14'),\n(6, 1, 3, '11.56', '2015-10-06'),\n(7, 1, 4, '11.70', '2015-10-14'),\n(8, 1, 4, '11.67', '2015-10-06'),\n(9, 1, 5, '11.30', '2015-10-14'),\n(10, 1, 5, '11.52', '2015-10-06'),\n(11, 1, 6, '12.10', '2015-10-14'),\n(12, 1, 6, '12.00', '2015-10-06'),\n(13, 3, 1, '63.00', '2015-11-11'),\n(14, 3, 1, '63.60', '2015-10-13'),\n(15, 3, 2, '64.00', '2015-11-11'),\n(16, 3, 2, '63.60', '2015-10-13'),\n(17, 3, 3, '60.00', '2015-11-11'),\n(18, 3, 3, '61.60', '2015-10-13'),\n(19, 3, 4, '63.50', '2015-11-11'),\n(20, 3, 4, '63.60', '2015-10-13'),\n(21, 3, 5, '70.00', '2015-10-07'),\n(22, 3, 6, '68.00', '2015-10-07');\n\n-- --------------------------------------------------------\n\n--\n-- Struktura tabeli dla tabeli `zamowienia`\n--\n\nCREATE TABLE `zamowienia` (\n  `id` int(10) UNSIGNED NOT NULL,\n  `Samochody_id` int(10) UNSIGNED NOT NULL,\n  `Klient` text,\n  `telefon` text,\n  `dataZam` date DEFAULT NULL\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\n\n--\n-- Zrzut danych tabeli `zamowienia`\n--\n\nINSERT INTO `zamowienia` (`id`, `Samochody_id`, `Klient`, `telefon`, `dataZam`) VALUES\n(1, 3, 'Anna Kowalska', '111222333', '2016-02-15'),\n(2, 6, 'Jan Nowakowski', '222111333', '2016-02-15'),\n(3, 8, 'Marcin Kolwal', '333111222', '2016-02-15');\n\n--\n-- Indeksy dla zrzutów tabel\n--\n\n--\n-- Indexes for table `lowisko`\n--\nALTER TABLE `lowisko`\n  ADD PRIMARY KEY (`id`);\n\n--\n-- Indexes for table `okres_ochronny`\n--\nALTER TABLE `okres_ochronny`\n  ADD PRIMARY KEY (`id`);\n\n--\n-- Indexes for table `ryby`\n--\nALTER TABLE `ryby`\n  ADD PRIMARY KEY (`id`);\n\n--\n-- Indexes for table `samochody`\n--\nALTER TABLE `samochody`\n  ADD PRIMARY KEY (`id`);\n\n--\n-- Indexes for table `typy`\n--\nALTER TABLE `typy`\n  ADD PRIMARY KEY (`id`);\n\n--\n-- Indexes for table `uzytkownik`\n--\nALTER TABLE `uzytkownik`\n  ADD PRIMARY KEY (`id`);\n\n--\n-- Indexes for table `wyniki`\n--\nALTER TABLE `wyniki`\n  ADD PRIMARY KEY (`id`);\n\n--\n-- Indexes for table `zamowienia`\n--\nALTER TABLE `zamowienia`\n  ADD PRIMARY KEY (`id`);\n\n--\n-- AUTO_INCREMENT for dumped tables\n--\n\n--\n-- AUTO_INCREMENT dla tabeli `lowisko`\n--\nALTER TABLE `lowisko`\n  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;\n\n--\n-- AUTO_INCREMENT dla tabeli `okres_ochronny`\n--\nALTER TABLE `okres_ochronny`\n  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;\n\n--\n-- AUTO_INCREMENT dla tabeli `ryby`\n--\nALTER TABLE `ryby`\n  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;\n\n--\n-- AUTO_INCREMENT dla tabeli `samochody`\n--\nALTER TABLE `samochody`\n  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;\n\n--\n-- AUTO_INCREMENT dla tabeli `typy`\n--\nALTER TABLE `typy`\n  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;\n\n--\n-- AUTO_INCREMENT dla tabeli `uzytkownik`\n--\nALTER TABLE `uzytkownik`\n  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;\n\n--\n-- AUTO_INCREMENT dla tabeli `wyniki`\n--\nALTER TABLE `wyniki`\n  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;\n\n--\n-- AUTO_INCREMENT dla tabeli `zamowienia`\n--\nALTER TABLE `zamowienia`\n  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;\nCOMMIT;\n\n/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;\n/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;\n/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;\n",
      "PESEL/connect.php": "<?php\r\n    error_reporting(E_ALL & ~E_NOTICE & ~E_WARNING);\r\n \r\n$servername=\"localhost\";\r\n$username=\"root\";\r\n$password='';\r\n$db=\"wedkowanie\";\r\n\r\n$conn = new mysqli($servername, $username, $password, $db);\r\nif($conn->connect_error==true){\r\n\techo\"blad\";\r\n}\r\n?>",
      "PESEL/kwerendy.txt": "1. SELECT nazwa, styl_zycia from ryby\r\n2. SELECT Ryby_id, wymiar_ochronny FROM `okres_ochronny` WHERE wymiar_ochronny<50\r\n3. SELECT r.nazwa, l.akwen, l.wojewodztwo FROM ryby r JOIN lowisko l ON r.id=l.id where rodzaj=2\r\n4. ALTER TABLE `ryby` ADD `dobowy_limit` INT NOT NULL AFTER `styl_zycia`;",
      "PESEL/README.md": "# 📌 ee09_2019 - PESEL (EE.09 (Programowanie i administrowanie stronami oraz bazami))\n\n> **Temat zadania:** Walidacja i Baza Danych PESEL  \n> **Kwalifikacja:** EE.09 (Programowanie i administrowanie stronami oraz bazami)  \n> **Technologie:** HTML5, CSS3, JavaScript, PHP, MySQL\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nAplikacja weryfikująca poprawność numeru PESEL, wyznaczająca płeć i datę urodzenia oraz baza ewidencji ludności.\n\n### Główne elementy rozwiązania:\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Oprogramowanie skryptu backendowego w PHP (mysqli) do komunikacji z bazą danych MySQL.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 🐘 **Skrypty PHP:** `connect.php`, `wedkuj.php`\n- 📝 **Pliki tekstowe / Kwerendy:** `kwerendy.txt`\n- 🎨 **Style CSS:** `styl_1.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n3. **Uruchomienie PHP:**\n   - Skopiuj ten rozpakowany folder do katalogu `C:\\xampp\\htdocs\\PESEL`.\n   - Uruchom moduł **Apache** w XAMPP.\n   - Otwórz w przeglądarce adres: `http://localhost/PESEL/connect.php`.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
      "PESEL/styl_1.css": "\r\nbody {\r\n  font-family: \"Verdana\";\r\n margin:0;\r\n}\r\n#baner {\r\n\theight:100px;\r\n\twidth:100%;\r\n\tbackground-color: #4682B4;\r\n\t color:white;\r\n\t font-size:120%;\r\n\t text-align:center;\r\n\t padding:20px;\r\n}\r\n#lewy\r\n{\r\n\theight:500px;\r\n\twidth:40%;\r\n\tbackground-color: #40E0D0;\r\n\tfloat:left;\r\n}\r\n#prawy\r\n{\r\n\theight:500px;\r\n\twidth:60%;\r\n\tbackground-color: #40E0D0;\r\n\tfloat:left;\r\n}\r\n#stopka\r\n {\r\n\t \t \r\n\t\r\n\twidth:100%;\r\n\tbackground-color: #4682B4;\r\n\tclear:both;\r\n\t color:white;\r\n\t  font-size:120%;\r\n\t   text-align:center;\r\n\t   padding:20px;\r\n}",
      "PESEL/wedkuj.php": "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n<link rel=\"stylesheet\" type=\"text/css\" href=\"styl_1.css\" />\r\n<title>Wędkujemy</title>\r\n</head>\r\n<body>\r\n<div id=\"baner\"> \r\n <h1> Portal dla wędkarzy </h1> \r\n</div>\r\n<div id=\"lewy\">\r\n<h2> Ryby drapieżne naszych wód </h2>\r\n<?php\r\n    error_reporting(E_ALL & ~E_NOTICE & ~E_WARNING);\r\n\r\nrequire_once(\"connect.php\");\r\n$query=\"select nazwa,wystepowanie from ryby\";\r\n$result=$conn->query($query);\r\n\r\nif ($result->num_rows>0){\r\necho \"<ul>\";\r\nforeach ($result as $row){\r\necho \"<li>\".$row['nazwa'].\" wystepowanie:\".$row['wystepowanie'].\"</li>\";\r\n}\r\necho \"</ul>\";\r\n}\r\n$conn->close();\r\n?>\r\n</div>\r\n<div id=\"prawy\">\r\n<img src=\"ryba1.jpg\"  alt=\"sum\" style=\"padding:5px; margin:10px; border:solid #000080 1px \">\r\n<br><a href=\"kwerendy.txt\">Pobierz kwerendy</a>\r\n</div>\r\n\r\n\r\n<div id=\"stopka\">\r\nStronę wykonał: 0000000000000\r\n</div>\r\n</body>\r\n</html> \r\n",
      "README.md": "# 📌 ee09_2019 (EE.09 (Programowanie i administrowanie stronami oraz bazami))\n\n> **Temat zadania:** ee09 2019  \n> **Kwalifikacja:** EE.09 (Programowanie i administrowanie stronami oraz bazami)  \n> **Technologie:** CSS3, PHP (mysqli), MySQL\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nZadanie praktyczne z przygotowania do egzaminu zawodowego obejmujące tworzenie aplikacji internetowej, arkusza stylów CSS oraz relacyjnej bazy danych.\n\n### Główne elementy rozwiązania:\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Utworzenie tabel, relacji oraz przygotowanie poprawnych kwerend SQL (SELECT, INSERT, UPDATE).\n- Oprogramowanie skryptu backendowego w PHP (mysqli) do komunikacji z bazą danych MySQL.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 🐘 **Skrypty PHP:** `PESEL/connect.php`, `PESEL/wedkuj.php`\n- 💾 **Baza / Kwerendy SQL:** `baza.sql`\n- 📝 **Pliki tekstowe / Kwerendy:** `PESEL/kwerendy.txt`\n- 🎨 **Style CSS:** `PESEL/styl_1.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Import bazy danych:**\n   - Uruchom lokalny serwer MySQL (np. w panelu XAMPP).\n   - Otwórz w przeglądarce `http://localhost/phpmyadmin`.\n   - Utwórz nową bazę danych i zaimportuj plik SQL (`baza.sql`).\n\n3. **Uruchomienie PHP:**\n   - Skopiuj ten rozpakowany folder do katalogu `C:\\xampp\\htdocs\\ee09_2019`.\n   - Uruchom moduł **Apache** w XAMPP.\n   - Otwórz w przeglądarce adres: `http://localhost/ee09_2019/connect.php`.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n"
    }
  },
  {
    "id": "Kwalifikacja_EE09_ee09_2019_PESEL",
    "category": "Kwalifikacja_EE09",
    "name": "ee09 2019 — PESEL",
    "title": "Walidacja i Baza Danych PESEL",
    "description": "Aplikacja weryfikująca poprawność numeru PESEL, wyznaczająca płeć i datę urodzenia oraz baza ewidencji ludności.",
    "technologies": [
      "HTML5",
      "CSS3",
      "JavaScript",
      "PHP",
      "MySQL"
    ],
    "folder": "Kwalifikacja_EE09/ee09_2019/PESEL",
    "mainPdf": null,
    "mainHtml": null,
    "mainPhp": "connect.php",
    "mainSql": null,
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# 📌 ee09_2019 - PESEL (EE.09 (Programowanie i administrowanie stronami oraz bazami))\n\n> **Temat zadania:** Walidacja i Baza Danych PESEL  \n> **Kwalifikacja:** EE.09 (Programowanie i administrowanie stronami oraz bazami)  \n> **Technologie:** HTML5, CSS3, JavaScript, PHP, MySQL\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nAplikacja weryfikująca poprawność numeru PESEL, wyznaczająca płeć i datę urodzenia oraz baza ewidencji ludności.\n\n### Główne elementy rozwiązania:\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Oprogramowanie skryptu backendowego w PHP (mysqli) do komunikacji z bazą danych MySQL.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 🐘 **Skrypty PHP:** `connect.php`, `wedkuj.php`\n- 📝 **Pliki tekstowe / Kwerendy:** `kwerendy.txt`\n- 🎨 **Style CSS:** `styl_1.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n3. **Uruchomienie PHP:**\n   - Skopiuj ten rozpakowany folder do katalogu `C:\\xampp\\htdocs\\PESEL`.\n   - Uruchom moduł **Apache** w XAMPP.\n   - Otwórz w przeglądarce adres: `http://localhost/PESEL/connect.php`.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
    "pdfs": [],
    "htmls": [],
    "phps": [
      "connect.php",
      "wedkuj.php"
    ],
    "sqls": [],
    "zips": [
      "paczka_zadania.zip"
    ],
    "txts": [
      "kwerendy.txt"
    ],
    "scripts": [
      "styl_1.css"
    ],
    "allFiles": [
      "connect.php",
      "kw1.PNG",
      "kw2.PNG",
      "kw3.PNG",
      "kw4.PNG",
      "kwerendy.txt",
      "paczka_zadania.zip",
      "Przechwytywanie.PNG",
      "README.md",
      "ryba1.jpg",
      "styl_1.css",
      "wedkuj.php"
    ],
    "fileContents": {
      "connect.php": "<?php\r\n    error_reporting(E_ALL & ~E_NOTICE & ~E_WARNING);\r\n \r\n$servername=\"localhost\";\r\n$username=\"root\";\r\n$password='';\r\n$db=\"wedkowanie\";\r\n\r\n$conn = new mysqli($servername, $username, $password, $db);\r\nif($conn->connect_error==true){\r\n\techo\"blad\";\r\n}\r\n?>",
      "kwerendy.txt": "1. SELECT nazwa, styl_zycia from ryby\r\n2. SELECT Ryby_id, wymiar_ochronny FROM `okres_ochronny` WHERE wymiar_ochronny<50\r\n3. SELECT r.nazwa, l.akwen, l.wojewodztwo FROM ryby r JOIN lowisko l ON r.id=l.id where rodzaj=2\r\n4. ALTER TABLE `ryby` ADD `dobowy_limit` INT NOT NULL AFTER `styl_zycia`;",
      "README.md": "# 📌 ee09_2019 - PESEL (EE.09 (Programowanie i administrowanie stronami oraz bazami))\n\n> **Temat zadania:** Walidacja i Baza Danych PESEL  \n> **Kwalifikacja:** EE.09 (Programowanie i administrowanie stronami oraz bazami)  \n> **Technologie:** HTML5, CSS3, JavaScript, PHP, MySQL\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nAplikacja weryfikująca poprawność numeru PESEL, wyznaczająca płeć i datę urodzenia oraz baza ewidencji ludności.\n\n### Główne elementy rozwiązania:\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Oprogramowanie skryptu backendowego w PHP (mysqli) do komunikacji z bazą danych MySQL.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 🐘 **Skrypty PHP:** `connect.php`, `wedkuj.php`\n- 📝 **Pliki tekstowe / Kwerendy:** `kwerendy.txt`\n- 🎨 **Style CSS:** `styl_1.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n3. **Uruchomienie PHP:**\n   - Skopiuj ten rozpakowany folder do katalogu `C:\\xampp\\htdocs\\PESEL`.\n   - Uruchom moduł **Apache** w XAMPP.\n   - Otwórz w przeglądarce adres: `http://localhost/PESEL/connect.php`.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
      "styl_1.css": "\r\nbody {\r\n  font-family: \"Verdana\";\r\n margin:0;\r\n}\r\n#baner {\r\n\theight:100px;\r\n\twidth:100%;\r\n\tbackground-color: #4682B4;\r\n\t color:white;\r\n\t font-size:120%;\r\n\t text-align:center;\r\n\t padding:20px;\r\n}\r\n#lewy\r\n{\r\n\theight:500px;\r\n\twidth:40%;\r\n\tbackground-color: #40E0D0;\r\n\tfloat:left;\r\n}\r\n#prawy\r\n{\r\n\theight:500px;\r\n\twidth:60%;\r\n\tbackground-color: #40E0D0;\r\n\tfloat:left;\r\n}\r\n#stopka\r\n {\r\n\t \t \r\n\t\r\n\twidth:100%;\r\n\tbackground-color: #4682B4;\r\n\tclear:both;\r\n\t color:white;\r\n\t  font-size:120%;\r\n\t   text-align:center;\r\n\t   padding:20px;\r\n}",
      "wedkuj.php": "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n<link rel=\"stylesheet\" type=\"text/css\" href=\"styl_1.css\" />\r\n<title>Wędkujemy</title>\r\n</head>\r\n<body>\r\n<div id=\"baner\"> \r\n <h1> Portal dla wędkarzy </h1> \r\n</div>\r\n<div id=\"lewy\">\r\n<h2> Ryby drapieżne naszych wód </h2>\r\n<?php\r\n    error_reporting(E_ALL & ~E_NOTICE & ~E_WARNING);\r\n\r\nrequire_once(\"connect.php\");\r\n$query=\"select nazwa,wystepowanie from ryby\";\r\n$result=$conn->query($query);\r\n\r\nif ($result->num_rows>0){\r\necho \"<ul>\";\r\nforeach ($result as $row){\r\necho \"<li>\".$row['nazwa'].\" wystepowanie:\".$row['wystepowanie'].\"</li>\";\r\n}\r\necho \"</ul>\";\r\n}\r\n$conn->close();\r\n?>\r\n</div>\r\n<div id=\"prawy\">\r\n<img src=\"ryba1.jpg\"  alt=\"sum\" style=\"padding:5px; margin:10px; border:solid #000080 1px \">\r\n<br><a href=\"kwerendy.txt\">Pobierz kwerendy</a>\r\n</div>\r\n\r\n\r\n<div id=\"stopka\">\r\nStronę wykonał: 0000000000000\r\n</div>\r\n</body>\r\n</html> \r\n"
    }
  },
  {
    "id": "Kwalifikacja_EE09_ee09_ciag",
    "category": "Kwalifikacja_EE09",
    "name": "ee09 ciag",
    "title": "Generator Ciągów Liczbowych",
    "description": "Aplikacja generująca wyrazy ciągu arytmetycznego lub geometrycznego z walidacją danych wejściowych w JavaScript.",
    "technologies": [
      "HTML5",
      "CSS3",
      "JavaScript"
    ],
    "folder": "Kwalifikacja_EE09/ee09_ciag",
    "mainPdf": null,
    "mainHtml": "fib.html",
    "mainPhp": null,
    "mainSql": null,
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# 📌 ee09_ciag (EE.09 (Programowanie i administrowanie stronami oraz bazami))\n\n> **Temat zadania:** Generator Ciągów Liczbowych  \n> **Kwalifikacja:** EE.09 (Programowanie i administrowanie stronami oraz bazami)  \n> **Technologie:** HTML5, CSS3, JavaScript\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nAplikacja generująca wyrazy ciągu arytmetycznego lub geometrycznego z walidacją danych wejściowych w JavaScript.\n\n### Główne elementy rozwiązania:\n- Opracowanie semantycznej struktury strony w standardzie HTML5.\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 🌐 **Pliki HTML:** `fib.html`, `liczby.html`\n- 📝 **Pliki tekstowe / Kwerendy:** `kwerendy.txt`\n- 🎨 **Style CSS:** `styl2.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Uruchomienie strony WWW:**\n   - Kliknij dwukrotnie plik `fib.html` lub przeciągnij go do dowolnej przeglądarki.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
    "pdfs": [],
    "htmls": [
      "fib.html",
      "liczby.html"
    ],
    "phps": [],
    "sqls": [],
    "zips": [
      "paczka_zadania.zip"
    ],
    "txts": [
      "kwerendy.txt"
    ],
    "scripts": [
      "styl2.css"
    ],
    "allFiles": [
      "fib.html",
      "kwerendy.txt",
      "liczby.html",
      "obraz1.png",
      "obraz2.jpg",
      "paczka_zadania.zip",
      "README.md",
      "styl2.css"
    ],
    "fileContents": {
      "fib.html": "<!DOCTYPE html>\r\n<html lang=\"pl\">\r\n    <head>\r\n        <meta charset=\"UTF-8\" />\r\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n        <title>Ciągi liczbowe</title>\r\n        <link rel=\"stylesheet\" href=\"styl2.css\" />\r\n    </head>\r\n    <body>\r\n        <section id=\"baner1\">\r\n        <h2>Poznaj ciągi liczbowe</h2>        \r\n        </section>\r\n        <section id=\"baner2\">\r\n            <a href=\"liczby.html\"><h5>Ciągi arytmetyczne</h5></a>\r\n        </section>\r\n        <section id=\"baner3\">\r\n            <a href=\"fib.html\"><h5>Ciąg Fibonacciego</h5></a>\r\n        </section>\r\n        <section id=\"baner4\">\r\n            <img src=\"obraz1.png\" alt=\"Fibonacci\">\r\n        </section>\r\n        <section id=\"lewy\">\r\n            <ol>\r\n            <li>ciągi arytmetyczne</li>\r\n                <li>ciągi geometryczne</li>\r\n                <li>ciąg Fibonacciego</li>\r\n            </ol>\r\n        </section>\r\n        <section id=\"prawy\">\r\n            <img src=\"obraz2.jpg\" alt=\"Fibonacci\">\r\n        </section>\r\n       \r\n        \r\n        \r\n        <footer><p>Autor:0000000</p></footer>\r\n\r\n    </body>\r\n</html>",
      "kwerendy.txt": "1.SELECT nazwisko,rok_urodzenia from matematycy where rok_urodzenia<1800;\r\n2.SELECT id,imie,nazwisko from matematycy where liczba_publikacji>5 and liczba_publikacji<20;\r\n4.Drop table typy;",
      "liczby.html": "<!DOCTYPE html>\r\n<html lang=\"pl\">\r\n    <head>\r\n        <meta charset=\"UTF-8\" />\r\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n        <title>Ciągi liczbowe</title>\r\n        <link rel=\"stylesheet\" href=\"styl2.css\" />\r\n    </head>\r\n    <body>\r\n        <section id=\"baner1\">\r\n        <h2>Poznaj ciągi liczbowe</h2>        \r\n        </section>\r\n        <section id=\"baner2\">\r\n            <a href=\"liczby.html\"><h5>Ciągi arytmetyczne</h5></a>\r\n        </section>\r\n        <section id=\"baner3\">\r\n            <a href=\"fib.html\"><h5>Ciąg Fibonacciego</h5></a>\r\n        </section>\r\n        <section id=\"baner4\">\r\n            <img src=\"obraz1.png\" alt=\"Fibonacci\">\r\n        </section>\r\n        <section id=\"lewy\">\r\n            <ol>\r\n            <li>ciągi arytmetyczne</li>\r\n                <li>ciągi geometryczne</li>\r\n                <li>ciąg Fibonacciego</li>\r\n            </ol>\r\n        </section>\r\n        <section id=\"prawy\">\r\n            <h2>Generowanie ciągu arytmetycznego</h2>\r\n            <div>\r\n                Pierwszy wyraz A1: <input type=\"number\" name=\"\" id=\"first\" />\r\n            </div>\r\n            <div>\r\n                Różnica ciągu R: <input type=\"number\" name=\"\" id=\"roznica\" />\r\n            </div>\r\n            <div>\r\n                Liczba wyrazów w ciągu N:\r\n                <input type=\"number\" name=\"count\" id=\"count\" />\r\n            </div>\r\n            <button onclick=\"Ciag()\">Generuj Ciąg</button>\r\n            <div id=\"wynik\"></div>\r\n        </section>\r\n        <script>\r\n            function Ciag() {\r\n                var first = Number(document.getElementById(\"first\").value);\r\n                var roz = Number(document.getElementById(\"roznica\").value);\r\n                var ile = Number(document.getElementById(\"count\").value);\r\n                var wynik = \"Ciąg arytmetyczny zawiera wyrazy: \";\r\n                for (let i = 0; i < ile; i++) {\r\n                    wynik += first + \", \";\r\n                    first += roz;\r\n                }\r\n                document.getElementById(\"wynik\").innerHTML = wynik;\r\n            }\r\n        </script>\r\n        \r\n        \r\n        <footer><p>Autor:0000000</p></footer>\r\n\r\n    </body>\r\n</html>",
      "README.md": "# 📌 ee09_ciag (EE.09 (Programowanie i administrowanie stronami oraz bazami))\n\n> **Temat zadania:** Generator Ciągów Liczbowych  \n> **Kwalifikacja:** EE.09 (Programowanie i administrowanie stronami oraz bazami)  \n> **Technologie:** HTML5, CSS3, JavaScript\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nAplikacja generująca wyrazy ciągu arytmetycznego lub geometrycznego z walidacją danych wejściowych w JavaScript.\n\n### Główne elementy rozwiązania:\n- Opracowanie semantycznej struktury strony w standardzie HTML5.\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 🌐 **Pliki HTML:** `fib.html`, `liczby.html`\n- 📝 **Pliki tekstowe / Kwerendy:** `kwerendy.txt`\n- 🎨 **Style CSS:** `styl2.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Uruchomienie strony WWW:**\n   - Kliknij dwukrotnie plik `fib.html` lub przeciągnij go do dowolnej przeglądarki.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
      "styl2.css": "body{\r\nmargin: 0px;\r\nfont-family: verdana;\r\ncolor: 2F2F2F;\r\n}\r\n#baner1{\r\n    background-color: #DCDCDC;\r\n    width:55%;\r\n    height: 80px;\r\n    text-align: center;\r\n    float:left;\r\n}\r\n#baner2,#baner3,#baner4{\r\n    background-color: #DCDCDC;\r\n    width:15%;\r\n    height: 80px;\r\n    float:left;\r\n}\r\n#lewy{\r\n    background-color: #808080;\r\n    width: 30%;\r\n    height: 450px;\r\n    float: left;\r\n}\r\n#prawy{\r\n    background-color: #808080;\r\n    width: 70%;\r\n    height: 450px;\r\n    float: left;\r\n}\r\nfooter{\r\n    background-color: #DCDCDC;\r\n    text-align: center;\r\n    clear: both;\r\n}\r\nh5{\r\n    color:#808080;\r\nborder:1px solid #808080;\r\n    padding: 10px;\r\n    margin:7px;\r\n    font-size: 80%;\r\n}\r\ninput{\r\n    color: grey;\r\n}"
    }
  },
  {
    "id": "Kwalifikacja_EE09_ee09_kosmetyczka",
    "category": "Kwalifikacja_EE09",
    "name": "ee09 kosmetyczka",
    "title": "Salon Kosmetyczny i Cennik Zabiegów",
    "description": "Witryna salonu piękności z podstronami zabiegów oraz skryptem JS wyliczającym łączną cenę wybranych usług kosmetycznych.",
    "technologies": [
      "HTML5",
      "CSS3",
      "JavaScript"
    ],
    "folder": "Kwalifikacja_EE09/ee09_kosmetyczka",
    "mainPdf": null,
    "mainHtml": "index.html",
    "mainPhp": null,
    "mainSql": null,
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# 📌 ee09_kosmetyczka (EE.09 (Programowanie i administrowanie stronami oraz bazami))\n\n> **Temat zadania:** Salon Kosmetyczny i Cennik Zabiegów  \n> **Kwalifikacja:** EE.09 (Programowanie i administrowanie stronami oraz bazami)  \n> **Technologie:** HTML5, CSS3, JavaScript\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nWitryna salonu piękności z podstronami zabiegów oraz skryptem JS wyliczającym łączną cenę wybranych usług kosmetycznych.\n\n### Główne elementy rozwiązania:\n- Opracowanie semantycznej struktury strony w standardzie HTML5.\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 🌐 **Pliki HTML:** `index.html`, `twarz.html`\n- 🎨 **Style CSS:** `styl.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Uruchomienie strony WWW:**\n   - Kliknij dwukrotnie plik `index.html` lub przeciągnij go do dowolnej przeglądarki.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
    "pdfs": [],
    "htmls": [
      "index.html",
      "twarz.html"
    ],
    "phps": [],
    "sqls": [],
    "zips": [
      "paczka_zadania.zip"
    ],
    "txts": [],
    "scripts": [
      "styl.css"
    ],
    "allFiles": [
      "index.html",
      "obraz1.jpg",
      "obraz2.jpg",
      "paczka_zadania.zip",
      "README.md",
      "styl.css",
      "twarz.html"
    ],
    "fileContents": {
      "index.html": "<!DOCTYPE html>\r\n<html lang=\"pl\">\r\n    <head>\r\n        <meta charset=\"UTF-8\" />\r\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n        <title>Prognoza pogody Poznań</title>\r\n        <link rel=\"stylesheet\" href=\"styl.css\" />\r\n    </head>\r\n    <body>\r\n        <section id=\"lewyg\">\r\n        <h2>W ofercie</h2>\r\n            <ul>\r\n            <li><a href=\"twarz.html\">Zabiegi na twarz</a></li>\r\n                <ol>\r\n                <li>Piling</li>\r\n                    <li>Maska</li>\r\n                    <li>Regulacja brwi</li>\r\n                </ol>\r\n                <li>Masaż</li>\r\n                <li>Diety oczyszczajace</li>\r\n            </ul>\r\n            <a href=\"index.html\">Do strony głównej</a>\r\n        </section>\r\n        <section id=\"prawyg\">\r\n        <h1>Salon kosmetyczny</h1>\r\n        </section>\r\n         <section id=\"prawy\">\r\n        <img src=\"obraz2.jpg\" alt=\"Zabiegi kosmetyczne\">\r\n             <p>Witaj! Miło nam,że odwiedziłeś nasz salon.<br>Zapoznaj się z ofertę i sprawdź ceny zabiegów lub skontaktuj się z nami</p>\r\n             <h4>Telefon: 111 222 333</h4>\r\n        </section>\r\n         <section id=\"lewy\">\r\n        <img src=\"obraz1.jpg\" alt=\"Kosmetyczka\">\r\n        </section>\r\n        <footer>\r\n        <p>Autor:00000000</p>\r\n        </footer>\r\n    </body>\r\n</html>\r\n",
      "README.md": "# 📌 ee09_kosmetyczka (EE.09 (Programowanie i administrowanie stronami oraz bazami))\n\n> **Temat zadania:** Salon Kosmetyczny i Cennik Zabiegów  \n> **Kwalifikacja:** EE.09 (Programowanie i administrowanie stronami oraz bazami)  \n> **Technologie:** HTML5, CSS3, JavaScript\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nWitryna salonu piękności z podstronami zabiegów oraz skryptem JS wyliczającym łączną cenę wybranych usług kosmetycznych.\n\n### Główne elementy rozwiązania:\n- Opracowanie semantycznej struktury strony w standardzie HTML5.\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 🌐 **Pliki HTML:** `index.html`, `twarz.html`\n- 🎨 **Style CSS:** `styl.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Uruchomienie strony WWW:**\n   - Kliknij dwukrotnie plik `index.html` lub przeciągnij go do dowolnej przeglądarki.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
      "styl.css": "body{\r\nfont-family: Garamond;\r\n    margin:0px;\r\n}\r\n#lewyg{\r\n    height:500px;\r\n    width: 25%;\r\n    background-color: lavender;\r\n    float:left;\r\n}\r\n#prawyg{\r\n    height: 150px;\r\n    width: 75%;\r\n    background-color: indigo;\r\n    color:white;\r\n    font-size: 200%;\r\n    text-align: center;\r\n    float:left;\r\n}\r\n#lewy{\r\n    height:300px;\r\n    width:25%;\r\n    background-color: lavender;\r\n    float:left;\r\n}\r\n#prawy{\r\n    height:650px;\r\n    width:75%;\r\n    background-color: lavender; \r\n    font-size: 200%;\r\n    text-align: center;\r\n    float:right;\r\n\r\n}\r\nfooter{\r\n    background-color: indigo;\r\n    color:white;\r\n    text-align: right;\r\n    clear: both;\r\n}\r\nul{\r\n    list-style-type: square;\r\n}\r\nimg{\r\n    padding:5px;\r\n    margin: 10px;\r\n}\r\nimg:hover{\r\n    padding:4px;\r\n    border:1px solid indigo;\r\n}",
      "twarz.html": "<!DOCTYPE html>\r\n<html lang=\"pl\">\r\n    <head>\r\n        <meta charset=\"UTF-8\" />\r\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n        <title>Prognoza pogody Poznań</title>\r\n        <link rel=\"stylesheet\" href=\"styl.css\" />\r\n    </head>\r\n    <body>\r\n        <section id=\"lewyg\">\r\n        <h2>W ofercie</h2>\r\n            <ul>\r\n            <li><a href=\"twarz.html\">Zabiegi na twarz</a></li>\r\n                <ol>\r\n                <li>Piling</li>\r\n                    <li>Maska</li>\r\n                    <li>Regulacja brwi</li>\r\n                </ol>\r\n                <li>Masaż</li>\r\n                <li>Diety oczyszczajace</li>\r\n            </ul>\r\n            <a href=\"index.html\">Do strony głównej</a>\r\n        </section>\r\n        <section id=\"prawyg\">\r\n        <h1>Salon kosmetyczny</h1>\r\n        </section>\r\n         <section id=\"prawy\">\r\n        <h2>Sprawdź cenę swojej wizyty</h2>\r\n             <input type=\"checkbox\" id=\"piling\">Piling<br>\r\n             <input type=\"checkbox\" id=\"maska\">Maska<br>\r\n             <input type=\"checkbox\" id=\"masaz\">Masaż twarzy<br>\r\n             <input type=\"checkbox\" id=\"regulacja\">Regulacja brwi<br>\r\n             <button onclick=\"licz()\">Sprawdź cenę</button>\r\n             <p id=\"wynik\"></p>\r\n        </section>\r\n         <section id=\"lewy\">\r\n        <img src=\"obraz1.jpg\" alt=\"Kosmetyczka\">\r\n        </section>\r\n        <footer>\r\n        <p>Autor:00000000</p>\r\n        </footer>\r\n        <script>\r\n            function licz(){\r\n        var piling=document.getElementById(\"piling\").checked;\r\n        var maska=document.getElementById(\"maska\").checked;\r\n        var masaz=document.getElementById(\"masaz\").checked;\r\n        var regul=document.getElementById(\"regulacja\").checked;\r\n            var wynik=document.getElementById(\"wynik\");\r\n            var cena=0;\r\n            \r\n            if(piling){\r\n                cena+=45;\r\n            }\r\n            if(maska){\r\n                cena+=30;\r\n            }\r\n            if(masaz){\r\n                cena+=20;\r\n            }if(regul){\r\n                cena+=5;\r\n            }\r\n            wynik.innerHTML=\"Cena zabiegów: \"+cena+\"zł\";\r\n            }\r\n        </script>\r\n        \r\n        </body>\r\n</html>\r\n"
    }
  },
  {
    "id": "Kwalifikacja_EE09_ee09_liczenie",
    "category": "Kwalifikacja_EE09",
    "name": "ee09 liczenie",
    "title": "Aplikacja Matematyczna i Działania",
    "description": "Kalkulator podstawowych działań matematycznych (dodawanie, odejmowanie, mnożenie, dzielenie, potęgowanie) w JS.",
    "technologies": [
      "HTML5",
      "CSS3",
      "JavaScript"
    ],
    "folder": "Kwalifikacja_EE09/ee09_liczenie",
    "mainPdf": null,
    "mainHtml": "dzialania.html",
    "mainPhp": null,
    "mainSql": null,
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# 📌 ee09_liczenie (EE.09 (Programowanie i administrowanie stronami oraz bazami))\n\n> **Temat zadania:** Aplikacja Matematyczna i Działania  \n> **Kwalifikacja:** EE.09 (Programowanie i administrowanie stronami oraz bazami)  \n> **Technologie:** HTML5, CSS3, JavaScript\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nKalkulator podstawowych działań matematycznych (dodawanie, odejmowanie, mnożenie, dzielenie, potęgowanie) w JS.\n\n### Główne elementy rozwiązania:\n- Opracowanie semantycznej struktury strony w standardzie HTML5.\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 🌐 **Pliki HTML:** `dzialania.html`, `mnozenie.html`\n- 🎨 **Style CSS:** `styl.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Uruchomienie strony WWW:**\n   - Kliknij dwukrotnie plik `dzialania.html` lub przeciągnij go do dowolnej przeglądarki.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
    "pdfs": [],
    "htmls": [
      "dzialania.html",
      "mnozenie.html"
    ],
    "phps": [],
    "sqls": [],
    "zips": [
      "paczka_zadania.zip"
    ],
    "txts": [],
    "scripts": [
      "styl.css"
    ],
    "allFiles": [
      "dzialania.html",
      "logo.jpg",
      "mnozenie.html",
      "obraz2.jpg",
      "paczka_zadania.zip",
      "README.md",
      "styl.css"
    ],
    "fileContents": {
      "dzialania.html": "<!DOCTYPE html>\r\n<html lang=\"pl\">\r\n    <head>\r\n        <meta charset=\"UTF-8\" />\r\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n        <title>Działania matematyczne</title>\r\n        <link rel=\"stylesheet\" href=\"styl.css\" />\r\n    </head>\r\n    <body>\r\n        <section id=\"baner1\">\r\n        <img src=\"logo.jpg\" alt=\"matematyka\">\r\n        </section>\r\n        <section id=\"baner2\">\r\n        <h1>Pomocnik Matematyczny</h1>\r\n        </section>\r\n        <section id=\"baner3\">\r\n        <a href=\"dzialania.html\"><h4>Działania</h4></a>\r\n        </section>\r\n        <section id=\"baner4\">\r\n        <a href=\"mnozenie.html\"><h4>Tabliczka mnożenia</h4></a>\r\n        </section>\r\n        <section id=\"lewy\">\r\n        <h3>Proste działania</h3>\r\n            Liczba A: <input type=\"text\" id=\"liczba1\"><br>\r\n            Liczba B: <input type=\"text\" id=\"liczba2\"><br>\r\n            <button onclick=\"dodawanie()\">+</button>\r\n            <button onclick=\"odejmowanie()\">-</button>\r\n            <button onclick=\"mnozenie()\">*</button>\r\n            <button onclick=\"dzielenie()\">/</button>\r\n            <button onclick=\"potegowanie()\">A^B</button>\r\n            <p id=\"wynik\"></p>\r\n        </section>\r\n        <section id=\"prawy\">\r\n        <ul>\r\n            <li>dodawanie</li>\r\n            <li>odejmowanie</li>\r\n            <li>mnozenie</li>\r\n            <li>dzielenie</li>\r\n            <li>potegowanie</li>\r\n            </ul>\r\n        </section>\r\n        <footer><p>Autor:0000000</p></footer>\r\n<script>\r\n        function dodawanie(){\r\n        var liczba1=document.getElementById(\"liczba1\").value;\r\n        var liczba2=document.getElementById(\"liczba2\").value;\r\n    var wynik=document.getElementById(\"wynik\");\r\n            var dodawanie=parseInt(liczba1)+parseInt(liczba2);\r\n        \r\n            wynik.innerHTML=\"Wynik: \"+dodawanie+\"\";\r\n        }\r\n    \r\n    function odejmowanie(){\r\n        var liczba1=document.getElementById(\"liczba1\").value;\r\n        var liczba2=document.getElementById(\"liczba2\").value;\r\n    var wynik=document.getElementById(\"wynik\");\r\n            var odejmowanie=parseInt(liczba1)-parseInt(liczba2);\r\n        \r\n            wynik.innerHTML=\"Wynik: \"+odejmowanie+\"\";\r\n        }\r\n    function mnozenie(){\r\n        var liczba1=document.getElementById(\"liczba1\").value;\r\n        var liczba2=document.getElementById(\"liczba2\").value;\r\n    var wynik=document.getElementById(\"wynik\");\r\n            var mnozenie=parseInt(liczba1)*parseInt(liczba2);\r\n        \r\n            wynik.innerHTML=\"Wynik: \"+mnozenie+\"\";\r\n        }\r\n    function dzielenie(){\r\n        var liczba1=document.getElementById(\"liczba1\").value;\r\n        var liczba2=document.getElementById(\"liczba2\").value;\r\n    var wynik=document.getElementById(\"wynik\");\r\n            var dzielenie=parseInt(liczba1)/parseInt(liczba2);\r\n        \r\n            wynik.innerHTML=\"Wynik: \"+dzielenie+\"\";\r\n        }\r\n    function potegowanie(){\r\n        var liczba1=document.getElementById(\"liczba1\").value;\r\n        var liczba2=document.getElementById(\"liczba2\").value;\r\n    var wynik=document.getElementById(\"wynik\");\r\n            var potegowanie=Math.pow(parseInt(liczba1),parseInt(liczba2));\r\n        \r\n            wynik.innerHTML=\"Wynik: \"+potegowanie+\"\";\r\n        }\r\n        \r\n        </script>\r\n    </body>\r\n</html>\r\n",
      "mnozenie.html": "<!DOCTYPE html>\r\n<html lang=\"pl\">\r\n    <head>\r\n        <meta charset=\"UTF-8\" />\r\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n        <title>Działania matematyczne</title>\r\n        <link rel=\"stylesheet\" href=\"styl.css\" />\r\n    </head>\r\n    <body>\r\n        <section id=\"baner1\">\r\n        <img src=\"logo.jpg\" alt=\"matematyka\">\r\n        </section>\r\n        <section id=\"baner2\">\r\n        <h1>Pomocnik Matematyczny</h1>\r\n        </section>\r\n        <section id=\"baner3\">\r\n        <a href=\"dzialania.html\"><h4>Działania</h4></a>\r\n        </section>\r\n        <section id=\"baner4\">\r\n        <a href=\"mnozenie.html\"><h4>Tabliczka mnożenia</h4></a>\r\n        </section>\r\n        <section id=\"lewy\">\r\n      <img src=\"obraz2.jpg\" alt=\"tabliczka mnożenia\">\r\n        </section>\r\n        <section id=\"prawy\">\r\n        <ul>\r\n            <li>dodawanie</li>\r\n            <li>odejmowanie</li>\r\n            <li>mnozenie</li>\r\n            <li>dzielenie</li>\r\n            <li>potegowanie</li>\r\n            </ul>\r\n        </section>\r\n        <footer><p>Autor:0000000</p></footer>\r\n\r\n    </body>\r\n</html>\r\n",
      "README.md": "# 📌 ee09_liczenie (EE.09 (Programowanie i administrowanie stronami oraz bazami))\n\n> **Temat zadania:** Aplikacja Matematyczna i Działania  \n> **Kwalifikacja:** EE.09 (Programowanie i administrowanie stronami oraz bazami)  \n> **Technologie:** HTML5, CSS3, JavaScript\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nKalkulator podstawowych działań matematycznych (dodawanie, odejmowanie, mnożenie, dzielenie, potęgowanie) w JS.\n\n### Główne elementy rozwiązania:\n- Opracowanie semantycznej struktury strony w standardzie HTML5.\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 🌐 **Pliki HTML:** `dzialania.html`, `mnozenie.html`\n- 🎨 **Style CSS:** `styl.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Uruchomienie strony WWW:**\n   - Kliknij dwukrotnie plik `dzialania.html` lub przeciągnij go do dowolnej przeglądarki.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
      "styl.css": "body{\r\n    margin:0px;\r\n    font-family: Tahoma;\r\n    color:white;\r\n}\r\n#baner1,#baner3,#baner4{\r\n    background-color: #983713;\r\n    width:17%;\r\n    height: 100px;\r\n    float:left;\r\n}\r\n#baner2{\r\n    background-color: #983713;\r\n    width:49%;\r\n    height: 100px;\r\n    text-align: center;\r\n    float:left;\r\n}\r\n#lewy{\r\n    background-color: #ff7f50;\r\n    width:80%;\r\n    height: 500px;\r\n    float:left;\r\n}\r\n#prawy{\r\n    background-color: #ff7f50;\r\n    width:20%;\r\n    height: 500px;\r\n    float:left;\r\n}\r\nfooter{\r\n    background-color: #983713;\r\n    text-align: right;\r\n    clear:both;\r\n}\r\na{\r\n    color: white;\r\n}\r\nbutton{\r\n    background-color: #D3D3D3;\r\n    color:2F2F2F;\r\n    border:2px solid #2F2F2F;\r\n    MARGIN:5PX;\r\n    padding:10px 30px;\r\n}\r\ninput{\r\n    color:orange;\r\n}"
    }
  },
  {
    "id": "Kwalifikacja_EE09_ee09_lowiska",
    "category": "Kwalifikacja_EE09",
    "name": "ee09 lowiska",
    "title": "Portal Wędkarski i Baza Łowisk",
    "description": "Strona internetowa dla wędkarzy z dynamicznym pobieraniem danych o łowiskach, rybach drapieżnych i okresach ochronnych z bazy MySQL.",
    "technologies": [
      "HTML5",
      "CSS3",
      "PHP (mysqli)",
      "MySQL"
    ],
    "folder": "Kwalifikacja_EE09/ee09_lowiska",
    "mainPdf": null,
    "mainHtml": null,
    "mainPhp": "wedkuj.php",
    "mainSql": "baaza.sql",
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# 📌 ee09_lowiska (EE.09 (Programowanie i administrowanie stronami oraz bazami))\n\n> **Temat zadania:** Portal Wędkarski i Baza Łowisk  \n> **Kwalifikacja:** EE.09 (Programowanie i administrowanie stronami oraz bazami)  \n> **Technologie:** HTML5, CSS3, PHP (mysqli), MySQL\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nStrona internetowa dla wędkarzy z dynamicznym pobieraniem danych o łowiskach, rybach drapieżnych i okresach ochronnych z bazy MySQL.\n\n### Główne elementy rozwiązania:\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Utworzenie tabel, relacji oraz przygotowanie poprawnych kwerend SQL (SELECT, INSERT, UPDATE).\n- Oprogramowanie skryptu backendowego w PHP (mysqli) do komunikacji z bazą danych MySQL.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 🐘 **Skrypty PHP:** `wedkuj.php`\n- 💾 **Baza / Kwerendy SQL:** `baaza.sql`\n- 📝 **Pliki tekstowe / Kwerendy:** `kwerendy.txt`\n- 🎨 **Style CSS:** `css/styl_1.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Import bazy danych:**\n   - Uruchom lokalny serwer MySQL (np. w panelu XAMPP).\n   - Otwórz w przeglądarce `http://localhost/phpmyadmin`.\n   - Utwórz nową bazę danych i zaimportuj plik SQL (`baaza.sql`).\n\n3. **Uruchomienie PHP:**\n   - Skopiuj ten rozpakowany folder do katalogu `C:\\xampp\\htdocs\\ee09_lowiska`.\n   - Uruchom moduł **Apache** w XAMPP.\n   - Otwórz w przeglądarce adres: `http://localhost/ee09_lowiska/wedkuj.php`.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
    "pdfs": [],
    "htmls": [],
    "phps": [
      "wedkuj.php"
    ],
    "sqls": [
      "baaza.sql"
    ],
    "zips": [
      "paczka_zadania.zip"
    ],
    "txts": [
      "kwerendy.txt"
    ],
    "scripts": [
      "css/styl_1.css"
    ],
    "allFiles": [
      "baaza.sql",
      "css/styl_1.css",
      "css/styl_1.css.map",
      "kwerendy.txt",
      "paczka_zadania.zip",
      "README.md",
      "ryba1.jpg",
      "scss/styl_1.scss",
      "wedkuj.php",
      "zawody.jpg"
    ],
    "fileContents": {
      "baaza.sql": "-- phpMyAdmin SQL Dump\r\n-- version 4.7.4\r\n-- https://www.phpmyadmin.net/\r\n--\r\n-- Host: 127.0.0.1\r\n-- Czas generowania: 19 Lut 2018, 10:39\r\n-- Wersja serwera: 10.1.28-MariaDB\r\n-- Wersja PHP: 7.1.10\r\n\r\nSET SQL_MODE = \"NO_AUTO_VALUE_ON_ZERO\";\r\nSET AUTOCOMMIT = 0;\r\nSTART TRANSACTION;\r\nSET time_zone = \"+00:00\";\r\n\r\n\r\n/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;\r\n/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;\r\n/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;\r\n/*!40101 SET NAMES utf8mb4 */;\r\n\r\n--\r\n-- Baza danych: `wedkowanie`\r\n--\r\n\r\n-- --------------------------------------------------------\r\n\r\n--\r\n-- Struktura tabeli dla tabeli `lowisko`\r\n--\r\n\r\nCREATE TABLE `lowisko` (\r\n  `id` int(10) UNSIGNED NOT NULL,\r\n  `Ryby_id` int(10) UNSIGNED NOT NULL,\r\n  `akwen` text,\r\n  `wojewodztwo` text,\r\n  `rodzaj` int(10) UNSIGNED DEFAULT NULL\r\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\r\n\r\n--\r\n-- Zrzut danych tabeli `lowisko`\r\n--\r\n\r\nINSERT INTO `lowisko` (`id`, `Ryby_id`, `akwen`, `wojewodztwo`, `rodzaj`) VALUES\r\n(1, 2, 'Zalew Wegrowski', 'Mazowieckie', 4),\r\n(2, 3, 'Zbiornik Bukowka', 'Dolnoslaskie', 2),\r\n(3, 2, 'Jeziorko Bartbetowskie', 'Warminsko-Mazurskie', 2),\r\n(4, 1, 'Warta-Obrzycko', 'Wielkopolskie', 3),\r\n(5, 2, 'Stawy Milkow', 'Podkarpackie', 5),\r\n(6, 7, 'Przemsza k. Okradzinowa', 'Slaskie', 3);\r\n\r\n-- --------------------------------------------------------\r\n\r\n--\r\n-- Struktura tabeli dla tabeli `okres_ochronny`\r\n--\r\n\r\nCREATE TABLE `okres_ochronny` (\r\n  `id` int(10) UNSIGNED NOT NULL,\r\n  `Ryby_id` int(10) UNSIGNED NOT NULL,\r\n  `od_miesiaca` int(10) UNSIGNED DEFAULT NULL,\r\n  `do_miesiaca` int(10) UNSIGNED DEFAULT NULL,\r\n  `wymiar_ochronny` int(10) UNSIGNED DEFAULT NULL\r\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\r\n\r\n--\r\n-- Zrzut danych tabeli `okres_ochronny`\r\n--\r\n\r\nINSERT INTO `okres_ochronny` (`id`, `Ryby_id`, `od_miesiaca`, `do_miesiaca`, `wymiar_ochronny`) VALUES\r\n(1, 1, 1, 4, 50),\r\n(2, 2, 0, 0, 30),\r\n(3, 3, 1, 5, 50),\r\n(4, 4, 0, 0, 15),\r\n(5, 5, 11, 6, 70),\r\n(6, 6, 0, 0, 0),\r\n(7, 7, 0, 0, 0),\r\n(8, 8, 0, 0, 25);\r\n\r\n-- --------------------------------------------------------\r\n\r\n--\r\n-- Struktura tabeli dla tabeli `ryby`\r\n--\r\n\r\nCREATE TABLE `ryby` (\r\n  `id` int(10) UNSIGNED NOT NULL,\r\n  `nazwa` text,\r\n  `wystepowanie` text,\r\n  `styl_zycia` int(11) DEFAULT NULL\r\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\r\n\r\n--\r\n-- Zrzut danych tabeli `ryby`\r\n--\r\n\r\nINSERT INTO `ryby` (`id`, `nazwa`, `wystepowanie`, `styl_zycia`) VALUES\r\n(1, 'Szczupak', 'stawy, rzeki', 1),\r\n(2, 'Karp', 'stawy, jeziora', 2),\r\n(3, 'Sandacz', 'stawy, jeziora, rzeki', 1),\r\n(4, 'Okon', 'rzeki', 1),\r\n(5, 'Sum', 'jeziora, rzeki', 1),\r\n(6, 'Dorsz', 'morza, oceany', 1),\r\n(7, 'Leszcz', 'jeziora', 2),\r\n(8, 'Lin', 'jeziora', 2);\r\n\r\n-- --------------------------------------------------------\r\n\r\n--\r\n-- Struktura tabeli dla tabeli `samochody`\r\n--\r\n\r\nCREATE TABLE `samochody` (\r\n  `id` int(10) UNSIGNED NOT NULL,\r\n  `marka` text,\r\n  `model` text,\r\n  `rocznik` year(4) DEFAULT NULL,\r\n  `kolor` text,\r\n  `stan` text\r\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\r\n\r\n--\r\n-- Zrzut danych tabeli `samochody`\r\n--\r\n\r\nINSERT INTO `samochody` (`id`, `marka`, `model`, `rocznik`, `kolor`, `stan`) VALUES\r\n(1, 'Fiat', 'Punto', 2016, 'czerwony', 'bardzo dobry'),\r\n(2, 'Fiat', 'Punto', 2002, 'czerwony', 'dobry'),\r\n(3, 'Fiat', 'Punto', 2007, 'niebieski', 'bardzo bobry'),\r\n(4, 'Opel', 'Corsa', 2016, 'grafitowy', 'bardzo dobry'),\r\n(5, 'Opel', 'Astra', 2003, 'niebieski', 'porysowany lakier'),\r\n(6, 'Toyota', 'Corolla', 2016, 'czerwony', 'bardzo dobry'),\r\n(7, 'Toyota', 'Corolla', 2014, 'szary', 'dobry'),\r\n(8, 'Toyota', 'Yaris', 2004, 'granatowy', 'dobry');\r\n\r\n-- --------------------------------------------------------\r\n\r\n--\r\n-- Struktura tabeli dla tabeli `typy`\r\n--\r\n\r\nCREATE TABLE `typy` (\r\n  `id` int(10) UNSIGNED NOT NULL,\r\n  `kategoria` text\r\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\r\n\r\n--\r\n-- Zrzut danych tabeli `typy`\r\n--\r\n\r\nINSERT INTO `typy` (`id`, `kategoria`) VALUES\r\n(1, 'Procesor'),\r\n(2, 'RAM'),\r\n(5, 'karta graficzna'),\r\n(6, 'HDD');\r\n\r\n-- --------------------------------------------------------\r\n\r\n--\r\n-- Struktura tabeli dla tabeli `uczniowie`\r\n--\r\n\r\nCREATE TABLE `uczniowie` (\r\n  `imie` text,\r\n  `nazwisko` text,\r\n  `wiek` int(11) DEFAULT NULL\r\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\r\n\r\n--\r\n-- Zrzut danych tabeli `uczniowie`\r\n--\r\n\r\nINSERT INTO `uczniowie` (`imie`, `nazwisko`, `wiek`) VALUES\r\n('Kamil', 'Ryba', 11),\r\n('Karolina', 'Witecka', 8),\r\n('Karol', 'Rybacki', 9),\r\n('Marina', 'Damiencka', 9);\r\n\r\n-- --------------------------------------------------------\r\n\r\n--\r\n-- Struktura tabeli dla tabeli `uzytkownik`\r\n--\r\n\r\nCREATE TABLE `uzytkownik` (\r\n  `id` int(10) UNSIGNED NOT NULL,\r\n  `imie` text,\r\n  `nazwisko` text,\r\n  `telefon` text,\r\n  `email` text\r\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\r\n\r\n--\r\n-- Zrzut danych tabeli `uzytkownik`\r\n--\r\n\r\nINSERT INTO `uzytkownik` (`id`, `imie`, `nazwisko`, `telefon`, `email`) VALUES\r\n(1, 'Anna', 'Kowalska', '601601601', 'anna@poczta.pl'),\r\n(2, 'Jan', 'Nowak', '608608608', 'jan@poczta.pl'),\r\n(3, 'Jolanta', 'Jasny', '606606606', 'jolanta@poczta.pl'),\r\n(4, 'qqq', 'www', '345', 'dsfsdklfs@daskl');\r\n\r\n-- --------------------------------------------------------\r\n\r\n--\r\n-- Struktura tabeli dla tabeli `wyniki`\r\n--\r\n\r\nCREATE TABLE `wyniki` (\r\n  `id` int(10) UNSIGNED NOT NULL,\r\n  `dyscyplina_id` int(10) UNSIGNED NOT NULL,\r\n  `sportowiec_id` int(10) UNSIGNED NOT NULL,\r\n  `wynik` decimal(5,2) DEFAULT NULL,\r\n  `dataUstanowienia` date DEFAULT NULL\r\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\r\n\r\n--\r\n-- Zrzut danych tabeli `wyniki`\r\n--\r\n\r\nINSERT INTO `wyniki` (`id`, `dyscyplina_id`, `sportowiec_id`, `wynik`, `dataUstanowienia`) VALUES\r\n(1, 1, 1, '12.40', '2015-10-14'),\r\n(2, 1, 1, '12.00', '2015-10-06'),\r\n(3, 1, 2, '11.80', '2015-10-14'),\r\n(4, 1, 2, '11.90', '2015-10-06'),\r\n(5, 1, 3, '11.50', '2015-10-14'),\r\n(6, 1, 3, '11.56', '2015-10-06'),\r\n(7, 1, 4, '11.70', '2015-10-14'),\r\n(8, 1, 4, '11.67', '2015-10-06'),\r\n(9, 1, 5, '11.30', '2015-10-14'),\r\n(10, 1, 5, '11.52', '2015-10-06'),\r\n(11, 1, 6, '12.10', '2015-10-14'),\r\n(12, 1, 6, '12.00', '2015-10-06'),\r\n(13, 3, 1, '63.00', '2015-11-11'),\r\n(14, 3, 1, '63.60', '2015-10-13'),\r\n(15, 3, 2, '64.00', '2015-11-11'),\r\n(16, 3, 2, '63.60', '2015-10-13'),\r\n(17, 3, 3, '60.00', '2015-11-11'),\r\n(18, 3, 3, '61.60', '2015-10-13'),\r\n(19, 3, 4, '63.50', '2015-11-11'),\r\n(20, 3, 4, '63.60', '2015-10-13'),\r\n(21, 3, 5, '70.00', '2015-10-07'),\r\n(22, 3, 6, '68.00', '2015-10-07');\r\n\r\n-- --------------------------------------------------------\r\n\r\n--\r\n-- Struktura tabeli dla tabeli `zamowienia`\r\n--\r\n\r\nCREATE TABLE `zamowienia` (\r\n  `id` int(10) UNSIGNED NOT NULL,\r\n  `Samochody_id` int(10) UNSIGNED NOT NULL,\r\n  `Klient` text,\r\n  `telefon` text,\r\n  `dataZam` date DEFAULT NULL\r\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\r\n\r\n--\r\n-- Zrzut danych tabeli `zamowienia`\r\n--\r\n\r\nINSERT INTO `zamowienia` (`id`, `Samochody_id`, `Klient`, `telefon`, `dataZam`) VALUES\r\n(1, 3, 'Anna Kowalska', '111222333', '2016-02-15'),\r\n(2, 6, 'Jan Nowakowski', '222111333', '2016-02-15'),\r\n(3, 8, 'Marcin Kolwal', '333111222', '2016-02-15');\r\n\r\n--\r\n-- Indeksy dla zrzutów tabel\r\n--\r\n\r\n--\r\n-- Indexes for table `lowisko`\r\n--\r\nALTER TABLE `lowisko`\r\n  ADD PRIMARY KEY (`id`);\r\n\r\n--\r\n-- Indexes for table `okres_ochronny`\r\n--\r\nALTER TABLE `okres_ochronny`\r\n  ADD PRIMARY KEY (`id`);\r\n\r\n--\r\n-- Indexes for table `ryby`\r\n--\r\nALTER TABLE `ryby`\r\n  ADD PRIMARY KEY (`id`);\r\n\r\n--\r\n-- Indexes for table `samochody`\r\n--\r\nALTER TABLE `samochody`\r\n  ADD PRIMARY KEY (`id`);\r\n\r\n--\r\n-- Indexes for table `typy`\r\n--\r\nALTER TABLE `typy`\r\n  ADD PRIMARY KEY (`id`);\r\n\r\n--\r\n-- Indexes for table `uzytkownik`\r\n--\r\nALTER TABLE `uzytkownik`\r\n  ADD PRIMARY KEY (`id`);\r\n\r\n--\r\n-- Indexes for table `wyniki`\r\n--\r\nALTER TABLE `wyniki`\r\n  ADD PRIMARY KEY (`id`);\r\n\r\n--\r\n-- Indexes for table `zamowienia`\r\n--\r\nALTER TABLE `zamowienia`\r\n  ADD PRIMARY KEY (`id`);\r\n\r\n--\r\n-- AUTO_INCREMENT for dumped tables\r\n--\r\n\r\n--\r\n-- AUTO_INCREMENT dla tabeli `lowisko`\r\n--\r\nALTER TABLE `lowisko`\r\n  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;\r\n\r\n--\r\n-- AUTO_INCREMENT dla tabeli `okres_ochronny`\r\n--\r\nALTER TABLE `okres_ochronny`\r\n  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;\r\n\r\n--\r\n-- AUTO_INCREMENT dla tabeli `ryby`\r\n--\r\nALTER TABLE `ryby`\r\n  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;\r\n\r\n--\r\n-- AUTO_INCREMENT dla tabeli `samochody`\r\n--\r\nALTER TABLE `samochody`\r\n  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;\r\n\r\n--\r\n-- AUTO_INCREMENT dla tabeli `typy`\r\n--\r\nALTER TABLE `typy`\r\n  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;\r\n\r\n--\r\n-- AUTO_INCREMENT dla tabeli `uzytkownik`\r\n--\r\nALTER TABLE `uzytkownik`\r\n  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;\r\n\r\n--\r\n-- AUTO_INCREMENT dla tabeli `wyniki`\r\n--\r\nALTER TABLE `wyniki`\r\n  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;\r\n\r\n--\r\n-- AUTO_INCREMENT dla tabeli `zamowienia`\r\n--\r\nALTER TABLE `zamowienia`\r\n  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;\r\nCOMMIT;\r\n\r\n/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;\r\n/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;\r\n/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;\r\n",
      "css/styl_1.css": "* {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: Verdana sans-serif;\n}\n\nheader,\nfooter {\n  padding: 20px;\n  background-color: #4682B4;\n  color: white;\n  font-size: 120%;\n  text-align: center;\n}\n\nmain {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.lewy {\n  height: 500px;\n  width: 40%;\n  background-color: #40E0D0;\n}\n\n.prawy {\n  height: 500px;\n  width: 60%;\n  background-color: #40E0D0;\n}\n\nimg {\n  padding: 5px;\n  margin: 10px;\n  border: 1px solid #000080;\n}\n\nul {\n  margin-left: 20px;\n}\n\nul li {\n  list-style-position: inside;\n}\n/*# sourceMappingURL=styl_1.css.map */",
      "kwerendy.txt": "SELECT * FROM ryby;",
      "README.md": "# 📌 ee09_lowiska (EE.09 (Programowanie i administrowanie stronami oraz bazami))\n\n> **Temat zadania:** Portal Wędkarski i Baza Łowisk  \n> **Kwalifikacja:** EE.09 (Programowanie i administrowanie stronami oraz bazami)  \n> **Technologie:** HTML5, CSS3, PHP (mysqli), MySQL\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nStrona internetowa dla wędkarzy z dynamicznym pobieraniem danych o łowiskach, rybach drapieżnych i okresach ochronnych z bazy MySQL.\n\n### Główne elementy rozwiązania:\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Utworzenie tabel, relacji oraz przygotowanie poprawnych kwerend SQL (SELECT, INSERT, UPDATE).\n- Oprogramowanie skryptu backendowego w PHP (mysqli) do komunikacji z bazą danych MySQL.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 🐘 **Skrypty PHP:** `wedkuj.php`\n- 💾 **Baza / Kwerendy SQL:** `baaza.sql`\n- 📝 **Pliki tekstowe / Kwerendy:** `kwerendy.txt`\n- 🎨 **Style CSS:** `css/styl_1.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Import bazy danych:**\n   - Uruchom lokalny serwer MySQL (np. w panelu XAMPP).\n   - Otwórz w przeglądarce `http://localhost/phpmyadmin`.\n   - Utwórz nową bazę danych i zaimportuj plik SQL (`baaza.sql`).\n\n3. **Uruchomienie PHP:**\n   - Skopiuj ten rozpakowany folder do katalogu `C:\\xampp\\htdocs\\ee09_lowiska`.\n   - Uruchom moduł **Apache** w XAMPP.\n   - Otwórz w przeglądarce adres: `http://localhost/ee09_lowiska/wedkuj.php`.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
      "wedkuj.php": "<?php\r\n    error_reporting(E_ALL & ~E_NOTICE & ~E_WARNING);\r\n\r\n$mysql = mysqli_connect('localhost', 'root', \"\");\r\nif (!$mysql) exit(\"Błąd połączenia\");\r\n\r\nmysqli_select_db($mysql, 'wedkowanie');\r\n\r\n$query1 = mysqli_query($mysql, 'SELECT nazwa, wystepowanie FROM Ryby');\r\n\r\n?>\r\n\r\n\r\n\r\n<!DOCTYPE html>\r\n\r\n<html lang=\"pl\">\r\n\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <title title>Wędkujemy</title>\r\n    <link rel=\"stylesheet\" href=\"./css/styl_1.css\">\r\n</head>\r\n\r\n<body>\r\n    <header>\r\n        <h1>Portal dla wędkarzy</h1>\r\n    </header>\r\n    <main>\r\n        <div class=\"lewy\">\r\n            <h2>Ryby drapieżne naszych wód</h2>\r\n            <ul>\r\n                <?php while ($zapytanie1 = mysqli_fetch_array($query1)) { ?>\r\n                    <li><?php echo $zapytanie1['nazwa'] ?>, wystepowanie: <?php echo $zapytanie1['wystepowanie'] ?></li>\r\n                <?php } ?>\r\n            </ul>\r\n        </div>\r\n        <div class=\"prawy\">\r\n            <img src=\"ryba1.jpg\" alt=\"Sum\">\r\n            <p><a href=\"kwerendy.txt\">Pobierz kwerendy</a></p>\r\n        </div>\r\n    </main>\r\n    <footer>\r\n        <p>Stronę wykonał: 000 000 000</p>\r\n    </footer>\r\n</body>\r\n\r\n</html>\r\n\r\n<?php mysqli_close($mysql); ?>"
    }
  },
  {
    "id": "Kwalifikacja_EE09_ee09_organizer",
    "category": "Kwalifikacja_EE09",
    "name": "ee09 organizer",
    "title": "Miesięczny Organizer Zadań",
    "description": "Aplikacja kalendarza i organizera zadań z podziałem na dni miesiąca, skryptem PHP pobierającym wpisy i formularzem notatek.",
    "technologies": [
      "HTML5",
      "CSS3",
      "PHP",
      "MySQL"
    ],
    "folder": "Kwalifikacja_EE09/ee09_organizer",
    "mainPdf": null,
    "mainHtml": null,
    "mainPhp": "organizer.php",
    "mainSql": null,
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# 📌 ee09_organizer (EE.09 (Programowanie i administrowanie stronami oraz bazami))\n\n> **Temat zadania:** Miesięczny Organizer Zadań  \n> **Kwalifikacja:** EE.09 (Programowanie i administrowanie stronami oraz bazami)  \n> **Technologie:** HTML5, CSS3, PHP, MySQL\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nAplikacja kalendarza i organizera zadań z podziałem na dni miesiąca, skryptem PHP pobierającym wpisy i formularzem notatek.\n\n### Główne elementy rozwiązania:\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Oprogramowanie skryptu backendowego w PHP (mysqli) do komunikacji z bazą danych MySQL.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 🐘 **Skrypty PHP:** `organizer.php`\n- 🎨 **Style CSS:** `styl6.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n3. **Uruchomienie PHP:**\n   - Skopiuj ten rozpakowany folder do katalogu `C:\\xampp\\htdocs\\ee09_organizer`.\n   - Uruchom moduł **Apache** w XAMPP.\n   - Otwórz w przeglądarce adres: `http://localhost/ee09_organizer/organizer.php`.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
    "pdfs": [],
    "htmls": [],
    "phps": [
      "organizer.php"
    ],
    "sqls": [],
    "zips": [
      "paczka_zadania.zip"
    ],
    "txts": [],
    "scripts": [
      "styl6.css"
    ],
    "allFiles": [
      "logo1.png",
      "organizer.php",
      "paczka_zadania.zip",
      "README.md",
      "styl6.css"
    ],
    "fileContents": {
      "organizer.php": "<!DOCTYPE HTML>\r\n<HTML>\r\n    <HEAD>\r\n    <meta charset=\"UTF-8\">\r\n        <title>Organizer</title>\r\n        <link rel=\"stylesheet\" href=\"styl6.css\">\r\n    </HEAD>\r\n    <body>\r\n    <section id=\"baner1\">\r\n        <h2>MÓJ ORGANIZER</h2>\r\n        </section>\r\n        <section id=\"baner2\">\r\n        <FORM action=\"organizer.php\" method=\"post\">\r\n            Wpis wydarzenia: <input type=\"text\" name=\"wpis\">\r\n            <input type=\"submit\" value=\"Zapisz\">\r\n            </FORM>\r\n        </section>\r\n            <section id=\"baner3\"><img src=\"logo1.png\" alt=\"Mój organizer\"></section>\r\n        <section id=\"glowny\">\r\n          <?php\r\n    error_reporting(E_ALL & ~E_NOTICE & ~E_WARNING);\r\n\r\n    $conn=mysqli_connect('localhost','root','','egzamin6');\r\n    $zapytanie=\"SELECT dataZadania, miesiac, wpis FROM zadania where  miesiac='sierpien'\";\r\n    $dane=mysqli_query($conn,$zapytanie);\r\n    foreach($dane as $dane1){\r\n        echo \"<div id='dzien'><h6>\".$dane1['dataZadania'].\", \".$dane1['miesiac'].\"</h6><p>\".$dane1['wpis'].\"</p></div>\";\r\n    }\r\n            mysqli_close($conn);\r\n    ?>\r\n        </section>\r\n<footer>\r\n    <?php\r\n    $conn=mysqli_connect('localhost','root','','egzamin6');\r\n    $zapytanie=\"select rok,miesiac from zadania where dataZadania='2020-08-01'\";\r\n    $dane=mysqli_query($conn,$zapytanie);\r\n    foreach($dane as $dane1){\r\n    echo\"<h1>miesiąc: \".$dane1['miesiac'].\", rok: \".$dane1['rok'].\"</h1>\";\r\n    }\r\n    @$wpis=$_POST['wpis'];\r\n$zapytanie2=\"UPDATE zadania set wpis='$wpis' WHERE dataZadania='2020-08-27'\";\r\nmysqli_query($conn,$zapytanie2);\r\n     mysqli_close($conn);\r\n    \r\n    ?>\r\n    <p>Stronę wykonał:00000000</p></footer>\r\n </body>\r\n\r\n\r\n</HTML>",
      "README.md": "# 📌 ee09_organizer (EE.09 (Programowanie i administrowanie stronami oraz bazami))\n\n> **Temat zadania:** Miesięczny Organizer Zadań  \n> **Kwalifikacja:** EE.09 (Programowanie i administrowanie stronami oraz bazami)  \n> **Technologie:** HTML5, CSS3, PHP, MySQL\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nAplikacja kalendarza i organizera zadań z podziałem na dni miesiąca, skryptem PHP pobierającym wpisy i formularzem notatek.\n\n### Główne elementy rozwiązania:\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Oprogramowanie skryptu backendowego w PHP (mysqli) do komunikacji z bazą danych MySQL.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 🐘 **Skrypty PHP:** `organizer.php`\n- 🎨 **Style CSS:** `styl6.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n3. **Uruchomienie PHP:**\n   - Skopiuj ten rozpakowany folder do katalogu `C:\\xampp\\htdocs\\ee09_organizer`.\n   - Uruchom moduł **Apache** w XAMPP.\n   - Otwórz w przeglądarce adres: `http://localhost/ee09_organizer/organizer.php`.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
      "styl6.css": "BODY{\r\nmargin: 0px;\r\n    font-family: Georgia;\r\n}\r\n#baner1,#baner2{\r\nbackground-color: #3cb371;\r\n    color: white;\r\n    height: 100px;\r\n    width: 40%;\r\n    float: left;\r\n}\r\n#baner3{\r\nbackground-color: #3cb371;\r\n    color: white;\r\n    height: 100px;\r\n    width: 20%;\r\n    float: left;\r\n}\r\nfooter{\r\nbackground-color: #3cb371;\r\n    color: white;\r\n    clear: both;\r\n    \r\n}\r\n#glowny{\r\n    clear: both;\r\n}\r\n#dzien{\r\n    background-color: #ffdab9;\r\n    width: 170px;\r\n    height: 90px;\r\n    margin: 5px;\r\n    border: 1px solid #3cb371;\r\n    float: left;\r\n}\r\nform{\r\n    padding: 30px;\r\n}\r\nh6{\r\n    text-align: right;\r\n}"
    }
  },
  {
    "id": "Kwalifikacja_EE09_ee09_pogotowie",
    "category": "Kwalifikacja_EE09",
    "name": "ee09 pogotowie",
    "title": "Dyspozytornia Pogotowia Ratunkowego",
    "description": "System rejestracji wyjazdów karetek, zespołów ratowniczych i zgłoszeń medycznych z kwerendami SQL i panelem PHP.",
    "technologies": [
      "HTML5",
      "CSS3",
      "PHP",
      "MySQL"
    ],
    "folder": "Kwalifikacja_EE09/ee09_pogotowie",
    "mainPdf": null,
    "mainHtml": "pogotowie.html",
    "mainPhp": "zgloszenie.php",
    "mainSql": null,
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# 📌 ee09_pogotowie (EE.09 (Programowanie i administrowanie stronami oraz bazami))\n\n> **Temat zadania:** Dyspozytornia Pogotowia Ratunkowego  \n> **Kwalifikacja:** EE.09 (Programowanie i administrowanie stronami oraz bazami)  \n> **Technologie:** HTML5, CSS3, PHP, MySQL\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nSystem rejestracji wyjazdów karetek, zespołów ratowniczych i zgłoszeń medycznych z kwerendami SQL i panelem PHP.\n\n### Główne elementy rozwiązania:\n- Opracowanie semantycznej struktury strony w standardzie HTML5.\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Oprogramowanie skryptu backendowego w PHP (mysqli) do komunikacji z bazą danych MySQL.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 🌐 **Pliki HTML:** `pogotowie.html`\n- 🐘 **Skrypty PHP:** `zgloszenie.php`\n- 📝 **Pliki tekstowe / Kwerendy:** `kwerendy.txt`\n- 🎨 **Style CSS:** `styl5.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n3. **Uruchomienie PHP:**\n   - Skopiuj ten rozpakowany folder do katalogu `C:\\xampp\\htdocs\\ee09_pogotowie`.\n   - Uruchom moduł **Apache** w XAMPP.\n   - Otwórz w przeglądarce adres: `http://localhost/ee09_pogotowie/zgloszenie.php`.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
    "pdfs": [],
    "htmls": [
      "pogotowie.html"
    ],
    "phps": [
      "zgloszenie.php"
    ],
    "sqls": [],
    "zips": [
      "paczka_zadania.zip"
    ],
    "txts": [
      "kwerendy.txt"
    ],
    "scripts": [
      "styl5.css"
    ],
    "allFiles": [
      "kwerendy.txt",
      "paczka_zadania.zip",
      "pogotowie.html",
      "pogotowie.jpg",
      "README.md",
      "styl5.css",
      "zgloszenie.php"
    ],
    "fileContents": {
      "kwerendy.txt": "SELECT adres, dyspozytorzy_id from zgloszenia where ratownicy_id=3;\r\nCREATE USER anna3 IDENTIFIED BY 'Fuck!123';\r\nGRANT SELECT, INSERT, UPDATE ON zgloszenia TO anna3;",
      "pogotowie.html": "<!DOCTYPE html>\r\n<html lang=\"pl\">\r\n    <head>\r\n        <meta charset=\"utf-8\">\r\n        <title>Pogotowie ratunkowe</title>\r\n        <link rel=\"stylesheet\" href=\"styl5.css\">\r\n    </head>\r\n    <body>\r\n    <div id=\"baner1\">\r\n        <img src=\"pogotowie.jpg\" alt=\"pogotowie\">\r\n        </div>\r\n        <div id=\"baner2\">\r\n            <h1>Pogotowie<br> ratunkowe</h1>\r\n        </div>\r\n        <div id=\"baner3\">\r\n        <p>Kontakt:<br>022 222 11 333</p>\r\n        </div>\r\n        <div id=\"glowny\">\r\n        <h2>Dodaj nowe zgłoszenie</h2>\r\n            <form method=\"post\" action=\"zgloszenie.php\">\r\n                Numer zespołu ratowniczego:<br>\r\n            <input type=\"number\" name=\"nrzes\"><br>\r\n                Numer dyspozytora:<br>\r\n                <input type=\"number\" name=\"nrdys\"><br>\r\n                Adres:<br>\r\n                <input type=\"text\" name=\"adres\" size=\"100\"><br>\r\n                <input type=\"reset\" value=\"WYCZYSC\">\r\n                <input type=\"submit\" value=\"ZGŁOŚ\">\r\n                \r\n            </form>\r\n        </div>\r\n        <div id=\"stopka1\">\r\n        <H4>Numery alarmowe</H4>\r\n            <ul>\r\n            <li>999</li>\r\n                <li>112</li>\r\n            </ul>\r\n        </div>\r\n        <div id=\"stopka2\">\r\n        <a href=\"kwerendy.txt\">Pobierz kwerendy</a>\r\n        </div>\r\n        <div id=\"stopka3\">\r\n        <p>Autor:<br>0000000000</p>\r\n        </div>\r\n    </body>\r\n</html>",
      "README.md": "# 📌 ee09_pogotowie (EE.09 (Programowanie i administrowanie stronami oraz bazami))\n\n> **Temat zadania:** Dyspozytornia Pogotowia Ratunkowego  \n> **Kwalifikacja:** EE.09 (Programowanie i administrowanie stronami oraz bazami)  \n> **Technologie:** HTML5, CSS3, PHP, MySQL\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nSystem rejestracji wyjazdów karetek, zespołów ratowniczych i zgłoszeń medycznych z kwerendami SQL i panelem PHP.\n\n### Główne elementy rozwiązania:\n- Opracowanie semantycznej struktury strony w standardzie HTML5.\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Oprogramowanie skryptu backendowego w PHP (mysqli) do komunikacji z bazą danych MySQL.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 🌐 **Pliki HTML:** `pogotowie.html`\n- 🐘 **Skrypty PHP:** `zgloszenie.php`\n- 📝 **Pliki tekstowe / Kwerendy:** `kwerendy.txt`\n- 🎨 **Style CSS:** `styl5.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n3. **Uruchomienie PHP:**\n   - Skopiuj ten rozpakowany folder do katalogu `C:\\xampp\\htdocs\\ee09_pogotowie`.\n   - Uruchom moduł **Apache** w XAMPP.\n   - Otwórz w przeglądarce adres: `http://localhost/ee09_pogotowie/zgloszenie.php`.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
      "styl5.css": "body{\r\n    margin:0;\r\n    font-family: Georgia;\r\n}\r\n#baner1{\r\n    background-color: sienna;\r\n    color:white;\r\n    height:150px;\r\n    width:40%;\r\n    float:left;\r\n}\r\n#baner2{\r\n    background-color: sienna;\r\n    color:white;\r\n    height:150px;\r\n    width:50%;\r\n    font-size: 150%;\r\n    float:left;\r\n}\r\n#baner3{\r\n    background-color: sienna;\r\n    color:white;\r\n    height:150px;\r\n    width:10%;\r\n    text-align: center;\r\n    float:left;\r\n}\r\n#glowny{\r\n    background-color: tan;\r\n    padding:100px;\r\n    width:100%;\r\n    float:left;\r\n}\r\n#stopka1{\r\n    background-color: sienna;\r\n    color:white;\r\n    height:150px;\r\n    width:40%;\r\n    float:left;\r\n}\r\n#stopka2{\r\n    background-color: sienna;\r\n    color:white;\r\n    height:150px;\r\n    width:50%;\r\n    font-size: 150%;\r\n    float:left;\r\n}\r\n#stopka3{\r\n    background-color: sienna;\r\n    color:white;\r\n    height:150px;\r\n    width:10%;\r\n    text-align: center;\r\n    float:left;\r\n}\r\nli{\r\n    list-style-type: circle;\r\n}\r\na{\r\n    border:1px dotted sienna;\r\n    background-color: tan;\r\n    padding:40px;\r\n    line-height: 150px;\r\n    color:sienna;\r\n}",
      "zgloszenie.php": "<?php\r\n    error_reporting(E_ALL & ~E_NOTICE & ~E_WARNING);\r\n\r\n$nrz=$_POST['nrzes'];\r\n$nrd=$_POST['nrdys'];\r\n$adres=$_POST['adres'];\r\n\r\n$conn=mysqli_connect('localhost','root','','ratownictwo') or die('blad w polaczeniu');\r\n$zapytanie=\"INSERT INTO zgloszenia values(NULL,'$nrz','$nrd','$adres',0,CURRENT_TIMESTAMP)\";\r\n\r\nmysqli_query($conn,$zapytanie);\r\n\r\nmysqli_close($conn);\r\n\r\n\r\n\r\n\r\n?>\r\n"
    }
  },
  {
    "id": "Kwalifikacja_EE09_ee09_prognoza",
    "category": "Kwalifikacja_EE09",
    "name": "ee09 prognoza",
    "title": "Portal Prognozy Pogody (Meteo)",
    "description": "Strona prezentująca aktualne warunki atmosferyczne, opady, temperaturę i ciśnienie dla miast pobierane z bazy MySQL.",
    "technologies": [
      "HTML5",
      "CSS3",
      "PHP (mysqli)",
      "MySQL"
    ],
    "folder": "Kwalifikacja_EE09/ee09_prognoza",
    "mainPdf": null,
    "mainHtml": null,
    "mainPhp": "meteo.php",
    "mainSql": null,
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# 📌 ee09_prognoza (EE.09 (Programowanie i administrowanie stronami oraz bazami))\n\n> **Temat zadania:** Portal Prognozy Pogody (Meteo)  \n> **Kwalifikacja:** EE.09 (Programowanie i administrowanie stronami oraz bazami)  \n> **Technologie:** HTML5, CSS3, PHP (mysqli), MySQL\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nStrona prezentująca aktualne warunki atmosferyczne, opady, temperaturę i ciśnienie dla miast pobierane z bazy MySQL.\n\n### Główne elementy rozwiązania:\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Oprogramowanie skryptu backendowego w PHP (mysqli) do komunikacji z bazą danych MySQL.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 🐘 **Skrypty PHP:** `meteo.php`\n- 📝 **Pliki tekstowe / Kwerendy:** `kwerendy.txt`\n- 🎨 **Style CSS:** `styl4.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n3. **Uruchomienie PHP:**\n   - Skopiuj ten rozpakowany folder do katalogu `C:\\xampp\\htdocs\\ee09_prognoza`.\n   - Uruchom moduł **Apache** w XAMPP.\n   - Otwórz w przeglądarce adres: `http://localhost/ee09_prognoza/meteo.php`.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
    "pdfs": [],
    "htmls": [],
    "phps": [
      "meteo.php"
    ],
    "sqls": [],
    "zips": [
      "paczka_zadania.zip"
    ],
    "txts": [
      "kwerendy.txt"
    ],
    "scripts": [
      "styl4.css"
    ],
    "allFiles": [
      "kwerendy.txt",
      "logo.png",
      "meteo.php",
      "obraz.jpg",
      "paczka_zadania.zip",
      "README.md",
      "styl4.css"
    ],
    "fileContents": {
      "kwerendy.txt": "dskfnjas",
      "meteo.php": "<!DOCTYPE html>\r\n<html lang=\"pl\">\r\n    <head>\r\n        <meta charset=\"UTF-8\" />\r\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n        <title>Prognoza pogody Poznań</title>\r\n        <link rel=\"stylesheet\" href=\"styl4.css\" />\r\n          <section id=\"lewyb\">\r\n        <p>maj,2019 r.</p>\r\n        </section>\r\n          <section id=\"srodb\">\r\n        <h2>Prognoza dla Poznania</h2>\r\n        </section>\r\n          <section id=\"prawyb\">\r\n        <img src=\"logo.png\" alt=\"prognoza\">\r\n        </section>\r\n          <section id=\"lewy\">\r\n        <a href=\"kwerendy.txt\">Kwerendy</a>\r\n        </section>\r\n          <section id=\"prawy\">\r\n        <img src=\"obraz.jpg\" alt=\"Polska, Poznań\">\r\n        </section>\r\n          <section id=\"glowny\">\r\n              <table>\r\n                  <tr><th>Lp.</th><th>DATA</th><th>NOC-TEMPERATURA</th><TH>DZIEŃ-TEMPERATURA</TH><TH>OPADY[mm/h]</TH><th>CIŚNIENIE[hPa]</th></tr>\r\n        <?php\r\n    error_reporting(E_ALL & ~E_NOTICE & ~E_WARNING);\r\n\r\n              $conn=mysqli_connect('localhost','root','','prognoza') or die('bład w połaczeniu z bazą');\r\n                  $zapytanie=\"select data_prognozy,temperatura_noc,temperatura_dzien,opady,cisnienie from pogoda where miasta_id=2\";\r\n                  $dane=mysqli_query($conn, $zapytanie);\r\n                  $i=1;\r\n                  foreach($dane as $dane1){\r\n                      echo\"<tr><td>\".$i.\"</td>\";\r\n                      echo\"<td>\" .$dane1['data_prognozy'].\"</td>\";\r\n                      echo\"<td>\".$dane1['temperatura_noc'].\"</td>\";\r\n                      echo\"<td>\".$dane1['temperatura_dzien'].\"</td>\";\r\n                      echo\"<td>\".$dane1['opady'].\"</td>\";\r\n                      echo\"<td>\".$dane1['cisnienie'].\"</td></tr>\";\r\n                          $i++;\r\n                  }\r\n              ?>\r\n              </table>\r\n        </section>\r\n        <footer>\r\n        <p>Stronę wykonał:000000000</p>\r\n        </footer>\r\n    </head>\r\n    <body>\r\n        \r\n    \r\n    </body>\r\n</html>\r\n",
      "README.md": "# 📌 ee09_prognoza (EE.09 (Programowanie i administrowanie stronami oraz bazami))\n\n> **Temat zadania:** Portal Prognozy Pogody (Meteo)  \n> **Kwalifikacja:** EE.09 (Programowanie i administrowanie stronami oraz bazami)  \n> **Technologie:** HTML5, CSS3, PHP (mysqli), MySQL\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nStrona prezentująca aktualne warunki atmosferyczne, opady, temperaturę i ciśnienie dla miast pobierane z bazy MySQL.\n\n### Główne elementy rozwiązania:\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Oprogramowanie skryptu backendowego w PHP (mysqli) do komunikacji z bazą danych MySQL.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 🐘 **Skrypty PHP:** `meteo.php`\n- 📝 **Pliki tekstowe / Kwerendy:** `kwerendy.txt`\n- 🎨 **Style CSS:** `styl4.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n3. **Uruchomienie PHP:**\n   - Skopiuj ten rozpakowany folder do katalogu `C:\\xampp\\htdocs\\ee09_prognoza`.\n   - Uruchom moduł **Apache** w XAMPP.\n   - Otwórz w przeglądarce adres: `http://localhost/ee09_prognoza/meteo.php`.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
      "styl4.css": "body{\r\n    margin:0;\r\n    font-family: garamond;\r\n}\r\n#lewyb, #prawyb{\r\n    background-color:rgb(95,158,160);\r\n    color:yellow;\r\n    width:20%;\r\n    height: 90px;\r\n    text-align: center;\r\n    float:left;\r\n}\r\n#srodb{\r\n    background-color:rgb(95,158,160);\r\n    color:yellow;\r\n    width:60%;\r\n    height: 90px;\r\n    text-align: center;\r\n    float:left;\r\n}\r\n#lewy, #prawy{\r\n    background-color:rgb(175,238,238);\r\n    width:50%;\r\n    height: 250px;\r\n    float:left;\r\n}\r\n#glowny{\r\n    background-color:rgb(95,158,160);\r\n    padding:30px;\r\n    clear:both;\r\n}\r\nfooter{\r\n    background-color:rgb(175,238,238);\r\n    padding:10px;\r\n}\r\ntable{\r\n    border: 2px dotted green;\r\n    width: 100%;\r\n    border-collapse: collapse;\r\n}\r\ntd{\r\n    border: 2px dotted green;\r\n}\r\nth{\r\n    border: 2px dotted green;\r\n    background-color: green;\r\n    color:yellow;\r\n}"
    }
  },
  {
    "id": "Kwalifikacja_EE09_ee09_rybki",
    "category": "Kwalifikacja_EE09",
    "name": "ee09 rybki",
    "title": "Atlas Ryb i Wędkowanie",
    "description": "Witryna prezentująca gatunki ryb z dynamicznym skryptem PHP łączącym się z relacyjną bazą danych.",
    "technologies": [
      "HTML5",
      "CSS3",
      "PHP",
      "MySQL"
    ],
    "folder": "Kwalifikacja_EE09/ee09_rybki",
    "mainPdf": null,
    "mainHtml": null,
    "mainPhp": "wedkuj.php",
    "mainSql": null,
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# 📌 ee09_rybki (EE.09 (Programowanie i administrowanie stronami oraz bazami))\n\n> **Temat zadania:** Atlas Ryb i Wędkowanie  \n> **Kwalifikacja:** EE.09 (Programowanie i administrowanie stronami oraz bazami)  \n> **Technologie:** HTML5, CSS3, PHP, MySQL\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nWitryna prezentująca gatunki ryb z dynamicznym skryptem PHP łączącym się z relacyjną bazą danych.\n\n### Główne elementy rozwiązania:\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Oprogramowanie skryptu backendowego w PHP (mysqli) do komunikacji z bazą danych MySQL.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 🐘 **Skrypty PHP:** `wedkuj.php`\n- 📝 **Pliki tekstowe / Kwerendy:** `kwerendy.txt`\n- 🎨 **Style CSS:** `styl2.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n3. **Uruchomienie PHP:**\n   - Skopiuj ten rozpakowany folder do katalogu `C:\\xampp\\htdocs\\ee09_rybki`.\n   - Uruchom moduł **Apache** w XAMPP.\n   - Otwórz w przeglądarce adres: `http://localhost/ee09_rybki/wedkuj.php`.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
    "pdfs": [],
    "htmls": [],
    "phps": [
      "wedkuj.php"
    ],
    "sqls": [],
    "zips": [
      "paczka_zadania.zip"
    ],
    "txts": [
      "kwerendy.txt"
    ],
    "scripts": [
      "styl2.css"
    ],
    "allFiles": [
      "kwerendy.txt",
      "paczka_zadania.zip",
      "README.md",
      "ryba2.jpg",
      "styl2.css",
      "wedkuj.php"
    ],
    "fileContents": {
      "kwerendy.txt": "1.select id,nazwa,wystepowanie from ryby where styl_zycia=2;\r\n2.select akwen,wojewodztwo from lowisko where rodzaj=2 or 3;\r\n3.select nazwa from ryby join okres_ochronny on ryby.id=okres_ochronny.Ryby_id where okres_ochronny.od_miesiaca=0;\r\n4.create table wedkarze(id int,imie varchar(200),nazwisko varchar(200),punkty int);",
      "README.md": "# 📌 ee09_rybki (EE.09 (Programowanie i administrowanie stronami oraz bazami))\n\n> **Temat zadania:** Atlas Ryb i Wędkowanie  \n> **Kwalifikacja:** EE.09 (Programowanie i administrowanie stronami oraz bazami)  \n> **Technologie:** HTML5, CSS3, PHP, MySQL\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nWitryna prezentująca gatunki ryb z dynamicznym skryptem PHP łączącym się z relacyjną bazą danych.\n\n### Główne elementy rozwiązania:\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Oprogramowanie skryptu backendowego w PHP (mysqli) do komunikacji z bazą danych MySQL.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 🐘 **Skrypty PHP:** `wedkuj.php`\n- 📝 **Pliki tekstowe / Kwerendy:** `kwerendy.txt`\n- 🎨 **Style CSS:** `styl2.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n3. **Uruchomienie PHP:**\n   - Skopiuj ten rozpakowany folder do katalogu `C:\\xampp\\htdocs\\ee09_rybki`.\n   - Uruchom moduł **Apache** w XAMPP.\n   - Otwórz w przeglądarce adres: `http://localhost/ee09_rybki/wedkuj.php`.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
      "styl2.css": "body{\r\n    margin:0px;\r\n    font-family: Garamond;\r\n}\r\nheader,footer{\r\n    background-color: #3CB371;\r\n    color: white;\r\n    padding: 10px;\r\n    font-size: 130%;\r\n    text-align: center;\r\n    clear: both;\r\n}\r\n#lewy{\r\n    background-color: #FAEBD7;\r\n    width: 55%;\r\n    height: 450px;\r\n    float: left;\r\n}\r\n#prawy{\r\n    background-color: #FAEBD7;\r\n    width: 45%;\r\n    height: 450px;\r\n    float: left;\r\n}\r\nimg{\r\n padding: 3px;\r\n    margin: 15px;\r\n    border: 2px dashed #3CB371;\r\n}",
      "wedkuj.php": "<!DOCTYPE html>\r\n<html lang=\"pl\">\r\n    <head>\r\n        <meta charset=\"UTF-8\" />\r\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n        <title>Klub wędkowania</title>\r\n        <link rel=\"stylesheet\" href=\"styl2.css\" />\r\n    </head>\r\n    <body>\r\n       <header><h2>Wędkuj z nami!</h2></header>\r\n        <section id=\"lewy\"><img src=\"ryba2.jpg\" alt=\"Sczupak\"></section>\r\n        <section id=\"prawy\">\r\n        <h3>Ryby spokojnego żeru(białe)</h3>\r\n            <?php\r\n    error_reporting(E_ALL & ~E_NOTICE & ~E_WARNING);\r\n\r\n            $conn=mysqli_connect('localhost','root','','wedkowanie') or die('błąd w połaczeniu');\r\n            $zapytanie=\"select id,nazwa,wystepowanie from ryby where styl_zycia=2\";\r\n            $dane=mysqli_query($conn,$zapytanie);\r\n            \r\n            foreach($dane as $dane1){\r\n                echo\"<p>\".$dane1['id'].\". \".$dane1['nazwa'].\", występuje w: \".$dane1['wystepowanie'].\"</p>\";\r\n                \r\n            }\r\n            mysqli_close($conn);\r\n            ?>\r\n            <ol>\r\n            <li><a href=\"https://wedkuje.pl/\">Odwiedź także</a></li>\r\n            <li><a href=\"http://www.pzw.org.pl\">Polski Związek Wędkarski</a></li>\r\n            </ol>\r\n        </section>\r\n        <footer><p>Stronę wykonał:0000000</p></footer>\r\n\r\n    </body>\r\n</html>"
    }
  },
  {
    "id": "Kwalifikacja_EE09_ee09_ryby",
    "category": "Kwalifikacja_EE09",
    "name": "ee09 ryby",
    "title": "Baza Danych Ryb i Zawody Wędkarskie",
    "description": "Aplikacja prezentująca gatunki ryb, stanowiska wędkarskie oraz wyniki zawodów wędkarskich wraz z kwerendami SQL.",
    "technologies": [
      "HTML5",
      "CSS3",
      "PHP",
      "MySQL"
    ],
    "folder": "Kwalifikacja_EE09/ee09_ryby",
    "mainPdf": null,
    "mainHtml": "stacja.html",
    "mainPhp": "zgloszenie.php",
    "mainSql": null,
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# 📌 ee09_ryby (EE.09 (Programowanie i administrowanie stronami oraz bazami))\n\n> **Temat zadania:** Baza Danych Ryb i Zawody Wędkarskie  \n> **Kwalifikacja:** EE.09 (Programowanie i administrowanie stronami oraz bazami)  \n> **Technologie:** HTML5, CSS3, PHP, MySQL\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nAplikacja prezentująca gatunki ryb, stanowiska wędkarskie oraz wyniki zawodów wędkarskich wraz z kwerendami SQL.\n\n### Główne elementy rozwiązania:\n- Opracowanie semantycznej struktury strony w standardzie HTML5.\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Oprogramowanie skryptu backendowego w PHP (mysqli) do komunikacji z bazą danych MySQL.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 🌐 **Pliki HTML:** `stacja.html`, `zawody.html`\n- 🐘 **Skrypty PHP:** `zgloszenie.php`\n- 📝 **Pliki tekstowe / Kwerendy:** `kwerendy.txt`, `sql.txt`\n- 🎨 **Style CSS:** `css/styl5.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n3. **Uruchomienie PHP:**\n   - Skopiuj ten rozpakowany folder do katalogu `C:\\xampp\\htdocs\\ee09_ryby`.\n   - Uruchom moduł **Apache** w XAMPP.\n   - Otwórz w przeglądarce adres: `http://localhost/ee09_ryby/zgloszenie.php`.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
    "pdfs": [],
    "htmls": [
      "stacja.html",
      "zawody.html"
    ],
    "phps": [
      "zgloszenie.php"
    ],
    "sqls": [],
    "zips": [
      "paczka_zadania.zip"
    ],
    "txts": [
      "kwerendy.txt",
      "sql.txt"
    ],
    "scripts": [
      "css/styl5.css"
    ],
    "allFiles": [
      "css/styl5.css",
      "css/styl5.css.map",
      "kwerendy.txt",
      "paczka_zadania.zip",
      "README.md",
      "scss/styl5.scss",
      "sql.txt",
      "stacja.html",
      "zawody.html",
      "zawody.jpg",
      "zgloszenie.php"
    ],
    "fileContents": {
      "css/styl5.css": "* {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: Tahoma, sans-serif;\n}\n\nheader {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.left,\n.right {\n  height: 200px;\n  width: 30%;\n  background-color: RosyBrown;\n  color: white;\n}\n\n.middle {\n  height: 200px;\n  width: 40%;\n  background-color: RosyBrown;\n  color: white;\n  text-align: center;\n}\n\nmain {\n  background-color: Wheat;\n  padding: 50px;\n}\n\nfooter {\n  background-color: RosyBrown;\n  color: white;\n  padding: 5px;\n  text-align: center;\n}\n\na {\n  background-color: Salmon;\n  color: DarkRed;\n  border: 2px solid DarkRed;\n  padding: 20px;\n  line-height: 200px;\n}\n/*# sourceMappingURL=styl5.css.map */",
      "kwerendy.txt": "1. INSERT INTO `zawody_wedkarskie`(`id`, `Karty_wedkarskie_id`, `Lowisko_id`, `data_zawodow`, `sedzia`) VALUES ('null',2,4,'2018-09-28','Tomasz Kowal');\r\n2. SELECT data_zawodow FROM zawody_wedkarskie WHERE sedzia='Jan Kowalewski';\r\n3. SELECT imie, nazwisko FROM karty_wedkarskie, zawody_wedkarskie WHERE zawody_wedkarskie.id=3;\r\n4. UPDATE karty_wedkarskie SET punkty = 10 WHERE id = 2;",
      "README.md": "# 📌 ee09_ryby (EE.09 (Programowanie i administrowanie stronami oraz bazami))\n\n> **Temat zadania:** Baza Danych Ryb i Zawody Wędkarskie  \n> **Kwalifikacja:** EE.09 (Programowanie i administrowanie stronami oraz bazami)  \n> **Technologie:** HTML5, CSS3, PHP, MySQL\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nAplikacja prezentująca gatunki ryb, stanowiska wędkarskie oraz wyniki zawodów wędkarskich wraz z kwerendami SQL.\n\n### Główne elementy rozwiązania:\n- Opracowanie semantycznej struktury strony w standardzie HTML5.\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Oprogramowanie skryptu backendowego w PHP (mysqli) do komunikacji z bazą danych MySQL.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 🌐 **Pliki HTML:** `stacja.html`, `zawody.html`\n- 🐘 **Skrypty PHP:** `zgloszenie.php`\n- 📝 **Pliki tekstowe / Kwerendy:** `kwerendy.txt`, `sql.txt`\n- 🎨 **Style CSS:** `css/styl5.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n3. **Uruchomienie PHP:**\n   - Skopiuj ten rozpakowany folder do katalogu `C:\\xampp\\htdocs\\ee09_ryby`.\n   - Uruchom moduł **Apache** w XAMPP.\n   - Otwórz w przeglądarce adres: `http://localhost/ee09_ryby/zgloszenie.php`.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
      "sql.txt": "-- phpMyAdmin SQL Dump\r\n-- version 4.7.4\r\n-- https://www.phpmyadmin.net/\r\n--\r\n-- Host: 127.0.0.1\r\n-- Czas generowania: 22 Lut 2018, 08:12\r\n-- Wersja serwera: 10.1.28-MariaDB\r\n-- Wersja PHP: 7.1.10\r\n\r\nSET SQL_MODE = \"NO_AUTO_VALUE_ON_ZERO\";\r\nSET AUTOCOMMIT = 0;\r\nSTART TRANSACTION;\r\nSET time_zone = \"+00:00\";\r\n\r\n\r\n/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;\r\n/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;\r\n/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;\r\n/*!40101 SET NAMES utf8mb4 */;\r\n\r\n--\r\n-- Baza danych: `wedkowanie`\r\n--\r\n\r\n-- --------------------------------------------------------\r\n\r\n--\r\n-- Struktura tabeli dla tabeli `karty_wedkarskie`\r\n--\r\n\r\nCREATE TABLE `karty_wedkarskie` (\r\n  `id` int(10) UNSIGNED NOT NULL,\r\n  `imie` text,\r\n  `nazwisko` text,\r\n  `adres` text,\r\n  `data_zezwolenia` date DEFAULT NULL,\r\n  `punkty` int(10) UNSIGNED DEFAULT NULL\r\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\r\n\r\n--\r\n-- Zrzut danych tabeli `karty_wedkarskie`\r\n--\r\n\r\nINSERT INTO `karty_wedkarskie` (`id`, `imie`, `nazwisko`, `adres`, `data_zezwolenia`, `punkty`) VALUES\r\n(1, 'Jan', 'Kowalski', 'Warszawa, Aleje Jerozolimskie 65/4', '2018-02-15', 23),\r\n(2, 'Andrzej', 'Nowak', 'Poznan, Dabowskiego 16/4', '2018-03-12', 3);\r\n\r\n-- --------------------------------------------------------\r\n\r\n--\r\n-- Struktura tabeli dla tabeli `lowisko`\r\n--\r\n\r\nCREATE TABLE `lowisko` (\r\n  `id` int(10) UNSIGNED NOT NULL,\r\n  `Ryby_id` int(10) UNSIGNED NOT NULL,\r\n  `akwen` text,\r\n  `wojewodztwo` text,\r\n  `rodzaj` int(10) UNSIGNED DEFAULT NULL\r\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\r\n\r\n--\r\n-- Zrzut danych tabeli `lowisko`\r\n--\r\n\r\nINSERT INTO `lowisko` (`id`, `Ryby_id`, `akwen`, `wojewodztwo`, `rodzaj`) VALUES\r\n(1, 2, 'Zalew Wegrowski', 'Mazowieckie', 4),\r\n(2, 3, 'Zbiornik Bukowka', 'Dolnoslaskie', 2),\r\n(3, 2, 'Jeziorko Bartbetowskie', 'Warminsko-Mazurskie', 2),\r\n(4, 1, 'Warta-Obrzycko', 'Wielkopolskie', 3),\r\n(5, 2, 'Stawy Milkow', 'Podkarpackie', 5),\r\n(6, 7, 'Przemsza k. Okradzinowa', 'Slaskie', 3);\r\n\r\n-- --------------------------------------------------------\r\n\r\n--\r\n-- Struktura tabeli dla tabeli `okres_ochronny`\r\n--\r\n\r\nCREATE TABLE `okres_ochronny` (\r\n  `id` int(10) UNSIGNED NOT NULL,\r\n  `Ryby_id` int(10) UNSIGNED NOT NULL,\r\n  `od_miesiaca` int(10) UNSIGNED DEFAULT NULL,\r\n  `do_miesiaca` int(10) UNSIGNED DEFAULT NULL,\r\n  `wymiar_ochronny` int(10) UNSIGNED DEFAULT NULL\r\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\r\n\r\n--\r\n-- Zrzut danych tabeli `okres_ochronny`\r\n--\r\n\r\nINSERT INTO `okres_ochronny` (`id`, `Ryby_id`, `od_miesiaca`, `do_miesiaca`, `wymiar_ochronny`) VALUES\r\n(1, 1, 1, 4, 50),\r\n(2, 2, 0, 0, 30),\r\n(3, 3, 1, 5, 50),\r\n(4, 4, 0, 0, 15),\r\n(5, 5, 11, 6, 70),\r\n(6, 6, 0, 0, 0),\r\n(7, 7, 0, 0, 0),\r\n(8, 8, 0, 0, 25);\r\n\r\n-- --------------------------------------------------------\r\n\r\n--\r\n-- Struktura tabeli dla tabeli `ryby`\r\n--\r\n\r\nCREATE TABLE `ryby` (\r\n  `id` int(10) UNSIGNED NOT NULL,\r\n  `nazwa` text,\r\n  `wystepowanie` text,\r\n  `styl_zycia` int(11) DEFAULT NULL\r\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\r\n\r\n--\r\n-- Zrzut danych tabeli `ryby`\r\n--\r\n\r\nINSERT INTO `ryby` (`id`, `nazwa`, `wystepowanie`, `styl_zycia`) VALUES\r\n(1, 'Szczupak', 'stawy, rzeki', 1),\r\n(2, 'Karp', 'stawy, jeziora', 2),\r\n(3, 'Sandacz', 'stawy, jeziora, rzeki', 1),\r\n(4, 'Okon', 'rzeki', 1),\r\n(5, 'Sum', 'jeziora, rzeki', 1),\r\n(6, 'Dorsz', 'morza, oceany', 1),\r\n(7, 'Leszcz', 'jeziora', 2),\r\n(8, 'Lin', 'jeziora', 2);\r\n\r\n-- --------------------------------------------------------\r\n\r\n--\r\n-- Struktura tabeli dla tabeli `samochody`\r\n--\r\n\r\nCREATE TABLE `samochody` (\r\n  `id` int(10) UNSIGNED NOT NULL,\r\n  `marka` text,\r\n  `model` text,\r\n  `rocznik` year(4) DEFAULT NULL,\r\n  `kolor` text,\r\n  `stan` text\r\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\r\n\r\n--\r\n-- Zrzut danych tabeli `samochody`\r\n--\r\n\r\nINSERT INTO `samochody` (`id`, `marka`, `model`, `rocznik`, `kolor`, `stan`) VALUES\r\n(1, 'Fiat', 'Punto', 2016, 'czerwony', 'bardzo dobry'),\r\n(2, 'Fiat', 'Punto', 2002, 'czerwony', 'dobry'),\r\n(3, 'Fiat', 'Punto', 2007, 'niebieski', 'bardzo bobry'),\r\n(4, 'Opel', 'Corsa', 2016, 'grafitowy', 'bardzo dobry'),\r\n(5, 'Opel', 'Astra', 2003, 'niebieski', 'porysowany lakier'),\r\n(6, 'Toyota', 'Corolla', 2016, 'czerwony', 'bardzo dobry'),\r\n(7, 'Toyota', 'Corolla', 2014, 'szary', 'dobry'),\r\n(8, 'Toyota', 'Yaris', 2004, 'granatowy', 'dobry');\r\n\r\n-- --------------------------------------------------------\r\n\r\n--\r\n-- Struktura tabeli dla tabeli `typy`\r\n--\r\n\r\nCREATE TABLE `typy` (\r\n  `id` int(10) UNSIGNED NOT NULL,\r\n  `kategoria` text\r\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\r\n\r\n--\r\n-- Zrzut danych tabeli `typy`\r\n--\r\n\r\nINSERT INTO `typy` (`id`, `kategoria`) VALUES\r\n(1, 'Procesor'),\r\n(2, 'RAM'),\r\n(5, 'karta graficzna'),\r\n(6, 'HDD');\r\n\r\n-- --------------------------------------------------------\r\n\r\n--\r\n-- Struktura tabeli dla tabeli `uczniowie`\r\n--\r\n\r\nCREATE TABLE `uczniowie` (\r\n  `imie` text,\r\n  `nazwisko` text,\r\n  `wiek` int(11) DEFAULT NULL\r\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\r\n\r\n--\r\n-- Zrzut danych tabeli `uczniowie`\r\n--\r\n\r\nINSERT INTO `uczniowie` (`imie`, `nazwisko`, `wiek`) VALUES\r\n('Kamil', 'Ryba', 11),\r\n('Karolina', 'Witecka', 8),\r\n('Karol', 'Rybacki', 9),\r\n('Marina', 'Damiencka', 9);\r\n\r\n-- --------------------------------------------------------\r\n\r\n--\r\n-- Struktura tabeli dla tabeli `uzytkownik`\r\n--\r\n\r\nCREATE TABLE `uzytkownik` (\r\n  `id` int(10) UNSIGNED NOT NULL,\r\n  `imie` text,\r\n  `nazwisko` text,\r\n  `telefon` text,\r\n  `email` text\r\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\r\n\r\n--\r\n-- Zrzut danych tabeli `uzytkownik`\r\n--\r\n\r\nINSERT INTO `uzytkownik` (`id`, `imie`, `nazwisko`, `telefon`, `email`) VALUES\r\n(1, 'Anna', 'Kowalska', '601601601', 'anna@poczta.pl'),\r\n(2, 'Jan', 'Nowak', '608608608', 'jan@poczta.pl'),\r\n(3, 'Jolanta', 'Jasny', '606606606', 'jolanta@poczta.pl'),\r\n(4, 'qqq', 'www', '345', 'dsfsdklfs@daskl');\r\n\r\n-- --------------------------------------------------------\r\n\r\n--\r\n-- Struktura tabeli dla tabeli `wyniki`\r\n--\r\n\r\nCREATE TABLE `wyniki` (\r\n  `id` int(10) UNSIGNED NOT NULL,\r\n  `dyscyplina_id` int(10) UNSIGNED NOT NULL,\r\n  `sportowiec_id` int(10) UNSIGNED NOT NULL,\r\n  `wynik` decimal(5,2) DEFAULT NULL,\r\n  `dataUstanowienia` date DEFAULT NULL\r\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\r\n\r\n--\r\n-- Zrzut danych tabeli `wyniki`\r\n--\r\n\r\nINSERT INTO `wyniki` (`id`, `dyscyplina_id`, `sportowiec_id`, `wynik`, `dataUstanowienia`) VALUES\r\n(1, 1, 1, '12.40', '2015-10-14'),\r\n(2, 1, 1, '12.00', '2015-10-06'),\r\n(3, 1, 2, '11.80', '2015-10-14'),\r\n(4, 1, 2, '11.90', '2015-10-06'),\r\n(5, 1, 3, '11.50', '2015-10-14'),\r\n(6, 1, 3, '11.56', '2015-10-06'),\r\n(7, 1, 4, '11.70', '2015-10-14'),\r\n(8, 1, 4, '11.67', '2015-10-06'),\r\n(9, 1, 5, '11.30', '2015-10-14'),\r\n(10, 1, 5, '11.52', '2015-10-06'),\r\n(11, 1, 6, '12.10', '2015-10-14'),\r\n(12, 1, 6, '12.00', '2015-10-06'),\r\n(13, 3, 1, '63.00', '2015-11-11'),\r\n(14, 3, 1, '63.60', '2015-10-13'),\r\n(15, 3, 2, '64.00', '2015-11-11'),\r\n(16, 3, 2, '63.60', '2015-10-13'),\r\n(17, 3, 3, '60.00', '2015-11-11'),\r\n(18, 3, 3, '61.60', '2015-10-13'),\r\n(19, 3, 4, '63.50', '2015-11-11'),\r\n(20, 3, 4, '63.60', '2015-10-13'),\r\n(21, 3, 5, '70.00', '2015-10-07'),\r\n(22, 3, 6, '68.00', '2015-10-07');\r\n\r\n-- --------------------------------------------------------\r\n\r\n--\r\n-- Struktura tabeli dla tabeli `zamowienia`\r\n--\r\n\r\nCREATE TABLE `zamowienia` (\r\n  `id` int(10) UNSIGNED NOT NULL,\r\n  `Samochody_id` int(10) UNSIGNED NOT NULL,\r\n  `Klient` text,\r\n  `telefon` text,\r\n  `dataZam` date DEFAULT NULL\r\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\r\n\r\n--\r\n-- Zrzut danych tabeli `zamowienia`\r\n--\r\n\r\nINSERT INTO `zamowienia` (`id`, `Samochody_id`, `Klient`, `telefon`, `dataZam`) VALUES\r\n(1, 3, 'Anna Kowalska', '111222333', '2016-02-15'),\r\n(2, 6, 'Jan Nowakowski', '222111333', '2016-02-15'),\r\n(3, 8, 'Marcin Kolwal', '333111222', '2016-02-15');\r\n\r\n-- --------------------------------------------------------\r\n\r\n--\r\n-- Struktura tabeli dla tabeli `zawody_wedkarskie`\r\n--\r\n\r\nCREATE TABLE `zawody_wedkarskie` (\r\n  `id` int(10) UNSIGNED NOT NULL,\r\n  `Karty_wedkarskie_id` int(10) UNSIGNED NOT NULL,\r\n  `Lowisko_id` int(10) UNSIGNED NOT NULL,\r\n  `data_zawodow` date DEFAULT NULL,\r\n  `sedzia` text\r\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\r\n\r\n--\r\n-- Zrzut danych tabeli `zawody_wedkarskie`\r\n--\r\n\r\nINSERT INTO `zawody_wedkarskie` (`id`, `Karty_wedkarskie_id`, `Lowisko_id`, `data_zawodow`, `sedzia`) VALUES\r\n(1, 1, 3, '2018-04-12', 'Jan Kowalewski'),\r\n(2, 1, 5, '2018-05-01', 'Jan Kowalewski'),\r\n(3, 1, 2, '2018-06-01', 'Jan Kowalewski'),\r\n(4, 2, 1, '2018-06-21', 'Krzysztof Dobrowolski');\r\n\r\n--\r\n-- Indeksy dla zrzutów tabel\r\n--\r\n\r\n--\r\n-- Indexes for table `karty_wedkarskie`\r\n--\r\nALTER TABLE `karty_wedkarskie`\r\n  ADD PRIMARY KEY (`id`);\r\n\r\n--\r\n-- Indexes for table `lowisko`\r\n--\r\nALTER TABLE `lowisko`\r\n  ADD PRIMARY KEY (`id`);\r\n\r\n--\r\n-- Indexes for table `okres_ochronny`\r\n--\r\nALTER TABLE `okres_ochronny`\r\n  ADD PRIMARY KEY (`id`);\r\n\r\n--\r\n-- Indexes for table `ryby`\r\n--\r\nALTER TABLE `ryby`\r\n  ADD PRIMARY KEY (`id`);\r\n\r\n--\r\n-- Indexes for table `samochody`\r\n--\r\nALTER TABLE `samochody`\r\n  ADD PRIMARY KEY (`id`);\r\n\r\n--\r\n-- Indexes for table `typy`\r\n--\r\nALTER TABLE `typy`\r\n  ADD PRIMARY KEY (`id`);\r\n\r\n--\r\n-- Indexes for table `uzytkownik`\r\n--\r\nALTER TABLE `uzytkownik`\r\n  ADD PRIMARY KEY (`id`);\r\n\r\n--\r\n-- Indexes for table `wyniki`\r\n--\r\nALTER TABLE `wyniki`\r\n  ADD PRIMARY KEY (`id`);\r\n\r\n--\r\n-- Indexes for table `zamowienia`\r\n--\r\nALTER TABLE `zamowienia`\r\n  ADD PRIMARY KEY (`id`);\r\n\r\n--\r\n-- Indexes for table `zawody_wedkarskie`\r\n--\r\nALTER TABLE `zawody_wedkarskie`\r\n  ADD PRIMARY KEY (`id`);\r\n\r\n--\r\n-- AUTO_INCREMENT for dumped tables\r\n--\r\n\r\n--\r\n-- AUTO_INCREMENT dla tabeli `karty_wedkarskie`\r\n--\r\nALTER TABLE `karty_wedkarskie`\r\n  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;\r\n\r\n--\r\n-- AUTO_INCREMENT dla tabeli `lowisko`\r\n--\r\nALTER TABLE `lowisko`\r\n  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;\r\n\r\n--\r\n-- AUTO_INCREMENT dla tabeli `okres_ochronny`\r\n--\r\nALTER TABLE `okres_ochronny`\r\n  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;\r\n\r\n--\r\n-- AUTO_INCREMENT dla tabeli `ryby`\r\n--\r\nALTER TABLE `ryby`\r\n  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;\r\n\r\n--\r\n-- AUTO_INCREMENT dla tabeli `samochody`\r\n--\r\nALTER TABLE `samochody`\r\n  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;\r\n\r\n--\r\n-- AUTO_INCREMENT dla tabeli `typy`\r\n--\r\nALTER TABLE `typy`\r\n  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;\r\n\r\n--\r\n-- AUTO_INCREMENT dla tabeli `uzytkownik`\r\n--\r\nALTER TABLE `uzytkownik`\r\n  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;\r\n\r\n--\r\n-- AUTO_INCREMENT dla tabeli `wyniki`\r\n--\r\nALTER TABLE `wyniki`\r\n  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;\r\n\r\n--\r\n-- AUTO_INCREMENT dla tabeli `zamowienia`\r\n--\r\nALTER TABLE `zamowienia`\r\n  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;\r\n\r\n--\r\n-- AUTO_INCREMENT dla tabeli `zawody_wedkarskie`\r\n--\r\nALTER TABLE `zawody_wedkarskie`\r\n  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;\r\nCOMMIT;\r\n\r\n/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;\r\n/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;\r\n/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;\r\n",
      "stacja.html": "<!DOCTYPE html>\r\n<html lang=\"pl\">\r\n    <head>\r\n        <meta charset=\"utf-8\">\r\n        <title>Stacja paliw</title>\r\n        <link rel=\"stylesheet\" href=\"styl5.css\">\r\n    </head>\r\n    <body>\r\n        <div id=\"baner1\"></div>\r\n        <div id=\"baner2\"></div>\r\n        <div id=\"glowny\"></div>\r\n        <div id=\"lewy\"></div>\r\n        <div id=\"prawy\"></div>\r\n        <footer></footer>\r\n    \r\n      \r\n    </body>\r\n</html>",
      "zawody.html": "<!DOCTYPE html>\r\n<html lang=\"pl\">\r\n\r\n<head>\r\n    <meta charset=\"utf-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <title>Wędkowanie - moje hobby</title>\r\n    <link rel=\"stylesheet\" href=\"../css/styl5.css\">\r\n</head>\r\n\r\n<body>\r\n    <header>\r\n        <div class=\"left\">\r\n            <img src=\"../zawody.jpg\" alt=\"zawody wędkarskie\">\r\n        </div>\r\n        <div class=\"middle\">\r\n            <h1>Zawody wędkarskie</h1>\r\n        </div>\r\n        <div class=\"right\">\r\n            <p><a href=\"../kwerendy.txt\">Pobierz plik</a></p>\r\n        </div>\r\n    </header>\r\n    <main>\r\n        <h2>Dodaj nowe zawody wędkarskie</h2>\r\n        <form action=\"zgloszenie.php\" method=\"post\">\r\n            <label for=\"lowisko\">Łowisko:</label><br>\r\n            <input type=\"number\" name=\"lowisko\" id=\"lowisko\"><br>\r\n            <label for=\"data\">Data (rrrr-mmm-dd):</label><br>\r\n            <input type=\"text\" name=\"data\" id=\"data\"><br>\r\n            <label for=\"sedzia\">Sędzia:</label><br>\r\n            <input type=\"text\" name=\"sedzia\" id=\"sedzia\"><br>\r\n            <button type=\"reset\">WYCZYŚĆ</button><button type=\"submit\">DODAJ</button>\r\n        </form>\r\n        <h2>Łowiska</h2>\r\n        <ol>\r\n            <li>Zalew Węgrowski</li>\r\n            <li>Zbiornik Bukówka</li>\r\n            <li>Jezioro Bartbetowskie</li>\r\n            <li>Warta-Obrzycko</li>\r\n        </ol>\r\n    </main>\r\n    <footer>\r\n        <p>Stronę przygotował: 000 000 000</p>\r\n    </footer>\r\n</body>\r\n\r\n</html>\r\n\r\n",
      "zgloszenie.php": "<?php\r\n    error_reporting(E_ALL & ~E_NOTICE & ~E_WARNING);\r\n\r\n$connect = mysqli_connect('localhost', 'root', \"\");\r\nif (!$connect) exit(\"Błąd połączenia\");\r\nmysqli_select_db($connect, 'wedkarstwo');\r\n\r\n\r\n$lowisko = $_POST['lowisko'];\r\n$data = $_POST['data'];\r\n$sedzia = $_POST['sedzia'];\r\n\r\n\r\n$pre_query = \"INSERT INTO zawody_wedkarskie (id, Karty_wedkarskie_id, Lowisko_id, data_zawodow, sedzia) \r\nVALUE ('null', '0', '$lowisko', '$data', '$sedzia')\";\r\n\r\nmysqli_query($connect, $pre_query);\r\n\r\nmysqli_close($connect);\r\n\r\nheader(\"Location: http://localhost/ee09 ryby/site/zawody.html\");\r\n"
    }
  },
  {
    "id": "Kwalifikacja_EE09_ee09_stacja_paliw",
    "category": "Kwalifikacja_EE09",
    "name": "ee09 stacja paliw",
    "title": "Stacja Paliw i Kalkulator Kosztów",
    "description": "Aplikacja dla stacji paliw z interaktywnym kalkulatorem kosztów tankowania i obliczaniem zasięgu pojazdu w JavaScript.",
    "technologies": [
      "HTML5",
      "CSS3",
      "JavaScript"
    ],
    "folder": "Kwalifikacja_EE09/ee09_stacja_paliw",
    "mainPdf": null,
    "mainHtml": "obliczenia.html",
    "mainPhp": null,
    "mainSql": null,
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# 📌 ee09_stacja_paliw (EE.09 (Programowanie i administrowanie stronami oraz bazami))\n\n> **Temat zadania:** Stacja Paliw i Kalkulator Kosztów  \n> **Kwalifikacja:** EE.09 (Programowanie i administrowanie stronami oraz bazami)  \n> **Technologie:** HTML5, CSS3, JavaScript\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nAplikacja dla stacji paliw z interaktywnym kalkulatorem kosztów tankowania i obliczaniem zasięgu pojazdu w JavaScript.\n\n### Główne elementy rozwiązania:\n- Opracowanie semantycznej struktury strony w standardzie HTML5.\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 🌐 **Pliki HTML:** `obliczenia.html`, `stacja.html`\n- 🎨 **Style CSS:** `styl5.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Uruchomienie strony WWW:**\n   - Kliknij dwukrotnie plik `obliczenia.html` lub przeciągnij go do dowolnej przeglądarki.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
    "pdfs": [],
    "htmls": [
      "obliczenia.html",
      "stacja.html"
    ],
    "phps": [],
    "sqls": [],
    "zips": [
      "paczka_zadania.zip"
    ],
    "txts": [],
    "scripts": [
      "styl5.css"
    ],
    "allFiles": [
      "home.png",
      "obliczenia.html",
      "paczka_zadania.zip",
      "README.md",
      "samochod.png",
      "stacja.html",
      "styl5.css",
      "znak.png"
    ],
    "fileContents": {
      "obliczenia.html": "<!DOCTYPE html>\r\n<html lang=\"pl\">\r\n    <head>\r\n        <meta charset=\"utf-8\">\r\n        <title>Stacja paliw</title>\r\n        <link rel=\"stylesheet\" href=\"styl5.css\">\r\n    </head>\r\n    <body>\r\n        <div id=\"baner1\">\r\n        <h1>Stacja paliw</h1>\r\n        </div>\r\n        <div id=\"baner2\">\r\n      <a href=\"stacja.html\"><img src=\"home.png\"></a>\r\n<a href=\"obliczenia.html\"><img src=\"znak.png\"></a>\r\n        </div>\r\n        <div id=\"glowny\">\r\n        <h3>Oblicz koszt paliwa:</h3>\r\n            Rodzaj paliwa(1-benzyna, 2-olej napedowy)<br><input type=\"number\" id=\"rodzaj\"><br>\r\n            Ile litrów?<br><input type=\"number\" id=\"ile\"><br>\r\n            <button onclick=\"licz()\">Oblicz</button>\r\n            <p id=\"wynik\"></p>\r\n            <script>\r\n                function licz(){\r\n            var rodzaj=document.getElementById(\"rodzaj\").value;\r\n            var ile=document.getElementById(\"ile\").value;\r\n            var wynik=document.getElementById(\"wynik\");\r\n            \r\n            if(rodzaj==1){\r\n                wynik.innerHTML=\"koszt paliwa:\"+ile*4+\" zł\";\r\n            }\r\n                   else if(rodzaj==2){\r\n                wynik.innerHTML=\"koszt paliwa:\"+ile*3.5+\" zł\";\r\n            }\r\n                    else{\r\n                wynik.innerHTML=\"koszt paliwa wynosi 0 zł\";\r\n            }\r\n            }\r\n            </script>\r\n            \r\n        </div>\r\n        <div id=\"lewy\"><a href=\"kwerendy.txt\">Pobierz kwerendy</a></div>\r\n        <div id=\"prawy\"><img src=\"samochod.png\" alt=\"samochod\"></div>\r\n        <footer><p>Strone opracował:matafakus</p></footer>\r\n    \r\n      ",
      "README.md": "# 📌 ee09_stacja_paliw (EE.09 (Programowanie i administrowanie stronami oraz bazami))\n\n> **Temat zadania:** Stacja Paliw i Kalkulator Kosztów  \n> **Kwalifikacja:** EE.09 (Programowanie i administrowanie stronami oraz bazami)  \n> **Technologie:** HTML5, CSS3, JavaScript\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nAplikacja dla stacji paliw z interaktywnym kalkulatorem kosztów tankowania i obliczaniem zasięgu pojazdu w JavaScript.\n\n### Główne elementy rozwiązania:\n- Opracowanie semantycznej struktury strony w standardzie HTML5.\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 🌐 **Pliki HTML:** `obliczenia.html`, `stacja.html`\n- 🎨 **Style CSS:** `styl5.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Uruchomienie strony WWW:**\n   - Kliknij dwukrotnie plik `obliczenia.html` lub przeciągnij go do dowolnej przeglądarki.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
      "stacja.html": "<!DOCTYPE html>\r\n<html lang=\"pl\">\r\n    <head>\r\n        <meta charset=\"utf-8\">\r\n        <title>Stacja paliw</title>\r\n        <link rel=\"stylesheet\" href=\"styl5.css\">\r\n    </head>\r\n    <body>\r\n        <div id=\"baner1\">\r\n        <h1>Stacja paliw</h1>\r\n        </div>\r\n        <div id=\"baner2\">\r\n      <a href=\"stacja.html\"><img src=\"home.png\"></a>\r\n<a href=\"obliczenia.html\"><img src=\"znak.png\"></a>\r\n        </div>\r\n        <div id=\"glowny\">\r\n        <h3>Godziny otwarcia stacji paliw</h3>\r\n            <table>\r\n            <tr>\r\n                <td>Dzień</td><td>Od</td><td>Do</td>\r\n                </tr>\r\n            <tr>\r\n                <td>Pn - Sb</td><td>6:00</td><td>24:00</td>\r\n                </tr>\r\n            <tr>\r\n                <td>Nd</td><td>7:00</td><td>24:00</td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n        <div id=\"lewy\"><a href=\"kwerendy.txt\">Pobierz kwerendy</a></div>\r\n        <div id=\"prawy\"><img src=\"samochod.png\" alt=\"samochod\"></div>\r\n        <footer><p>Strone opracował:matafakus</p></footer>\r\n    \r\n      \r\n    </body>\r\n</html>",
      "styl5.css": "body{\r\n    margin:0;\r\n    font-family:Helvetica;\r\n}\r\n#baner1{\r\n    background-color: rgb(130, 69, 85);\r\n    color:white;\r\n    width:30%;\r\n    height:200px;\r\n    text-align: center;\r\n    float:left;\r\n}\r\n#baner2{\r\n    background-color: rgb(130,69,85);\r\n    color:white;\r\n    width:70%;\r\n    height: 200px;\r\n    text-align: center;;\r\n    float:left;\r\n}\r\n#glowny{\r\n    background-color: rgb(240,234,226);\r\n    padding:120px;\r\n    float:center;\r\n}\r\n#lewy{\r\n    background-color: rgb(130, 69, 85);\r\n    color:white;\r\n    width:30%;\r\n    height:200px;\r\n    text-align: center;\r\n    float:left;\r\n}\r\n#prawy{\r\n    background-color: rgb(130,69,85);\r\n    color:white;\r\n    width:70%;\r\n    height: 200px;\r\n    text-align: center;\r\n    float:left;\r\n}\r\nfooter{\r\n    background-color: rgb(240,234,226);\r\n    padding:120px;\r\n    clear:both;\r\n}\r\ntable,td,tr{\r\n    border:1px solid rgb(130,69,85);\r\n    color:rgb(130,69,85);\r\n    padding:10px;\r\n}\r\na{\r\n    color:rgb(240,234,226);\r\n}"
    }
  },
  {
    "id": "Kwalifikacja_EE09_ee09_zdjecia",
    "category": "Kwalifikacja_EE09",
    "name": "ee09 zdjecia",
    "title": "Galeria Biura Podróży i Cennik Wycieczek",
    "description": "Interaktywna galeria fotografii z miniaturami, powiększaniem zdjęć i dynamicznym cennikiem wycieczek turystycznych.",
    "technologies": [
      "HTML5",
      "CSS3",
      "JavaScript",
      "PHP"
    ],
    "folder": "Kwalifikacja_EE09/ee09_zdjecia",
    "mainPdf": null,
    "mainHtml": null,
    "mainPhp": "biuro.php",
    "mainSql": null,
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# 📌 ee09_zdjecia (EE.09 (Programowanie i administrowanie stronami oraz bazami))\n\n> **Temat zadania:** Galeria Biura Podróży i Cennik Wycieczek  \n> **Kwalifikacja:** EE.09 (Programowanie i administrowanie stronami oraz bazami)  \n> **Technologie:** HTML5, CSS3, JavaScript, PHP\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nInteraktywna galeria fotografii z miniaturami, powiększaniem zdjęć i dynamicznym cennikiem wycieczek turystycznych.\n\n### Główne elementy rozwiązania:\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Oprogramowanie skryptu backendowego w PHP (mysqli) do komunikacji z bazą danych MySQL.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 🐘 **Skrypty PHP:** `biuro.php`\n- 📝 **Pliki tekstowe / Kwerendy:** `kwerendy.txt`\n- 🎨 **Style CSS:** `styl4.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n3. **Uruchomienie PHP:**\n   - Skopiuj ten rozpakowany folder do katalogu `C:\\xampp\\htdocs\\ee09_zdjecia`.\n   - Uruchom moduł **Apache** w XAMPP.\n   - Otwórz w przeglądarce adres: `http://localhost/ee09_zdjecia/biuro.php`.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
    "pdfs": [],
    "htmls": [],
    "phps": [
      "biuro.php"
    ],
    "sqls": [],
    "zips": [
      "paczka_zadania.zip"
    ],
    "txts": [
      "kwerendy.txt"
    ],
    "scripts": [
      "styl4.css"
    ],
    "allFiles": [
      "biuro.php",
      "kwerendy.txt",
      "obraz1.jpeg",
      "obraz2.jpg",
      "obraz3.jpg",
      "obraz4.jpeg",
      "obraz5.jpg",
      "obraz6.jpg",
      "obraz7.jpg",
      "obraz8.jpg",
      "obraz9.jpg",
      "paczka_zadania.zip",
      "README.md",
      "styl4.css"
    ],
    "fileContents": {
      "biuro.php": "<!DOCTYPE HTML>\r\n<html>\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <link rel=\"stylesheet\" href=\"styl4.css\">\r\n    <title>Wycieczki krajoznawcze</title>\r\n    </head>\r\n    <body>\r\n <header><h1>WITAMY W BIURZE PODRÓŻY</h1></header>\r\n        <section id=\"dane\">\r\n        <H3>ARCHIWUM WYCIECZEK</H3>\r\n            <?php\r\n    error_reporting(E_ALL & ~E_NOTICE & ~E_WARNING);\r\n\r\n            $conn=mysqli_connect('localhost','root','','egzamin4');\r\n            $zapytanie=\"select id,cel,cena from wycieczki where dostepna=0\";\r\n                $dane=mysqli_query($conn,$zapytanie);\r\n            foreach($dane as $dane1){\r\n                echo\"<p>\".$dane1['id'].\". \".$dane1['cel'].\", cena: \".$dane1['cena'].\"</p>\";\r\n                \r\n            }\r\n            \r\n            mysqli_close($conn);\r\n            ?>\r\n        </section>\r\n        <section id=\"lewy\">\r\n<h3>NAJTANIEJ</h3>\r\n            <TABLE>\r\n            <tr><td>Włochy</td><td>od 1200zł</td></tr>\r\n                <tr><td>Francja</td><td>od 1200zł</td></tr>\r\n                <tr><td>Hiszpania</td><td>od 1400zł</td></tr>\r\n            </TABLE>\r\n        </section>\r\n<section id=\"srodek\">\r\n        <h3>TU BYLIŚMY</h3>\r\n     <?php\r\n            $conn=mysqli_connect('localhost','root','','egzamin4');\r\n            $zapytanie1=\"select nazwaPliku,podpis from zdjecia order by podpis desc\";\r\n                $dane=mysqli_query($conn,$zapytanie1);\r\n            foreach($dane as $dane1){\r\n                echo'<img src=\"'.$dane1['nazwaPliku'].'\" alt=\"'.$dane1['podpis'].'\"</img>';\r\n                \r\n            }\r\n            \r\n            mysqli_close($conn);\r\n            ?>\r\n        </section>\r\n        <section id=\"prawy\">\r\n        <H3>SKONTAKTUJ SIĘ</H3>\r\n            <a href=\"mailto:wycieczki@wycieczki.pl\">napisz do nas</a>\r\n            <p>telefon:55566677</p>\r\n        </section>\r\n        <footer>\r\n        <p>Stronę wykonał:Mateusz Graś</p>\r\n        </footer>\r\n    \r\n    </body>\r\n</html>\r\n",
      "kwerendy.txt": "1.select id,cel,cena from wycieczki where dostepna=0;\r\n2.select nazwaPliku,podpis from zdjecia order by podpis desc;\r\n3.select podpis,cena,cel from wycieczki join zdjecia on wycieczki.zdjecia_id=zdjecia.id where cena<1200;\r\n4.alter table wycieczki drop dataWyjazdu;",
      "README.md": "# 📌 ee09_zdjecia (EE.09 (Programowanie i administrowanie stronami oraz bazami))\n\n> **Temat zadania:** Galeria Biura Podróży i Cennik Wycieczek  \n> **Kwalifikacja:** EE.09 (Programowanie i administrowanie stronami oraz bazami)  \n> **Technologie:** HTML5, CSS3, JavaScript, PHP\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nInteraktywna galeria fotografii z miniaturami, powiększaniem zdjęć i dynamicznym cennikiem wycieczek turystycznych.\n\n### Główne elementy rozwiązania:\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Oprogramowanie skryptu backendowego w PHP (mysqli) do komunikacji z bazą danych MySQL.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 🐘 **Skrypty PHP:** `biuro.php`\n- 📝 **Pliki tekstowe / Kwerendy:** `kwerendy.txt`\n- 🎨 **Style CSS:** `styl4.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n3. **Uruchomienie PHP:**\n   - Skopiuj ten rozpakowany folder do katalogu `C:\\xampp\\htdocs\\ee09_zdjecia`.\n   - Uruchom moduł **Apache** w XAMPP.\n   - Otwórz w przeglądarce adres: `http://localhost/ee09_zdjecia/biuro.php`.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
      "styl4.css": "body{\r\n    margin: 0px;\r\n    font-family: Tahoma;\r\n}\r\nheader,footer{\r\n    background-color: rgb(107,142,35);\r\n    color: white;\r\n    text-align: center;\r\n    padding: 3px;\r\n    clear: both;\r\n}\r\n#dane{\r\n    background-color: rgb(255,218,185);\r\n    padding: 3px;\r\n}\r\n#lewy,#prawy{\r\n    background-color: rgb(255,239,213);\r\n    width: 27%;\r\n    height: 550px;\r\n    float: left;\r\n}\r\n#srodek{\r\n    background-color: rgb(255,239,213);\r\n    width: 46%;\r\n    height: 550px;\r\n    float: left;\r\n}\r\nh3{\r\n    text-align: center;\r\n}\r\nh3::first-letter{\r\n    color: green;\r\n}\r\nimg{\r\n    height: 90px;\r\n    padding: 7px;\r\n}\r\nimg:hover{\r\n    background-color: rgb(255,218,185);\r\n}"
    }
  },
  {
    "id": "Cwiczenia_i_Zadania_Arkusz_3",
    "category": "Cwiczenia_i_Zadania",
    "name": "Arkusz 3",
    "title": "Kompleksowy Arkusz Praktyczny (Strona z Nagrodami)",
    "description": "Pełne rozwiązanie arkusza egzaminacyjnego: struktura HTML podstron, menu nawigacyjne, arkusz stylów CSS oraz skrypt JS.",
    "technologies": [
      "HTML5",
      "CSS3",
      "JavaScript"
    ],
    "folder": "Cwiczenia_i_Zadania/Arkusz_3",
    "mainPdf": "arkusz_praktyczny_3.pdf",
    "mainHtml": "index.html",
    "mainPhp": null,
    "mainSql": null,
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# 📌 Arkusz_3 (Ćwiczenia i Zadania (INF.03 / E.14 / EE.09))\n\n> **Temat zadania:** Kompleksowy Arkusz Praktyczny (Strona z Nagrodami)  \n> **Kwalifikacja:** Ćwiczenia i Zadania (INF.03 / E.14 / EE.09)  \n> **Technologie:** HTML5, CSS3, JavaScript\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nPełne rozwiązanie arkusza egzaminacyjnego: struktura HTML podstron, menu nawigacyjne, arkusz stylów CSS oraz skrypt JS.\n\n### Główne elementy rozwiązania:\n- Opracowanie semantycznej struktury strony w standardzie HTML5.\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Implementacja logiki i obsługi zdarzeń po stronie klienta w JavaScript.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 📄 **Arkusz PDF:** `arkusz_praktyczny_3.pdf`\n- 🌐 **Pliki HTML:** `index.html`\n- 🎨 **Style CSS:** `styl.css`\n- ⚡ **Skrypty JS:** `skrypt.js`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Uruchomienie strony WWW:**\n   - Kliknij dwukrotnie plik `index.html` lub przeciągnij go do dowolnej przeglądarki.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
    "pdfs": [
      "arkusz_praktyczny_3.pdf"
    ],
    "htmls": [
      "index.html"
    ],
    "phps": [],
    "sqls": [],
    "zips": [
      "paczka_zadania.zip"
    ],
    "txts": [],
    "scripts": [
      "skrypt.js",
      "styl.css"
    ],
    "allFiles": [
      "andrzej.jpg",
      "arkusz_praktyczny_3.pdf",
      "dekada.jpg",
      "diko.jpg",
      "index.html",
      "kon.gif",
      "kon.png",
      "konrad.jpg",
      "paczka_zadania.zip",
      "README.md",
      "skrypt.js",
      "strzalka.jpg",
      "styl.css"
    ],
    "fileContents": {
      "index.html": "<!DOCTYPE HTML>\r\n<html lang=\"pl\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <link rel=\"stylesheet\" href=\"styl.css\">\r\n    <title>Stokrotka</title>\r\n    <script src=\"skrypt.js\"></script>\r\n    </head>\r\n    <body>\r\n    <header>\r\n        <img src=\"kon.gif\">\r\n        <nav>\r\n        <a href=\"index.html\">Strona główna</a>\r\n            <a href=\"kontakt.html\">Kontakt do nas</a>\r\n            <a href=\"nagrody.html\">Nasze nagrody</a>\r\n        </nav>\r\n        </header>\r\n        <main>\r\n        <div id=\"panelb\">\r\n            <p>\"Doskonały odpoczynek i relaks, z\r\ndala od miejskiego zgiełku, zapewnia naturalne położenie naszej stadniny – pośród lasu, wokół dzikiej przyrody, zwierząt. Malowniczy krajobraz okolicy dopełniają pobliskie jeziora, rezerwaty przyrody i szerokie, leśne\r\ntrakty.</p>\r\n            </div>\r\n            <h1>Witaj na stadninie Stokrotka</h1>\r\n            <h2>Sprawdź, jakie konie są w naszej stadninie!\r\nKliknij na miniaturę konia, by zobaczyć jego zdjęcie!\r\n</h2>\r\n            <div id=\"zdjecie-konia\">\r\n            <img src=\"andrzej.jpg\" id=\"gora\">\r\n                <h2 id=\"imie\"></h2>\r\n            </div>\r\n            <div id=\"konie-miniaturki\">\r\n            <img src=\"konrad.jpg\" alt=\"Konrad\" onclick=\"miniatura(this.src,this.alt)\">\r\n                <img src=\"diko.jpg\" alt=\"Diko\" onclick=\"miniatura(this.src,this.alt)\">\r\n                <img src=\"strzalka.jpg\" alt=\"Strzałka\" onclick=\"miniatura(this.src,this.alt)\">\r\n                <img src=\"dekada.jpg\" alt=\"Dekada\"onclick=\"miniatura(this.src,this.alt)\">\r\n            </div>\r\n        </main>\r\n        <footer>\r\n            <p>Stronę wykonał: Mateusz Graś</p>\r\n        </footer>\r\n    \r\n    </body>\r\n</html>\r\n",
      "README.md": "# 📌 Arkusz_3 (Ćwiczenia i Zadania (INF.03 / E.14 / EE.09))\n\n> **Temat zadania:** Kompleksowy Arkusz Praktyczny (Strona z Nagrodami)  \n> **Kwalifikacja:** Ćwiczenia i Zadania (INF.03 / E.14 / EE.09)  \n> **Technologie:** HTML5, CSS3, JavaScript\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nPełne rozwiązanie arkusza egzaminacyjnego: struktura HTML podstron, menu nawigacyjne, arkusz stylów CSS oraz skrypt JS.\n\n### Główne elementy rozwiązania:\n- Opracowanie semantycznej struktury strony w standardzie HTML5.\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Implementacja logiki i obsługi zdarzeń po stronie klienta w JavaScript.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 📄 **Arkusz PDF:** `arkusz_praktyczny_3.pdf`\n- 🌐 **Pliki HTML:** `index.html`\n- 🎨 **Style CSS:** `styl.css`\n- ⚡ **Skrypty JS:** `skrypt.js`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Uruchomienie strony WWW:**\n   - Kliknij dwukrotnie plik `index.html` lub przeciągnij go do dowolnej przeglądarki.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
      "skrypt.js": "function miniatura(zrodlo, nazwa){\r\n    document.getElementById(\"gora\").src=zrodlo;\r\n    document.getElementById(\"imie\").innerHTML=nazwa;\r\n    \r\n}\r\n",
      "styl.css": "body{\r\n    margin: 0px;\r\n    padding: 0px;\r\n    font-family: Arial;\r\n}\r\nheader{\r\n    background-color: #b89c14;\r\n    text-align: center;\r\n    padding: 10px;\r\n}\r\nh1{\r\n    margin-left: 15px;\r\n    margin-top: 30px;\r\n}\r\nh2{\r\n    margin-left: 15px;\r\n}\r\nnav{\r\n    margin-top: 15px;\r\n}\r\na{\r\n    font-size: 18px;\r\n    text-decoration: none;\r\n    margin-right: 40px;\r\n}\r\na:visited{\r\n    color: red; \r\n}\r\n#panelb{\r\npadding: 10px;\r\nbackground-color: #8a750f;\r\n    height: 770px;\r\n    color: orange;\r\n    width: 20%;\r\n    float: right;\r\n}\r\n#panelb p{\r\n    font-size: 20px;\r\n}\r\n#zdjecie-konia{\r\n    margin: 10px;\r\n}\r\n#zdjecie-konia img{\r\n    margin-left: 35%;\r\n    margin-top: 10px;\r\n    width: 600px;\r\n}\r\n#zdjecie-konia h2{\r\n    margin-left: 35%;\r\n}\r\n#konie-miniaturki{\r\n    margin-left: 50px;\r\n    margin-top: 30px;\r\n}\r\n#konie-miniaturki img{\r\n    margin-top: 10px;\r\n    margin-right: 40px;\r\n    width: 300px;\r\n}\r\nfooter{\r\n    font-size: 20px;\r\n    padding: 10px;\r\n    color: white;\r\n    background-color: red;\r\n    text-align: center;\r\n}"
    }
  },
  {
    "id": "Cwiczenia_i_Zadania_Egzamin_Probny",
    "category": "Cwiczenia_i_Zadania",
    "name": "Egzamin Probny",
    "title": "Portal Notowań Giełdowych i Walut",
    "description": "Aplikacja finansowa prezentująca kursy walut, spółek giełdowych z kalkulatorem przewalutowania w JavaScript/PHP.",
    "technologies": [
      "HTML5",
      "CSS3",
      "JavaScript",
      "PHP"
    ],
    "folder": "Cwiczenia_i_Zadania/Egzamin_Probny",
    "mainPdf": null,
    "mainHtml": null,
    "mainPhp": "gielda.php",
    "mainSql": null,
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# 📌 Egzamin_Probny (Ćwiczenia i Zadania (INF.03 / E.14 / EE.09))\n\n> **Temat zadania:** Portal Notowań Giełdowych i Walut  \n> **Kwalifikacja:** Ćwiczenia i Zadania (INF.03 / E.14 / EE.09)  \n> **Technologie:** HTML5, CSS3, JavaScript, PHP\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nAplikacja finansowa prezentująca kursy walut, spółek giełdowych z kalkulatorem przewalutowania w JavaScript/PHP.\n\n### Główne elementy rozwiązania:\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Oprogramowanie skryptu backendowego w PHP (mysqli) do komunikacji z bazą danych MySQL.\n- Implementacja logiki i obsługi zdarzeń po stronie klienta w JavaScript.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 🐘 **Skrypty PHP:** `gielda.php`\n- 📝 **Pliki tekstowe / Kwerendy:** `kwerendy.txt`\n- 🎨 **Style CSS:** `style.css`\n- ⚡ **Skrypty JS:** `skrypt.js`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n3. **Uruchomienie PHP:**\n   - Skopiuj ten rozpakowany folder do katalogu `C:\\xampp\\htdocs\\Egzamin_Probny`.\n   - Uruchom moduł **Apache** w XAMPP.\n   - Otwórz w przeglądarce adres: `http://localhost/Egzamin_Probny/gielda.php`.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
    "pdfs": [],
    "htmls": [],
    "phps": [
      "gielda.php"
    ],
    "sqls": [],
    "zips": [
      "paczka_zadania.zip"
    ],
    "txts": [
      "kwerendy.txt"
    ],
    "scripts": [
      "skrypt.js",
      "style.css"
    ],
    "allFiles": [
      "gielda.php",
      "gielda.png",
      "kwerendy.txt",
      "paczka_zadania.zip",
      "README.md",
      "skrypt.js",
      "style.css"
    ],
    "fileContents": {
      "gielda.php": "<!DOCTYPE html>\r\n<html lang=\"pl\">\r\n    <head>\r\n        <meta charset=\"utf-8\">\r\n        <title>Giełda transportowa</title>\r\n        <link rel=\"stylesheet\" href=\"style.css\">\r\n        <script src=\"skrypt.js\"></script>\r\n        </head>\r\n    <body>\r\n    <header><img src=\"gielda.png\" alt=\"Logo giełdy transportowej\">\r\n    <h1>Giełdta transportowa</h1>\r\n    </header>\r\n    <section id=\"glowny\">\r\n    <section id=\"lewy\">\r\n        <h2>Flota firmy Pol-Trans</h2>\r\n    <p>Nasza flota składa się z 5 pojazdów. To pojazdy o wysokiej\r\nklasie i niesamowitych osiągach. Sprawdź ich szczegóły.</p>\r\n        <div id=\"blok\">\r\n        <label>Wybierz pojazd z listy: </label>\r\n            <select id=\"marka\">\r\n            <option value=\"Renault\">Renault</option>\r\n                <option value=\"Man\">Man</option>\r\n                <option value=\"Scania\">Scania</option>\r\n                <option value=\"Mercedes-Benz\">Mercedes-Benz</option>\r\n            </select>\r\n            <button onclick=\"szczegoly()\">Wybierz</button>\r\n            <p id=\"szczegoly-pojazdu\"></p>\r\n        </div>\r\n    </section>\r\n    <section id=\"prawy\">\r\n        <h1>Zlecenia transportowe</h1>\r\n        <table>\r\n        <tr><th>Miasto załadunku</th><th>Miasto rozładunku</th>\r\n            <th>Ładunek</th><th>Firma</th></tr>\r\n            <?php\r\n    error_reporting(E_ALL & ~E_NOTICE & ~E_WARNING);\r\n\r\n            $conn=mysqli_connect('localhost','root','','transportowa');\r\n            $zapytanie=\"SELECT miasto_zal,miasto_rozl,ladunek,firma from zlecenia\";\r\n            $zapytanie2=\"SET NAMES 'utf-8\";\r\n            $dane=mysqli_query($conn,$zapytanie);\r\n            mysqli_query($conn,$zapytanie2);\r\n            foreach($dane as $dane1){\r\n                echo\"<tr><td>\".$dane1['miasto_zal'].\"</td><td>\".$dane1['miasto_rozl'].\"</td><td>\".$dane1['ladunek'].\"</td><td>\".$dane1['firma'].\"</td></tr>\";\r\n            }\r\n            \r\n            mysqli_close($conn);\r\n            \r\n            \r\n            ?>\r\n        </table>\r\n        <div id=\"kalkulator\">\r\n        <h3>Kalkulator zlecenia Transportowego</h3>\r\n            <p>Tutaj obliczysz, ile rynkowo kosztuje zlecenie transportowe.</p>\r\n            <label>Podaj ilość ton: </label>\r\n            <input type=\"number\" id=\"tony\"><br>\r\n            <label>Podaj ilość kilometrów:</label>\r\n            <input type=\"number\" id=\"km\"><br>\r\n            <label>Rodzaj towaru:</label>\r\n            <select id=\"rodzaj\">\r\n            <option value=\"Chlodniczy\">Chłodniczy</option>\r\n                <option value=\"Zwykły\">Zwykły</option>\r\n                <option value=\"Gabaryt\">Gabaryt</option>\r\n            </select><br>\r\n           <button onclick=\"licz()\">Oblicz koszt</button>\r\n            <h1 id=\"koszt\"></h1>\r\n        </div>\r\n        </section>\r\n    </section>\r\n    <footer>Wykonał:Mateusz Graś</footer>\r\n    </body>\r\n</html>",
      "kwerendy.txt": "1.SELECT miasto_zal,miasto_rozl,ladunek,firma from zlecenia;\r\n3.",
      "README.md": "# 📌 Egzamin_Probny (Ćwiczenia i Zadania (INF.03 / E.14 / EE.09))\n\n> **Temat zadania:** Portal Notowań Giełdowych i Walut  \n> **Kwalifikacja:** Ćwiczenia i Zadania (INF.03 / E.14 / EE.09)  \n> **Technologie:** HTML5, CSS3, JavaScript, PHP\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nAplikacja finansowa prezentująca kursy walut, spółek giełdowych z kalkulatorem przewalutowania w JavaScript/PHP.\n\n### Główne elementy rozwiązania:\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Oprogramowanie skryptu backendowego w PHP (mysqli) do komunikacji z bazą danych MySQL.\n- Implementacja logiki i obsługi zdarzeń po stronie klienta w JavaScript.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 🐘 **Skrypty PHP:** `gielda.php`\n- 📝 **Pliki tekstowe / Kwerendy:** `kwerendy.txt`\n- 🎨 **Style CSS:** `style.css`\n- ⚡ **Skrypty JS:** `skrypt.js`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n3. **Uruchomienie PHP:**\n   - Skopiuj ten rozpakowany folder do katalogu `C:\\xampp\\htdocs\\Egzamin_Probny`.\n   - Uruchom moduł **Apache** w XAMPP.\n   - Otwórz w przeglądarce adres: `http://localhost/Egzamin_Probny/gielda.php`.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
      "skrypt.js": "function szczegoly(){\r\n    var marka=document.getElementById(\"marka\").value;\r\n    var wynik=document.getElementById(\"szczegoly-pojazdu\");\r\n    console.log(marka);\r\n    if(marka=='Renault'){\r\n        wynik.innerHTML=\"Renault Range T, 460 KM, 131531 km, tablica rejestracyjna KR130RE\";\r\n    }\r\n    else if(marka=='Man'){\r\n        wynik.innerHTML=\"MAN TGX XXL, 510 KM, 341833 km, tablica rejestracyjna KR131RE\";\r\n    }\r\n    else if(marka=='Scania'){\r\n        wynik.innerHTML=\"Scania Streamline, 460 KM Euro 6, 143371 km,tablica rejestracyjna KR130RF\";\r\n    }\r\n    else if(marka=='Mercedes-Benz'){\r\n        wynik.innerHTML=\"Mercedes-Benz New Actros, 460 KM Euro 6,143313 km, tablica rejestracyjna KR130TB\";\r\n    }\r\n}\r\n\r\nfunction licz(){\r\n    var tony=document.getElementById(\"tony\").value;\r\n    var km=document.getElementById(\"km\").value;\r\n    var rodzaj=document.getElementById(\"rodzaj\").value;\r\n    var koszt=document.getElementById(\"koszt\");\r\n    if(rodzaj==\"Chlodniczy\"){\r\n        koszt.innerHTML=\"Koszt zlecenia: \"+km*0.15+\"zł\";\r\n    }\r\n    else if(rodzaj==\"Zwykly\"){\r\n        koszt.innerHTML=\"Koszt zlecenia: \"+km*0.05+\"zł\";\r\n    }\r\n    else if(rodzaj==\"Gabaryt\"){\r\n        koszt.innerHTML=\"Koszt zlecenia: \"+km*0.95+\"zł\";\r\n    }\r\n}",
      "style.css": "body{\r\n    margin: 0px;\r\n    font-family: Tahoma;\r\n    padding: 0px;\r\n}\r\nheader{\r\n    background-color: #3498db;\r\n    color: white;\r\n    padding: 20px;\r\n    text-align: center;\r\n}\r\nimg{\r\n    width: 64px;\r\n}\r\n#lewy{\r\n    background-color: #2980b9;\r\n    width: 20%;\r\n    height: 800px;\r\n    color: white;\r\n    float: left;\r\n}\r\n#lewy h2{\r\n    padding-left: 15px;\r\n}\r\n#lewy p{\r\n    padding-top: 15px;\r\n     padding-left: 15px;\r\n}\r\n#szczegoly-pojazdu{\r\n    margin-top: 30px;\r\n}\r\n#prawy{\r\n    background-color: rgb(9,132,225);\r\n    width: 80%;\r\n    height: 800px;\r\n    float: left;\r\n}\r\n#prawy h1,table{\r\n    color: white;\r\n    margin-left: 20px;\r\n    margin-top: 50px;\r\n}\r\n#blok{\r\n    color: white;\r\n    margin-left: 20px;\r\n    margin-top: 50px;\r\n}\r\ntable{\r\n    margin-right: 30px;\r\n    width: 95%; \r\n}\r\nth{\r\n    background-color: white;\r\n    color: black;\r\n    padding: 15px;\r\n    margin-right: 30px;\r\n}\r\ntd{\r\n   padding: 10px; \r\n}\r\nfooter{\r\n    background-color: black;\r\n    color: white;\r\n    text-align: right;\r\n    font-size: 18px;\r\n    clear: both;\r\n}\r\n#kalkulator{\r\n    color: white;\r\n}\r\n"
    }
  },
  {
    "id": "Cwiczenia_i_Zadania_JS_Zadania",
    "category": "Cwiczenia_i_Zadania",
    "name": "JS Zadania",
    "title": "Zestaw 16 Zadań Praktycznych JavaScript",
    "description": "Komplet 16 mini-projektów egzaminacyjnych w czystym JavaScript: operacje na DOM, tablice, walidacja formularzy, kalkulatory i animacje.",
    "technologies": [
      "HTML5",
      "CSS3",
      "JavaScript"
    ],
    "folder": "Cwiczenia_i_Zadania/JS_Zadania",
    "mainPdf": "js_-_zadania_egzaminacyjne.pdf",
    "mainHtml": "JS1+.html",
    "mainPhp": null,
    "mainSql": null,
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# 📌 JS_Zadania (Ćwiczenia i Zadania (INF.03 / E.14 / EE.09))\n\n> **Temat zadania:** Zestaw 16 Zadań Praktycznych JavaScript  \n> **Kwalifikacja:** Ćwiczenia i Zadania (INF.03 / E.14 / EE.09)  \n> **Technologie:** HTML5, CSS3, JavaScript\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nKomplet 16 mini-projektów egzaminacyjnych w czystym JavaScript: operacje na DOM, tablice, walidacja formularzy, kalkulatory i animacje.\n\n### Główne elementy rozwiązania:\n- Opracowanie semantycznej struktury strony w standardzie HTML5.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 📄 **Arkusz PDF:** `js_-_zadania_egzaminacyjne.pdf`\n- 🌐 **Pliki HTML:** `JS1+.html`, `js10_idk.html`, `JS11+.html`, `JS12+.html`, `JS13+.html`, `JS14+.html`, `JS15+.html`, `JS16+.html`, `JS2+.html`, `JS3+.html`, `JS4.html`, `JS5+.html`, `JS6+.html`, `JS7+.html`, `JS8+.html`, `js9_idk.html`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Uruchomienie strony WWW:**\n   - Kliknij dwukrotnie plik `JS1+.html` lub przeciągnij go do dowolnej przeglądarki.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
    "pdfs": [
      "js_-_zadania_egzaminacyjne.pdf"
    ],
    "htmls": [
      "JS1+.html",
      "js10_idk.html",
      "JS11+.html",
      "JS12+.html",
      "JS13+.html",
      "JS14+.html",
      "JS15+.html",
      "JS16+.html",
      "JS2+.html",
      "JS3+.html",
      "JS4.html",
      "JS5+.html",
      "JS6+.html",
      "JS7+.html",
      "JS8+.html",
      "js9_idk.html"
    ],
    "phps": [],
    "sqls": [],
    "zips": [
      "paczka_zadania.zip"
    ],
    "txts": [],
    "scripts": [],
    "allFiles": [
      "JS1+.html",
      "js10_idk.html",
      "JS11+.html",
      "JS12+.html",
      "JS13+.html",
      "JS14+.html",
      "JS15+.html",
      "JS16+.html",
      "JS2+.html",
      "JS3+.html",
      "JS4.html",
      "JS5+.html",
      "JS6+.html",
      "JS7+.html",
      "JS8+.html",
      "js9_idk.html",
      "js_-_zadania_egzaminacyjne.pdf",
      "paczka_zadania.zip",
      "README.md"
    ],
    "fileContents": {
      "JS1+.html": "<!DOCTYPE html>\r\n<html lang=\"pl-PL\">\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<title>JS1</title>\r\n\t\r\n\t<script>\r\n\t\tfunction dodawanie()\r\n\t\t{\r\n\t\t\tvar a = document.getElementById(\"a\").value;\r\n\t\t\tvar b = document.getElementById(\"b\").value;\r\n\t\t\t\r\n\t\t\tif(a == \"\" || b == \"\") document.getElementById(\"wynik\").innerHTML = \"<i>Proszę uzupełnić obie liczby.</i>\";\r\n\t\t\telse\r\n\t\t\t{\r\n\t\t\t\tvar wynik = parseFloat(a)+parseFloat(b);\r\n\t\t\t\tdocument.getElementById(\"wynik\").innerHTML = a+\" + \"+b+\" = \"+wynik;\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t\tfunction odejmowanie()\r\n\t\t{\r\n\t\t\t\r\n\t\t\tvar a = document.getElementById(\"a\").value;\r\n\t\t\tvar b = document.getElementById(\"b\").value;\r\n\t\t\t\r\n\t\t\tif(a == \"\" || b == \"\") document.getElementById(\"wynik\").innerHTML = \"<i>Proszę uzupełnić obie liczby.</i>\";\r\n\t\t\telse\r\n\t\t\t{\r\n\t\t\t\tvar wynik = a-b;\r\n\t\t\t\tdocument.getElementById(\"wynik\").innerHTML = a+\" - \"+b+\" = \"+wynik;\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t\tfunction mnozenie()\r\n\t\t{\r\n\t\t\tvar a = document.getElementById(\"a\").value;\r\n\t\t\tvar b = document.getElementById(\"b\").value;\r\n\t\t\t\r\n\t\t\tif(a == \"\" || b == \"\") document.getElementById(\"wynik\").innerHTML = \"<i>Proszę uzupełnić obie liczby.</i>\";\r\n\t\t\telse\r\n\t\t\t{\r\n\t\t\t\tvar wynik = a*b;\r\n\t\t\t\tdocument.getElementById(\"wynik\").innerHTML = a+\" * \"+b+\" = \"+wynik;\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t\tfunction dzielenie()\r\n\t\t{\r\n\t\t\tvar a = document.getElementById(\"a\").value;\r\n\t\t\tvar b = document.getElementById(\"b\").value;\r\n\t\t\t\r\n\t\t\tif(a == \"\" || b == \"\") document.getElementById(\"wynik\").innerHTML = \"<i>Proszę uzupełnić obie liczby.</i>\";\r\n\t\t\telse if(a == 0 || b == 0) document.getElementById(\"wynik\").innerHTML = \"<i>Nie wolno dzielić przez zero.</i>\";\r\n\t\t\telse\r\n\t\t\t{\r\n\t\t\t\tvar wynik = a/b;\r\n\t\t\t\tdocument.getElementById(\"wynik\").innerHTML = a+\" / \"+b+\" = \"+wynik;\r\n\t\t\t}\r\n\t\t}\r\n\t</script>\r\n\t\r\n</head>\r\n<body>\r\n\t<h1>PROSTE DZIAŁANIA</h1>\r\n\t<form>\r\n\t\t<label><i>Podaj pierwszą liczbę:</i> <input type=\"number\" id=\"a\"></label> <br><br>\r\n\t\t<label><i>Podaj drugą liczbę:</i> <input type=\"number\" id=\"b\"></label> <br><br>\r\n\t\t\r\n\t\t<input type=\"button\" value=\"DODAWANIE\" onclick=\"dodawanie()\">\r\n\t\t<input type=\"button\" value=\"ODEJMOWANIE\" onclick=\"odejmowanie()\">\r\n\t\t<input type=\"button\" value=\"MNOŻENIE\" onclick=\"mnozenie()\">\r\n\t\t<input type=\"button\" value=\"DZIELENIE\" onclick=\"dzielenie()\">\r\n\t</form> <br>\r\n\t\r\n\t<div id=\"wynik\"></div>\r\n</body>\r\n</html>",
      "js10_idk.html": "<!DOCTYPE html>\r\n<html lang=\"pl-PL\">\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<title>JS10</title>\r\n\t\r\n\t<script>\r\n\t\tfunction oblicz()\r\n\t\t{\r\n\t\t\tvar polak = document.getElementById(\"polak\").value;\r\n\t\t\tvar nowak = document.getElementById(\"nowak\").value;\r\n\t\t\tvar rysik = document.getElementById(\"rysik\").value;\r\n\t\t\t\r\n\t\t\tif(polak == \"\" || polak != parseFloat(polak) || nowak == \"\" || nowak != parseFloat(nowak) || rysik == \"\" || rysik != parseFloat(rysik)) alert(\"wpisz poprawne dane\");\r\n\t\t\telse\r\n\t\t\t{\r\n\t\t\t\tvar polak = parseFloat(polak);\r\n\t\t\t\tvar nowak = parseFloat(nowak);\r\n\t\t\t\tvar rysik = parseFloat(rysik);\r\n\t\t\t\t\r\n\t\t\t\tif(polak>nowak) document.getElementById(\"wynik\").innerHTML = polak;\r\n\t\t\t\telse if(nowak>rysik) document.getElementById(\"wynik\").innerHTML = nowak;\r\n\t\t\t\telse document.getElementById(\"wynik\").innerHTML = rysik;\r\n\t\t\t}\r\n\t\t}\r\n\t</script>\r\n\t\r\n</head>\r\n<body>\r\n\t<h3>Wyznaczanie najwyższej średniej</h3>\r\n\t\r\n\t<form>\r\n\t\t<ul>\r\n\t\t\t<li>Polak <input type=\"text\" id=\"polak\"></li> <br>\r\n\t\t\t<li>Nowak <input type=\"text\" id=\"nowak\"></li> <br>\r\n\t\t\t<li>Rysik <input type=\"text\" id=\"rysik\"></li> <br>\r\n\t\t</ul>\r\n\t\t\r\n\t\t<input type=\"button\" value=\"wyznacz\" onclick=\"oblicz()\">\r\n\t</form>\r\n\t\r\n\t<h3>Najwyższa średnia:</h3>\r\n\t\r\n\t<div id=\"wynik\"></div>\r\n</body>\r\n</html>",
      "JS11+.html": "<!DOCTYPE html>\r\n<html lang=\"pl-PL\">\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<title>JS11</title>\r\n\t\r\n\t<script>\r\n\t\tfunction licz()\r\n\t\t{\r\n\t\t\tvar goscie = document.getElementById(\"goscie\").value;\r\n\t\t\tvar poprawiny = document.getElementById(\"poprawiny\").checked;\r\n\t\t\t\r\n\t\t\tif(poprawiny)\r\n\t\t\t{\r\n\t\t\t\tvar wynik = (goscie*100)*1.3;\r\n\t\t\t\tdocument.getElementById(\"wynik\").innerHTML = \"Koszt Twojego wesela to \"+wynik+\" złotych\";\r\n\t\t\t}\r\n\t\t\telse\r\n\t\t\t{\r\n\t\t\t\tvar wynik = goscie*100;\r\n\t\t\t\tdocument.getElementById(\"wynik\").innerHTML = \"Koszt Twojego wesela to \"+wynik+\" złotych\";\r\n\t\t\t}\r\n\t\t}\r\n\t</script>\r\n\t\r\n</head>\r\n<body>\r\n\t<h2>Ile będzie kosztowało moje wesele?</h2>\r\n\t\r\n\t<form>\r\n\t\t<label>Podaj liczbę gości: <input type=\"number\" id=\"goscie\"></label> <br><br>\r\n\t\t\r\n\t\t<input type=\"checkbox\" id=\"poprawiny\"> Wesele z poprawinami? <br><br>\r\n\t\t\r\n\t\t<input type=\"button\" value=\"Oblicz koszt\" onclick=\"licz()\">\r\n\t</form>\r\n\t\r\n\t<div id=\"wynik\"></div>\r\n</body>\r\n</html>",
      "JS12+.html": "<!DOCTYPE html>\r\n<html lang=\"pl-PL\">\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<title>JS12</title>\r\n\t\r\n\t<script>\r\n\t\tfunction licz()\r\n\t\t{\r\n\t\t\tvar gora = document.getElementById(\"gora\").checked;\r\n\t\t\tvar km = document.getElementById(\"km\").value;\r\n\t\t\t\r\n\t\t\tif(gora) document.getElementById(\"wynik\").innerHTML = \"Dowieziemy Twoją pizzę za darmo\";\r\n\t\t\telse\r\n\t\t\t{\r\n\t\t\t\tvar wynik = km*2;\r\n\t\t\t\tdocument.getElementById(\"wynik\").innerHTML = \"Dowóz będzie Cię kosztował \"+wynik+\" złotych\";\r\n\t\t\t}\r\n\t\t}\r\n\t</script>\r\n\t\r\n</head>\r\n<body>\r\n\t<h3>Oblicz koszt dostawy</h3>\r\n\t\r\n\t<form>\r\n\t\t<label><input type=\"checkbox\" id=\"gora\"> Jestem z Zielonej Góry</label>\r\n\t\t\r\n\t\t<p>albo</p>\r\n\t\t\r\n\t\t<label>Podaj liczbę kilometrów od Zielonej Góry: <input type=\"number\" id=\"km\"></label> <br><br>\r\n\t\t\r\n\t\t<input type=\"button\" value=\"Oblicz\" onclick=\"licz()\">\r\n\t</form>\r\n\t\r\n\t<div id=\"wynik\"></div>\r\n</body>\r\n</html>",
      "JS13+.html": "<!DOCTYPE html>\r\n<html lang=\"pl-PL\">\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<title>JS13</title>\r\n\t<style>\r\n\t\t#czerwony\r\n\t\t{\r\n\t\t\tbackground-color: red;\r\n\t\t\tmin-width:  20px;\r\n\t\t\tmin-height: 20px;\r\n\t\t}\r\n\t\t\r\n\t\t#zielony\r\n\t\t{\r\n\t\t\tbackground-color: green;\r\n\t\t\tmin-width:  20px;\r\n\t\t\tmin-height: 20px;\r\n\t\t}\r\n\t\t\r\n\t\t#niebieski\r\n\t\t{\r\n\t\t\tbackground-color: blue;\r\n\t\t\tmin-width:  20px;\r\n\t\t\tmin-height: 20px;\r\n\t\t}\r\n\t</style>\r\n\t\r\n\t<script>\r\n\t\tfunction czerw()\r\n\t\t{\r\n\t\t\tvar rozmiar = document.getElementById(\"rozmiar\").value;\r\n\t\t\tvar rodzaj = document.getElementById(\"rodzaj\").value;\r\n\t\t\t\r\n\t\t\tdocument.getElementById(\"wynik\").style.fontSize = rozmiar+\"%\";\r\n\t\t\tdocument.getElementById(\"wynik\").style.fontStyle = rodzaj;\r\n\t\t\tdocument.getElementById(\"wynik\").style.color = \"red\";\r\n\t\t}\r\n\t\t\r\n\t\tfunction ziel()\r\n\t\t{\r\n\t\t\tvar rozmiar = document.getElementById(\"rozmiar\").value;\r\n\t\t\tvar rodzaj = document.getElementById(\"rodzaj\").value;\r\n\t\t\t\r\n\t\t\tdocument.getElementById(\"wynik\").style.fontSize = rozmiar+\"%\";\r\n\t\t\tdocument.getElementById(\"wynik\").style.fontStyle = rodzaj;\r\n\t\t\tdocument.getElementById(\"wynik\").style.color = \"green\";\r\n\t\t}\r\n\t\t\r\n\t\tfunction nieb()\r\n\t\t{\r\n\t\t\tvar rozmiar = document.getElementById(\"rozmiar\").value;\r\n\t\t\tvar rodzaj = document.getElementById(\"rodzaj\").value;\r\n\t\t\t\r\n\t\t\tdocument.getElementById(\"wynik\").style.fontSize = rozmiar+\"%\";\r\n\t\t\tdocument.getElementById(\"wynik\").style.fontStyle = rodzaj;\r\n\t\t\tdocument.getElementById(\"wynik\").style.color = \"blue\";\r\n\t\t}\r\n\t</script>\r\n\t\r\n</head>\r\n<body>\r\n\t<form>\r\n\t\t<label>Podaj rozmiar tekstu w procentach: <br><br>\r\n\t\t<input type=\"number\" id=\"rozmiar\"> %</label> <br><br>\r\n\t\t\r\n\t\t<select id=\"rodzaj\">\r\n\t\t\t<option value=\"normal\">prosty</option>\r\n\t\t\t<option value=\"italic\">pochyły</option>\r\n\t\t</select> <br><br>\r\n\t\t\r\n\t\tJakim kolorem sformatować tekst? Wybierz przycisk. <br><br>\r\n\t\t<input type=\"button\" id=\"czerwony\" onclick=\"czerw()\">\r\n\t\t<input type=\"button\" id=\"zielony\" onclick=\"ziel()\">\r\n\t\t<input type=\"button\" id=\"niebieski\" onclick=\"nieb()\">\r\n\t</form>\r\n\t\r\n\t<p id=\"wynik\">To jest przykład paragrafu, który może być dowolnie formatowany przez JavaScript.</p>\r\n</body>\r\n</html>",
      "JS14+.html": "<!DOCTYPE html>\r\n<html lang=\"pl-PL\">\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<title>JS14</title>\r\n\t\r\n\t<script>\r\n\t\tfunction licz()\r\n\t\t{\r\n\t\t\tvar numer = document.getElementById(\"numer\").value;\r\n\t\t\tvar waga = document.getElementById(\"waga\").value;\r\n\t\t\t\r\n\t\t\tif(numer == 1)\r\n\t\t\t{\r\n\t\t\t\tvar wynik = waga*5;\r\n\t\t\t\tdocument.getElementById(\"wynik\").innerHTML = \"Koszt zamówienia wynosi \"+wynik+\" zł\";\r\n\t\t\t}\r\n\t\t\telse if(numer == 2)\r\n\t\t\t{\r\n\t\t\t\tvar wynik = waga*7;\r\n\t\t\t\tdocument.getElementById(\"wynik\").innerHTML = \"Koszt zamówienia wynosi \"+wynik+\" zł\";\r\n\t\t\t}\r\n\t\t\telse if(numer == 3)\r\n\t\t\t{\r\n\t\t\t\tvar wynik = waga*6;\r\n\t\t\t\tdocument.getElementById(\"wynik\").innerHTML = \"Koszt zamówienia wynosi \"+wynik+\" zł\";\r\n\t\t\t}\r\n\t\t\telse document.getElementById(\"wynik\").innerHTML = \"Koszt zamówienia wynosi 0 zł\";\r\n\t\t}\r\n\t</script>\r\n\t\r\n</head>\r\n<body>\r\n\t<form>\r\n\t\t<label>Podaj numer kawy: <br><br>\r\n\t\t<input type=\"number\" id=\"numer\"></label> <br><br>\r\n\t\t\r\n\t\t<label>Podaj wagę w dekagramach: <br><br>\r\n\t\t<input type=\"number\" id=\"waga\"></label> <br><br>\r\n\t\t\r\n\t\t<input type=\"button\" value=\"Zamów\" onclick=\"licz()\">\r\n\t</form>\r\n\t\r\n\t<div id=\"wynik\"></div>\r\n</body>\r\n</html>",
      "JS15+.html": "<!DOCTYPE html>\r\n<html lang=\"pl-PL\">\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<title>JS15</title>\r\n\t\r\n\t<script>\r\n\t\tfunction wykonaj()\r\n\t\t{\r\n\t\t\tvar imie = document.getElementById(\"imie\").value;\r\n\t\t\tvar nazwisko = document.getElementById(\"nazwisko\").value;\r\n\t\t\tvar usluga = document.getElementById(\"usluga\").value;\r\n\t\t\tvar regulamin = document.getElementById(\"regulamin\").checked;\r\n\t\t\t\r\n\t\t\tif(regulamin)\r\n\t\t\t{\r\n\t\t\t\tdocument.getElementById(\"wynik\").style.color = \"black\";\r\n\t\t\t\tdocument.getElementById(\"wynik\").innerHTML = \"<p>\"+imie.toUpperCase()+\" \"+nazwisko.toUpperCase()+\"<br>Treść Twojej sprawy: \"+usluga+\"<br>Na podany e-mail zostanie wysłana oferta.</p>\";\r\n\t\t\t}\r\n\t\t\telse \r\n\t\t\t{\r\n\t\t\t\tdocument.getElementById(\"wynik\").style.color = \"red\";\r\n\t\t\t\tdocument.getElementById(\"wynik\").innerHTML = \"<p>Musisz zapoznać się z regulaminem</p>\";\r\n\t\t\t}\r\n\t\t}\r\n\t</script>\r\n\t\r\n</head>\r\n<body>\r\n\t<h2>Kontakt</h2>\r\n\t\r\n\t<form>\r\n\t\t<table>\r\n\t\t\t<tr>\r\n\t\t\t\t<td>Imię:</td>\r\n\t\t\t\t<td><input type=\"text\" id=\"imie\"></td>\r\n\t\t\t</tr>\r\n\t\t\t\r\n\t\t\t<tr>\r\n\t\t\t\t<td>Nazwisko:</td>\r\n\t\t\t\t<td><input type=\"text\" id=\"nazwisko\"></td>\r\n\t\t\t</tr>\r\n\t\t\t\r\n\t\t\t<tr>\r\n\t\t\t\t<td>Usługa:</td>\r\n\t\t\t\t<td><textarea rows=\"4\" cols=\"35\" id=\"usluga\"></textarea></td>\r\n\t\t\t</tr>\r\n\t\t\t\r\n\t\t\t<tr>\r\n\t\t\t\t<td></td>\r\n\t\t\t\t<td><input type=\"checkbox\" id=\"regulamin\"> Zapoznałam/łem się z regulaminem</td>\r\n\t\t\t</tr>\r\n\t\t\t\r\n\t\t\t<tr>\r\n\t\t\t\t<td></td>\r\n\t\t\t\t<td><input type=\"reset\" value=\"Resetuj\"> <input type=\"button\" value=\"Prześlij\" onclick=\"wykonaj()\"></td>\r\n\t\t\t</tr>\r\n\t\t</table>\r\n\t</form>\r\n\t\r\n\t<div id=\"wynik\"></div>\r\n</body>\r\n</html>",
      "JS16+.html": "<!DOCTYPE html>\r\n<html lang=\"pl-PL\">\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<title>JS16</title>\r\n\t\r\n\t<script>\r\n\t\tfunction wykonaj()\r\n\t\t{\r\n\t\t\tvar imie = document.getElementById(\"imie\").value;\r\n\t\t\tvar nazwisko = document.getElementById(\"nazwisko\").value;\r\n\t\t\tvar mail = document.getElementById(\"mail\").value;\r\n\t\t\tvar usluga = document.getElementById(\"usluga\").value;\r\n\t\t\tvar kopia = document.getElementById(\"kopia\").checked;\r\n\t\t\t\r\n\t\t\tif(kopia)\r\n\t\t\t{\r\n\t\t\t\tdocument.getElementById(\"wynik\").innerHTML = imie + \" \" + nazwisko+\"<br>\"+mail.toLowerCase()+\"<br>\"+\"Usługa: \"+usluga;\r\n\t\t\t}\r\n\t\t\telse document.getElementById(\"wynik\").innerHTML = \"\";\r\n\t\t}\r\n\t</script>\r\n\t\r\n</head>\r\n<body>\r\n\r\n\t<h3>Formularz kontaktowy</h3>\r\n\t\r\n\t<form>\r\n\t\t<table>\r\n\t\t\t<tr>\r\n\t\t\t\t<td>Imię:</td>\r\n\t\t\t\t<td><input type=\"text\" id=\"imie\"></td>\r\n\t\t\t</tr>\r\n\t\t\t\r\n\t\t\t<tr>\r\n\t\t\t\t<td>Nazwisko:</td>\r\n\t\t\t\t<td><input type=\"text\" id=\"nazwisko\"></td>\r\n\t\t\t</tr>\r\n\t\t\t\r\n\t\t\t<tr>\r\n\t\t\t\t<td>E-mail:</td>\r\n\t\t\t\t<td><input type=\"text\" id=\"mail\"></td>\r\n\t\t\t</tr>\r\n\t\t\t\r\n\t\t\t<tr>\r\n\t\t\t\t<td>Usługa:</td>\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<select id=\"usluga\">\r\n\t\t\t\t\t\t<option value=\"naprawa komputera\">naprawa komputera</option>\r\n\t\t\t\t\t\t<option value=\"odzyskiwanie danych\">odzyskiwanie danych</option>\r\n\t\t\t\t\t\t<option value=\"problemy z oprogramowaniem\">problemy z oprogramowaniem</option>\r\n\t\t\t\t\t\t<option value=\"konfiguracja sieci LAN\">konfiguracja sieci LAN</option>\r\n\t\t\t\t\t\t<option value=\"inne\">inne</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t\t\r\n\t\t\t<tr>\r\n\t\t\t\t<td></td>\r\n\t\t\t\t<td><input type=\"checkbox\" id=\"kopia\" checked>Wyślij kopię wiadomości</td>\r\n\t\t\t</tr>\r\n\t\t\t\r\n\t\t\t<tr>\r\n\t\t\t\t<td></td>\r\n\t\t\t\t<td><input type=\"reset\" id=\"reset\" value=\"Resetuj\" style=\"background-color: red\"> <input type=\"button\" id=\"przeslij\" value=\"Prześlij\" style=\"background-color: green\" onclick=\"wykonaj()\"></td>\r\n\t\t\t</tr>\r\n\t\t</table>\r\n\t</form>\r\n\t\r\n\t<p id=\"wynik\"></p>\r\n</body>\r\n</html>",
      "JS2+.html": "<!DOCTYPE html>\r\n<html lang=\"pl-PL\">\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<title>JS2</title>\r\n\t\r\n\t<script>\r\n\t\tfunction pole()\r\n\t\t{\r\n\t\t\tvar bok = document.getElementById(\"bok\").value;\r\n\t\t\t\r\n\t\t\tif(bok == \"\" || bok!=parseFloat(bok)) document.getElementById(\"wynik\").innerHTML = \"<i>Należy wpisać wartość liczbową.</i>\";\r\n\t\t\telse\r\n\t\t\t{\r\n\t\t\t\tvar wynik = bok*bok;\r\n\t\t\t\tdocument.getElementById(\"wynik\").innerHTML = \"P = a<sup>2</sup> = \"+wynik;\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t\tfunction obwod()\r\n\t\t{\r\n\t\t\tvar bok = document.getElementById(\"bok\").value;\r\n\t\t\t\r\n\t\t\tif(bok == \"\" || bok!=parseFloat(bok)) document.getElementById(\"wynik\").innerHTML = \"<i>Należy wpisać wartość liczbową.</i>\";\r\n\t\t\telse\r\n\t\t\t{\r\n\t\t\t\tvar wynik = 4*bok;\r\n\t\t\t\tdocument.getElementById(\"wynik\").innerHTML = \"P = 4a = \"+wynik;\r\n\t\t\t}\r\n\t\t}\r\n\t</script>\r\n</head>\r\n<body>\r\n\t<h1>KWADRAT</h1>\r\n\t<form>\r\n\t\t<label><i>Podaj długość boku:</i> <input type=\"text\" id=\"bok\"></label> <br><br>\r\n\t\t<input type=\"button\" value=\"licz pole\" onclick=\"pole()\"> <input type=\"button\" value=\"licz obwód\" onclick=\"obwod()\">\r\n\t<form> <br><br>\r\n\t\r\n\t<div id=\"wynik\"></div>\r\n</body>\r\n</html>",
      "JS3+.html": "<!DOCTYPE html>\r\n<html lang=\"pl-PL\">\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<title>JS3</title>\r\n\t\r\n\t<script>\r\n\t\tfunction kelwin()\r\n\t\t{\r\n\t\t\tvar temp = document.getElementById(\"temperatura\").value;\r\n\t\t\t\r\n\t\t\tif(temp != \"\" && temp==parseFloat(temp))\r\n\t\t\t{\r\n\t\t\t\tvar wynik = parseFloat(temp) + 273.15;\r\n\t\t\t\tdocument.getElementById(\"wynik\").innerHTML = wynik+\"K\";\r\n\t\t\t}\r\n\t\t\telse document.getElementById(\"wynik\").innerHTML = \"Błąd danych\";\r\n\t\t}\r\n\t\t\r\n\t\tfunction fahrenheit()\r\n\t\t{\r\n\t\t\tvar temp = document.getElementById(\"temperatura\").value;\r\n\t\t\t\r\n\t\t\tif(temp != \"\" && temp==parseFloat(temp))\r\n\t\t\t{\r\n\t\t\t\tvar wynik = (temp*1.8) + 32;\r\n\t\t\t\tdocument.getElementById(\"wynik\").innerHTML = wynik+\"F\";\r\n\t\t\t}\r\n\t\t\telse document.getElementById(\"wynik\").innerHTML = \"Błąd danych\";\r\n\t\t}\r\n\t</script>\r\n</head>\r\n<body>\r\n\t<h2>Zamiana jednostek temperatury</h2>\r\n\tTemperatura w °C <br><br>\r\n\t<form>\r\n\t\t<input type=\"text\" id=\"temperatura\"> <br><br>\r\n\t\tZamień na <br><br>\r\n\t\t<input type=\"button\" value=\"Kelwiny\" onclick=\"kelwin()\"> <input type=\"button\" value=\"Fahrenheity\" onclick=\"fahrenheit()\">\r\n\t</form> <br>\r\n\t<div id=\"wynik\"></div>\r\n</body>\r\n</html>",
      "JS4.html": "<!DOCTYPE html>\r\n<html lang=\"pl-PL\">\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<title>JS4</title>\r\n\t\r\n\t<script>\r\n\t\tfunction sprawdz()\r\n\t\t{\r\n\t\t\tvar haslo = document.getElementById(\"haslo\").value;\r\n\t\t\t\r\n\t\t\tvar cyfra = false;\r\n\t\t\tfor(var i=0; i<haslo.length; i++)\r\n\t\t\t{\r\n\t\t\t\tif(haslo[i] == 0 || haslo[i] == 1 || haslo[i] == 2 || haslo[i] == 3 || haslo[i] == 4 || haslo[i] == 5 || haslo[i] == 6 || haslo[i] == 7 || haslo[i] == 8 || haslo[i] == 9) cyfra = true;\r\n\t\t\t}\r\n\t\t\t\r\n\t\t\tif(haslo == \"\") document.getElementById(\"wynik\").innerHTML = '<span style=\"color: red\">WPISZ HASŁO!</span>';\r\n\t\t\telse if(haslo.length > 3 && haslo.length <7 && cyfra==true) document.getElementById(\"wynik\").innerHTML = '<span style=\"color: blue\">ŚREDNIE</span>';\r\n\t\t\telse if(haslo.length > 6 && cyfra==true) document.getElementById(\"wynik\").innerHTML = '<span style=\"color: green\">DOBRE</span>';\r\n\t\t\telse document.getElementById(\"wynik\").innerHTML = '<span style=\"color: yellow\">SŁABE</span>';\r\n\t\t}\r\n\t</script>\r\n\t\r\n</head>\r\n<body>\r\n\t<form>\r\n\t\t<label>Twoje hasło: <input type=\"password\" id=\"haslo\"></label> <input type=\"button\" value=\"Sprawdź\" onclick=\"sprawdz()\">\r\n\t</form>\r\n\t\r\n\t<div id=\"wynik\"></div>\r\n</body>\r\n</html>",
      "JS5+.html": "<!DOCTYPE html>\r\n<html lang=\"pl-PL\">\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<title>JS5</title>\r\n\t<script>\r\n\t\tfunction licz()\r\n\t\t{\r\n\t\t\tvar a = document.getElementById(\"a\").value;\r\n\t\t\tvar b = document.getElementById(\"b\").value;\r\n\t\t\t\r\n\t\t\tvar pow = (a*b)+(b*2.7*2)+(a*2.7*2);\r\n\t\t\t\r\n\t\t\tdocument.getElementById(\"wynik\").innerHTML = \"<p>Powierzchnia całkowita ścian: \"+pow+\"</p>\";\r\n\t\t\t\r\n\t\t\tvar cena = pow*8;\r\n\t\t\t\r\n\t\t\tdocument.getElementById(\"wynik2\").innerHTML = \"Koszt malowania: \"+cena+\" zł\";\r\n\t\t\t\r\n\t\t}\r\n\t</script>\r\n</head>\r\n<body>\r\n\t<h1>Malowanie pokoju: 8 zł za m<sup>2</sup></h1>\r\n\tWymiary pokoju w metrach: <input type=\"text\" id=\"a\"> <input type=\"number\" id=\"b\"> <br><br>\r\n\t<input type=\"button\" value=\"OBLICZ KOSZT\" onclick=\"licz()\">\r\n\t<div id=\"wynik\"></div>\r\n\t<div id=\"wynik2\"></div>\r\n</body>\r\n</html>",
      "JS6+.html": "<!DOCTYPE html>\r\n<html lang=\"pl-PL\">\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<title>JS6</title>\r\n\t\r\n\t<script>\r\n\t\tfunction licz()\r\n\t\t{\r\n\t\t\tvar pow = document.getElementById(\"pow\").value;\r\n\t\t\t\r\n\t\t\tif(document.getElementById(\"r1\").checked)\r\n\t\t\t{\r\n\t\t\t\tvar wynik = pow * 70;\r\n\t\t\t\tdocument.getElementById(\"wynik\").innerHTML = \"Koszt kafelkowania: \"+wynik +\" zł\";\r\n\t\t\t}\r\n\t\t\telse\r\n\t\t\t{\r\n\t\t\t\tvar wynik = pow * 80;\r\n\t\t\t\tdocument.getElementById(\"wynik\").innerHTML = \"Koszt kafelkowania: \"+wynik +\" zł\";\r\n\t\t\t}\r\n\t\t}\r\n\t</script>\r\n\t\r\n</head>\r\n<body>\r\n\t<h1>Kafelkowanie łazienki</h1>\r\n\t<form>\r\n\t\t<label>Powierzchnia w m<sup>2</sup>: <input type=\"number\" id=\"pow\"></label> <br><br>\r\n\t\t<input type=\"radio\" id=\"r1\" name=\"plytki\"> Płytki 20 x 20 cm <br>\r\n\t\t<input type=\"radio\" id=\"r2\" name=\"plytki\"> Płytki 25 x 12 cm <br><br>\r\n\t\t<input type=\"button\" value=\"PRZELICZ\" onclick=\"licz()\"> <br><br>\r\n\t\t<div id=\"wynik\"></div>\r\n\t</form>\r\n</body>\r\n</html>",
      "JS7+.html": "<!DOCTYPE html>\r\n<html lang=\"pl-PL\">\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<title>JS7</title>\r\n\t\r\n\t<script>\r\n\t\tfunction licz()\r\n\t\t{\r\n\t\t\tvar metraz = document.getElementById(\"metraz\").value;\r\n\t\t\tvar pokoje = document.getElementById(\"pokoje\").value;\r\n\t\t\t\r\n\t\t\tif(document.getElementById(\"kafelki\").checked)\r\n\t\t\t{\r\n\t\t\t\tvar metraz2 = metraz * 4000;\r\n\t\t\t\tvar pokoje2 = pokoje * 1000;\r\n\t\t\t\t\r\n\t\t\t\tvar wynik = metraz2 + pokoje2 + 2000;\r\n\t\t\t\t\r\n\t\t\t\tdocument.getElementById(\"wynik\").innerHTML = \"Koszt mieszkania: \"+wynik+\" zł\";\r\n\t\t\t}\r\n\t\t\telse \r\n\t\t\t{\r\n\t\t\t\tvar metraz2 = metraz * 4000;\r\n\t\t\t\tvar pokoje2 = pokoje * 1000;\r\n\t\t\t\t\r\n\t\t\t\tvar wynik = metraz2 + pokoje2;\r\n\t\t\t\t\r\n\t\t\t\tdocument.getElementById(\"wynik\").innerHTML = \"Koszt mieszkania: \"+wynik+\" zł\";\r\n\t\t\t}\r\n\t\t}\r\n\t</script>\r\n\t\r\n</head>\r\n<body>\r\n\t<h1>KALKULATOR CENY MIESZKANIA</h1>\r\n\t\r\n\tPodaj metraż mieszkania w m<sup>2</sup>: <br>\r\n\t<input type=\"number\" id=\"metraz\"> <br><br>\r\n\t\r\n\tLiczba pokoi z zamontowanym okablowaniem sieciowym: <br>\r\n\t<input type=\"number\" id=\"pokoje\"> <br><br>\r\n\t\r\n\t<input type=\"checkbox\" id=\"kafelki\"> Kafelki w łazience? <br><br>\r\n\t\r\n\t<input type=\"button\" value=\"OBLICZ\" onclick=\"licz()\">\r\n\t\r\n\t<div id=\"wynik\"></div>\r\n</body>\r\n</html>",
      "JS8+.html": "<!DOCTYPE html>\r\n<html lang=\"pl-PL\">\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<title>JS8</title>\r\n\t\r\n\t<script>\r\n\t\tfunction licz()\r\n\t\t{\r\n\t\t\tvar ilosc = document.getElementById(\"ilosc\").value;\r\n\t\t\tvar upust = document.getElementById(\"upust\").checked;\r\n\t\t\t\r\n\t\t\tif(ilosc>0 && ilosc<51 && upust==false)\r\n\t\t\t{\r\n\t\t\t\tvar suma = ilosc*2;\r\n\t\t\t\tdocument.getElementById(\"wynik\").innerHTML = \"Koszt ogłoszeń: \"+suma+\" PLN\";\r\n\t\t\t}\r\n\t\t\telse if(ilosc>50 && upust==false)\r\n\t\t\t{\r\n\t\t\t\tvar suma = ilosc;\r\n\t\t\t\tdocument.getElementById(\"wynik\").innerHTML = \"Koszt ogłoszeń: \"+suma+\" PLN\";\r\n\t\t\t}\r\n\t\t\telse if(ilosc>0 && ilosc<51 && upust)\r\n\t\t\t{\r\n\t\t\t\tvar suma = ilosc*1.8;\r\n\t\t\t\tdocument.getElementById(\"wynik\").innerHTML = \"Koszt ogłoszeń: \"+suma+\" PLN\";\r\n\t\t\t}\r\n\t\t\telse if(ilosc>50 && upust)\r\n\t\t\t{\r\n\t\t\t\tvar suma = ilosc*0.8;\r\n\t\t\t\tdocument.getElementById(\"wynik\").innerHTML = \"Koszt ogłoszeń: \"+suma+\" PLN\";\r\n\t\t\t}\r\n\t\t}\r\n\t</script>\r\n\t\r\n</head>\r\n<body>\r\n\t<h2>Ile kosztuje ogłoszenie?</h2>\r\n\t\r\n\t<form>\r\n\t\t<label>Podaj liczbę ogłoszeń: <br>\r\n\t\t<input type=\"number\" id=\"ilosc\"></label> <br><br>\r\n\t\t\r\n\t\t<label><input type=\"checkbox\" id=\"upust\"> Policz upust na newsletter</label> <br><br>\r\n\t\t\r\n\t\t<input type=\"button\" value=\"Oblicz\" onclick=\"licz()\">\r\n\t</form>\r\n\t\r\n\t<div id=\"wynik\"></div>\r\n</body>\r\n</html>",
      "js9_idk.html": "<!DOCTYPE html>\r\n<html lang=\"pl-PL\">\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<title>JS9</title>\r\n\t\r\n\t<script>\r\n\t\tfunction oblicz()\r\n\t\t{\r\n\t\t\tvar polak = document.getElementById(\"polak\").value;\r\n\t\t\tvar nowak = document.getElementById(\"nowak\").value;\r\n\t\t\tvar rysik = document.getElementById(\"rysik\").value;\r\n\t\t\t\r\n\t\t\tif(polak == \"\" || polak != parseFloat(polak) || nowak == \"\" || nowak != parseFloat(nowak) || rysik == \"\" || rysik != parseFloat(rysik)) alert(\"wpisz poprawne dane\");\r\n\t\t\telse\r\n\t\t\t{\r\n\t\t\t\tvar polak = parseFloat(polak);\r\n\t\t\t\tvar nowak = parseFloat(nowak);\r\n\t\t\t\tvar rysik = parseFloat(rysik);\r\n\t\t\t\t\r\n\t\t\t\tvar srednia = (polak + nowak + rysik)/3;\r\n\t\t\t\tdocument.getElementById(\"wynik\").innerHTML = srednia;\r\n\t\t\t}\r\n\t\t}\r\n\t</script>\r\n\t\r\n</head>\r\n<body>\r\n\t<h4>Obliczanie średniej ocen:</h4>\r\n\t\r\n\t<form>\r\n\t\t<ul>\r\n\t\t\t<li>Polak <input type=\"text\" id=\"polak\"></li> <br>\r\n\t\t\t<li>Nowak <input type=\"text\" id=\"nowak\"></li> <br>\r\n\t\t\t<li>Rysik <input type=\"text\" id=\"rysik\"></li> <br>\r\n\t\t</ul>\r\n\t\t\r\n\t\t<input type=\"button\" value=\"oblicz\" onclick=\"oblicz()\">\r\n\t</form>\r\n\t\r\n\t<h4>Średnia ocen:</h4>\r\n\t\r\n\t<div id=\"wynik\"></div>\r\n</body>\r\n</html>",
      "README.md": "# 📌 JS_Zadania (Ćwiczenia i Zadania (INF.03 / E.14 / EE.09))\n\n> **Temat zadania:** Zestaw 16 Zadań Praktycznych JavaScript  \n> **Kwalifikacja:** Ćwiczenia i Zadania (INF.03 / E.14 / EE.09)  \n> **Technologie:** HTML5, CSS3, JavaScript\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nKomplet 16 mini-projektów egzaminacyjnych w czystym JavaScript: operacje na DOM, tablice, walidacja formularzy, kalkulatory i animacje.\n\n### Główne elementy rozwiązania:\n- Opracowanie semantycznej struktury strony w standardzie HTML5.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 📄 **Arkusz PDF:** `js_-_zadania_egzaminacyjne.pdf`\n- 🌐 **Pliki HTML:** `JS1+.html`, `js10_idk.html`, `JS11+.html`, `JS12+.html`, `JS13+.html`, `JS14+.html`, `JS15+.html`, `JS16+.html`, `JS2+.html`, `JS3+.html`, `JS4.html`, `JS5+.html`, `JS6+.html`, `JS7+.html`, `JS8+.html`, `js9_idk.html`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n2. **Uruchomienie strony WWW:**\n   - Kliknij dwukrotnie plik `JS1+.html` lub przeciągnij go do dowolnej przeglądarki.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n"
    }
  },
  {
    "id": "Cwiczenia_i_Zadania_Obrazki",
    "category": "Cwiczenia_i_Zadania",
    "name": "Obrazki",
    "title": "Oferty Biura Turystycznego",
    "description": "Strona prezentująca destynacje wakacyjne, cenniki i galerie zdjęć z dynamicznym pobieraniem z bazy danych.",
    "technologies": [
      "HTML5",
      "CSS3",
      "PHP",
      "MySQL"
    ],
    "folder": "Cwiczenia_i_Zadania/Obrazki",
    "mainPdf": null,
    "mainHtml": null,
    "mainPhp": "wycieczki.php",
    "mainSql": null,
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# 📌 Obrazki (Ćwiczenia i Zadania (INF.03 / E.14 / EE.09))\n\n> **Temat zadania:** Oferty Biura Turystycznego  \n> **Kwalifikacja:** Ćwiczenia i Zadania (INF.03 / E.14 / EE.09)  \n> **Technologie:** HTML5, CSS3, PHP, MySQL\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nStrona prezentująca destynacje wakacyjne, cenniki i galerie zdjęć z dynamicznym pobieraniem z bazy danych.\n\n### Główne elementy rozwiązania:\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Oprogramowanie skryptu backendowego w PHP (mysqli) do komunikacji z bazą danych MySQL.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 🐘 **Skrypty PHP:** `wycieczki.php`\n- 📝 **Pliki tekstowe / Kwerendy:** `kwerendy.txt`\n- 🎨 **Style CSS:** `styl3.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n3. **Uruchomienie PHP:**\n   - Skopiuj ten rozpakowany folder do katalogu `C:\\xampp\\htdocs\\Obrazki`.\n   - Uruchom moduł **Apache** w XAMPP.\n   - Otwórz w przeglądarce adres: `http://localhost/Obrazki/wycieczki.php`.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
    "pdfs": [],
    "htmls": [],
    "phps": [
      "wycieczki.php"
    ],
    "sqls": [],
    "zips": [
      "paczka_zadania.zip"
    ],
    "txts": [
      "kwerendy.txt"
    ],
    "scripts": [
      "styl3.css"
    ],
    "allFiles": [
      "kwerendy.txt",
      "obraz1.jpeg",
      "obraz2.jpg",
      "obraz3.jpg",
      "obraz4.jpeg",
      "obraz5.jpg",
      "obraz6.jpg",
      "obraz7.jpg",
      "obraz8.jpg",
      "obraz9.jpg",
      "paczka_zadania.zip",
      "README.md",
      "styl3.css",
      "wycieczki.php"
    ],
    "fileContents": {
      "kwerendy.txt": "SELECT id, dataWyjazdu, cel, cena FROM wycieczki WHERE dostepna=1;\r\n\r\nSELECT nazwaPliku, podpis FROM zdjecia ORDER BY podpis;\r\n\r\nSELECT nazwaPliku, cel FROM wycieczki INNER JOIN zdjecia ON wycieczki.zdjecia_id = zdjecia.id WHERE cena > 1000;\r\n\r\nALTER TABLE wycieczki ADD dataPrzyjazdu DATE NULL AFTER dataWyjazdu;",
      "README.md": "# 📌 Obrazki (Ćwiczenia i Zadania (INF.03 / E.14 / EE.09))\n\n> **Temat zadania:** Oferty Biura Turystycznego  \n> **Kwalifikacja:** Ćwiczenia i Zadania (INF.03 / E.14 / EE.09)  \n> **Technologie:** HTML5, CSS3, PHP, MySQL\n\n---\n\n## 📖 Opis zadania i co zostało zrobione\n\nStrona prezentująca destynacje wakacyjne, cenniki i galerie zdjęć z dynamicznym pobieraniem z bazy danych.\n\n### Główne elementy rozwiązania:\n- Przygotowanie responsywnego arkusza stylów CSS zgodnie z wytycznymi arkusza.\n- Oprogramowanie skryptu backendowego w PHP (mysqli) do komunikacji z bazą danych MySQL.\n\n---\n\n## 📁 Pliki w tym zadaniu\n\n- 🐘 **Skrypty PHP:** `wycieczki.php`\n- 📝 **Pliki tekstowe / Kwerendy:** `kwerendy.txt`\n- 🎨 **Style CSS:** `styl3.css`\n\n---\n\n## 🚀 Instrukcja krok po kroku (co zrobić po pobraniu)\n\n1. **Rozpakuj pobrane archiwum ZIP** do dowolnego folderu.\n\n3. **Uruchomienie PHP:**\n   - Skopiuj ten rozpakowany folder do katalogu `C:\\xampp\\htdocs\\Obrazki`.\n   - Uruchom moduł **Apache** w XAMPP.\n   - Otwórz w przeglądarce adres: `http://localhost/Obrazki/wycieczki.php`.\n\n---\n\n*Powodzenia w nauce i na egzaminie zawodowym! 🎓*\n",
      "styl3.css": "body\r\n{\r\n    font-family: Verdana;\r\n}\r\n\r\nheader, footer\r\n{\r\n    background-color: rgb(205, 92, 92);\r\n    color: white;\r\n    text-align: center;\r\n    padding: 5px;\r\n}\r\n\r\nsection:nth-of-type(1), section:nth-of-type(3)\r\n{\r\n    background-color: rgb(250, 235, 215);\r\n    width: 25%;\r\n    height: 500px;\r\n}\r\n\r\nsection:nth-of-type(2)\r\n{\r\n    background-color: rgb(250, 235, 215);\r\n    width: 50%;\r\n    height: 500px;\r\n    text-align: center;\r\n}\r\n\r\nsection:nth-of-type(5)\r\n{\r\n    background-color: rgb(210, 180, 140);\r\n    color: white;\r\n    float: none;\r\n}\r\n\r\nh2\r\n{\r\n    text-align: center;\r\n}\r\n\r\nh2::first-letter\r\n{\r\n    font-size: 150%;\r\n}\r\n\r\nimg\r\n{\r\n    height: 100px;\r\n    padding: 7px;\r\n    width: 160px;\r\n}\r\n\r\nimg:hover\r\n{\r\n    background-color: rgb(210, 180, 140);\r\n}\r\n\r\nbody, h1, h2\r\n{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nsection\r\n{\r\n    float: left;\r\n}\r\n",
      "wycieczki.php": "<!DOCTYPE HTML>\r\n<html>\r\n    <head>\r\n        <meta charset=\"utf-8\">\r\n        <title>Wycieczki i urlopy</title>\r\n        <link rel=\"Stylesheet\" href=\"styl3.css\">\r\n    </head>\r\n    <body>\r\n        <header>\r\n            <h1>BIURO PODRÓŻY</h1>\r\n        </header>\r\n        <section>\r\n            <h2>KONTAKT</h2>\r\n            <a href=\"mailto:biuro@wycieczki.pl\">napisz do nas</a>\r\n            <p>telefon: 555666777</p>\r\n        </section>\r\n        <section>\r\n            <h2>GALERIA</h2>\r\n            <?php\r\n    error_reporting(E_ALL & ~E_NOTICE & ~E_WARNING);\r\n\r\n                $connection = new mysqli('localhost', 'root', '', 'egzamin3');\r\n                $query = \"SELECT nazwaPliku, podpis FROM zdjecia ORDER BY podpis;\";\r\n                $result = $connection->query($query);\r\n                $i = 0;\r\n                while($row = $result->fetch_assoc())\r\n                {\r\n                    echo \"<img src=\".$row['nazwaPliku'].\" alt=\".$row['podpis'].\">\";\r\n                    if($i == 2 || $i == 5)\r\n                        echo \"<br>\";\r\n                    $i++;\r\n                }\r\n                $connection->close();\r\n            ?>\r\n        </section>\r\n        <section>\r\n            <h2>PROMOCJE</h2>\r\n            <table>\r\n                <tr>\r\n                    <td>Jesień</td>\r\n                    <td>Grupa 4+</td>\r\n                    <td>Grupa 10+</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>5%</td>\r\n                    <td>10%</td>\r\n                    <td>15%</td>\r\n                </tr>\r\n            </table>\r\n        </section>\r\n        <section style=\"clear: both;\"></section>\r\n        <section>\r\n            <h2>LISTA WYCIECZEK</h2>\r\n            <?php\r\n                $connection = new mysqli('localhost', 'root', '', 'egzamin3');\r\n                $query = \"SELECT id, dataWyjazdu, cel, cena FROM wycieczki WHERE dostepna=1;\";\r\n                $result = $connection->query($query);\r\n                while($row = $result->fetch_assoc())\r\n                {\r\n                    echo $row['id'].\", \".$row['dataWyjazdu'].\", \".$row['cel'].\", cena: \".$row['cena'].\"<br>\";\r\n                }\r\n            ?>\r\n        </section>\r\n        <footer>\r\n            <p>Stronę wykonał: 0000000000</p>\r\n        </footer>\r\n    </body>\r\n</html>"
    }
  },
  {
    "id": "cw_js_JS1__html",
    "category": "Cwiczenia_i_Zadania",
    "name": "JS Zadanie 01 — Dodawanie liczb (A + B)",
    "title": "JS Zadanie 01 — Dodawanie liczb (A + B)",
    "description": "Kalkulator dodawania dwóch liczb wprowadzanych w polach tekstowych z obsługą pustych pól.",
    "technologies": [
      "HTML5",
      "CSS3",
      "JavaScript"
    ],
    "folder": "Cwiczenia_i_Zadania/JS_Zadania",
    "mainPdf": "js_-_zadania_egzaminacyjne.pdf",
    "mainHtml": "JS1+.html",
    "mainPhp": null,
    "mainSql": null,
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# JS Zadanie 01 — Dodawanie liczb (A + B)\n\nKalkulator dodawania dwóch liczb wprowadzanych w polach tekstowych z obsługą pustych pól.\n\nPlik źródłowy: `JS1+.html`",
    "pdfs": [
      "js_-_zadania_egzaminacyjne.pdf"
    ],
    "htmls": [
      "JS1+.html"
    ],
    "phps": [],
    "sqls": [],
    "zips": [
      "paczka_zadania.zip"
    ],
    "txts": [],
    "scripts": [
      "JS1+.html"
    ],
    "allFiles": [
      "JS1+.html",
      "js_-_zadania_egzaminacyjne.pdf"
    ],
    "fileContents": {
      "JS1+.html": "<!DOCTYPE html>\r\n<html lang=\"pl-PL\">\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<title>JS1</title>\r\n\t\r\n\t<script>\r\n\t\tfunction dodawanie()\r\n\t\t{\r\n\t\t\tvar a = document.getElementById(\"a\").value;\r\n\t\t\tvar b = document.getElementById(\"b\").value;\r\n\t\t\t\r\n\t\t\tif(a == \"\" || b == \"\") document.getElementById(\"wynik\").innerHTML = \"<i>Proszę uzupełnić obie liczby.</i>\";\r\n\t\t\telse\r\n\t\t\t{\r\n\t\t\t\tvar wynik = parseFloat(a)+parseFloat(b);\r\n\t\t\t\tdocument.getElementById(\"wynik\").innerHTML = a+\" + \"+b+\" = \"+wynik;\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t\tfunction odejmowanie()\r\n\t\t{\r\n\t\t\t\r\n\t\t\tvar a = document.getElementById(\"a\").value;\r\n\t\t\tvar b = document.getElementById(\"b\").value;\r\n\t\t\t\r\n\t\t\tif(a == \"\" || b == \"\") document.getElementById(\"wynik\").innerHTML = \"<i>Proszę uzupełnić obie liczby.</i>\";\r\n\t\t\telse\r\n\t\t\t{\r\n\t\t\t\tvar wynik = a-b;\r\n\t\t\t\tdocument.getElementById(\"wynik\").innerHTML = a+\" - \"+b+\" = \"+wynik;\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t\tfunction mnozenie()\r\n\t\t{\r\n\t\t\tvar a = document.getElementById(\"a\").value;\r\n\t\t\tvar b = document.getElementById(\"b\").value;\r\n\t\t\t\r\n\t\t\tif(a == \"\" || b == \"\") document.getElementById(\"wynik\").innerHTML = \"<i>Proszę uzupełnić obie liczby.</i>\";\r\n\t\t\telse\r\n\t\t\t{\r\n\t\t\t\tvar wynik = a*b;\r\n\t\t\t\tdocument.getElementById(\"wynik\").innerHTML = a+\" * \"+b+\" = \"+wynik;\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t\tfunction dzielenie()\r\n\t\t{\r\n\t\t\tvar a = document.getElementById(\"a\").value;\r\n\t\t\tvar b = document.getElementById(\"b\").value;\r\n\t\t\t\r\n\t\t\tif(a == \"\" || b == \"\") document.getElementById(\"wynik\").innerHTML = \"<i>Proszę uzupełnić obie liczby.</i>\";\r\n\t\t\telse if(a == 0 || b == 0) document.getElementById(\"wynik\").innerHTML = \"<i>Nie wolno dzielić przez zero.</i>\";\r\n\t\t\telse\r\n\t\t\t{\r\n\t\t\t\tvar wynik = a/b;\r\n\t\t\t\tdocument.getElementById(\"wynik\").innerHTML = a+\" / \"+b+\" = \"+wynik;\r\n\t\t\t}\r\n\t\t}\r\n\t</script>\r\n\t\r\n</head>\r\n<body>\r\n\t<h1>PROSTE DZIAŁANIA</h1>\r\n\t<form>\r\n\t\t<label><i>Podaj pierwszą liczbę:</i> <input type=\"number\" id=\"a\"></label> <br><br>\r\n\t\t<label><i>Podaj drugą liczbę:</i> <input type=\"number\" id=\"b\"></label> <br><br>\r\n\t\t\r\n\t\t<input type=\"button\" value=\"DODAWANIE\" onclick=\"dodawanie()\">\r\n\t\t<input type=\"button\" value=\"ODEJMOWANIE\" onclick=\"odejmowanie()\">\r\n\t\t<input type=\"button\" value=\"MNOŻENIE\" onclick=\"mnozenie()\">\r\n\t\t<input type=\"button\" value=\"DZIELENIE\" onclick=\"dzielenie()\">\r\n\t</form> <br>\r\n\t\r\n\t<div id=\"wynik\"></div>\r\n</body>\r\n</html>"
    }
  },
  {
    "id": "cw_js_js10_idk_html",
    "category": "Cwiczenia_i_Zadania",
    "name": "JS Zadanie 10 — Wybory i procentowe poparcie",
    "title": "JS Zadanie 10 — Wybory i procentowe poparcie",
    "description": "Kalkulator procentowego udziału głosów wyborczych dla poszczególnych kandydatów.",
    "technologies": [
      "HTML5",
      "CSS3",
      "JavaScript"
    ],
    "folder": "Cwiczenia_i_Zadania/JS_Zadania",
    "mainPdf": "js_-_zadania_egzaminacyjne.pdf",
    "mainHtml": "js10_idk.html",
    "mainPhp": null,
    "mainSql": null,
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# JS Zadanie 10 — Wybory i procentowe poparcie\n\nKalkulator procentowego udziału głosów wyborczych dla poszczególnych kandydatów.\n\nPlik źródłowy: `js10_idk.html`",
    "pdfs": [
      "js_-_zadania_egzaminacyjne.pdf"
    ],
    "htmls": [
      "js10_idk.html"
    ],
    "phps": [],
    "sqls": [],
    "zips": [
      "paczka_zadania.zip"
    ],
    "txts": [],
    "scripts": [
      "js10_idk.html"
    ],
    "allFiles": [
      "js10_idk.html",
      "js_-_zadania_egzaminacyjne.pdf"
    ],
    "fileContents": {
      "js10_idk.html": "<!DOCTYPE html>\r\n<html lang=\"pl-PL\">\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<title>JS10</title>\r\n\t\r\n\t<script>\r\n\t\tfunction oblicz()\r\n\t\t{\r\n\t\t\tvar polak = document.getElementById(\"polak\").value;\r\n\t\t\tvar nowak = document.getElementById(\"nowak\").value;\r\n\t\t\tvar rysik = document.getElementById(\"rysik\").value;\r\n\t\t\t\r\n\t\t\tif(polak == \"\" || polak != parseFloat(polak) || nowak == \"\" || nowak != parseFloat(nowak) || rysik == \"\" || rysik != parseFloat(rysik)) alert(\"wpisz poprawne dane\");\r\n\t\t\telse\r\n\t\t\t{\r\n\t\t\t\tvar polak = parseFloat(polak);\r\n\t\t\t\tvar nowak = parseFloat(nowak);\r\n\t\t\t\tvar rysik = parseFloat(rysik);\r\n\t\t\t\t\r\n\t\t\t\tif(polak>nowak) document.getElementById(\"wynik\").innerHTML = polak;\r\n\t\t\t\telse if(nowak>rysik) document.getElementById(\"wynik\").innerHTML = nowak;\r\n\t\t\t\telse document.getElementById(\"wynik\").innerHTML = rysik;\r\n\t\t\t}\r\n\t\t}\r\n\t</script>\r\n\t\r\n</head>\r\n<body>\r\n\t<h3>Wyznaczanie najwyższej średniej</h3>\r\n\t\r\n\t<form>\r\n\t\t<ul>\r\n\t\t\t<li>Polak <input type=\"text\" id=\"polak\"></li> <br>\r\n\t\t\t<li>Nowak <input type=\"text\" id=\"nowak\"></li> <br>\r\n\t\t\t<li>Rysik <input type=\"text\" id=\"rysik\"></li> <br>\r\n\t\t</ul>\r\n\t\t\r\n\t\t<input type=\"button\" value=\"wyznacz\" onclick=\"oblicz()\">\r\n\t</form>\r\n\t\r\n\t<h3>Najwyższa średnia:</h3>\r\n\t\r\n\t<div id=\"wynik\"></div>\r\n</body>\r\n</html>"
    }
  },
  {
    "id": "cw_js_JS11__html",
    "category": "Cwiczenia_i_Zadania",
    "name": "JS Zadanie 11 — Koszt wesela i poprawin",
    "title": "JS Zadanie 11 — Koszt wesela i poprawin",
    "description": "Wycena przyjęcia okolicznościowego: 100 zł/osobę oraz opcjonalne poprawiny (+30% kosztów).",
    "technologies": [
      "HTML5",
      "CSS3",
      "JavaScript"
    ],
    "folder": "Cwiczenia_i_Zadania/JS_Zadania",
    "mainPdf": "js_-_zadania_egzaminacyjne.pdf",
    "mainHtml": "JS11+.html",
    "mainPhp": null,
    "mainSql": null,
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# JS Zadanie 11 — Koszt wesela i poprawin\n\nWycena przyjęcia okolicznościowego: 100 zł/osobę oraz opcjonalne poprawiny (+30% kosztów).\n\nPlik źródłowy: `JS11+.html`",
    "pdfs": [
      "js_-_zadania_egzaminacyjne.pdf"
    ],
    "htmls": [
      "JS11+.html"
    ],
    "phps": [],
    "sqls": [],
    "zips": [
      "paczka_zadania.zip"
    ],
    "txts": [],
    "scripts": [
      "JS11+.html"
    ],
    "allFiles": [
      "JS11+.html",
      "js_-_zadania_egzaminacyjne.pdf"
    ],
    "fileContents": {
      "JS11+.html": "<!DOCTYPE html>\r\n<html lang=\"pl-PL\">\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<title>JS11</title>\r\n\t\r\n\t<script>\r\n\t\tfunction licz()\r\n\t\t{\r\n\t\t\tvar goscie = document.getElementById(\"goscie\").value;\r\n\t\t\tvar poprawiny = document.getElementById(\"poprawiny\").checked;\r\n\t\t\t\r\n\t\t\tif(poprawiny)\r\n\t\t\t{\r\n\t\t\t\tvar wynik = (goscie*100)*1.3;\r\n\t\t\t\tdocument.getElementById(\"wynik\").innerHTML = \"Koszt Twojego wesela to \"+wynik+\" złotych\";\r\n\t\t\t}\r\n\t\t\telse\r\n\t\t\t{\r\n\t\t\t\tvar wynik = goscie*100;\r\n\t\t\t\tdocument.getElementById(\"wynik\").innerHTML = \"Koszt Twojego wesela to \"+wynik+\" złotych\";\r\n\t\t\t}\r\n\t\t}\r\n\t</script>\r\n\t\r\n</head>\r\n<body>\r\n\t<h2>Ile będzie kosztowało moje wesele?</h2>\r\n\t\r\n\t<form>\r\n\t\t<label>Podaj liczbę gości: <input type=\"number\" id=\"goscie\"></label> <br><br>\r\n\t\t\r\n\t\t<input type=\"checkbox\" id=\"poprawiny\"> Wesele z poprawinami? <br><br>\r\n\t\t\r\n\t\t<input type=\"button\" value=\"Oblicz koszt\" onclick=\"licz()\">\r\n\t</form>\r\n\t\r\n\t<div id=\"wynik\"></div>\r\n</body>\r\n</html>"
    }
  },
  {
    "id": "cw_js_JS12__html",
    "category": "Cwiczenia_i_Zadania",
    "name": "JS Zadanie 12 — Kalkulator kosztu transportu",
    "title": "JS Zadanie 12 — Kalkulator kosztu transportu",
    "description": "Wyliczenie kosztu przewozu: stawka bazowa za kilometr oraz dopłata za teren górzysty.",
    "technologies": [
      "HTML5",
      "CSS3",
      "JavaScript"
    ],
    "folder": "Cwiczenia_i_Zadania/JS_Zadania",
    "mainPdf": "js_-_zadania_egzaminacyjne.pdf",
    "mainHtml": "JS12+.html",
    "mainPhp": null,
    "mainSql": null,
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# JS Zadanie 12 — Kalkulator kosztu transportu\n\nWyliczenie kosztu przewozu: stawka bazowa za kilometr oraz dopłata za teren górzysty.\n\nPlik źródłowy: `JS12+.html`",
    "pdfs": [
      "js_-_zadania_egzaminacyjne.pdf"
    ],
    "htmls": [
      "JS12+.html"
    ],
    "phps": [],
    "sqls": [],
    "zips": [
      "paczka_zadania.zip"
    ],
    "txts": [],
    "scripts": [
      "JS12+.html"
    ],
    "allFiles": [
      "JS12+.html",
      "js_-_zadania_egzaminacyjne.pdf"
    ],
    "fileContents": {
      "JS12+.html": "<!DOCTYPE html>\r\n<html lang=\"pl-PL\">\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<title>JS12</title>\r\n\t\r\n\t<script>\r\n\t\tfunction licz()\r\n\t\t{\r\n\t\t\tvar gora = document.getElementById(\"gora\").checked;\r\n\t\t\tvar km = document.getElementById(\"km\").value;\r\n\t\t\t\r\n\t\t\tif(gora) document.getElementById(\"wynik\").innerHTML = \"Dowieziemy Twoją pizzę za darmo\";\r\n\t\t\telse\r\n\t\t\t{\r\n\t\t\t\tvar wynik = km*2;\r\n\t\t\t\tdocument.getElementById(\"wynik\").innerHTML = \"Dowóz będzie Cię kosztował \"+wynik+\" złotych\";\r\n\t\t\t}\r\n\t\t}\r\n\t</script>\r\n\t\r\n</head>\r\n<body>\r\n\t<h3>Oblicz koszt dostawy</h3>\r\n\t\r\n\t<form>\r\n\t\t<label><input type=\"checkbox\" id=\"gora\"> Jestem z Zielonej Góry</label>\r\n\t\t\r\n\t\t<p>albo</p>\r\n\t\t\r\n\t\t<label>Podaj liczbę kilometrów od Zielonej Góry: <input type=\"number\" id=\"km\"></label> <br><br>\r\n\t\t\r\n\t\t<input type=\"button\" value=\"Oblicz\" onclick=\"licz()\">\r\n\t</form>\r\n\t\r\n\t<div id=\"wynik\"></div>\r\n</body>\r\n</html>"
    }
  },
  {
    "id": "cw_js_JS13__html",
    "category": "Cwiczenia_i_Zadania",
    "name": "JS Zadanie 13 — Dynamiczna zmiana kolorów tła",
    "title": "JS Zadanie 13 — Dynamiczna zmiana kolorów tła",
    "description": "Interaktywna manipulacja stylami CSS i klasami DOM po kliknięciu przycisków kolorów.",
    "technologies": [
      "HTML5",
      "CSS3",
      "JavaScript"
    ],
    "folder": "Cwiczenia_i_Zadania/JS_Zadania",
    "mainPdf": "js_-_zadania_egzaminacyjne.pdf",
    "mainHtml": "JS13+.html",
    "mainPhp": null,
    "mainSql": null,
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# JS Zadanie 13 — Dynamiczna zmiana kolorów tła\n\nInteraktywna manipulacja stylami CSS i klasami DOM po kliknięciu przycisków kolorów.\n\nPlik źródłowy: `JS13+.html`",
    "pdfs": [
      "js_-_zadania_egzaminacyjne.pdf"
    ],
    "htmls": [
      "JS13+.html"
    ],
    "phps": [],
    "sqls": [],
    "zips": [
      "paczka_zadania.zip"
    ],
    "txts": [],
    "scripts": [
      "JS13+.html"
    ],
    "allFiles": [
      "JS13+.html",
      "js_-_zadania_egzaminacyjne.pdf"
    ],
    "fileContents": {
      "JS13+.html": "<!DOCTYPE html>\r\n<html lang=\"pl-PL\">\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<title>JS13</title>\r\n\t<style>\r\n\t\t#czerwony\r\n\t\t{\r\n\t\t\tbackground-color: red;\r\n\t\t\tmin-width:  20px;\r\n\t\t\tmin-height: 20px;\r\n\t\t}\r\n\t\t\r\n\t\t#zielony\r\n\t\t{\r\n\t\t\tbackground-color: green;\r\n\t\t\tmin-width:  20px;\r\n\t\t\tmin-height: 20px;\r\n\t\t}\r\n\t\t\r\n\t\t#niebieski\r\n\t\t{\r\n\t\t\tbackground-color: blue;\r\n\t\t\tmin-width:  20px;\r\n\t\t\tmin-height: 20px;\r\n\t\t}\r\n\t</style>\r\n\t\r\n\t<script>\r\n\t\tfunction czerw()\r\n\t\t{\r\n\t\t\tvar rozmiar = document.getElementById(\"rozmiar\").value;\r\n\t\t\tvar rodzaj = document.getElementById(\"rodzaj\").value;\r\n\t\t\t\r\n\t\t\tdocument.getElementById(\"wynik\").style.fontSize = rozmiar+\"%\";\r\n\t\t\tdocument.getElementById(\"wynik\").style.fontStyle = rodzaj;\r\n\t\t\tdocument.getElementById(\"wynik\").style.color = \"red\";\r\n\t\t}\r\n\t\t\r\n\t\tfunction ziel()\r\n\t\t{\r\n\t\t\tvar rozmiar = document.getElementById(\"rozmiar\").value;\r\n\t\t\tvar rodzaj = document.getElementById(\"rodzaj\").value;\r\n\t\t\t\r\n\t\t\tdocument.getElementById(\"wynik\").style.fontSize = rozmiar+\"%\";\r\n\t\t\tdocument.getElementById(\"wynik\").style.fontStyle = rodzaj;\r\n\t\t\tdocument.getElementById(\"wynik\").style.color = \"green\";\r\n\t\t}\r\n\t\t\r\n\t\tfunction nieb()\r\n\t\t{\r\n\t\t\tvar rozmiar = document.getElementById(\"rozmiar\").value;\r\n\t\t\tvar rodzaj = document.getElementById(\"rodzaj\").value;\r\n\t\t\t\r\n\t\t\tdocument.getElementById(\"wynik\").style.fontSize = rozmiar+\"%\";\r\n\t\t\tdocument.getElementById(\"wynik\").style.fontStyle = rodzaj;\r\n\t\t\tdocument.getElementById(\"wynik\").style.color = \"blue\";\r\n\t\t}\r\n\t</script>\r\n\t\r\n</head>\r\n<body>\r\n\t<form>\r\n\t\t<label>Podaj rozmiar tekstu w procentach: <br><br>\r\n\t\t<input type=\"number\" id=\"rozmiar\"> %</label> <br><br>\r\n\t\t\r\n\t\t<select id=\"rodzaj\">\r\n\t\t\t<option value=\"normal\">prosty</option>\r\n\t\t\t<option value=\"italic\">pochyły</option>\r\n\t\t</select> <br><br>\r\n\t\t\r\n\t\tJakim kolorem sformatować tekst? Wybierz przycisk. <br><br>\r\n\t\t<input type=\"button\" id=\"czerwony\" onclick=\"czerw()\">\r\n\t\t<input type=\"button\" id=\"zielony\" onclick=\"ziel()\">\r\n\t\t<input type=\"button\" id=\"niebieski\" onclick=\"nieb()\">\r\n\t</form>\r\n\t\r\n\t<p id=\"wynik\">To jest przykład paragrafu, który może być dowolnie formatowany przez JavaScript.</p>\r\n</body>\r\n</html>"
    }
  },
  {
    "id": "cw_js_JS14__html",
    "category": "Cwiczenia_i_Zadania",
    "name": "JS Zadanie 14 — Cennik przesyłek kurierskich",
    "title": "JS Zadanie 14 — Cennik przesyłek kurierskich",
    "description": "Kalkulacja ceny wysyłki paczki w zależności od wybranego gabarytu i wagi w kilogramach.",
    "technologies": [
      "HTML5",
      "CSS3",
      "JavaScript"
    ],
    "folder": "Cwiczenia_i_Zadania/JS_Zadania",
    "mainPdf": "js_-_zadania_egzaminacyjne.pdf",
    "mainHtml": "JS14+.html",
    "mainPhp": null,
    "mainSql": null,
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# JS Zadanie 14 — Cennik przesyłek kurierskich\n\nKalkulacja ceny wysyłki paczki w zależności od wybranego gabarytu i wagi w kilogramach.\n\nPlik źródłowy: `JS14+.html`",
    "pdfs": [
      "js_-_zadania_egzaminacyjne.pdf"
    ],
    "htmls": [
      "JS14+.html"
    ],
    "phps": [],
    "sqls": [],
    "zips": [
      "paczka_zadania.zip"
    ],
    "txts": [],
    "scripts": [
      "JS14+.html"
    ],
    "allFiles": [
      "JS14+.html",
      "js_-_zadania_egzaminacyjne.pdf"
    ],
    "fileContents": {
      "JS14+.html": "<!DOCTYPE html>\r\n<html lang=\"pl-PL\">\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<title>JS14</title>\r\n\t\r\n\t<script>\r\n\t\tfunction licz()\r\n\t\t{\r\n\t\t\tvar numer = document.getElementById(\"numer\").value;\r\n\t\t\tvar waga = document.getElementById(\"waga\").value;\r\n\t\t\t\r\n\t\t\tif(numer == 1)\r\n\t\t\t{\r\n\t\t\t\tvar wynik = waga*5;\r\n\t\t\t\tdocument.getElementById(\"wynik\").innerHTML = \"Koszt zamówienia wynosi \"+wynik+\" zł\";\r\n\t\t\t}\r\n\t\t\telse if(numer == 2)\r\n\t\t\t{\r\n\t\t\t\tvar wynik = waga*7;\r\n\t\t\t\tdocument.getElementById(\"wynik\").innerHTML = \"Koszt zamówienia wynosi \"+wynik+\" zł\";\r\n\t\t\t}\r\n\t\t\telse if(numer == 3)\r\n\t\t\t{\r\n\t\t\t\tvar wynik = waga*6;\r\n\t\t\t\tdocument.getElementById(\"wynik\").innerHTML = \"Koszt zamówienia wynosi \"+wynik+\" zł\";\r\n\t\t\t}\r\n\t\t\telse document.getElementById(\"wynik\").innerHTML = \"Koszt zamówienia wynosi 0 zł\";\r\n\t\t}\r\n\t</script>\r\n\t\r\n</head>\r\n<body>\r\n\t<form>\r\n\t\t<label>Podaj numer kawy: <br><br>\r\n\t\t<input type=\"number\" id=\"numer\"></label> <br><br>\r\n\t\t\r\n\t\t<label>Podaj wagę w dekagramach: <br><br>\r\n\t\t<input type=\"number\" id=\"waga\"></label> <br><br>\r\n\t\t\r\n\t\t<input type=\"button\" value=\"Zamów\" onclick=\"licz()\">\r\n\t</form>\r\n\t\r\n\t<div id=\"wynik\"></div>\r\n</body>\r\n</html>"
    }
  },
  {
    "id": "cw_js_JS15__html",
    "category": "Cwiczenia_i_Zadania",
    "name": "JS Zadanie 15 — Rezerwacja usług fryzjerskich",
    "title": "JS Zadanie 15 — Rezerwacja usług fryzjerskich",
    "description": "Formularz rezerwacji zabiegu pielęgnacyjnego z dynamiczną informacją o terminie i cenie.",
    "technologies": [
      "HTML5",
      "CSS3",
      "JavaScript"
    ],
    "folder": "Cwiczenia_i_Zadania/JS_Zadania",
    "mainPdf": "js_-_zadania_egzaminacyjne.pdf",
    "mainHtml": "JS15+.html",
    "mainPhp": null,
    "mainSql": null,
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# JS Zadanie 15 — Rezerwacja usług fryzjerskich\n\nFormularz rezerwacji zabiegu pielęgnacyjnego z dynamiczną informacją o terminie i cenie.\n\nPlik źródłowy: `JS15+.html`",
    "pdfs": [
      "js_-_zadania_egzaminacyjne.pdf"
    ],
    "htmls": [
      "JS15+.html"
    ],
    "phps": [],
    "sqls": [],
    "zips": [
      "paczka_zadania.zip"
    ],
    "txts": [],
    "scripts": [
      "JS15+.html"
    ],
    "allFiles": [
      "JS15+.html",
      "js_-_zadania_egzaminacyjne.pdf"
    ],
    "fileContents": {
      "JS15+.html": "<!DOCTYPE html>\r\n<html lang=\"pl-PL\">\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<title>JS15</title>\r\n\t\r\n\t<script>\r\n\t\tfunction wykonaj()\r\n\t\t{\r\n\t\t\tvar imie = document.getElementById(\"imie\").value;\r\n\t\t\tvar nazwisko = document.getElementById(\"nazwisko\").value;\r\n\t\t\tvar usluga = document.getElementById(\"usluga\").value;\r\n\t\t\tvar regulamin = document.getElementById(\"regulamin\").checked;\r\n\t\t\t\r\n\t\t\tif(regulamin)\r\n\t\t\t{\r\n\t\t\t\tdocument.getElementById(\"wynik\").style.color = \"black\";\r\n\t\t\t\tdocument.getElementById(\"wynik\").innerHTML = \"<p>\"+imie.toUpperCase()+\" \"+nazwisko.toUpperCase()+\"<br>Treść Twojej sprawy: \"+usluga+\"<br>Na podany e-mail zostanie wysłana oferta.</p>\";\r\n\t\t\t}\r\n\t\t\telse \r\n\t\t\t{\r\n\t\t\t\tdocument.getElementById(\"wynik\").style.color = \"red\";\r\n\t\t\t\tdocument.getElementById(\"wynik\").innerHTML = \"<p>Musisz zapoznać się z regulaminem</p>\";\r\n\t\t\t}\r\n\t\t}\r\n\t</script>\r\n\t\r\n</head>\r\n<body>\r\n\t<h2>Kontakt</h2>\r\n\t\r\n\t<form>\r\n\t\t<table>\r\n\t\t\t<tr>\r\n\t\t\t\t<td>Imię:</td>\r\n\t\t\t\t<td><input type=\"text\" id=\"imie\"></td>\r\n\t\t\t</tr>\r\n\t\t\t\r\n\t\t\t<tr>\r\n\t\t\t\t<td>Nazwisko:</td>\r\n\t\t\t\t<td><input type=\"text\" id=\"nazwisko\"></td>\r\n\t\t\t</tr>\r\n\t\t\t\r\n\t\t\t<tr>\r\n\t\t\t\t<td>Usługa:</td>\r\n\t\t\t\t<td><textarea rows=\"4\" cols=\"35\" id=\"usluga\"></textarea></td>\r\n\t\t\t</tr>\r\n\t\t\t\r\n\t\t\t<tr>\r\n\t\t\t\t<td></td>\r\n\t\t\t\t<td><input type=\"checkbox\" id=\"regulamin\"> Zapoznałam/łem się z regulaminem</td>\r\n\t\t\t</tr>\r\n\t\t\t\r\n\t\t\t<tr>\r\n\t\t\t\t<td></td>\r\n\t\t\t\t<td><input type=\"reset\" value=\"Resetuj\"> <input type=\"button\" value=\"Prześlij\" onclick=\"wykonaj()\"></td>\r\n\t\t\t</tr>\r\n\t\t</table>\r\n\t</form>\r\n\t\r\n\t<div id=\"wynik\"></div>\r\n</body>\r\n</html>"
    }
  },
  {
    "id": "cw_js_JS16__html",
    "category": "Cwiczenia_i_Zadania",
    "name": "JS Zadanie 16 — Formularz kontaktowy i zgłoszeniowy",
    "title": "JS Zadanie 16 — Formularz kontaktowy i zgłoszeniowy",
    "description": "Formularz zgłoszeniowy z formatowaniem danych osobowych i potwierdzeniem wysłania w DOM.",
    "technologies": [
      "HTML5",
      "CSS3",
      "JavaScript"
    ],
    "folder": "Cwiczenia_i_Zadania/JS_Zadania",
    "mainPdf": "js_-_zadania_egzaminacyjne.pdf",
    "mainHtml": "JS16+.html",
    "mainPhp": null,
    "mainSql": null,
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# JS Zadanie 16 — Formularz kontaktowy i zgłoszeniowy\n\nFormularz zgłoszeniowy z formatowaniem danych osobowych i potwierdzeniem wysłania w DOM.\n\nPlik źródłowy: `JS16+.html`",
    "pdfs": [
      "js_-_zadania_egzaminacyjne.pdf"
    ],
    "htmls": [
      "JS16+.html"
    ],
    "phps": [],
    "sqls": [],
    "zips": [
      "paczka_zadania.zip"
    ],
    "txts": [],
    "scripts": [
      "JS16+.html"
    ],
    "allFiles": [
      "JS16+.html",
      "js_-_zadania_egzaminacyjne.pdf"
    ],
    "fileContents": {
      "JS16+.html": "<!DOCTYPE html>\r\n<html lang=\"pl-PL\">\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<title>JS16</title>\r\n\t\r\n\t<script>\r\n\t\tfunction wykonaj()\r\n\t\t{\r\n\t\t\tvar imie = document.getElementById(\"imie\").value;\r\n\t\t\tvar nazwisko = document.getElementById(\"nazwisko\").value;\r\n\t\t\tvar mail = document.getElementById(\"mail\").value;\r\n\t\t\tvar usluga = document.getElementById(\"usluga\").value;\r\n\t\t\tvar kopia = document.getElementById(\"kopia\").checked;\r\n\t\t\t\r\n\t\t\tif(kopia)\r\n\t\t\t{\r\n\t\t\t\tdocument.getElementById(\"wynik\").innerHTML = imie + \" \" + nazwisko+\"<br>\"+mail.toLowerCase()+\"<br>\"+\"Usługa: \"+usluga;\r\n\t\t\t}\r\n\t\t\telse document.getElementById(\"wynik\").innerHTML = \"\";\r\n\t\t}\r\n\t</script>\r\n\t\r\n</head>\r\n<body>\r\n\r\n\t<h3>Formularz kontaktowy</h3>\r\n\t\r\n\t<form>\r\n\t\t<table>\r\n\t\t\t<tr>\r\n\t\t\t\t<td>Imię:</td>\r\n\t\t\t\t<td><input type=\"text\" id=\"imie\"></td>\r\n\t\t\t</tr>\r\n\t\t\t\r\n\t\t\t<tr>\r\n\t\t\t\t<td>Nazwisko:</td>\r\n\t\t\t\t<td><input type=\"text\" id=\"nazwisko\"></td>\r\n\t\t\t</tr>\r\n\t\t\t\r\n\t\t\t<tr>\r\n\t\t\t\t<td>E-mail:</td>\r\n\t\t\t\t<td><input type=\"text\" id=\"mail\"></td>\r\n\t\t\t</tr>\r\n\t\t\t\r\n\t\t\t<tr>\r\n\t\t\t\t<td>Usługa:</td>\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<select id=\"usluga\">\r\n\t\t\t\t\t\t<option value=\"naprawa komputera\">naprawa komputera</option>\r\n\t\t\t\t\t\t<option value=\"odzyskiwanie danych\">odzyskiwanie danych</option>\r\n\t\t\t\t\t\t<option value=\"problemy z oprogramowaniem\">problemy z oprogramowaniem</option>\r\n\t\t\t\t\t\t<option value=\"konfiguracja sieci LAN\">konfiguracja sieci LAN</option>\r\n\t\t\t\t\t\t<option value=\"inne\">inne</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t\t\r\n\t\t\t<tr>\r\n\t\t\t\t<td></td>\r\n\t\t\t\t<td><input type=\"checkbox\" id=\"kopia\" checked>Wyślij kopię wiadomości</td>\r\n\t\t\t</tr>\r\n\t\t\t\r\n\t\t\t<tr>\r\n\t\t\t\t<td></td>\r\n\t\t\t\t<td><input type=\"reset\" id=\"reset\" value=\"Resetuj\" style=\"background-color: red\"> <input type=\"button\" id=\"przeslij\" value=\"Prześlij\" style=\"background-color: green\" onclick=\"wykonaj()\"></td>\r\n\t\t\t</tr>\r\n\t\t</table>\r\n\t</form>\r\n\t\r\n\t<p id=\"wynik\"></p>\r\n</body>\r\n</html>"
    }
  },
  {
    "id": "cw_js_JS2__html",
    "category": "Cwiczenia_i_Zadania",
    "name": "JS Zadanie 02 — Pole i obwód kwadratu",
    "title": "JS Zadanie 02 — Pole i obwód kwadratu",
    "description": "Skrypt obliczający pole powierzchni i obwód kwadratu na podstawie długości boku z walidacją liczb.",
    "technologies": [
      "HTML5",
      "CSS3",
      "JavaScript"
    ],
    "folder": "Cwiczenia_i_Zadania/JS_Zadania",
    "mainPdf": "js_-_zadania_egzaminacyjne.pdf",
    "mainHtml": "JS2+.html",
    "mainPhp": null,
    "mainSql": null,
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# JS Zadanie 02 — Pole i obwód kwadratu\n\nSkrypt obliczający pole powierzchni i obwód kwadratu na podstawie długości boku z walidacją liczb.\n\nPlik źródłowy: `JS2+.html`",
    "pdfs": [
      "js_-_zadania_egzaminacyjne.pdf"
    ],
    "htmls": [
      "JS2+.html"
    ],
    "phps": [],
    "sqls": [],
    "zips": [
      "paczka_zadania.zip"
    ],
    "txts": [],
    "scripts": [
      "JS2+.html"
    ],
    "allFiles": [
      "JS2+.html",
      "js_-_zadania_egzaminacyjne.pdf"
    ],
    "fileContents": {
      "JS2+.html": "<!DOCTYPE html>\r\n<html lang=\"pl-PL\">\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<title>JS2</title>\r\n\t\r\n\t<script>\r\n\t\tfunction pole()\r\n\t\t{\r\n\t\t\tvar bok = document.getElementById(\"bok\").value;\r\n\t\t\t\r\n\t\t\tif(bok == \"\" || bok!=parseFloat(bok)) document.getElementById(\"wynik\").innerHTML = \"<i>Należy wpisać wartość liczbową.</i>\";\r\n\t\t\telse\r\n\t\t\t{\r\n\t\t\t\tvar wynik = bok*bok;\r\n\t\t\t\tdocument.getElementById(\"wynik\").innerHTML = \"P = a<sup>2</sup> = \"+wynik;\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t\tfunction obwod()\r\n\t\t{\r\n\t\t\tvar bok = document.getElementById(\"bok\").value;\r\n\t\t\t\r\n\t\t\tif(bok == \"\" || bok!=parseFloat(bok)) document.getElementById(\"wynik\").innerHTML = \"<i>Należy wpisać wartość liczbową.</i>\";\r\n\t\t\telse\r\n\t\t\t{\r\n\t\t\t\tvar wynik = 4*bok;\r\n\t\t\t\tdocument.getElementById(\"wynik\").innerHTML = \"P = 4a = \"+wynik;\r\n\t\t\t}\r\n\t\t}\r\n\t</script>\r\n</head>\r\n<body>\r\n\t<h1>KWADRAT</h1>\r\n\t<form>\r\n\t\t<label><i>Podaj długość boku:</i> <input type=\"text\" id=\"bok\"></label> <br><br>\r\n\t\t<input type=\"button\" value=\"licz pole\" onclick=\"pole()\"> <input type=\"button\" value=\"licz obwód\" onclick=\"obwod()\">\r\n\t<form> <br><br>\r\n\t\r\n\t<div id=\"wynik\"></div>\r\n</body>\r\n</html>"
    }
  },
  {
    "id": "cw_js_JS3__html",
    "category": "Cwiczenia_i_Zadania",
    "name": "JS Zadanie 03 — Przelicznik Celsjusza na Kelwiny",
    "title": "JS Zadanie 03 — Przelicznik Celsjusza na Kelwiny",
    "description": "Aplikacja konwertująca temperaturę w stopniach Celsjusza na skalę bezwzględną Kelwina (T + 273.15).",
    "technologies": [
      "HTML5",
      "CSS3",
      "JavaScript"
    ],
    "folder": "Cwiczenia_i_Zadania/JS_Zadania",
    "mainPdf": "js_-_zadania_egzaminacyjne.pdf",
    "mainHtml": "JS3+.html",
    "mainPhp": null,
    "mainSql": null,
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# JS Zadanie 03 — Przelicznik Celsjusza na Kelwiny\n\nAplikacja konwertująca temperaturę w stopniach Celsjusza na skalę bezwzględną Kelwina (T + 273.15).\n\nPlik źródłowy: `JS3+.html`",
    "pdfs": [
      "js_-_zadania_egzaminacyjne.pdf"
    ],
    "htmls": [
      "JS3+.html"
    ],
    "phps": [],
    "sqls": [],
    "zips": [
      "paczka_zadania.zip"
    ],
    "txts": [],
    "scripts": [
      "JS3+.html"
    ],
    "allFiles": [
      "JS3+.html",
      "js_-_zadania_egzaminacyjne.pdf"
    ],
    "fileContents": {
      "JS3+.html": "<!DOCTYPE html>\r\n<html lang=\"pl-PL\">\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<title>JS3</title>\r\n\t\r\n\t<script>\r\n\t\tfunction kelwin()\r\n\t\t{\r\n\t\t\tvar temp = document.getElementById(\"temperatura\").value;\r\n\t\t\t\r\n\t\t\tif(temp != \"\" && temp==parseFloat(temp))\r\n\t\t\t{\r\n\t\t\t\tvar wynik = parseFloat(temp) + 273.15;\r\n\t\t\t\tdocument.getElementById(\"wynik\").innerHTML = wynik+\"K\";\r\n\t\t\t}\r\n\t\t\telse document.getElementById(\"wynik\").innerHTML = \"Błąd danych\";\r\n\t\t}\r\n\t\t\r\n\t\tfunction fahrenheit()\r\n\t\t{\r\n\t\t\tvar temp = document.getElementById(\"temperatura\").value;\r\n\t\t\t\r\n\t\t\tif(temp != \"\" && temp==parseFloat(temp))\r\n\t\t\t{\r\n\t\t\t\tvar wynik = (temp*1.8) + 32;\r\n\t\t\t\tdocument.getElementById(\"wynik\").innerHTML = wynik+\"F\";\r\n\t\t\t}\r\n\t\t\telse document.getElementById(\"wynik\").innerHTML = \"Błąd danych\";\r\n\t\t}\r\n\t</script>\r\n</head>\r\n<body>\r\n\t<h2>Zamiana jednostek temperatury</h2>\r\n\tTemperatura w °C <br><br>\r\n\t<form>\r\n\t\t<input type=\"text\" id=\"temperatura\"> <br><br>\r\n\t\tZamień na <br><br>\r\n\t\t<input type=\"button\" value=\"Kelwiny\" onclick=\"kelwin()\"> <input type=\"button\" value=\"Fahrenheity\" onclick=\"fahrenheit()\">\r\n\t</form> <br>\r\n\t<div id=\"wynik\"></div>\r\n</body>\r\n</html>"
    }
  },
  {
    "id": "cw_js_JS4_html",
    "category": "Cwiczenia_i_Zadania",
    "name": "JS Zadanie 04 — Walidator siły hasła",
    "title": "JS Zadanie 04 — Walidator siły hasła",
    "description": "Skrypt weryfikujący bezpieczeństwo hasła poprzez sprawdzanie występowania co najmniej jednej cyfry.",
    "technologies": [
      "HTML5",
      "CSS3",
      "JavaScript"
    ],
    "folder": "Cwiczenia_i_Zadania/JS_Zadania",
    "mainPdf": "js_-_zadania_egzaminacyjne.pdf",
    "mainHtml": "JS4.html",
    "mainPhp": null,
    "mainSql": null,
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# JS Zadanie 04 — Walidator siły hasła\n\nSkrypt weryfikujący bezpieczeństwo hasła poprzez sprawdzanie występowania co najmniej jednej cyfry.\n\nPlik źródłowy: `JS4.html`",
    "pdfs": [
      "js_-_zadania_egzaminacyjne.pdf"
    ],
    "htmls": [
      "JS4.html"
    ],
    "phps": [],
    "sqls": [],
    "zips": [
      "paczka_zadania.zip"
    ],
    "txts": [],
    "scripts": [
      "JS4.html"
    ],
    "allFiles": [
      "JS4.html",
      "js_-_zadania_egzaminacyjne.pdf"
    ],
    "fileContents": {
      "JS4.html": "<!DOCTYPE html>\r\n<html lang=\"pl-PL\">\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<title>JS4</title>\r\n\t\r\n\t<script>\r\n\t\tfunction sprawdz()\r\n\t\t{\r\n\t\t\tvar haslo = document.getElementById(\"haslo\").value;\r\n\t\t\t\r\n\t\t\tvar cyfra = false;\r\n\t\t\tfor(var i=0; i<haslo.length; i++)\r\n\t\t\t{\r\n\t\t\t\tif(haslo[i] == 0 || haslo[i] == 1 || haslo[i] == 2 || haslo[i] == 3 || haslo[i] == 4 || haslo[i] == 5 || haslo[i] == 6 || haslo[i] == 7 || haslo[i] == 8 || haslo[i] == 9) cyfra = true;\r\n\t\t\t}\r\n\t\t\t\r\n\t\t\tif(haslo == \"\") document.getElementById(\"wynik\").innerHTML = '<span style=\"color: red\">WPISZ HASŁO!</span>';\r\n\t\t\telse if(haslo.length > 3 && haslo.length <7 && cyfra==true) document.getElementById(\"wynik\").innerHTML = '<span style=\"color: blue\">ŚREDNIE</span>';\r\n\t\t\telse if(haslo.length > 6 && cyfra==true) document.getElementById(\"wynik\").innerHTML = '<span style=\"color: green\">DOBRE</span>';\r\n\t\t\telse document.getElementById(\"wynik\").innerHTML = '<span style=\"color: yellow\">SŁABE</span>';\r\n\t\t}\r\n\t</script>\r\n\t\r\n</head>\r\n<body>\r\n\t<form>\r\n\t\t<label>Twoje hasło: <input type=\"password\" id=\"haslo\"></label> <input type=\"button\" value=\"Sprawdź\" onclick=\"sprawdz()\">\r\n\t</form>\r\n\t\r\n\t<div id=\"wynik\"></div>\r\n</body>\r\n</html>"
    }
  },
  {
    "id": "cw_js_JS5__html",
    "category": "Cwiczenia_i_Zadania",
    "name": "JS Zadanie 05 — Powierzchnia pokoju i ścian",
    "title": "JS Zadanie 05 — Powierzchnia pokoju i ścian",
    "description": "Kalkulator metrażu podłogi oraz łącznej powierzchni ścian pomieszczenia o wysokości 2.7m.",
    "technologies": [
      "HTML5",
      "CSS3",
      "JavaScript"
    ],
    "folder": "Cwiczenia_i_Zadania/JS_Zadania",
    "mainPdf": "js_-_zadania_egzaminacyjne.pdf",
    "mainHtml": "JS5+.html",
    "mainPhp": null,
    "mainSql": null,
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# JS Zadanie 05 — Powierzchnia pokoju i ścian\n\nKalkulator metrażu podłogi oraz łącznej powierzchni ścian pomieszczenia o wysokości 2.7m.\n\nPlik źródłowy: `JS5+.html`",
    "pdfs": [
      "js_-_zadania_egzaminacyjne.pdf"
    ],
    "htmls": [
      "JS5+.html"
    ],
    "phps": [],
    "sqls": [],
    "zips": [
      "paczka_zadania.zip"
    ],
    "txts": [],
    "scripts": [
      "JS5+.html"
    ],
    "allFiles": [
      "JS5+.html",
      "js_-_zadania_egzaminacyjne.pdf"
    ],
    "fileContents": {
      "JS5+.html": "<!DOCTYPE html>\r\n<html lang=\"pl-PL\">\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<title>JS5</title>\r\n\t<script>\r\n\t\tfunction licz()\r\n\t\t{\r\n\t\t\tvar a = document.getElementById(\"a\").value;\r\n\t\t\tvar b = document.getElementById(\"b\").value;\r\n\t\t\t\r\n\t\t\tvar pow = (a*b)+(b*2.7*2)+(a*2.7*2);\r\n\t\t\t\r\n\t\t\tdocument.getElementById(\"wynik\").innerHTML = \"<p>Powierzchnia całkowita ścian: \"+pow+\"</p>\";\r\n\t\t\t\r\n\t\t\tvar cena = pow*8;\r\n\t\t\t\r\n\t\t\tdocument.getElementById(\"wynik2\").innerHTML = \"Koszt malowania: \"+cena+\" zł\";\r\n\t\t\t\r\n\t\t}\r\n\t</script>\r\n</head>\r\n<body>\r\n\t<h1>Malowanie pokoju: 8 zł za m<sup>2</sup></h1>\r\n\tWymiary pokoju w metrach: <input type=\"text\" id=\"a\"> <input type=\"number\" id=\"b\"> <br><br>\r\n\t<input type=\"button\" value=\"OBLICZ KOSZT\" onclick=\"licz()\">\r\n\t<div id=\"wynik\"></div>\r\n\t<div id=\"wynik2\"></div>\r\n</body>\r\n</html>"
    }
  },
  {
    "id": "cw_js_JS6__html",
    "category": "Cwiczenia_i_Zadania",
    "name": "JS Zadanie 06 — Koszt malowania powierzchni",
    "title": "JS Zadanie 06 — Koszt malowania powierzchni",
    "description": "Wycena malowania w zależności od wybranego wariantu (standard 70 zł/m² lub premium 80 zł/m²).",
    "technologies": [
      "HTML5",
      "CSS3",
      "JavaScript"
    ],
    "folder": "Cwiczenia_i_Zadania/JS_Zadania",
    "mainPdf": "js_-_zadania_egzaminacyjne.pdf",
    "mainHtml": "JS6+.html",
    "mainPhp": null,
    "mainSql": null,
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# JS Zadanie 06 — Koszt malowania powierzchni\n\nWycena malowania w zależności od wybranego wariantu (standard 70 zł/m² lub premium 80 zł/m²).\n\nPlik źródłowy: `JS6+.html`",
    "pdfs": [
      "js_-_zadania_egzaminacyjne.pdf"
    ],
    "htmls": [
      "JS6+.html"
    ],
    "phps": [],
    "sqls": [],
    "zips": [
      "paczka_zadania.zip"
    ],
    "txts": [],
    "scripts": [
      "JS6+.html"
    ],
    "allFiles": [
      "JS6+.html",
      "js_-_zadania_egzaminacyjne.pdf"
    ],
    "fileContents": {
      "JS6+.html": "<!DOCTYPE html>\r\n<html lang=\"pl-PL\">\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<title>JS6</title>\r\n\t\r\n\t<script>\r\n\t\tfunction licz()\r\n\t\t{\r\n\t\t\tvar pow = document.getElementById(\"pow\").value;\r\n\t\t\t\r\n\t\t\tif(document.getElementById(\"r1\").checked)\r\n\t\t\t{\r\n\t\t\t\tvar wynik = pow * 70;\r\n\t\t\t\tdocument.getElementById(\"wynik\").innerHTML = \"Koszt kafelkowania: \"+wynik +\" zł\";\r\n\t\t\t}\r\n\t\t\telse\r\n\t\t\t{\r\n\t\t\t\tvar wynik = pow * 80;\r\n\t\t\t\tdocument.getElementById(\"wynik\").innerHTML = \"Koszt kafelkowania: \"+wynik +\" zł\";\r\n\t\t\t}\r\n\t\t}\r\n\t</script>\r\n\t\r\n</head>\r\n<body>\r\n\t<h1>Kafelkowanie łazienki</h1>\r\n\t<form>\r\n\t\t<label>Powierzchnia w m<sup>2</sup>: <input type=\"number\" id=\"pow\"></label> <br><br>\r\n\t\t<input type=\"radio\" id=\"r1\" name=\"plytki\"> Płytki 20 x 20 cm <br>\r\n\t\t<input type=\"radio\" id=\"r2\" name=\"plytki\"> Płytki 25 x 12 cm <br><br>\r\n\t\t<input type=\"button\" value=\"PRZELICZ\" onclick=\"licz()\"> <br><br>\r\n\t\t<div id=\"wynik\"></div>\r\n\t</form>\r\n</body>\r\n</html>"
    }
  },
  {
    "id": "cw_js_JS7__html",
    "category": "Cwiczenia_i_Zadania",
    "name": "JS Zadanie 07 — Koszt remontu i kafelkowania",
    "title": "JS Zadanie 07 — Koszt remontu i kafelkowania",
    "description": "Obliczanie całkowitego kosztu remontu mieszkania z uwzględnieniem liczby pokoi i opcji kafelkowania.",
    "technologies": [
      "HTML5",
      "CSS3",
      "JavaScript"
    ],
    "folder": "Cwiczenia_i_Zadania/JS_Zadania",
    "mainPdf": "js_-_zadania_egzaminacyjne.pdf",
    "mainHtml": "JS7+.html",
    "mainPhp": null,
    "mainSql": null,
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# JS Zadanie 07 — Koszt remontu i kafelkowania\n\nObliczanie całkowitego kosztu remontu mieszkania z uwzględnieniem liczby pokoi i opcji kafelkowania.\n\nPlik źródłowy: `JS7+.html`",
    "pdfs": [
      "js_-_zadania_egzaminacyjne.pdf"
    ],
    "htmls": [
      "JS7+.html"
    ],
    "phps": [],
    "sqls": [],
    "zips": [
      "paczka_zadania.zip"
    ],
    "txts": [],
    "scripts": [
      "JS7+.html"
    ],
    "allFiles": [
      "JS7+.html",
      "js_-_zadania_egzaminacyjne.pdf"
    ],
    "fileContents": {
      "JS7+.html": "<!DOCTYPE html>\r\n<html lang=\"pl-PL\">\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<title>JS7</title>\r\n\t\r\n\t<script>\r\n\t\tfunction licz()\r\n\t\t{\r\n\t\t\tvar metraz = document.getElementById(\"metraz\").value;\r\n\t\t\tvar pokoje = document.getElementById(\"pokoje\").value;\r\n\t\t\t\r\n\t\t\tif(document.getElementById(\"kafelki\").checked)\r\n\t\t\t{\r\n\t\t\t\tvar metraz2 = metraz * 4000;\r\n\t\t\t\tvar pokoje2 = pokoje * 1000;\r\n\t\t\t\t\r\n\t\t\t\tvar wynik = metraz2 + pokoje2 + 2000;\r\n\t\t\t\t\r\n\t\t\t\tdocument.getElementById(\"wynik\").innerHTML = \"Koszt mieszkania: \"+wynik+\" zł\";\r\n\t\t\t}\r\n\t\t\telse \r\n\t\t\t{\r\n\t\t\t\tvar metraz2 = metraz * 4000;\r\n\t\t\t\tvar pokoje2 = pokoje * 1000;\r\n\t\t\t\t\r\n\t\t\t\tvar wynik = metraz2 + pokoje2;\r\n\t\t\t\t\r\n\t\t\t\tdocument.getElementById(\"wynik\").innerHTML = \"Koszt mieszkania: \"+wynik+\" zł\";\r\n\t\t\t}\r\n\t\t}\r\n\t</script>\r\n\t\r\n</head>\r\n<body>\r\n\t<h1>KALKULATOR CENY MIESZKANIA</h1>\r\n\t\r\n\tPodaj metraż mieszkania w m<sup>2</sup>: <br>\r\n\t<input type=\"number\" id=\"metraz\"> <br><br>\r\n\t\r\n\tLiczba pokoi z zamontowanym okablowaniem sieciowym: <br>\r\n\t<input type=\"number\" id=\"pokoje\"> <br><br>\r\n\t\r\n\t<input type=\"checkbox\" id=\"kafelki\"> Kafelki w łazience? <br><br>\r\n\t\r\n\t<input type=\"button\" value=\"OBLICZ\" onclick=\"licz()\">\r\n\t\r\n\t<div id=\"wynik\"></div>\r\n</body>\r\n</html>"
    }
  },
  {
    "id": "cw_js_JS8__html",
    "category": "Cwiczenia_i_Zadania",
    "name": "JS Zadanie 08 — Naliczanie rabatów i upustów",
    "title": "JS Zadanie 08 — Naliczanie rabatów i upustów",
    "description": "Skrypt wyliczający rabat handlowy na podstawie zamawianego wolumenu towaru i opcji stałego klienta.",
    "technologies": [
      "HTML5",
      "CSS3",
      "JavaScript"
    ],
    "folder": "Cwiczenia_i_Zadania/JS_Zadania",
    "mainPdf": "js_-_zadania_egzaminacyjne.pdf",
    "mainHtml": "JS8+.html",
    "mainPhp": null,
    "mainSql": null,
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# JS Zadanie 08 — Naliczanie rabatów i upustów\n\nSkrypt wyliczający rabat handlowy na podstawie zamawianego wolumenu towaru i opcji stałego klienta.\n\nPlik źródłowy: `JS8+.html`",
    "pdfs": [
      "js_-_zadania_egzaminacyjne.pdf"
    ],
    "htmls": [
      "JS8+.html"
    ],
    "phps": [],
    "sqls": [],
    "zips": [
      "paczka_zadania.zip"
    ],
    "txts": [],
    "scripts": [
      "JS8+.html"
    ],
    "allFiles": [
      "JS8+.html",
      "js_-_zadania_egzaminacyjne.pdf"
    ],
    "fileContents": {
      "JS8+.html": "<!DOCTYPE html>\r\n<html lang=\"pl-PL\">\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<title>JS8</title>\r\n\t\r\n\t<script>\r\n\t\tfunction licz()\r\n\t\t{\r\n\t\t\tvar ilosc = document.getElementById(\"ilosc\").value;\r\n\t\t\tvar upust = document.getElementById(\"upust\").checked;\r\n\t\t\t\r\n\t\t\tif(ilosc>0 && ilosc<51 && upust==false)\r\n\t\t\t{\r\n\t\t\t\tvar suma = ilosc*2;\r\n\t\t\t\tdocument.getElementById(\"wynik\").innerHTML = \"Koszt ogłoszeń: \"+suma+\" PLN\";\r\n\t\t\t}\r\n\t\t\telse if(ilosc>50 && upust==false)\r\n\t\t\t{\r\n\t\t\t\tvar suma = ilosc;\r\n\t\t\t\tdocument.getElementById(\"wynik\").innerHTML = \"Koszt ogłoszeń: \"+suma+\" PLN\";\r\n\t\t\t}\r\n\t\t\telse if(ilosc>0 && ilosc<51 && upust)\r\n\t\t\t{\r\n\t\t\t\tvar suma = ilosc*1.8;\r\n\t\t\t\tdocument.getElementById(\"wynik\").innerHTML = \"Koszt ogłoszeń: \"+suma+\" PLN\";\r\n\t\t\t}\r\n\t\t\telse if(ilosc>50 && upust)\r\n\t\t\t{\r\n\t\t\t\tvar suma = ilosc*0.8;\r\n\t\t\t\tdocument.getElementById(\"wynik\").innerHTML = \"Koszt ogłoszeń: \"+suma+\" PLN\";\r\n\t\t\t}\r\n\t\t}\r\n\t</script>\r\n\t\r\n</head>\r\n<body>\r\n\t<h2>Ile kosztuje ogłoszenie?</h2>\r\n\t\r\n\t<form>\r\n\t\t<label>Podaj liczbę ogłoszeń: <br>\r\n\t\t<input type=\"number\" id=\"ilosc\"></label> <br><br>\r\n\t\t\r\n\t\t<label><input type=\"checkbox\" id=\"upust\"> Policz upust na newsletter</label> <br><br>\r\n\t\t\r\n\t\t<input type=\"button\" value=\"Oblicz\" onclick=\"licz()\">\r\n\t</form>\r\n\t\r\n\t<div id=\"wynik\"></div>\r\n</body>\r\n</html>"
    }
  },
  {
    "id": "cw_js_js9_idk_html",
    "category": "Cwiczenia_i_Zadania",
    "name": "JS Zadanie 09 — Zliczanie głosów kandydatów",
    "title": "JS Zadanie 09 — Zliczanie głosów kandydatów",
    "description": "Aplikacja podliczająca głosy oddane na trzech kandydatów z automatyczną sumą i walidacją pól.",
    "technologies": [
      "HTML5",
      "CSS3",
      "JavaScript"
    ],
    "folder": "Cwiczenia_i_Zadania/JS_Zadania",
    "mainPdf": "js_-_zadania_egzaminacyjne.pdf",
    "mainHtml": "js9_idk.html",
    "mainPhp": null,
    "mainSql": null,
    "mainZip": "paczka_zadania.zip",
    "hasReadme": true,
    "readmeContent": "# JS Zadanie 09 — Zliczanie głosów kandydatów\n\nAplikacja podliczająca głosy oddane na trzech kandydatów z automatyczną sumą i walidacją pól.\n\nPlik źródłowy: `js9_idk.html`",
    "pdfs": [
      "js_-_zadania_egzaminacyjne.pdf"
    ],
    "htmls": [
      "js9_idk.html"
    ],
    "phps": [],
    "sqls": [],
    "zips": [
      "paczka_zadania.zip"
    ],
    "txts": [],
    "scripts": [
      "js9_idk.html"
    ],
    "allFiles": [
      "js9_idk.html",
      "js_-_zadania_egzaminacyjne.pdf"
    ],
    "fileContents": {
      "js9_idk.html": "<!DOCTYPE html>\r\n<html lang=\"pl-PL\">\r\n<head>\r\n\t<meta charset=\"utf-8\">\r\n\t<title>JS9</title>\r\n\t\r\n\t<script>\r\n\t\tfunction oblicz()\r\n\t\t{\r\n\t\t\tvar polak = document.getElementById(\"polak\").value;\r\n\t\t\tvar nowak = document.getElementById(\"nowak\").value;\r\n\t\t\tvar rysik = document.getElementById(\"rysik\").value;\r\n\t\t\t\r\n\t\t\tif(polak == \"\" || polak != parseFloat(polak) || nowak == \"\" || nowak != parseFloat(nowak) || rysik == \"\" || rysik != parseFloat(rysik)) alert(\"wpisz poprawne dane\");\r\n\t\t\telse\r\n\t\t\t{\r\n\t\t\t\tvar polak = parseFloat(polak);\r\n\t\t\t\tvar nowak = parseFloat(nowak);\r\n\t\t\t\tvar rysik = parseFloat(rysik);\r\n\t\t\t\t\r\n\t\t\t\tvar srednia = (polak + nowak + rysik)/3;\r\n\t\t\t\tdocument.getElementById(\"wynik\").innerHTML = srednia;\r\n\t\t\t}\r\n\t\t}\r\n\t</script>\r\n\t\r\n</head>\r\n<body>\r\n\t<h4>Obliczanie średniej ocen:</h4>\r\n\t\r\n\t<form>\r\n\t\t<ul>\r\n\t\t\t<li>Polak <input type=\"text\" id=\"polak\"></li> <br>\r\n\t\t\t<li>Nowak <input type=\"text\" id=\"nowak\"></li> <br>\r\n\t\t\t<li>Rysik <input type=\"text\" id=\"rysik\"></li> <br>\r\n\t\t</ul>\r\n\t\t\r\n\t\t<input type=\"button\" value=\"oblicz\" onclick=\"oblicz()\">\r\n\t</form>\r\n\t\r\n\t<h4>Średnia ocen:</h4>\r\n\t\r\n\t<div id=\"wynik\"></div>\r\n</body>\r\n</html>"
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = EXAM_DATA;
}
