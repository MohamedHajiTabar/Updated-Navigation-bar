/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icon33 } from "../../icons/Icon33";
import { IconsMenu24Px } from "../../icons/IconsMenu24Px";
import { CsirButton } from "../CsirButton";
import { SearchBar } from "../SearchBar";
import "./style.css";

export const NavBar = ({
  type,
  platform,
  className,
  CSIRButtonIcon = <IconsMenu24Px className="icon-instance-node" color="white" />,
  override = <Icon33 className="icon-instance-node" color="#012E5E" />,
}) => {
  return (
    <div className={`nav-bar platform-5-${platform} ${type} ${className}`}>
      <img
        className="img-3"
        alt="Img"
        src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/d32dc50b03535fd11938fdab01bae2f1-3.png"
      />
      {platform === "desktop" && (
        <>
          <SearchBar className="search-bar-instance" text="Search for course" />
          <div className="frame-7">
            <CsirButton
              className="CSIR-button-instance"
              labelText="Label"
              showIcon={false}
              stateProp="pressed"
              style="text"
            />
            <CsirButton
              className="CSIR-button-instance"
              labelText="Label"
              showIcon={false}
              stateProp="pressed"
              style="text"
            />
          </div>
          <CsirButton
            className="CSIR-button-2"
            labelText="Label"
            showIcon={false}
            stateProp="hovered"
            style="filled-alternative"
          />
        </>
      )}

      {type === "with-breadcrumbs" && (
        <div className="overlap-group-2">
          <img
            className="rectangle"
            alt="Rectangle"
            src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/rectangle-80.svg"
          />
          <img
            className="rectangle-2"
            alt="Rectangle"
            src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/rectangle-78.svg"
          />
          <img
            className="rectangle-3"
            alt="Rectangle"
            src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/rectangle-77.svg"
          />
          <div className="text-wrapper-9">Explore courses</div>
          <div className="text-wrapper-10">Sectors and Industries</div>
          <div className="text-wrapper-11">Manufacturing</div>
        </div>
      )}

      {["mobile", "tablet"].includes(platform) && (
        <>
          <CsirButton
            className={`${platform === "tablet" ? "class-5" : "class-6"}`}
            hasLabelText={false}
            icon={CSIRButtonIcon}
            showIcon
            stateLayerClassName="CSIR-button-3"
            stateProp="enabled"
            style="filled"
          />
          <CsirButton
            className={`${platform === "tablet" ? "class-7" : "class-8"}`}
            hasLabelText={false}
            icon={override}
            showIcon
            stateLayerClassName="CSIR-button-4"
            stateProp="enabled"
            style="outlined"
          />
        </>
      )}
    </div>
  );
};

NavBar.propTypes = {
  type: PropTypes.oneOf(["with-breadcrumbs", "default"]),
  platform: PropTypes.oneOf(["tablet", "desktop", "mobile"]),
};
