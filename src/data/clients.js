const escapeXml = (value) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');

const createClientLogo = ({ name, subtitle, shortName, accent, category }) => {
  const safeName = escapeXml(name);
  const safeSubtitle = escapeXml(subtitle);
  const safeCategory = escapeXml(category.toUpperCase());
  const safeShortName = escapeXml(shortName);

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="640" height="420" viewBox="0 0 640 420" fill="none">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="640" y2="420" gradientUnits="userSpaceOnUse">
          <stop stop-color="#151816"/>
          <stop offset="1" stop-color="#050505"/>
        </linearGradient>
        <linearGradient id="glow" x1="94" y1="74" x2="555" y2="346" gradientUnits="userSpaceOnUse">
          <stop stop-color="${accent}" stop-opacity="0.48"/>
          <stop offset="1" stop-color="${accent}" stop-opacity="0.08"/>
        </linearGradient>
        <linearGradient id="plate" x1="54" y1="54" x2="586" y2="366" gradientUnits="userSpaceOnUse">
          <stop stop-color="rgba(255,255,255,0.06)"/>
          <stop offset="1" stop-color="rgba(255,255,255,0.02)"/>
        </linearGradient>
      </defs>
      <rect width="640" height="420" rx="36" fill="url(#bg)"/>
      <rect x="18" y="18" width="604" height="384" rx="24" stroke="rgba(255,255,255,0.09)" stroke-width="2"/>
      <circle cx="535" cy="96" r="88" fill="url(#glow)"/>
      <circle cx="118" cy="332" r="72" fill="url(#glow)"/>
      <rect x="54" y="54" width="532" height="312" rx="28" fill="url(#plate)" stroke="rgba(255,255,255,0.08)" stroke-width="2"/>
      <rect x="82" y="84" width="136" height="136" rx="32" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.09)" stroke-width="2"/>
      <circle cx="150" cy="152" r="42" fill="${accent}" fill-opacity="0.18"/>
      <path d="M118 166C136 133 164 124 190 138C174 160 150 179 118 166Z" fill="${accent}"/>
      <rect x="132" y="114" width="56" height="8" rx="4" fill="#F7F5F0" fill-opacity="0.82"/>
      <rect x="132" y="126" width="44" height="8" rx="4" fill="#F7F5F0" fill-opacity="0.62"/>
      <text x="248" y="116" fill="${accent}" font-family="Outfit, Arial, sans-serif" font-size="24" font-weight="700" letter-spacing="7">${safeCategory}</text>
      <text x="248" y="188" fill="#F8F7F4" font-family="Outfit, Arial, sans-serif" font-size="42" font-weight="800">${safeName}</text>
      <text x="248" y="224" fill="rgba(248,247,244,0.72)" font-family="Outfit, Arial, sans-serif" font-size="20" font-weight="500">${safeSubtitle}</text>
      <text x="82" y="300" fill="rgba(248,247,244,0.18)" font-family="Outfit, Arial, sans-serif" font-size="116" font-weight="800" letter-spacing="-6">${safeShortName}</text>
      <rect x="82" y="316" width="150" height="6" rx="3" fill="${accent}"/>
      <circle cx="515" cy="290" r="36" stroke="rgba(248,247,244,0.3)" stroke-width="2"/>
      <circle cx="515" cy="290" r="20" fill="${accent}" fill-opacity="0.28"/>
      <path d="M468 314H562" stroke="rgba(248,247,244,0.18)" stroke-width="2"/>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

export const clientsData = [
  {
    name: 'HASCOL',
    subtitle: 'Oil Blending and Lubricant',
    shortName: 'HAS',
    category: 'Energy',
    accent: '#A2B98A',
  },
  {
    name: 'Diatone',
    subtitle: 'Indus Motors Speakers Manufacturer',
    shortName: 'DIA',
    category: 'Manufacturing',
    accent: '#88A7C7',
  },
  {
    name: 'Sindh Medical Stores',
    subtitle: 'Medical Devices',
    shortName: 'SMS',
    category: 'Healthcare',
    accent: '#8FC7B6',
  },
  {
    name: 'Briogene',
    subtitle: 'Medical Devices',
    shortName: 'BRI',
    category: 'Healthcare',
    accent: '#7FC4AA',
  },
  {
    name: 'Children Hospital',
    subtitle: 'Healthcare Services',
    shortName: 'CH',
    category: 'Care',
    accent: '#E0B36D',
  },
  {
    name: 'Intellexal Solutions',
    subtitle: 'Software House',
    shortName: 'INT',
    category: 'Technology',
    accent: '#84A7D8',
  },
  {
    name: 'South City Hospital',
    subtitle: 'Clinical Operations',
    shortName: 'SCH',
    category: 'Healthcare',
    accent: '#92C8C0',
  },
  {
    name: 'Aiza Packages',
    subtitle: 'Food and Pharma Packaging',
    shortName: 'AIZ',
    category: 'Packaging',
    accent: '#D0A874',
  },
  {
    name: 'University of Karachi',
    subtitle: 'Higher Education',
    shortName: 'UOK',
    category: 'Education',
    accent: '#A89AD4',
  },
  {
    name: 'Liaquat University of Medical & Health Sciences',
    subtitle: 'Medical Education',
    shortName: 'LUMHS',
    category: 'Academic',
    accent: '#A5C77B',
  },
  {
    name: 'Sana Naturals',
    subtitle: 'Edible Salt Exporter',
    shortName: 'SANA',
    category: 'Consumer',
    accent: '#B4C978',
  },
  {
    name: 'Team Automation Inspections and Calibration',
    subtitle: 'Inspection and Calibration',
    shortName: 'TAIC',
    category: 'Quality',
    accent: '#9EB7CF',
  },
  {
    name: 'Zaib Transportation',
    subtitle: 'Transportation Services',
    shortName: 'ZAIB',
    category: 'Logistics',
    accent: '#D3A37D',
  },
].map((client) => ({
  ...client,
  logo: createClientLogo(client),
}));
