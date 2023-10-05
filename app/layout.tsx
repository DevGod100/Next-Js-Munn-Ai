import { cn } from '@/lib/utils'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from '@/components/navbar/NavBar'
import Providers from '@/components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Profile App',
  description: 'Join and get employed',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <body className={cn(inter.className, "antialiased min-h-screen pt-16")}>
        <Providers>
        <NavBar/>
        {children}
        </Providers>
        </body>
    </html>
  )
}
