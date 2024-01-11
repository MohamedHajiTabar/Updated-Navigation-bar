import { Footer } from ".";

export default {
  title: "Components/Footer",
  component: Footer,
  argTypes: {
    platform: {
      options: ["tablet", "desktop", "mobile"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    platform: "tablet",
    className: {},
  },
};
