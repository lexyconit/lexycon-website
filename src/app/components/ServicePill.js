export function ServicePill({ children }) {
    return (
        <span className="px-4 py-2 rounded-lg bg-secondary/40 leading-tight max-[419px]:text-xs text-sm sm:text-base">
            {children}
        </span>
    );
}