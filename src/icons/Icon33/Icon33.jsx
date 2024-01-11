/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Icon33 = ({ color = "#191A1C", className }) => {
  return (
    <svg
      className={`icon-33 ${className}`}
      fill="none"
      height="18"
      viewBox="0 0 18 18"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M11.07 9.9525L15.3675 14.25L14.25 15.3675L9.9525 11.07C9.15 11.6475 8.1825 12 7.125 12C4.4325 12 2.25 9.8175 2.25 7.125C2.25 4.4325 4.4325 2.25 7.125 2.25C9.8175 2.25 12 4.4325 12 7.125C12 8.1825 11.6475 9.15 11.07 9.9525ZM7.125 3.75C5.2575 3.75 3.75 5.2575 3.75 7.125C3.75 8.9925 5.2575 10.5 7.125 10.5C8.9925 10.5 10.5 8.9925 10.5 7.125C10.5 5.2575 8.9925 3.75 7.125 3.75Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

Icon33.propTypes = {
  color: PropTypes.string,
};
