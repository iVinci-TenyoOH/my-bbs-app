import { createTheme } from "@mui/material/styles";
import { lightGreen } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: lightGreen[500],
      contrastText: "#fff",
    },
  },
});

export default theme;
