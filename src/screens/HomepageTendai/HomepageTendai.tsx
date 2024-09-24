import React, { useState } from 'react';  // <-- Add this line
import { BadgeRoomType } from "../../components/BadgeRoomType";
import { BadgeStatusBooking } from "../../components/BadgeStatusBooking";
import { Button } from "../../components/Button";
import { ButtonIcon } from "../../components/ButtonIcon";
import { ButtonNav } from "../../components/ButtonNav";
import { CardStatistic } from "../../components/CardStatistic";
import { InputSearch } from "../../components/InputSearch";
import { ItemListCategory } from "../../components/ItemListCategory";
import { ItemListTasks } from "../../components/ItemListTasks";
import { TableRowBooking } from "../../components/TableRowBooking";
import { Facebooklogo } from "../../icons/Facebooklogo";
import { IconBell1 } from "../../icons/IconBell1";
import { IconDotsthree4 } from "../../icons/IconDotsthree4";
import { IconGearsix1 } from "../../icons/IconGearsix1";
import { IconNavsCalendar2 } from "../../icons/IconNavsCalendar2";
import { IconNavsCalendarcheck2 } from "../../icons/IconNavsCalendarcheck2";
import { IconNavsChattext2 } from "../../icons/IconNavsChattext2";
import { IconNavsHandsoap2 } from "../../icons/IconNavsHandsoap2";
import { IconNavsHouseline2 } from "../../icons/IconNavsHouseline2";
import { IconNavsMoney2 } from "../../icons/IconNavsMoney2";
import { IconNavsPackage2 } from "../../icons/IconNavsPackage2";
import { IconNavsSquaresfour2 } from "../../icons/IconNavsSquaresfour2";
import { IconPlus1 } from "../../icons/IconPlus1";
import { IconStatsCurrencycircledollar } from "../../icons/IconStatsCurrencycircledollar";
import { IconStatsSignin } from "../../icons/IconStatsSignin";
import { IconStatsSignout } from "../../icons/IconStatsSignout";
import { IconTrenddown1 } from "../../icons/IconTrenddown1";
import { IconTrendup4 } from "../../icons/IconTrendup4";
import { Instagramlogo } from "../../icons/Instagramlogo";
import { Linkedinlogo } from "../../icons/Linkedinlogo";
import { Twitterlogo } from "../../icons/Twitterlogo";
import { Youtubelogo1 } from "../../icons/Youtubelogo1";
import "./style.css";


