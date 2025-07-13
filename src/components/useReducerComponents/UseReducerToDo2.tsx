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
import { useMemo, useReducer, useState, type Dispatch, type JSX } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

// TYPES
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
  CLEAR_TASK,
  EDIT_TASK,
}

type TAction =
  | { type: ActionType.ADD_TASK; payload: { title: string } }
  | { type: ActionType.TOGGLE_TASK; payload: { id: number } }
  | { type: ActionType.REMOVE_TASK; payload: { id: number } }
  | { type: ActionType.CLEAR_TASK }
  | { type: ActionType.EDIT_TASK; payload: { id: number; title: string } };

interface ITodoActions {
  addTask(title: string): void;
  toggleTask(id: number): void;
  removeTask(id: number): void;
  clearAll(): void;
  editTask(id: number, title: string): void;
}

//REDUCER
const initialState: IState = {
  tasks: [],
};

const reducer = (state: IState, action: TAction): IState => {
  switch (action.type) {
    case ActionType.ADD_TASK: {
      const newTask: TaskProps = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      return { tasks: [...state.tasks, newTask] };
    }
    case ActionType.TOGGLE_TASK: {
      return {
        tasks: state.tasks.map((item) =>
          item.id === action.payload.id
            ? { ...item, completed: !item.completed }
            : item
        ),
      };
    }
    case ActionType.REMOVE_TASK:
      return {
        tasks: state.tasks.filter((item) => item.id !== action.payload.id),
      };

    case ActionType.CLEAR_TASK:
      return { tasks: [] };
    case ActionType.EDIT_TASK: {
      return {
        tasks: state.tasks.map((item) =>
          item.id === action.payload.id
            ? { ...item, title: action.payload.title }
            : item
        ),
      };
    }
    default:
      throw new Error("Ação inesperada");
  }
};

// ACTIONS
const TodoActions = (dispatch: Dispatch<TAction>): ITodoActions => {
  const actions = {
    addTask(title: string) {
      dispatch({ type: ActionType.ADD_TASK, payload: { title } });
    },
    toggleTask(id: number) {
      dispatch({ type: ActionType.TOGGLE_TASK, payload: { id } });
    },
    removeTask(id: number) {
      dispatch({ type: ActionType.REMOVE_TASK, payload: { id } });
    },
    clearAll() {
      dispatch({ type: ActionType.CLEAR_TASK });
    },
    editTask(id: number, title: string) {
      dispatch({ type: ActionType.EDIT_TASK, payload: { id, title } });
    },
  };
  return actions;
};

// COMPONENTE PRINCIPAL
const UseReducerToDo2 = (): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);

  // useMemo evita recriar funções a cada render
  const actions = useMemo(() => TodoActions(dispatch), [dispatch]);

  const handleAddOrEdit = () => {
    if (!editingId) {
      if (input.trim()) {
        actions.addTask(input);
        setInput("");
      }
    } else {
      if (input.trim() && editingId) {
        actions.editTask(editingId, input);
        setInput("");
        setEditingId(null);
      }
    }
  };

  const handleEdit = (id: number, title: string) => {
    if (editingId === null) {
      setEditingId(id);
      setInput(title);
    } else {
      setEditingId(null);
      setInput("");
    }
  };

  return (
    <Paper sx={{ p: 4, maxWidth: 500, margin: "auto" }}>
      <Typography variant="h5" gutterBottom>
        Lista de Tarefas com Action Creators
      </Typography>
      <Stack direction={"row"} spacing={2} mb={2}>
        <TextField
          label={`${editingId ? "Editar tarefa" : "Nova tarefa"} `}
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAddOrEdit();
            }
          }}
        />
        <Button variant="contained" onClick={() => handleAddOrEdit()}>
          {editingId ? "Editar" : "Adicionar"}
        </Button>
      </Stack>

      <List>
        {state.tasks.map((item) => (
          <ListItem
            key={item.id}
            secondaryAction={
              <>
                <IconButton
                  edge="end"
                  onClick={() => handleEdit(item.id, item.title)}
                >
                  <EditIcon
                    sx={{
                      ":hover": { color: "yellow" },
                      color: item.id === editingId ? "yellow" : "white",
                    }}
                  />
                </IconButton>
                <IconButton
                  edge="end"
                  onClick={() => actions.removeTask(item.id)}
                >
                  <DeleteIcon sx={{ ":hover": { color: "red" } }} />
                </IconButton>
              </>
            }
          >
            <Checkbox
              checked={item.completed}
              onClick={() => actions.toggleTask(item.id)}
            />
            <ListItemText
              primary={item.title}
              sx={{
                textDecoration: item.completed ? "line-through" : "none",
                color: item.id === editingId ? "yellow" : "white",
              }}
            />
          </ListItem>
        ))}
      </List>
      {state.tasks.length > 0 && (
        <Button variant="outlined" color="secondary" onClick={actions.clearAll}>
          Limpar tudo
        </Button>
      )}
    </Paper>
  );
};

export default UseReducerToDo2;
