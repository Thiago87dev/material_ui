import {
  Box,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Switch,
  TextField,
  Typography,
  FormHelperText,
  Autocomplete,
  Divider,
} from "@mui/material";
import { useState } from "react";

const Formulario = () => {
  // Usado no select
  const [idadeSelect, setIdadeSelect] = useState("10");

  // Usado no Switch
  const [ligado, setLigado] = useState(true);

  // Usado no validação manual
  const [email, setEmail] = useState("");
  const isValid = email.includes("@");

  // Usado no Autocomplete
  const opcoes = ["React", "Vue", "Angular"];

  return (
    <Container sx={{ pb: 20 }} maxWidth="lg">
      <Typography variant="h1">Formulários</Typography>
      <Divider orientation="horizontal" sx={{bgcolor:'white', mb:4}}/>
      {/* TextField */}
      <Box sx={{ mt: 4 }}>
        <Typography>TextField </Typography>
        <TextField
          sx={{
            input: { color: "white" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "yellow" }, // Borda quando NÃO está selecionado
              "&:hover fieldset": { borderColor: "green" }, // Borda quando está em hover
              "&.Mui-focused fieldset": { borderColor: "white" }, // Borda quando está selecionado
            },
            "& .MuiInputLabel-root": { color: "yellow" }, // cor do label normal
            "&:hover .MuiInputLabel-root": { color: "green" }, // cor da label quando está em hover
            "& .MuiInputLabel-root.Mui-focused": { color: "white" }, // cor do label quando selecionado
            "& .MuiFormHelperText-root": { color: "white" },
          }}
          label="Nome"
          variant="outlined"
          fullWidth
          margin="normal"
          helperText="Digite seu nome"
        />
      </Box>

      {/* Select */}
      <Box sx={{ mt: 4 }}>
        <Typography>Select </Typography>
        <FormControl
          sx={{ "& .MuiInputLabel-root": { color: "yellow" } }}
          margin="normal"
        >
          <InputLabel>Idade</InputLabel>
          <Select
            value={idadeSelect}
            onChange={(e) => setIdadeSelect(e.target.value)}
            label="Idade"
            sx={{
              color: "white",
              "& .MuiOutlinedInput-notchedOutline": { borderColor: "yellow" }, // borda normal
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "green",
              }, // borda no hover
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "white",
              }, // borda quando focado
              "& .MuiSelect-icon": { color: "red" }, // cor da seta
            }}
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>30</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Checkbox, Radio e Switch */}
      <Box sx={{ mt: 4 }}>
        <Typography>Checkbox, Radio e Switch </Typography>
        <FormControlLabel control={<Checkbox />} label="Aceite os termos" />
        <RadioGroup>
          <FormControlLabel
            value={"feminino"}
            control={<Radio />}
            label="Feminino"
          />
          <FormControlLabel
            value={"masculino"}
            control={<Radio />}
            label="Masculino"
          />
        </RadioGroup>
        <FormControlLabel
          control={
            <Switch
              checked={ligado}
              onChange={(e) => setLigado(e.target.checked)}
            />
          }
          label={ligado ? "Ligado" : "Desligado"}
        />
      </Box>

      {/* validação manual */}
      <Box sx={{ mt: 4 }}>
        <Typography>validação manual </Typography>
        <FormControl error={!isValid}>
          <TextField
            label="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {!isValid && <FormHelperText>Digite um e-mail válido</FormHelperText>}
        </FormControl>
      </Box>

      {/* Autocomplete  */}
      <Box sx={{ mt: 4 }}>
        <Typography>Autocomplete </Typography>
        <Autocomplete
          options={opcoes}
          renderInput={(params) => <TextField {...params} label="Framework" />}
        />
      </Box>

    </Container>
  );
};

export default Formulario;
