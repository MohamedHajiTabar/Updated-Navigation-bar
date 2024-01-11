/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Battery } from "../../icons/Battery";
import { CellularSignal1 } from "../../icons/CellularSignal1";
import { Wifi } from "../../icons/Wifi";
import { Time } from "../Time";
import "./style.css";

export const StatusBarIos = ({ theme, className }) => {
  return (
    <div className={`status-bar-ios theme-1-${theme} ${className}`}>
      <Time
        className="time-instance"
        hours="9"
        minutes="41"
        showLocation={false}
        theme={theme === "light" ? "light" : "dark"}
      />
      <div className="icons">
        <CellularSignal1 className="cellular-signal" color={theme === "light" ? "black" : "white"} />
        <Wifi className="wifi-7" color={theme === "light" ? "black" : "white"} />
        <Battery className="battery-1" color={theme === "light" ? "black" : "white"} />
      </div>
    </div>
  );
};

StatusBarIos.propTypes = {
  theme: PropTypes.oneOf(["dark", "light"]),
};
