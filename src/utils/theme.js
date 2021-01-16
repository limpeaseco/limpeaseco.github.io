import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    common: {
      black: "#000",
      white: "#fff",
    },
    background: {
      paper: "#fff",
      default: "#fafafa",
    },
    primary: {
      light: "rgba(155, 155, 155, 1)",
      main: "rgba(74, 74, 74, 1)",
      dark: "rgba(0, 0, 0, 1)",
      contrastText: "#fff",
    },
    secondary: {
      light: "rgba(105, 161, 227, 1)",
      main: "rgba(74, 144, 226, 1)",
      dark: "rgba(54, 132, 224, 1)",
      contrastText: "#fff",
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
    },
  },
});
