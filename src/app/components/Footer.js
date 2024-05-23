'use client';

import { useEffect } from "react";
import { LinkButton } from "./LinkButton";

import { Envelope } from "./icons/Envelope";
import { Instagram } from "./icons/Instagram";
import { Marker } from "./icons/Marker";
import { Phone } from "./icons/Phone";
import { Tiktok } from "./icons/Tiktok";
import { Whatsapp } from "./icons/Whatsapp";

export function Footer() {
    useEffect(() => {
        const onEntry = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    document.querySelector('[title="Chiamaci ora"]').classList.add('hidden');
                } else {
                    document.querySelector('[title="Chiamaci ora"]').classList.remove('hidden');
                }
            });
        };

        let observer = new IntersectionObserver(onEntry);
        let target = document.querySelector('footer');
        observer.observe(target);

        return () => {
            observer.disconnect();
        }
    }, []);

    return (
        <footer>
            <a
                className="z-10 block sm:hidden fixed bottom-4 right-4 rounded-full bg-secondary p-4 shadow-lg"
                href="tel:+393513662731"
                title="Chiamaci ora"
            >
                <Phone color="white" opacity={1} />
            </a>
            <div className="relative sm:w-[94%] mx-auto bg-[#eeeee8] px-[6%] sm:px-[3%] py-12 sm:rounded-[3rem] bg-stone-200 overflow-hidden">
                <div className="max-w-[1000px] mx-auto">
                    <div className="flex justify-between items-end flex-wrap sm:flex-nowrap">
                        <div className="sm:w-1/2 flex flex-col gap-6 items-start mb-10 sm:mb-0">
                            <h2 className="font-title text-2xl sm:text-4xl">Contattaci</h2>
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
                                <a
                                    href="https://www.instagram.com/lexycon.it"
                                    target="_blank"
                                    rel="nofollow"
                                    title="Instagram"
                                >
                                    <Instagram />
                                </a>
                                <a
                                    href=""
                                    target="_blank"
                                    rel="nofollow"
                                    title="Tiktok"
                                >
                                    <Tiktok />
                                </a>
                                <a
                                    href="https://wa.me/393513662731"
                                    target="_blank"
                                    rel="nofollow"
                                    title="Whatsapp"
                                >
                                    <Whatsapp />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-sm sm:text-base px-[6%] py-5 sm:py-8 text-center">
                &copy; {new Date().getFullYear()} Lexycon Services & consulting - P.Iva xxxxxxxxxxx - Capitale Sociale € 5.000.000,00 i.v. - <a href="https://www.instagram.com/sukhj0t/" target="_blank" rel="nofollow">Credits</a>
            </div>
        </footer>
    );
}