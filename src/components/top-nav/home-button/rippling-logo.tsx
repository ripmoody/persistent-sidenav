type Props = {
  size?: number;
};

export const RipplingLogo = ({ size = 32 }: Props) => (
  <svg
    viewBox="0 0 32 32"
    height={size}
    width={size}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.87814 11.9905C6.87814 10.0106 5.8749 8.37442 4 7H8.35833C9.88785 8.17807 10.8253 9.97791 10.8253 11.9905C10.8253 14.003 9.88785 15.8028 8.35833 16.9809C9.77273 17.5699 10.5786 19.0098 10.5786 21.0714V24.9984H6.63144V21.0714C6.63144 19.108 5.69399 17.7336 4 16.9809C5.8749 15.6065 6.87814 13.9703 6.87814 11.9905ZM15.4303 11.9905C15.4303 10.0106 14.4271 8.37442 12.5522 7H16.9105C18.44 8.17807 19.3775 9.97791 19.3775 11.9905C19.3775 14.003 18.44 15.8028 16.9105 16.9809C18.3249 17.5699 19.1308 19.0098 19.1308 21.0714V24.9984H15.1836V21.0714C15.1836 19.108 14.2462 17.7336 12.5522 16.9809C14.4271 15.6065 15.4303 13.9703 15.4303 11.9905ZM23.9842 11.9905C23.9842 10.0106 22.9809 8.37442 21.106 7H25.4643C26.9939 8.17807 27.9313 9.97791 27.9313 11.9905C27.9313 14.003 26.9939 15.8028 25.4643 16.9809C26.8787 17.5699 27.6846 19.0098 27.6846 21.0714V24.9984H23.7375V21.0714C23.7375 19.108 22.8 17.7336 21.106 16.9809C22.9809 15.6065 23.9842 13.9703 23.9842 11.9905Z"
      fill="#FFF"
    />
  </svg>
);
