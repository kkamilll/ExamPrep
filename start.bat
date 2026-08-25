@echo off
title Exam Prep Dashboard
cd /d "%~dp0"
echo ======================================================
echo   Exam Prep (INF.03 / E.14 / EE.09) - Uruchamianie...
echo ======================================================
where node >nul 2>nul
if %errorlevel% equ 0 (
    echo Uruchamianie serwera za pomoca Node.js...
    node server.js
) else (
    echo Node.js nie zostal wykryty w zmiennej PATH.
    echo Otwieram index.html bezposrednio w przegladarce...
    start "" "index.html"
)
pause
