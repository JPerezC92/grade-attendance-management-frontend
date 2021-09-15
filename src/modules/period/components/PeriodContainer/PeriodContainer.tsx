import { useEffect } from 'react';
import {
  Backdrop,
  CircularProgress,
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
  startLoadingPeriods,
  startUnarchivePeriod,
} from 'src/modules/period/reducer';
import PeriodButtonCreate from '../PeriodButtonCreate';
import PeriodButtonUpdate from '../PeriodButtonUpdate';
import CourseLayout from 'src/shared/components/CourseLayout';
import styles from './PeriodContainer.module.scss';

export const PeriodContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const { periodReducer } = useAppSelector((state) => state);

  useEffect(() => {
    if (!periodReducer.periods.length) dispatch(startLoadingPeriods());
  }, []);

  return (
    <>
      <CourseLayout>
        {periodReducer.isLoading && (
          <Backdrop
            open={periodReducer.isLoading}
            style={{ zIndex: 1, color: '#fff' }}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        )}

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
                          onClick={() => dispatch(startUnarchivePeriod(period))}
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
      </CourseLayout>
    </>
  );
};

export default PeriodContainer;
