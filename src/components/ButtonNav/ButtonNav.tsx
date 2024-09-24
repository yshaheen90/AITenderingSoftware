/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconNavsSquaresfourActive } from "../../icons/IconNavsSquaresfourActive";
import "./style.css";

interface Props {
  text: string;
  showDropdown: boolean;
  showBadge: boolean;
  active: boolean;
  type: "level-1" | "default";
  className: any;
  icon: JSX.Element;
  textClassName: any;
  href: string;
  href1: string;
}

export const ButtonNav = ({
  text = "Dashboard",
  showDropdown = false,
  showBadge = false,
  active,
  type,
  className,
  icon = <IconNavsSquaresfourActive className="icon-navs" color="#0D0E0D" />,
  textClassName,
  href,
  href1,
}: Props): JSX.Element => {
  return (
    <a
      className={`button-nav active-${active} ${type} ${className}`}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {active && type === "default" && (
        <>
          {icon}
          <div className={`text ${textClassName}`}>
            <a className="label" href={href1} rel="noopener noreferrer" target="_blank">
              {text}
            </a>
          </div>
        </>
      )}

      {!active && type === "default" && <IconNavsSquaresfourActive className="icon-navs" color="#A3A3A3" />}

      {(!active || type === "level-1") && (
        <div className="label-wrapper">
          <div className="text-wrapper">{text}</div>
        </div>
      )}
    </a>
  );
};

ButtonNav.propTypes = {
  text: PropTypes.string,
  showDropdown: PropTypes.bool,
  showBadge: PropTypes.bool,
  active: PropTypes.bool,
  type: PropTypes.oneOf(["level-1", "default"]),
  href: PropTypes.string,
  href1: PropTypes.string,
};
