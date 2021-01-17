import styled from "styled-components";
import { InputBase } from "@material-ui/core";

export const Img = styled.img`
  height: 5vh;
  @media screen and (max-width: 1000px) {
    height: 3vh;
  }
`;

export const Space = styled.div`
  flex-grow: 1;
`;

export const Search = styled.div`
  position: relative;
  width: auto;
  border-radius: 5px;
  margin: 0 10px;
  background-color: rgba(225, 225, 225, 0.15);
  :hover {
    background-color: rgba(225, 225, 225, 0.25);
  }

  .searchIcon {
    position: absolute;
    padding: 5px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
  }

  .MuiInputBase-root {
    @media screen and (max-width: 800px) {
      font-size: 0.7rem;
    }
  }
`;

export const InputBaseStyled = styled(InputBase)`
  color: inherit;
  width: 100%;
  padding-left: 35px;
  
`;

export const WhatsAppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    filter: sepia() saturate(10000%) hue-rotate(30deg);
    height: 4vh;
    margin-right: 10px;
    @media screen and (max-width: 1000px) {
      height: 2.5vh;
      margin-right: 5px;
    }
  }

  .MuiTypography-h6 {
    @media screen and (max-width: 1000px) {
      font-size: 0.8rem;
    }
  }
`;
