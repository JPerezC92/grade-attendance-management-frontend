import { Typography } from '@material-ui/core';
import { FcDocument } from 'react-icons/fc';
import { FileRecordDetail } from 'src/interfaces/Folder';
import styles from './File.module.scss';

interface FileProps {
  fileDetail: FileRecordDetail;
}

export const File: React.FC<FileProps> = ({ fileDetail }) => {
  return (
    <>
      <span className={styles.file}>
        <span className={styles.icon}>
          <FcDocument />
        </span>

        <Typography variant="body1" align="center" noWrap={true}>
          {fileDetail.name}
        </Typography>
      </span>
    </>
  );
};
