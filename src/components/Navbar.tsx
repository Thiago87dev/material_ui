import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Link,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Meu App
        </Typography>
        <Button color="inherit">
          <Link
            component={RouterLink}
            to="/"
            underline="none"
            sx={{ fontSize: "1rem", px: 1, color: "white" }}
          >
            Básico
          </Link>
        </Button>
        <Button color="inherit">
          <Link
            component={RouterLink}
            to="/LayoutEPosicionamento"
            underline="none"
            sx={{ fontSize: "1rem", px: 1, color: "white" }}
          >
            Layout
          </Link>
        </Button>
        <Button>
          <Link
            component={RouterLink}
            to="/Navegacao"
            underline="none"
            sx={{ fontSize: "1rem", px: 1, color: "white" }}
          >
            Navegação
          </Link>
        </Button>
        <Box>
          <Button onClick={(e) => setAnchorEl(e.currentTarget)}>
            <Box sx={{display:'flex', fontSize: "1rem", px: 1, color: "white" }}>
              <Typography>Formulários</Typography>
              <KeyboardArrowDownIcon />
            </Box>
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={() => setAnchorEl(null)}
          >
            <MenuItem onClick={() => setAnchorEl(null)}>
              <Link
                component={RouterLink}
                to="/Formulario"
                underline="none"
                sx={{ fontSize: "1.2rem", color: "black" }}
              >
                Material UI
              </Link>
            </MenuItem>
            <MenuItem onClick={() => setAnchorEl(null)}>
              <Link
                component={RouterLink}
                to="/Formik"
                underline="none"
                sx={{ fontSize: "1.2rem", color: "black" }}
              >
                Formik
              </Link>
            </MenuItem>
          </Menu>
        </Box>
        <Button>
          <Link
            component={RouterLink}
            to="/Cards"
            underline="none"
            sx={{ fontSize: "1rem", px: 1, color: "white" }}
          >
            Cards
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
