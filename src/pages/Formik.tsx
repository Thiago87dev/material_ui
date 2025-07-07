import { Container } from "@mui/material";
import SimpleForm from "../components/formik/SimpleForm";
import FormularioUsuario from "../components/formik/FormularioUsuario";
import FormularioComYup from "../components/formik/FormularioComYup";
import SelectFormik from "../components/formik/SelectFormik";
import RadioGroupComponent from "../components/formik/RadioGroupComponent";

const Formik = () => {
  return (
    <Container sx={{ mb: 10 }} maxWidth="lg">
      <SimpleForm />
      <FormularioUsuario />
      <FormularioComYup />
      <SelectFormik />
      <RadioGroupComponent />
    </Container>
  );
};

export default Formik;
