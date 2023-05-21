import React from "react";
import { useLocation } from "react-router-dom";
import { Typography } from "@mui/material";
import { Pages } from "../../types";

const pages: Pages[] = [
  { page: "Home", url: "/" },
  { page: "Expenses", url: "/expenses" },
];

const PageTitle = () => {
  const { pathname } = useLocation();

  const title = pages.find(({ url }) => url === pathname);

  return (
    <Typography
      variant="h5"
      component="div"
      sx={{
        flexGrow: 1,
        color: "#000000",
        textAlign: "center",
      }}
    >
      {title?.page}
    </Typography>
  );
};

export default PageTitle;
