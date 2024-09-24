import { TableRowBooking } from ".";

export default {
  title: "Components/TableRowBooking",
  component: TableRowBooking,
  argTypes: {
    type: {
      options: ["body", "head"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    date: "June 19, 2024",
    duration: "4 nights",
    name: "Catherine Lopp",
    rNumber: "Room 204",
    dateOut: "June 19, 2024",
    bookId: "LG-B00110",
    type: "body",
    className: {},
    cellIdClassName: {},
    titleClassName: {},
    text: "Booking ID",
    iconSort7Color: "#6E6E6E",
    cellGuestClassName: {},
    titleClassNameOverride: {},
    text1: "Guest Name",
    iconSort7Fill: "#6E6E6E",
    cellRtypeClassName: {},
    divClassName: {},
    text2: "Room Type",
    iconSort7Color1: "#6E6E6E",
    cellRnumberClassName: {},
    divClassNameOverride: {},
    text3: "Room Number",
    iconSort7StyleOverrideClassName: {},
    iconSort7Color2: "#6E6E6E",
    cellDurationClassName: {},
    titleClassName1: {},
    text4: "Duration",
    iconSort7Color3: "#6E6E6E",
    cellInOutClassName: {},
    titleClassName2: {},
    text5: "Check-In &amp; Check-Out",
    iconSort7Color4: "#6E6E6E",
    cellStatusClassName: {},
    titleClassName3: {},
    text6: "Status",
    iconSort7Color5: "#6E6E6E",
  },
};
