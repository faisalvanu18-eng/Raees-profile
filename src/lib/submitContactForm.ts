import { profile } from '../data/profile'

export interface ContactFormData {
  name: string
  email: string
  message: string
}

/**
 * Isolated contact handler. Uses a mailto: fallback (no backend) so the site
 * stays fully static and deployable to Firebase/Vercel/Netlify. Opens the
 * user's email client pre-filled with their message.
 */
export function submitContactForm(data: ContactFormData): void {
  const subject = `Portfolio enquiry from ${data.name || 'website visitor'}`
  const body = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    '',
    data.message,
  ].join('\n')

  const url = `mailto:${profile.email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`

  window.location.href = url
}
