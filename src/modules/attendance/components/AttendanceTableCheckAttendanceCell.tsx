import { FormControl, MenuItem, Select, TableCell } from '@material-ui/core';
import { useEffect, useState } from 'react';

export const AttendanceTableCheckAttendanceCell: React.FC = () => {
  const [value, setValue] = useState(1);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(value);
  }, [value]);

  return (
    <TableCell align="right">
      <FormControl>
        <Select
          autoFocus
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={value}
          onChange={(e) => {
            setValue(e.target.value as number);
          }}
        >
          <MenuItem value={0}>
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>A</MenuItem>
          <MenuItem value={2}>T</MenuItem>
          <MenuItem value={3}>I</MenuItem>
          <MenuItem value={4}>J</MenuItem>
        </Select>
      </FormControl>
    </TableCell>
  );
};
