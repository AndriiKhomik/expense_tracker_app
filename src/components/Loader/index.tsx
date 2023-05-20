import React from "react";
import { RotatingLines } from "react-loader-spinner";
import { LoaderContainer } from "./Loader.styled";

export const Loader = () => {
  return (
    <LoaderContainer>
      <RotatingLines
        strokeColor="currentColor"
        strokeWidth="5"
        animationDuration="0.75"
        width="76"
        visible={true}
      />
    </LoaderContainer>
  );
};

export default Loader;
