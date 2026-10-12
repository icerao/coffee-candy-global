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

export type Product = { brand: string; name: string; cn: string; img: string; desc: string; badges: string[]; featured?: boolean };
// Product names, images and pack details taken from the Ruiji Food Group product catalogue (PDF).
export const products: Product[] = [
  { brand: 'X-it', name: 'Iced Coffee Candy', cn: '冰咖啡糖', img: 'xit-iced-coffee-candy', featured: true,
    desc: 'X-it "Premium BonBons" coffee candy in a gold-rimmed tin.', badges: ['No.1 online sales nationwide*', 'Bestseller'] },
  { brand: 'X-it', name: 'Sugar-Free Coffee Candy', cn: '无糖咖啡糖', img: 'xit-sugar-free-coffee-candy', featured: true,
    desc: 'Sugar-free coffee candy with a new iced-coffee flavour profile, packed in a tin.', badges: ['Sugar-free', 'Iced coffee flavour'] },
  { brand: 'X-it', name: 'VC Black Coffee Candy', cn: 'VC黑咖啡糖', img: 'xit-vc-black-coffee-candy', featured: true,
    desc: 'Black coffee candy with vitamin C, in X-it "Premium BonBons" tins.', badges: ['Vitamin C'] },
  { brand: "I'MINT", name: 'Gold Coffee Candy', cn: '黑金咖啡糖', img: 'imint-gold-coffee-candy', featured: true,
    desc: 'Sugar-free coffee candy in a small square box, in Espresso and Americano variants — balanced bittersweet taste, not bitter or astringent.', badges: ['Sugar-free', 'Espresso', 'Americano'] },
  { brand: 'X-it', name: '"Xing" Coffee Candy', cn: '"醒"咖啡糖', img: 'xit-xing-coffee-candy',
    desc: 'Rich, full-bodied coffee candy in a round tin.', badges: ['Rich taste'] },
  { brand: 'X-it', name: 'Reissue Series Coffee Candy', cn: '复刻系列咖啡糖', img: 'xit-reissue-coffee-candy',
    desc: 'X-it Coffee Bonbons in a black-and-gold tin.', badges: ['Coffee Bonbons'] },
  { brand: "I'MINT", name: 'Ginseng Americano Coffee Candy', cn: '人参美式咖啡糖', img: 'imint-ginseng-americano-coffee-candy',
    desc: 'Americano coffee candy with ginseng and natural mint essence.', badges: ['Natural mint essence'] },
  { brand: "I'MINT", name: 'VC Iced Coffee Candy', cn: 'VC冰咖啡糖', img: 'imint-vc-iced-coffee-candy',
    desc: "Iced coffee candy with vitamin C from I'MINT, the group's flagship brand.", badges: ['Vitamin C'] },
  { brand: "Rejee × I'MINT", name: 'Interstellar Sandwich Coffee Candy', cn: '星际夹心咖啡糖', img: 'rejee-interstellar-coffee-candy',
    desc: 'Filled coffee candy in space-themed packs, including a lemon-VC Americano flavour.', badges: ['Filled centre', 'Lemon-VC Americano'] },
];
export const claimNote = '*X-it coffee candy: Proof of Market Position issued by Shangpu Consulting Group, May 2025 (data period: 2024), China online market.';

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

export const gallery = {
  factory: [
    { img: 'factory-line-1', alt: 'Production line in the GMP cleanroom, Zhongshan headquarters', cap: 'GMP cleanroom production, Zhongshan HQ' },
    { img: 'factory-line-2', alt: 'Automated packing line with operators in cleanroom suits', cap: 'Automated production lines' },
    { img: 'packaging-factory', alt: 'Meixinlong packaging factory building', cap: 'Meixinlong packaging factory' },
    { img: 'hq-office', alt: 'Open-plan office at Zhongshan Torch Zone headquarters', cap: 'Zhongshan Torch Zone headquarters' },
  ],
};
