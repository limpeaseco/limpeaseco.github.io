import { Typography } from "@material-ui/core"
import * as S from "./styles"

import logo from "../../assets/images/logo.png";
import face from '../../assets/icons/face.png'
import insta from '../../assets/icons/insta.png'

function Footer() {
  return (
    <S.FooterWrapper>
      <div className="logoWrapper">
        <img alt="logo" src={logo} />
      </div>
      <div className="icones">
        <img alt="face" src={face} onClick={() => window.open("https://www.facebook.com/limpeaseco", "_blank")}/>
        <img alt="insta" src={insta} onClick={() => window.open("https://www.instagram.com/limpeaseco", "_blank")} />
      </div>
      <div className="dados">
        <Typography align="center" variant="h6" gutterBottom>
          Cleiton de Cerqueira Dias
        </Typography>
        <Typography align="center" variant="caption">
          LIMPE A SECO
        </Typography>
        <Typography align="center" variant="caption">
          Av. Governador Dias Lopes, n 10, quadra 31
        </Typography>
        <Typography align="center" variant="caption">
          BNH | Linhares/ES | CEP 29902-060
        </Typography>
      </div>
    </S.FooterWrapper>
  )
}

export default Footer
