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

export const IconNavsMoney = ({ color = "#A3A3A3", className }: Props): JSX.Element => {
  return (
    <svg
      className={`icon-navs-money ${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M16 20C18.2091 20 20 18.2091 20 16C20 13.7909 18.2091 12 16 12C13.7909 12 12 13.7909 12 16C12 18.2091 13.7909 20 16 20Z"
        fill="#E7F68E"
      />
      <path
        className="path"
        d="M29 8H22L30 15V9C30 8.73478 29.8946 8.48043 29.7071 8.29289C29.5196 8.10536 29.2652 8 29 8Z"
        fill="#E7F68E"
      />
      <path
        className="path"
        d="M29 24C29.2652 24 29.5196 23.8946 29.7071 23.7071C29.8946 23.5196 30 23.2652 30 23V17L22 24H29Z"
        fill="#E7F68E"
      />
      <path
        className="path"
        d="M2 9V15L10 8H3C2.73478 8 2.48043 8.10536 2.29289 8.29289C2.10536 8.48043 2 8.73478 2 9Z"
        fill="#E7F68E"
      />
      <path
        className="path"
        d="M2 23C2 23.2652 2.10536 23.5196 2.29289 23.7071C2.48043 23.8946 2.73478 24 3 24H10L2 17V23Z"
        fill="#E7F68E"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11ZM13 16C13 14.3431 14.3431 13 16 13C17.6569 13 19 14.3431 19 16C19 17.6569 17.6569 19 16 19C14.3431 19 13 17.6569 13 16Z"
        fill={color}
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M3 7C1.89543 7 1 7.89543 1 9V16.9996C1 16.9996 1 16.9996 1 16.9996V23C1 24.1046 1.89543 25 3 25H9.99227C9.99716 25 10.0021 25 10.0069 25H29C30.1046 25 31 24.1046 31 23V9C31 7.89543 30.1046 7 29 7H3ZM10.3757 23H21.6243L29 16.5463V15.4538L21.6243 9H10.3758L3 15.4538V16.5462L10.3757 23ZM3 19.2038V23H7.33855L3 19.2038ZM3 12.7963L7.33858 9H3V12.7963ZM29 19.2038V23H24.6615L29 19.2038ZM29 9H24.6614L29 12.7962V9Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

IconNavsMoney.propTypes = {
  color: PropTypes.string,
};
