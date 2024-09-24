/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconSort7 } from "../../icons/IconSort7";
import { BadgeRoomType } from "../BadgeRoomType";
import { BadgeStatusBooking } from "../BadgeStatusBooking";
import "./style.css";

interface Props {
  date: string;
  duration: string;
  name: string;
  rNumber: string;
  dateOut: string;
  bookId: string;
  type: "body" | "head";
  className: any;
  cellIdClassName: any;
  titleClassName: any;
  text: string;
  iconSort7Color: string;
  cellGuestClassName: any;
  titleClassNameOverride: any;
  text1: string;
  iconSort7Fill: string;
  cellRtypeClassName: any;
  divClassName: any;
  text2: string;
  iconSort7Color1: string;
  cellRnumberClassName: any;
  divClassNameOverride: any;
  text3: string;
  iconSort7StyleOverrideClassName: any;
  iconSort7Color2: string;
  cellDurationClassName: any;
  titleClassName1: any;
  text4: string;
  iconSort7Color3: string;
  cellInOutClassName: any;
  titleClassName2: any;
  text5: string;
  iconSort7Color4: string;
  cellStatusClassName: any;
  titleClassName3: any;
  text6: string;
  iconSort7Color5: string;
}

export const TableRowBooking = ({
  date = "June 19, 2024",
  duration = "4 nights",
  name = "Catherine Lopp",
  rNumber = "Room 204",
  dateOut = "June 19, 2024",
  bookId = "LG-B00110",
  type,
  className,
  cellIdClassName,
  titleClassName,
  text = "Booking ID",
  iconSort7Color = "#6E6E6E",
  cellGuestClassName,
  titleClassNameOverride,
  text1 = "Guest Name",
  iconSort7Fill = "#6E6E6E",
  cellRtypeClassName,
  divClassName,
  text2 = "Room Type",
  iconSort7Color1 = "#6E6E6E",
  cellRnumberClassName,
  divClassNameOverride,
  text3 = "Room Number",
  iconSort7StyleOverrideClassName,
  iconSort7Color2 = "#6E6E6E",
  cellDurationClassName,
  titleClassName1,
  text4 = "Duration",
  iconSort7Color3 = "#6E6E6E",
  cellInOutClassName,
  titleClassName2,
  text5 = "Check-In &amp; Check-Out",
  iconSort7Color4 = "#6E6E6E",
  cellStatusClassName,
  titleClassName3,
  text6 = "Status",
  iconSort7Color5 = "#6E6E6E",
}: Props): JSX.Element => {
  return (
    <div className={`table-row-booking ${type} ${className}`}>
      <div className={`cell-ID ${cellIdClassName}`}>
        {type === "head" && (
          <>
            <div className={`title ${titleClassName}`}>{text}</div>
            <IconSort7 className="icon-sort" color={iconSort7Color} />
          </>
        )}

        {type === "body" && <div className="text-3">{bookId}</div>}
      </div>
      <div className={`cell-guest ${cellGuestClassName}`}>
        {type === "head" && (
          <>
            <div className={`title ${titleClassNameOverride}`}>{text1}</div>
            <IconSort7 className="icon-sort" color={iconSort7Fill} />
          </>
        )}

        {type === "body" && <div className="text-3">{name}</div>}
      </div>
      <div className={`cell-rtype ${cellRtypeClassName}`}>
        {type === "head" && (
          <>
            <div className={`title ${divClassName}`}>{text2}</div>
            <IconSort7 className="icon-sort" color={iconSort7Color1} />
          </>
        )}

        {type === "body" && <BadgeRoomType className="badge-room-type-instance" status="deluxe" text="Deluxe" />}
      </div>
      <div className={`cell-rnumber ${cellRnumberClassName}`}>
        {type === "head" && (
          <>
            <div className={`title ${divClassNameOverride}`}>{text3}</div>
            <IconSort7 className={iconSort7StyleOverrideClassName} color={iconSort7Color2} />
          </>
        )}

        {type === "body" && <div className="text-3">{rNumber}</div>}
      </div>
      <div className={`cell-duration ${cellDurationClassName}`}>
        {type === "head" && (
          <>
            <div className={`title ${titleClassName1}`}>{text4}</div>
            <IconSort7 className="icon-sort" color={iconSort7Color3} />
          </>
        )}

        {type === "body" && <div className="text-3">{duration}</div>}
      </div>
      <div className={`cell-in-out ${cellInOutClassName}`}>
        {type === "head" && (
          <>
            <div className={`title ${titleClassName2}`}>{text5}</div>
            <IconSort7 className="icon-sort" color={iconSort7Color4} />
          </>
        )}

        {type === "body" && (
          <>
            <div className="text-3">{date}</div>
            <div className="text-4">-</div>
            <div className="text-3">{dateOut}</div>
          </>
        )}
      </div>
      <div className={`cell-status ${cellStatusClassName}`}>
        {type === "head" && (
          <>
            <div className={`title ${titleClassName3}`}>{text6}</div>
            <IconSort7 className="icon-sort" color={iconSort7Color5} />
          </>
        )}

        {type === "body" && <BadgeStatusBooking status="check-in" text="Checked-In" />}
      </div>
    </div>
  );
};

TableRowBooking.propTypes = {
  date: PropTypes.string,
  duration: PropTypes.string,
  name: PropTypes.string,
  rNumber: PropTypes.string,
  dateOut: PropTypes.string,
  bookId: PropTypes.string,
  type: PropTypes.oneOf(["body", "head"]),
  text: PropTypes.string,
  iconSort7Color: PropTypes.string,
  text1: PropTypes.string,
  iconSort7Fill: PropTypes.string,
  text2: PropTypes.string,
  iconSort7Color1: PropTypes.string,
  text3: PropTypes.string,
  iconSort7Color2: PropTypes.string,
  text4: PropTypes.string,
  iconSort7Color3: PropTypes.string,
  text5: PropTypes.string,
  iconSort7Color4: PropTypes.string,
  text6: PropTypes.string,
  iconSort7Color5: PropTypes.string,
};
