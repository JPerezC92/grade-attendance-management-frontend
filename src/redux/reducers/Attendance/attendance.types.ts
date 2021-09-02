import { Attendance, AttendanceStatus, CheckAttendance } from 'src/interfaces';

export interface AttendanceState {
  attendanceStatuses: AttendanceStatus[];
  attendances: Attendance[];
  currentCheckAttendances: CheckAttendance[] | null;
}

export const attendanceInitialState: AttendanceState = {
  attendances: [
    {
      id: 'f1698e01-8009-4ced-89c7-045acefdb1d0',
      gradeId: 'fe9fc2a0-e837-4dc1-8e51-ec63c51969a9',
      date: '2021-08-27',
      checkAttendances: [
        {
          attendanceId: 'f1698e01-8009-4ced-89c7-045acefdb1d0',
          id: 'ec20baa2-6c3e-4a35-a521-534e0842b6c8',
          statusId: 'ecfa4723-d660-461b-b233-4c2a78b39fcb',
          statusValue: 'asistencia',
          studentId: '55d6b49d-6a46-4ece-84e4-d975287e243c',
        },
      ],
    },
    {
      id: 'b6ddcaa9-59a5-45fd-93f0-9c8f37f5a908',
      gradeId: 'fe9fc2a0-e837-4dc1-8e51-ec63c51969a9',
      date: '2021-08-28',
      checkAttendances: [
        {
          attendanceId: 'b6ddcaa9-59a5-45fd-93f0-9c8f37f5a908',
          id: '60c97806-d8a1-4e58-b64d-da4c0a09a5b3',
          statusId: 'ecfa4723-d660-461b-b233-4c2a78b39fcb',
          statusValue: 'asistencia',
          studentId: '55d6b49d-6a46-4ece-84e4-d975287e243c',
        },
      ],
    },
    {
      id: '35d85a29-47e8-42d3-8396-d9a4825b5f11',
      gradeId: 'fe9fc2a0-e837-4dc1-8e51-ec63c51969a9',
      date: '2021-08-29',
      checkAttendances: [
        {
          attendanceId: '35d85a29-47e8-42d3-8396-d9a4825b5f11',
          id: '98d9deb6-ff2d-4b80-a7ac-de8bfa5f1d97',
          statusId: 'ecfa4723-d660-461b-b233-4c2a78b39fcb',
          statusValue: 'asistencia',
          studentId: '55d6b49d-6a46-4ece-84e4-d975287e243c',
        },
      ],
    },
    {
      id: 'dedba10a-6178-472c-bc14-d89630d455d6',
      gradeId: 'fe9fc2a0-e837-4dc1-8e51-ec63c51969a9',
      date: '2021-08-30',
      checkAttendances: [
        {
          attendanceId: 'dedba10a-6178-472c-bc14-d89630d455d6',
          id: 'd9b54c27-8541-439b-a03c-5152213d9117',
          statusId: 'ecfa4723-d660-461b-b233-4c2a78b39fcb',
          statusValue: 'asistencia',
          studentId: '55d6b49d-6a46-4ece-84e4-d975287e243c',
        },
      ],
    },
    {
      id: 'b3d43ff6-b534-45f8-ba5e-a06c65f5c203',
      gradeId: 'fe9fc2a0-e837-4dc1-8e51-ec63c51969a9',
      date: '2021-08-31',
      checkAttendances: [
        {
          attendanceId: 'b3d43ff6-b534-45f8-ba5e-a06c65f5c203',
          id: '4d968ae9-018c-4cfb-8f58-128ab7811bf0',
          statusId: '6c05dd0c-1c3b-44b9-a18a-0501284e235c',
          statusValue: 'inasistencia',
          studentId: '55d6b49d-6a46-4ece-84e4-d975287e243c',
        },
      ],
    },
  ],
  attendanceStatuses: [
    { id: 'ecfa4723-d660-461b-b233-4c2a78b39fcb', value: 'asistencia' },
    { id: '07f1f058-edbe-4619-a5b7-9e534f82e207', value: 'tardanza' },
    {
      id: '6c05dd0c-1c3b-44b9-a18a-0501284e235c',
      value: 'inasistencia',
    },
  ],
  currentCheckAttendances: null,
};
