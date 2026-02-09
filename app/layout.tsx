import type { Metadata } from 'next'
import { Tinos, Nunito_Sans } from 'next/font/google'
import './globals.css'

const tinos = Tinos({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-tinos',
})

const nunitoSans = Nunito_Sans({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-nunito',
})

export const metadata: Metadata = {
  title: 'Prarthana Majalikar | AI Engineer & Software Developer',
  description: 'Software Engineer specializing in AI applications, RAG systems, and cloud solutions. MCS @ UC Irvine.',
  keywords: ['AI Engineer', 'Software Engineer', 'Machine Learning', 'RAG', 'LLM', 'Cloud Computing', 'GCP'],
  authors: [{ name: 'Prarthana Majalikar' }],
  openGraph: {
    title: 'Prarthana Majalikar | AI Engineer',
    description: 'Software Engineer specializing in AI applications and cloud solutions',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prarthana Majalikar | AI Engineer',
    description: 'Software Engineer specializing in AI applications and cloud solutions',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${tinos.variable} ${nunitoSans.variable}`}>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  )
}
