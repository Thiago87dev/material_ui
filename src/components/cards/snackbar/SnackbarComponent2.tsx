import { Alert, Box, Button, Slide, Snackbar } from "@mui/material";
import { useState } from "react";

const SnackbarComponent2 = () => {
  const [open, setOpen] = useState(false);
  return (
    <Box>
      <Button onClick={() => setOpen(true)} variant="contained">
        Alerta deslizante
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        slots={{
          transition: Slide,
        }}
        slotProps={{
          transition: {
            direction: "left",
          },
        }}
      >
        <Alert
          severity="success"
          variant="filled"
          onClose={() => setOpen(false)}
          sx={{ p: 2 }}
        >
          Operação realizada com sucesso!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default SnackbarComponent2;
