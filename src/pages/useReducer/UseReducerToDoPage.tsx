import { Container } from "@mui/material";
import UseReducerToDo from "../../components/useReducerComponents/UseReducerToDo";


const UseReducerToDoPage = () => {
  return (
    <Container sx={{ py: 10 }} maxWidth="lg">
        <UseReducerToDo/>
    </Container>
  );
};

export default UseReducerToDoPage;
