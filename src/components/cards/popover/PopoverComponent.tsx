import { Box, Button, Popover, Typography } from "@mui/material";
import { useState } from "react";

const PopoverComponent = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const open = Boolean(anchorEl);

  return (
    <Box>
      <Button variant="contained" onClick={handleClick}>Abrir Popover</Button>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2 }}>Conteúdo do Popover</Typography>
      </Popover>
    </Box>
  );
};

export default PopoverComponent;
