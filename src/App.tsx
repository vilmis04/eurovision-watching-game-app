import React from "react";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
// import { createTheme, makeTheme } from "@mui/styles";

function App() {
  return (
    <>
      {/* <ThemeProvider theme={Theme}> */}
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}></Route>
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;
