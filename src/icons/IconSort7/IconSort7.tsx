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

export const IconSort7 = ({ color = "#0D0E0D", className }: Props): JSX.Element => {
  return (
    <svg
      className={`icon-sort-7 ${className}`}
      fill="none"
      height="14"
      viewBox="0 0 15 14"
      width="15"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M5.00314 8.00314C5.174 7.83229 5.451 7.83229 5.62186 8.00314L7.5 9.88128L9.37814 8.00314C9.549 7.83229 9.826 7.83229 9.99686 8.00314C10.1677 8.174 10.1677 8.451 9.99686 8.62186L7.80936 10.8094C7.6385 10.9802 7.3615 10.9802 7.19064 10.8094L5.00314 8.62186C4.83229 8.451 4.83229 8.174 5.00314 8.00314Z"
        fill={color}
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M5.00314 5.99686C5.174 6.16771 5.451 6.16771 5.62186 5.99686L7.5 4.11872L9.37814 5.99686C9.549 6.16771 9.826 6.16771 9.99686 5.99686C10.1677 5.826 10.1677 5.549 9.99686 5.37814L7.80936 3.19064C7.6385 3.01979 7.3615 3.01979 7.19064 3.19064L5.00314 5.37814C4.83229 5.549 4.83229 5.826 5.00314 5.99686Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

IconSort7.propTypes = {
  color: PropTypes.string,
};
