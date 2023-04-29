import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import { cn } from '@/lib/utils'
import Navbar from '@/components/Navbar'
import { Toaster } from '@/ui/toast'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Goodeats',
  description: 'What would you like to cook today',
}

export default function RootLayout({
  children,
}: {children: React.ReactNode}) {
  return (
    <html
    lang='en'
    className={cn('bg-white text-slate-900 antialiased', inter.className)}>
      <link rel='icon' href='/logo.png' />
      <body className='min-h-screen bg-slate-50 antialiased overflow-y-auto'>
        <Navbar />
        <Toaster position='bottom-right' />
        <main className='flex flex-col'>
          {children}
        </main>
      </body>
    </html>
  )
}
