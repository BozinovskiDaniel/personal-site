import '@/app/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'

import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { FunctionComponent, PropsWithChildren } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://bozinovskidaniel.netlify.com'),
  title: 'Daniel Bozinovski | Software Engineer',
  description:
    'Full Stack Software Engineer with over 3 years industry experience in fast-paced, high output startups recently focusing on the integration of AI & LLMs into software solutions',
  openGraph: {
    title: 'Daniel Bozinovski | Software Engineer',
    description:
      'Full Stack Software Engineer with over 3 years industry experience in fast-paced, high output startups recently focusing on the integration of AI & LLMs into software solutions',
    url: 'https://bozinovskidaniel.netlify.com'
  }
}

const RootLayout: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <html lang="en">
    <body className={inter.className}>{children}</body>
  </html>
)

export default RootLayout
