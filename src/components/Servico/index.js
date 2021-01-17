import { Typography, CardMedia, CardContent } from "@material-ui/core";
import * as S from "./styles";

function Servico({ servico }) {
  return (
    <S.CardStyled key={servico.id}>
      <S.CardMediaStyled
        image={servico.imgWeb}
        title={servico.titulo}
      />
      <CardContent>
        <br />
        <Typography gutterBottom variant="h5" component="h2" align="center">
          {servico.titulo}
        </Typography>
        <Typography
          gutterBottom
          variant="body2"
          color="textSecondary"
          component="p"
          align="center"
        >
          {servico.texto}
        </Typography>

        <br />
        <Typography
          variant="overline"
          color="textSecondary"
          component="p"
          align="center"
        >
          {servico.texto2}
        </Typography>
      </CardContent>
    </S.CardStyled>
  );
}

export default Servico;
