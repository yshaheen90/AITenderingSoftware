/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconChatteardropdots5 } from "../../icons/IconChatteardropdots5";
import "./style.css";

interface Props {
  showBadge: boolean;
  size: "large" | "x-small" | "medium" | "small";
  type: "gost" | "secondary" | "transparent" | "default";
  className: any;
  icon?: JSX.Element;
  divRedClassName: any;
  override?: JSX.Element;
  
}

export const ButtonIcon = ({

  showBadge = true,
  size,
  type,
  className,
  icon = <IconChatteardropdots5 className="icon-chatteardropdots-5" color="#0D0E0D" />,
  divRedClassName,
  override = <IconChatteardropdots5 className="icon-chatteardropdots-9" color="#6E6E6E" />,



}: Props): JSX.Element => {
  return (
    <div className={`button-icon size-1-${size} type-${type} ${className}`}>
      {["large", "medium"].includes(size) && (
        <>
          {icon}

          <>
            {showBadge && (
              <div className="badge">
                <div className={`div-red ${divRedClassName}`} />
              </div>
            )}
          </>
        </>
      )}

      {["small", "x-small"].includes(size) && <>{override}</>}
    </div>
  );
};

ButtonIcon.propTypes = {
  showBadge: PropTypes.bool,
  size: PropTypes.oneOf(["large", "x-small", "medium", "small"]),
  type: PropTypes.oneOf(["gost", "secondary", "transparent", "default"]),
};
