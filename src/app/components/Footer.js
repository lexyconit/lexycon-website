import { LinkButton } from "./LinkButton";

import { Envelope } from "./icons/Envelope";
import { Instagram } from "./icons/Instagram";
import { Marker } from "./icons/Marker";
import { Phone } from "./icons/Phone";
import { Tiktok } from "./icons/Tiktok";
import { Whatsapp } from "./icons/Whatsapp";

export function Footer() {
    return (
        <footer>
            <div className="relative w-[94%] mx-auto bg-[#eeeee8] px-[3%] py-12 rounded-[3rem] bg-stone-200 overflow-hidden">
                <div className="max-w-[1000px] mx-auto">
                    <div className="flex justify-between items-end">
                        <div className="w-1/2 flex flex-col gap-6 items-start">
                            <h2 className="font-title text-4xl">Contattaci</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac gravida felis. Nulla non congue neque. Suspendisse rhoncus consectetur tincidunt. Cras eleifend eros urna, a aliquam ligula pharetra eu.</p>
                            <LinkButton href="tel:+393513662731">Chiamaci ora</LinkButton>
                        </div>
                        <div>
                            <div className="flex flex-col gap-2 mb-10">
                                <p className="flex gap-5 items-center"><Marker /> <span>Via Fermi 67, 25030, Urago d’oglio</span></p>
                                <p className="flex gap-5 items-center"><Envelope /> <a href="mailto:info@lexycon.it">info@lexycon.it</a></p>
                                <p className="flex gap-5 items-center"><Phone /> <a href="tel:+393513662731">+39 351 3662731</a></p>
                            </div>
                            <div className="flex gap-4 mb-3">
                                <span>Seguici sui social</span>
                                <a href="" rel="nofollow" target="_blank"><Instagram /></a>
                                <a href="" rel="nofollow" target="_blank"><Tiktok /></a>
                                <a href="" rel="nofollow" target="_blank"><Whatsapp /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-8 text-center">
                &copy; {new Date().getFullYear()} Lexycon Services & consulting  - P.Iva xxxxxxxxxxx – Capitale Sociale € 5.000.000,00 i.v.
            </div>
        </footer>
    );
}