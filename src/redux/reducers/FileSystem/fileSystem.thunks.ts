import { v4 as uuidv4 } from 'uuid';
import { AppThunk } from 'src/redux/store/store';
import { fileSystemActions } from './fileSystem.slice';
import { ObjectType } from './fileSystem.types';
import {
  FileRecordDetail,
  FolderDetail,
  ServerErrorResponse,
} from 'src/interfaces';
import { LaravelFolderRepository } from 'src/repositories';
import { isServerErrorResponse } from 'src/helpers/assertions';

const laravelFolderRepository = new LaravelFolderRepository();

export const startCreateFolder = (
  folderName: string
): AppThunk<Promise<ServerErrorResponse | void>> => async (
  dispatch,
  getState
) => {
  const {
    fileSystemReducer: { currentFolder },
  } = getState();

  const response = await laravelFolderRepository.create(
    currentFolder.id,
    folderName
  );

  if (isServerErrorResponse(response)) {
    return response;
  }

  dispatch(
    fileSystemActions.addNewFolder({
      ...response.payload,
      objectType: ObjectType.FOLDER,
    })
  );
};

export const startUpdateFolder = (
  folderDetail: FolderDetail
): AppThunk<Promise<ServerErrorResponse | void>> => async (dispatch, _) => {
  const response = await laravelFolderRepository.update(folderDetail);

  if (isServerErrorResponse(response)) return response;

  dispatch(
    fileSystemActions.updateFolder({
      ...response.payload,
      objectType: ObjectType.FOLDER,
    })
  );
};

export const startDeleteFolder = (
  folderDetail: FolderDetail
): AppThunk<Promise<ServerErrorResponse | void>> => async (dispatch, _) => {
  const response = await laravelFolderRepository.delete(folderDetail.id);

  if (isServerErrorResponse(response)) return response;

  dispatch(fileSystemActions.deleteFolder(folderDetail));
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

export const startUpdateFile = (fileDetail: FileRecordDetail): AppThunk => (
  dispatch,
  _
) => {
  dispatch(fileSystemActions.updateFile(fileDetail));
};

export const startDeleteFile = (fileDetail: FileRecordDetail): AppThunk => (
  dispatch,
  _
) => {
  dispatch(fileSystemActions.deleteFile(fileDetail));
};
