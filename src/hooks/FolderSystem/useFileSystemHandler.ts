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

  const handleCreateFolder = async (folderName: string) => {
    const response = await dispatch(startCreateFolder(folderName));

    // eslint-disable-next-line no-console
    if (response) console.log(response.message);
  };

  const handleCreateFile = (fileName: string) => {
    dispatch(startCreateFile(fileName));
  };

  const handleRenameFileSystemObject = async (
    fileSystemObjectNameUpdated: string
  ) => {
    if (isFolderDetail(rightClickedObject)) {
      const response = await dispatch(
        startUpdateFolder({
          ...rightClickedObject,
          name: fileSystemObjectNameUpdated,
        })
      );

      // eslint-disable-next-line no-console
      if (response) console.log(response.message);
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

  const handleDeleteFileSystemObject = async () => {
    if (isFolderDetail(rightClickedObject)) {
      const response = await dispatch(startDeleteFolder(rightClickedObject));

      // eslint-disable-next-line no-console
      if (response) console.log(response.message);
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
