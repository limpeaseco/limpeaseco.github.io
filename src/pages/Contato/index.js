import { Box, Typography, TextField, Button } from "@material-ui/core";

import NavBar from "../../components/NavBar";

const Contato = () => {
  return (
    <>
    <NavBar />
    <Box m={4}>
      <Typography variant="h2" component="h1" align="center" gutterBottom color="textSecondary">
        Contato
      </Typography>

      <Typography variant="h3" component="h2" align="center" gutterBottom color="textSecondary">
        (27) 99531-2828
      </Typography>

      {/* <Box component="form">
        <TextField variant="outlined" size="small" label="Nome" fullWidth margin="dense"/>
        <Box>
          <Button variant="contained" color="primary">Enviar</Button>
        </Box>
      </Box> */}
    </Box>
    </>
  );
};

export default Contato;
