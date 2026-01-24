import './global.css'
import 'katex/dist/katex.min.css'
import type { Metadata } from 'next'
import { Chivo_Mono } from 'next/font/google'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

const chivoMono = Chivo_Mono({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-chivo-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Felix Aertebjerg',
    template: '%s | Felix Aertebjerg',
  },
  description: 'PhD Student at Denmark\'s Technical University. Focus on machine learning and probabilistic modeling applied in the sciences.',
  openGraph: {
    title: 'Felix Aertebjerg',
    description: 'PhD Student at Denmark\'s Technical University. Focus on machine learning and probabilistic modeling applied in the sciences.',
    url: baseUrl,
    siteName: 'Felix Aertebjerg',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-slate-900 bg-[#f0f4f8] dark:text-slate-900 dark:bg-[#f0f4f8]',
        chivoMono.variable
      )}
    >
      <body className="antialiased max-w-3xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
