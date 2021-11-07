import {
  FormControl,
  FormControlLabel,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core';
import { useAppSelector } from 'src/redux';

import AppLayout from 'src/shared/components/AppLayout';
import CourseCard from '../CourseCard';
import CourseButtonCreate from '../CourseButtonCreate';

import LoadCourses from 'src/modules/course/components/LoadCourses';
import { useForm } from 'src/hooks';
import styles from './CourseContainer.module.scss';

const CourseContainer: React.FC = () => {
  const { courseReducer } = useAppSelector((state) => state);

  const { formValues, handleInputChange } = useForm({
    status: 'activo',
  });

  const coursesFiltered = courseReducer.courses.filter((course) => {
    return course.status === formValues.status;
  });

  const courses =
    formValues.status === 'all' ? courseReducer.courses : coursesFiltered;

  return (
    <>
      <AppLayout>
        <LoadCourses>
          <div className={styles.course}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography component="h2" variant="h4" align="left">
                Cursos
              </Typography>

              <FormControl variant="outlined">
                <FormControlLabel
                  value={formValues.status}
                  labelPlacement="start"
                  label="Ver:"
                  control={
                    <Select
                      style={{ marginLeft: '1rem' }}
                      name="status"
                      id="status"
                      onChange={handleInputChange}
                    >
                      <MenuItem value="all">Todos</MenuItem>
                      <MenuItem value="activo">Activo</MenuItem>
                      <MenuItem value="inactivo">Inactivo</MenuItem>
                    </Select>
                  }
                />
              </FormControl>
            </div>

            <div className={styles.course__grid}>
              {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
            <CourseButtonCreate />
          </div>
        </LoadCourses>
      </AppLayout>
    </>
  );
};

export default CourseContainer;
