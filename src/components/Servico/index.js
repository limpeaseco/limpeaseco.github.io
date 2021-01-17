import {
  Typography,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import * as S from "./styles";

function Servico({ servico }) {
  return (
    <S.CardStyled key={servico.id}>
      <CardActionArea>
        <CardMedia
          style={{
            height: "250px",
          }}
          image={servico.imgWeb}
          title={servico.titulo}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {servico.titulo}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {servico.texto}
          </Typography>
        </CardContent>
      </CardActionArea>
    </S.CardStyled>
  );
}

export default Servico;
