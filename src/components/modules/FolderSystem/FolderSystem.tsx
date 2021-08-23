import React from 'react';
import { Folder } from 'src/components/common';
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
        'folder 16',
        'folder 17',
        'folder 18',
        'folder 19',
        'folder 21',
        'folder 22',
        'folder 23',
        'folder 24',
      ].map((name, i) => (
        <Folder key={name + i} folder={{ name, id: i }} />
      ))}
    </div>
  );
};
