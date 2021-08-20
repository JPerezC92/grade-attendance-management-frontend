import { Button, TextField } from '@material-ui/core';
import { Form, Formik } from 'formik';
import { registerSchema } from './registerSchema';
import styles from './RegisterForm.module.scss';

export const RegisterForm: React.FC = () => {
  const initialValue = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  return (
    <>
      <Formik
        initialValues={initialValue}
        onSubmit={(values, actions) => {
          // TODO Implement register user
          // eslint-disable-next-line no-console
          console.log(values, actions);
        }}
        validationSchema={registerSchema}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
          } = props;

          return (
            <Form className={styles.form}>
              <TextField
                id="firstname"
                label="Nombre"
                value={values.firstname}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.firstname ? errors.firstname : ''}
                error={touched.firstname && Boolean(errors.firstname)}
                margin="dense"
                variant="outlined"
                fullWidth
              />
              <TextField
                id="lastname"
                label="Apellidos"
                value={values.lastname}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.lastname ? errors.lastname : ''}
                error={touched.lastname && Boolean(errors.lastname)}
                margin="dense"
                variant="outlined"
                fullWidth
              />
              <TextField
                id="email"
                label="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.email ? errors.email : ''}
                error={touched.email && Boolean(errors.email)}
                margin="dense"
                variant="outlined"
                fullWidth
              />
              <TextField
                id="password"
                label="Contraseña"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.password ? errors.password : ''}
                error={touched.password && Boolean(errors.password)}
                margin="dense"
                variant="outlined"
                fullWidth
              />
              <TextField
                id="confirmPassword"
                label="Confirmar Contraseña"
                type="password"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={
                  touched.confirmPassword ? errors.confirmPassword : ''
                }
                error={
                  touched.confirmPassword && Boolean(errors.confirmPassword)
                }
                margin="dense"
                variant="outlined"
                fullWidth
              />

              <Button
                type="submit"
                color="primary"
                variant="contained"
                disabled={isSubmitting}
                fullWidth
              >
                REGISTRARSE
              </Button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};
