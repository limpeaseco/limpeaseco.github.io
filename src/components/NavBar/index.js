// import { useDispatch, useSelector } from "react-redux"
import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";
// import SearchIcon from "@material-ui/icons/Search";
import * as S from "./styles";
import logo from "../../assets/images/logo2.png";
import { Link } from "react-router-dom";

const NavBar = ({ page }) => {
  // const dispatch = useDispatch()
  // const { inputSearch } = useSelector(state => state.search)
  //   const onChangeInput = (event) => {
  //     dispatch(setInputSearch(event.target.value))
  // }
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <S.Img alt="logo" src={logo} />
        <S.Space />
        {/* <S.Search>
          <div className="searchIcon">
            <SearchIcon />
          </div>
          <S.InputBaseStyled
            color="primary"
            placeholder="Buscar Serviço..."
            // value={inputSearch || ""}
            // onChange={onChangeInput}
          />
        </S.Search> */}
        <Typography variant="h6" component="h2" align="center" onClick={() => window.open('https://web.whatsapp.com/send?phone=+5527995312828', '_blank')} style={{ cursor: "pointer"}}>
          (27) 99531-2828
        </Typography>
        <S.Space />
        <div>
          {page === "home" ? (
            <Button variant="contained" component={Link} to="/contato">
              Contato
            </Button>
          ) : (
            <Button variant="contained" component={Link} to="/">
              Home
            </Button>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
