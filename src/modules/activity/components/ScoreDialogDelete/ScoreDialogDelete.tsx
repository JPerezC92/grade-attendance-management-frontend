import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Divider,
  Typography,
} from '@material-ui/core';
import { UseModalResult } from 'src/hooks';
import { useAppDispatch } from 'src/redux';
import { Activity } from '../../types';
import { Score } from 'src/modules/grade/types';
import { startDeleteScore } from 'src/modules/score/reducer';

interface ScoreDialogDeleteProps {
  useModalResult: UseModalResult;
  activity: Activity;
  score: Score;
}

const ScoreDialogDelete: React.FC<ScoreDialogDeleteProps> = ({
  activity,
  score,
  useModalResult,
}) => {
  const dispatch = useAppDispatch();
  const { isOpen, handleCloseModal } = useModalResult;

  return (
    <>
      <Dialog
        maxWidth="xs"
        open={isOpen}
        onClose={handleCloseModal}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title" disableTypography>
          <Typography variant="h6" color="error">
            ¿Estas seguro que deseas borrar la calificación &quot;
            {activity.name} - {score.name}
            &quot;?
          </Typography>
        </DialogTitle>

        <Divider />

        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(startDeleteScore(score));
            handleCloseModal();
          }}
        >
          <DialogActions
            style={{ marginBlock: '1em', justifyContent: 'center' }}
          >
            <Button
              onClick={handleCloseModal}
              variant="outlined"
              color="secondary"
            >
              Cancelar
            </Button>
            <Button variant="contained" color="primary" type="submit">
              Aceptar
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default ScoreDialogDelete;
