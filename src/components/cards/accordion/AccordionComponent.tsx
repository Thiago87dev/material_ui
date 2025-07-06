import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";

const AccordionComponent = () => {
  return (
    <Box>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            O que é o material UI
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            É uma biblioteca de componentes React baseada no Material Design do
            Google.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            O que é a Vida
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Na verdade ninguem sabe.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default AccordionComponent;
