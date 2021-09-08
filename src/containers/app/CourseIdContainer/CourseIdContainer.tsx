import { useEffect } from 'react';
import NextImage from 'next/image';
import {
  Backdrop,
  CircularProgress,
  Divider,
  Typography,
} from '@material-ui/core';
import { useRouter } from 'next/router';
import { CourseLayout } from 'src/components/modules';
import courseRecordImage from 'src/static/course-record-image.jpg';
import { CourseRecordRoute } from 'src/routes';
import {
  startLoadingCourseDetail,
  useAppDispatch,
  useAppSelector,
} from 'src/redux';
import styles from './CourseIdContainer.module.scss';

export const CourseIdContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    courseReducer: { currentCourse, isLoadingCurrentCourse },
  } = useAppSelector((state) => state);

  const router = useRouter();

  useEffect(() => {
    const courseId = parseInt(router.query.courseId as string);
    if (!currentCourse || currentCourse.id !== courseId) {
      dispatch(startLoadingCourseDetail(courseId));
    }
  }, [router.query]);

  return (
    <>
      <CourseLayout>
        {!currentCourse || isLoadingCurrentCourse ? (
          <Backdrop
            open={isLoadingCurrentCourse}
            style={{ zIndex: 1, color: '#fff' }}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        ) : (
          <>
            <div className={styles.courseId}>
              <Typography component="h2" variant="h4">
                {currentCourse?.name || ''}
              </Typography>

              <div className={styles.courseId__grid}>
                {currentCourse.course_records.map((courseRecord) => (
                  <div
                    key={courseRecord.id}
                    className={styles.courseRecordCard}
                    onClick={() =>
                      router.push(
                        CourseRecordRoute.ROOT(
                          currentCourse.id,
                          courseRecord.id
                        )
                      )
                    }
                  >
                    <div>
                      <NextImage src={courseRecordImage} />
                    </div>
                    <div className={styles.courseCard__content}>
                      <div>Carrera: {courseRecord.career}</div>
                      <div>Seccion: {courseRecord.group}</div>
                      <div>Periodo: {courseRecord.period.value}</div>
                    </div>
                    <Divider />
                    <div className={styles.courseCard__actions}>fds</div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </CourseLayout>
    </>
  );
};
