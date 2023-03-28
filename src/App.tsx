import AppRoutes from "./router";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import useCustomTheme from "./hooks/useTheme";
import { ColorModeContext } from "./context/ColorModeContext";
type Props = {};

const App = (props: Props) => {
  const { colorMode, theme } = useCustomTheme();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRoutes />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
