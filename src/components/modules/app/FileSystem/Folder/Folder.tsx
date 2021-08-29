import { Typography } from '@material-ui/core';
import { FcFolder } from 'react-icons/fc';
import { FolderDetail } from 'src/interfaces/Folder';
import styles from './Folder.module.scss';

interface FolderProps {
  folderDetail: FolderDetail;
}

export const Folder: React.FC<FolderProps> = ({ folderDetail }) => {
  return (
    <>
      <div className={styles.folder}>
        <span className={styles.icon}>
          <FcFolder />
        </span>

        <Typography variant="body1" align="center" noWrap={true}>
          {folderDetail.name}
        </Typography>
      </div>
    </>
  );
};
