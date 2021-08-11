import { ToDo } from "./ToDo";

//Material-UI
import { ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import { teal, grey } from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    primary: teal,
    secondary: {
      main: grey[200],
    },
  },
});

export const App = () => (
  <ThemeProvider theme={theme}>
    <ToDo />
  </ThemeProvider>
);
