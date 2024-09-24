/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  status: "suite" | "standard" | "deluxe";
  className: any;
  colorCategoryClassName: any;
  text: string;
}

export const BadgeRoomType = ({ status, className, colorCategoryClassName, text = "Deluxe" }: Props): JSX.Element => {
  return (
    <div className={`badge-room-type ${status} ${className}`}>
      <div className={`color-category ${colorCategoryClassName}`} />
      <div className="text-5">
        {status === "deluxe" && <>{text}</>}

        {status === "standard" && <>Standard</>}

        {status === "suite" && <>Suite</>}
      </div>
    </div>
  );
};

BadgeRoomType.propTypes = {
  status: PropTypes.oneOf(["suite", "standard", "deluxe"]),
  text: PropTypes.string,
};
