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

export const IconPlus1 = ({ color = "#0F1113", className }: Props): JSX.Element => {
  return (
    <svg
      className={`icon-plus-1 ${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M6 16C6 15.4477 6.3731 15 6.83333 15H25.1667C25.6269 15 26 15.4477 26 16C26 16.5523 25.6269 17 25.1667 17H6.83333C6.3731 17 6 16.5523 6 16Z"
        fill={color}
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M16 6C16.5523 6 17 6.3731 17 6.83333V25.1667C17 25.6269 16.5523 26 16 26C15.4477 26 15 25.6269 15 25.1667V6.83333C15 6.3731 15.4477 6 16 6Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

IconPlus1.propTypes = {
  color: PropTypes.string,
};
