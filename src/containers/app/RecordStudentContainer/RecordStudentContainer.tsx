import styles from './RecordStudentContainer.module.scss';

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import { RegisterStudentButton, RecordLayout } from 'src/components/modules';

export const RecordStudentContainer: React.FC = () => {
  return (
    <>
      <RecordLayout>
        <div className={styles.recordStudent__content}>
          <Typography className={styles.title} component="h1" variant="h3">
            Estudiantes
          </Typography>

          <div className={styles.recordStudent__buttons}>
            <RegisterStudentButton />
          </div>

          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Apellidos</TableCell>
                  <TableCell>Nombres</TableCell>
                  <TableCell>Acciones</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                <TableRow>
                  <TableCell>236798</TableCell>
                  <TableCell>Test</TableCell>
                  <TableCell>Test</TableCell>
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
