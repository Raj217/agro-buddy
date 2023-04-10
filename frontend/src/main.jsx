import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import * as theme from "./configs/theme";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import ApiContextProvider from "./context/Api";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme.theme}>
      <BrowserRouter>
        <ApiContextProvider>
          <App />
          <Toaster position="top-center" reverseOrder={false} />
        </ApiContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
