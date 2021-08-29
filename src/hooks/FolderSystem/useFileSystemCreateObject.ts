interface UseFileSystemCreateObject {
  (): {
    handleCreateFolder: (folderName: string) => void;
    handleCreateFile: (fileName: string) => void;
  };
}

export const useFileSystemCreateObject: UseFileSystemCreateObject = () => {
  const handleCreateFolder = (fileName: string) => {
    // eslint-disable-next-line no-console
    console.log(fileName);
  };

  const handleCreateFile = (folderName: string) => {
    // eslint-disable-next-line no-console
    console.log(folderName);
  };

  return {
    handleCreateFolder,
    handleCreateFile,
  };
};
