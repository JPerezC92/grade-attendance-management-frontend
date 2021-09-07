import { Typography } from '@material-ui/core';
import { CourseCard, IfUserIsAuthenticated } from 'src/components/modules';
import { CourseButtonCreate } from 'src/components/modules/app/course';
import { CourseLayout } from 'src/components/modules/app/CourseLayout';
import { useAppSelector } from 'src/redux';
import styles from './CourseContainer.module.scss';

export const AppRootContainer: React.FC = () => {
  const { courses } = useAppSelector((state) => state.courseReducer);

  return (
    <IfUserIsAuthenticated>
      <CourseLayout>
        <div className={styles.course}>
          <Typography component="h2" variant="h4" align="left">
            Cursos
          </Typography>
          <div className={styles.course__grid}>
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          <CourseButtonCreate />
        </div>
      </CourseLayout>
    </IfUserIsAuthenticated>
  );
};
