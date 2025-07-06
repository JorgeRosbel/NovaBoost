// Define the links for the main navigation menu
// These links will be used in the Header component
// You can add or remove links as needed
// The `href` should be the path to the page, and `label` is the text that will be displayed in the menu.
export const TITLE = 'Geophysics';

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
    submenu_title: 'Methods',
    links: [
      { href: '/gravimetry', label: 'Gravimetry' },
      { href: '/magnetometry', label: 'Magnetometry' },
      { href: '/seismology', label: 'Seismology' },
      { href: '/geodesy', label: 'Geodesy' },
      { href: '/geoelectrics', label: 'Geoelectrics' },
    ],
  },
  {
    submenu_title: 'Applications',
    links: [
      { href: '/oil_gas', label: 'Oil & Gas Exploration' },
      { href: '/mining', label: 'Mining Surveys' },
      { href: '/environmental', label: 'Environmental Studies' },
      { href: '/archaeology', label: 'Archaeology' },
    ],
  },
  {
    submenu_title: 'Software',
    links: [
      { href: '/petrel', label: 'Petrel' },
      { href: '/oasis', label: 'Oasis montaj' },
      { href: '/gmtsar', label: 'GMTSAR' },
      { href: '/oq', label: 'OpendTect' },
    ],
  },
  {
    submenu_title: 'Data Processing',
    links: [
      { href: '/filtering', label: 'Filtering' },
      { href: '/inversion', label: 'Inversion' },
      { href: '/modeling', label: 'Modeling' },
      { href: '/visualization', label: 'Visualization' },
    ],
  },
];