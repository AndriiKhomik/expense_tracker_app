import React, { useState } from "react";
import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "../../svg/HomeIcon";
import ExpensesIcon from "../../svg/ExpensesIcon";
import AddIcon from "../../svg/AddIcon";
import CalendarIcon from "../../svg/CalendarIcon";
import GearIcon from "../../svg/GearIcon";
import { useLocation, useNavigate } from "react-router-dom";

const routes = {
  0: "/",
  1: "/expenses",
};

const Footer = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <Box sx={{ width: 414, marginBottom: "12px" }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          // @ts-ignore
          navigate(routes[newValue]);
        }}
        sx={{
          padding: "20px 16px",
          borderBottomLeftRadius: "24px",
          borderBottomRightRadius: "24px",
          boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.09)",
        }}
      >
        <BottomNavigationAction
          icon={<HomeIcon color={pathname === "/" ? "#FF643B" : "#A3A3A3"} />}
        />
        <BottomNavigationAction
          icon={
            <ExpensesIcon
              color={pathname === "/expenses" ? "#FF643B" : "#A3A3A3"}
            />
          }
        />
        <BottomNavigationAction icon={<AddIcon />} />
        <BottomNavigationAction icon={<CalendarIcon />} />
        <BottomNavigationAction icon={<GearIcon />} />
      </BottomNavigation>
    </Box>
  );
};

export default Footer;
