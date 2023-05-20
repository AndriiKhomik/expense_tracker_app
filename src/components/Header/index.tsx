import React from "react";
import { AppBar, Container, Toolbar, Typography, Avatar } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import { Box } from "@mui/system";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          borderTopLeftRadius: "24px",
          borderTopRightRadius: "24px",
          backgroundColor: "#ffffff",
        }}
      >
        <Toolbar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "red" }}
          >
            Photos
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
