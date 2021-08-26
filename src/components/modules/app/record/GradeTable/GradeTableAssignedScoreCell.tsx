import { useState } from 'react';
import { TableCell, ClickAwayListener, TextField } from '@material-ui/core';

interface GradeTableAssignedScoreCellProps {
  studentId: number;
}

export const GradeTableAssignedScoreCell: React.FC<GradeTableAssignedScoreCellProps> = () => {
  const [click, setClick] = useState(false);
  const [value, setValue] = useState(0);

  const onClickAway = () => {
    setClick(() => !click);
  };

  return (
    <TableCell onClick={() => setClick(() => true)} align="right">
      {click ? (
        <ClickAwayListener onClickAway={onClickAway}>
          <TextField
            onChange={(e) => setValue(() => parseFloat(e.target.value))}
            autoFocus
            value={value}
            type="number"
            InputProps={{ inputProps: { min: 0 } }}
            style={{ width: 'fit-content', minWidth: '3.5em' }}
          />
        </ClickAwayListener>
      ) : (
        <>{value}</>
      )}
    </TableCell>
  );
};
