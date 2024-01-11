import { Titles } from ".";

export default {
  title: "Components/Titles",
  component: Titles,
  argTypes: {
    size: {
      options: ["sixty-six", "thirty", "thirty-six", "twenty-two"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    title: "Title",
    size: "sixty-six",
    className: {},
    divClassName: {},
  },
};
