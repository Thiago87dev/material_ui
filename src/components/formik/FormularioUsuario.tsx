import { useFormik } from "formik";
import type { IFormularioUsuario } from "../../types/FormularioUserTypes";
import { Button, TextField, Typography } from "@mui/material";

const FormularioUsuario = () => {
  const formik = useFormik<IFormularioUsuario>({
    initialValues: {
      nome: "",
      email: "",
    },
    validate: (values) => {
      const errors: Partial<IFormularioUsuario> = {};

      if (!values.nome) {
        errors.nome = "O usuário é obrigatório";
      }

      if (!values.email) {
        errors.email = "O email é obrigatório";
      } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(values.email)) {
        errors.email = "Email inválido";
      }
      return errors;
    },
    onSubmit: (values) => {
      alert(`Nome: ${values.nome}\nEmail: ${values.email}`);
    },
  });
  return (
    <form style={{ padding:'16px'}} onSubmit={formik.handleSubmit}>
        <Typography variant="body1" >Formulário com validação manual</Typography>
        <Typography variant="body2" >Sem Yup, ainda</Typography>
      <TextField
        fullWidth
        id="nome"
        name="nome"
        label="Nome"
        value={formik.values.nome}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.nome && Boolean(formik.errors.nome)}
        helperText={formik.touched.nome && formik.errors.nome}
        margin="normal"
      />
      <TextField
        fullWidth
        id="email"
        name="email"
        label="E-mail"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        margin="normal"
      />
      <Button type="submit" variant="contained">
        Enviar
      </Button>
    </form>
  );
};

export default FormularioUsuario;
