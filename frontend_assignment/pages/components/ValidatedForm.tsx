import { Box, Button, createTheme, FormLabel, styled, TextField } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { useFormik } from "formik";
import * as Yup from "yup";
  
  const theme = createTheme({
    components: {
      MuiFormLabel: {
        styleOverrides: {
          root: {
            color: "white",
          },
        },
      },
    },
  });
  
  const CssTextField = styled(TextField)({
    "& .MuiInputBase-input": {
      WebkitTextFillColor: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "blue",
      },
      "&:hover fieldset": {
        borderColor: "pink",
      },
    },
  });
  
  const ValidatedForm = () => {
    const formik = useFormik({
      initialValues: {
        name: "",
        age: "",
        address: "",
      },
      validationSchema: Yup.object({
        name: Yup.string()
          .max(10, "Your name must contain a minimum of 10 characters!")
          .required("Required"),
        age: Yup.number()
          .moreThan(18, "You must be greater than 18 years of age!")
          .required("Required"),
        address: Yup.string().required("Required"),
      }),
      onSubmit: (values) => {
        console.log(JSON.stringify(values, null, 2));
      },
    });
  
    return (
      <div>
        <ThemeProvider theme={theme}>
          <Box>
            <form onSubmit={formik.handleSubmit}>
              <div>
                <FormLabel>Name</FormLabel>
              </div>
              <div>
                <CssTextField
                  variant="outlined"
                  id="name"
                  name="name"
                  label="Name"
                  color="primary"
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
              </div>
              <div>
                <CssTextField
                  variant="outlined"
                  type="number"
                  id="age"
                  name="age"
                  label="Age"
                  onChange={formik.handleChange}
                  error={formik.touched.age && Boolean(formik.errors.age)}
                  helperText={formik.touched.age && formik.errors.age}
                />
              </div>
              <div>
                <CssTextField
                  variant="outlined"
                  id="address"
                  name="address"
                  label="Address"
                  onChange={formik.handleChange}
                  error={formik.touched.address && Boolean(formik.errors.address)}
                  helperText={formik.touched.address && formik.errors.address}
                />
              </div>
              <Button color="secondary" variant="contained" fullWidth type="submit">
                Submit
              </Button>
            </form>
          </Box>
        </ThemeProvider>
      </div>
    );
  };
  
  export default ValidatedForm;