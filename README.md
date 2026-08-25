# 🎓 Exam Prep — Vocational Exam Hub (INF.03 / E.14 / EE.09)

A modern, fast, and structured web hub for browsing Polish CKE vocational exams, viewing solution source code (PHP, HTML, CSS, JavaScript, SQL), copying queries, reading step-by-step instructions, and downloading clean exam packages.

---

## ⚡ Quick Start

You can launch the dashboard using any of the following methods:

### Option 1 (Recommended — with Built-in Server & Instant Code Viewer)
Run the following command in your terminal:
```bash
npm start
```
*(or `npm run dev`)* — this starts the zero-dependency Node.js server and automatically opens `http://localhost:3000` in your default browser.

### Option 2 (One-Click Launch on Windows)
Double-click the **`start.bat`** file in the root directory.

### Option 3 (Direct Static Browser Mode)
Simply open the **`index.html`** file in any modern web browser.

---

## 🔍 Features

- 📄 **Official PDF Exam Sheets** — Open original CKE exam papers directly in a new tab.
- 🚀 **Direct Launch** — Run HTML pages instantly or receive guided steps for PHP/MySQL setups.
- 👁️ **Embedded Code & Solution Viewer** — Inspect and copy PHP, SQL, HTML, CSS, and JS code directly in the browser with syntax highlighting.
- 📖 **Task Summaries & Walkthroughs** — Clean explanation for every exam task detailing implemented requirements, file manifest, and setup instructions.
- 📥 **Clean ZIP Packages** — Download clean `.zip` archives containing the complete source code, database dumps, and instructions.
- ⚡ **Instant Search & Filtering** — Filter by qualification (`E.14`, `EE.09`, `Exercises`), exam session, topic keywords, and available tech assets.
- 🌙 **Sleek Dark Mode Theme** — Clean modern UI designed for readability and quick access.

---

## 🐘 Running Dynamic PHP & MySQL Projects (via XAMPP)

Source code and SQL queries can be viewed directly within the web app. If you wish to execute the backend PHP scripts dynamically with a live MySQL database:

1. Download and install [XAMPP](https://www.apachefriends.org/), then start both **Apache** and **MySQL** modules.
2. Place this repository in `C:\xampp\htdocs\exam_prep\`.
3. Open `http://localhost/phpmyadmin` in your browser and import the relevant `.sql` database file.
4. Access the project at `http://localhost/exam_prep/index.html`.

---

## 📁 Repository Structure

```text
exam_prep/
├── 📄 index.html           # Web application dashboard
├── 📄 styles.css           # UI styling and dark theme
├── 📄 app.js               # Client-side filtering, search, and modal viewer logic
├── 📄 server.js            # Zero-dependency local HTTP server
├── 📄 start.bat            # Windows quick-launcher script
├── 📄 data.js              # Indexed dataset of exams and code files
├── 📄 build-data.js        # Dataset builder script
├── 📂 Kwalifikacja_E14/    # E.14 qualification exam sheets and solutions
├── 📂 Kwalifikacja_EE09/   # EE.09 qualification exam sheets and solutions
└── 📂 Cwiczenia_i_Zadania/ # Practice exercises, trial exams, and JS challenges
```

---

## 🛠️ Tech Stack

- **Frontend:** Vanilla HTML5, Modern CSS3 (custom properties, responsive grid/flexbox), Vanilla JavaScript (ES6+).
- **Backend (Server):** Node.js native `http` & `fs` modules (no external npm dependencies required).
- **Exam Technologies:** PHP (mysqli), MySQL / MariaDB, HTML5, CSS3, JavaScript.

---

## 📄 License

Educational resource repository designed for vocational exam preparation.
