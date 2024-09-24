/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconCaretdown19 } from "../../icons/IconCaretdown19";
import { IconStatsCalendarblank3 } from "../../icons/IconStatsCalendarblank3";
import "./style.css";

interface Props {
  text: string;
  size: "large" | "medium" | "small";
  withIcon: "left-right" | "no-icon" | "right" | "left";
  type: "primary" | "secondary" | "transparent" | "ghost";
  className: any;
}

export const Button = ({ text = "Button", size, withIcon, type, className }: Props): JSX.Element => {
  return (
    <div className={`button ${type} ${withIcon} size-3-${size} ${className}`}>
      <div className="icon-left">
        {["left-right", "left"].includes(withIcon) && (
          <IconStatsCalendarblank3
            className="instance-node"
            color={["ghost", "transparent"].includes(type) ? "#6E6E6E" : "#0D0E0D"}
          />
        )}

        {["no-icon", "right"].includes(withIcon) && <div className="label-2">{text}</div>}
      </div>
      {["left-right", "left", "right"].includes(withIcon) && (
        <div className="text-2">
          {["left-right", "left"].includes(withIcon) && <div className="label-3">{text}</div>}

          {withIcon === "right" && (
            <IconCaretdown19
              className="instance-node"
              color={["ghost", "transparent"].includes(type) ? "#6E6E6E" : "#0D0E0D"}
            />
          )}
        </div>
      )}

      {withIcon === "left-right" && (
        <div className="icon-caretdown-wrapper">
          <IconCaretdown19
            className="instance-node"
            color={["ghost", "transparent"].includes(type) ? "#6E6E6E" : "#0D0E0D"}
          />
        </div>
      )}
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  size: PropTypes.oneOf(["large", "medium", "small"]),
  withIcon: PropTypes.oneOf(["left-right", "no-icon", "right", "left"]),
  type: PropTypes.oneOf(["primary", "secondary", "transparent", "ghost"]),
};
