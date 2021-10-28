import NextLink from 'next/link';
import { Button, TextField } from '@material-ui/core';
import { Form, Formik } from 'formik';
import { loginSchema } from './loginSchema';

import { useAuthentication } from 'src/hooks/useAuthentication';
import styles from './LoginForm.module.scss';
import { AuthRoute } from 'src/routes';

const LoginForm: React.FC = () => {
  const { handleLogin, loginInitialValue } = useAuthentication();

  return (
    <>
      <Formik
        initialValues={loginInitialValue}
        onSubmit={handleLogin}
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

              <NextLink href={AuthRoute.RECOVER_PASSWORD}>
                <a style={{ marginInlineStart: 'auto', marginBlock: '8px' }}>
                  ¿Olvido la contraseña?
                </a>
              </NextLink>

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

export default LoginForm;
