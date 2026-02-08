'use client'

import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Education } from '@/components/Education'
import { Projects } from '@/components/Projects'
import { Experience } from '@/components/Experience'
import { Skills } from '@/components/Skills'
import { Certifications } from '@/components/Certifications'
import { Contact } from '@/components/Contact'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Experience />
      <Skills />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  )
}
