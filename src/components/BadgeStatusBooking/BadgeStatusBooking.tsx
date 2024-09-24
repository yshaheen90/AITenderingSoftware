/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  status: "check-in" | "pending";
  className: any;
  text: string;
}

export const BadgeStatusBooking = ({ status, className, text = "Checked-In" }: Props): JSX.Element => {
  return (
    <div className={`badge-status-booking ${status} ${className}`}>
      <div className="text-6">
        {status === "check-in" && <>{text}</>}

        {status === "pending" && <>Pending</>}
      </div>
    </div>
  );
};

BadgeStatusBooking.propTypes = {
  status: PropTypes.oneOf(["check-in", "pending"]),
  text: PropTypes.string,
};
