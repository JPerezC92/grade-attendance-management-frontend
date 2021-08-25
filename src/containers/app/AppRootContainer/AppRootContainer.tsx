import { AppLayout, IfUserIsAuthenticated } from 'src/components/modules';
import { FolderSystem } from 'src/components/modules/app';
// import styles from './AppRootContainer.module.scss';

export const AppRootContainer: React.FC = () => {
  return (
    <IfUserIsAuthenticated>
      <AppLayout>
        <FolderSystem />
      </AppLayout>
    </IfUserIsAuthenticated>
  );
};
