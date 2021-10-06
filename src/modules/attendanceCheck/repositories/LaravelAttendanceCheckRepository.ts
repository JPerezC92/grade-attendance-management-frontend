import Cookies from 'js-cookie';
import { baseApiURL } from 'src/helpers/global';
import {
  AttendanceCheck,
  AttendanceStatus,
} from 'src/modules/attendance/types';
import { ServerErrorResponse, SuccessfulResponse } from 'src/shared/types';
import { AttendanceCheckWithStudentName } from '../types';

interface GetByAttendanceIdResponse {
  attendancesCheck: AttendanceCheckWithStudentName[];
  attendanceStates: AttendanceStatus[];
}

interface AttendanceCheckRepository {
  updateMany(
    attendanceCheck: AttendanceCheck[]
  ): Promise<SuccessfulResponse<string> | ServerErrorResponse>;

  getByAttendanceId(
    attendanceId: number
  ): Promise<
    SuccessfulResponse<GetByAttendanceIdResponse> | ServerErrorResponse
  >;
}

export class LaravelAttendanceCheckRepository
  implements AttendanceCheckRepository {
  async updateMany(
    attendancesCheck: AttendanceCheck[]
  ): Promise<ServerErrorResponse | SuccessfulResponse<string>> {
    try {
      const token = Cookies.get('token');
      const response = await fetch(`${baseApiURL}/attendance-check`, {
        method: 'PUT',
        body: JSON.stringify(attendancesCheck),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      return (await response.json()) as SuccessfulResponse<string>;
    } catch (error) {
      return {
        success: false,
        message: 'Error al actualizar las asistencias asignadas',
      };
    }
  }

  async getByAttendanceId(
    attendanceId: number
  ): Promise<
    SuccessfulResponse<GetByAttendanceIdResponse> | ServerErrorResponse
  > {
    try {
      const token = Cookies.get('token');
      const response = await fetch(`${baseApiURL}/attendance/${attendanceId}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      return (await response.json()) as SuccessfulResponse<
        GetByAttendanceIdResponse
      >;
    } catch (error) {
      return {
        success: false,
        message: 'Error al cargar las asistencias asignadas',
      };
    }
  }
}
