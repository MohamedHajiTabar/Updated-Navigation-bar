/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconsArrowRight24Px = ({ color = "#191A1C", className }) => {
  return (
    <svg
      className={`icons-arrow-right-24px ${className}`}
      fill="none"
      height="18"
      viewBox="0 0 18 18"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="path" d="M7.5 12.75L11.25 9L7.5 5.25V12.75Z" fill={color} />
    </svg>
  );
};

IconsArrowRight24Px.propTypes = {
  color: PropTypes.string,
};
