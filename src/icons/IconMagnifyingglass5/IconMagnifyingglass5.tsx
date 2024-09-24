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

export const IconMagnifyingglass5 = ({ color = "#6E6E6E", className }: Props): JSX.Element => {
  return (
    <svg
      className={`icon-magnifyingglass-5 ${className}`}
      fill="none"
      height="18"
      viewBox="0 0 18 18"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M8.15625 2.8125C5.20498 2.8125 2.8125 5.20498 2.8125 8.15625C2.8125 11.1075 5.20498 13.5 8.15625 13.5C11.1075 13.5 13.5 11.1075 13.5 8.15625C13.5 5.20498 11.1075 2.8125 8.15625 2.8125ZM1.6875 8.15625C1.6875 4.58366 4.58366 1.6875 8.15625 1.6875C11.7288 1.6875 14.625 4.58366 14.625 8.15625C14.625 11.7288 11.7288 14.625 8.15625 14.625C4.58366 14.625 1.6875 11.7288 1.6875 8.15625Z"
        fill={color}
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M11.9351 11.9351C12.1547 11.7154 12.5109 11.7154 12.7306 11.9351L16.1477 15.3523C16.3674 15.5719 16.3674 15.9281 16.1477 16.1477C15.9281 16.3674 15.5719 16.3674 15.3523 16.1477L11.9351 12.7306C11.7154 12.5109 11.7154 12.1547 11.9351 11.9351Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

IconMagnifyingglass5.propTypes = {
  color: PropTypes.string,
};
