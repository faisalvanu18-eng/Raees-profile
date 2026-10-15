export interface Profile {
  name: string
  shortName: string
  role: string
  phone: string
  phoneHref: string
  email: string
  location: string
  summary: string
  dob: string
  languages: string[]
}

export const profile: Profile = {
  name: 'Raees Mohammad Ishaque Vanu',
  shortName: 'Raees Vanu',
  role: 'Accounts Assistant',
  phone: '+91 8698174743',
  phoneHref: '+918698174743',
  email: 'raeesvanu80781@gmail.com',
  location:
    'Zakriya Masjid Street, Pandrowala Tower, Masjid Bunder, Mumbai, Maharashtra',
  summary:
    'Accounts Assistant with hands-on experience at a Chartered Accountant firm in Mumbai. Skilled in maintaining accounting records in Tally Prime and Tally ERP 9, and in independently filing GSTR-1, GSTR-3B and TDS returns. Comfortable with MS Excel for day-to-day accounting work. Accurate, deadline-conscious and eager to grow in accounts and taxation.',
  dob: '14 July 2004',
  languages: ['English', 'Hindi', 'Urdu', 'Marathi'],
}
