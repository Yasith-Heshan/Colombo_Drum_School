import {Inter} from 'next/font/google'
import './globals.css'
import { Providers } from './provider';


const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Colombo Drum School',
    description: 'Discover the rhythm of Colombo Drum School, your premier destination for drumming education in Colombo, Sri Lanka. Learn drumming from experienced instructors, explore diverse percussion styles, and unleash your musical potential. Join our vibrant drumming community and embark on a rhythmic journey at Colombo Drum School.',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <head>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            <link rel="manifest" href="/site.webmanifest"/>
        </head>
            <body className={inter.className}>
            <Providers>
                {children}
            </Providers>
            </body>
        </html>
    )
}
