import { Button } from '@material-ui/core';
import { useState } from 'react';
import { parseCSV } from 'src/helpers/parseCSV';

const Home: React.FC = () => {
  const [students, setStudents] = useState([] as any);

  return (
    <div>
      <input
        style={{ display: 'none' }}
        accept="application/*"
        id="contained-button-file"
        multiple
        type="file"
        onChange={async (e) => {
          const file = e.target.files[0];

          const res = await parseCSV(file);
          setStudents(() => res);
        }}
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload
        </Button>

        <br />
      </label>
    </div>
  );
};

export default Home;
