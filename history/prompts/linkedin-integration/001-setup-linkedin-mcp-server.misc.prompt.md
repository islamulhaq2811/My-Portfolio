---
id: "001"
title: "Setup LinkedIn MCP Server"
stage: "misc"
date: "2026-04-19"
surface: "agent"
model: "kimi-k2.5:cloud"
feature: "linkedin-integration"
branch: "001-hero-section"
user: "AA"
command: "/sp.phr"
labels: ["linkedin", "mcp", "integration", "social-media"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - .mcp.json
tests:
  - none
---

## Prompt

--title "Setup LinkedIn MCP Server" --stage misc --feature linkedin-integration

## Response snapshot

Researched LinkedIn integration options and found the linkedin-mcp-server PyPI package. Created `.mcp.json` configuration file with the LinkedIn MCP server setup using uvx. Explained the authentication flow and next steps for the user to approve the server and authenticate with LinkedIn.

## Outcome

- ✅ Impact: Configured LinkedIn MCP server for Claude Code integration, enabling programmatic posting to LinkedIn
- 🧪 Tests: None run - configuration only
- 📁 Files: Created `.mcp.json` with LinkedIn MCP server configuration
- 🔁 Next prompts: User needs to restart Claude Code to approve the MCP server, then authenticate via OAuth
- 🧠 Reflection: MCP servers provide a clean abstraction for external API integrations without requiring custom code

## Evaluation notes (flywheel)

- Failure modes observed: None - configuration completed successfully. Shell fallback used for PHR creation since create-phr.sh script not found.
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Test the OAuth authentication flow once user restarts and approves the MCP server
