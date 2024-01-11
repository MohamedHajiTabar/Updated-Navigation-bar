/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const CellularSignal1 = ({ color = "black", className }) => {
  return (
    <svg
      className={`cellular-signal-1 ${className}`}
      fill="none"
      height="10"
      viewBox="0 0 18 10"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M2 6H1C0.447715 6 0 6.44772 0 7V9C0 9.55228 0.447715 10 1 10H2C2.55228 10 3 9.55228 3 9V7C3 6.44772 2.55228 6 2 6Z"
        fill={color}
      />
      <path
        className="path"
        d="M7 4H6C5.44772 4 5 4.44772 5 5V9C5 9.55228 5.44772 10 6 10H7C7.55228 10 8 9.55228 8 9V5C8 4.44772 7.55228 4 7 4Z"
        fill={color}
      />
      <path
        className="path"
        d="M12 2H11C10.4477 2 10 2.44772 10 3V9C10 9.55228 10.4477 10 11 10H12C12.5523 10 13 9.55228 13 9V3C13 2.44772 12.5523 2 12 2Z"
        fill={color}
      />
      <path
        className="path"
        d="M17 0H16C15.4477 0 15 0.447715 15 1V9C15 9.55229 15.4477 10 16 10H17C17.5523 10 18 9.55229 18 9V1C18 0.447715 17.5523 0 17 0Z"
        fill={color}
      />
    </svg>
  );
};

CellularSignal1.propTypes = {
  color: PropTypes.string,
};
