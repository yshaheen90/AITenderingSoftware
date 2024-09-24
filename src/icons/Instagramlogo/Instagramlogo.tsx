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

export const Instagramlogo = ({ color = "#3A3D48", className }: Props): JSX.Element => {
  return (
    <svg
      className={`instagramlogo ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5ZM6.25 10C6.25 7.92893 7.92893 6.25 10 6.25C12.0711 6.25 13.75 7.92893 13.75 10C13.75 12.0711 12.0711 13.75 10 13.75C7.92893 13.75 6.25 12.0711 6.25 10Z"
        fill={color}
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M6.5625 3.4375C4.83661 3.4375 3.4375 4.83661 3.4375 6.5625V13.4375C3.4375 15.1634 4.83661 16.5625 6.5625 16.5625H13.4375C15.1634 16.5625 16.5625 15.1634 16.5625 13.4375V6.5625C16.5625 4.83661 15.1634 3.4375 13.4375 3.4375H6.5625ZM2.1875 6.5625C2.1875 4.14625 4.14625 2.1875 6.5625 2.1875H13.4375C15.8537 2.1875 17.8125 4.14625 17.8125 6.5625V13.4375C17.8125 15.8537 15.8537 17.8125 13.4375 17.8125H6.5625C4.14625 17.8125 2.1875 15.8537 2.1875 13.4375V6.5625Z"
        fill={color}
        fillRule="evenodd"
      />
      <path
        className="path"
        d="M14.0625 6.875C14.5803 6.875 15 6.45527 15 5.9375C15 5.41973 14.5803 5 14.0625 5C13.5447 5 13.125 5.41973 13.125 5.9375C13.125 6.45527 13.5447 6.875 14.0625 6.875Z"
        fill={color}
      />
    </svg>
  );
};

Instagramlogo.propTypes = {
  color: PropTypes.string,
};
