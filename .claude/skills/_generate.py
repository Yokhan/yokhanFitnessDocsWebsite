import base64, os, subprocess, sys

WRITER = "C:/Users/iohan/Documents/ClaudeObsidian/agent-project-template/.claude/skills/_b64writer.py"
BASE = "C:/Users/iohan/Documents/ClaudeObsidian/agent-project-template/.claude/skills"

def write_skill(subdir, content):
    path = os.path.join(BASE, subdir, "SKILL.md")
    with open(path, "w", encoding="utf-8", newline="") as f:
        f.write(content)
    with open(path, "r", encoding="utf-8") as f:
        n = len(f.readlines())
    print(f"{subdir}/SKILL.md: {n} lines")

# Content will be added below
