import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { useState } from "react";

const ModalComponent = () => {
  const [open, setOpen] = useState(false);
  return (
    <Box>
      <Button variant="contained" onClick={() => setOpen(true)}>Abrir modal</Button>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Confirmação</DialogTitle>
        <DialogContent>
          <Typography>Tem certeza que deseja continuar?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancelar</Button>
          <Button
            onClick={() => {
              alert("Confirmado");
              setOpen(false);
            }}
            variant="contained"
          >
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ModalComponent;
