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
import RecordLayout from 'src/modules/courseRecord/components/RecordLayout';
import styles from './RecordActivityContainer.module.scss';

const RecordActivityContainer: React.FC = () => {
  return (
    <>
      <RecordLayout>
        <div className={styles.recordActivity__content}>
          <Typography className={styles.title} component="h1" variant="h3">
            Actividades
          </Typography>

          <div className={styles.recordActivity__buttons}>
            <ActivityButtonCreate />
          </div>

          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Nº</TableCell>
                  <TableCell>Actividad</TableCell>
                  <TableCell>Comentario</TableCell>
                  <TableCell>Acciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>5234</TableCell>
                  <TableCell>Foro</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
        </div>
      </RecordLayout>
    </>
  );
};

export default RecordActivityContainer;
