import { Typography } from '@material-ui/core';
import { useAppSelector } from 'src/redux';

import AppLayout from 'src/shared/components/AppLayout';
import CourseCard from '../CourseCard';
import CourseButtonCreate from '../CourseButtonCreate';

import styles from './CourseContainer.module.scss';
import LoadCourses from 'src/modules/course/components/LoadCourses';

const CourseContainer: React.FC = () => {
  const {
    courseReducer: { courses },
  } = useAppSelector((state) => state);

  return (
    <>
      <AppLayout>
        <LoadCourses>
          <div className={styles.course}>
            <Typography component="h2" variant="h4" align="left">
              Cursos
            </Typography>

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
