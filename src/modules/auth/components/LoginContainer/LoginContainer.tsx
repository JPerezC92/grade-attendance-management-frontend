import NextLink from 'next/link';
import { Link, Typography } from '@material-ui/core';

import { AuthRoute } from 'src/routes';

import IfUserAuthenticatedGoToApp from '../IfUserAuthenticatedGoToApp';
import FormLogo from '../FormLogo';
import LoginForm from '../LoginForm';
import styles from './LoginContainer.module.scss';
import FormTip from 'src/shared/components/FormTip';

const LoginContainer: React.FC = () => {
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

export default LoginContainer;
