import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    style: {
      options: ["filled", "text", "outlined", "booka-a-visit"],
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
    style: "filled",
    stateProp: "enabled",
    showIcon: true,
    className: {},
    labelTextClassName: {},
  },
};
