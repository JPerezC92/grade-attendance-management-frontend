import { useRouter } from 'next/router';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { File } from './File';
import { Folder } from './Folder';
import { RecordRoute } from 'src/routes/record.routepath';
import styles from './FolderSystem.module.scss';

export const FolderSystem: React.FC = () => {
  const router = useRouter();
  return (
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
          {[
            'folder 1',
            'folder 2',
            'folder 3',
            'folder 4',
            'folder 5',
            'folder 6',
            'folder 7',
            'folder 8',
            'folder 9',
            'folder 10',
            'folder 11',
            'folder 12',
            'folder 13',
            'folder 14',
            'folder 15',
          ].map((name, i) => (
            <TableRow
              key={name + i}
              className={styles.folderSystem__row}
              onClick={() => {
                // eslint-disable-next-line no-console
                console.log('clic');
              }}
            >
              <TableCell>
                <Folder folder={{ name, id: i }} />
              </TableCell>

              <TableCell align="right">creacion</TableCell>
              <TableCell align="right">actualizacion</TableCell>
            </TableRow>
          ))}

          {[
            'file 1',
            'file 2',
            'file 3',
            'file 4',
            'file 5',
            'file 6',
            'file 7',
            'file 8',
            'file 9',
            'file 10',
            'file 11',
            'file 12',
            'file 13',
            'file 14',
            'file 15',
          ].map((name, i) => (
            <TableRow
              key={name + i}
              className={styles.folderSystem__row}
              onClick={() => router.push(RecordRoute.GRADE(i.toString()))}
            >
              <TableCell>
                <File file={{ name, id: i }} />
              </TableCell>
              <TableCell align="right">creacion</TableCell>
              <TableCell align="right">actualizacion</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
