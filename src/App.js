import "@fontsource/nunito";
import * as React from "react";
import "./home.css";
import "typeface-cormorant";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import Header from "./components/Header";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createContext, useState } from "react";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import Brightness5Icon from "@mui/icons-material/Brightness5";

const fontTheme = createTheme({
  typography: {
    fontFamily: ["Nunito", "sans-serif"].join(","),
  },
});

const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = (themeValue) => {
    setTheme(themeValue);
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <ThemeProvider theme={fontTheme}>
          <Header
            text="Where in the world?"
            button={"Dark Mode"}
            icon={
              theme === "light" ? <Brightness5Icon /> : <DarkModeOutlinedIcon />
            }
            onClick={toggleTheme}
            className="theme"
          />
        </ThemeProvider>
        <BrowserRouter basename={window.location.pathname || ""}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/DetailsPage/:code" element={<DetailsPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
