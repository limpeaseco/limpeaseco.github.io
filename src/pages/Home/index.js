import {
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import * as S from "./styles";

import principal from "../../assets/images/living-room-2569325_1280.jpg";
import recall from "../../assets/images/recall.jpg";
import tapete from "../../assets/images/tapete.jpg"

import NavBar from "../../components/NavBar";
import { servicos } from "../../utils/constants";

const Home = () => {
  return (
    <>
      <NavBar page="home" />

      <S.ImgWrapper>
        <img alt="logo" src={principal} />
        <div className="titulos">
          <Typography
            variant="h3"
            component="h1"
            align="center"
            color="textSecondary"
          >
            LIMPE A SECO
          </Typography>
          <Typography
            variant="h4"
            component="h2"
            align="center"
            gutterBottom
            color="textSecondary"
          >
            Higienização e Impermeabilização de Estofados
          </Typography>
        </div>
      </S.ImgWrapper>

      <S.Servicos>
        {servicos.map((servico) => (
          <Card key={servico.id} style={{
            width: "30vw"
          }}>
            <CardActionArea>
              <CardMedia
                style={{
                  height: "250px"
                }}
                image={servico.imgWeb}
                title={servico.titulo}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {servico.titulo}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {servico.texto}{" "}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </S.Servicos>

      <S.RecallWrapper>
        <div className="imgWrapper">
          <img alt="recall" src={recall} />
        </div>
        <div className="text">
          <Typography variant="h4" component="h3" align="center" gutterBottom>
            Prêmio Recall
          </Typography>
          <Typography align="center" gutterBottom>
            Estamos imensamente agradecidos à população linharense pelo
            reconhecimento, pelo quarto ano consecutivo da LIMPE A SECO como a
            empresa mais lembrada no ramo de HIGIENIZAÇÃO DE ESTOFADOS.
          </Typography>
          <Typography align="center">
            Eu, Cleiton Dias, agradeço a Deus, por nos sustentar a cada dia, a
            minha mulher Rosana, pelo apoio incondicional nesses 5 primeiros
            anos da empresa, aos nossos familiares, amigos, parceiros, e em
            especial aos nossos queridos clientes.
          </Typography>
        </div>
      </S.RecallWrapper>
    </>
  );
};

export default Home;
