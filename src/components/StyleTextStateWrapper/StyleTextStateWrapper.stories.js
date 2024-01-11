import { StyleTextStateWrapper } from ".";

export default {
  title: "Components/StyleTextStateWrapper",
  component: StyleTextStateWrapper,
  argTypes: {
    style: {
      options: ["filled-alternative", "filled", "text-alt-icon", "text", "outlined", "book-a-visit"],
      control: { type: "select" },
    },
    stateProp: {
      options: ["enabled", "focused", "pressed", "hovered", "disabled"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    labelText: "Label",
    style: "filled-alternative",
    stateProp: "enabled",
    showIcon: true,
    className: {},
    stateLayerClassName: {},
    hasLabelText: true,
  },
};
