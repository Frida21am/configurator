import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./app/styles/null.scss";
import "./app/styles/styles.scss";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
