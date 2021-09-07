import { useEffect } from 'react';
import NextImage from 'next/image';
import { Typography } from '@material-ui/core';
import { useRouter } from 'next/router';
import { CourseLayout } from 'src/components/modules';
import courseRecordImage from 'src/static/course-record-image.jpg';
import {
  startLoadingCourseDetail,
  useAppDispatch,
  useAppSelector,
} from 'src/redux';
import styles from './CourseIdContainer.module.scss';

export const CourseIdContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    courseReducer: { currentCourse },
  } = useAppSelector((state) => state);

  const router = useRouter();

  useEffect(() => {
    const courseId = parseInt(router.query.courseId as string);
    if (!currentCourse && courseId) {
      dispatch(startLoadingCourseDetail(courseId));
    }
  }, [router.query]);

  if (!currentCourse) {
    return <div>Cargando ...</div>;
  }

  return (
    <>
      <CourseLayout>
        <div className={styles.courseId}>
          <Typography component="h2" variant="h4">
            {currentCourse.name}
          </Typography>

          <div className={styles.courseId__grid}>
            {currentCourse.course_records.map((courseRecord) => (
              <div key={courseRecord.id} className={styles.courseRecordCard}>
                <div>
                  <NextImage src={courseRecordImage} />
                </div>
                <div className={styles.courseCard__content}>
                  <div>Carrera: {courseRecord.career}</div>
                  <div>Seccion: {courseRecord.group}</div>
                  <div>Periodo: {courseRecord.period.value}</div>
                </div>
                <div className={styles.courseCard__actions}>Actions</div>
              </div>
            ))}
          </div>
        </div>
      </CourseLayout>
    </>
  );
};
