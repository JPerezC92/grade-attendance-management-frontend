import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import { RecordLayout } from 'src/components/modules';
import { CreateActivityButton } from 'src/components/modules';
import styles from './RecordActivityContainer.module.scss';

// interface RecordActivityContainerProps {}

// export const RecordActivityContainer: React.FC<RecordActivityContainerProps> = () => {
export const RecordActivityContainer: React.FC = () => {
  return (
    <>
      <RecordLayout>
        <div className={styles.recordActivity__content}>
          <Typography className={styles.title} component="h1" variant="h3">
            Actividades
          </Typography>

          <div className={styles.recordActivity__buttons}>
            <CreateActivityButton />
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
