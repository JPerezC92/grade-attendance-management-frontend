import { Box, Button, MenuItem, MenuList, Typography } from '@material-ui/core';
import NextLink from 'next/link';
import { AppRoute } from 'src/routes';
import { RecordRoute } from 'src/routes/record.routepath';
import styles from './RecordMenu.module.scss';

export const RecordMenu: React.FC = () => {
  return (
    <Box>
      <Box className={styles.appRecordButtons}>
        <NextLink href={AppRoute.ROOT}>
          <Button component="a" variant="contained" color="primary">
            <Typography variant="button" align="center">
              Ir a la pantalla principal
            </Typography>
          </Button>
        </NextLink>
      </Box>
      <Box>
        <MenuList className={styles.menu__list}>
          <MenuItem divider>
            <NextLink href={RecordRoute.GRADE('0')}>
              <Typography component="a" variant="body1" color="textPrimary">
                Calificaciones
              </Typography>
            </NextLink>
          </MenuItem>
          <MenuItem divider>
            <NextLink href={RecordRoute.ATTENDANCE('0')}>
              <Typography component="a" variant="body1" color="textPrimary">
                Asistencias
              </Typography>
            </NextLink>
          </MenuItem>
          <MenuItem divider>
            <NextLink href={RecordRoute.STUDENT('0')}>
              <Typography component="a" variant="body1" color="textPrimary">
                Estudiantes
              </Typography>
            </NextLink>
          </MenuItem>
          <MenuItem divider>
            <NextLink href={RecordRoute.ACTIVITY('0')}>
              <Typography component="a" variant="body1" color="textPrimary">
                Actividades
              </Typography>
            </NextLink>
          </MenuItem>
        </MenuList>
      </Box>
    </Box>
  );
};
