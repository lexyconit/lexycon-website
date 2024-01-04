export function Marker(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={26}
            fill="none"
            {...props}
        >
            <path
            fill="#6F7870"
            fillOpacity={0.35}
            d="M8.748 25.475C1.37 14.78 0 13.681 0 9.75 0 4.365 4.365 0 9.75 0s9.75 4.365 9.75 9.75c0 3.931-1.37 5.029-8.748 15.725-.484.7-1.52.7-2.004 0ZM9.75 13.812a4.062 4.062 0 1 0 0-8.124 4.062 4.062 0 0 0 0 8.125Z"
            />
        </svg>
    );
}
