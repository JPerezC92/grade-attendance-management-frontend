import { Button, Typography } from '@material-ui/core';
import { parseCSV } from 'src/helpers/parseCSV';
import { useAppDispatch } from 'src/redux';
import { startCreateStudentFromCSV } from 'src/redux/reducers/Student/student.thunks';

export const CreateStudentFromCSVButton: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <div>
        <input
          style={{ display: 'none' }}
          accept="application/*"
          id="contained-button-file"
          multiple
          type="file"
          onChange={async (e) => {
            const file = e.target.files[0];

            dispatch(startCreateStudentFromCSV(file));

            const res = await parseCSV(file);
            // eslint-disable-next-line no-console
            console.log(res);
            // setStudents(() => res);
          }}
        />
        <label htmlFor="contained-button-file">
          <Button variant="contained" color="primary" component="span">
            <Typography variant="button" align="center">
              Cargar estudiantes
            </Typography>
          </Button>

          <br />
        </label>
      </div>
    </>
  );
};
