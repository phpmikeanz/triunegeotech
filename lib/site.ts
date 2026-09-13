export const site = {
  name: 'TRIUNE Geotechnical Testing Services',
  shortName: 'TRIUNE GEOTECHNICAL',
  tagline: 'Building Foundations of Trust Through Engineering Excellence',
  location: 'Zamboanga City, Philippines',
  address: 'Lot 5 Block 3, La Vina Drive Triplet, Santo Niño, 7000 Zamboanga City',
  phone: '+63 962 778 5674',
  phoneHref: 'tel:+639627785674',
  email: 'triunegeotechnical@gmail.com',
  hours: [
    { days: 'Monday – Friday', time: '7:30 AM – 5:30 PM' },
    { days: 'Saturday', time: '7:30 AM – 12:00 NN' },
    { days: 'Sunday / Holidays', time: 'By appointment only' },
  ],
  registrations: [
    {
      code: 'DTI',
      label: 'DTI REGISTERED',
      value: 'No. 7095256',
      detail: 'Officially registered with the Department of Trade and Industry.',
    },
    {
      code: 'BIR',
      label: 'BIR COMPLIANT',
      value: 'TIN 730-831-143-00000',
      detail: 'Registered and compliant with Bureau of Internal Revenue requirements.',
    },
    {
      code: 'DPWH',
      label: 'DPWH ACCREDITED',
      value: 'Accredited Laboratory',
      detail: 'Laboratory accreditation with legal acceptance for regulatory requirements and building permits.',
    },
  ],
} as const

export const nav = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#why-triune', label: 'Why Triune' },
  { href: '#contact', label: 'Contact' },
] as const
