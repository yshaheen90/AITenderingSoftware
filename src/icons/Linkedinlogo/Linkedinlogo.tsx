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

export const Linkedinlogo = ({ color = "#3A3D48", className }: Props): JSX.Element => {
  return (
    <svg
      className={`linkedinlogo ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M2.1875 3.4375C2.1875 2.74714 2.74714 2.1875 3.4375 2.1875H16.5625C17.2529 2.1875 17.8125 2.74714 17.8125 3.4375V16.5625C17.8125 17.2529 17.2529 17.8125 16.5625 17.8125H3.4375C2.74714 17.8125 2.1875 17.2529 2.1875 16.5625V3.4375ZM16.5625 3.4375H3.4375V16.5625H16.5625V3.4375Z"
        fill={color}
        fillRule="evenodd"
      />
      <path
        className="path"
        d="M7.8125 6.25C7.8125 6.76777 7.39277 7.1875 6.875 7.1875C6.35723 7.1875 5.9375 6.76777 5.9375 6.25C5.9375 5.73223 6.35723 5.3125 6.875 5.3125C7.39277 5.3125 7.8125 5.73223 7.8125 6.25Z"
        fill={color}
      />
      <path
        className="path"
        d="M7.5 8.75C7.5 8.40482 7.22018 8.125 6.875 8.125C6.52982 8.125 6.25 8.40482 6.25 8.75V13.75C6.25 14.0952 6.52982 14.375 6.875 14.375C7.22018 14.375 7.5 14.0952 7.5 13.75V8.75Z"
        fill={color}
      />
      <path
        className="path"
        d="M9.375 8.125C9.67191 8.125 9.92046 8.33203 9.98417 8.60961C10.4466 8.29607 10.9957 8.125 11.5625 8.125C12.3084 8.125 13.0238 8.42132 13.5512 8.94876C14.0787 9.47621 14.375 10.1916 14.375 10.9375V13.75C14.375 14.0952 14.0952 14.375 13.75 14.375C13.4048 14.375 13.125 14.0952 13.125 13.75V10.9375C13.125 10.5231 12.9604 10.1257 12.6674 9.83265C12.3743 9.53962 11.9769 9.375 11.5625 9.375C11.1481 9.375 10.7507 9.53962 10.4576 9.83265C10.1646 10.1257 10 10.5231 10 10.9375V13.75C10 14.0952 9.72018 14.375 9.375 14.375C9.02982 14.375 8.75 14.0952 8.75 13.75V8.75C8.75 8.40482 9.02982 8.125 9.375 8.125Z"
        fill={color}
      />
    </svg>
  );
};

Linkedinlogo.propTypes = {
  color: PropTypes.string,
};
