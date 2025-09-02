import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import "./index.css";
// main.js (orden recomendado)
import "./assets/styles/_fonts.css"; // 1) fonts primero
import "./assets/styles/_tokens.css"; // ) tokens centralizados
import "./assets/styles/_base.css"; // ) base (html/body)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
