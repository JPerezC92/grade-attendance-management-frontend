import { FileRecordDetail, FolderDetail } from 'src/interfaces';
import { ObjectType } from 'src/redux/reducers';

export function isFileRecordDetail(
  systemObject: FolderDetail | FileRecordDetail
): systemObject is FileRecordDetail {
  return systemObject.objectType === ObjectType.FILE;
}
