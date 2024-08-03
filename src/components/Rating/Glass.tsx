interface Props {
  point: number;
}

function Glass({ point }: Props) {
  const stopOffset = point * 100;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
    >
      <path
        d='M8.347 20.5V19h2.904v-4.312c-1.434-.227-2.593-.872-3.48-1.937C6.887 11.686 6.444 10.436 6.444 9V3.5h11.115V9c0 1.436-.443 2.686-1.329 3.751-.886 1.065-2.045 1.71-3.478 1.938V19h2.903v1.5H8.347ZM12 13.25a3.74 3.74 0 0 0 2.594-1.004 4.282 4.282 0 0 0 1.371-2.496H8.035a4.282 4.282 0 0 0 1.371 2.496 3.74 3.74 0 0 0 2.595 1.004Zm-4.058-5h8.115V5H7.943v3.25Z'
        fill={`url(#gradient-${stopOffset})`}
        fillRule='evenodd'
        clipRule='evenodd'
      />
      <defs>
        <linearGradient
          id={`gradient-${stopOffset}`}
          x1='0%'
          y1='0%'
          x2='100%'
          y2='0%'
        >
          <stop offset={`${stopOffset}%`} stopColor='#FF8D00' />
          <stop offset={`${stopOffset}%`} stopColor='#ADAEB1' />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Glass;
