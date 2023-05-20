import { styled } from "@mui/system";
import { Container } from "@mui/material";

export const StyledContainer = styled("div")`
  display: grid;
  grid-template-rows: auto 1fr auto;
  justify-content: center;
  min-height: 100vh;
  margin-top: 48px;
`;

export const LayoutContainer = styled(Container)`
  color: #000000;
  width: 414px;
  margin: 0;
  background-color: #ffffff;
`;
