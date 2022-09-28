import { ThemeProvider } from "styled-components";
import "./App.css";
import  Router  from "../src/routes/Router";
import { GlobalStyles, theme } from "./Theme";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
