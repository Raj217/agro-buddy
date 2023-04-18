import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import * as theme from "./configs/theme";
import { ThemeProvider } from "@mui/material";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { HashRouter } from "react-router-dom";
import ApiContextProvider from "./context/Api";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme.theme}>
      <GoogleOAuthProvider  clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <HashRouter>
          <ApiContextProvider>
            <App />
            <Toaster position="top-center" reverseOrder={false} />
          </ApiContextProvider>
        </HashRouter>
      </GoogleOAuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
