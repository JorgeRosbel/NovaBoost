# Usage

Aca encontraras una explicacion de como utilizar NovaBoost

## Table of Contents

* [Usage](#usage)
    * [1. Reset your template](#reset-your-template)
    * [2. Create a collection](#create-a-collection)



## Reset your template

Al iniciar su proyecto tendra una plantilla basica con imagnes, posts y textos. Para resetear el proyecto y obtener una plantilla
limpia debera ejecutar el siguiente comando:

```bash
npm run reset-template
```

Esto limpiara todas las colecciones y post que trae la plantilla por defecto y la dejara lista para empezar a crear. Le advierto que ese comando no debera ser ejectuando por error durante el desarrollo ya que podria perder archivos importantes


## Create a Collection

To quickly create a new **content collection**, simply run:

```bash
npm run create-collection -- <name>
```

This command will:

* Create a folder under `src/content/<name>`.
* Automatically register the schema in `src/content/config.ts`.
* Add the collection reference in `src/collections.ts`.

Inside the `src/content/<name>` folder, you can add all your `.md` or `.mdx` files. Each file will represent an individual post or entry that belongs to that collection.

### Frontmatter Format

Each Markdown file must begin with a **frontmatter block**. This block provides metadata for the post and is essential for features like SEO, tag filtering, publish dates, and displaying images. Here's an example:

```md
---
title: "How to Auto-Generate Blog Content Using OpenAI via NovaBoost CLI"
description: "Learn to auto-generate blog content efficiently using OpenAI and NovaBoost CLI with this step-by-step tutorial."
pubDate: "2025-07-10"
heroImage: "../../assets/post_placeholder.png"
tags: ["openai", "novaboost", "cli"]
affiliateBlock:
  text: "Get this product with a 10% discount🤑!"
  affiliateLink: "https://tu-affiliate.com/?ref=NOVABOOST"
---
```

> **Note:** The `tags` and `affiliateBlock` fields are **optional**. You can omit them if not needed.

You can customize this template to match the schema of your collection. This frontmatter will be parsed and used by Astro to dynamically build your pages.

### Folder Structure

```text
src/
├── content/
│   └── <name>/              # Markdown files for this collection go here
├── content/config.ts        # Collection schema auto-registered here
├── collections.ts           # Reference to the new collection is added here
```