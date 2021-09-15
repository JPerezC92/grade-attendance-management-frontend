import { Paper, Typography } from '@material-ui/core';

import RecordLayout from 'src/modules/courseRecord/components/RecordLayout';
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

          <Paper className={styles.recordGrade__tableWrapper}>
            <GradeTable />
          </Paper>
        </div>
      </RecordLayout>
    </>
  );
};

export default CourseRecordGradeContainer;
