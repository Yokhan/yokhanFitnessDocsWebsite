@echo off
chcp 65001 >nul 2>&1
setlocal enabledelayedexpansion

echo.
echo  ========================================================
echo    Agent Project Template v2 - Setup
echo    Autonomous AI agents + persistent memory + self-improvement
echo    8 hooks, 7 agents, 10 skills, 8 commands
echo  ========================================================
echo.

:: Ask for project name
set /p "PROJECT_NAME=Enter project name: "
if "%PROJECT_NAME%"=="" (
    echo ERROR: Project name cannot be empty.
    pause
    exit /b 1
)

:: Check if directory already exists
if exist "%PROJECT_NAME%" (
    echo ERROR: Directory "%PROJECT_NAME%" already exists.
    pause
    exit /b 1
)

echo.
echo Creating project: %PROJECT_NAME%
echo.

:: Get the directory where this bat file lives (the template)
set "TEMPLATE_DIR=%~dp0"

:: Create project directory
mkdir "%PROJECT_NAME%"

:: Copy entire template structure
echo [1/5] Copying template files...
xcopy "%TEMPLATE_DIR%CLAUDE.md" "%PROJECT_NAME%\" /Y /Q >nul 2>&1
xcopy "%TEMPLATE_DIR%README.md" "%PROJECT_NAME%\" /Y /Q >nul 2>&1
xcopy "%TEMPLATE_DIR%.env.example" "%PROJECT_NAME%\" /Y /Q >nul 2>&1
xcopy "%TEMPLATE_DIR%.claude" "%PROJECT_NAME%\.claude\" /E /Y /Q >nul 2>&1
xcopy "%TEMPLATE_DIR%docs" "%PROJECT_NAME%\docs\" /E /Y /Q >nul 2>&1
xcopy "%TEMPLATE_DIR%templates" "%PROJECT_NAME%\templates\" /E /Y /Q >nul 2>&1
xcopy "%TEMPLATE_DIR%_reference" "%PROJECT_NAME%\_reference\" /E /Y /Q >nul 2>&1
xcopy "%TEMPLATE_DIR%brain" "%PROJECT_NAME%\brain\" /E /Y /Q >nul 2>&1
xcopy "%TEMPLATE_DIR%integrations" "%PROJECT_NAME%\integrations\" /E /Y /Q >nul 2>&1
xcopy "%TEMPLATE_DIR%scripts" "%PROJECT_NAME%\scripts\" /E /Y /Q >nul 2>&1
xcopy "%TEMPLATE_DIR%tasks" "%PROJECT_NAME%\tasks\" /E /Y /Q >nul 2>&1
xcopy "%TEMPLATE_DIR%.github" "%PROJECT_NAME%\.github\" /E /Y /Q >nul 2>&1

:: Don't copy setup.bat itself into the new project
if exist "%PROJECT_NAME%\setup.bat" del "%PROJECT_NAME%\setup.bat" >nul 2>&1

:: Create .gitignore
echo [2/5] Creating .gitignore...
(
echo # Dependencies
echo node_modules/
echo .venv/
echo venv/
echo __pycache__/
echo target/
echo.
echo # IDE
echo .vscode/
echo .idea/
echo *.swp
echo *.swo
echo.
echo # OS
echo .DS_Store
echo Thumbs.db
echo.
echo # Environment - NEVER commit these
echo .env
echo .env.local
echo .env.*.local
echo.
echo # Build
echo dist/
echo build/
echo *.egg-info/
echo.
echo # Claude Code local settings
echo .claude/settings.local.json
echo.
echo # Memory MCP local state
echo .memory/
echo .engram/
echo .memcp/
echo .anima/
echo.
echo # Beads local DB
echo .beads/beads.db
echo.
echo # Logs
echo *.log
echo npm-debug.log*
) > "%PROJECT_NAME%\.gitignore"

:: Create empty directories that git needs
echo [3/5] Creating directory structure...
mkdir "%PROJECT_NAME%\src" >nul 2>&1

:: Initialize git
echo [4/5] Initializing git repository...
cd "%PROJECT_NAME%"
git init >nul 2>&1
if errorlevel 1 (
    echo WARNING: git not found. Skipping git init.
) else (
    git add -A >nul 2>&1
    git commit -m "feat: initialize agent-ready project from template v2" >nul 2>&1
    echo Git repository initialized with initial commit.
)
cd ..

echo [5/5] Done!
echo.
echo  ========================================================
echo    Project "%PROJECT_NAME%" created successfully!
echo.
echo    Next steps:
echo    1. Open "%PROJECT_NAME%" in Claude Code or Zed
echo    2. Tell Claude: "Set up my project" or /setup-project
echo    3. Claude asks about your stack and configures everything
echo.
echo    What's ready:
echo    - 8 production hooks (format, protect main, secrets, etc.)
echo    - 7 agents (reviewer, implementer, security, etc.)
echo    - 10 skills (sprint, add-feature, security-audit, etc.)
echo    - 8 commands (/implement, /sprint, /review, etc.)
echo    - Obsidian brain vault (open brain/ in Obsidian)
echo    - Self-improvement loop (tasks/lessons.md)
echo.
echo    Optional integrations:
echo    - Memory MCP: see integrations/memory-mcp/README.md
echo    - Telegram: see integrations/telegram/README.md
echo    - Beads: see integrations/beads/README.md
echo  ========================================================
echo.
pause
