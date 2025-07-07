import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import type { IFormularioUsuario } from "../../types/FormularioUserTypes";
import * as Yup from "yup";
import { useFormik } from "formik";

interface ISelectFormik extends IFormularioUsuario {
  setor: string;
}

const validationSchema = Yup.object({
  nome: Yup.string().required("Campo obrigatório"),
  email: Yup.string().email("Email inválido").required("Campo obrigatório"),
  setor: Yup.string().required("Selecione um setor"),
});

const SelectFormik = () => {
  const formik = useFormik<ISelectFormik>({
    initialValues: {
      nome: "",
      email: "",
      setor: "",
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Box
      sx={{ p: 2 }}
      component="form"
      onSubmit={formik.handleSubmit}
      noValidate
    >
      <Typography variant="body1" >Formulário com Select</Typography>
      <TextField
        fullWidth
        label="Nome"
        id="nome"
        name="nome"
        value={formik.values.nome}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.nome && Boolean(formik.errors.nome)}
        helperText={formik.touched.nome && formik.errors.nome}
        margin="normal"
      />
      <TextField
        fullWidth
        label="E-mail"
        id="email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        margin="normal"
      />

      <FormControl
        fullWidth
        margin="normal"
        error={formik.touched.setor && Boolean(formik.errors.setor)}
      >
        <InputLabel id={"setor-label"}>Qual seu Setor</InputLabel>
        <Select
          labelId="setor-label"
          id="setor"
          name="setor"
          value={formik.values.setor}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Qual seu Setor"
        >
          <MenuItem sx={{fontSize: 14, color:'primary.main'}} value="">
            <em>Selecione</em>
          </MenuItem>
          <MenuItem value="frontend">Front-end</MenuItem>
          <MenuItem value="backend">Backend</MenuItem>
          <MenuItem value="fullstack">Fullstack</MenuItem>
        </Select>
        <FormHelperText>
          {formik.touched.setor && formik.errors.setor}
        </FormHelperText>
      </FormControl>

      <Button type="submit" variant="contained">
        Enviar
      </Button>
    </Box>
  );
};

export default SelectFormik;
