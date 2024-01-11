/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Icon10 } from "../../icons/Icon10";
import { Icon141 } from "../../icons/Icon141";
import "./style.css";

export const Button = ({ labelText = "Label", style, stateProp, showIcon, className, labelTextClassName }) => {
  const [state, dispatch] = useReducer(reducer, {
    style: style || "text",
    state: stateProp || "disabled",
    showIcon: showIcon || true,
  });

  return (
    <div
      className={`button style-2-${state.style} state-3-${state.state} show-icon-1-${state.showIcon} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      {["filled", "outlined", "text"].includes(state.style) && (
        <div className="state-layer-2">
          {!state.showIcon && <div className={`label-text-3 ${labelTextClassName}`}>{labelText}</div>}

          {state.showIcon && state.state === "disabled" && ["filled", "outlined"].includes(state.style) && (
            <Icon10 className="instance-node" />
          )}

          {((state.showIcon && state.state === "disabled" && state.style === "filled") ||
            (state.showIcon && state.state === "disabled" && state.style === "outlined") ||
            (state.showIcon && state.style === "text")) && <div className="label-text-4">{labelText}</div>}

          {((state.showIcon && state.state === "enabled" && state.style === "filled") ||
            (state.showIcon && state.state === "enabled" && state.style === "outlined") ||
            (state.showIcon && state.state === "focused" && state.style === "filled") ||
            (state.showIcon && state.state === "focused" && state.style === "outlined") ||
            (state.showIcon && state.state === "hovered" && state.style === "filled") ||
            (state.showIcon && state.state === "hovered" && state.style === "outlined") ||
            (state.showIcon && state.state === "pressed" && state.style === "filled") ||
            (state.showIcon && state.state === "pressed" && state.style === "outlined")) && (
            <>
              <Icon141
                className="instance-node"
                color={
                  state.state === "hovered" && state.style === "outlined"
                    ? "#003669"
                    : state.style === "filled"
                    ? "white"
                    : "#4640DE"
                }
              />
              <div className="label-text-5">{labelText}</div>
            </>
          )}

          {state.showIcon && state.style === "text" && (
            <Icon141
              className="instance-node"
              color={state.state === "disabled" ? "#191A1C" : "#4640DE"}
              opacity={state.state === "disabled" ? "0.38" : undefined}
            />
          )}
        </div>
      )}

      {state.style === "booka-a-visit" && (
        <>
          <div className="text-wrapper-3">Book a lab visit</div>
          <img
            className="img"
            alt="Arrow back black"
            src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/arrow-back-black-24dp-1.svg"
          />
        </>
      )}
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        state: "hovered",
      };

    case "mouse_leave":
      return {
        ...state,
        state: "enabled",
      };
  }

  return state;
}

Button.propTypes = {
  labelText: PropTypes.string,
  style: PropTypes.oneOf(["filled", "text", "outlined", "booka-a-visit"]),
  stateProp: PropTypes.oneOf(["enabled", "focused", "pressed", "hovered", "disabled"]),
  showIcon: PropTypes.bool,
};
