import Image from "next/image";

export function ServiceCard({ label, image }) {
    return (
        <div className="card">
            <Image src={image.source} alt={image.alt} className="object-cover" fill />
            <div
                style={{ background: 'linear-gradient(360deg, rgba(51, 51, 51, 0.5) 43.75%, rgba(134, 114, 73, 0.490741) 72.4%, rgba(213, 175, 94, 0) 100%)' }}
                className="absolute w-full h-full top-0 left-0"
            />
            <span className="relative text-sm sm:text-lg text-white leading-tight">{label}</span>
        </div>
    );
}