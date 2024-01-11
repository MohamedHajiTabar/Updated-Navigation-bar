import { CsirButton } from ".";

export default {
  title: "Components/CsirButton",
  component: CsirButton,
  argTypes: {
    style: {
      options: ["filled-alternative", "filled", "text", "outlined", "book-a-visit"],
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
    labelTextClassName: {},
  },
};
