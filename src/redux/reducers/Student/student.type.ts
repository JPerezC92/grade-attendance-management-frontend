import { v4 as uuidv4 } from 'uuid';
import { Student } from 'src/interfaces';

export interface StudentState {
  students: Student[];
  currentStudent: Student | null;
}

export const studentInitialState: StudentState = {
  students: [
    {
      id: uuidv4(),
      studentId: '1248166',
      firstname: 'ANDERSON TOMAS',
      lastname: 'ADRIAN VIDAL',
    },
    {
      id: uuidv4(),
      studentId: '1248167',
      firstname: 'JHEANPIER MARUAN',
      lastname: 'AGUILAR AVILA',
    },
    {
      id: uuidv4(),
      studentId: '1248168',
      firstname: 'MARCO ANTONIO',
      lastname: 'ALVAN GIRALDO',
    },
    {
      id: uuidv4(),
      studentId: '1248169',
      firstname: 'JOSEPH HABACUC',
      lastname: 'ALVAREZ HUAMAN',
    },
    {
      id: uuidv4(),
      studentId: '1248170',
      firstname: 'CARLOS DEL PIERO',
      lastname: 'BANCES VASQUEZ',
    },
    {
      id: uuidv4(),
      studentId: '1248171',
      firstname: 'PAMELA NICOLE',
      lastname: 'BRONCANO OLORTEGUI',
    },
    {
      id: uuidv4(),
      studentId: '1248172',
      firstname: 'ARTHUR SMITH',
      lastname: 'CALDERON GUEVARA',
    },
    {
      id: uuidv4(),
      studentId: '1248173',
      firstname: 'MIRKO PAVEL',
      lastname: 'CAPURRO BUSTAMANTE',
    },
    {
      id: uuidv4(),
      studentId: '874254',
      firstname: 'OLGUI ALEXANDER',
      lastname: 'CERNA REGALADO',
    },
    {
      id: uuidv4(),
      studentId: '1248200',
      firstname: 'BRYAN MARTIN',
      lastname: 'DE LA VIA JULON',
    },
    {
      id: uuidv4(),
      studentId: '1248201',
      firstname: 'ANTHONY BRAYAN',
      lastname: 'ECHEVARRIA CONDOR',
    },
    {
      id: uuidv4(),
      studentId: '1248205',
      firstname: 'MARIA ISABEL',
      lastname: 'FERNANDEZ PAREDES',
    },
    {
      id: uuidv4(),
      studentId: '1248206',
      firstname: 'ANGEL ORLANDO',
      lastname: 'GONZALES ACEVEDO',
    },
    {
      id: uuidv4(),
      studentId: '1248210',
      firstname: 'LUIS RONALDO',
      lastname: 'LEON SALDAÑA',
    },
    {
      id: uuidv4(),
      studentId: '1248214',
      firstname: 'ROBERTO JUNIOR',
      lastname: 'MATTOS CENTURION',
    },
    {
      id: uuidv4(),
      studentId: '1248215',
      firstname: 'IRENE BRIGGITH',
      lastname: 'MAZA LAZARO',
    },
    {
      id: uuidv4(),
      studentId: '1248216',
      firstname: 'FLAVIO RODRIGO',
      lastname: 'MENDOZA MENESES',
    },
    {
      id: uuidv4(),
      studentId: '1248220',
      firstname: 'YARITZA MASIEL',
      lastname: 'MIRANDA SAAVEDRA',
    },
    {
      id: uuidv4(),
      studentId: '1248223',
      firstname: 'MARCIAL SANTOS',
      lastname: 'MONTES GIRALDO',
    },
    {
      id: uuidv4(),
      studentId: '1248225',
      firstname: 'JHARIXA IRAIDA',
      lastname: 'SOTO QUEZADA',
    },
    {
      id: uuidv4(),
      studentId: '1248229',
      firstname: 'MARK ANDERSON',
      lastname: 'VEGA PUMA',
    },
    {
      id: uuidv4(),
      studentId: '1248236',
      firstname: 'DANIEL ESTEBAN',
      lastname: 'VILLALTA BALCAZAR',
    },
  ],
  currentStudent: null,
};
