import NextLink from 'next/link';
import {
  Button,
  Divider,
  Snackbar,
  TextField,
  Typography,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { SyntheticEvent, useState } from 'react';
import { useForm } from 'src/hooks';
import { useAppDispatch } from 'src/redux';
import { startRecoverPassword } from '../../reducer';
import IfUserAuthenticatedGoToApp from '../IfUserAuthenticatedGoToApp';
import { AuthRoute } from 'src/routes';
import styles from './RecoverPasswordContainer.module.scss';

const RecoverPasswordContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { formValues, handleInputChange } = useForm({ email: '' });

  const [open, setOpen] = useState(false);
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
      <Alert severity="success">Se envio un mensaje a su correo</Alert>
    );

  return (
    <>
      <IfUserAuthenticatedGoToApp>
        <div className={styles.recoverPassword}>
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          >
            {alert}
          </Snackbar>

          <Typography variant="h4" component="h1" align="center">
            Recuperar contraseña
          </Typography>

          <form
            onSubmit={async (e) => {
              e.preventDefault();
              setIsSubmitting(true);
              const response = await dispatch(
                startRecoverPassword(formValues.email)
              );
              if (response) setError(response.message);

              handleClick();
              setIsSubmitting(false);
            }}
            style={{ display: 'flex', flexDirection: 'column', rowGap: '8px' }}
          >
            <TextField
              id="email"
              label="Email"
              name="email"
              value={formValues.email}
              onChange={handleInputChange}
              required
              type="email"
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
          </form>

          <Divider />

          <NextLink href={AuthRoute.LOGIN}>
            <Button
              component="a"
              type="submit"
              color="secondary"
              variant="outlined"
              fullWidth
            >
              Iniciar sesion
            </Button>
          </NextLink>
        </div>
      </IfUserAuthenticatedGoToApp>
    </>
  );
};

export default RecoverPasswordContainer;
