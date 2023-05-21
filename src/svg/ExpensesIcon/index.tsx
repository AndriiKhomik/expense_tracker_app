import React from "react";

const ExpensesIcon = ({ color }: { color: string }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="23" fill="none">
      <path
        fill={color}
        d="M27.391.5h-26c-.553 0-1 .447-1 1v5h28v-5c0-.553-.446-1-1-1Zm-27 21c0 .553.447 1 1 1h26c.554 0 1-.447 1-1V9.25h-28V21.5Zm18.094-5.75a.25.25 0 0 1 .25-.25h5.156a.25.25 0 0 1 .25.25V18a.25.25 0 0 1-.25.25h-5.156a.25.25 0 0 1-.25-.25v-2.25Z"
      />
    </svg>
  );
};

export default ExpensesIcon;
