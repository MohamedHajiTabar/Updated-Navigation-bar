/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconsInfoBlack24Dp9 = ({ color = "#2E8DD2", className }) => {
  return (
    <svg
      className={`icons-info-black-24dp-9 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_1_2593)">
        <path
          className="path"
          d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z"
          fill={color}
        />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_1_2593">
          <rect className="rect" fill="white" height="24" width="24" />
        </clipPath>
      </defs>
    </svg>
  );
};

IconsInfoBlack24Dp9.propTypes = {
  color: PropTypes.string,
};
