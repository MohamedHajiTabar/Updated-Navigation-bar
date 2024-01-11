/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Titles = ({ title = "Title", size, className, divClassName }) => {
  return (
    <div className={`titles ${className}`}>
      <div className={`title ${size} ${divClassName}`}>{title}</div>
    </div>
  );
};

Titles.propTypes = {
  title: PropTypes.string,
  size: PropTypes.oneOf(["sixty-six", "thirty", "thirty-six", "twenty-two"]),
};
