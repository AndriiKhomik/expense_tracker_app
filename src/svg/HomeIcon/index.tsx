import React from "react";

const HomeIcon = ({ color }: { color: string }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="26" fill="none">
      <path
        fill={color}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m1 9.26 9.196-7.51 9.195 7.51v11.8c0 .57-.215 1.116-.598 1.518a1.995 1.995 0 0 1-1.445.628H3.043a1.995 1.995 0 0 1-1.444-.628A2.201 2.201 0 0 1 1 21.061V9.26Z"
      />
      <path
        fill={color}
        d="M7.62 22.696a2.576 2.576 0 0 1 5.152 0v1.554H7.62v-1.554Z"
      />
      <path
        stroke="#fff"
        strokeWidth="2"
        d="M7.62 22.696a2.576 2.576 0 0 1 5.152 0v1.554H7.62v-1.554Z"
      />
    </svg>
  );
};

export default HomeIcon;
