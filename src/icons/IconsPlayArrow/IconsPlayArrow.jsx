/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconsPlayArrow = ({ color = "#191A1C", className }) => {
  return (
    <svg
      className={`icons-play-arrow ${className}`}
      fill="none"
      height="18"
      viewBox="0 0 18 18"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M6.375 6.48L10.3275 9L6.375 11.52V6.48ZM4.875 3.75V14.25L13.125 9L4.875 3.75Z"
        fill={color}
      />
    </svg>
  );
};

IconsPlayArrow.propTypes = {
  color: PropTypes.string,
};
