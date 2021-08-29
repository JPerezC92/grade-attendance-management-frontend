import { FileRecordDetail, FolderDetail } from 'src/interfaces';
import { useAppDispatch } from 'src/redux';
import { fileSystemActions } from 'src/redux/reducers';
import { UseMouseCoordinatesReturn } from './useMouseCoordinates';

interface UseFileSystemRigthClick {
  (mouseCoordinatesReturn: UseMouseCoordinatesReturn): {
    handleOpenContextMenu: (
      event: React.MouseEvent<HTMLTableRowElement>,
      folderDetail: FolderDetail | FileRecordDetail
    ) => void;

    handleCloseContextMenu: () => void;
  };
}

export const useFileSystemRigthClick: UseFileSystemRigthClick = (
  mouseCoordinatesReturn: UseMouseCoordinatesReturn
) => {
  const dispatch = useAppDispatch();

  const handleOpenContextMenu = (
    event: React.MouseEvent<HTMLTableRowElement>,
    folderDetail: FolderDetail
  ) => {
    event.preventDefault();
    dispatch(fileSystemActions.setRightClickedObject(folderDetail));
    mouseCoordinatesReturn.setMouseCoordinates(() => ({
      mouseX: event.clientX - 2,
      mouseY: event.clientY - 4,
    }));
  };

  const handleCloseContextMenu = () => {
    mouseCoordinatesReturn.resetMouseCoordinates();
  };

  return {
    handleOpenContextMenu,
    handleCloseContextMenu,
  };
};
