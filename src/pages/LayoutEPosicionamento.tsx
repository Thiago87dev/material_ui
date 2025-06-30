import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

const LayoutEPosicionamento = () => {
  return (
    <Container sx={{ bgcolor: "black", color: "white" }} maxWidth="lg">
      {/* Sistema de Grid do MUI */}
      <Box>
        <Typography> Sistema de Grid do MUI</Typography>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper sx={{ p: 2 }}>Coluna 1</Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Paper sx={{ p: 2 }}>Coluna 2</Paper>
          </Grid>
        </Grid>
      </Box>
      {/* Responsividade com sx */}
      <Box sx={{ mt: 4 }}>
        <Typography>Responsividade com sx</Typography>
        <Box
          sx={{
            color: "black",
            bgcolor: { xs: "pink", md: "lightblue" },
            p: { xs: 1, md: 4 },
          }}
        >
          <Typography>Caixa responsiva</Typography>
        </Box>
      </Box>

      {/* Stack + Divider */}
      <Box sx={{ mt: 4 }}>
        <Typography>Stack + Divider</Typography>
        <Stack
          direction={"row"}
          divider={
            <Divider
              sx={{ bgcolor: "white" }}
              orientation="vertical"
              flexItem
            />
          }
          spacing={2}
        >
          <Button variant="contained">Salvar</Button>
          <Button variant="contained">Cancelar</Button>
        </Stack>
      </Box>

      {/* Flexbox */}
      <Box sx={{ mt: 4 }}>
        <Typography>Flexbox</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100px",
            bgcolor: "grey.200",
            p: 2,
            color: "black",
          }}
        >
          <Typography>Esquerda</Typography>
          <Typography>Direita</Typography>
        </Box>
      </Box>

      {/* Ocultando elementos */}
      <Box sx={{ mt: 4 }}>
        <Typography>Ocultando elementos</Typography>
        <Box
          sx={{
            display: { xs: "none", md: "block" },
          }}
        >
          <Typography sx={{border:'1px solid white', p:1}}>Visível apenas em telas médias ou maiores</Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default LayoutEPosicionamento;
