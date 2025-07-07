import { Container, CssBaseline, ThemeProvider } from "@mui/material";

import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { theme } from "./themes";

const App = () => {
  return (
   <ThemeProvider theme={theme}>
     <CssBaseline />
      <Container sx={{bgcolor:'black'}} maxWidth="lg">
        <Navbar />
        <Outlet />
      </Container>
    </ThemeProvider>
  );
};

export default App;
