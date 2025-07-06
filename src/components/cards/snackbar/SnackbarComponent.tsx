import { Alert, Box, Button, Snackbar } from "@mui/material";
import { useState } from "react";

const SnackbarComponent = () => {
  const [open, setOpen] = useState(false);
  return (
    <Box>
      <Button onClick={() => setOpen(true)} variant="contained">
        Mostrar alerta
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <Alert
          severity="success"
          variant="filled"
          onClose={() => setOpen(false)}
          sx={{p:2}}
        >
          Operação realizada com sucesso!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default SnackbarComponent;
