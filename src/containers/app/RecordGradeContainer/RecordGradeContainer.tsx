import { Paper, Typography } from '@material-ui/core';
import { GradeTable, RecordLayout } from 'src/components/modules';
import styles from './RecordGradeContainer.module.scss';

export const RecordGradeContainer: React.FC = () => {
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
