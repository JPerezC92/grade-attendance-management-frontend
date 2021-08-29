import { isFileRecordDetail } from 'src/helpers/assertions';
import { isFolderDetail } from 'src/helpers/assertions/isFolderDetail';
import { useAppDispatch, useAppSelector } from 'src/redux';
import {
  startCreateFile,
  startCreateFolder,
  startDeleteFile,
  startDeleteFolder,
  startUpdateFile,
  startUpdateFolder,
} from 'src/redux/reducers/FileSystem';

interface UseFileSystemHandler {
  (): {
    handleCreateFolder: (folderName: string) => void;
    handleCreateFile: (fileName: string) => void;
    handleRenameFileSystemObject: (fileSystemObjectNameUpdated: string) => void;
    handleDeleteFileSystemObject: () => void;
  };
}

export const useFileSystemHandler: UseFileSystemHandler = () => {
  const dispatch = useAppDispatch();

  const { rightClickedObject } = useAppSelector(
    (state) => state.fileSystemReducer
  );

  const handleCreateFolder = (folderName: string) => {
    dispatch(startCreateFolder(folderName));
  };

  const handleCreateFile = (fileName: string) => {
    dispatch(startCreateFile(fileName));
  };

  const handleRenameFileSystemObject = (
    fileSystemObjectNameUpdated: string
  ) => {
    if (isFolderDetail(rightClickedObject)) {
      dispatch(
        startUpdateFolder({
          ...rightClickedObject,
          name: fileSystemObjectNameUpdated,
        })
      );
    }

    if (isFileRecordDetail(rightClickedObject)) {
      dispatch(
        startUpdateFile({
          ...rightClickedObject,
          name: fileSystemObjectNameUpdated,
        })
      );
    }
  };

  const handleDeleteFileSystemObject = () => {
    if (isFolderDetail(rightClickedObject)) {
      dispatch(startDeleteFolder(rightClickedObject));
    }

    if (isFileRecordDetail(rightClickedObject)) {
      dispatch(startDeleteFile(rightClickedObject));
    }
  };

  return {
    handleCreateFolder,
    handleCreateFile,
    handleRenameFileSystemObject,
    handleDeleteFileSystemObject,
  };
};
