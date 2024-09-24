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

export const IconChatteardropdots5 = ({ color = "#0D0E0D", className }: Props): JSX.Element => {
  return (
    <svg
      className={`icon-chatteardropdots-5 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M12.375 3.75C10.2864 3.75 8.28338 4.57968 6.80654 6.05653C5.32969 7.53338 4.5 9.53642 4.5 11.625V19.5H12.375C13.4092 19.5 14.4332 19.2963 15.3886 18.9006C16.3441 18.5048 17.2122 17.9247 17.9435 17.1935C18.6747 16.4622 19.2548 15.5941 19.6506 14.6386C20.0463 13.6832 20.25 12.6592 20.25 11.625C20.25 10.5908 20.0463 9.56681 19.6506 8.61137C19.2548 7.65593 18.6747 6.7878 17.9435 6.05653C17.2122 5.32527 16.3441 4.7452 15.3886 4.34945C14.4332 3.95369 13.4092 3.75 12.375 3.75ZM12.375 21H4.47596C4.28264 21.0018 4.09086 20.9652 3.91173 20.8924C3.73078 20.8189 3.56641 20.7098 3.4283 20.5717C3.29019 20.4336 3.18114 20.2692 3.10759 20.0883C3.03477 19.9091 2.99821 19.7174 3 19.524V11.625C3 9.1386 3.98772 6.75403 5.74588 4.99587C7.50403 3.23772 9.8886 2.25 12.375 2.25C13.6061 2.25 14.8252 2.49249 15.9627 2.96363C17.1001 3.43477 18.1336 4.12532 19.0041 4.99587C19.8747 5.86642 20.5652 6.89992 21.0364 8.03734C21.5075 9.17477 21.75 10.3939 21.75 11.625C21.75 12.8561 21.5075 14.0752 21.0364 15.2127C20.5652 16.3501 19.8747 17.3836 19.0041 18.2541C18.1336 19.1247 17.1001 19.8152 15.9627 20.2864C14.8252 20.7575 13.6061 21 12.375 21Z"
        fill={color}
        fillRule="evenodd"
      />
      <path
        className="path"
        d="M7.875 13.125C8.49632 13.125 9 12.6213 9 12C9 11.3787 8.49632 10.875 7.875 10.875C7.25368 10.875 6.75 11.3787 6.75 12C6.75 12.6213 7.25368 13.125 7.875 13.125Z"
        fill={color}
      />
      <path
        className="path"
        d="M12.375 13.125C12.9963 13.125 13.5 12.6213 13.5 12C13.5 11.3787 12.9963 10.875 12.375 10.875C11.7537 10.875 11.25 11.3787 11.25 12C11.25 12.6213 11.7537 13.125 12.375 13.125Z"
        fill={color}
      />
      <path
        className="path"
        d="M16.875 13.125C17.4963 13.125 18 12.6213 18 12C18 11.3787 17.4963 10.875 16.875 10.875C16.2537 10.875 15.75 11.3787 15.75 12C15.75 12.6213 16.2537 13.125 16.875 13.125Z"
        fill={color}
      />
    </svg>
  );
};

IconChatteardropdots5.propTypes = {
  color: PropTypes.string,
};
