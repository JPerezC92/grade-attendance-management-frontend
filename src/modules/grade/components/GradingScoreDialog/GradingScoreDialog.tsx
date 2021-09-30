import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { useForm, UseModalResult } from 'src/hooks';
import { useAppDispatch, useAppSelector } from 'src/redux';
import { startUpdateScoresAssigned } from '../../reducer';

interface GradingScoreDialogProps {
  modal: UseModalResult;
}

const GradingScoreDialog: React.FC<GradingScoreDialogProps> = ({ modal }) => {
  const dispatch = useAppDispatch();
  const {
    gradeReducer: { currentlyGrading },
  } = useAppSelector((state) => state);

  if (!currentlyGrading.isLoaded) {
    return null;
  }

  const { activity, score, scoresAssigned } = currentlyGrading;

  const { formValues, handleInputChange } = useForm(
    Object.fromEntries(
      scoresAssigned.map((scoreAssigned) => [
        scoreAssigned.id,
        `${scoreAssigned.value}`,
      ])
    )
  );

  const { isOpen, handleCloseModal } = modal;

  return (
    <>
      <>
        <Dialog
          maxWidth="sm"
          open={isOpen}
          onClose={handleCloseModal}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title" disableTypography>
            <Typography component="h2" variant="h4">
              {activity.name} - {score.name}
            </Typography>
          </DialogTitle>

          <Divider />

          <form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(
                startUpdateScoresAssigned(
                  scoresAssigned.map((scoreAssigned) => ({
                    ...scoreAssigned,
                    value: parseFloat(formValues[`${scoreAssigned.id}`]),
                  }))
                )
              );

              handleCloseModal();
            }}
          >
            <DialogContent>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Nombre</TableCell>
                    <TableCell>Apellido</TableCell>

                    <TableCell>Calificacion</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {scoresAssigned.map((scoreAssigned) => (
                    <TableRow key={scoreAssigned.id}>
                      <TableCell style={{ whiteSpace: 'nowrap' }}>
                        {scoreAssigned.firstname}
                      </TableCell>
                      <TableCell style={{ whiteSpace: 'nowrap' }}>
                        {scoreAssigned.lastname}
                      </TableCell>
                      <TableCell>
                        <TextField
                          id={scoreAssigned.id.toString()}
                          name={scoreAssigned.id.toString()}
                          onChange={handleInputChange}
                          size="small"
                          type="number"
                          value={formValues[scoreAssigned.id]}
                          variant="outlined"
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseModal} color="secondary">
                Cancelar
              </Button>
              <Button color="primary" type="submit">
                Guardar
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </>
    </>
  );
};

export default GradingScoreDialog;
