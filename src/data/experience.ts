export interface ExperienceItem {
  role: string
  company: string
  location: string
  period: string
  current: boolean
  responsibilities: string[]
}

export const experience: ExperienceItem[] = [
  {
    role: 'Accounts Assistant',
    company: 'Sayed Shaikh & Associates (Chartered Accountant Firm)',
    location: 'Crawford Market, Carnac Road, Mumbai',
    period: 'Aug 2025 – Present',
    current: true,
    responsibilities: [
      'Maintain accounting records and data entry in Tally Prime and Tally ERP 9',
      'Prepare and independently file monthly GSTR-1 and GSTR-3B returns',
      'Prepare TDS returns and challans',
      'Work on GST invoices for client accounts',
      'Use MS Excel (formulas, sorting, filters) to organise and verify accounting data',
      'Handle multiple client accounts and meet filing deadlines',
    ],
  },
]
