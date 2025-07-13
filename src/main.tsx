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
import UseReducerPage from "./pages/useReducer/UseReducerPage.tsx";
import UseReducerEstruturaPage from "./pages/useReducer/UseReducerEstruturaPage.tsx";
import UseReducerToDoPage from "./pages/useReducer/UseReducerToDoPage.tsx";
import UseReducerToDoPage2 from "./pages/useReducer/UseReducerToDoPage2.tsx";

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
          <Route path="/UseReducerPage" element={<UseReducerPage/>}/>
          <Route path="/UseReducerEstruturaPage" element={<UseReducerEstruturaPage/>}/>
          <Route path="/UseReducerToDoPage" element={<UseReducerToDoPage/>}/>
          <Route path="/UseReducerToDoPage2" element={<UseReducerToDoPage2/>}/>
          <Route index element={<Basico />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
