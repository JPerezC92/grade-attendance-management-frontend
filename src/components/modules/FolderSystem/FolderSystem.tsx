import React from 'react';
import { Folder } from 'src/components/common';
import File from 'src/components/common/File/File';
import styles from './FolderSystem.module.scss';

export const FolderSystem: React.FC = () => {
  return (
    <div className={styles.folderSystem}>
      {[
        'folder 1',
        'folder 2',
        'folder 3',
        'folder 4',
        'folder 5',
        'folder 6',
        'folder 7',
        'folder 8',
        'folder 9',
        'folder 10',
        'folder 11',
        'folder 12',
        'folder 13',
        'folder 14',
        'folder 15',
      ].map((name, i) => (
        <Folder key={name + i} folder={{ name, id: i }} />
      ))}

      {[
        'file 1',
        'file 2',
        'file 3',
        'file 4',
        'file 5',
        'file 6',
        'file 7',
        'file 8',
        'file 9',
        'file 10',
        'file 11',
        'file 12',
        'file 13',
        'file 14',
        'file 15',
      ].map((name, i) => (
        <File key={name + i} file={{ name, id: i }} />
      ))}
    </div>
  );
};
