import React from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import { store } from "./app/store";
import theme from "./theme/style";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  // React.StrictModeはエラーが解決できないなら、削除してもいいです
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);
