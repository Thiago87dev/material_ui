import { Button, Paper, Stack, Typography } from "@mui/material";
import { useReducer } from "react";

interface IState {
  count: number;
}

type TAction =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "reset" };

const initialState: IState = { count: 0 };

const reducer = (state: IState, action: TAction): IState => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      throw new Error("Ação desconhecida");
  }
};

const UseReducerBasico = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Paper
      elevation={3}
      sx={{ p: 4, maxWidth: 300, margin: "auto", textAlign: "center" }}
    >
      <Typography variant="h4" sx={{ mb: 2 }}>
        Valor: {state.count}
      </Typography>
      <Stack spacing={2} direction={"row"} justifyContent={"center"}>
        <Button
          variant="contained"
          onClick={() => dispatch({ type: "increment" })}
        >
          +
        </Button>
        <Button
          variant="contained"
          onClick={() => dispatch({ type: "decrement" })}
        >
          -
        </Button>
        <Button variant="contained" onClick={() => dispatch({ type: "reset" })}>
          Resetar
        </Button>
      </Stack>
    </Paper>
  );
};

export default UseReducerBasico;
