import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const latin = Inter({ subsets: ['latin-ext'], weight: '400' })

export const metadata: Metadata = {
  title: 'Chimba tours',
  description: 'Explora el arte urbano vibrante y las historias transformadoras de Comuna 13 con Chimba Tours  ¡Vive la explosión de color, conoce artistas locales y sumérgete en la resiliencia de Medellín!',
  keywords: ["Comuna 13 graffiti tour", "Medellin street art", "urban art experiences,"],
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={latin.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
