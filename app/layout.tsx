import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shell Consultancy',
  description: 'Vedvix.in',
  generator: 'Vedvix.in',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
