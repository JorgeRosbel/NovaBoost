// Define the links for the main navigation menu
// These links will be used in the Header component
// You can add or remove links as needed
// The `href` should be the path to the page, and `label` is the text that will be displayed in the menu.
export const TITLE = '🌟 NovaBoost';

export const MENU_LINKS = [
	{ href: '/', label: 'Home' }
];

// Define the submenu links 
// Each submenu has a title and an array of links
// The `submenu_title` is the title of the submenu, and `links` is an array of objects
// Each object in `links` has an `href` for the link path
// and a `label` for the text that will be displayed in the submenu.
// This structure allows for easy expansion of the submenu with additional categories or links.
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