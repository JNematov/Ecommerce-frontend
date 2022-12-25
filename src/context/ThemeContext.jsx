import { createContext } from "react";
import { createTheme } from "@mui/material/styles";

const myTheme = createTheme({
  // breakpoints: {
  //   values: {
  //     mobile: 0,
  //     tablet: 640,
  //     laptop: 1024,
  //     desktop: 1200,
  //   },
  // },
  palette: {
    primary: {
      light: "#757ce8",
      main: "#ffe0b2",
      dark: "#ffb300",
      contrastText: "#1a237e",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

export const ThemeContext = createContext(myTheme);

const ThemeContextProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={{ myTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
