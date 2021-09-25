import { Paper, Typography } from '@material-ui/core';

import RecordLayout from 'src/modules/courseRecord/components/RecordLayout';
import { useAppSelector } from 'src/redux';
import { CourseRoute } from 'src/routes';
import Link from 'src/shared/components/Link';
import NavigationBreadcrumbs from 'src/shared/components/NavigationBreadcrumbs';
import GradeTable from '../GradeTable';
import styles from './CourseRecordGradeContainer.module.scss';

const CourseRecordGradeContainer: React.FC = () => {
  const {
    courseReducer: { currentCourse },
  } = useAppSelector((state) => state);

  return (
    <>
      <RecordLayout>
        <div className={styles.recordGrade__content}>
          <Typography className={styles.title} component="h1" variant="h3">
            Calificaciones
          </Typography>

          <NavigationBreadcrumbs>
            <Link href={CourseRoute.ROOT}>Cursos</Link>

            <Link href={CourseRoute.COURSE(currentCourse.id)}>
              {currentCourse.name}
            </Link>

            <Typography color="textPrimary">Calificaciones</Typography>
          </NavigationBreadcrumbs>

          <Paper className={styles.recordGrade__tableWrapper}>
            <GradeTable />
          </Paper>
        </div>
      </RecordLayout>
    </>
  );
};

export default CourseRecordGradeContainer;
