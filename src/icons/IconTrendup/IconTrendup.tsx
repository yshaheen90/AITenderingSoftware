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

export const IconTrendup = ({ color = "#0D0E0D", className }: Props): JSX.Element => {
  return (
    <svg
      className={`icon-trendup ${className}`}
      fill="none"
      height="14"
      viewBox="0 0 14 14"
      width="14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M12.9969 3.19064C13.1677 3.3615 13.1677 3.6385 12.9969 3.80936L7.74686 9.05936C7.576 9.23021 7.299 9.23021 7.12814 9.05936L5.25 7.18122L1.62186 10.8094C1.451 10.9802 1.174 10.9802 1.00314 10.8094C0.832286 10.6385 0.832286 10.3615 1.00314 10.1906L4.94064 6.25314C5.1115 6.08229 5.3885 6.08229 5.55936 6.25314L7.4375 8.13128L12.3781 3.19064C12.549 3.01979 12.826 3.01979 12.9969 3.19064Z"
        fill={color}
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M8.75 3.5C8.75 3.25838 8.94588 3.0625 9.1875 3.0625H12.6875C12.9291 3.0625 13.125 3.25838 13.125 3.5V7C13.125 7.24162 12.9291 7.4375 12.6875 7.4375C12.4459 7.4375 12.25 7.24162 12.25 7V3.9375H9.1875C8.94588 3.9375 8.75 3.74162 8.75 3.5Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

IconTrendup.propTypes = {
  color: PropTypes.string,
};
