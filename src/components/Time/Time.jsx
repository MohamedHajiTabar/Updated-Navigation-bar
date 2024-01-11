/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Time = ({ hours = "9", showLocation = true, minutes = "41", theme, className }) => {
  return (
    <div className={`time ${className}`}>
      <div className="clock">
        <div className={`hours ${theme}`}>{hours}</div>
        <div className={`text-wrapper-12 theme-${theme}`}>:</div>
        <div className={`minutes theme-0-${theme}`}>{minutes}</div>
      </div>
      {showLocation && (
        <img
          className="location-arrow"
          alt="Location arrow"
          src={
            theme === "light"
              ? "https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/location-arrow-1.svg"
              : "https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/location-arrow.svg"
          }
        />
      )}
    </div>
  );
};

Time.propTypes = {
  hours: PropTypes.string,
  showLocation: PropTypes.bool,
  minutes: PropTypes.string,
  theme: PropTypes.oneOf(["dark", "light"]),
};
