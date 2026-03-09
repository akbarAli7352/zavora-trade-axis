export const URLS ={
    HOME: "/",
    ABOUT: "/about",
    PRODUCTS: "/products",
    EXPORT_PROCESS: "/export-process",
    CERTIFICATIONS: "/certifications",
    CONTACT: "/contact",
}

export const PRODUCT_CATEGORIES = [
    { name: "Leather Products", value: 'leather-products', href: "/products/leather-products" },
    { name: "Handicrafts", value: 'handicrafts', href: "/products/handicrafts" },
    { name: "Carpets", value: 'carpets', href: "/products/carpets" },
    { name: "Pure Honey", value: 'pure-honey', href: "/products/pure-honey" },
    { name: "Specialty Coffee", value: 'specialty-coffee', href: "/products/specialty-coffee" },
]

export const links = [
    { href: URLS.HOME, label: "Home" },
    { href: URLS.ABOUT, label: "About" },
    { href: URLS.PRODUCTS, label: "Products" },
    { href: URLS.EXPORT_PROCESS, label: "Export Process" },
    { href: URLS.CERTIFICATIONS, label: "Certifications" },
    { href: URLS.CONTACT, label: "Contact" },
];

export const PAYMENT_MODES = [
  { value: 'lc', label: 'Letter of Credit (LC)' },
  { value: 'advance', label: 'Advance Payment' },
]