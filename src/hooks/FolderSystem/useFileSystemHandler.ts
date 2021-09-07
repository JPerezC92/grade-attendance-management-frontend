/* eslint-disable no-console */
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
} from 'src/redux/reducers/CourseRecord';

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

    if (response) console.log(response.message);
  };

  const handleCreateFile = async (fileName: string) => {
    const response = await dispatch(startCreateFile(fileName));

    response && console.log(response.message);
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

      if (response) console.log(response.message);
    }

    if (isFileRecordDetail(rightClickedObject)) {
      const response = await dispatch(
        startUpdateFile({
          ...rightClickedObject,
          name: fileSystemObjectNameUpdated,
        })
      );

      response && console.log(response.message);
    }
  };

  const handleDeleteFileSystemObject = async () => {
    if (isFolderDetail(rightClickedObject)) {
      const response = await dispatch(startDeleteFolder(rightClickedObject));

      if (response) console.log(response.message);
    }

    if (isFileRecordDetail(rightClickedObject)) {
      const response = await dispatch(startDeleteFile(rightClickedObject));

      response && console.log(response.message);
    }
  };

  return {
    handleCreateFolder,
    handleCreateFile,
    handleRenameFileSystemObject,
    handleDeleteFileSystemObject,
  };
};
