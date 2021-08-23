import { Typography } from '@material-ui/core';
import React from 'react';
import styles from './Folder.module.scss';

interface FolderProps {
  folder: {
    id: number;
    name: string;
  };
}

const Folder: React.FC<FolderProps> = ({ folder }) => {
  return (
    <>
      <span className={styles.folder}>
        <div>📁</div>

        <Typography variant="body1" align="center" noWrap={true}>
          {folder.name}
        </Typography>
      </span>
    </>
  );
};

export default Folder;
