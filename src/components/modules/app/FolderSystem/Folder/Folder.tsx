import { Typography } from '@material-ui/core';
import { FcFolder } from 'react-icons/fc';
import styles from './Folder.module.scss';

interface FolderProps {
  folder: {
    id: number;
    name: string;
  };
}

export const Folder: React.FC<FolderProps> = ({ folder }) => {
  return (
    <>
      <div className={styles.folder}>
        <span className={styles.icon}>
          <FcFolder />
        </span>

        <Typography variant="body1" align="center" noWrap={true}>
          {folder.name}
        </Typography>
      </div>
    </>
  );
};
