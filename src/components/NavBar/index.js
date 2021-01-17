import { useDispatch, useSelector } from "react-redux";
// import { useRouteMatch, Link } from "react-router-dom";

import { AppBar, Toolbar, Typography } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import { setInputSearch } from "../../redux/actions";
import { getInputSearch } from "../../redux/selectors";

import * as S from "./styles";
import logo from "../../assets/images/logo2.png";

const NavBar = () => {
  const dispatch = useDispatch();
  // let match = useRouteMatch();
  const inputSearch = useSelector(getInputSearch);

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <S.Img alt="logo" src={logo} />
        <S.Space />
        <S.Search>
          <div className="searchIcon">
            <SearchIcon />
          </div>
          <S.InputBaseStyled
            color="primary"
            placeholder="Buscar Serviço..."
            value={inputSearch || ""}
            onChange={(event) => dispatch(setInputSearch(event.target.value))}
          />
        </S.Search>
        <S.Space />
        <S.WhatsAppWrapper
          onClick={() => window.open("https://api.whatsapp.com/send?phone=5527995312828&text=Entrei no site. Gostaria de um orçamento!", "_blank")}
        >
            <img
              alt="whatsapp"
              src="https://user-images.githubusercontent.com/45580434/86546051-24b9f900-bf09-11ea-8d74-119dbfd88d11.png"
            />
          <Typography variant="h6" component="h2" align="center">
            (27) 99531-2828
          </Typography>
        </S.WhatsAppWrapper>
        {/* <S.Space />
        <div>
          {match.url === "/" ? (
            <Button variant="contained" component={Link} to="/contato">
              Contato
            </Button>
          ) : (
            <Button variant="contained" component={Link} to="/">
              Home
            </Button>
          )}
        </div> */}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
