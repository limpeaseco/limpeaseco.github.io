import styled from "styled-components"

export const FooterWrapper = styled.footer`
  min-height: 10vh;
  background-color: rgba(0, 0, 0, 1);
  color: white;
  padding: 2vh 5vw;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 1000px) {
      flex-direction: column-reverse;
      gap: 25px;
      padding: 4vh 5vw;
    }

  .logoWrapper {
    height: 8vh;
    img {
      height: 100%;
    }

    @media screen and (max-width: 1000px) {
      height: 10vh;
    }
  }

  .icones {
    img {
      height: 4vh;
      margin: 0 10px;
      cursor: pointer;
    }
  }

  .dados {
    display: flex;
    flex-direction: column;
  }
`
