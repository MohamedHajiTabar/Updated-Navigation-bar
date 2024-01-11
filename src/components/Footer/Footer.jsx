/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { StyleTextStateWrapper } from "../StyleTextStateWrapper";
import { TextField } from "../TextField";
import "./style.css";

export const Footer = ({ platform, className }) => {
  return (
    <div className={`footer ${platform} ${className}`}>
      <div className="overlap-group">
        <p className="join-our-news-letter">
          Join our news letter and <br />
          keep up to date with us!
        </p>
        <div className="emailer-input-field">
          <TextField
            className={`${platform === "mobile" ? "class" : "class-2"}`}
            inputText="Enter your email"
            labelText="Email address"
            labelTextClassName="text-field-instance"
            leadingIcon={false}
            showSupportingText={false}
            stateProp="enabled"
            style="outlined"
            textConfigurations="input-text"
            trailingIcon={false}
          />
          <StyleTextStateWrapper
            className={`${platform === "mobile" ? "class-3" : "class-4"}`}
            labelText="Subscribe"
            showIcon={false}
            stateProp="enabled"
            style="filled"
          />
        </div>
      </div>
      {["desktop", "tablet"].includes(platform) && (
        <div className="frame">
          <img
            className="img-2"
            alt="Img"
            src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/d32dc50b03535fd11938fdab01bae2f1-3.png"
          />
          <div className="frame-2">
            <StyleTextStateWrapper
              className="button-instance"
              labelText="Who we are"
              showIcon={false}
              stateProp="enabled"
              style="text"
            />
            <StyleTextStateWrapper
              className="button-instance"
              labelText="Explore courses"
              showIcon={false}
              stateProp="enabled"
              style="text"
            />
            <StyleTextStateWrapper
              className="button-instance"
              labelText="Book a lab visit"
              showIcon={false}
              stateProp="enabled"
              style="text"
            />
          </div>
        </div>
      )}

      <img
        className="vector"
        alt="Vector"
        src={
          platform === "desktop"
            ? "https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/vector-2.svg"
            : platform === "tablet"
            ? "https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/vector-2-2.svg"
            : "https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/vector-2-1.svg"
        }
      />
      {["desktop", "tablet"].includes(platform) && (
        <div className="frame-3">
          <p className="text-wrapper-5">© Copyright CSIR Learning Factory 2023</p>
          <div className="frame-4">
            <div className="text-wrapper-5">Terms of service</div>
            <div className="text-wrapper-5">Privacy policy</div>
            <div className="text-wrapper-5">Cookies</div>
          </div>
        </div>
      )}

      {platform === "mobile" && (
        <>
          <div className="frame-5">
            <div className="text-wrapper-6">Who are we</div>
            <div className="text-wrapper-7">Explore courses</div>
            <div className="text-wrapper-7">Book a lab visit</div>
          </div>
          <div className="img-wrapper">
            <img
              className="img-2"
              alt="Img"
              src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/d32dc50b03535fd11938fdab01bae2f1-3.png"
            />
          </div>
          <p className="p">© Copyright CSIR Learning Factory 2023</p>
          <div className="frame-6">
            <div className="text-wrapper-5">Terms of service</div>
            <div className="text-wrapper-8">Privacy policy</div>
            <div className="text-wrapper-8">Cookies</div>
          </div>
        </>
      )}
    </div>
  );
};

Footer.propTypes = {
  platform: PropTypes.oneOf(["tablet", "desktop", "mobile"]),
};
