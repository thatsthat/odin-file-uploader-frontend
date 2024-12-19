import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
//import App from "./App.jsx";
import Eshop from "./components/Eshop";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Eshop />
  </StrictMode>
);
