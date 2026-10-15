export interface EducationItem {
  degree: string
  institution: string
  year: string
}

export interface CertificationItem {
  name: string
  description: string
}

export const education: EducationItem[] = [
  {
    degree: 'Bachelor of Commerce (B.Com)',
    institution:
      "Patpanhale Education Society's Senior College of Arts, Commerce and Science, University of Mumbai",
    year: '2025',
  },
]

export const certifications: CertificationItem[] = [
  {
    name: 'MS-CIT',
    description: 'Maharashtra State Certificate in Information Technology',
  },
]
