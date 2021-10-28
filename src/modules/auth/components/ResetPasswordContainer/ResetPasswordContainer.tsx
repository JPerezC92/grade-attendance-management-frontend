import { Button, Snackbar, TextField, Typography } from '@material-ui/core';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React, { SyntheticEvent, useEffect, useState } from 'react';
import styles from './ResetPasswordContainer.module.scss';
import { useAppDispatch } from 'src/redux';
import { startResetPassword } from '../../reducer';
import { Alert } from '@material-ui/lab';

const registerSchema = Yup.object().shape({
  password: Yup.string()
    .trim()
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
      'La contraseña debe contener minimo 8 caracteres, una minuscula, una mayuscula y un número'
    )
    .required('Contraseña es requerido'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden')
    .required('Requerido'),
});

const ResetPasswordContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [recover_key, setRecover_key] = useState('');

  const [open, setOpen] = useState(false);
  const [error, setError] = useState('');
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (
    event: SyntheticEvent<Element, Event>,
    reason: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const alert =
    error.length > 0 ? (
      <Alert severity="warning">{error}</Alert>
    ) : (
      <Alert severity="success">Contraseña restaurada</Alert>
    );

  useEffect(() => {
    const recover_key = router.query.recover_key as string;

    if (recover_key) {
      setRecover_key(() => recover_key);
    }
  }, [router.query]);

  return (
    <>
      <div className={styles.resetPassword}>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          {alert}
        </Snackbar>

        <Typography variant="h4" component="h1" align="center">
          Nueva contraseña
        </Typography>

        <Formik
          initialValues={{ password: '', confirmPassword: '' }}
          onSubmit={async (values) => {
            const response = await dispatch(
              startResetPassword(values.password, recover_key)
            );

            if (response) setError(response.message);

            handleClick();
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
                  Enviar
                </Button>
              </Form>
            );
          }}
        </Formik>
      </div>

      <span>{recover_key}</span>
    </>
  );
};

export default ResetPasswordContainer;
