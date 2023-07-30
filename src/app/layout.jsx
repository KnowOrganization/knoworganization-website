import './globals.css'
import { Montserrat } from 'next/font/google'
import Headers from '../components/Hearder'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Know Organization',
  description: 'Know Organization',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Headers />
        {children}
        </body>
    </html>
  )
}
