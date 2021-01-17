import styled from "styled-components";
import { Card, CardMedia } from "@material-ui/core";

export const CardStyled = styled(Card)`
  width: 35vw;
  margin-bottom: 2vh;
  @media screen and (max-width: 1000px) {
    width: 80vw;
  }

  .MuiTypography-overline {
    line-height: 2;
  }
`;

export const CardMediaStyled = styled(CardMedia)`
  height: 300px;
  @media screen and (max-width: 1000px) {
    height: 350px;
  }
  @media screen and (max-width: 700px) {
    height: 250px;
  }
  @media screen and (max-width: 500px) {
    height: 180px;
  }
`
