import {
  Box,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import { AiOutlineDelete } from 'react-icons/ai';
import {
  RecordLayout,
  StudentButtonRegister,
  StudentButtonEdit,
} from 'src/components/modules';
import { useAppDispatch, useAppSelector } from 'src/redux';
import { startDeleteStudent } from 'src/redux/reducers/Student/student.thunks';
import styles from './RecordStudentContainer.module.scss';

export const RecordStudentContainer: React.FC = () => {
  const { students } = useAppSelector((state) => state.studentReducer);
  const dispatch = useAppDispatch();
  return (
    <>
      <RecordLayout>
        <div className={styles.recordStudent__content}>
          <Typography className={styles.title} component="h1" variant="h3">
            Estudiantes
          </Typography>

          <div className={styles.recordStudent__buttons}>
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
                      <TableCell>{student.studentId}</TableCell>
                      <TableCell>{student.firstname}</TableCell>
                      <TableCell>{student.lastname}</TableCell>
                      <TableCell>
                        <Box display="flex">
                          <StudentButtonEdit student={student} />
                          <IconButton
                            color="secondary"
                            onClick={() =>
                              dispatch(startDeleteStudent(student))
                            }
                          >
                            <AiOutlineDelete />
                          </IconButton>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </div>
      </RecordLayout>
    </>
  );
};
