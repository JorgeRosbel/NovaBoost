import { type FooterLink, type FooterProps } from "../components/Footer.astro";

const LEGAL_NAV: FooterLink[] = [
  { text: 'Legal Notice', href: '/#' },
  { text: 'Privacy Policy', href: '/#' },
  { text: 'Cookie Policy', href: '/#' },
];

const CONTACT_NAV: FooterLink[] = [
  { text: 'name@example.com', href: 'mailto:name@example.com' },
  { text: 'Twitter', href: 'https://twitter.com/user', target: '_blank' },
  { text: 'GitHub', href: 'https://github.com/user', target: '_blank' },
];





export const FOOTER_CONTENT:FooterProps = {
    brandName: "🌟NovaBoost",
    brandDescription: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    rssLink:"/rss.xml",
    legalLinks: LEGAL_NAV,
    contactLinks: CONTACT_NAV,
    copyrightName: "Sed ut perspiciatis unde omnis iste natus error"
}