import Title from '@/components/title'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Todo-List',
  description: 'Used to Generate a List of Task that will be taken care of at a future date',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-700`}>
        <Title/>
        {children}
      </body>
    </html>
  )
}
