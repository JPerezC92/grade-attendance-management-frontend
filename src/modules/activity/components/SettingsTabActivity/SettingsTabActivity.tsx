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
import styles from './SettingsTabActivity.module.scss';

const SettingsTabActivity: React.FC = () => {
  const {
    activityReducer: { activities },
  } = useAppSelector((state) => state);

  return (
    <>
      <>
        <>
          <div className={styles.tabActivity__content}>
            <Typography className={styles.title} component="h1" variant="h3">
              Actividades
            </Typography>

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
