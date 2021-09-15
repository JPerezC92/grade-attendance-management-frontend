import { useEffect } from 'react';
import NextLink from 'next/link';
import { Backdrop, CircularProgress, Typography } from '@material-ui/core';
import { useAppDispatch, useAppSelector } from 'src/redux';
import { startLoadingCourses } from 'src/modules/course/reducer';
import CourseLayout from 'src/shared/components/CourseLayout';
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
      <CourseLayout>
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
          <NextLink href="./period">
            <a> Periodo</a>
          </NextLink>
          <div className={styles.course__grid}>
            {courseReducer.courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          <CourseButtonCreate />
        </div>
      </CourseLayout>
    </>
  );
};

export default CourseContainer;
