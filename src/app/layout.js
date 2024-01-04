import { Roboto, Playfair_Display } from 'next/font/google'
import './globals.css'

import { Header } from './components/Header'
import { Footer } from './components/Footer'

const roboto = Roboto({ weight: '400', subsets: ['latin'] })
const playfair = Playfair_Display({ weight: '400', subsets: ['latin'], variable: '--font-playfair' })

export const metadata = {
  title: 'Servizi di immigrazione | Lexycon Services & Consulting',
  description: 'Offriamo consulenza esperta in immigrazione in Italia. I nostri professionisti forniscono servizi di consulenza personalizzata per visti, permessi di soggiorno e cittadinanza italiana. Affidati a noi per un supporto affidabile e professionale nel tuo percorso di immigrazione. Contattaci ora per una consulenza personalizzata e sicura.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={playfair.variable}>
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
