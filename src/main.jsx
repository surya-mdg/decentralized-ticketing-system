import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400-italic.css"; // Specify weight and style
import "@fontsource/poppins/400.css"; // Specify weight
import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App.jsx";
import "./index.css";
import { ThemeProvider } from "@/providers/theme-provider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
