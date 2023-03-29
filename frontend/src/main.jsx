import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import * as theme from "./configs/theme";
import { ThemeProvider } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme.theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
