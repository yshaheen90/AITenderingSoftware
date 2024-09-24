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

export const IconNavsSquaresfour2 = ({ color = "#0D0E0D", className }: Props): JSX.Element => {
  return (
    <svg
      className={`icon-navs-squaresfour-2 ${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M5 6C5 5.44772 5.44772 5 6 5H14C14.5523 5 15 5.44772 15 6V14C15 14.5523 14.5523 15 14 15H6C5.44772 15 5 14.5523 5 14V6ZM7 7V13H13V7H7Z"
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
        d="M5 18C5 17.4477 5.44772 17 6 17H14C14.5523 17 15 17.4477 15 18V26C15 26.5523 14.5523 27 14 27H6C5.44772 27 5 26.5523 5 26V18ZM7 19V25H13V19H7Z"
        fill={color}
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M17 18C17 17.4477 17.4477 17 18 17H26C26.5523 17 27 17.4477 27 18V26C27 26.5523 26.5523 27 26 27H18C17.4477 27 17 26.5523 17 26V18ZM19 19V25H25V19H19Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

IconNavsSquaresfour2.propTypes = {
  color: PropTypes.string,
};
