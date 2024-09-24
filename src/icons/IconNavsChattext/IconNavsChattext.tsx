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

export const IconNavsChattext = ({ color = "#A3A3A3", className }: Props): JSX.Element => {
  return (
    <svg
      className={`icon-navs-chattext ${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M9.75 25.1625L5.6375 28.6125C5.49181 28.7331 5.31493 28.8098 5.12737 28.8339C4.93981 28.858 4.74927 28.8284 4.57784 28.7486C4.40642 28.6688 4.26114 28.542 4.15886 28.3829C4.05658 28.2239 4.0015 28.0391 4 27.85V8C4 7.73478 4.10536 7.48043 4.29289 7.29289C4.48043 7.10536 4.73478 7 5 7H27C27.2652 7 27.5196 7.10536 27.7071 7.29289C27.8946 7.48043 28 7.73478 28 8V24C28 24.2652 27.8946 24.5196 27.7071 24.7071C27.5196 24.8946 27.2652 25 27 25H10.2125L9.75 25.1625Z"
        fill="#E7F68E"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H27C27.5304 6 28.0391 6.21071 28.4142 6.58579C28.7893 6.96086 29 7.46957 29 8V24C29 24.5304 28.7893 25.0391 28.4142 25.4142C28.0391 25.7893 27.5304 26 27 26H10.3831L10.2532 26.0456L6.27505 29.3829C5.98367 29.6241 5.62989 29.7776 5.25477 29.8258C4.87965 29.874 4.49856 29.8148 4.15571 29.6551C3.81286 29.4955 3.5223 29.2419 3.31775 28.9238C3.1132 28.6057 3.00303 28.2361 3.00003 27.8579L2.99997 27.85L3 8C3 7.46957 3.21071 6.96086 3.58579 6.58579ZM27 8L5 8V27.842L9.1073 24.3964C9.19952 24.319 9.30495 24.2589 9.41851 24.219L9.88101 24.0565C9.98752 24.0191 10.0996 24 10.2125 24H27V8Z"
        fill={color}
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M11 14C11 13.4477 11.4477 13 12 13H20C20.5523 13 21 13.4477 21 14C21 14.5523 20.5523 15 20 15H12C11.4477 15 11 14.5523 11 14Z"
        fill={color}
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M11 18C11 17.4477 11.4477 17 12 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H12C11.4477 19 11 18.5523 11 18Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

IconNavsChattext.propTypes = {
  color: PropTypes.string,
};
