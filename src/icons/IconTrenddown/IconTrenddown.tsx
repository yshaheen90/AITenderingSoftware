/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const IconTrenddown = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`icon-trenddown ${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M2.29289 7.29289C2.68342 6.90237 3.31658 6.90237 3.70711 7.29289L12 15.5858L16.2929 11.2929C16.6834 10.9024 17.3166 10.9024 17.7071 11.2929L29.7071 23.2929C30.0976 23.6834 30.0976 24.3166 29.7071 24.7071C29.3166 25.0976 28.6834 25.0976 28.2929 24.7071L17 13.4142L12.7071 17.7071C12.3166 18.0976 11.6834 18.0976 11.2929 17.7071L2.29289 8.70711C1.90237 8.31658 1.90237 7.68342 2.29289 7.29289Z"
        fill="#0D0E0D"
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M29 15C29.5523 15 30 15.4477 30 16V24C30 24.5523 29.5523 25 29 25H21C20.4477 25 20 24.5523 20 24C20 23.4477 20.4477 23 21 23H28V16C28 15.4477 28.4477 15 29 15Z"
        fill="#0D0E0D"
        fillRule="evenodd"
      />
    </svg>
  );
};
