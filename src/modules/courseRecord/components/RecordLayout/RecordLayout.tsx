import AppLayout from 'src/shared/components/AppLayout';
import LoadCurrentCourse from 'src/modules/course/components/LoadCurrentCourse';
import RecordMenu from '../RecordMenu';
import LoadCourseRecord from '../LoadCourseRecord';

const RecordLayout: React.FC = ({ children }) => {
  return (
    <>
      <AppLayout AsideMenu={<RecordMenu />}>
        <LoadCurrentCourse>
          <LoadCourseRecord>{children}</LoadCourseRecord>
        </LoadCurrentCourse>
      </AppLayout>
    </>
  );
};

export default RecordLayout;
