/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  color: string;
  className: any;
}

export const IconNavsCalendar = ({ color = "#A3A3A3", className }: Props): JSX.Element => {
  return (
    <svg
      className={`icon-navs-calendar ${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M5 11H27V6C27 5.73478 26.8946 5.48043 26.7071 5.29289C26.5196 5.10536 26.2652 5 26 5H6C5.73478 5 5.48043 5.10536 5.29289 5.29289C5.10536 5.48043 5 5.73478 5 6V11Z"
        fill="#E7F68E"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M23 3C23 2.44772 22.5523 2 22 2C21.4477 2 21 2.44772 21 3V4H11V3C11 2.44772 10.5523 2 10 2C9.44772 2 9 2.44772 9 3V4H6C4.89543 4 4 4.89543 4 6V26C4 27.1046 4.89543 28 6 28H26C27.1046 28 28 27.1046 28 26V6C28 4.89543 27.1046 4 26 4H23V3ZM26 10V6H23V7C23 7.55228 22.5523 8 22 8C21.4477 8 21 7.55228 21 7V6H11V7C11 7.55228 10.5523 8 10 8C9.44772 8 9 7.55228 9 7V6H6V10H26ZM6 12H26V26H6V12Z"
        fill={color}
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M10.5 16C10.5 15.4477 10.9477 15 11.5 15H15C15.3844 15 15.7348 15.2203 15.9013 15.5668C16.0678 15.9133 16.021 16.3245 15.7809 16.6247L14.6741 18.0082C14.9983 18.2256 15.2779 18.5048 15.4962 18.8308C15.7709 19.2411 15.9401 19.7128 15.9888 20.2041C16.0375 20.6954 15.9642 21.1912 15.7753 21.6474C15.5865 22.1035 15.288 22.5061 14.9063 22.8192C14.5246 23.1324 14.0716 23.3465 13.5873 23.4426C13.103 23.5387 12.6025 23.5138 12.1301 23.3701C11.6578 23.2264 11.2282 22.9683 10.8795 22.6188C10.4895 22.2278 10.4903 21.5946 10.8812 21.2045C11.2722 20.8145 11.9054 20.8153 12.2955 21.2062C12.4117 21.3228 12.5549 21.4088 12.7123 21.4567C12.8698 21.5046 13.0366 21.5129 13.198 21.4809C13.3595 21.4488 13.5105 21.3775 13.6377 21.2731C13.765 21.1687 13.8645 21.0345 13.9274 20.8824C13.9903 20.7304 14.0148 20.5651 13.9985 20.4014C13.9823 20.2376 13.9259 20.0804 13.8343 19.9436C13.7428 19.8069 13.6189 19.6948 13.4736 19.6174C13.3284 19.5401 13.1663 19.4997 13.0017 19.5C12.617 19.5007 12.266 19.2806 12.0991 18.934C11.9321 18.5874 11.9788 18.1757 12.2191 17.8753L12.9194 17H11.5C10.9477 17 10.5 16.5523 10.5 16Z"
        fill={color}
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M20.4472 15.1056C20.786 15.275 21 15.6212 21 16V22.5C21 23.0523 20.5523 23.5 20 23.5C19.4477 23.5 19 23.0523 19 22.5V18L18.6 18.3C18.1582 18.6314 17.5314 18.5418 17.2 18.1C16.8686 17.6582 16.9582 17.0314 17.4 16.7L19.4 15.2C19.703 14.9727 20.1084 14.9362 20.4472 15.1056Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

IconNavsCalendar.propTypes = {
  color: PropTypes.string,
};
