import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  Avatar,
  Badge,
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Paper,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

const Basico = () => {
  return (
    <Container  maxWidth="lg">
      <Typography variant="h1">Básico</Typography>
      <Divider orientation="horizontal" sx={{bgcolor:'white', mb:4}}/>
      {/* Textos */}
      <Typography>Textos</Typography>
      <Typography variant="h1">Hello World</Typography>
      <Typography variant="h4" gutterBottom>
        Subtítulo H4 com espaçamento
      </Typography>
      <Typography>Este é um parágrafo padrão com body1.</Typography>
      <Typography color="textSecondary">
        Texto secundário com cor mais fraca.
      </Typography>

      {/* Botões */}
      <Typography sx={{ mt: 4 }}>Botões</Typography>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Button variant="contained">Padrão</Button>
        <Button variant="outlined" color="secondary">
          Secundario
        </Button>
        <Button variant="outlined" color="success">
          Sucesso
        </Button>
        <Button variant="outlined" color="error">
          Erro
        </Button>
        <Button variant="outlined" color="warning">
          Warning
        </Button>
        <Button variant="outlined" color="info">
          Info
        </Button>
        <Button variant="text" disabled>
          Desabilitado
        </Button>
      </Box>

      {/* Icones */}
      <Typography sx={{ mt: 4 }}>Icones</Typography>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Button startIcon={<DeleteIcon />} variant="contained" color="primary">
          Apagar
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          Enviar
        </Button>
      </Box>

      {/* Avatar e Badge */}
      <Typography sx={{ mt: 4 }}>Avatar e Badge</Typography>
      <Box
        sx={{ bgcolor: "tomato", display: "flex", gap: 2, width: 400, p: 4 }}
      >
        <Avatar alt="teste" src="src\assets\thiago.jpeg" />

        <Badge sx={{ cursor: "pointer" }} badgeContent={4} color="primary">
          <Avatar
            sx={{
              cursor: "pointer",
              ":hover": {
                transform: "scale(1.05)",
                transition: "transform 0.2s ease-in-out",
              },
            }}
            alt="teste2"
            src="src\assets\pinguin.png"
          />
        </Badge>
      </Box>

      {/* Divider e Paper */}
      <Typography sx={{ mt: 4 }}>Divider e Paper</Typography>
      <Paper elevation={3} sx={{ p: 2 }}>
        <Typography>Bloco de sombra</Typography>
        <Divider sx={{ my: 2 }} />
        <Typography>Texto abaixo do divisor</Typography>
      </Paper>

      {/* Card */}
      <Typography sx={{ mt: 4 }}>Card</Typography>
      <Box>
        <Card sx={{ maxWidth: 300 }}>
          <CardMedia
            component="img"
            height={140}
            image="https://plus.unsplash.com/premium_photo-1673697239981-389164b7b87f?q=80&w=1144&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <CardContent>
            <Typography variant="h6">Titulo do card</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Eligendi, qui. Quis veritatis{" "}
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* imagens */}
      <Typography sx={{ mt: 4 }}> Imagens</Typography>
      <Box sx={{ display: "flex", gap: 2, bgcolor: "gray", px: 4 }}>
        <Box>
          <Typography>Img com Box</Typography>
          <Box
            component={"img"}
            sx={{
              height: 140,
              width: 240,
            }}
            alt="Descrição da img"
            src="https://plus.unsplash.com/premium_photo-1673603988651-99f79e4ae7d3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </Box>
        <Box>
          <Typography>Img com img</Typography>
          <img
            src="https://images.unsplash.com/photo-1505820013142-f86a3439c5b2?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Descrição da img"
            style={{ width: "240px", height: "140px" }}
          />
        </Box>
        <Box>
          <Typography>Box com background</Typography>
          <Box
            sx={{
              width: 240,
              height: 140,
              backgroundImage:
                "url(https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: 2,
            }}
          />
        </Box>
        <Box>
          <Typography>Com Paper para dar estilo</Typography>
          <Paper elevation={3} sx={{ p: 1, width: "fit-content" }}>
            <Box
              component={"img"}
              sx={{ width: 240, height: 140, objectFit: "cover" }}
              alt="Descrição da img"
              src="https://plus.unsplash.com/premium_photo-1675368244123-082a84cf3072?q=80&w=2150&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </Paper>
        </Box>
      </Box>
    </Container>
  );
};

export default Basico;
