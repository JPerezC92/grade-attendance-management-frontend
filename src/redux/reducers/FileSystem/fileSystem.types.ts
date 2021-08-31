import { FileRecordDetail, FolderDetail } from 'src/interfaces';

export enum ObjectType {
  FOLDER = 'FOLDER',
  FILE = 'FILE',
}

export interface FileSystemState {
  recentFiles: FileRecordDetail[];
  files: FileRecordDetail[];
  folders: FolderDetail[];
  currentFolder: FolderDetail | null;
  currentFile: FileRecordDetail | null;
  rightClickedObject: FileRecordDetail | FolderDetail | null;
}

export const fileSystemInitialState: FileSystemState = {
  recentFiles: [
    {
      id: 'fe9fc2a0-e837-4dc1-8e51-ec63c51969a9',
      name: 'File 1',
      createdAt: '10-07-2021',
      updatedAt: '10-07-2021',
      objectType: ObjectType.FILE,
    },
    {
      id: '4e59bdcc-dab9-4100-a231-88fd8e2ce87f',
      name: 'File 2',
      createdAt: '10-07-2021',
      updatedAt: '10-07-2021',
      objectType: ObjectType.FILE,
    },
    {
      id: 'abbc5861-da5d-4f5b-83ad-dfa2d766f9e5',
      name: 'File 3',
      createdAt: '10-07-2021',
      updatedAt: '10-07-2021',
      objectType: ObjectType.FILE,
    },
    {
      id: '36cf14ba-bf85-4bad-bd8b-09939aadfa74',
      name: 'File 4',
      createdAt: '10-07-2021',
      updatedAt: '10-07-2021',
      objectType: ObjectType.FILE,
    },
    {
      id: '68be54c9-08d3-4324-ad7c-fdbd52cdd73a',
      name: 'File 5',
      createdAt: '10-07-2021',
      updatedAt: '10-07-2021',
      objectType: ObjectType.FILE,
    },
    {
      id: '2fec337c-66ab-491a-bfd8-efe885c8169c',
      name: 'File 6',
      createdAt: '10-07-2021',
      updatedAt: '10-07-2021',
      objectType: ObjectType.FILE,
    },
    {
      id: 'eadfa60c-662f-4e8c-8027-91134c894232',
      name: 'File 7',
      createdAt: '10-07-2021',
      updatedAt: '10-07-2021',
      objectType: ObjectType.FILE,
    },
    {
      id: '74d0b0eb-c050-4780-9d7b-9fab0bff1414',
      name: 'File 8',
      createdAt: '10-07-2021',
      updatedAt: '10-07-2021',
      objectType: ObjectType.FILE,
    },
    {
      id: '80010e3b-d00e-4910-96b6-1f8bb511a7a7',
      name: 'File 9',
      createdAt: '10-07-2021',
      updatedAt: '10-07-2021',
      objectType: ObjectType.FILE,
    },
    {
      id: 'b535bccd-96ad-4f43-b4f9-30e3de37d897',
      name: 'File 10',
      createdAt: '10-07-2021',
      updatedAt: '10-07-2021',
      objectType: ObjectType.FILE,
    },
  ],
  files: [
    {
      id: 'fe9fc2a0-e837-4dc1-8e51-ec63c51969a9',
      name: 'File 1',
      createdAt: '10-07-2021',
      updatedAt: '10-07-2021',
      objectType: ObjectType.FILE,
    },
    {
      id: '4e59bdcc-dab9-4100-a231-88fd8e2ce87f',
      name: 'File 2',
      createdAt: '10-07-2021',
      updatedAt: '10-07-2021',
      objectType: ObjectType.FILE,
    },
    {
      id: 'abbc5861-da5d-4f5b-83ad-dfa2d766f9e5',
      name: 'File 3',
      createdAt: '10-07-2021',
      updatedAt: '10-07-2021',
      objectType: ObjectType.FILE,
    },
    {
      id: '36cf14ba-bf85-4bad-bd8b-09939aadfa74',
      name: 'File 4',
      createdAt: '10-07-2021',
      updatedAt: '10-07-2021',
      objectType: ObjectType.FILE,
    },
    {
      id: '68be54c9-08d3-4324-ad7c-fdbd52cdd73a',
      name: 'File 5',
      createdAt: '10-07-2021',
      updatedAt: '10-07-2021',
      objectType: ObjectType.FILE,
    },
  ],
  folders: [
    {
      id: 'a471527d-7160-457e-b6eb-2e7cca9040a8',
      name: 'Folder 1',
      createdAt: '10-07-2021',
      updatedAt: '10-07-2021',
      objectType: ObjectType.FOLDER,
    },
    {
      id: 'fe196c0c-07e3-4420-8ef7-dff931bccc07',
      name: 'Folder 2',
      createdAt: '10-07-2021',
      updatedAt: '10-07-2021',
      objectType: ObjectType.FOLDER,
    },
    {
      id: '5eadf66c-eced-4ad5-832b-b54171e9d9e4',
      name: 'Folder 3',
      createdAt: '10-07-2021',
      updatedAt: '10-07-2021',
      objectType: ObjectType.FOLDER,
    },
    {
      id: '21491ff2-5be0-47a4-9def-a5a5a55d8478',
      name: 'Folder 4',
      createdAt: '10-07-2021',
      updatedAt: '10-07-2021',
      objectType: ObjectType.FOLDER,
    },
    {
      id: '3bb9dac5-1816-42b9-a694-58f64769d5ee',
      name: 'Folder 5',
      createdAt: '10-07-2021',
      updatedAt: '10-07-2021',
      objectType: ObjectType.FOLDER,
    },
  ],
  currentFolder: {
    id: '5d1f4cff-0c39-44cb-9bf8-a16b5a85311f',
    name: 'Root',
    createdAt: '10-07-2021',
    updatedAt: '10-07-2021',
    objectType: ObjectType.FOLDER,
  },
  rightClickedObject: null,
  currentFile: {
    id: 'fe9fc2a0-e837-4dc1-8e51-ec63c51969a9',
    name: 'File 1',
    createdAt: '10-07-2021',
    updatedAt: '10-07-2021',
    objectType: ObjectType.FILE,
  },
};
