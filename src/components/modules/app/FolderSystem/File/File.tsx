import { Typography } from '@material-ui/core';
import { FcDocument } from 'react-icons/fc';
import styles from './File.module.scss';

interface FileProps {
  file: {
    id: number;
    name: string;
  };
}

export const File: React.FC<FileProps> = ({ file }) => {
  return (
    <>
      <span className={styles.file}>
        <span className={styles.icon}>
          <FcDocument />
        </span>

        <Typography variant="body1" align="center" noWrap={true}>
          {file.name}
        </Typography>
      </span>
    </>
  );
};
