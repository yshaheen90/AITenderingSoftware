import { BadgeRoomType } from ".";

export default {
  title: "Components/BadgeRoomType",
  component: BadgeRoomType,
  argTypes: {
    status: {
      options: ["suite", "standard", "deluxe"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    status: "suite",
    className: {},
    colorCategoryClassName: {},
    text: "Deluxe",
  },
};
