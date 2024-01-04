import Image from "next/image";

import { LinkButton } from "./LinkButton";

export function Hero() {
    return (
        <div className="relative sm:w-[94%] mx-auto px-6 py-16 sm:py-32 sm:rounded-[3rem] overflow-hidden">
            <Image src="/servizi-di-consulenza-immigrazione.jpg" alt="Consulenza immigrazione" fill className="object-cover"/>
            <div className="absolute w-full h-full top-0 left-0 bg-black/30"></div>
            <div className="relative max-w-[450px] mx-auto flex flex-col items-center gap-8 text-white">
                <h1 className="max-w-[250px] font-title text-4xl text-center">Lorem ipsum dolor sit amet</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac gravida felis. Nulla non congue neque. Suspendisse rhoncus consectetur tincidunt. Cras eleifend eros urna, a aliquam ligula pharetra eu.</p>
                <LinkButton href="#services">Scopri i nostri servizi</LinkButton>
            </div>
        </div>
    );
}