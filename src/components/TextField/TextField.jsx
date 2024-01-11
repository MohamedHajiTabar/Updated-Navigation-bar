/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Icon33 } from "../../icons/Icon33";
import { Icon49 } from "../../icons/Icon49";
import { IconsError24Px8 } from "../../icons/IconsError24Px8";
import "./style.css";

export const TextField = ({
  inputText = "Input",
  supportingText = "Supporting text",
  labelText = "Label",
  placeholderText = "Placeholder",
  showSupportingText = true,
  style,
  stateProp,
  textConfigurations,
  leadingIcon,
  trailingIcon,
  className,
  labelTextClassName,
  inputType = "text",
  inputType1 = "text",
  inputType2 = "text",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    style: style || "outlined",
    state: stateProp || "disabled",
    textConfigurations: textConfigurations || "placeholder-text",
    leadingIcon: leadingIcon || true,
    trailingIcon: trailingIcon || false,
  });

  return (
    <div
      className={`text-field state-8-${state.state} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className="state-layer-wrapper">
        <div
          className={`state-layer-3 state-10-${state.state} trailing-icon-${state.trailingIcon} leading-icon-${state.leadingIcon}`}
        >
          {((state.leadingIcon && !state.trailingIcon) || (state.trailingIcon && !state.leadingIcon)) && (
            <>
              <div className="leading-icon">
                {((!state.leadingIcon && state.state === "disabled" && state.textConfigurations === "label-text") ||
                  (!state.leadingIcon && state.state === "enabled" && state.textConfigurations === "label-text") ||
                  (!state.leadingIcon && state.state === "error" && state.textConfigurations === "label-text") ||
                  (!state.leadingIcon && state.state === "hovered" && state.textConfigurations === "label-text") ||
                  state.leadingIcon) && (
                  <div className="container">
                    <div className="state-layer-4">
                      {!state.trailingIcon && (
                        <Icon33 className="icon-2" color={state.state === "disabled" ? "#191A1C" : "#3A3E44"} />
                      )}

                      {state.trailingIcon && <>{labelText}</>}
                    </div>
                  </div>
                )}

                {((!state.leadingIcon && state.state === "focused" && state.textConfigurations === "label-text") ||
                  (!state.leadingIcon && state.textConfigurations === "input-text") ||
                  (!state.leadingIcon && state.textConfigurations === "placeholder-text")) && (
                  <>
                    <div className={`placeholder-text-2 ${state.textConfigurations}`}>
                      {((state.state === "disabled" && state.textConfigurations === "input-text") ||
                        (state.state === "enabled" && state.textConfigurations === "input-text") ||
                        (state.state === "hovered" && state.textConfigurations === "input-text") ||
                        state.textConfigurations === "placeholder-text") && (
                        <div
                          className={`placeholder-text-3 text-configurations-${state.textConfigurations} state-13-${state.state}`}
                        >
                          {state.textConfigurations === "placeholder-text" && <>{placeholderText}</>}

                          {state.textConfigurations === "input-text" && <>{inputText}</>}
                        </div>
                      )}

                      {state.textConfigurations === "label-text" && (
                        <img
                          className="caret"
                          alt="Caret"
                          src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/caret.svg"
                        />
                      )}

                      {state.textConfigurations === "input-text" && ["error", "focused"].includes(state.state) && (
                        <>
                          <input className="input" placeholder={inputText} type={inputType} />
                          <img
                            className="caret-2"
                            alt="Caret"
                            src={
                              state.state === "focused"
                                ? "https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/caret.svg"
                                : "https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/caret-1.svg"
                            }
                          />
                        </>
                      )}
                    </div>
                    <div className="label-text-wrapper">
                      <div className="label-text-6">{labelText}</div>
                    </div>
                  </>
                )}
              </div>
              <div className="content">
                {((state.leadingIcon && state.state === "focused" && state.textConfigurations === "label-text") ||
                  (state.leadingIcon && state.textConfigurations === "input-text") ||
                  (state.leadingIcon && state.textConfigurations === "placeholder-text")) && (
                  <>
                    <div className={`placeholder-text-4 text-configurations-0-${state.textConfigurations}`}>
                      {((state.state === "disabled" && state.textConfigurations === "input-text") ||
                        (state.state === "enabled" && state.textConfigurations === "input-text") ||
                        (state.state === "hovered" && state.textConfigurations === "input-text") ||
                        state.textConfigurations === "placeholder-text") && (
                        <div
                          className={`placeholder-text-5 text-configurations-1-${state.textConfigurations} state-16-${state.state}`}
                        >
                          {state.textConfigurations === "placeholder-text" && <>{placeholderText}</>}

                          {state.textConfigurations === "input-text" && <>{inputText}</>}
                        </div>
                      )}

                      {state.textConfigurations === "label-text" && (
                        <img
                          className="caret"
                          alt="Caret"
                          src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/caret.svg"
                        />
                      )}

                      {state.textConfigurations === "input-text" && ["error", "focused"].includes(state.state) && (
                        <>
                          <input className="input" placeholder={inputText} type={inputType1} />
                          <img
                            className="caret-2"
                            alt="Caret"
                            src={
                              state.state === "focused"
                                ? "https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/caret.svg"
                                : "https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/caret-1.svg"
                            }
                          />
                        </>
                      )}
                    </div>
                    <div className="div-wrapper">
                      <div className="label-text-7">{labelText}</div>
                    </div>
                  </>
                )}

                {((!state.leadingIcon && state.state === "focused" && state.textConfigurations === "label-text") ||
                  (!state.leadingIcon && state.textConfigurations === "input-text") ||
                  (!state.leadingIcon && state.textConfigurations === "placeholder-text") ||
                  (state.state === "disabled" && state.textConfigurations === "label-text") ||
                  (state.state === "enabled" && state.textConfigurations === "label-text") ||
                  (state.state === "error" && state.textConfigurations === "label-text") ||
                  (state.state === "hovered" && state.textConfigurations === "label-text")) && (
                  <div className="label-text-8">
                    <div className="label-text-9">
                      {!state.trailingIcon && <>{labelText}</>}

                      {((!state.leadingIcon && state.state === "disabled") ||
                        (!state.leadingIcon && state.state === "enabled") ||
                        (!state.leadingIcon && state.state === "hovered") ||
                        state.state === "focused") && (
                        <Icon49 className="icon-2" color={state.state === "disabled" ? "#191A1C" : "#3A3E44"} />
                      )}

                      {state.trailingIcon && state.state === "error" && (
                        <IconsError24Px8 className="icon-2" color="#B01B1D" />
                      )}
                    </div>
                  </div>
                )}
              </div>
            </>
          )}

          {state.trailingIcon && state.leadingIcon && (
            <div className="container-wrapper">
              <div className="container-2">
                <div className="icon-wrapper">
                  <Icon33 className="icon-2" color={state.state === "disabled" ? "#191A1C" : "#3A3E44"} />
                </div>
              </div>
            </div>
          )}

          {((state.leadingIcon && state.trailingIcon) || (!state.leadingIcon && !state.trailingIcon)) && (
            <div className="content-2">
              {((state.state === "disabled" && state.textConfigurations === "input-text") ||
                (state.state === "disabled" && state.textConfigurations === "placeholder-text") ||
                (state.state === "enabled" && state.textConfigurations === "input-text") ||
                (state.state === "enabled" && state.textConfigurations === "placeholder-text") ||
                (state.state === "error" && state.textConfigurations === "input-text") ||
                (state.state === "error" && state.textConfigurations === "placeholder-text") ||
                state.state === "focused" ||
                (state.state === "hovered" && state.textConfigurations === "input-text") ||
                (state.state === "hovered" && state.textConfigurations === "placeholder-text")) && (
                <>
                  <div className={`placeholder-text-6 text-configurations-2-${state.textConfigurations}`}>
                    {((state.state === "disabled" && state.textConfigurations === "input-text") ||
                      (state.state === "enabled" && state.textConfigurations === "input-text") ||
                      (state.state === "hovered" && state.textConfigurations === "input-text") ||
                      state.textConfigurations === "placeholder-text") && (
                      <div
                        className={`placeholder-text-7 text-configurations-3-${state.textConfigurations} state-20-${state.state} leading-icon-1-${state.leadingIcon}`}
                      >
                        {state.textConfigurations === "placeholder-text" && <>{placeholderText}</>}

                        {state.textConfigurations === "input-text" && <>{inputText}</>}
                      </div>
                    )}

                    {state.textConfigurations === "label-text" && (
                      <img
                        className="caret"
                        alt="Caret"
                        src="https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/caret.svg"
                      />
                    )}

                    {state.textConfigurations === "input-text" && ["error", "focused"].includes(state.state) && (
                      <>
                        <input className="input" placeholder={inputText} type={inputType2} />
                        <img
                          className="caret-2"
                          alt="Caret"
                          src={
                            state.state === "focused"
                              ? "https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/caret.svg"
                              : "https://cdn.animaapp.com/projects/659ea0389cbe5a2d6c3773ad/releases/659eb34e7b37e2290e4f4cfa/img/caret-1.svg"
                          }
                        />
                      </>
                    )}
                  </div>
                  <div
                    className={`label-text-10 ${
                      (!state.leadingIcon && state.state === "enabled") ||
                      (!state.leadingIcon && state.state === "error") ||
                      (!state.leadingIcon && state.state === "focused") ||
                      (!state.leadingIcon && state.state === "hovered")
                        ? labelTextClassName
                        : undefined
                    }`}
                  >
                    <div className="label-text-11">{labelText}</div>
                  </div>
                </>
              )}

              {((state.state === "disabled" && state.textConfigurations === "label-text") ||
                (state.state === "enabled" && state.textConfigurations === "label-text") ||
                (state.state === "error" && state.textConfigurations === "label-text") ||
                (state.state === "hovered" && state.textConfigurations === "label-text")) && (
                <div className="label-text-12">
                  <div className="label-text-13">{labelText}</div>
                </div>
              )}
            </div>
          )}

          {state.trailingIcon && state.leadingIcon && (
            <div className="trailing-icon">
              <div className="container-2">
                <div className="icon-wrapper">
                  {["disabled", "enabled", "focused", "hovered"].includes(state.state) && (
                    <Icon49 className="icon-2" color={state.state === "disabled" ? "#191A1C" : "#3A3E44"} />
                  )}

                  {state.state === "error" && <IconsError24Px8 className="icon-2" color="#B01B1D" />}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {showSupportingText && (
        <div className="supporting-text">
          <div
            className={`supporting-text-2 leading-icon-2-${state.leadingIcon} text-configurations-4-${state.textConfigurations} state-25-${state.state} trailing-icon-6-${state.trailingIcon}`}
          >
            {((!state.leadingIcon && state.state === "focused" && state.textConfigurations === "placeholder-text") ||
              (!state.leadingIcon &&
                state.state === "hovered" &&
                state.textConfigurations === "placeholder-text" &&
                !state.trailingIcon) ||
              (!state.leadingIcon && state.textConfigurations === "input-text") ||
              (!state.leadingIcon && state.textConfigurations === "label-text") ||
              (state.leadingIcon && state.state === "disabled" && state.textConfigurations === "input-text") ||
              (state.leadingIcon &&
                state.state === "disabled" &&
                state.textConfigurations === "label-text" &&
                state.trailingIcon) ||
              (state.leadingIcon && state.state === "enabled" && state.textConfigurations === "input-text") ||
              (state.leadingIcon &&
                state.state === "enabled" &&
                state.textConfigurations === "label-text" &&
                state.trailingIcon) ||
              (state.leadingIcon && state.state === "error" && state.textConfigurations === "input-text") ||
              (state.leadingIcon &&
                state.state === "error" &&
                state.textConfigurations === "label-text" &&
                state.trailingIcon) ||
              (state.leadingIcon &&
                state.state === "focused" &&
                state.textConfigurations === "input-text" &&
                !state.trailingIcon) ||
              (state.leadingIcon &&
                state.state === "focused" &&
                state.textConfigurations === "placeholder-text" &&
                !state.trailingIcon) ||
              (state.leadingIcon && state.state === "focused" && state.trailingIcon) ||
              (state.leadingIcon && state.state === "hovered" && state.textConfigurations === "input-text") ||
              (state.leadingIcon &&
                state.state === "hovered" &&
                state.textConfigurations === "label-text" &&
                state.trailingIcon) ||
              (state.leadingIcon && state.state === "hovered" && state.textConfigurations === "placeholder-text") ||
              (state.leadingIcon && state.textConfigurations === "label-text" && !state.trailingIcon) ||
              (state.state === "disabled" && state.textConfigurations === "placeholder-text") ||
              (state.state === "enabled" && state.textConfigurations === "placeholder-text") ||
              (state.state === "error" && state.textConfigurations === "placeholder-text")) && <>{supportingText}</>}

            {state.state === "hovered" &&
              state.trailingIcon &&
              state.textConfigurations === "placeholder-text" &&
              !state.leadingIcon && <div className="supporting-text-3">{supportingText}</div>}
          </div>
        </div>
      )}
    </div>
  );
};

function reducer(state, action) {
  if (
    state.leadingIcon === true &&
    state.state === "hovered" &&
    state.style === "outlined" &&
    state.textConfigurations === "placeholder-text" &&
    state.trailingIcon === false
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          leadingIcon: true,
          state: "enabled",
          style: "outlined",
          textConfigurations: "placeholder-text",
          trailingIcon: false,
        };
    }
  }

  if (
    state.leadingIcon === true &&
    state.state === "enabled" &&
    state.style === "outlined" &&
    state.textConfigurations === "placeholder-text" &&
    state.trailingIcon === false
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          leadingIcon: true,
          state: "hovered",
          style: "outlined",
          textConfigurations: "placeholder-text",
          trailingIcon: false,
        };
    }
  }

  if (
    state.leadingIcon === true &&
    state.state === "hovered" &&
    state.style === "outlined" &&
    state.textConfigurations === "label-text" &&
    state.trailingIcon === false
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          leadingIcon: true,
          state: "enabled",
          style: "outlined",
          textConfigurations: "label-text",
          trailingIcon: false,
        };
    }
  }

  if (
    state.leadingIcon === true &&
    state.state === "enabled" &&
    state.style === "outlined" &&
    state.textConfigurations === "label-text" &&
    state.trailingIcon === false
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          leadingIcon: true,
          state: "hovered",
          style: "outlined",
          textConfigurations: "label-text",
          trailingIcon: false,
        };
    }
  }

  if (
    state.leadingIcon === true &&
    state.state === "hovered" &&
    state.style === "outlined" &&
    state.textConfigurations === "input-text" &&
    state.trailingIcon === false
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          leadingIcon: true,
          state: "enabled",
          style: "outlined",
          textConfigurations: "input-text",
          trailingIcon: false,
        };
    }
  }

  if (
    state.leadingIcon === true &&
    state.state === "enabled" &&
    state.style === "outlined" &&
    state.textConfigurations === "input-text" &&
    state.trailingIcon === false
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          leadingIcon: true,
          state: "hovered",
          style: "outlined",
          textConfigurations: "input-text",
          trailingIcon: false,
        };
    }
  }

  if (
    state.leadingIcon === false &&
    state.state === "hovered" &&
    state.style === "outlined" &&
    state.textConfigurations === "placeholder-text" &&
    state.trailingIcon === false
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          leadingIcon: false,
          state: "enabled",
          style: "outlined",
          textConfigurations: "placeholder-text",
          trailingIcon: false,
        };
    }
  }

  if (
    state.leadingIcon === false &&
    state.state === "enabled" &&
    state.style === "outlined" &&
    state.textConfigurations === "placeholder-text" &&
    state.trailingIcon === false
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          leadingIcon: false,
          state: "hovered",
          style: "outlined",
          textConfigurations: "placeholder-text",
          trailingIcon: false,
        };
    }
  }

  if (
    state.leadingIcon === false &&
    state.state === "hovered" &&
    state.style === "outlined" &&
    state.textConfigurations === "label-text" &&
    state.trailingIcon === false
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          leadingIcon: false,
          state: "enabled",
          style: "outlined",
          textConfigurations: "label-text",
          trailingIcon: false,
        };
    }
  }

  if (
    state.leadingIcon === false &&
    state.state === "enabled" &&
    state.style === "outlined" &&
    state.textConfigurations === "label-text" &&
    state.trailingIcon === false
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          leadingIcon: false,
          state: "hovered",
          style: "outlined",
          textConfigurations: "label-text",
          trailingIcon: false,
        };
    }
  }

  if (
    state.leadingIcon === false &&
    state.state === "hovered" &&
    state.style === "outlined" &&
    state.textConfigurations === "input-text" &&
    state.trailingIcon === false
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          leadingIcon: false,
          state: "enabled",
          style: "outlined",
          textConfigurations: "input-text",
          trailingIcon: false,
        };
    }
  }

  if (
    state.leadingIcon === false &&
    state.state === "enabled" &&
    state.style === "outlined" &&
    state.textConfigurations === "input-text" &&
    state.trailingIcon === false
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          leadingIcon: false,
          state: "hovered",
          style: "outlined",
          textConfigurations: "input-text",
          trailingIcon: false,
        };
    }
  }

  if (
    state.leadingIcon === true &&
    state.state === "hovered" &&
    state.style === "outlined" &&
    state.textConfigurations === "placeholder-text" &&
    state.trailingIcon === true
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          leadingIcon: true,
          state: "enabled",
          style: "outlined",
          textConfigurations: "placeholder-text",
          trailingIcon: true,
        };
    }
  }

  if (
    state.leadingIcon === true &&
    state.state === "enabled" &&
    state.style === "outlined" &&
    state.textConfigurations === "placeholder-text" &&
    state.trailingIcon === true
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          leadingIcon: true,
          state: "hovered",
          style: "outlined",
          textConfigurations: "placeholder-text",
          trailingIcon: true,
        };
    }
  }

  if (
    state.leadingIcon === true &&
    state.state === "hovered" &&
    state.style === "outlined" &&
    state.textConfigurations === "label-text" &&
    state.trailingIcon === true
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          leadingIcon: true,
          state: "enabled",
          style: "outlined",
          textConfigurations: "label-text",
          trailingIcon: true,
        };
    }
  }

  if (
    state.leadingIcon === true &&
    state.state === "enabled" &&
    state.style === "outlined" &&
    state.textConfigurations === "label-text" &&
    state.trailingIcon === true
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          leadingIcon: true,
          state: "hovered",
          style: "outlined",
          textConfigurations: "label-text",
          trailingIcon: true,
        };
    }
  }

  if (
    state.leadingIcon === true &&
    state.state === "hovered" &&
    state.style === "outlined" &&
    state.textConfigurations === "input-text" &&
    state.trailingIcon === true
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          leadingIcon: true,
          state: "enabled",
          style: "outlined",
          textConfigurations: "input-text",
          trailingIcon: true,
        };
    }
  }

  if (
    state.leadingIcon === true &&
    state.state === "enabled" &&
    state.style === "outlined" &&
    state.textConfigurations === "input-text" &&
    state.trailingIcon === true
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          leadingIcon: true,
          state: "hovered",
          style: "outlined",
          textConfigurations: "input-text",
          trailingIcon: true,
        };
    }
  }

  if (
    state.leadingIcon === false &&
    state.state === "hovered" &&
    state.style === "outlined" &&
    state.textConfigurations === "placeholder-text" &&
    state.trailingIcon === true
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          leadingIcon: false,
          state: "enabled",
          style: "outlined",
          textConfigurations: "placeholder-text",
          trailingIcon: true,
        };
    }
  }

  if (
    state.leadingIcon === false &&
    state.state === "enabled" &&
    state.style === "outlined" &&
    state.textConfigurations === "placeholder-text" &&
    state.trailingIcon === true
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          leadingIcon: false,
          state: "hovered",
          style: "outlined",
          textConfigurations: "placeholder-text",
          trailingIcon: true,
        };
    }
  }

  if (
    state.leadingIcon === false &&
    state.state === "hovered" &&
    state.style === "outlined" &&
    state.textConfigurations === "label-text" &&
    state.trailingIcon === true
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          leadingIcon: false,
          state: "enabled",
          style: "outlined",
          textConfigurations: "label-text",
          trailingIcon: true,
        };
    }
  }

  if (
    state.leadingIcon === false &&
    state.state === "enabled" &&
    state.style === "outlined" &&
    state.textConfigurations === "label-text" &&
    state.trailingIcon === true
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          leadingIcon: false,
          state: "hovered",
          style: "outlined",
          textConfigurations: "label-text",
          trailingIcon: true,
        };
    }
  }

  if (
    state.leadingIcon === false &&
    state.state === "hovered" &&
    state.style === "outlined" &&
    state.textConfigurations === "input-text" &&
    state.trailingIcon === true
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          leadingIcon: false,
          state: "enabled",
          style: "outlined",
          textConfigurations: "input-text",
          trailingIcon: true,
        };
    }
  }

  if (
    state.leadingIcon === false &&
    state.state === "enabled" &&
    state.style === "outlined" &&
    state.textConfigurations === "input-text" &&
    state.trailingIcon === true
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          leadingIcon: false,
          state: "hovered",
          style: "outlined",
          textConfigurations: "input-text",
          trailingIcon: true,
        };
    }
  }

  switch (action) {
    case "click":
      return {
        ...state,
        state: "focused",
      };
  }

  return state;
}

TextField.propTypes = {
  inputText: PropTypes.string,
  supportingText: PropTypes.string,
  labelText: PropTypes.string,
  placeholderText: PropTypes.string,
  showSupportingText: PropTypes.bool,
  style: PropTypes.oneOf(["outlined"]),
  stateProp: PropTypes.oneOf(["enabled", "focused", "hovered", "error", "disabled"]),
  textConfigurations: PropTypes.oneOf(["input-text", "label-text", "placeholder-text"]),
  leadingIcon: PropTypes.bool,
  trailingIcon: PropTypes.bool,
  inputType: PropTypes.string,
  inputType1: PropTypes.string,
  inputType2: PropTypes.string,
};
