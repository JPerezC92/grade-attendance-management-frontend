import { Menu, MenuItem } from '@material-ui/core';
import { isMouseCoordinates } from 'src/helpers/assertions';
import { useModal } from 'src/hooks';
import { MouseCoordinatesAllowingNull } from 'src/hooks/FolderSystem/useMouseCoordinates';
import { FileSystemDialogDeleteForm } from '../FileSystemDialogDeleteForm';
import { FileSystemDialogRenameForm } from '../FileSystemDialogRenameForm';

interface FileSystemRigthClickMenuProps {
  mouseCoordinates: MouseCoordinatesAllowingNull;
  handleCloseContextMenu: () => void;
}

export const FileSystemRigthClickMenu: React.FC<FileSystemRigthClickMenuProps> = ({
  mouseCoordinates,
  handleCloseContextMenu,
}) => {
  const useModalRenameFileSystemObject = useModal();
  const useModalDeleteFileSystemObject = useModal();

  return (
    <>
      <Menu
        keepMounted
        open={isMouseCoordinates(mouseCoordinates)}
        onClose={handleCloseContextMenu}
        anchorReference="anchorPosition"
        anchorPosition={
          isMouseCoordinates(mouseCoordinates)
            ? {
                top: mouseCoordinates.mouseY,
                left: mouseCoordinates.mouseX,
              }
            : undefined
        }
      >
        <MenuItem
          onClick={() => {
            handleCloseContextMenu();
            useModalRenameFileSystemObject.handleOpenModal();
          }}
        >
          Renombrar
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleCloseContextMenu();
            useModalDeleteFileSystemObject.handleOpenModal();
          }}
        >
          Borrar
        </MenuItem>
      </Menu>

      {useModalRenameFileSystemObject.isOpen && (
        <FileSystemDialogRenameForm
          useModalRenameFileSystemObject={useModalRenameFileSystemObject}
        />
      )}

      {useModalDeleteFileSystemObject.isOpen && (
        <FileSystemDialogDeleteForm
          useModalDeleteFileSystemObject={useModalDeleteFileSystemObject}
        />
      )}
    </>
  );
};
