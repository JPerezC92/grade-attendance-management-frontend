import { Typography } from '@material-ui/core';

import { FormTip, Link } from 'src/components/common';
import { FormLogo, LoginForm } from 'src/components/modules';
import { AuthRoute } from 'src/routes';
import styles from './LoginContainer.module.scss';

export const LoginContainer: React.FC = () => {
  return (
    <>
      <div className={styles.loginContainer}>
        <FormLogo />

        <Typography variant="h4" component="h1" align="center">
          INICIAR SESION
        </Typography>
        <LoginForm />
        <FormTip>
          <span>
            ¿Aun no te haz registrado?{' '}
            <Link href={AuthRoute.REGISTER}>Registrarse</Link>
          </span>
        </FormTip>
      </div>
    </>
  );
};
