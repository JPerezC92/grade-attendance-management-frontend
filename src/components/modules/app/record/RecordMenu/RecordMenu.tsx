import { Box, Button, MenuItem, MenuList, Typography } from '@material-ui/core';
import NextLink from 'next/link';
import { AppRoute } from 'src/routes';
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
          <MenuItem divider>Calificaciones</MenuItem>
          <MenuItem divider>Asistencias</MenuItem>
          <MenuItem divider>Estudiantes</MenuItem>
          <MenuItem divider>Actividades</MenuItem>
        </MenuList>
      </Box>
    </Box>
  );
};
