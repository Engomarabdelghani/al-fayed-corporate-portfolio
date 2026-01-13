# Git Commit Strategy & History

## Professional Commit Messages

Use the following commits when initializing the repository:

```bash
# Initial project setup
git add .
git commit -m "feat: initial project setup with React + Vite + Tailwind CSS"

# Documentation
git commit -m "docs: add professional README with full documentation"
git commit -m "docs: add MIT LICENSE"
git commit -m "docs: add CONTRIBUTING guidelines"
git commit -m "docs: add environment configuration example"

# Configuration
git commit -m "config: update .gitignore for React/Vite project"
git commit -m "config: setup GitHub PR template"
```

## Commit Message Format

All commits should follow this format:

```
<type>: <subject>

<body (optional)>

<footer (optional)>
```

### Commit Types

- **feat:** A new feature
- **fix:** A bug fix
- **docs:** Changes to documentation
- **style:** Changes that do not affect code meaning (formatting, spacing)
- **refactor:** Code change that neither fixes a bug nor adds a feature
- **perf:** Code change that improves performance
- **test:** Adding missing tests or correcting existing tests
- **chore:** Changes to build process, dependencies, or other build-related
- **config:** Configuration file changes
- **ci:** CI/CD configuration changes

### Examples

```bash
# Feature commit with detailed body
git commit -m "feat: add multi-language support

- Implement i18n integration
- Add Arabic and English translations
- Create language switcher component

Closes #123"

# Fix with details
git commit -m "fix: responsive issues on mobile devices

- Fix navbar hamburger menu alignment
- Correct card grid layout on small screens
- Improve touch interactions

Fixes #456"

# Documentation update
git commit -m "docs: update installation instructions"

# Style improvement
git commit -m "style: improve button hover effects and transitions"

# Performance optimization
git commit -m "perf: optimize image loading with lazy loading"
```

## Git Workflow

1. **Create feature branch:** `git checkout -b feature/feature-name`
2. **Make changes:** Implement your feature/fix
3. **Commit with message:** `git commit -m "type: description"`
4. **Push branch:** `git push origin feature/feature-name`
5. **Create PR:** Submit pull request with detailed description
6. **Code review:** Address feedback and make changes
7. **Merge:** Once approved, merge to main branch

## Best Practices

✅ Write clear, concise commit messages  
✅ Commit frequently with logical groupings  
✅ Use imperative mood ("add feature" not "added feature")  
✅ Limit subject line to 50 characters  
✅ Reference issues when applicable (#123)  
✅ Keep commits focused on single changes  
✅ Review your own code before committing  

---

For more details, see [CONTRIBUTING.md](.github/CONTRIBUTING.md)
