import { Button, Typography } from '@material-ui/core';
import { useAppDispatch } from 'src/redux';
import { startCreateStudentFromCSV } from 'src/modules/student/reducer';

const StudentButtonCreateFromCSV: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <span>
        <input
          style={{ display: 'none' }}
          accept="application/*"
          id="contained-button-file"
          multiple
          type="file"
          onChange={async (e) => {
            const file = e.target.files[0];
            const formData = new FormData();
            formData.append('studentsCsvFile', file);
            dispatch(startCreateStudentFromCSV(formData));
          }}
        />
        <label htmlFor="contained-button-file">
          <Button variant="contained" color="primary" component="span">
            <Typography variant="button" align="center">
              Cargar desde archivo
            </Typography>
          </Button>

          <br />
        </label>
      </span>
    </>
  );
};

export default StudentButtonCreateFromCSV;
