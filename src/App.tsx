import { useMemo } from 'react'
import { navItems, type SectionId } from './data/nav'
import { useTheme } from './hooks/useTheme'
import { useActiveSection } from './hooks/useActiveSection'

import { AnimatedBackground } from './components/AnimatedBackground'
import { ScrollProgress } from './components/ScrollProgress'
import { Cursor } from './components/Cursor'
import { BackToTop } from './components/BackToTop'
import { BottomTabBar } from './components/BottomTabBar'

import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Skills } from './sections/Skills'
import { Experience } from './sections/Experience'
import { Education } from './sections/Education'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'

export default function App() {
  // Follows OS/device theme and keeps theme-color meta in sync.
  useTheme()

  // Stable list of section ids for the scroll-position detector.
  const sectionIds = useMemo<SectionId[]>(
    () => navItems.map((n) => n.id),
    [],
  )
  const active = useActiveSection(sectionIds)

  return (
    <>
      <AnimatedBackground />
      <ScrollProgress />
      <Cursor />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>

      <Footer />

      <BackToTop />
      <BottomTabBar active={active} />
    </>
  )
}
