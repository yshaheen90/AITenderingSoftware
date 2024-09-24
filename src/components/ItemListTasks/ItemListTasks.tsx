/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconDotsthree4 } from "../../icons/IconDotsthree4";
import { ButtonIcon } from "../ButtonIcon";
import "./style.css";

interface Props {
  date: string;
  task: string;
  className: any;
  checkBoxClassName: any;
  infoClassName: any;
  dateClassName: any;
  buttonIconIcon: JSX.Element;
  vector: string;
}

export const ItemListTasks = ({
  date = "June 19, 2024",
  task = "Set Up Conference Room B for 10 AM Meeting",
  className,
  checkBoxClassName,
  infoClassName,
  dateClassName,
  buttonIconIcon = <IconDotsthree4 className="icon-dotsthree" color="#6E6E6E" />,
  vector = "/img/vector-7.svg",
}: Props): JSX.Element => {
  return (
    <div className={`item-list-tasks ${className}`}>
      <div className="side-left">
        <div className={`check-box ${checkBoxClassName}`} />
        <img className="vector" alt="Vector" src={vector} />
      </div>
      <div className="main">
        <div className={`info ${infoClassName}`}>
          <div className="head-3">
            <div className={`date ${dateClassName}`}>{date}</div>
            <ButtonIcon className="button-icon-instance" override={buttonIconIcon} size="x-small" type="transparent" />
          </div>
          <p className="task">{task}</p>
        </div>
      </div>
    </div>
  );
};

ItemListTasks.propTypes = {
  date: PropTypes.string,
  task: PropTypes.string,
  vector: PropTypes.string,
};
