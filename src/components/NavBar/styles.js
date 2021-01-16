import styled from "styled-components"
import {InputBase} from "@material-ui/core"

export const Img = styled.img`
  height: 5vh;
`

export const Space = styled.div`
  flex-grow: 1;
`

export const Search = styled.div`
  position: relative;
  border-radius: 5px;
  margin-right: 20px;
  background-color: rgba(225,225,225, 0.15);
  :hover {
    background-color: rgba(225,225,225, 0.25);
  }
  width: auto;

  .searchIcon{
    position: absolute;
    padding: 5px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
  }

`

export const InputBaseStyled = styled(InputBase)`
  color: inherit;
  width: 100%;
  padding-left: 35px;
`
