import { useEffect } from 'react';

import { Backdrop, CircularProgress, Typography } from '@material-ui/core';
import { useAppDispatch, useAppSelector } from 'src/redux';
import { startLoadingCourses } from 'src/modules/course/reducer';

import AppLayout from 'src/shared/components/AppLayout';
import CourseCard from '../CourseCard';
import CourseButtonCreate from '../CourseButtonCreate';

import styles from './CourseContainer.module.scss';

const CourseContainer: React.FC = () => {
  const { courseReducer } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!courseReducer.courses.length) dispatch(startLoadingCourses());
  }, []);

  return (
    <>
      <AppLayout>
        {courseReducer.isLoading && (
          <Backdrop
            open={courseReducer.isLoading}
            style={{ zIndex: 1, color: '#fff' }}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        )}

        <div className={styles.course}>
          <Typography component="h2" variant="h4" align="left">
            Cursos
          </Typography>

          <div className={styles.course__grid}>
            {courseReducer.courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          <CourseButtonCreate />
        </div>
      </AppLayout>
    </>
  );
};

export default CourseContainer;
