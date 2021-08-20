import { Button, TextField } from '@material-ui/core';
import { Form, Formik } from 'formik';
import { loginSchema } from './loginSchema';

import styles from './LoginForm.module.scss';

export const LoginForm: React.FC = () => {
  const initialValue = {
    email: '',
    password: '',
  };

  return (
    <>
      <Formik
        initialValues={initialValue}
        onSubmit={(values, actions) => {
          // TODO Implement login user
          // eslint-disable-next-line no-console
          console.log(values, actions);
          setTimeout(() => {
            actions.resetForm();
          }, 2000);
        }}
        validationSchema={loginSchema}
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

              <Button
                type="submit"
                color="primary"
                variant="contained"
                disabled={isSubmitting}
                fullWidth
              >
                INGRESAR
              </Button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};
