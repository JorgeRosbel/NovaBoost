## Usage

This section provides a step-by-step guide on how to use **NovaBoost** effectively.

### Table of Contents

* [Usage](#usage)

  * [1. Reset your template](#reset-your-template)
  * [2. Create a collection](#create-a-collection)
  * [3. AI-Powered Post Generation](#ai-powered-post-generation)
  * [4. Available Commands](#available-commands)
  * [5. Customizing Template Content](#customizing-template-content)



### 1. Reset Your Template

When you start a new project using NovaBoost, you'll notice that it comes with some demo posts, images, and placeholder content.

To reset the project and start with a clean slate, run the following command:

```bash
npm run reset-template
```

This will remove all default collections and posts, giving you a fresh structure to begin building your blog.

> ⚠️ **Warning:** Avoid running this command accidentally during development—it will delete important content and cannot be undone.



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


## AI-Powered Post Generation

NovaBoost provides support for **AI-powered post generation** to help you create content quickly and efficiently using CLI prompts and your preferred language model.

### Step 1: Configure `.env.private`

To get started, you need to create a `.env.private` file in the root of your project. This file must contain two variables:

```env
SYSTEM_PROMPT="You can adjust this to set a global tone or style for all AI-generated posts"
USER_PROMPT="Write a blog post introducing NovaBoost’s AI-powered post generation and how it helps content creators save time, Write a step-by-step tutorial on how to use OpenAI to auto-generate blog content inside NovaBoost via CLI prompts, Write a reflective article discussing the pros, cons, and ethical implications of AI-generated content in modern blogs"
```

> **Note:** The `USER_PROMPT` supports multiple prompts, separated by commas. Each prompt will generate a separate blog post.

### Step 2: Run the Command

To generate posts using AI, simply run:

```bash
npm run create-post
```

If you haven’t provided an API key yet, the command will prompt you to enter it. It will then create a `.env.ai` file at the root of your project to store your key (locally and privately).

### Step 3: Choose AI Model


You will be presented with a selection menu to choose your preferred AI model:

| Model               | Description                                                                                                                                              | `zodResponseFormat` Compatible |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| `gpt-4.1`           | 🧠 The most capable GPT model, ideal for long‑form content generation and deep reasoning, with built‑in support for structured, schema‑compliant output. | ✅                              |
| `gpt-4o-2024-08-06` | 🧠 High precision GPT‑4o variant tuned for structured outputs using `zodResponseFormat`.                                                                 | ✅                              |
| `gpt-4o-mini`       | ⚡ A lighter, faster, and more affordable version of GPT‑4o, suitable for general tasks.                                                                  | ❓                              |
| `gpt-4`             | 💡 Robust GPT‑4 model offering strong performance at the cost of higher latency and expense.                                                             | ❓                              |
| `gpt-3.5-turbo`     | 🚀 Optimized for speed and cost, perfect for simple tasks and quick completions.                                                                         | ❓                              |
| `gemini-2.5-flash`  | 🔍 Google Gemini model with enhanced flash capabilities for rapid responses.                                                                             | ✅                               |
| `gemini-2.0-flash`  | 📦 Older Google Gemini release, suitable for basic workloads where cutting‑edge precision is not required.                                               | ❓                              |



### Step 4: Select a Collection

Next, you'll see a list of all content collections created using:

```bash
npm run create-collection -- <name>
```

Select the collection where you want the new posts to be added.

### Step 5: Posts Are Generated

NovaBoost will generate one post per prompt defined in `USER_PROMPT`, and write them as `.md` files inside:

```text
src/content/<name>
```

Where `<name>` is the name of the selected collection.

This automation helps streamline your content creation workflow and speeds up blog development significantly.


## Available Commands

Here is a table summarizing the main commands available in **NovaBoost**, including both standard and custom scripts:

| Command                                                                | Description                                                                                                                 |
| ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `npm run dev`                                                          | Starts the development server with live reload.                                                                             |
| `npm run build`                                                        | Builds the project for production.                                                                                          |
| `npm run preview`                                                      | Previews the production build locally.                                                                                      |
| `npm run reset-template`                                               | Clears all demo content and resets the project to a clean state. ⚠️                                                         |
| `npm run create-collection -- <name>`                                  | Creates a new content collection and registers it automatically.                                                            |
| `npm run create-post`                                                  | Launches the AI-powered post generator using prompts from your config.                                                      |
| `npm run create-multiple -- <collection1> <collection2> <collection3>` | Creates multiple collections in one go (Bash only).                                                                         |
| `npm run get-routes`                                                   | Displays the routes for all created collections, for use in header config.                                                  |
| `npm run remove -- <collection_name>`                                  | Completely removes a content collection from the project.                                                                   |




> ⚠️ **Note:** Use `reset-template` carefully as it deletes all current collections and posts.

These commands streamline the setup, development, and content creation process when building your blog with NovaBoost.


## Customizing Template Content

NovaBoost offers a highly flexible structure for content customization. You can easily adjust text, layout, and styles to match your brand or project.

### Content-Driven Landing Page Configuration with .md

All the content for the landing page is now centralized in a Markdown file located at:

```
src/config/LANDING.md
```

This `.md` file includes a structured frontmatter block that defines all the key sections of the landing page, such as:

* Hero section (headline, subheadline, background image, buttons)
* Navigation menu and categories
* Featured content and banners
* FAQs and image-text cards
* Footer links and branding

Using this setup, content updates for the landing page can be made directly in the `.md` file without touching the source code. This simplifies content management and allows non-developers to contribute easily.

All fields from the frontmatter are programmatically imported and rendered inside the landing page layout, enabling a clean separation of content and presentation.

> **Note:** The `.md` file should maintain proper YAML formatting to ensure all content renders correctly in the UI.


### Styling (`src/styles/`)

To modify colors, fonts, and general styles, head over to the `src/styles/` directory. You’ll find the Tailwind configuration and base styles used across the site.

This separation between logic and content ensures you can make fast, safe updates without risking breaking the layout or functionality.


### Logo for Structured Data

For structured data (JSON-LD) to work correctly, make sure your site's logo file:

* Is named exactly: `logo.png`
* Is placed inside the `public/` folder

```text
/public/logo.png
```

This image will be referenced in the structured metadata to enhance SEO and appearance in search engine results.

By editing these areas, you can quickly adapt NovaBoost to fit your content strategy and visual identity.