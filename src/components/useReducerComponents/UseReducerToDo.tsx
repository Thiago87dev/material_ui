import {
  Button,
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useReducer, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

interface TaskProps {
  id: number;
  title: string;
  completed: boolean;
}

interface IState {
  tasks: TaskProps[];
}
// @ts-expect-error erro irrelevante
enum ActionType {
  ADD_TASK,
  TOGGLE_TASK,
  REMOVE_TASK,
  CLEAR_ALL,
}

type TAction =
  | { type: ActionType.ADD_TASK; payload: { title: string } }
  | { type: ActionType.TOGGLE_TASK; payload: { id: number } }
  | { type: ActionType.REMOVE_TASK; payload: { id: number } }
  | { type: ActionType.CLEAR_ALL };

const initialState: IState = {
  tasks: [],
};

const reducer = (state: IState, action: TAction) => {
  switch (action.type) {
    case ActionType.ADD_TASK: {
      const newTask: TaskProps = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      return { tasks: [...state.tasks, newTask] };
    }
    case ActionType.TOGGLE_TASK:
      return {
        tasks: state.tasks.map((item) =>
          item.id === action.payload.id
            ? { ...item, completed: !item.completed }
            : item
        ),
      };
    case ActionType.REMOVE_TASK:
      return {
        tasks: state.tasks.filter((item) => item.id !== action.payload.id),
      };
    case ActionType.CLEAR_ALL:
      return {
        tasks: [],
      };
    default:
      throw new Error("Ação desconhecida");
  }
};

const UseReducerToDo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim()) {
      dispatch({ type: ActionType.ADD_TASK, payload: { title: input } });
      setInput("");
    }
  };
  return (
    <Paper sx={{ p: 4, maxWidth: 500, margin: "auto" }}>
      <Typography variant="h5" gutterBottom>
        Lista de tarefas
      </Typography>
      <Stack direction="row" spacing={2} mb={2}>
        <TextField
          label="Nova tarefa"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAdd();
            }
          }}
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button variant="contained" onClick={handleAdd}>
          Adicionar
        </Button>
      </Stack>
      <List>
        {state.tasks.map((task) => (
          <ListItem
            key={task.id}
            secondaryAction={
              <IconButton
                edge="end"
                onClick={() =>
                  dispatch({
                    type: ActionType.REMOVE_TASK,
                    payload: { id: task.id },
                  })
                }
              >
                <DeleteIcon />
              </IconButton>
            }
          >
            <Checkbox
              checked={task.completed}
              onChange={() =>
                dispatch({
                  type: ActionType.TOGGLE_TASK,
                  payload: { id: task.id },
                })
              }
            />
            <ListItemText
              primary={task.title}
              sx={{ textDecoration: task.completed ? "line-through" : "none" }}
            />
          </ListItem>
        ))}
      </List>
      {state.tasks.length > 0 && (
        <Button
          variant="outlined"
          color="primary"
          onClick={() => dispatch({ type: ActionType.CLEAR_ALL })}
        >
          Limpar Tudo
        </Button>
      )}
    </Paper>
  );
};

export default UseReducerToDo;
