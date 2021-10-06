import IfUserIsAuthenticated from 'src/modules/auth/components/IfUserIsAuthenticated';
import CourseRecordGradeContainer from 'src/modules/grade/components/CourseRecordGradeContainer';

const CourseRecordGrade: React.FC = () => {
  return (
    <>
      <IfUserIsAuthenticated>
        <CourseRecordGradeContainer />
      </IfUserIsAuthenticated>
    </>
  );
};

export default CourseRecordGrade;
