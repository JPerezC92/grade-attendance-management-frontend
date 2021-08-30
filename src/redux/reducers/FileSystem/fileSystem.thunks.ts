import { AppThunk } from 'src/redux/store/store';
import { fileSystemActions } from './fileSystem.slice';
import { ObjectType } from './fileSystem.types';
import {
  FileRecordDetail,
  FolderDetail,
  ServerErrorResponse,
} from 'src/interfaces';
import {
  LaravelFileRecordRepository,
  LaravelFolderRepository,
} from 'src/repositories';
import { isServerErrorResponse } from 'src/helpers/assertions';

const laravelFolderRepository = new LaravelFolderRepository();
const laravelFileRecordRepository = new LaravelFileRecordRepository();

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

export const startCreateFile = (
  fileName: string
): AppThunk<Promise<ServerErrorResponse | void>> => async (
  dispatch,
  getState
) => {
  const { currentFolder } = getState().fileSystemReducer;

  const response = await laravelFileRecordRepository.create(
    currentFolder.id,
    fileName
  );

  if (isServerErrorResponse(response)) return response;

  dispatch(
    fileSystemActions.addNewFile({
      ...response.payload,
      objectType: ObjectType.FILE,
    })
  );
};

export const startUpdateFile = (
  fileRecordDetail: FileRecordDetail
): AppThunk<Promise<ServerErrorResponse | void>> => async (dispatch, _) => {
  const response = await laravelFileRecordRepository.update(fileRecordDetail);

  if (isServerErrorResponse(response)) return response;

  dispatch(
    fileSystemActions.updateFile({
      ...response.payload,
      objectType: ObjectType.FILE,
    })
  );
};

export const startDeleteFile = (
  fileRecordDetail: FileRecordDetail
): AppThunk<Promise<ServerErrorResponse | void>> => async (dispatch, _) => {
  const response = await laravelFileRecordRepository.delete(
    fileRecordDetail.id
  );

  if (isServerErrorResponse(response)) return response;

  dispatch(fileSystemActions.deleteFile(fileRecordDetail));
};
