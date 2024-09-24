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

export const IconStatsCalendarblank3 = ({ color = "#0D0E0D", className }: Props): JSX.Element => {
  return (
    <svg
      className={`icon-stats-calendarblank-3 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 17 16"
      width="17"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M2.75 3C2.75 2.44772 3.19772 2 3.75 2H13.75C14.3023 2 14.75 2.44772 14.75 3V13C14.75 13.5523 14.3023 14 13.75 14H3.75C3.19772 14 2.75 13.5523 2.75 13V3ZM13.75 3H3.75V13H13.75V3Z"
        fill={color}
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M11.75 1C12.0261 1 12.25 1.22386 12.25 1.5V3.5C12.25 3.77614 12.0261 4 11.75 4C11.4739 4 11.25 3.77614 11.25 3.5V1.5C11.25 1.22386 11.4739 1 11.75 1Z"
        fill={color}
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M5.75 1C6.02614 1 6.25 1.22386 6.25 1.5V3.5C6.25 3.77614 6.02614 4 5.75 4C5.47386 4 5.25 3.77614 5.25 3.5V1.5C5.25 1.22386 5.47386 1 5.75 1Z"
        fill={color}
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M2.75 5.5C2.75 5.22386 2.97386 5 3.25 5H14.25C14.5261 5 14.75 5.22386 14.75 5.5C14.75 5.77614 14.5261 6 14.25 6H3.25C2.97386 6 2.75 5.77614 2.75 5.5Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

IconStatsCalendarblank3.propTypes = {
  color: PropTypes.string,
};
