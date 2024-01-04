import Image from "next/image";

export function ServiceCard({ label, image }) {
    return (
        <div className="relative flex items-end px-6 py-4 aspect-[3/2] rounded-xl overflow-hidden" style={{ boxShadow: '0px 0px 29.5px -6px #D5AF5E'}}>
            <Image src={image.source} alt={image.alt} className="object-cover" fill />
            <div
                // style={{ background: 'linear-gradient(360deg, rgba(0, 0, 0, 0.5) 43.75%, rgba(94, 77, 42, 0.42) 75%, rgba(213, 175, 94, 0) 100%)' }}
                style={{ background: 'linear-gradient(360deg, rgba(51, 51, 51, 0.5) 43.75%, rgba(134, 114, 73, 0.490741) 72.4%, rgba(213, 175, 94, 0) 100%)' }}
                className="absolute w-full h-full top-0 left-0"
            />
            <span className="relative text-lg text-white leading-tight">{label}</span>
        </div>
    );
}