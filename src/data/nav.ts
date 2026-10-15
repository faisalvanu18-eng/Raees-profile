export type SectionId =
  | 'hero'
  | 'about'
  | 'skills'
  | 'experience'
  | 'education'
  | 'contact'

export interface NavItem {
  id: SectionId
  label: string
  icon: string
}

export const navItems: NavItem[] = [
  { id: 'hero', label: 'Home', icon: 'home' },
  { id: 'about', label: 'About', icon: 'user' },
  { id: 'skills', label: 'Skills', icon: 'sparkles' },
  { id: 'experience', label: 'Work', icon: 'briefcase' },
  { id: 'education', label: 'Education', icon: 'cap' },
  { id: 'contact', label: 'Contact', icon: 'mail' },
]
