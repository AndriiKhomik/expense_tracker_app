import React from "react";
import { AppBar, Toolbar, Avatar } from "@mui/material";
import { Box } from "@mui/system";
import avatar from "./avatar.png";
import BellIcon from "../../svg/BellIcon";
import PageTitle from "../PageTitle";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          borderTopLeftRadius: "24px",
          borderTopRightRadius: "24px",
          backgroundColor: "#ffffff",
          height: "115px",
          justifyContent: "center",
          padding: "3px 3px 0 3px",
          boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.09)",
        }}
      >
        <Toolbar>
          <Avatar
            sx={{
              borderRadius: "6px",
              backgroundColor: "#9B63FC",
              width: "43px",
              height: "43px",
            }}
            alt="Remy Sharp"
            src={avatar}
          />
          <PageTitle />
          <BellIcon />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
