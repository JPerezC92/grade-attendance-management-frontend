type Headers = [string, string, string];

interface Student {
  studentId: string;
  firstname: string;
  lastname: string;
}

interface CSV {
  headers: Headers;
  students: Student[];
}

export const parseCSV = async (file: File): Promise<CSV> => {
  let csvText = await file.text();

  csvText = csvText.replace(/(\r\n|\n|\r)/gm, ';'); // replacing line breaks with semicolon

  let csvArr = csvText.split(';'); // split each on semicolon

  const headers = csvArr.slice(0, 3) as Headers; // extract headers

  csvArr = csvArr.slice(3); // with only students
  let students: Student[] = [];

  for (let index = 0; index < csvArr.length; index++) {
    if (index * 3 > csvArr.length) {
      break;
    }
    const studentDetail = csvArr.slice(index * 3, index * 3 + 3);
    const [id, lastname, firstname] = studentDetail;
    if (id.length === 0 || firstname === undefined || lastname === undefined) {
      break;
    }

    students = [
      ...students,
      {
        studentId: id.trim(),
        firstname: firstname.trim(),
        lastname: lastname.trim(),
      },
    ];
  }
  return { headers, students };
};
