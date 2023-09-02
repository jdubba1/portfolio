import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { MainNav } from '@/components/main-nav'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bard Owl',
  description: 'James Wisseman\'s personal website.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`inter.className flex min-h-screen flex-col py-8`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <MainNav></MainNav>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
