export function Phone({ color = '#6F7870', opacity = 0.35, ...restProps }) {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width={21}
        height={21}
        fill="none"
        {...restProps}
      >
        <path
          fill={color}
          fillOpacity={opacity}
          d="m20.401 14.84-4.594-1.97a.984.984 0 0 0-1.148.284l-2.035 2.485a15.203 15.203 0 0 1-7.267-7.268l2.485-2.034a.982.982 0 0 0 .283-1.148L6.157.595a.991.991 0 0 0-1.128-.57l-4.266.984a.984.984 0 0 0-.763.96C0 12.488 8.527 21 19.032 21a.984.984 0 0 0 .96-.763l.984-4.266a.996.996 0 0 0-.575-1.132Z"
        />
      </svg>
    );
}
