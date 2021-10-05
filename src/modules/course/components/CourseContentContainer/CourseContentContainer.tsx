import NextImage from 'next/image';
import { useRouter } from 'next/router';
import { Divider, Typography } from '@material-ui/core';

import { useAppSelector } from 'src/redux';
import { CourseRecordRoute, CourseRoute } from 'src/routes';
import courseRecordImage from 'src/static/course-record-image.jpg';
import AppLayout from 'src/shared/components/AppLayout';
import CourseRecordButtonCreate from 'src/modules/courseRecord/components/CourseRecordButtonCreate';
import Link from 'src/shared/components/Link';
import NavigationBreadcrumbs from 'src/shared/components/NavigationBreadcrumbs';
import LoadCurrentCourse from '../LoadCurrentCourse';
import styles from './CourseContentContainer.module.scss';
import CourseRecordButtonDelete from 'src/modules/courseRecord/components/CourseRecordButtonDelete';
import CourseRecordButtonUpdate from 'src/modules/courseRecord/components/CourseRecordButtonUpdate';

const CourseContentContainer: React.FC = () => {
  const router = useRouter();
  const {
    courseReducer: { currentCourse },
  } = useAppSelector((state) => state);

  return (
    <AppLayout>
      <LoadCurrentCourse>
        {currentCourse.isLoaded && (
          <>
            <div className={styles.courseId}>
              <Typography component="h2" variant="h4">
                {currentCourse?.name || ''}
              </Typography>

              <NavigationBreadcrumbs>
                <Link href={CourseRoute.ROOT}>Cursos</Link>

                <Typography color="textPrimary">
                  {currentCourse.name}
                </Typography>
              </NavigationBreadcrumbs>

              <div className={styles.courseId__grid}>
                {currentCourse.course_records.map((courseRecord) => (
                  <div
                    key={courseRecord.id}
                    className={styles.courseRecordCard}
                    onClick={() =>
                      router.push(
                        CourseRecordRoute.GRADE(
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
                    <div className={styles.courseCard__actions}>
                      <CourseRecordButtonUpdate courseRecord={courseRecord} />
                      <CourseRecordButtonDelete courseRecord={courseRecord} />
                    </div>
                  </div>
                ))}
              </div>

              <CourseRecordButtonCreate />
            </div>
          </>
        )}
      </LoadCurrentCourse>
    </AppLayout>
  );
};

export default CourseContentContainer;
