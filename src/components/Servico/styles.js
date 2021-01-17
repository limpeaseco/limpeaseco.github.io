import styled from "styled-components";
import { Card } from "@material-ui/core";

export const CardStyled = styled(Card)`
  width: 30vw;
    margin-bottom: 2vh;
  @media screen and (max-width: 1400px) {
    width: 80vw;
  }
`;
