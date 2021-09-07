import { Paper, Typography } from '@material-ui/core';
import { GradeTable, RecordLayout } from 'src/components/modules';
import styles from './CourseRecordGradeContainer.module.scss';

export const CourseRecordGradeContainer: React.FC = () => {
  return (
    <>
      <RecordLayout>
        <div className={styles.recordGrade__content}>
          <Typography className={styles.title} component="h1" variant="h3">
            Calificaciones
          </Typography>

          <Paper className={styles.recordGrade__tableWrapper}>
            <GradeTable />
          </Paper>
        </div>
      </RecordLayout>
    </>
  );
};
