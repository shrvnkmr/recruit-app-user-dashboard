import React from "react";
import ReactDOM from "react-dom/client";
import { createTheme, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import App from "./App.tsx";
import store from "./redux/store.ts";
import "./index.css";

const theme = createTheme({
  typography: {
    fontFamily:
      "SF Pro, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
