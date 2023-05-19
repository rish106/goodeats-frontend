import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import { Toaster } from '@/ui/toast'
import '@/styles/globals.css'

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
    className={'bg-white text-slate-900 antialiased'}>
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
