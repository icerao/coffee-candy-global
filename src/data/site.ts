// All facts sourced from the Ruiji Food Group 2026 company profile.
export const rep = {
  name: 'icerao',
  title: 'Authorized Export Representative of Ruiji Food Group, China',
  email: import.meta.env.PUBLIC_CONTACT_EMAIL || 'raolh2004@gmail.com',
  formEndpoint: import.meta.env.PUBLIC_FORM_ENDPOINT || '',
  web3formsKey: import.meta.env.PUBLIC_WEB3FORMS_KEY || '',
};
export const mailto = (subject = 'Coffee candy wholesale inquiry') =>
  `mailto:${rep.email}?subject=${encodeURIComponent(subject)}`;

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/products/', label: 'Products' },
  { href: '/about/', label: 'Manufacturer' },
  { href: '/oem/', label: 'OEM & Export' },
  { href: '/contact/', label: 'Contact' },
];

export const stats = [
  { n: 2014, suffix: '', label: 'Year founded', plain: true },
  { n: 30, suffix: '+', label: 'Export countries & regions' },
  { n: 30000, suffix: ' t', label: 'Annual production capacity' },
  { n: 200, suffix: '+', label: 'Products in portfolio' },
  { n: 1000, suffix: '+', label: 'Distribution partners' },
  { n: 100, suffix: '+', label: 'Patent certificates' },
];

export const certs = ['ISO 22000', 'ISO 9001', 'HACCP', 'FDA', 'BRC', 'HALAL'];

export const products = [
  { brand: 'X-it', name: 'Sugar-Free Coffee Candy', tone: 'dark',
    desc: 'The flagship coffee candy of X-it, the group\'s premium brand launched in 2022.',
    badges: ['No.1 online sales in China*', 'Douyin 2024 Annual Treasure New Product'] },
  { brand: 'X-it', name: 'Vitamin C Black Coffee Candy', tone: 'black',
    desc: 'A sugar-free black coffee candy with vitamin C from the X-it range.', badges: ['Sugar-free'] },
  { brand: "I'MINT", name: 'Gold Coffee Candy', tone: 'gold',
    desc: "Coffee candy from I'MINT, the group's flagship brand founded in 2014.", badges: ['Flagship brand'] },
  { brand: 'Rejee', name: 'Interstellar Sandwich Coffee Candy', tone: 'cream',
    desc: 'A filled coffee candy from Rejee, the group\'s premium oral-care brand.', badges: ['Filled centre'] },
];
export const claimNote = '*Proof of Market Position issued by Shangpu Consulting Group, May 2025 (data period: 2024), China online market.';

export const brands = [
  { name: "I'MINT", text: 'Flagship brand founded in 2014; listed in Guangdong Province\'s Key Trademark Protection Directory.' },
  { name: 'X-it', text: 'Premium brand launched in 2022; trademark registered with EUIPO.' },
  { name: 'Rejee', text: 'Premium oral microbiome care brand.' },
  { name: 'KISS PEARL', text: 'Sugar-free fruity and fresh-breath products.' },
];

export const strengths = [
  { t: 'Internationally certified', d: 'ISO 22000, ISO 9001, HACCP, FDA, BRC and HALAL. Audited annually by international companies such as Disney.' },
  { t: 'Manufacturing at scale', d: 'Self-built supply chain and Class 100,000 GMP cleanrooms. 30,000 tonnes per year, about 50 million boxes per month.' },
  { t: 'Sugar-free specialists', d: 'Dedicated to sugar-free confectionery since 2014; a pioneer of large-scale sugar-free candy production in China.' },
  { t: 'Export ready', d: 'Import/export rights, export filing certificates and foreign-trade operator registration in place.' },
];

export const markets = [
  { region: 'Asia', list: ['Japan', 'Korea', 'Singapore', 'Malaysia', 'Philippines', 'Vietnam', 'Thailand'] },
  { region: 'Europe', list: ['France', 'United Kingdom', 'Germany'] },
  { region: 'Americas', list: ['United States', 'Canada'] },
  { region: 'Oceania', list: ['Australia', 'New Zealand'] },
  { region: 'Middle East', list: ['United Arab Emirates', 'Saudi Arabia'] },
];

export const oemSteps = [
  { t: 'Inquiry', d: 'Share your market, product interest, packaging and target quantity.' },
  { t: 'Proposal', d: 'Receive product options, specifications and a quotation.' },
  { t: 'Samples', d: 'Evaluate samples and confirm formula and packaging design.' },
  { t: 'Production', d: 'Manufactured in GMP cleanrooms under certified quality systems.' },
  { t: 'Export & delivery', d: 'Export documentation handled by the manufacturer\'s trade team.' },
];

export const oemModels = [
  { t: 'Private label', d: 'Your brand on proven sugar-free coffee candy.' },
  { t: 'Co-branding', d: 'Joint products and custom development.' },
  { t: 'Hospitality sweets', d: 'Supplied to hotel and restaurant groups including Wanda, InterContinental and Haidilao.' },
  { t: 'Corporate gifting', d: 'Custom gifting for companies such as BYD, NIO and GAC Business.' },
];

export const milestones = [
  ['2014', "I'MINT brand founded"],
  ['2017', 'Annual revenue exceeded RMB 100 million'],
  ['2019', 'Entered Watsons, KKV, Walmart and others; launched e-commerce'],
  ['2022', 'Joined the China National Confectionery Association; premium brand X-it founded'],
  ['2023', 'Three group companies recognised as national High-Tech Enterprises'],
  ['2024', 'X-it coffee candy recognised No.1 in online sales; Douyin Annual Treasure New Product award'],
  ['2025', 'New Zhongshan headquarters opened; sales above RMB 1.3 billion'],
];

export const experts = [
  { n: 'Yi Haiquan', r: 'Zhongshan R&D Center', d: '20+ years at Fortune 500 food companies, including 12+ years at Mars Wrigley in global R&D leadership for gum and mints.' },
  { n: 'Liu Jing', r: 'Chief Industry Expert', d: '20+ years in food R&D and production; author of confectionery formulation textbooks used in universities.' },
  { n: 'Dr. Sun Zhongwei', r: 'Zhongshan R&D Center', d: 'Functional food R&D specialist with first-author publications in Food Chemistry and Carbohydrate Polymers.' },
];

export const faqs = [
  ['Who am I dealing with?', 'icerao, an authorized export representative of Ruiji Food Group in China. Products are manufactured by Ruiji Food Group in Zhongshan, Guangdong.'],
  ['Are the products certified for export?', 'Yes. The manufacturer holds ISO 22000, ISO 9001, HACCP, FDA, BRC and HALAL certifications and full export credentials.'],
  ['Do you offer OEM / private label?', 'Yes — private label, co-branding, hospitality sweets and corporate gifting are supported.'],
  ['What is the minimum order quantity?', 'MOQ, specifications, shelf life and pricing depend on product and packaging. Send an inquiry with your target quantity and market.'],
  ['How much can be supplied?', 'Annual capacity is 30,000 tonnes — about 50 million boxes per month.'],
  ['Which countries do you ship to?', 'Products are exported to 30+ countries and regions across Asia, Europe, the Americas, Oceania and the Middle East.'],
];
