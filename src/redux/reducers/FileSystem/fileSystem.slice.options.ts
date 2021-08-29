import { Draft, PayloadAction } from '@reduxjs/toolkit';
import { FileRecordDetail, FolderDetail } from 'src/interfaces';
import { FileSystemState } from './fileSystem.types';

const setRightClickedObject = (
  state: Draft<FileSystemState>,
  action: PayloadAction<FileRecordDetail | FolderDetail | null>
): void => {
  state.rightClickedObject = action.payload;
};

const addNewFolder = (
  state: Draft<FileSystemState>,
  action: PayloadAction<FolderDetail>
): void => {
  state.folders = [action.payload, ...state.folders];
};

const addNewFile = (
  state: Draft<FileSystemState>,
  action: PayloadAction<FileRecordDetail>
): void => {
  state.files = [action.payload, ...state.files];
};

const updateFile = (
  state: Draft<FileSystemState>,
  action: PayloadAction<FileRecordDetail>
): void => {
  state.files = state.files.map((fileDetail) =>
    fileDetail.id === action.payload.id ? action.payload : fileDetail
  );
};

const updateFolder = (
  state: Draft<FileSystemState>,
  action: PayloadAction<FolderDetail>
): void => {
  state.folders = state.folders.map((folderDetail) =>
    folderDetail.id === action.payload.id ? action.payload : folderDetail
  );
};

const deleteFolder = (
  state: Draft<FileSystemState>,
  action: PayloadAction<FolderDetail>
): void => {
  state.folders = state.folders.filter(
    (folderDetail) => folderDetail.id !== action.payload.id
  );
};

const deleteFile = (
  state: Draft<FileSystemState>,
  action: PayloadAction<FileRecordDetail>
): void => {
  state.files = state.files.filter(
    (fileDetail) => fileDetail.id !== action.payload.id
  );
};

export const fileSystemSliceOptions = {
  setRightClickedObject,
  addNewFolder,
  addNewFile,
  updateFile,
  updateFolder,
  deleteFolder,
  deleteFile,
};
