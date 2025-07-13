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
  const [anchorElReducer, setAnchorElReducer] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);
  const openReducer = Boolean(anchorElReducer);

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
          <Button onClick={(e) => setAnchorElReducer(e.currentTarget)}>
            <Box
              sx={{ display: "flex", fontSize: "1rem", px: 1, color: "white" }}
            >
              <Typography>useReducer</Typography>
              <KeyboardArrowDownIcon />
            </Box>
          </Button>
          <Menu
            anchorEl={anchorElReducer}
            open={openReducer}
            onClose={() => setAnchorElReducer(null)}
          >
            <MenuItem onClick={() => setAnchorElReducer(null)}>
              <Link
                component={RouterLink}
                to="/UseReducerPage"
                underline="none"
                sx={{ fontSize: "1.2rem", color: "white" }}
              >
                Basico
              </Link>
            </MenuItem>
            <MenuItem onClick={() => setAnchorElReducer(null)}>
              <Link
                component={RouterLink}
                to="/UseReducerEstruturaPage"
                underline="none"
                sx={{ fontSize: "1.2rem", color: "white" }}
              >
                Estrutura
              </Link>
            </MenuItem>
            <MenuItem onClick={() => setAnchorEl(null)}>
            <Link component={RouterLink} to={'/UseReducerToDoPage'} underline="none" sx={{ fontSize: "1.2rem", color: "white" }}>
              To-Do
            </Link>
            </MenuItem>
            <MenuItem onClick={() => setAnchorEl(null)}>
            <Link component={RouterLink} to={'/UseReducerToDoPage2'} underline="none" sx={{ fontSize: "1.2rem", color: "white" }}>
              To-Do 2
            </Link>
            </MenuItem>
          </Menu>
        </Box>

        <Box>
          <Button onClick={(e) => setAnchorEl(e.currentTarget)}>
            <Box
              sx={{ display: "flex", fontSize: "1rem", px: 1, color: "white" }}
            >
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
                sx={{ fontSize: "1.2rem", color: "white" }}
              >
                Material UI
              </Link>
            </MenuItem>
            <MenuItem onClick={() => setAnchorEl(null)}>
              <Link
                component={RouterLink}
                to="/Formik"
                underline="none"
                sx={{ fontSize: "1.2rem", color: "white" }}
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
