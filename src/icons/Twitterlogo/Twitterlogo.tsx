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

export const Twitterlogo = ({ color = "#3A3D48", className }: Props): JSX.Element => {
  return (
    <svg
      className={`twitterlogo ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M3.39798 2.60867C3.68317 2.41422 4.072 2.48778 4.26645 2.77298L13.6415 16.523C13.8359 16.8082 13.7623 17.197 13.4771 17.3915C13.192 17.5859 12.8031 17.5123 12.6087 17.2271L3.23367 3.47715C3.03922 3.19195 3.11278 2.80312 3.39798 2.60867Z"
        fill={color}
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M6.52298 2.60867C6.80817 2.41422 7.197 2.48778 7.39145 2.77298L16.7665 16.523C16.9609 16.8082 16.8873 17.197 16.6021 17.3915C16.317 17.5859 15.9281 17.5123 15.7337 17.2271L6.35867 3.47715C6.16422 3.19195 6.23778 2.80312 6.52298 2.60867Z"
        fill={color}
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M16.6704 2.66254C16.415 2.43035 16.0197 2.44917 15.7875 2.70458L10.475 8.54833C10.2428 8.80374 10.2617 9.19903 10.5171 9.43122C10.7725 9.66341 11.1678 9.64459 11.4 9.38918L16.7125 3.54542C16.9446 3.29001 16.9258 2.89473 16.6704 2.66254ZM9.48292 10.5688C9.22751 10.3366 8.83223 10.3554 8.60003 10.6108L3.28753 16.4546C3.05534 16.71 3.07416 17.1053 3.32958 17.3375C3.58499 17.5697 3.98027 17.5508 4.21246 17.2954L9.52496 11.4517C9.75715 11.1963 9.73833 10.801 9.48292 10.5688Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

Twitterlogo.propTypes = {
  color: PropTypes.string,
};
