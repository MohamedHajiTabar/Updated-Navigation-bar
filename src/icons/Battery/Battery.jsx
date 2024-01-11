/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Battery = ({ color = "white", className }) => {
  return (
    <svg
      className={`battery ${className}`}
      fill="none"
      height="12"
      viewBox="0 0 24 12"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_1_7673)">
        <path
          className="path"
          d="M2.86379 0.5C2.21606 0.515995 1.6011 0.788118 1.15367 1.25673C0.706234 1.72535 0.462825 2.35223 0.476785 3V9C0.462822 9.6476 0.706094 10.2743 1.15331 10.7429C1.60053 11.2115 2.21524 11.4837 2.86279 11.5H18.1358C18.7835 11.484 19.3985 11.2119 19.8459 10.7433C20.2933 10.2747 20.5367 9.64777 20.5228 9V3C20.5367 2.35223 20.2933 1.72535 19.8459 1.25673C19.3985 0.788118 18.7835 0.515995 18.1358 0.5H2.86379ZM2.86379 0H18.1358C18.9133 0.0183534 19.6517 0.344655 20.1887 0.907192C20.7258 1.46973 21.0175 2.22248 20.9998 3V9C21.0175 9.77752 20.7258 10.5303 20.1887 11.0928C19.6517 11.6553 18.9133 11.9816 18.1358 12H2.86379C2.08628 11.9816 1.34786 11.6553 0.810828 11.0928C0.273791 10.5303 -0.0179261 9.77752 -0.000214713 9V3C-0.0179261 2.22248 0.273791 1.46973 0.810828 0.907192C1.34786 0.344655 2.08628 0.0183534 2.86379 0V0Z"
          fill={color}
          opacity="0.4"
        />
        <rect className="rect" fill={color} height="8" rx="1" width="17" x="2" y="2" />
        <path
          className="path"
          d="M22 4C22.5304 4 23.0391 4.21071 23.4142 4.58579C23.7893 4.96086 24 5.46957 24 6C24 6.53043 23.7893 7.03914 23.4142 7.41421C23.0391 7.78929 22.5304 8 22 8V4Z"
          fill={color}
          opacity="0.4"
        />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_1_7673">
          <rect className="rect" fill="white" height="12" width="24" />
        </clipPath>
      </defs>
    </svg>
  );
};

Battery.propTypes = {
  color: PropTypes.string,
};
