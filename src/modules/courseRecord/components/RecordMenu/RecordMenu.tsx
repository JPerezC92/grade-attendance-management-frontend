import NextLink from 'next/link';
import { Box, Button, MenuItem, MenuList, Typography } from '@material-ui/core';

import { useAppSelector } from 'src/redux';
import { AppRoute, CourseRecordRoute } from 'src/routes';
import styles from './RecordMenu.module.scss';

const RecordMenu: React.FC = () => {
  const {
    courseReducer: { currentCourse },
    courseRecordReducer: { currentCourseRecord },
  } = useAppSelector((state) => state);

  return (
    <Box>
      <Box className={styles.appRecordButtons}>
        <NextLink href={AppRoute.ROOT}>
          <Button component="a" variant="outlined" color="primary">
            <Typography variant="button" align="center">
              Ir a la pantalla principal
            </Typography>
          </Button>
        </NextLink>
      </Box>
      <Box>
        <MenuList className={styles.menu__list}>
          <NextLink
            href={CourseRecordRoute.GRADE(
              currentCourse.id,
              currentCourseRecord.id
            )}
            passHref
          >
            <MenuItem component="a" divider>
              Calificaciones
            </MenuItem>
          </NextLink>

          <NextLink
            href={CourseRecordRoute.ATTENDANCE(
              currentCourse.id,
              currentCourseRecord.id
            )}
            passHref
          >
            <MenuItem component="a" divider>
              Asistencias
            </MenuItem>
          </NextLink>

          <NextLink
            href={CourseRecordRoute.SETTINGS(
              currentCourse.id,
              currentCourseRecord.id
            )}
            passHref
          >
            <MenuItem component="a" divider>
              Configuracion
            </MenuItem>
          </NextLink>
        </MenuList>
      </Box>
    </Box>
  );
};

export default RecordMenu;
