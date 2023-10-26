import type { Metadata } from 'next'
import './globals.css'

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
        {children}
      </body>
    </html>
  )
}
