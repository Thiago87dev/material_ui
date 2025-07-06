import { Container } from "@mui/material";

import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

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
      <Navbar />

      <Outlet />
    </Container>
  );
};

export default App;
