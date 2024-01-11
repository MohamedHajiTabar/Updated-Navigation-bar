/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconsMenu24Px = ({ color = "#191A1C", className }) => {
  return (
    <svg
      className={`icons-menu-24px ${className}`}
      fill="none"
      height="18"
      viewBox="0 0 18 18"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M2.25 6V4.5H15.75V6H2.25ZM2.25 9.75H15.75V8.25H2.25V9.75ZM2.25 13.5H15.75V12H2.25V13.5Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

IconsMenu24Px.propTypes = {
  color: PropTypes.string,
};
