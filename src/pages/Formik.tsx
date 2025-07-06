import { Container } from "@mui/material";
import SimpleForm from "../components/formik/SimpleForm";
import FormularioUsuario from "../components/formik/FormularioUsuario";
import FormularioComYup from "../components/formik/FormularioComYup";

const Formik = () => {
  return (
    <Container maxWidth="lg">
      <SimpleForm />
      <FormularioUsuario />
      <FormularioComYup />
    </Container>
  );
};

export default Formik;
