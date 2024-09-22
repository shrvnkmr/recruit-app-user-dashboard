import Icon from "../../atoms/Icon/Icon";
import { Box, Tab, Tabs } from "@mui/material";
import { a11yProps } from "../../../utils";
import { CustomTabPanel } from "../../atoms/CustomTabPanel/CustomTabPanel";
import { useState } from "react";
import JobComponent from "../../molecules/JobComponent/JobComponent";
import CustomButton from "../../atoms/CustomButton/CustomButton";
import CandidateDetailsList from "../CandidateDetailsList/CandidateDetailsList";
import "./UserInfo.css";
import "../UserCard/UserCard.css";
import "../../molecules/ItemCard/ItemCard.css";

export default function UserInfo() {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="contactWrapper">
        <div className="flexRow gap-4">
          <span className="flexRow gap-2">
            <Icon color="var(--color-text-100)" name="bx-envelope"></Icon>
            <p className="itemText">williamsample@gmail.com</p>
          </span>
          <span className="flexRow gap-2">
            <Icon color="var(--color-text-100)" name="bxs-phone-call"></Icon>
            <p className="itemText">+91 9021232326</p>
          </span>
        </div>
        <div className="flexRow gap-4">
          <span className="flexRow gap-2">
            <Icon color="var(--color-text-100)" name="bx-user-circle" />
            <p className="itemDetails">John Doe</p>
          </span>
          <span className="flexRow gap-2">
            <Icon color="var(--color-text-100)" name="bx-time" />
            <p className="itemDetails">Jul 12, 2023, 11:54 am</p>
          </span>
        </div>
      </div>
      <CandidateDetailsList />
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            backgroundColor: "var(--color-background-500)",
          }}
        >
          <Tabs
            className="userInfoTabs"
            value={value}
            onChange={handleChange}
            variant="scrollable"
            aria-label="todo-items"
          >
            <Tab
              sx={{
                fontWeight: 500,
                fontSize: "12px",
                color: "var(--color-text-300)",
                textTransform: "capitalize",
              }}
              disableRipple
              label="All Details"
              {...a11yProps(0)}
            />
            <Tab
              sx={{
                fontWeight: 500,
                fontSize: "12px",
                color: "var(--color-text-300)",
                textTransform: "capitalize",
              }}
              disableRipple
              label="Assigned Jobs"
              {...a11yProps(1)}
            />
            <Tab
              sx={{
                fontWeight: 500,
                fontSize: "12px",
                color: "var(--color-text-300)",
                textTransform: "capitalize",
              }}
              disableRipple
              label="Related Emails"
              {...a11yProps(2)}
            />
            <Tab
              sx={{
                fontWeight: 500,
                fontSize: "12px",
                color: "var(--color-text-300)",
                textTransform: "capitalize",
              }}
              disableRipple
              label="Candidate Questions"
              {...a11yProps(3)}
            />
            <Tab
              sx={{
                fontWeight: 500,
                fontSize: "12px",
                color: "var(--color-text-300)",
                textTransform: "capitalize",
              }}
              disableRipple
              label="Hotlists"
              {...a11yProps(4)}
            />
            <Tab
              sx={{
                fontWeight: 500,
                fontSize: "12px",
                color: "var(--color-text-300)",
                textTransform: "capitalize",
              }}
              disableRipple
              label="Related Deals"
              {...a11yProps(5)}
            />
            <Tab
              sx={{
                fontWeight: 500,
                fontSize: "12px",
                color: "var(--color-text-300)",
                textTransform: "capitalize",
              }}
              disableRipple
              label="Contact(s) Pitched"
              {...a11yProps(6)}
            />
          </Tabs>
        </Box>
        <div className="userCard">
          <div className="flexRow gap-2">
            <p className="textMd">Assigned Job to William Sample</p>
          </div>
          <div className="flexRow userCardBtnWrapper gap-2">
            <CustomButton
              bgColor="var(--color-blue-300)"
              textColor="var(--color-white)"
              label="Assign To Job"
              hoverColor="var(--color-blue-700)"
            />
            <CustomButton label="View All Assigned Jobs" />
          </div>
        </div>
        <CustomTabPanel padding="0 14px 14px" value={value} index={0}>
          <JobComponent />
          <JobComponent />
          <JobComponent />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <p>Nothing to show here</p>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <p>Nothing to show here</p>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <p>Nothing to show here</p>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
          <p>Nothing to show here</p>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={5}>
          <p>Nothing to show here</p>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={6}>
          <p>Nothing to show here</p>
        </CustomTabPanel>
      </Box>
    </>
  );
}
