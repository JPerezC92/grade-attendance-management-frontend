import { v4 as uuidv4 } from 'uuid';
import { ServerErrorResponse, SuccessfulResponse } from 'src/interfaces';

interface FolderDetail {
  id: number;
}
interface FolderRepository {
  // create(
  //   parentFolderId: string,
  //   folderName: string
  // ): Promise<
  //   SuccessfulResponse<Omit<FolderDetail, 'objectType'>> | ServerErrorResponse
  // >;
  update(
    folderDetail: FolderDetail
  ): Promise<
    SuccessfulResponse<Omit<FolderDetail, 'objectType'>> | ServerErrorResponse
  >;

  delete(
    folderId: string
  ): Promise<SuccessfulResponse<unknown> | ServerErrorResponse>;
}

export class LaravelFolderRepository implements FolderRepository {
  // async create(
  //   parentFolderId: string,
  //   folderName: string
  // ): Promise<
  //   SuccessfulResponse<Omit<FolderDetail, 'objectType'>> | ServerErrorResponse
  // > {
  //   if (!parentFolderId || !folderName) {
  //     return { success: false, message: 'Problem creating folder' };
  //   }

  //   return {
  //     success: true,
  //     payload: {
  //       id: uuidv4(),
  //       name: folderName,
  //       createdAt: '10-07-2021',
  //       updatedAt: '10-07-2021',
  //     },
  //   };
  // }

  async update(
    folderDetail: FolderDetail
  ): Promise<
    SuccessfulResponse<Omit<FolderDetail, 'objectType'>> | ServerErrorResponse
  > {
    if (!folderDetail) {
      return { success: false, message: 'Problem updating folder' };
    }

    return { success: true, payload: { ...folderDetail } };
  }

  async delete(
    folderId: string
  ): Promise<SuccessfulResponse<unknown> | ServerErrorResponse> {
    if (!folderId) {
      return { success: false, message: 'Problem deleting folder' };
    }

    return { success: true, payload: {} };
  }
}
