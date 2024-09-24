/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconStatsCalendarblank3 } from "../../icons/IconStatsCalendarblank3";
import { IconTrendup } from "../../icons/IconTrendup";
import "./style.css";

interface Props {
  category: string;
  amount: string;
  percentage: string;
  type: "special" | "default";
  className: any;
  categoryClassName: any;
  iconClassName: any;
  percentageClassName: any;
  iconTrendupColor: string;
  numberClassName: any;
  detailClassName: any;
  text: string;
  icon?: JSX.Element;
  override?: JSX.Element;
  href: string;
}

export const CardStatistic = ({
  category = "New Bookings",
  amount = "840",
  percentage = "5.70%",
  type,
  className,
  categoryClassName,
  iconClassName,
  percentageClassName,
  iconTrendupColor = "#6E6E6E",
  numberClassName,
  detailClassName,
  text = "from last week",
  icon = <IconStatsCalendarblank3 className="icon-stats" color="#0D0E0D" />,
  override = <IconTrendup className="icon-trendup" color={iconTrendupColor} />,
  href,
}: Props): JSX.Element => {
  return (
    <div className={`card-statistic type-1-${type} ${className}`}>
      <div className="body-2">
        <div className="main-info">
          <div className={`category ${categoryClassName}`}>{category}</div>
          <div className="number">{amount}</div>
        </div>
        <a className={`icon-stats-wrapper ${iconClassName}`} href={href} rel="noopener noreferrer" target="_blank">
          {icon}
        </a>
      </div>
      <div className="head-2">
        <div className={`percentage ${percentageClassName}`}>
          {override}
          <div className={`number-2 ${numberClassName}`}>{percentage}</div>
        </div>
        <div className={`detail ${detailClassName}`}>{text}</div>
      </div>
    </div>
  );
};

CardStatistic.propTypes = {
  category: PropTypes.string,
  amount: PropTypes.string,
  percentage: PropTypes.string,
  type: PropTypes.oneOf(["special", "default"]),
  iconTrendupColor: PropTypes.string,
  text: PropTypes.string,
  href: PropTypes.string,
};
