import { Box, Button, TextField } from "@mui/material";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const initialValues = {
  pregunta: "",
  opcion1: "",
  opcion2: "",
  opcion3: "",
  fechaInicial: "",
  fechaFinal: "",
};

const electionSchema = yup.object().shape({
  pregunta: yup.string().required("Campo obligatorio"),
  opcion1: yup.string().required("Campo obligatorio"),
  opcion2: yup.string().required("Campo obligatorio"),
  opcion3: yup.string(),
  // Fecha Inicial > Today && Fecha Inicial < Final
  fechaInicial: yup.date().required("Campo obligatorio"),
  // Fecha Final > Today && Fecha Inicial < Final
  fechaFinal: yup.date().required("Campo obligatorio"),
});

const Encuestas = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="NUEVA ENCUESTA" subtitle="Rellena los siguientes campos" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={electionSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSumbit,
          setFieldValue
        }) => (
          <form onSubmit={handleSumbit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(6, minmax(0, 1fr))"
            >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Pregunta"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.pregunta}
                  name="pregunta"
                  error={!!touched.pregunta && !!errors.pregunta}
                  helperText={touched.pregunta && errors.pregunta}
                  sx={{ gridColumn: "span 6" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Opcion 1"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.opcion1}
                  name="opcion1"
                  error={!!touched.opcion1 && !!errors.opcion1}
                  helperText={touched.opcion1 && errors.opcion1}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Opcion 2"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.opcion2}
                  name="opcion2"
                  error={!!touched.opcion2 && !!errors.opcion2}
                  helperText={touched.opcion2 && errors.opcion2}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Opcion 3"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.opcion3}
                  name="opcion3"
                  error={!!touched.opcion3 && !!errors.opcion3}
                  helperText={touched.opcion3 && errors.opcion3}
                  sx={{ gridColumn: "span 2" }}
                />
                <DateTimePicker
                  label="Fecha Inicial"
                  onChange={(value) => setFieldValue("fechaInicial", value, true)}
                  value={values.fechaInicial}
                  renderInput={(params) => ( 
                    <TextField 
                      {...params} 
                      fullWidth
                      variant="filled"
                      type="text"
                      name="fechaInicial"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      error={!!touched.fechaInicial && !!errors.fechaInicial}
                      helperText={touched.fechaInicial && errors.fechaInicial}
                      sx={{ gridColumn: "span 3" }}
                    /> 
                  )}
                />
                <DateTimePicker
                  label="Fecha Final"
                  onChange={(value) => setFieldValue("fechaFinal", value, true)}
                  value={values.fechaFinal}
                  renderInput={(params) => ( 
                    <TextField 
                      {...params} 
                      fullWidth
                      variant="filled"
                      type="text"
                      name="fechaFinal"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      error={!!touched.fechaFinal && !!errors.fechaFinal}
                      helperText={touched.fechaFinal && errors.fechaFinal}
                      sx={{ gridColumn: "span 3" }}
                    /> 
                  )}
                />
              </LocalizationProvider>
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Crear
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Encuestas;
