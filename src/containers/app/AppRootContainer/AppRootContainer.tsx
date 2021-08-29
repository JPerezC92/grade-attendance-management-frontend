import { AppLayout, IfUserIsAuthenticated } from 'src/components/modules';
import { FileSystem } from 'src/components/modules/app';
// import styles from './AppRootContainer.module.scss';

export const AppRootContainer: React.FC = () => {
  return (
    <IfUserIsAuthenticated>
      <AppLayout>
        <FileSystem />
      </AppLayout>
    </IfUserIsAuthenticated>
  );
};
