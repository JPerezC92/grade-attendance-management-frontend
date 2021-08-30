import { AppThunk } from 'src/redux/store/store';
import { fileSystemActions } from '../fileSystem.slice';
import { ObjectType } from '../fileSystem.types';
import { FolderDetail, ServerErrorResponse } from 'src/interfaces';
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
