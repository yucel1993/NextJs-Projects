import { Footer, Navbar } from './(components)'
import './globals.css'
import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'



export const metadata: Metadata = {
  title: 'Car Hub',
  description: 'Take a Tour',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
      <body className='relative'>
        <Navbar/>
        <main 
        className='flex flex-grow w-full justify-center items-center'>
        {children}
        </main>
     
        <Footer/>
        </body>
      </html>
    </ClerkProvider>
    
  )
}
