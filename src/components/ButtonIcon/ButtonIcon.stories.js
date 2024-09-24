import { ButtonIcon } from ".";

export default {
  title: "Components/ButtonIcon",
  component: ButtonIcon,
  argTypes: {
    size: {
      options: ["large", "x-small", "medium", "small"],
      control: { type: "select" },
    },
    type: {
      options: ["gost", "secondary", "transparent", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    showBadge: true,
    size: "large",
    type: "gost",
    className: {},
    divRedClassName: {},
  },
};
