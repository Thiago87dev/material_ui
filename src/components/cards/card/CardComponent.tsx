import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

const CardComponent = () => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component={"img"}
        height={"140"}
        image="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Imagem tecnologia"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component={"div"}>
          Título do Card
        </Typography>
        <Typography variant="body2" color="secondary">
          {" "}
          Descrição curta sobre o conteúdo do card.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Ver mais</Button>
      </CardActions>
    </Card>
  );
};

export default CardComponent;
