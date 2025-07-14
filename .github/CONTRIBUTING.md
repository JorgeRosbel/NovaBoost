# Contributing to NovaBlog

Thanks for taking the time to contribute! We welcome contributions of all kinds, including bug reports, feature requests, and pull requests.

## 📋 Before You Start

* Check open issues before creating a new one — your idea may already be discussed.
* Make sure you're using the latest version of the project.
* Read our [Code of Conduct](./CODE_OF_CONDUCT.md).

## 🐛 Reporting Bugs

Please include the following when submitting a bug report:

* A clear and descriptive title
* Steps to reproduce the issue
* Expected vs. actual behavior
* Screenshots or logs (if applicable)
* Environment info (OS, browser, Astro version, etc.)

## 🌟 Suggesting Enhancements

Feel free to suggest features or improvements! Include:

* A clear explanation of the feature
* Why it would be useful
* Any possible implementation ideas

## 🔧 Development Setup

### 📥 1. Contributing to This Project

If you'd like to contribute to NovaBoost (e.g. open pull requests), please fork the repository first. Then clone your forked version:

```bash
git fork https://github.com/JorgeRosbel/NovaBoost.git  # via GitHub UI
git clone https://github.com/YOUR_USERNAME/NovaBoost.git
cd NovaBoost
npm install
npm run husky:install
npm run dev
```
---

> Replace `npm` with your package manager if different.

### 🧪 2. Using NovaBoost as a Starter Project

If you're building your **own project** using NovaBoost as a template, simply clone the repo directly:

```bash
git clone https://github.com/JorgeRosbel/NovaBoost.git
cd NovaBoost
npm install
npm run husky:install
npm run dev
```

> ⚠️ Remember: To use Husky (for pre-commit hooks), you must first run `git init` in your local project directory if it's not already a Git repository.

> Replace `npm` with your package manager if different.

Enjoy building with NovaBoost! 🚀



## ✨ Pull Request Guidelines

* Create feature branches from `main`
* Follow the project’s style (TailwindCSS + Prettier)
* Write clear commit messages
* Link related issues with `Fixes #123`
* Describe your changes in the PR template

## 📄 License

By contributing, you agree that your contributions will be licensed under the [MIT License](../LICENSE.md).
