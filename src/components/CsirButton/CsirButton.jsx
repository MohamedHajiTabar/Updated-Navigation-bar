/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Icon141 } from "../../icons/Icon141";
import "./style.css";

export const CsirButton = ({
  labelText = "Label",
  style,
  stateProp,
  showIcon,
  className,
  stateLayerClassName,
  icon = <Icon141 className="icon" color="white" />,
  hasLabelText = true,
  labelTextClassName,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    style: style || "text",
    state: stateProp || "disabled",
    showIcon: showIcon || true,
  });

  return (
    <div
      className={`CSIR-button ${state.style} ${state.state} show-icon-${state.showIcon} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onClick={() => {
        dispatch("click");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      {["filled-alternative", "filled", "outlined", "text"].includes(state.style) && (
        <div className={`state-layer ${stateLayerClassName}`}>
          {state.showIcon && state.style === "text" && <div className="text-wrapper">{labelText}</div>}

          {!state.showIcon && <div className={`div ${labelTextClassName}`}>{labelText}</div>}

          {state.showIcon && ["filled-alternative", "filled", "outlined"].includes(state.style) && <>{icon}</>}

          {state.showIcon && (
            <>
              <>
                {hasLabelText && (
                  <>
                    <>
                      {state.style === "text" && (
                        <Icon141
                          className="icon"
                          color={state.state === "disabled" ? "#191A1C" : "#012E5E"}
                          opacity={state.state === "disabled" ? "0.38" : undefined}
                        />
                      )}

                      {["filled-alternative", "filled", "outlined"].includes(state.style) && (
                        <div className="label-text-2">{labelText}</div>
                      )}
                    </>
                  </>
                )}
              </>
            </>
          )}
        </div>
      )}

      {state.style === "book-a-visit" && (
        <>
          <div className="text-wrapper-2">Book a lab visit</div>
          <img
            className="arrow-back-black"
            alt="Arrow back black"
            src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/arrow-back-black-24dp-1.svg"
          />
        </>
      )}
    </div>
  );
};

function reducer(state, action) {
  if (state.showIcon === true && state.state === "enabled" && state.style === "text") {
    switch (action) {
      case "mouse_enter":
        return {
          showIcon: true,
          state: "hovered",
          style: "text",
        };
    }
  }

  if (state.showIcon === true && state.state === "hovered" && state.style === "text") {
    switch (action) {
      case "mouse_leave":
        return {
          showIcon: true,
          state: "enabled",
          style: "text",
        };
    }
  }

  if (state.showIcon === false && state.state === "enabled" && state.style === "text") {
    switch (action) {
      case "mouse_enter":
        return {
          showIcon: false,
          state: "hovered",
          style: "text",
        };
    }
  }

  if (state.showIcon === false && state.state === "hovered" && state.style === "text") {
    switch (action) {
      case "mouse_leave":
        return {
          showIcon: false,
          state: "enabled",
          style: "text",
        };
    }
  }

  if (state.showIcon === true && state.state === "enabled" && state.style === "outlined") {
    switch (action) {
      case "mouse_enter":
        return {
          showIcon: true,
          state: "hovered",
          style: "outlined",
        };
    }
  }

  if (state.showIcon === true && state.state === "hovered" && state.style === "outlined") {
    switch (action) {
      case "mouse_leave":
        return {
          showIcon: true,
          state: "enabled",
          style: "outlined",
        };
    }
  }

  if (state.showIcon === false && state.state === "enabled" && state.style === "outlined") {
    switch (action) {
      case "mouse_enter":
        return {
          showIcon: false,
          state: "hovered",
          style: "outlined",
        };
    }
  }

  if (state.showIcon === false && state.state === "hovered" && state.style === "outlined") {
    switch (action) {
      case "mouse_leave":
        return {
          showIcon: false,
          state: "enabled",
          style: "outlined",
        };
    }
  }

  if (state.showIcon === true && state.state === "enabled" && state.style === "filled") {
    switch (action) {
      case "mouse_enter":
        return {
          showIcon: true,
          state: "hovered",
          style: "filled",
        };
    }
  }

  if (state.showIcon === true && state.state === "hovered" && state.style === "filled") {
    switch (action) {
      case "mouse_leave":
        return {
          showIcon: true,
          state: "enabled",
          style: "filled",
        };
    }
  }

  if (state.showIcon === true && state.state === "enabled" && state.style === "filled-alternative") {
    switch (action) {
      case "mouse_enter":
        return {
          showIcon: true,
          state: "hovered",
          style: "filled-alternative",
        };
    }
  }

  if (state.showIcon === true && state.state === "hovered" && state.style === "filled-alternative") {
    switch (action) {
      case "mouse_leave":
        return {
          showIcon: true,
          state: "enabled",
          style: "filled-alternative",
        };
    }
  }

  if (state.showIcon === false && state.state === "enabled" && state.style === "filled") {
    switch (action) {
      case "mouse_enter":
        return {
          showIcon: false,
          state: "hovered",
          style: "filled",
        };
    }
  }

  if (state.showIcon === false && state.state === "hovered" && state.style === "filled") {
    switch (action) {
      case "mouse_leave":
        return {
          showIcon: false,
          state: "enabled",
          style: "filled",
        };
    }
  }

  if (state.showIcon === false && state.state === "enabled" && state.style === "filled-alternative") {
    switch (action) {
      case "mouse_enter":
        return {
          showIcon: false,
          state: "hovered",
          style: "filled-alternative",
        };
    }
  }

  if (state.showIcon === false && state.state === "hovered" && state.style === "filled-alternative") {
    switch (action) {
      case "mouse_leave":
        return {
          showIcon: false,
          state: "enabled",
          style: "filled-alternative",
        };
    }
  }

  if (state.showIcon === false && state.state === "enabled" && state.style === "book-a-visit") {
    switch (action) {
      case "mouse_enter":
        return {
          showIcon: false,
          state: "hovered",
          style: "book-a-visit",
        };
    }
  }

  if (state.showIcon === false && state.state === "hovered" && state.style === "book-a-visit") {
    switch (action) {
      case "mouse_leave":
        return {
          showIcon: false,
          state: "enabled",
          style: "book-a-visit",
        };
    }
  }

  if (state.showIcon === false && state.state === "focused" && state.style === "book-a-visit") {
    switch (action) {
      case "click":
        return {
          showIcon: false,
          state: "pressed",
          style: "book-a-visit",
        };
    }
  }

  return state;
}

CsirButton.propTypes = {
  labelText: PropTypes.string,
  style: PropTypes.oneOf(["filled-alternative", "filled", "text", "outlined", "book-a-visit"]),
  stateProp: PropTypes.oneOf(["enabled", "focused", "pressed", "hovered", "disabled"]),
  showIcon: PropTypes.bool,
  hasLabelText: PropTypes.bool,
};
