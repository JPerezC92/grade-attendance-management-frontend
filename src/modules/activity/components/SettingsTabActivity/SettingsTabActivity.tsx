import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import ActivityButtonCreate from 'src/modules/activity/components/ActivityButtonCreate';
import ActivityButtonDelete from 'src/modules/activity/components/ActivityButtonDelete';
import ActivityButtonUpdate from 'src/modules/activity/components/ActivityButtonUpdate';
import { useAppSelector } from 'src/redux';
import { CourseRoute } from 'src/routes';
import Link from 'src/shared/components/Link';
import NavigationBreadcrumbs from 'src/shared/components/NavigationBreadcrumbs';
import styles from './SettingsTabActivity.module.scss';

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

            <NavigationBreadcrumbs>
              <Link href={CourseRoute.ROOT}>Cursos</Link>

              <Link href={CourseRoute.COURSE(currentCourse.id)}>
                {currentCourse.name}
              </Link>

              <Typography color="textPrimary">
                {currentCourseRecord.career} - S{currentCourseRecord.semester} -{' '}
                {currentCourseRecord.group}
              </Typography>
            </NavigationBreadcrumbs>

            <div className={styles.tabActivity__buttons}>
              <ActivityButtonCreate />
            </div>

            <Paper>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Nº</TableCell>
                    <TableCell>Actividad</TableCell>
                    <TableCell>#Calificaciones</TableCell>
                    <TableCell>Acciones</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {activities.map((activity, index) => (
                    <TableRow key={activity.id}>
                      <TableCell>{++index}</TableCell>
                      <TableCell>{activity.name}</TableCell>
                      <TableCell align="center">
                        {activity.scores.length}
                      </TableCell>
                      <TableCell>
                        <div style={{ display: 'flex' }}>
                          <ActivityButtonUpdate activity={activity} />
                          <ActivityButtonDelete activity={activity} />
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </div>
        </>
      </>
    </>
  );
};
export default SettingsTabActivity;
