import { useDispatch, useSelector } from "react-redux";

import { Typography, Box, Button } from "@material-ui/core";
import * as S from "./styles";

import principal from "../../assets/images/living-room-2569325_1280.jpg";
import recall from "../../assets/images/recall.jpg";

import { servicos } from "../../utils/constants";
import { getInputSearch } from "../../redux/selectors";
import { setInputSearch } from "../../redux/actions";

import NavBar from "../../components/NavBar";
import Servico from "../../components/Servico";
import Footer from "../../components/Footer";

const Home = () => {
  const dispatch = useDispatch();
  const inputSearch = useSelector(getInputSearch);

  const formatString = (text) =>
    text
      ?.toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

  const result = inputSearch
    ? servicos.filter((servico) => {
        const titulo = formatString(servico?.titulo)?.includes(
          formatString(inputSearch)
        );
        const texto = formatString(servico?.texto)?.includes(
          formatString(inputSearch)
        );
        const texto2 = formatString(servico?.texto2)?.includes(
          formatString(inputSearch)
        );
        const palavras = servico.palavrasChave.filter((item) =>
          formatString(item)?.includes(formatString(inputSearch))
        );
        return titulo || texto || texto2 || palavras[0];
      })
    : [];

  const newSearchButton = (
    <S.ButtonWrapper>
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch(setInputSearch(undefined))}
      >
        Voltar
      </Button>
    </S.ButtonWrapper>
  );

  return (
    <>
      <NavBar />

      {!inputSearch ? (
        <>
          <S.ImgWrapper>
            <img alt="logo" src={principal} />
            <div className="background"></div>
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
                className="subtitulo"
              >
                Higienização e Impermeabilização de Estofados
              </Typography>
            </div>
          </S.ImgWrapper>

          <S.RecallWrapper>
            <div className="imgWrapper">
              <img alt="recall" src={recall} />
            </div>
            <div className="text">
              <Typography
                variant="h4"
                component="h3"
                align="center"
                gutterBottom
              >
                Prêmio Recall
              </Typography>
              <Typography align="center" gutterBottom>
                Estamos imensamente agradecidos à população linharense pelo
                reconhecimento, pelo quarto ano consecutivo da LIMPE A SECO como
                a empresa mais lembrada no ramo de HIGIENIZAÇÃO DE ESTOFADOS.
              </Typography>
              <Typography align="center">
                Eu, Cleiton Dias, agradeço a Deus, por nos sustentar a cada dia,
                a minha mulher Rosana, pelo apoio incondicional nesses 5
                primeiros anos da empresa, aos nossos familiares, amigos,
                parceiros, e em especial aos nossos queridos clientes.
              </Typography>
            </div>
          </S.RecallWrapper>

          <S.Servicos>
            {servicos.map((servico) => (
              <Servico servico={servico} />
            ))}
          </S.Servicos>
        </>
      ) : result.length === 0 ? (
        <Box m={4}>
          {newSearchButton}
          <Typography align="center">Nenhum serviço encontrado.</Typography>
        </Box>
      ) : (
        <>
          <Box m={4}>{newSearchButton}</Box>
          <S.Servicos>
            {result.map((servico) => (
              <Servico servico={servico} />
            ))}
          </S.Servicos>
        </>
      )}

      <Footer />
    </>
  );
};

export default Home;
