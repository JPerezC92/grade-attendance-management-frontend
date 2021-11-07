import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import { MdUnarchive } from 'react-icons/md';
import { useAppDispatch, useAppSelector } from 'src/redux';
import { startUpdateCourse } from '../../reducer';
import CourseArchiveButton from '../CourseArchiveButton';
import LoadCourses from '../LoadCourses';

const CourseManageContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const { courseReducer } = useAppSelector((state) => state);

  return (
    <>
      <LoadCourses>
        <div
          style={{
            margin: '32px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            width: 'max-content',
          }}
        >
          <Typography component="h2" variant="h4" align="left">
            Cursos
          </Typography>

          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Nº</TableCell>
                  <TableCell>Periodo</TableCell>
                  <TableCell>Estado</TableCell>
                  <TableCell>Acciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {courseReducer.courses.length !== 0 &&
                  courseReducer.courses.map((course, index) => (
                    <TableRow key={course.id}>
                      <TableCell>{++index}</TableCell>
                      <TableCell>{course.name}</TableCell>
                      <TableCell>{course.status}</TableCell>
                      <TableCell>
                        <IconButton
                          color="primary"
                          onClick={() =>
                            dispatch(
                              startUpdateCourse({ ...course, status: 'activo' })
                            )
                          }
                        >
                          <MdUnarchive style={{ fontSize: '24px' }} />
                        </IconButton>

                        <CourseArchiveButton course={course} />
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </LoadCourses>
    </>
  );
};

export default CourseManageContainer;
