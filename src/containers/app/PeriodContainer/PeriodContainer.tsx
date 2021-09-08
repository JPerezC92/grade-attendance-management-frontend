import { useEffect } from 'react';
import {
  Backdrop,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import { CourseLayout, PeriodButtonCreate } from 'src/components/modules';
import { startLoadingPeriods, useAppDispatch, useAppSelector } from 'src/redux';
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

          <div>
            <PeriodButtonCreate />
          </div>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Nº</TableCell>
                  <TableCell>Periodo</TableCell>
                  <TableCell>Estado</TableCell>
                  <TableCell>Acciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {periodReducer.periods.length &&
                  periodReducer.periods.map((period, index) => (
                    <TableRow key={period.id}>
                      <TableCell>{++index}</TableCell>
                      <TableCell>{period.value}</TableCell>
                      <TableCell>{period.status}</TableCell>
                      <TableCell>botones</TableCell>
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
