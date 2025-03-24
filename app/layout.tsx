import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Запоминание английских слов',
  description: 'Приложение для изучения английских слов',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-dark-bg`}>
        <main className="container mx-auto px-4 py-8 max-w-md">
          {children}
        </main>
      </body>
    </html>
  )
} 