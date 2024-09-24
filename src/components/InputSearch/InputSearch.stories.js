import { InputSearch } from ".";

export default {
  title: "Components/InputSearch",
  component: InputSearch,
  argTypes: {
    size: {
      options: ["large", "medium", "small"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    placeholder: "Search placeholder",
    size: "large",
    className: {},
  },
};
