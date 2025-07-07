import { useFormik } from "formik";
import type { IFormularioUsuario } from "../../types/FormularioUserTypes";
import * as Yup from "yup";
import {
  Box,
  TextField,
  FormControl,
  FormLabel,
  FormHelperText,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Typography,
} from "@mui/material";

interface IRadioGroup extends IFormularioUsuario {
  genero: string;
}

const validationSchema = Yup.object({
  nome: Yup.string().required("Campo obrigatório"),
  email: Yup.string().required("Campo obrigatório").email("E-mail inválido"),
  genero: Yup.string().required("Selecione um gênero"),
});

const RadioGroupComponent = () => {
  const formik = useFormik<IRadioGroup>({
    initialValues: {
      nome: "",
      email: "",
      genero: "",
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Box
      sx={{ p: 2 }}
      component={"form"}
      onSubmit={formik.handleSubmit}
      noValidate
    >
      <Typography variant="body1">Formulário com RadioGroup</Typography>
      
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
        component="fieldset"
        margin="normal"
        error={formik.touched.genero && Boolean(formik.errors.genero)}
      >
        <FormLabel component="legend">Gênero</FormLabel>
        <RadioGroup
          row
          id="genero"
          name="genero"
          value={formik.values.genero}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <FormControlLabel
            value={"masculino"}
            control={<Radio />}
            label="Masculino"
          />
          <FormControlLabel
            value={"Feminino"}
            control={<Radio />}
            label="Feminino"
          />
          <FormControlLabel value={"outro"} control={<Radio />} label="Outro" />
        </RadioGroup>

        <FormHelperText>
          {formik.touched.genero && formik.errors.genero}
        </FormHelperText>
      </FormControl>

      <Button type="submit" variant="contained">
        Enviar
      </Button>
    </Box>
  );
};

export default RadioGroupComponent;
