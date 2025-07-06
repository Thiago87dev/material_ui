import { Box, Container, Divider, Typography } from "@mui/material";
import CardComponent from "../components/cards/card/CardComponent";
import AccordionComponent from "../components/cards/accordion/AccordionComponent";
import AccordionComponent2 from "../components/cards/accordion/AccordionComponent2";
import ModalComponent from "../components/cards/modal/ModalComponent";
import TooltipComponent from "../components/cards/tootip/TooltipComponent";
import PopoverComponent from "../components/cards/popover/PopoverComponent";
import SnackbarComponent from "../components/cards/snackbar/SnackbarComponent";
import SnackbarComponent2 from "../components/cards/snackbar/SnackbarComponent2";
import ListAndListItem from "../components/cards/listAndListItem/ListAndListItem";

const Cards = () => {
  return (
    <Container maxWidth="lg">
      <Typography sx={{ fontSize: 84 }} variant="h1">
        Cards e Exibição de Conteúdo
      </Typography>
      <Divider orientation="horizontal" sx={{ bgcolor: "white", mb: 4 }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 5,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", gap: 5 }}>
          <Box>
            <Typography variant="body1">Card simples</Typography>
            <CardComponent />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
            <Box>
              <Typography variant="body1">Accordion 1</Typography>
              <AccordionComponent />
            </Box>
            <Box>
              <Typography variant="body1">Accordion 2</Typography>
              <AccordionComponent2 />
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: 5 }}>
          <ModalComponent />
          <TooltipComponent />
          <PopoverComponent />
          <SnackbarComponent />
          <SnackbarComponent2 />
        </Box>
        <Box>
          <Typography>Lista</Typography>
          <Box sx={{ bgcolor: "white", color: "black" }}>
            <ListAndListItem />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Cards;
