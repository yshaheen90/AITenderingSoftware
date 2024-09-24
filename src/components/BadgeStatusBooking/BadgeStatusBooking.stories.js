import { BadgeStatusBooking } from ".";

export default {
  title: "Components/BadgeStatusBooking",
  component: BadgeStatusBooking,
  argTypes: {
    status: {
      options: ["check-in", "pending"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    status: "check-in",
    className: {},
    text: "Checked-In",
  },
};
