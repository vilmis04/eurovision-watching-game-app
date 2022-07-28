import React from "react";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
// import { createTheme, makeTheme } from "@mui/styles";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      {/* <ThemeProvider theme={Theme}> */}
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;
