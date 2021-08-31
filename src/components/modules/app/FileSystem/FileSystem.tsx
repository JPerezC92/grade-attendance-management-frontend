import { useRouter } from 'next/router';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { RecordRoute } from 'src/routes/record.routepath';
import { fileSystemActions, useAppDispatch, useAppSelector } from 'src/redux';
import { useFileSystemRigthClick, useMouseCoordinates } from 'src/hooks';
import { File } from './File';
import { Folder } from './Folder';
import { FileSystemRigthClickMenu } from './FileSystemRigthClickMenu';
import styles from './FileSystem.module.scss';

export const FileSystem: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { files, folders } = useAppSelector((state) => state.fileSystemReducer);

  const rightClickMouseCoordinates = useMouseCoordinates();
  const { mouseCoordinates } = rightClickMouseCoordinates;

  const {
    handleOpenContextMenu,
    handleCloseContextMenu,
  } = useFileSystemRigthClick(rightClickMouseCoordinates);

  return (
    <>
      <TableContainer className={styles.folderSystem_table}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell align="right">Fecha de creacion</TableCell>
              <TableCell align="right">Fecha de actualizacion</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className={styles.table__body}>
            {folders.map((folderDetail) => (
              <TableRow
                className={styles.folderSystem__row}
                key={folderDetail.id}
                onContextMenu={(event) =>
                  handleOpenContextMenu(event, folderDetail)
                }
              >
                <TableCell>
                  <Folder folderDetail={folderDetail} />
                </TableCell>

                <TableCell align="right">{folderDetail.createdAt}</TableCell>
                <TableCell align="right">{folderDetail.updatedAt}</TableCell>
              </TableRow>
            ))}

            {files.map((fileDetail) => (
              <TableRow
                key={fileDetail.id}
                onContextMenu={(event) =>
                  handleOpenContextMenu(event, fileDetail)
                }
                className={styles.folderSystem__row}
                onClick={() => {
                  dispatch(fileSystemActions.setCurrentFile(fileDetail));
                  router.push(
                    RecordRoute.GRADE(encodeURIComponent(fileDetail.id))
                  );
                }}
              >
                <TableCell>
                  <File fileDetail={fileDetail} />
                </TableCell>
                <TableCell align="right">{fileDetail.createdAt}</TableCell>
                <TableCell align="right">{fileDetail.updatedAt}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* rightClick */}

      <FileSystemRigthClickMenu
        mouseCoordinates={mouseCoordinates}
        handleCloseContextMenu={handleCloseContextMenu}
      />
    </>
  );
};
