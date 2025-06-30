import { Container, Link } from "@mui/material";

import { Link as RouterLink, Outlet } from "react-router-dom";

const App = () => {
  return (
    <Container
      sx={{
        bgcolor: "black",
        color: "white",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        p: 10,
      }}
      maxWidth="lg"
    >
      <Link
        component={RouterLink}
        to="/Basico"
        underline="hover"
        sx={{ fontSize: "1.2rem", px:3}}
      >
        Ir para Basico
      </Link>
      <Link
        component={RouterLink}
        to="/LayoutEPosicionamento"
        underline="hover"
        sx={{ fontSize: "1.2rem",px:3 }}
      >
        Ir para Layout e Posicionamento
      </Link>

      <Outlet />
    </Container>
  );
};

export default App;
