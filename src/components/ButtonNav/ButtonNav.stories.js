import { ButtonNav } from ".";

export default {
  title: "Components/ButtonNav",
  component: ButtonNav,
  argTypes: {
    type: {
      options: ["level-1", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    text: "Dashboard",
    showDropdown: false,
    showBadge: false,
    active: true,
    type: "level-1",
    className: {},
    textClassName: {},
  },
};
