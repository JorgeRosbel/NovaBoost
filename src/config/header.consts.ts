export const TITLE = '🌟 NovaBoost';


// Define the links for the main navigation menu
// These links will be used in the Header component
// You can add or remove links as needed
// The `href` should be the path to the page, and `label` is the text that will be displayed in the menu.

export const MENU_LINKS = [
	{ href: '/', label: 'Home' }
];

// Define the submenu links 
// Each submenu has a title and an array of links
// The `submenu_title` is the title of the submenu, and `links` is an array of objects
// Each object in `links` has an `href` for the link path
// and a `label` for the text that will be displayed in the submenu.
// This structure allows for easy expansion of the submenu with additional categories or links.

/**
 * 🚀 **Category Link Requirements**
 *
 * Category links must adhere to specific rules for proper pagination and routing:
 *
 * 1.  **Must end with `/1`**:
 * ➡️ This is essential for our pagination system to function correctly,
 * indicating the first page of the category.
 *
 * 2.  **Must *only* contain alphanumeric characters and underscores**:
 * 🔠 Permitted characters are:
 * -   `a-z` (lowercase letters)
 * -   `A-Z` (uppercase letters)
 * -   `0-9` (digits)
 * -   `_` (underscore)
 * 🚫 No spaces, hyphens (`-`), or any other special characters are allowed.
 *
 * ---
 *
 * ### **Examples**
 *
 * ---
 *
 * ✅ **Correct Examples:**
 * * `blog_posts/1`
 * * `products_new/1`
 * * `tech_reviews_2023/1`
 *
 * ---
 *
 * 🚫 **Incorrect Examples:**
 * * `blog-posts/1`          ➡️ Contains a hyphen (`-`), which is not allowed.
 * * `products new/1`        ➡️ Contains a space, which is not allowed.
 * * `tech_reviews_2023`     ➡️ Missing the required `/1` at the end.
 * * `products!/1`           ➡️ Contains an exclamation mark (`!`), which is not allowed.
 *
 * ---
 *
 * By following these guidelines, your category links will seamlessly integrate
 * with the pagination system!
 */

export const SUBMENU_LINKS = [
  {
    submenu_title: 'Categories',
    links: [
      { href: '/general/1', label: '🌐General' },
      { href: '/astro_base/1', label: '🚀Astro & Base' },
      { href: '/tailwindcss/1', label: '🎨TailwindCSS' },
      { href: '/seo_performance/1', label: '⚡SEO & Performance' },
      { href: '/ai_content/1', label: '🤖AI & Content' },
    ],
  }
];