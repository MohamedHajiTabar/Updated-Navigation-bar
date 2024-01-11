/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const CarouselIndicator = ({
  position,
  size,
  className,
  ellipseClassName,
  ellipseClassNameOverride,
  divClassName,
  divClassNameOverride,
  ellipseClassName1,
}) => {
  return (
    <div className={`carousel-indicator ${className}`}>
      <div className={`ellipse ${position} ${size} ${ellipseClassName}`} />
      <div className={`ellipse-2 position-${position} size-${size} ${ellipseClassNameOverride}`} />
      <div className={`ellipse-3 size-0-${size} ${divClassName}`} />
      <div className={`ellipse-4 size-1-${size} ${divClassNameOverride}`} />
      <div className={`ellipse-5 size-2-${size} ${ellipseClassName1}`} />
    </div>
  );
};

CarouselIndicator.propTypes = {
  position: PropTypes.oneOf(["two", "one"]),
  size: PropTypes.oneOf(["twelve", "sixteen"]),
};
