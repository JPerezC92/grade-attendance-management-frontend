import NextLink from 'next/link';
import { Link, Typography } from '@material-ui/core';

import { AuthRoute } from 'src/routes';

import styles from './RegisterContainer.module.scss';
import IfUserAuthenticatedGoToApp from '../IfUserAuthenticatedGoToApp';
import FormLogo from '../FormLogo';
import RegisterForm from '../RegisterForm';
import FormTip from 'src/shared/components/FormTip';

const RegisterContainer: React.FC = () => {
  return (
    <IfUserAuthenticatedGoToApp>
      <div className={styles.registerContainer}>
        <FormLogo />

        <Typography variant="h4" component="h1" align="center">
          Registrarse
        </Typography>

        <RegisterForm />

        <FormTip>
          ¿Ya tienes una cuenta?{' '}
          <NextLink href={AuthRoute.LOGIN}>
            <Link>Ingresar</Link>
          </NextLink>
        </FormTip>
      </div>
    </IfUserAuthenticatedGoToApp>
  );
};

export default RegisterContainer;
