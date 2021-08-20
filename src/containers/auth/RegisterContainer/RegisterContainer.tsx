import { Typography } from '@material-ui/core';

import { AuthRoute } from 'src/routes';
import { Link } from 'src/components/common';
import { FormLogo, RegisterForm } from 'src/components/modules';
import { FormTip } from 'src/components/common';
import styles from './RegisterContainer.module.scss';

export const RegisterContainer: React.FC = () => {
  return (
    <>
      <div className={styles.registerContainer}>
        <FormLogo />

        <Typography variant="h4" component="h1" align="center">
          Registrarse
        </Typography>

        <RegisterForm />

        <FormTip>
          ¿Ya tienes una cuenta? <Link href={AuthRoute.LOGIN}>Ingresar</Link>
        </FormTip>
      </div>
    </>
  );
};
