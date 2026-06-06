@echo off
cd /d "%~dp0"
chcp 65001 > nul

start "hackSNS Terminal" powershell.exe -NoProfile -NoExit -Command "docker compose exec frontend sh"
start http://localhost:3000
