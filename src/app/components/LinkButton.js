export function LinkButton({ children, href }) {
    return (
        <a href={href} className="inline-block rounded-md bg-black px-5 py-3 bg-primary text-white hover:scale-110 transform-gpu transition-transform">
            {children}
        </a>
    );
}