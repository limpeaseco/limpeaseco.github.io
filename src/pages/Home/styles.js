import styled from "styled-components"
import { Card } from "@material-ui/core"

export const ImgWrapper = styled.div`
  margin: 4vh auto;
  width: 50%;
  position: relative;
  @media screen and (max-width: 1600px){
    width: 60%;
  }
  @media screen and (max-width: 1400px){
    width: 70%;
  }
  @media screen and (max-width: 1200px){
    width: 80%;
  }
  
  img {
    width: 100%;
    border-radius: 20px;
  }
  
  .titulos {
    position: absolute;
    top: 50px;
    width: 99%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 1200px){
      top: 30px;
    }
  }
`

export const RecallWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 10vw 4vh;

  .imgWrapper {
    width: 40%;
    img {
      width: 100%;
    }
  }

  .text {
    width: 50%;
  }
`

export const Servicos = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 3vw 4vh;

  @media screen and (max-width: 1400px){
    flex-direction: column;
    margin: 0 10vw 4vh;
  }
`

export const CardStyled = styled(Card)`
  width: 30vw;
  @media screen and (max-width: 1400px){
    width: 80vw;
    margin-bottom: 2vh;
  }
`
