import { Draft, PayloadAction } from '@reduxjs/toolkit';
import { FileRecordDetail, FolderDetail } from 'src/interfaces';
import { FileSystemState } from './fileSystem.slice';

const setRightClickedObject = (
  state: Draft<FileSystemState>,
  action: PayloadAction<FileRecordDetail | FolderDetail | null>
): void => {
  state.rightClickedObject = action.payload;
};

export const fileSystemSliceOptions = { setRightClickedObject };
