export interface SkillGroup {
  title: string
  icon: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Accounting Software',
    icon: 'ledger',
    items: ['Tally Prime', 'Tally ERP 9'],
  },
  {
    title: 'Taxation',
    icon: 'receipt',
    items: [
      'GST return filing (GSTR-1, GSTR-3B)',
      'TDS returns & challans',
      'GST invoices',
    ],
  },
  {
    title: 'MS Excel',
    icon: 'grid',
    items: ['Formulas', 'Sorting', 'Filters'],
  },
  {
    title: 'Accounting Work',
    icon: 'book',
    items: ['Data entry', 'Maintaining accounting records'],
  },
  {
    title: 'Computer Skills',
    icon: 'monitor',
    items: ['MS Office (MS-CIT)'],
  },
]

export const coreStrengths: string[] = [
  'Accuracy and attention to detail in accounting entries',
  'Meeting GST and TDS filing deadlines',
  'Quick learner, hardworking, responsible, good team player',
]
