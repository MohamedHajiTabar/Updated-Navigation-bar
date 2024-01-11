import { NavBar } from ".";

export default {
  title: "Components/NavBar",
  component: NavBar,
  argTypes: {
    type: {
      options: ["with-breadcrumbs", "default"],
      control: { type: "select" },
    },
    platform: {
      options: ["tablet", "desktop", "mobile"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "with-breadcrumbs",
    platform: "tablet",
    className: {},
  },
};
