import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    size: {
      options: ["large", "medium", "small"],
      control: { type: "select" },
    },
    withIcon: {
      options: ["left-right", "no-icon", "right", "left"],
      control: { type: "select" },
    },
    type: {
      options: ["primary", "secondary", "transparent", "ghost"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    text: "Button",
    size: "large",
    withIcon: "left-right",
    type: "primary",
    className: {},
  },
};
