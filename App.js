import * as React from "react";
import { useRoutes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import useHookDarkmode from "./src/hooks/useHookDarkmode";
import { AppContext } from "./src/contexts/appContext";
import TopAppbar from "./src/components/molecules/TopAppbar";
import { appRoutes } from "./src/routes";
import { Box } from "@mui/material";

export default function App() {
  const appContext = React.useContext(AppContext);
  const { darkmode, customColor } = appContext;
  const theme = useHookDarkmode(darkmode, customColor);
  // https://reactrouter.com/docs/en/v6/hooks/use-routes
  const element = useRoutes(appRoutes);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <TopAppbar />
      <Box
        sx={(theme) => ({
          py: 3
        })}
      >
        {element}
      </Box>
    </ThemeProvider>
  );
}
