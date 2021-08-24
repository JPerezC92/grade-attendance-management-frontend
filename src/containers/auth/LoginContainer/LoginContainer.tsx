import NextLink from 'next/link';
import { Link, Typography } from '@material-ui/core';

import { FormTip } from 'src/components/common';
import { FormLogo, LoginForm } from 'src/components/modules';
import { AuthRoute } from 'src/routes';
import { IfUserAuthenticatedGoToApp } from 'src/components/modules';

import styles from './LoginContainer.module.scss';

export const LoginContainer: React.FC = () => {
  return (
    <IfUserAuthenticatedGoToApp>
      <div className={styles.loginContainer}>
        <FormLogo />

        <Typography variant="h4" component="h1" align="center">
          INICIAR SESION
        </Typography>
        <LoginForm />
        <FormTip>
          ¿Aun no te haz registrado?{' '}
          <NextLink href={AuthRoute.REGISTER}>
            <Link>Registrarse</Link>
          </NextLink>
        </FormTip>
      </div>
    </IfUserAuthenticatedGoToApp>
  );
};
