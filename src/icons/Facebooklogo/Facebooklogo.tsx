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

export const Facebooklogo = ({ color = "#3A3D48", className }: Props): JSX.Element => {
  return (
    <svg
      className={`facebooklogo ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M1.875 10C1.875 14.4866 5.51159 18.1239 9.99796 18.125H9.99999C14.4873 18.125 18.125 14.4873 18.125 10C18.125 5.51269 14.4873 1.875 10 1.875C5.51269 1.875 1.875 5.51269 1.875 10ZM10 3.125C6.20304 3.125 3.125 6.20304 3.125 10C3.125 13.5863 5.87093 16.5312 9.37499 16.847V11.875H7.5C7.15482 11.875 6.875 11.5952 6.875 11.25C6.875 10.9048 7.15482 10.625 7.5 10.625H9.37499V8.74282C9.37849 8.43736 9.43853 8.09443 9.56254 7.79328C9.68782 7.48902 9.87211 7.21259 10.1048 6.97993C10.3374 6.74726 10.6139 6.56297 10.9181 6.43769C11.2219 6.31259 11.5475 6.2488 11.8761 6.25H13.1248C13.47 6.25 13.7498 6.52982 13.7498 6.875C13.7498 7.22018 13.47 7.5 13.1248 7.5H11.8722C11.7082 7.49931 11.5457 7.5311 11.3941 7.59354C11.2424 7.65599 11.1046 7.74784 10.9887 7.86381C10.8727 7.97978 10.7808 8.11756 10.7184 8.26921C10.6625 8.40503 10.6273 8.58715 10.625 8.75394V10.625H12.5C12.8452 10.625 13.125 10.9048 13.125 11.25C13.125 11.5952 12.8452 11.875 12.5 11.875H10.625V16.847C14.1291 16.5312 16.875 13.5863 16.875 10C16.875 6.20304 13.797 3.125 10 3.125Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

Facebooklogo.propTypes = {
  color: PropTypes.string,
};
