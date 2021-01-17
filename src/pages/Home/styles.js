import styled from "styled-components";

export const ImgWrapper = styled.div`
  margin: 4vh auto;
  width: 50%;
  position: relative;

  @media screen and (max-width: 1600px) {
    width: 60%;
  }
  @media screen and (max-width: 1400px) {
    width: 70%;
  }
  @media screen and (max-width: 1200px) {
    width: 90%;
    margin: 3vh auto;
  }

  img {
    width: 100%;
    border-radius: 10px;
  }

  .background {
    background-color: rgba(255, 255, 255, 0.15);
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .titulos {
    position: absolute;
    z-index:2;
    top: 50px;
    width: 99%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 1200px) {
      top: 30px;
    }
    @media screen and (max-width: 600px) {
      top: 10px;
    }

    .MuiTypography-h3 {
      font-weight: 600;
      @media screen and (max-width: 1000px) {
        font-size: 2.5rem;
      }
    }

    .MuiTypography-h4 {
      @media screen and (max-width: 1000px) {
        font-size: 1.2rem;
        font-weight: 600;
      }
      @media screen and (max-width: 600px) {
        font-size: 1rem;
      }
    }
  }
`;

export const RecallWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(155, 155, 155, 0.5);
  padding: 3vh 10vw;
  margin-bottom: 4vh;


  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }

  .imgWrapper {
    width: 40%;
    @media screen and (max-width: 1000px) {
      width: 80%;
      margin-bottom: 2vh;
    }
    img {
      width: 100%;
    }
  }

  .text {
    width: 50%;
    @media screen and (max-width: 1000px) {
      width: 100%;
    }
  }

  .MuiTypography-h4 {
    @media screen and (max-width: 1000px) {
      display: none;
    }
  }

  .MuiTypography-body1 {
    @media screen and (max-width: 1000px) {
      font-size: 0.85rem;
    }
  }
`;

export const Servicos = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
    margin: 0 10vw 4vh;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2vh;
`
