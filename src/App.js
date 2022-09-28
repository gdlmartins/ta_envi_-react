import { ThemeProvider } from "styled-components";
import "./App.css";
import Router from "../src/routes/Router";
import { GlobalStyles, theme } from "./Theme";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

function App() {
  const [data , setData] =  useState();
  return (
    <ThemeProvider theme={theme}>
      {/* <GlobalState> */}
        <GlobalStyles />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      {/* </GlobalState> */}
    </ThemeProvider>
  );
}

export default App;
