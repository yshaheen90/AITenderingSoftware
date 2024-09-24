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

export const IconNavsSquaresfourActive = ({ color = "#0D0E0D", className }: Props): JSX.Element => {
  return (
    <svg
      className={`icon-navs-squaresfour-active ${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="path" d="M14 6H6V14H14V6Z" fill="#E7F68E" />
      <path className="path" d="M26 6H18V14H26V6Z" fill="#E7F68E" />
      <path className="path" d="M14 18H6V26H14V18Z" fill="#E7F68E" />
      <path className="path" d="M26 18H18V26H26V18Z" fill="#E7F68E" />
      <path
        className="path"
        clipRule="evenodd"
        d="M6 5C5.44772 5 5 5.44772 5 6V14C5 14.5523 5.44772 15 6 15H14C14.5523 15 15 14.5523 15 14V6C15 5.44772 14.5523 5 14 5H6ZM7 13V7H13V13H7Z"
        fill={color}
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M18 17C17.4477 17 17 17.4477 17 18V26C17 26.5523 17.4477 27 18 27H26C26.5523 27 27 26.5523 27 26V18C27 17.4477 26.5523 17 26 17H18ZM19 25V19H25V25H19Z"
        fill={color}
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M17 6C17 5.44772 17.4477 5 18 5H26C26.5523 5 27 5.44772 27 6V14C27 14.5523 26.5523 15 26 15H18C17.4477 15 17 14.5523 17 14V6ZM19 7V13H25V7H19Z"
        fill={color}
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M6 17C5.44772 17 5 17.4477 5 18V26C5 26.5523 5.44772 27 6 27H14C14.5523 27 15 26.5523 15 26V18C15 17.4477 14.5523 17 14 17H6ZM7 25V19H13V25H7Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

IconNavsSquaresfourActive.propTypes = {
  color: PropTypes.string,
};
