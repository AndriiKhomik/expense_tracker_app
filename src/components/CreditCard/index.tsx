import React, { useState, useEffect } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { BackgroundBox, CreditCardBox } from "./CreditCart.styled";
import MoreIcon from "@mui/icons-material/MoreVert";
import { useGetExpensesQuery } from "../../redux/features/expense/expenseSlice";
import MastercardIcon from "../../svg/MastercardIcon";

const CreditCard = () => {
  const { data: expenses } = useGetExpensesQuery("expensesList", {
    pollingInterval: 15000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });
  const [moneySpent, setmodeySpent] = useState<number>(0);

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    console.log("Here should open menu with settings");
  };

  const totalMoney = 100000;
  const cardNumber: string = "2544754537851023";

  useEffect(() => {
    if (expenses) {
      const moneyLeft =
        totalMoney -
        expenses?.reduce((acc, expense) => expense.expenseAmount + acc, 0);
      setmodeySpent(moneyLeft);
    }
  }, [expenses]);

  return (
    <Box sx={{ padding: "0 11px", marginBottom: "32px" }}>
      <BackgroundBox></BackgroundBox>
      <CreditCardBox>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            marginBottom: "16px",
          }}
        >
          <Typography
            variant="h6"
            color="#ffffff"
            sx={{ fontSize: "18px", lineHeight: "21px" }}
          >
            Total Balance
          </Typography>
          <IconButton
            size="large"
            aria-label="show more"
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            sx={{ color: "#ffffff", transform: "rotate(90deg)", padding: 0 }}
          >
            <MoreIcon />
          </IconButton>
        </Box>
        <Typography
          variant="h4"
          sx={{
            color: "#ffffff",
            fontSize: "30px",
            lineHeight: "35px",
            fontWeight: 700,
            marginBottom: "40px",
          }}
        >
          ${moneySpent.toLocaleString()}.00
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              color: "#A3A3A3",
              fontWeight: 500,
              fontSize: "18px",
              lineHeight: "21px",
            }}
          >
            {/* @ts-ignore */}
            {cardNumber.match(/\d{4}/g).join(" ")}
          </Typography>
          <Box>
            <MastercardIcon />
          </Box>
        </Box>
      </CreditCardBox>
    </Box>
  );
};

export default CreditCard;
