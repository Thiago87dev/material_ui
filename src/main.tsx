import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutEPosicionamento from "./pages/LayoutEPosicionamento.tsx";
import Basico from "./pages/Basico.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route
            path="/LayoutEPosicionamento"
            element={<LayoutEPosicionamento />}
          />
          <Route path="/Basico" element={<Basico/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
