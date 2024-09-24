/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  score: string;
  category: string;
  className: any;
  categoryClassName: any;
  barChartClassName: any;
  barClassName: any;
  scoreClassName: any;
}

export const ItemListCategory = ({
  score = "4.8",
  category = "Cleanliness",
  className,
  categoryClassName,
  barChartClassName,
  barClassName,
  scoreClassName,
}: Props): JSX.Element => {
  return (
    <div className={`item-list-category ${className}`}>
      <div className={`category-2 ${categoryClassName}`}>{category}</div>
      <div className={`bar-chart ${barChartClassName}`}>
        <div className={`bar ${barClassName}`} />
      </div>
      <div className={`score ${scoreClassName}`}>{score}</div>
    </div>
  );
};

ItemListCategory.propTypes = {
  score: PropTypes.string,
  category: PropTypes.string,
};
