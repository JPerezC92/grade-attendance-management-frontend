import { v4 as uuidv4 } from 'uuid';
import {
  FileRecordDetail,
  ServerErrorResponse,
  SuccessfulResponse,
} from 'src/interfaces';

interface FileRecordRepository {
  create(
    parentFolderId: string,
    fileName: string
  ): Promise<
    | SuccessfulResponse<Omit<FileRecordDetail, 'objectType'>>
    | ServerErrorResponse
  >;

  update(
    file: FileRecordDetail
  ): Promise<
    | SuccessfulResponse<Omit<FileRecordDetail, 'objectType'>>
    | ServerErrorResponse
  >;

  delete(
    fileId: string
  ): Promise<SuccessfulResponse<unknown> | ServerErrorResponse>;
}

export class LaravelFileRecordRepository implements FileRecordRepository {
  async create(
    folderId: string,
    fileName: string
  ): Promise<
    | SuccessfulResponse<Omit<FileRecordDetail, 'objectType'>>
    | ServerErrorResponse
  > {
    if (!folderId || !fileName) {
      return { success: false, message: 'Problem creating file record' };
    }

    return {
      success: true,
      payload: {
        id: uuidv4(),
        name: fileName,
        createdAt: '10-07-2021',
        updatedAt: '10-07-2021',
      },
    };
  }

  async update(
    fileRecordDetail: FileRecordDetail
  ): Promise<
    | SuccessfulResponse<Omit<FileRecordDetail, 'objectType'>>
    | ServerErrorResponse
  > {
    if (!fileRecordDetail) {
      return { success: false, message: 'Problem updating file record' };
    }

    return {
      success: true,
      payload: fileRecordDetail,
    };
  }

  async delete(
    fileRecordId: string
  ): Promise<SuccessfulResponse<unknown> | ServerErrorResponse> {
    if (!fileRecordId) {
      return {
        success: false,
        message: ' Problem deleting file record',
      };
    }

    return { success: true, payload: {} };
  }
}
