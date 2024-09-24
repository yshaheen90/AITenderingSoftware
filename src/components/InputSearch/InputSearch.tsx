/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconMagnifyingglass5 } from "../../icons/IconMagnifyingglass5";
import "./style.css";

interface Props {
  placeholder: string;
  size: "large" | "medium" | "small";
  className: any;
}

export const InputSearch = ({ placeholder = "Search placeholder", size, className }: Props): JSX.Element => {
  return (
    <div className={`input-search ${size} ${className}`}>
      <div className="icon">
        <IconMagnifyingglass5
          className={`${size === "medium" ? "class" : size === "small" ? "class-2" : "class-3"}`}
          color="#6E6E6E"
        />
      </div>
      <div className="div-wrapper">
        <div className="div">{placeholder}</div>
      </div>
    </div>
  );
};

InputSearch.propTypes = {
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(["large", "medium", "small"]),
};
