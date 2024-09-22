import { Box, Tab, Tabs } from "@mui/material";
import Icon from "../../atoms/Icon/Icon";
import "./Sidebar.css";
import { CustomTabPanel } from "../../atoms/CustomTabPanel/CustomTabPanel";
import { a11yProps } from "../../../utils";
import { useState } from "react";
import ItemCard from "../../molecules/ItemCard/ItemCard";

export default function Sidebar() {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div className="sideBar">
      <span className="sidebarIconWrapper">
        <Icon
          color="var(--color-blue-300)"
          bgColor="var(--color-accent-100)"
          name="bxs-file-blank"
        />
        <Icon
          color="var(--color-blue-300)"
          bgColor="var(--color-accent-100)"
          name="bxs-phone-call"
        />
        <Icon
          color="var(--color-blue-300)"
          bgColor="var(--color-accent-100)"
          name="bxs-check-circle"
        />
        <Icon
          color="var(--color-blue-300)"
          bgColor="var(--color-accent-100)"
          name="bx-calendar-event"
        />
      </span>
      <Box sx={{ maxWidth: "437px" }}>
        <Box
          sx={{
            backgroundColor: "var(--color-background-500)",
          }}
        >
          <Tabs
            className="tabs"
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
              label="All"
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
              label="Notes & Calls"
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
              label="Tasks"
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
              label="Meeting"
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
              label="Files"
              {...a11yProps(4)}
            />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <ItemCard />
          <ItemCard />
          <ItemCard />
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
      </Box>
    </div>
  );
}
