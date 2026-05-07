import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Kavindu Dilsshan | Video Editor',
  description: 'Cinematic video editor specializing in documentaries, short films, reels, and weddings. Based in Sri Lanka.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth dark" style={{ colorScheme: 'dark' }}>
      <head>
        <meta name="theme-color" content="#0B0B0C" />
      </head>
      <body className={`${manrope.className} font-sans antialiased bg-[#0B0B0C] text-white`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
