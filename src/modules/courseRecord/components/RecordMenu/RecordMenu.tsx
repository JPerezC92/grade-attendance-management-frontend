import NextLink from 'next/link';
import { Box, MenuItem, MenuList } from '@material-ui/core';

import { CourseRecordRoute } from 'src/routes';
import styles from './RecordMenu.module.scss';
import CurrentCourse from 'src/modules/course/components/CurrentCourse';
import CurrentCourseRecord from '../CurrentCourseRecord';

const RecordMenu: React.FC = () => {
  return (
    <CurrentCourse>
      {(currentCourse) => (
        <CurrentCourseRecord>
          {(currentCourseRecord) => (
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
          )}
        </CurrentCourseRecord>
      )}
    </CurrentCourse>
  );
};

export default RecordMenu;
