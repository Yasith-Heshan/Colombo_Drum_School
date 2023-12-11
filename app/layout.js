import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Colombo Drum School',
  description: 'Discover the rhythm of Colombo Drum School, your premier destination for drumming education in Colombo, Sri Lanka. Learn drumming from experienced instructors, explore diverse percussion styles, and unleash your musical potential. Join our vibrant drumming community and embark on a rhythmic journey at Colombo Drum School.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
