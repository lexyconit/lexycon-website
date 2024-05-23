import { Hero } from './components/Hero'
import { ImmigrationBlock } from './components/ImmigrationBlock'
import { VisaBlock } from './components/VisaBlock'
import { OtherServices } from './components/OtherServices'
import { Phone } from './components/icons/Phone'

export default function Home() {
  return (
    <main className="">
      <Hero />
      <div id="services" className="w-[88%] max-w-[1000px] mx-auto">
        <h2 className="py-12 sm:py-20 font-title text-3xl sm:text-4xl text-center">I nostri servizi</h2>
        <ImmigrationBlock />
        <hr className="my-12 sm:my-20" />
        <VisaBlock />
        <hr className="my-12 sm:my-20" />
        <OtherServices />
      </div>
    </main>
  )
}
