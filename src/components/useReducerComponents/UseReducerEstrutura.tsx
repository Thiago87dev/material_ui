import { Button, Paper, Stack, TextField, Typography } from "@mui/material";
import { useReducer, type ChangeEvent } from "react";

// Estado da aplicação
interface IFormState {
  nome: string;
  email: string;
}

// Ações possíveis
type TFormAction =
  | { type: "SET_NOME"; payload: string }
  | { type: "SET_EMAIL"; payload: string }
  | { type: "RESET" };

// Estado inicial
const initilaState: IFormState = {
  nome: "",
  email: "",
};

// Reducer
const reducer = (state: IFormState, action: TFormAction): IFormState => {
  switch (action.type) {
    case "SET_NOME":
      return { ...state, nome: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "RESET":
      return initilaState;
    default:
      throw new Error("Ação desconhecida");
  }
};

// Componente
const UseReducerEstrutura = () => {
  const [state, dispatch] = useReducer(reducer, initilaState);

  const handleChange =
    (field: "SET_NOME" | "SET_EMAIL") => (e: ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: field, payload: e.target.value });
    };

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 400, margin: "auto" }}>
      <Typography variant="h5" gutterBottom>
        Formulário com useReducer
      </Typography>
      <Stack spacing={2}>
        <TextField
          label="Nome"
          value={state.nome}
          onChange={handleChange("SET_NOME")}
        />
        <TextField
          label="E-mail"
          value={state.email}
          onChange={handleChange("SET_EMAIL")}
        />
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => dispatch({ type: "RESET" })}
        >
          Limpar
        </Button>
        <Typography variant="body1" sx={{ mt: 3 }}>
          Nome: {state.nome} <br />
          Email:{state.email}
        </Typography>
      </Stack>
    </Paper>
  );
};

export default UseReducerEstrutura;
