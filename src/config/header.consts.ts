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
      { href: '/gravimetry/1', label: 'Gravimetry' },
      { href: '/magnetometry/1', label: 'Magnetometry' },
      { href: '/seismology/1', label: 'Seismology' },
      { href: '/geodesy/1', label: 'Geodesy' },
      { href: '/geoelectrics/1', label: 'Geoelectrics' },
    ],
  },
  {
    submenu_title: 'Applications',
    links: [
      { href: '/oil_gas/1', label: 'Oil & Gas Exploration' },
      { href: '/mining/1', label: 'Mining Surveys' },
      { href: '/environmental/1', label: 'Environmental Studies' },
      { href: '/archaeology/1', label: 'Archaeology' },
    ],
  },
  {
    submenu_title: 'Software',
    links: [
      { href: '/petrel/1', label: 'Petrel' },
      { href: '/oasis/1', label: 'Oasis montaj' },
      { href: '/gmtsar/1', label: 'GMTSAR' },
      { href: '/oq/1', label: 'OpendTect' },
    ],
  },
  {
    submenu_title: 'Data Processing',
    links: [
      { href: '/filtering/1', label: 'Filtering' },
      { href: '/inversion/1', label: 'Inversion' },
      { href: '/modeling/1', label: 'Modeling' },
      { href: '/visualization/1', label: 'Visualization' },
    ],
  },
];