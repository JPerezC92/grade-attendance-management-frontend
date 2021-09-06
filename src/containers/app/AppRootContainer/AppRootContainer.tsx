import { Fab, Typography } from '@material-ui/core';
import { VscAdd } from 'react-icons/vsc';
import { CourseCard, IfUserIsAuthenticated } from 'src/components/modules';
import { CourseLayout } from 'src/components/modules/app/CourseLayout';
import { useAppSelector } from 'src/redux';
// import { FileSystem } from 'src/components/modules/app';
// import styles from './AppRootContainer.module.scss';

export const AppRootContainer: React.FC = () => {
  const { courses } = useAppSelector((state) => state.courseReducer);

  return (
    <IfUserIsAuthenticated>
      <CourseLayout>
        <div style={{ padding: '36px' }}>
          <Typography component="h2" variant="h4" align="left">
            Cursos
          </Typography>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: '24px',
              marginBlockStart: '16px',
            }}
          >
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          <Fab
            color="primary"
            aria-label="add"
            style={{ position: 'absolute', bottom: '1em', right: '1em' }}
          >
            <VscAdd style={{ fontSize: '24px' }} />
          </Fab>
        </div>
      </CourseLayout>
    </IfUserIsAuthenticated>
  );
};
