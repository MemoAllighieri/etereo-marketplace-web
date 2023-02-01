import { SvgIcon, SvgIconProps } from "@mui/material";
import React from "react";

const Decoration = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox="0 0 19 19" fill="none">
      <g clipPath="url(#clip0_6800_50475)">
        <path
          d="M3.81836 2.98024C3.96407 2.98024 4.08203 2.86214 4.08203 2.71657V1.08496C4.08203 1.07535 4.09 1.06738 4.09961 1.06738H11.6692C11.6788 1.06738 11.6868 1.07535 11.6868 1.08496V6.42336C11.6868 6.56906 11.8047 6.68703 11.9504 6.68703C12.096 6.68703 12.2141 6.56906 12.2141 6.42336V1.08496C12.2141 0.784485 11.9697 0.540039 11.6692 0.540039H4.09961C3.79913 0.540039 3.55469 0.784485 3.55469 1.08496V2.71657C3.55469 2.86214 3.67265 2.98024 3.81836 2.98024Z"
          fill="currentColor"
        />
        <path
          d="M16.189 8.68929C15.8691 8.30119 15.346 8.08696 14.8563 8.14436C14.3694 8.20108 13.9169 8.50568 13.6754 8.93895C13.6117 9.05307 13.5638 9.16348 13.5174 9.27032C13.488 9.33775 13.4605 9.40106 13.4314 9.45984C13.2567 9.30727 13.0925 9.13176 13.0407 8.9281C13.016 8.83142 13.0141 8.71854 13.012 8.59906C13.0095 8.46118 13.0068 8.30504 12.9669 8.14835C12.8939 7.86298 12.7001 7.60233 12.4351 7.43327C12.1454 7.24898 11.7814 7.17812 11.4405 7.23195V6.79428C11.4407 6.78865 11.4407 6.78288 11.4405 6.77725V1.57715C11.4405 1.43144 11.3224 1.31348 11.1769 1.31348H4.5918C4.44609 1.31348 4.32812 1.43144 4.32812 1.57715V10.0796C4.32812 10.2253 4.44609 10.3433 4.5918 10.3433H10.0519C10.1974 10.3433 10.3155 10.2253 10.3155 10.0796C10.3155 9.93404 10.1974 9.81593 10.0519 9.81593H4.85547V9.3817C5.21541 9.28172 5.59814 9.31537 6.0034 9.35107C6.1649 9.36536 6.33189 9.38005 6.4982 9.38582C7.2829 9.41246 7.9109 9.17186 8.31383 8.6897C8.46544 8.50815 8.58519 8.30957 8.70096 8.11758C8.8652 7.84526 9.02025 7.58804 9.2478 7.40759C9.59978 7.1284 10.1459 7.00604 10.9132 7.03516V7.44234C10.5182 7.72729 10.3581 8.23308 10.5403 8.67995C10.6565 8.96188 10.8875 9.15085 10.9744 9.34531C11.1245 9.68245 10.7859 10.0366 10.8025 10.5894H4.09961C4.09 10.5894 4.08203 10.5814 4.08203 10.5718V3.77126C4.08203 3.62555 3.96393 3.50758 3.81836 3.50758C3.67265 3.50758 3.55469 3.62555 3.55469 3.77126V10.5718C3.55469 10.8723 3.79913 11.1167 4.09961 11.1167H10.9173C11.1309 11.6243 11.5523 11.8267 11.603 12.2929C11.6409 12.6437 11.5865 12.9811 11.7736 13.452C11.7792 13.5433 11.7918 13.6342 11.8119 13.7236C11.8163 13.7438 11.8212 13.7639 11.8264 13.7839H11.5025C11.3246 13.7839 11.1554 13.8607 11.0384 13.9947C10.9214 14.1286 10.868 14.3065 10.8919 14.4828L11.3551 17.901C11.4044 18.2654 11.7189 18.54 12.0864 18.54H14.2412C14.6089 18.54 14.9232 18.2654 14.9726 17.901L15.4357 14.4828C15.4596 14.3065 15.4062 14.1286 15.2892 13.9947C15.0782 13.7533 14.7852 13.7868 14.7695 13.7839C14.7918 13.584 14.769 13.4057 14.7426 13.2089C14.631 12.3766 14.8628 12.5051 15.3471 12.2701C15.4783 12.2066 15.5329 12.0489 15.4694 11.9179C15.4058 11.7869 15.2481 11.7321 15.1171 11.7957C15.0612 11.8229 14.9991 11.8463 14.9334 11.8712C14.6788 11.9672 14.3302 12.0989 14.2193 12.5583C14.1575 12.8138 14.1907 13.061 14.2199 13.2791C14.2375 13.41 14.2541 13.5336 14.2507 13.6502C14.2493 13.6947 14.2448 13.7394 14.237 13.7839H13.6084C13.5507 12.4326 14.0446 11.0604 14.9541 10.0715C15.0527 9.96439 15.0457 9.79753 14.9384 9.69893C14.8313 9.60046 14.6645 9.60733 14.5659 9.71458C13.5682 10.7995 13.0238 12.3021 13.0807 13.7839H12.3801C12.3105 13.6055 12.3074 13.4904 12.2975 13.3719C12.2765 12.5631 12.8795 12.4391 12.9297 11.8656C12.97 11.4083 12.5757 11.0761 12.6017 10.8316C12.6302 10.5583 13.1617 10.4253 13.4369 10.2455C13.8768 9.95779 13.9475 9.53358 14.136 9.19589C14.2964 8.90791 14.5958 8.70563 14.9174 8.66814C15.2286 8.63188 15.5763 8.77512 15.7822 9.02492C15.9348 9.20976 15.9614 9.5079 15.8441 9.71829C15.6679 10.0344 15.2267 10.2429 15.3057 10.9924C15.3105 11.0372 15.3167 11.0832 15.3228 11.1303L15.3282 11.1707C15.3471 11.3152 15.4797 11.4166 15.6239 11.398C15.7682 11.3792 15.8699 11.2468 15.8511 11.1023L15.8456 11.0607C15.7565 10.392 16.0335 10.4618 16.3047 9.97496C16.5291 9.57245 16.4815 9.04373 16.189 8.68929V8.68929ZM14.9132 14.4119L14.45 17.8302C14.436 17.9341 14.3461 18.0127 14.2412 18.0127H12.0864C11.9815 18.0127 11.8917 17.9343 11.8777 17.8302C11.4142 14.2639 11.3802 14.4051 11.4357 14.3416C11.4909 14.2783 11.3627 14.3306 14.8251 14.3111C14.8788 14.3111 14.9203 14.3585 14.9132 14.4119V14.4119ZM8.92014 6.99437C8.61787 7.23415 8.43056 7.54492 8.24942 7.8454C8.13901 8.02832 8.03477 8.20122 7.90926 8.35146C7.61002 8.70947 7.142 8.87962 6.51633 8.85875C6.36417 8.85353 6.21146 8.84007 6.04968 8.82579C5.66063 8.79146 5.25963 8.7563 4.85547 8.83939V1.84082H10.9132V6.50768C10.0243 6.47733 9.37044 6.63731 8.92014 6.99437ZM12.5966 10.0789C12.5405 9.95093 12.4827 9.82115 12.4235 9.69055C12.3634 9.55803 12.2071 9.49925 12.0746 9.5594C11.9419 9.61955 11.8831 9.7757 11.9433 9.90836C12.0276 10.0946 12.1092 10.2789 12.1864 10.4582C12.1261 10.5576 12.0889 10.6648 12.0773 10.7764C12.0489 11.0431 12.1669 11.2605 12.2708 11.4523C12.3443 11.5878 12.4137 11.7156 12.4044 11.8194C12.3954 11.9227 12.3063 12.0345 12.2119 12.1527C12.1847 12.1868 12.1568 12.2218 12.1295 12.2581C12.1288 12.2508 12.1281 12.2435 12.1273 12.2362C12.0633 11.6471 11.6781 11.3914 11.4603 11.0251C11.0479 10.3324 11.7811 9.86043 11.4559 9.13066C11.333 8.85518 11.1078 8.67294 11.0283 8.48C11.0188 8.45679 11.0112 8.43275 11.0055 8.4079C10.9374 8.11401 11.1465 7.86957 11.3781 7.78896C11.6265 7.70216 11.9304 7.73705 12.1516 7.87794C12.3049 7.97572 12.4158 8.12184 12.4559 8.27881C12.4807 8.37576 12.4826 8.48865 12.4846 8.60812C12.4871 8.746 12.4899 8.90215 12.5297 9.05829C12.6151 9.39447 12.8405 9.64276 13.0741 9.84807C13.0102 9.88281 12.9406 9.91399 12.8679 9.94653C12.7794 9.98608 12.6878 10.0271 12.5966 10.0789V10.0789Z"
          fill="currentColor"
        />
        <path
          d="M8.00854 11.8545H3.6765C3.04712 11.8545 2.53516 12.3666 2.53516 12.9958C2.53516 13.6252 3.04712 14.1372 3.6765 14.1372H3.9631L3.72662 15.0706C3.72566 15.0736 3.72498 15.0766 3.72429 15.0798L3.37328 16.4648C3.37108 16.472 3.36929 16.4795 3.36765 16.4869L2.93066 18.2117C2.89482 18.3529 2.98024 18.4964 3.12155 18.5321C3.14325 18.5376 3.16495 18.5402 3.18651 18.5402C3.3042 18.5402 3.41159 18.4607 3.4418 18.3412L3.84679 16.7433L5.84245 16.0576L7.83839 16.7434L8.24324 18.3412C8.27345 18.4607 8.38084 18.5402 8.49867 18.5402C8.5201 18.5402 8.54193 18.5376 8.56363 18.5321C8.7048 18.4963 8.79022 18.3529 8.75452 18.2117L8.31589 16.481C8.31506 16.4775 8.31424 16.474 8.31328 16.4707L7.72194 14.1372H8.00854C8.63792 14.1372 9.14989 13.6252 9.14989 12.9958C9.14989 12.3666 8.63792 11.8545 8.00854 11.8545V11.8545ZM4.00142 16.1326L4.16649 15.4816L5.03111 15.7788L4.00142 16.1326ZM6.65379 15.7788L7.51855 15.4816L7.68349 16.1326L6.65379 15.7788ZM7.38864 14.9687L5.84245 15.4999L4.2964 14.9687L4.50706 14.1372H7.17784L7.38864 14.9687ZM8.00854 13.6098H4.30684C4.30368 13.6097 4.30066 13.6098 4.29764 13.6098H3.6765C3.33784 13.6098 3.0625 13.3344 3.0625 12.9958C3.0625 12.6573 3.33784 12.3818 3.6765 12.3818H8.00854C8.34706 12.3818 8.62254 12.6573 8.62254 12.9958C8.62254 13.3344 8.34706 13.6098 8.00854 13.6098Z"
          fill="currentColor"
        />
        <path
          d="M6.49033 2.19531C5.91203 2.19531 5.44141 2.66594 5.44141 3.24423C5.44141 3.82253 5.91203 4.29301 6.49033 4.29301C7.06862 4.29301 7.53911 3.82253 7.53911 3.24423C7.53911 2.66594 7.06862 2.19531 6.49033 2.19531ZM6.49033 3.76567C6.20276 3.76567 5.96875 3.5318 5.96875 3.24423C5.96875 2.95667 6.20276 2.72266 6.49033 2.72266C6.77789 2.72266 7.01176 2.95667 7.01176 3.24423C7.01176 3.5318 6.77789 3.76567 6.49033 3.76567Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_6800_50475">
          <rect
            width="18"
            height="18"
            fill="white"
            transform="translate(0.496094 0.540039)"
          />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

export default Decoration;