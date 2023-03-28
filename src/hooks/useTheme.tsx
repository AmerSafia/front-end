import * as React from "react";
import { createTheme } from "@mui/material/styles";

function useCustomTheme() {
  const [mode, setMode] = React.useState<"light" | "dark">("light");  
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return {
    theme, colorMode
  }
}

export default useCustomTheme;
