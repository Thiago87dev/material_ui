import { useFormik } from "formik";
import * as Yup from "yup";
import type { IFormularioUsuario } from "../../types/FormularioUserTypes";
import { Box, Button, TextField, Typography } from "@mui/material";

const validationSchema = Yup.object({
  nome: Yup.string()
    .required("Campo obrigatório")
    .min(3, "O nome deve ter pelo menos 3 letras"),
  email: Yup.string().required("Campo obrigatório").email("Email inválido"),
});

const FormularioComYup = () => {
  const formik = useFormik<IFormularioUsuario>({
    initialValues: {
      nome: "",
      email: "",
    },
    validationSchema: validationSchema, // associamos o schema de validação
    onSubmit: (values) => {
      alert(`Nome: ${values.nome}\nEmail: ${values.email}`);
    },
  });
  return (
    <Box
      sx={{ p: 2 }}
      component="form"
      onSubmit={formik.handleSubmit}
      noValidate
    >
        <Typography variant="body1" >Formulário com Yup para validação</Typography>
        <Typography variant="body2" >Com Yup</Typography>
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
        label="Email"
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
    </Box>
  );
};
export default FormularioComYup;
