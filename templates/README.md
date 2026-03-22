# Scaffolding Templates

This directory will contain scaffolding templates for your project after running `/setup-project`.

Templates are created based on your chosen stack and project type:

- `feature/` — vertical slice feature module template
- `api-endpoint/` — API endpoint template (if API project)
- `component/` — UI component template (if frontend project)

## How Templates Work

When you ask Claude to add a new feature, it will:
1. Check this directory for applicable templates
2. Use the template as a starting skeleton
3. Fill in with your specific requirements
4. Ensure consistency with existing code patterns

Templates are more reliable than text instructions for maintaining consistency.
