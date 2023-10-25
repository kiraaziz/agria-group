import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import S1 from '@/components/S1'
import S2 from '@/components/S2'
import S3 from '@/components/S3'
import S4 from '@/components/S4'

export const metadata: Metadata = {
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className='w-full h-[100svh] m-0 p-0 relative'>
        <Navbar />
        <S1 />
        <S2 />
        <S3 />
        <S4 />
      </body>
    </html>
  )
}
