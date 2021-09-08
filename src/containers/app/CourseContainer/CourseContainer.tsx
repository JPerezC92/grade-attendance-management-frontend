import { useEffect } from 'react';
import NextLink from 'next/link';
import { Backdrop, CircularProgress, Typography } from '@material-ui/core';
import { CourseCard } from 'src/components/modules';
import { CourseButtonCreate } from 'src/components/modules/app/course';
import { CourseLayout } from 'src/components/modules/app/CourseLayout';
import { startLoadingCourses, useAppDispatch, useAppSelector } from 'src/redux';
import styles from './CourseContainer.module.scss';

export const CourseContainer: React.FC = () => {
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
