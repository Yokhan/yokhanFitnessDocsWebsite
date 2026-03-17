# Telegram Integration

Remote control Claude Code from your phone via Telegram.

## Options

### CCGram (Recommended)
**Repo:** https://github.com/jsayubi/ccgram
**Best for:** Inline approve/deny buttons, multi-session management

Install:
```bash
npx @jsayubi/ccgram init
```

Features:
- Permission approvals via inline Telegram buttons
- Smart notification suppression (silent if you're at terminal)
- Session management: list, switch, interrupt, resume
- Fallback to headless PTY when tmux unavailable

### Claude-Code-Remote
**Repo:** https://github.com/JessyTsui/Claude-Code-Remote
**Best for:** Hook-based notifications, multi-platform (Telegram + Email + LINE)

Install:
```bash
git clone https://github.com/JessyTsui/Claude-Code-Remote.git
cd Claude-Code-Remote
npm install
npm run setup
```

Features:
- Works through Claude Code hooks
- Start task locally → walk away → get notified → reply from phone
- Multi-platform support

### claude-code-telegram
**Repo:** https://github.com/RichardAtCT/claude-code-telegram
**Best for:** Full SDK mode, spending caps, job scheduler

Install:
```bash
uv tool install git+https://github.com/RichardAtCT/claude-code-telegram@v1.3.0
```

Features:
- SDK mode (Anthropic API) + CLI mode fallback
- Per-user spending caps
- Job scheduler with cron
- File upload with archive extraction

## Prerequisites
1. Create a Telegram bot via @BotFather → get bot token
2. Get your Telegram user ID via @userinfobot
3. Choose one of the options above

## Security
- All messages pass through Telegram servers — NEVER share passwords/API keys
- Always configure ALLOWED_USERS whitelist
- Use spending caps when available
