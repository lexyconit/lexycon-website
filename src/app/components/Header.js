import Image from "next/image";

export function Header() {
    return (
        <div className="">
            <menu className="max-w-[88%] mx-auto flex justify-center sm:justify-between items-center pt-4 pb-5">
                <li>
                    <Image
                        src="/logo-lexycon-v1.svg"
                        alt="Logo Lexycon Services & Consulting"
                        width="171"
                        height="83"
                    />
                </li>
                <li className="hidden sm:block">
                    <div className="inline-flex items-center gap-3 bg-primary/20 py-2 md:py-3 px-3 md:px-5 rounded-md text-sm md:text-base">
                        <span>Contattaci:</span>
                        <a
                            href="mailto:info@lexycon.it"
                            className="text-primary"
                        >
                            info@lexycon.it
                        </a>
                        <span className="w-px h-5 bg-gray-950/10" />
                        <a href="tel:+393513662731" className="text-primary">+39 351 3662731</a>
                    </div>
                </li>
            </menu>
        </div>
    );
}