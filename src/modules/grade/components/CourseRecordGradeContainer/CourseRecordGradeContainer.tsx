import { Paper, Typography } from '@material-ui/core';

import { CourseRoute } from 'src/routes';
import RecordLayout from 'src/modules/courseRecord/components/RecordLayout';
import CurrentCourse from 'src/modules/course/components/CurrentCourse';
import CurrentCourseRecord from 'src/modules/courseRecord/components/CurrentCourseRecord';
import Link from 'src/shared/components/Link';
import NavigationBreadcrumbs from 'src/shared/components/NavigationBreadcrumbs';

import GradeActivitiesButtons from '../GradeActivitiesButtons';
import GradeTable from '../GradeTable';
import styles from './CourseRecordGradeContainer.module.scss';

const CourseRecordGradeContainer: React.FC = () => {
  return (
    <>
      <RecordLayout>
        <div className={styles.recordGrade__content}>
          <Typography className={styles.title} component="h1" variant="h3">
            Calificaciones
          </Typography>

          <CurrentCourse>
            {(currentCourse) => (
              <CurrentCourseRecord>
                {(currentCourseRecord) => (
                  <NavigationBreadcrumbs>
                    <Link href={CourseRoute.ROOT}>Cursos</Link>

                    <Link href={CourseRoute.COURSE(currentCourse.id)}>
                      {currentCourse.name}
                    </Link>

                    <Typography color="textPrimary">
                      {currentCourseRecord.career} -{' '}
                      {currentCourseRecord.semester} -{' '}
                      {currentCourseRecord.group}
                    </Typography>
                  </NavigationBreadcrumbs>
                )}
              </CurrentCourseRecord>
            )}
          </CurrentCourse>

          <GradeActivitiesButtons />

          <Paper className={styles.recordGrade__tableWrapper}>
            <GradeTable />
          </Paper>
        </div>
      </RecordLayout>
    </>
  );
};

export default CourseRecordGradeContainer;
