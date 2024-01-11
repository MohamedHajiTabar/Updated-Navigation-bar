import { CarouselIndicator } from ".";

export default {
  title: "Components/CarouselIndicator",
  component: CarouselIndicator,
  argTypes: {
    position: {
      options: ["two", "one"],
      control: { type: "select" },
    },
    size: {
      options: ["twelve", "sixteen"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    position: "two",
    size: "twelve",
    className: {},
    ellipseClassName: {},
    ellipseClassNameOverride: {},
    divClassName: {},
    divClassNameOverride: {},
    ellipseClassName1: {},
  },
};
