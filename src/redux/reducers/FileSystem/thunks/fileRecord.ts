import { AppThunk } from 'src/redux/store/store';
import { FileRecordDetail, ServerErrorResponse } from 'src/interfaces';
import { LaravelFileRecordRepository } from 'src/repositories';
import { isServerErrorResponse } from 'src/helpers/assertions';
import { fileSystemActions } from '../fileSystem.slice';
import { ObjectType } from '../fileSystem.types';

const laravelFileRecordRepository = new LaravelFileRecordRepository();

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
