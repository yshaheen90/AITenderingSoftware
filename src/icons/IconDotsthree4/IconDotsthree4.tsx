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

export const IconDotsthree4 = ({ color = "#0D0E0D", className }: Props): JSX.Element => {
  return (
    <svg
      className={`icon-dotsthree-4 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M10 10.9375C10.5178 10.9375 10.9375 10.5178 10.9375 10C10.9375 9.48223 10.5178 9.0625 10 9.0625C9.48223 9.0625 9.0625 9.48223 9.0625 10C9.0625 10.5178 9.48223 10.9375 10 10.9375Z"
        fill={color}
      />
      <path
        className="path"
        d="M15 10.9375C15.5178 10.9375 15.9375 10.5178 15.9375 10C15.9375 9.48223 15.5178 9.0625 15 9.0625C14.4822 9.0625 14.0625 9.48223 14.0625 10C14.0625 10.5178 14.4822 10.9375 15 10.9375Z"
        fill={color}
      />
      <path
        className="path"
        d="M5 10.9375C5.51777 10.9375 5.9375 10.5178 5.9375 10C5.9375 9.48223 5.51777 9.0625 5 9.0625C4.48223 9.0625 4.0625 9.48223 4.0625 10C4.0625 10.5178 4.48223 10.9375 5 10.9375Z"
        fill={color}
      />
    </svg>
  );
};

IconDotsthree4.propTypes = {
  color: PropTypes.string,
};
