import {
  Box,
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
import StudentButtonCreateFromCSV from 'src/modules/student/components/StudentButtonCreateFromCSV';
import StudentButtonDelete from 'src/modules/student/components/StudentButtonDelete';
import StudentButtonEdit from 'src/modules/student/components/StudentButtonEdit';
import StudentButtonRegister from 'src/modules/student/components/StudentButtonRegister';

import styles from './SettingsTabStudent.module.scss';

const SettingsTabStudent: React.FC = () => {
  const { students } = useAppSelector((state) => state.studentReducer);
  return (
    <>
      <>
        <div className={styles.recordStudent__content}>
          <Typography className={styles.title} component="h1" variant="h3">
            Estudiantes
          </Typography>

          <div className={styles.recordStudent__buttons}>
            <StudentButtonCreateFromCSV />
            <StudentButtonRegister />
          </div>

          <Paper>
            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Apellidos</TableCell>
                    <TableCell>Nombres</TableCell>
                    <TableCell align="center">Acciones</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {students.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell>{student.studentCode}</TableCell>
                      <TableCell>{student.firstname}</TableCell>
                      <TableCell>{student.lastname}</TableCell>
                      <TableCell>
                        <Box display="flex">
                          <StudentButtonEdit student={student} />
                          <StudentButtonDelete student={student} />
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </div>
      </>
    </>
  );
};

export default SettingsTabStudent;
