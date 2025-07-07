import { useFormik } from "formik";
import { TextField, Button, Typography } from "@mui/material";

const SimpleForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    onSubmit: (values) => {
      alert(`Nome: ${values.name}\nEmail: ${values.email}`);
    },
  });
  return (
    <form style={{ padding:'16px'}} onSubmit={formik.handleSubmit}>
        <Typography variant="body1" >Formulário simples</Typography>
        <Typography variant="body2" >Ainda não tem validações nem exibição de erros</Typography>
      <TextField
        fullWidth
        id="name"
        name="name"
        label="Name"
        value={formik.values.name}
        onChange={formik.handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        id="email"
        name="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        margin="normal"
      />
      <Button variant="contained" type="submit">
        Enviar
      </Button>
    </form>
  );
};

export default SimpleForm;
