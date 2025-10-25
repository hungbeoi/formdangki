@echo off
title 1616 Numerology Auto Launcher
color 0A

echo ===============================
echo 🚀 Dang khoi dong 1616 Numerology ...
echo ===============================

:: Mo cua so Proxy rieng
start cmd /k "cd /d %~dp0 && node proxy.js"

:: Doi 3 giay de proxy khoi dong truoc
timeout /t 3 >nul

:: Mo Live Server (neu co VS Code) hoac trinh duyet
echo Mo trang web tren trinh duyet...
start "" "http://127.0.0.1:5500/1616-numerology-master/index.html"

echo -------------------------------
echo ✅ He thong da san sang su dung!
echo -------------------------------
pause
start Code .
