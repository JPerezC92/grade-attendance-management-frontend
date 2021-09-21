import NextLink from 'next/link';
import { Box, MenuItem, MenuList } from '@material-ui/core';

import { useAppSelector } from 'src/redux';
import { CourseRecordRoute } from 'src/routes';
import styles from './RecordMenu.module.scss';

const RecordMenu: React.FC = () => {
  const {
    courseReducer: { currentCourse },
    courseRecordReducer: { currentCourseRecord },
  } = useAppSelector((state) => state);

  return (
    <Box>
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
