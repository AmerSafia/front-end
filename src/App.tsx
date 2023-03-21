import AppRoutes from "./router";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
type Props = {};

const App = (props: Props) => {
  return  (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <AppRoutes />
  </ThemeProvider>
  )
};

export default App;