export const HomepageTendai = (): JSX.Element => {

  const [rows, setRows] = useState([
    {
      reference: 'RFQ 1234455',
      tenderName: 'Provision of Horse Supplies',
      organization: 'UNDP',
      datePublished: 'Sep 5, 2023',
      notes: 'HOT TENDER',
      bidDeadline: 'Sep 13 2024',
      tenderStatus: 'Pre Qualification',
    },
    {
      reference: 'RFQ 1234456',
      tenderName: 'Provision of Water Supply',
      organization: 'UNICEF',
      datePublished: 'Sep 10, 2023',
      notes: 'URGENT',
      bidDeadline: 'Sep 20 2024',
      tenderStatus: 'Pre Qualification',
    },
    // Add more rows here...
  ]);

  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Function to handle "View More" click
  const handleViewMore = () => {
    setRowsPerPage(prevRowsPerPage => prevRowsPerPage + 5);
  };

  // Get the current rows to display based on rowsPerPage
  const currentRows = rows.slice(0, rowsPerPage);

  
  return (
    <div className="homepage-tendai">
      <div className="sidebar">
        <div className="menu-nav">
          <ButtonNav
            active
            className="button-nav-instance"
            icon={<IconNavsSquaresfour2 className="icon-instance-node" color="#0D0E0D" />}
            text="Dashboard"
            type="default" showDropdown={false} showBadge={false} href={""} href1={""} textClassName={undefined}          />
          <ButtonNav
            active
            className="design-component-instance-node"
            href="abcd.com"
            icon={<IconNavsCalendarcheck2 className="icon-instance-node" />}
            text="All Tenders"
            type="default" showDropdown={false} showBadge={false} href1={""} textClassName={undefined}          />
          <ButtonNav
            active
            className="button-nav-2"
            href1="www.neurolab.ae"
            icon={<IconNavsHouseline2 className="icon-instance-node" />}
            text="Proposal Generation"
            type="default" showDropdown={false} showBadge={false} href={""} textClassName={undefined}          />
          <ButtonNav
            active
            className="design-component-instance-node"
            href="abcd.com"
            icon={<IconNavsChattext2 className="icon-instance-node" />}
            text="Future Tenders"
            type="default" showDropdown={false} showBadge={false} href1={""} textClassName={undefined}          />
          <ButtonNav
            active
            className="design-component-instance-node"
            href="abcd.com"
            icon={<IconNavsHandsoap2 className="icon-instance-node" />}
            text="Competitive Analysis"
            textClassName="button-nav-3"
            type="default" showDropdown={false} showBadge={false} href1={""}          />
          <ButtonNav
            active
            className="design-component-instance-node"
            href="abcd.com"
            icon={<IconNavsPackage2 className="icon-instance-node" />}
            text="Supplier Mgmt."
            type="default" showDropdown={false} showBadge={false} href1={""} textClassName={undefined}          />
          <ButtonNav
            active
            className="design-component-instance-node"
            href="abcd.com"
            icon={<IconNavsCalendar2 className="icon-instance-node" />}
            text="Completed Tenders"
            textClassName="button-nav-4"
            type="default" showDropdown={false} showBadge={false} href1={""}          />
          <ButtonNav
            active
            className="design-component-instance-node"
            href="abcd.com"
            icon={<IconNavsMoney2 className="icon-instance-node" />}
            text="Compliance Info"
            type="default" showDropdown={false} showBadge={false} href1={""} textClassName={undefined}          />
          <div className="button-nav-5">
            <div className="text-7" />
          </div>
        </div>
      </div>
      <div className="content">
        <div className="head-4">
          <div className="title-2">TendAI Dashboard</div>
          <div className="right-section">
            <InputSearch className="input-search-instance" placeholder="Search Tender, RFQ Number,.." size="medium" />
            <div className="section-user-profile">
              <div className="user-profile">
                <div className="avatar" />
                <div className="user-info">
                  <div className="text-wrapper-2">Yousef Chahien</div>
                  <div className="role">Intermarkets Alliance - Admin</div>
                </div>
              </div>
              <div className="div-2">
                <div className="icon-gearsix-wrapper">
                  <IconGearsix1 className="icon-instance-node" />
                </div>
                <ButtonIcon
                  className="button-icon-2"
                  divRedClassName="button-icon-3"
                  icon={<IconBell1 className="icon-instance-node" color="#6E6E6E" />}
                  size="medium"
                  type="secondary" showBadge={false} 
                  override={undefined}    

                  />
              </div>
            </div>
          </div>
        </div>
        <div className="body-3">
          <div className="body-main">
            <div className="section-statistics">
              <div className="row">
                <CardStatistic
                  amount="32"
                  category="New Tenders"
                  categoryClassName="design-component-instance-node-2"
                  className="card-statistic-instance"
                  detailClassName="design-component-instance-node-2"
                  href=""
                  iconClassName="card-statistic-2"
                  iconTrendupColor="black"
                  numberClassName="design-component-instance-node-2"
                  percentage="8.70%"
                  percentageClassName="card-statistic-2"
                  text="from yesterday"
                  type="special" icon={undefined} override={undefined}                />
                <CardStatistic
                  amount="3"
                  category="High Match Tenders"
                  categoryClassName="design-component-instance-node-2"
                  className="card-statistic-instance"
                  detailClassName="design-component-instance-node-2"
                  href=""
                  icon={<IconStatsSignin className="icon-instance-node-2" />}
                  iconClassName="card-statistic-2"
                  override={<IconTrendup4 className="icon-instance-node-3" />}
                  percentage="3.56%"
                  percentageClassName="card-statistic-2"
                  text="from last week"
                  type="default" iconTrendupColor={""} numberClassName={undefined}                />
              </div>
              <div className="row">
                <CardStatistic
                  amount="31"
                  category="Medium Matched Tenders"
                  categoryClassName="card-statistic-3"
                  className="card-statistic-instance"
                  detailClassName="design-component-instance-node-2"
                  href=""
                  icon={<IconStatsSignout className="icon-instance-node-2" />}
                  iconClassName="card-statistic-2"
                  override={<IconTrenddown1 className="icon-instance-node-3" />}
                  percentage="1.06%"
                  percentageClassName="card-statistic-2"
                  text="from last week"
                  type="default" iconTrendupColor={""} numberClassName={undefined}                />
                <CardStatistic
                  amount="20"
                  category="WON Tenders"
                  categoryClassName="design-component-instance-node-2"
                  className="card-statistic-instance"
                  detailClassName="design-component-instance-node-2"
                  href=""
                  icon={<IconStatsCurrencycircledollar className="icon-instance-node-2" />}
                  iconClassName="card-statistic-2"
                  override={<IconTrendup4 className="icon-instance-node-3" />}
                  percentage="5.70%"
                  percentageClassName="card-statistic-2"
                  text="from last week"
                  type="default" iconTrendupColor={""} numberClassName={undefined}                />
              </div>
            </div>
            <div className="widget-reservations">
              <div className="header-section">
                <div className="div-title">
                  <div className="title-3">List of New Tenders</div>
                </div>
                <div className="div-2">
                  <InputSearch className="input-search-2" placeholder="Search by Tender Details" size="small" />
                  <div className="button-pickers">
                    <Button
                      className="design-component-instance-node-3"
                      size="small"
                      text="All Status"
                      type="primary"
                      withIcon="right"
                    />
                  </div>
                </div>
              </div>
              <div className="body-4">
                <TableRowBooking
                  cellDurationClassName="table-row-booking-list"
                  cellGuestClassName="table-row-booking-list"
                  cellIdClassName="table-row-booking-list"
                  cellInOutClassName="table-row-booking-list"
                  cellRnumberClassName="table-row-booking-list"
                  cellRtypeClassName="table-row-booking-list"
                  cellStatusClassName="table-row-booking-list"
                  className="table-tender-list"
                  divClassName="design-component-instance-node-2"
                  divClassNameOverride="design-component-instance-node-2"
                  iconSort7Color="black"
                  iconSort7Color1="black"
                  iconSort7Color2="black"
                  iconSort7Color3="black"
                  iconSort7Color4="black"
                  iconSort7Color5="black"
                  iconSort7Fill="black"
                  iconSort7StyleOverrideClassName="icon-instance-node-3"
                  text="Reference"
                  text1="Tender Name"
                  text2="Otganization"
                  text3="Date Published"
                  text4="NOTES"
                  text5="BID DEADLINE"
                  text6="Tender Status"
                  titleClassName="design-component-instance-node-2"
                  titleClassName1="design-component-instance-node-2"
                  titleClassName2="table-row-booking-instance"
                  titleClassName3="design-component-instance-node-2"
                  titleClassNameOverride="design-component-instance-node-2"
                  type="head" date={""} duration={""} name={""} rNumber={""} dateOut={""} bookId={""}                />
                <div className="table-tender-list-2">
                  <div className="cell-RFQ-reference">
                    <div className="text-8">RFQ 1234455</div>
                  </div>
                  <div className="cell-tender-name">
                    <p className="p">
                      Provision of Horse Supplies
                      <br />
                      for Jordanian Armed Forces <br />
                      in India
                    </p>
                  </div>
                  <div className="div-2">
                    <BadgeRoomType
                      className="design-component-instance-node-3"
                      colorCategoryClassName="badge-org-type"
                      status="deluxe"
                      text="UNDP"
                    />
                  </div>
                  <div className="cell-date-published">
                    <div className="text-8">Sep 5, 2023</div>
                  </div>
                  <div className="cell-notes">
                    <div className="text-9">HOT TENDER</div>
                  </div>
                  <div className="cell-bid-deadline">
                    <div className="text-8">Sep 13 2024</div>
                    <div className="text-10">-</div>
                    <div className="text-8">4 Days Remaining</div>
                  </div>
                  <div className="cell-RFQ-status">
                    <BadgeStatusBooking
                      className="badge-status-booking-instance"
                      status="check-in"
                      text="Pre Qualification"
                    />
                  </div>
                </div>
                <div className="table-tender-list-2">
                  <div className="cell-RFQ-reference">
                    <div className="text-8">RFQ 1234455</div>
                  </div>
                  <div className="cell-tender-name">
                    <p className="p">
                      Provision of Horse Supplies
                      <br />
                      for Jordanian Armed Forces <br />
                      in India
                    </p>
                  </div>
                  <div className="div-2">
                    <BadgeRoomType
                      className="design-component-instance-node-3"
                      colorCategoryClassName="badge-org-type"
                      status="deluxe"
                      text="UNDP"
                    />
                  </div>
                  <div className="cell-date-published">
                    <div className="text-8">Sep 5, 2023</div>
                  </div>
                  <div className="cell-notes">
                    <div className="text-9">HOT TENDER</div>
                  </div>
                  <div className="cell-bid-deadline">
                    <div className="text-8">Sep 13 2024</div>
                    <div className="text-10">-</div>
                    <div className="text-8">4 Days Remaining</div>
                  </div>
                  <div className="cell-RFQ-status">
                    <BadgeStatusBooking
                      className="badge-status-booking-instance"
                      status="check-in"
                      text="Pre Qualification"
                    />
                  </div>
                </div>
                <div className="table-tender-list-2">
                  <div className="cell-RFQ-reference">
                    <div className="text-8">RFQ 1234455</div>
                  </div>
                  <div className="cell-tender-name">
                    <p className="p">
                      Provision of Horse Supplies
                      <br />
                      for Jordanian Armed Forces <br />
                      in India
                    </p>
                  </div>
                  <div className="div-2">
                    <BadgeRoomType
                      className="design-component-instance-node-3"
                      colorCategoryClassName="badge-org-type"
                      status="deluxe"
                      text="UNDP"
                    />
                  </div>
                  <div className="cell-date-published">
                    <div className="text-8">Sep 5, 2023</div>
                  </div>
                  <div className="cell-notes">
                    <div className="text-9">HOT TENDER</div>
                  </div>
                  <div className="cell-bid-deadline">
                    <div className="text-8">Sep 13 2024</div>
                    <div className="text-10">-</div>
                    <div className="text-8">4 Days Remaining</div>
                  </div>
                  <div className="cell-RFQ-status">
                    <BadgeStatusBooking
                      className="badge-status-booking-instance"
                      status="check-in"
                      text="Pre Qualification"
                    />
                  </div>
                </div>
                <div className="table-tender-list-2">
                  <div className="cell-RFQ-reference">
                    <div className="text-8">RFQ 1234455</div>
                  </div>
                  <div className="cell-tender-name">
                    <p className="p">
                      Provision of Horse Supplies
                      <br />
                      for Jordanian Armed Forces <br />
                      in India
                    </p>
                  </div>
                  <div className="div-2">
                    <BadgeRoomType
                      className="design-component-instance-node-3"
                      colorCategoryClassName="badge-org-type"
                      status="deluxe"
                      text="UNDP"
                    />
                  </div>
                  <div className="cell-date-published">
                    <div className="text-8">Sep 5, 2023</div>
                  </div>
                  <div className="cell-notes">
                    <div className="text-9">HOT TENDER</div>
                  </div>
                  <div className="cell-bid-deadline">
                    <div className="text-8">Sep 13 2024</div>
                    <div className="text-10">-</div>
                    <div className="text-8">4 Days Remaining</div>
                  </div>
                  <div className="cell-RFQ-status">
                    <BadgeStatusBooking
                      className="badge-status-booking-instance"
                      status="check-in"
                      text="Pre Qualification"
                    />
                  </div>
                </div>
                <div className="table-tender-list-2">
                  <div className="cell-RFQ-reference">
                    <div className="text-8">RFQ 1234455</div>
                  </div>
                  <div className="cell-tender-name">
                    <p className="p">
                      Provision of Horse Supplies
                      <br />
                      for Jordanian Armed Forces <br />
                      in India
                    </p>
                  </div>
                  <div className="div-2">
                    <BadgeRoomType
                      className="design-component-instance-node-3"
                      colorCategoryClassName="badge-org-type"
                      status="deluxe"
                      text="UNDP"
                    />
                  </div>
                  <div className="cell-date-published">
                    <div className="text-8">Sep 5, 2023</div>
                  </div>
                  <div className="cell-notes">
                    <div className="text-9">HOT TENDER</div>
                  </div>
                  <div className="cell-bid-deadline">
                    <div className="text-8">Sep 13 2024</div>
                    <div className="text-10">-</div>
                    <div className="text-8">4 Days Remaining</div>
                  </div>
                  <div className="cell-RFQ-status">
                    <BadgeStatusBooking
                      className="badge-status-booking-instance"
                      status="check-in"
                      text="Pre Qualification"
                    />
                  </div>
                </div>
                <div className="table-tender-list-2">
                  <div className="cell-RFQ-reference">
                    <div className="text-8">RFQ 1234455</div>
                  </div>
                  <div className="cell-tender-name">
                    <p className="p">
                      Provision of Horse Supplies
                      <br />
                      for Jordanian Armed Forces <br />
                      in India
                    </p>
                  </div>
                  <div className="div-2">
                    <BadgeRoomType
                      className="design-component-instance-node-3"
                      colorCategoryClassName="badge-org-type"
                      status="deluxe"
                      text="UNDP"
                    />
                  </div>
                  <div className="cell-date-published">
                    <div className="text-8">Sep 5, 2023</div>
                  </div>
                  <div className="cell-notes">
                    <div className="text-9">HOT TENDER</div>
                  </div>
                  <div className="cell-bid-deadline">
                    <div className="text-8">Sep 13 2024</div>
                    <div className="text-10">-</div>
                    <div className="text-8">4 Days Remaining</div>
                  </div>
                  <div className="cell-RFQ-status">
                    <BadgeStatusBooking
                      className="badge-status-booking-instance"
                      status="check-in"
                      text="Pre Qualification"
                    />
                  </div>
                </div>
              </div>
              <div className="cell-RFQ-reference-2">
                <p className="text-11">Page 1 of 20 View More</p>
              </div>
            </div>
          </div>
          <div className="body-side">
            <div className="div-3">
              <div className="header-section">
                <div className="div-title">
                  <div className="title-3">Company Profile Rating</div>
                </div>
                <div className="right-section-2">
                  <div className="button-pickers-2" />
                  <ButtonIcon
                    className="button-more"
                    override={<IconDotsthree4 className="icon-dotsthree-4" color="#0D0E0D" />}
                    size="small"
                    type="transparent" showBadge={false} icon={undefined} divRedClassName={undefined}                  />
                </div>
              </div>
              <div className="body-5">
                <div className="div-4">
                  <div className="rating">
                    <div className="number-3">4.6</div>
                    <div className="category-3">/5</div>
                  </div>
                  <div className="number-wrapper">
                    <div className="text-wrapper-2">Impressive</div>
                  </div>
                </div>
                <div className="performance-category">
                  <ItemListCategory
                    barChartClassName="item-list-category-rating"
                    barClassName="design-component-instance-node-6"
                    category="General Info"
                    categoryClassName="design-component-instance-node-5"
                    className="design-component-instance-node-4"
                    score="4.4" scoreClassName={undefined}                  />
                  <ItemListCategory
                    barChartClassName="item-list-category-rating-instance"
                    barClassName="design-component-instance-node-6"
                    category="Past Performance"
                    categoryClassName="design-component-instance-node-5"
                    className="design-component-instance-node-4"
                    score="4.7"
                    scoreClassName="item-list-category-instance"
                  />
                  <ItemListCategory
                    barChartClassName="item-list-category-2"
                    barClassName="design-component-instance-node-6"
                    category="Services"
                    categoryClassName="design-component-instance-node-5"
                    className="design-component-instance-node-4"
                    score="4.6" scoreClassName={undefined}                  />
                  <ItemListCategory
                    barChartClassName="item-list-category-3"
                    barClassName="design-component-instance-node-6"
                    category="Technical Abilities"
                    categoryClassName="design-component-instance-node-5"
                    className="design-component-instance-node-4"
                    score="4.8"
                    scoreClassName="item-list-category-instance"
                  />
                  <ItemListCategory
                    barChartClassName="item-list-category-4"
                    barClassName="design-component-instance-node-6"
                    category="Location"
                    categoryClassName="design-component-instance-node-5"
                    className="design-component-instance-node-4"
                    score="4.5" scoreClassName={undefined}                  />
                </div>
              </div>
            </div>
            <div className="div-3">
              <div className="header-section">
                <div className="div-title">
                  <div className="title-3">Tasks</div>
                </div>
                <div className="div-2">
                  <div className="button-pickers-2" />
                  <ButtonIcon
                    className="button-more-2"
                    override={<IconPlus1 className="icon-plus" color="#0F1113" />}
                    size="small"
                    type="default" showBadge={false} icon={undefined} divRedClassName={undefined}                  />
                </div>
              </div>
              <div className="body-4">
                <ItemListTasks
                  buttonIconIcon={<IconDotsthree4 className="icon-instance-node" color="#6E6E6E" />}
                  checkBoxClassName="item-list-tasks-instance"
                  className="design-component-instance-node-4"
                  date="June 19, 2028"
                  dateClassName="design-component-instance-node-5"
                  infoClassName="design-component-instance-node-6"
                  task="Restock Housekeeping Supplies on 3rd Floor" vector={""}                />
                <ItemListTasks
                  buttonIconIcon={<IconDotsthree4 className="icon-instance-node" color="#6E6E6E" />}
                  checkBoxClassName="item-list-tasks-2"
                  className="design-component-instance-node-4"
                  date="June 20, 2028"
                  dateClassName="design-component-instance-node-5"
                  infoClassName="design-component-instance-node-6"
                  task="Inspect and Clean the Pool Area"
                  vector="/img/vector-7-3.svg"
                />
                <ItemListTasks
                  buttonIconIcon={<IconDotsthree4 className="icon-instance-node" color="#6E6E6E" />}
                  checkBoxClassName="item-list-tasks-3"
                  className="design-component-instance-node-4"
                  date="June 20, 2028"
                  dateClassName="design-component-instance-node-5"
                  infoClassName="design-component-instance-node-6"
                  task="Inspect and Clean the Pool Area"
                  vector="/img/vector-7-3.svg"
                />
                <ItemListTasks
                  buttonIconIcon={<IconDotsthree4 className="icon-instance-node" color="#6E6E6E" />}
                  checkBoxClassName="item-list-tasks-3"
                  className="design-component-instance-node-4"
                  date="June 20, 2028"
                  dateClassName="design-component-instance-node-5"
                  infoClassName="design-component-instance-node-6"
                  task="Check-In Assistance During Peak Hours (4 PM - 6 PM)"
                  vector="/img/vector-7.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="div-4">
          <div className="legal-information">
            <div className="text-wrapper-3">Copyright © 2024 TendAI</div>
            <a className="links" href="" rel="noopener noreferrer" target="_blank">
              <a className="text-wrapper-4" href="abcd.com" rel="noopener noreferrer" target="_blank">
                Privacy Policy
              </a>
              <a className="text-wrapper-4" href="abcd.com" rel="noopener noreferrer" target="_blank">
                Term and conditions
              </a>
              <a className="text-wrapper-4" href="abcd.com" rel="noopener noreferrer" target="_blank">
                Contact
              </a>
            </a>
          </div>
          <div className="social-media">
            <Facebooklogo className="icon-instance-node" color="#A3A3A3" />
            <Twitterlogo className="icon-instance-node" color="#A3A3A3" />
            <Instagramlogo className="icon-instance-node" color="#A3A3A3" />
            <Youtubelogo1 className="icon-instance-node" />
            <Linkedinlogo className="icon-instance-node" color="#A3A3A3" />
          </div>
        </div>
      </div>
    </div>
  );
};
