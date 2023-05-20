import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { LayoutContainer, StyledContainer } from "./CommonLayout.styled";
import Loader from "../Loader";
import { customGlobalStyles } from "./CustomGlobalStyles";

const CommonLayout = () => {
  return (
    <Suspense fallback={<Loader />}>
      <StyledContainer>
        <Header />
        <LayoutContainer>
          {customGlobalStyles}
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </LayoutContainer>
        <Footer />
      </StyledContainer>
    </Suspense>
  );
};

export default CommonLayout;
