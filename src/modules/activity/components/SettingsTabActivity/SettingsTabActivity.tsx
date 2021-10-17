import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';

import { useAppSelector } from 'src/redux';
import { CourseRoute } from 'src/routes';
import ActivityButtonCreate from 'src/modules/activity/components/ActivityButtonCreate';

import Link from 'src/shared/components/Link';
import NavigationBreadcrumbs from 'src/shared/components/NavigationBreadcrumbs';
import styles from './SettingsTabActivity.module.scss';
import ActivityTableRow from '../ActivityTableRow';

const SettingsTabActivity: React.FC = () => {
  const {
    activityReducer: { activities },
    courseReducer: { currentCourse },
    courseRecordReducer: { currentCourseRecord },
  } = useAppSelector((state) => state);

  return (
    <>
      <>
        <>
          <div className={styles.tabActivity__content}>
            <Typography className={styles.title} component="h1" variant="h3">
              Actividades
            </Typography>

            {currentCourse.isLoaded && currentCourseRecord.isLoaded && (
              <NavigationBreadcrumbs>
                <Link href={CourseRoute.ROOT}>Cursos</Link>

                <Link href={CourseRoute.COURSE(currentCourse.id)}>
                  {currentCourse.name}
                </Link>

                <Typography color="textPrimary">
                  {currentCourseRecord.career} - {currentCourseRecord.semester}{' '}
                  - {currentCourseRecord.group}
                </Typography>
              </NavigationBreadcrumbs>
            )}

            <div className={styles.tabActivity__buttons}>
              <ActivityButtonCreate />
            </div>

            <Paper>
              <TableContainer>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell></TableCell>

                      <TableCell>Actividad</TableCell>
                      <TableCell># Calificaciones</TableCell>
                      <TableCell>Acciones</TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {activities.map((activity) => (
                      <ActivityTableRow key={activity.id} activity={activity} />
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </div>
        </>
      </>
    </>
  );
};
export default SettingsTabActivity;
