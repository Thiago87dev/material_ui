import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutEPosicionamento from "./pages/LayoutEPosicionamento.tsx";
import Basico from "./pages/Basico.tsx";
import Navegacao from "./pages/Navegacao.tsx";
import Formulario from "./pages/Formulario.tsx";
import Cards from "./pages/Cards.tsx";
import Formik from "./pages/Formik.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route
            path="/LayoutEPosicionamento"
            element={<LayoutEPosicionamento />}
          />
          <Route path="/Navegacao" element={<Navegacao />} />
          <Route path="/Formulario" element={<Formulario />} />
          <Route path="/Cards" element={<Cards/>}/>
          <Route path="/Formik" element={<Formik/>}/>
          <Route index element={<Basico />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
