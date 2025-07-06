import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Breadcrumbs,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  Link,
  List,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Paper,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
import { useState } from "react";

interface ITabPanelProps {
  value: number;
  index: number;
  children: React.ReactNode;
}

function TabPanel({ value, index, children }: ITabPanelProps) {
  return (
    value === index && (
      <Box sx={{ p: 2 }}>
        <Typography>{children}</Typography>
      </Box>
    )
  );
}

const Navegacao = () => {
  // Usados pelo Drawer
  const [open, setOpen] = useState(false);
  const listDrawer = ["Inicio", "Produtos", "Contato"];

  // Usados pelo Tabs
  const [valueTab, setValueTab] = useState(0);

  // Usados pelo Bottom Navigation
  const [valueBottonNav, setValueBottonNav] = useState(0);

  // Usados pelo Menu
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const openMenu = Boolean(anchorEl);
  
  return (
    <Container maxWidth="lg">
      <Typography variant="h1">Navegação</Typography>
      <Divider orientation="horizontal" sx={{bgcolor:'white', mb:4}}/>
      {/* Appbar */}
      <Box>
        <Typography>Appbar</Typography>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Meu App
            </Typography>
            <Button sx={{ fontSize: "1rem" }} color="inherit">
              Item 1
            </Button>
            <Button sx={{ fontSize: "1rem" }} color="inherit">
              Item 2
            </Button>
            <Button sx={{ fontSize: "1rem" }} color="inherit">
              Item 3
            </Button>
            <Button sx={{ fontSize: "1rem" }} color="inherit">
              Item 4
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      {/* Drawer */}
      <Box sx={{ mt: 4 }}>
        <Typography>Drawer</Typography>
        <IconButton onClick={() => setOpen(true)} color="inherit">
          <MenuIcon />
        </IconButton>
        <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
          <List>
            {listDrawer.map((item) => (
              <ListItemButton key={item}>
                <ListItemText primary={item} />
              </ListItemButton>
            ))}
          </List>
        </Drawer>
      </Box>

      {/* Tabs */}
      <Box sx={{ mt: 4 }}>
        <Typography>Tabs</Typography>
        <Tabs
          textColor="inherit"
          value={valueTab}
          onChange={(_e, newValue) => setValueTab(newValue)}
        >
          <Tab
            sx={{
              color: valueTab === 0 ? "white" : "gray.100",
              fontWeight: valueTab === 0 ? "bold" : "normal",
            }}
            label="Sobre"
          />
          <Tab
            sx={{
              color: valueTab === 1 ? "white" : "gray.100",
              fontWeight: valueTab === 1 ? "bold" : "normal",
            }}
            label="Serviços"
          />
          <Tab
            sx={{
              color: valueTab === 2 ? "white" : "gray.100",
              fontWeight: valueTab === 2 ? "bold" : "normal",
            }}
            label="Contato"
          />
        </Tabs>
        <TabPanel value={valueTab} index={0}>
          Conteúdo Sobre
        </TabPanel>
        <TabPanel value={valueTab} index={1}>
          Conteúdo Serviços
        </TabPanel>
        <TabPanel value={valueTab} index={2}>
          Conteúdo Contato
        </TabPanel>
      </Box>

      {/* Bottom Navigation */}
      <Box sx={{ mt: 4 }}>
        <Typography> Bottom Navigation -- esta no final da página</Typography>
        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <BottomNavigation
            value={valueBottonNav}
            onChange={(_e, newValue) => setValueBottonNav(newValue)}
          >
            <BottomNavigationAction label="Recente" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Favoritos" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Arquivados" icon={<ArchiveIcon />} />
          </BottomNavigation>
        </Paper>
      </Box>

      {/* Navegação hierárquica */}
      <Box sx={{ mt: 4 }}>
        <Typography> Navegação hierárquica</Typography>
        <Breadcrumbs sx={{ "& .MuiBreadcrumbs-separator": { color: "white" } }}>
          <Link underline="hover" color="primary" href="/">
            Home
          </Link>
          <Typography color="white">Nevegação</Typography>
        </Breadcrumbs>
      </Box>

      {/* Menu */}
      <Box sx={{ mt: 4 }}>
        <Typography> Menu</Typography>
        <Box>
          <Button
            sx={{
              color: "white",
              border: "1px solid white",
              ":hover": {
                bgcolor: "white",
                color: "black",
                transition: "all 0.2s ease-in-out",
              },
            }}
            onClick={(e) => setAnchorEl(e.currentTarget)}
          >
            Abrir menu
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={openMenu}
            onClose={() => setAnchorEl(null)}
          >
            <MenuItem onClick={() => setAnchorEl(null)}>Perfil</MenuItem>
            <MenuItem onClick={() => setAnchorEl(null)}> Sair</MenuItem>
          </Menu>
        </Box>
      </Box>
    </Container>
  );
};

export default Navegacao;
