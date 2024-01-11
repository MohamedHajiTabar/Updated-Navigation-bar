import { Time } from ".";

export default {
  title: "Components/Time",
  component: Time,
  argTypes: {
    theme: {
      options: ["dark", "light"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    hours: "9",
    showLocation: true,
    minutes: "41",
    theme: "dark",
    className: {},
  },
};
