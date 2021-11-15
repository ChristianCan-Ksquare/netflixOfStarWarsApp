import React, { createContext, useState } from "react";
import ListOfMovies from "./components/ListOfMovies";
import { createTheme, ThemeProvider } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";

export const ThemeContext = createContext();

export default function App() {
  const [dark, setDark] = useState(false);

  const handleMode = () => {
    setDark(!dark);
  };

  const theme = createTheme({
    palette: {
      type: dark ? "dark" : "light",
      background: {
        default: dark ? "#222222" : "#FFFFFF",
      },
    },
  });

  return (
    <ThemeContext.Provider value={{ dark, handleMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ListOfMovies />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
