import { FileRecordDetail, FolderDetail } from 'src/interfaces';
import { ObjectType } from 'src/redux/reducers';

export function isFolderDetail(
  systemObject: FolderDetail | FileRecordDetail
): systemObject is FolderDetail {
  return systemObject.objectType === ObjectType.FOLDER;
}
