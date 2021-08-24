import {
  AppLayout,
  FolderSystem,
  IfUserIsAuthenticated,
} from 'src/components/modules';
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
