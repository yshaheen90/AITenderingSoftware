import { CardStatistic } from ".";

export default {
  title: "Components/CardStatistic",
  component: CardStatistic,
  argTypes: {
    type: {
      options: ["special", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    category: "New Bookings",
    amount: "840",
    percentage: "5.70%",
    type: "special",
    className: {},
    categoryClassName: {},
    iconClassName: {},
    percentageClassName: {},
    iconTrendupColor: "#6E6E6E",
    numberClassName: {},
    detailClassName: {},
    text: "from last week",
  },
};
