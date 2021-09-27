import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import { MdArchive, MdUnarchive } from 'react-icons/md';

import { useAppDispatch, useAppSelector } from 'src/redux';
import {
  startArchivePeriod,
  startUnarchivePeriod,
} from 'src/modules/period/reducer';
import PeriodButtonCreate from '../PeriodButtonCreate';
import PeriodButtonUpdate from '../PeriodButtonUpdate';
import AppLayout from 'src/shared/components/AppLayout';
import styles from './PeriodContainer.module.scss';
import LoadPeriods from '../LoadPeriods';

export const PeriodContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const { periodReducer } = useAppSelector((state) => state);

  return (
    <>
      <AppLayout>
        <LoadPeriods>
          <div className={styles.periodContainer}>
            <Typography component="h2" variant="h4" align="left">
              Periodos
            </Typography>

            <div className={styles.periodContainer__buttons}>
              <PeriodButtonCreate />
            </div>

            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Nº</TableCell>
                    <TableCell>Periodo</TableCell>
                    <TableCell>Estado</TableCell>
                    <TableCell>Acciones</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {periodReducer.periods.length !== 0 &&
                    periodReducer.periods.map((period, index) => (
                      <TableRow key={period.id}>
                        <TableCell>{++index}</TableCell>
                        <TableCell>{period.value}</TableCell>
                        <TableCell>{period.status}</TableCell>
                        <TableCell>
                          <PeriodButtonUpdate period={period} />

                          <IconButton
                            color="primary"
                            onClick={() =>
                              dispatch(startUnarchivePeriod(period))
                            }
                          >
                            <MdUnarchive style={{ fontSize: '24px' }} />
                          </IconButton>

                          <IconButton
                            color="secondary"
                            onClick={() => dispatch(startArchivePeriod(period))}
                          >
                            <MdArchive style={{ fontSize: '24px' }} />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </LoadPeriods>
      </AppLayout>
    </>
  );
};

export default PeriodContainer;
