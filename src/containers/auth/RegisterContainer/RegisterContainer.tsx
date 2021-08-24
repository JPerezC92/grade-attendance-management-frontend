import NextLink from 'next/link';
import { Link, Typography } from '@material-ui/core';

import { AuthRoute } from 'src/routes';
import {
  FormLogo,
  IfUserAuthenticatedGoToApp,
  RegisterForm,
} from 'src/components/modules';
import { FormTip } from 'src/components/common';
import styles from './RegisterContainer.module.scss';

export const RegisterContainer: React.FC = () => {
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
