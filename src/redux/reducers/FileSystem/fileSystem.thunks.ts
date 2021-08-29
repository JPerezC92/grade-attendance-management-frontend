import { v4 as uuidv4 } from 'uuid';
import { AppThunk } from 'src/redux/store/store';
import { fileSystemActions } from './fileSystem.slice';
import { ObjectType } from './fileSystem.types';
import { FileRecordDetail, FolderDetail } from 'src/interfaces';

export const startCreateFolder = (folderName: string): AppThunk => (
  dispatch,
  _
) => {
  dispatch(
    fileSystemActions.addNewFolder({
      id: uuidv4(),
      name: folderName,
      createdAt: '10-07-2021',
      updatedAt: '10-07-2021',
      objectType: ObjectType.FOLDER,
    })
  );
};

export const startCreateFile = (fileName: string): AppThunk => (
  dispatch,
  _
) => {
  dispatch(
    fileSystemActions.addNewFile({
      id: uuidv4(),
      name: fileName,
      createdAt: '10-07-2021',
      updatedAt: '10-07-2021',
      objectType: ObjectType.FILE,
    })
  );
};

export const startDeleteFolder = (folderDetail: FolderDetail): AppThunk => (
  dispatch,
  _
) => {
  dispatch(fileSystemActions.deleteFolder(folderDetail));
};

export const startDeleteFile = (fileDetail: FileRecordDetail): AppThunk => (
  dispatch,
  _
) => {
  dispatch(fileSystemActions.deleteFile(fileDetail));
};

export const startUpdateFile = (fileDetail: FileRecordDetail): AppThunk => (
  dispatch,
  _
) => {
  dispatch(fileSystemActions.updateFile(fileDetail));
};

export const startUpdateFolder = (folderDetail: FolderDetail): AppThunk => (
  dispatch,
  _
) => {
  dispatch(fileSystemActions.updateFolder(folderDetail));
};
