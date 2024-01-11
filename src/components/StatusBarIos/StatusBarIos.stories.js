import { StatusBarIos } from ".";

export default {
  title: "Components/StatusBarIos",
  component: StatusBarIos,
  argTypes: {
    theme: {
      options: ["dark", "light"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    theme: "dark",
    className: {},
  },
};
