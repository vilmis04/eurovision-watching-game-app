import React from "react";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { ThemeProvider, createTheme } from "@mui/system";
import HomePage from "./pages/HomePage";

function App() {
  // const theme = createTheme();
  return (
    <>
      {/* <ThemeProvider theme={theme}> */}
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
