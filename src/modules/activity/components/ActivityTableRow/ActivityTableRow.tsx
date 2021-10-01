import { useState } from 'react';
import {
  Box,
  Collapse,
  Fab,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import { HiChevronDoubleDown, HiChevronDoubleUp } from 'react-icons/hi';
import { VscAdd } from 'react-icons/vsc';

import { Activity } from '../../types';
import { useModal } from 'src/hooks';
import { AiOutlineDelete } from 'react-icons/ai';
import ScoreDialogDelete from '../ScoreDialogDelete';
import WithModal from 'src/shared/components/WithModal';
import ActivityButtonUpdate from '../ActivityButtonUpdate';
import ActivityButtonDelete from '../ActivityButtonDelete';
import { useAppDispatch } from 'src/redux';
import { startCreateScore } from 'src/modules/score/reducer';

interface ActivityTableRowProps {
  activity: Activity;
}

const ActivityTableRow: React.FC<ActivityTableRowProps> = ({ activity }) => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow key={activity.id}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <HiChevronDoubleUp /> : <HiChevronDoubleDown />}
          </IconButton>
        </TableCell>

        <TableCell>{activity.name}</TableCell>
        <TableCell align="center">{activity.scores.length}</TableCell>
        <TableCell>
          <div style={{ display: 'flex' }}>
            <ActivityButtonUpdate activity={activity} />
            <ActivityButtonDelete activity={activity} />
          </div>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={2}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h6" gutterBottom component="span">
                  {activity.name} - Calificaciones
                </Typography>

                <Fab
                  color="primary"
                  aria-label="add"
                  size="small"
                  variant="extended"
                  style={{ marginLeft: 'auto' }}
                  onClick={() => dispatch(startCreateScore(activity))}
                >
                  <VscAdd style={{ fontSize: '14px', fontWeight: 'bolder' }} />
                </Fab>
              </div>

              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Calificación</TableCell>
                    <TableCell>Acciones</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {activity.scores.map((score) => (
                    <TableRow key={score.id}>
                      <TableCell component="th" scope="row">
                        {score.name}
                      </TableCell>
                      <TableCell>
                        {(() => {
                          const modal = useModal();
                          return (
                            <WithModal
                              TriggerComponent={
                                <IconButton
                                  color="secondary"
                                  size="small"
                                  onClick={modal.handleOpenModal}
                                >
                                  <AiOutlineDelete />
                                </IconButton>
                              }
                              useModalResult={modal}
                              Modal={
                                <ScoreDialogDelete
                                  useModalResult={modal}
                                  activity={activity}
                                  score={score}
                                />
                              }
                            >
                              sa
                            </WithModal>
                          );
                        })()}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default ActivityTableRow;
