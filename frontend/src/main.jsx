import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import * as theme from "./configs/theme";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./context/auth";
import CropContextProvider from "./context/crops";
import UserContextProvider from "./context/user";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme.theme}>
      <BrowserRouter>
        <AuthContextProvider>
          <CropContextProvider>
            <UserContextProvider>
              <App />
              <Toaster position="top-center" reverseOrder={false} />
            </UserContextProvider>
          </CropContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
