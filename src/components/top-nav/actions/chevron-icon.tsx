type Props = {
  size?: number;
};

export const ChevronIcon = ({ size = 24 }: Props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M17.5928 10.0928L16.5321 9.03215L12.1874 13.3768L7.84277 9.03215L6.78211 10.0928L12.1874 15.4981L17.5928 10.0928Z"
      fill="white"
    />
  </svg>
);
