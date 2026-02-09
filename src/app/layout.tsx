import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Quant Finance Collective at Texas State University',
  description: 'A student-led quantitative finance education organization dedicated to developing market understanding through mathematics, programming, and data-driven analysis.',
}

export const viewport = 'width=device-width, initial-scale=1'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <a href="#content" className="skip-link">Skip to content</a>
        <Navigation />
        <main id="content">{children}</main>
        <Footer />
      </body> 
    </html>
  )
}