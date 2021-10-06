import IfUserIsAuthenticated from 'src/modules/auth/components/IfUserIsAuthenticated';
import SettingsContainer from 'src/modules/courseRecord/components/SettingsContainer';

const CourseRecordSettings: React.FC = () => {
  return (
    <>
      <IfUserIsAuthenticated>
        <SettingsContainer />
      </IfUserIsAuthenticated>
    </>
  );
};

export default CourseRecordSettings;
