/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icon33 } from "../../icons/Icon33";
import "./style.css";

export const SearchBar = ({ text = "Search", focused = false, className, inputType = "text" }) => {
  return (
    <div className={`search-bar ${className}`}>
      <div className={`text-field-2 focused-${focused}`}>
        <div className="state-layer-6">
          <div className="leading-icon-2">
            <div className="container-3">
              <div className="icon-33-wrapper">
                <Icon33 className="icon-33" color="#3A3E44" />
              </div>
            </div>
          </div>
          <div className="input-text-wrapper">
            <input className="input-text-2" placeholder={text} type={inputType} />
          </div>
        </div>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  text: PropTypes.string,
  focused: PropTypes.bool,
  inputType: PropTypes.string,
};
