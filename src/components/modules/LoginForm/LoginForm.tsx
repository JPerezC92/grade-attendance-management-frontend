import { Button, TextField } from '@material-ui/core';
import { Form, Formik, FormikHelpers } from 'formik';
import { loginSchema } from './loginSchema';

import { useAppDispatch } from 'src/redux';
import { startLogin } from 'src/redux/reducers';
import styles from './LoginForm.module.scss';

export const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch();

  const initialValue = {
    email: 'test@gmail.com',
    password: '123456aA',
  };

  const handleLoginSubmit = (
    { email, password }: typeof initialValue,
    _actions: FormikHelpers<{
      email: string;
      password: string;
    }>
  ) => {
    const { success } = dispatch(startLogin(email, password));

    if (!success) _actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValue}
        onSubmit={handleLoginSubmit}
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
