import { Typography } from '@material-ui/core';
import React from 'react';
import styles from './File.module.scss';

interface FileProps {
  file: {
    id: number;
    name: string;
  };
}

const File: React.FC<FileProps> = ({ file }) => {
  return (
    <>
      <span className={styles.file}>
        <div>📄</div>

        <Typography variant="body1" align="center" noWrap={true}>
          {file.name}
        </Typography>
      </span>
    </>
  );
};

export default File;
