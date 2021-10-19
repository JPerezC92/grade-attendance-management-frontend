import NextLink from 'next/link';
import { Box, Button, MenuItem, MenuList } from '@material-ui/core';

import { CourseRecordRoute } from 'src/routes';
import styles from './RecordMenu.module.scss';
import CurrentCourse from 'src/modules/course/components/CurrentCourse';
import CurrentCourseRecord from '../CurrentCourseRecord';
import { useAppDispatch } from 'src/redux';
import { startExportToExcel } from '../../reducer/thunks/startExportToExcel';

const RecordMenu: React.FC = () => {
  const dispatch = useAppDispatch();
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
                <MenuItem divider>
                  {' '}
                  <Button
                    onClick={() => {
                      return dispatch(startExportToExcel());
                    }}
                    variant="contained"
                    color="primary"
                  >
                    Exportar a excel
                  </Button>
                </MenuItem>
              </MenuList>
            </Box>
          )}
        </CurrentCourseRecord>
      )}
    </CurrentCourse>
  );
};

export default RecordMenu;
