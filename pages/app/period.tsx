import IfUserIsAuthenticated from 'src/modules/auth/components/IfUserIsAuthenticated';
import PeriodContainer from 'src/modules/period/components/PeriodContainer';

const Period: React.FC = () => {
  return (
    <>
      <IfUserIsAuthenticated>
        <PeriodContainer />
      </IfUserIsAuthenticated>
    </>
  );
};

export default Period;
