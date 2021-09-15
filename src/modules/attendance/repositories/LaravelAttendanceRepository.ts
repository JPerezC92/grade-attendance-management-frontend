import { baseApiURL } from 'src/helpers/global';
import { Attendance, CreateAttendance } from 'src/modules/attendance/types';
import { ServerErrorResponse, SuccessfulResponse } from 'src/shared/types';

interface AttendanceRepository {
  create(
    createAttendance: CreateAttendance
  ): Promise<SuccessfulResponse<Attendance> | ServerErrorResponse>;

  update(
    attendance: Attendance
  ): Promise<SuccessfulResponse<Attendance> | ServerErrorResponse>;

  delete(
    attendanceId: number
  ): Promise<SuccessfulResponse<string> | ServerErrorResponse>;
}

export class LaravelAttendanceRepository implements AttendanceRepository {
  async create(
    createAttendance: CreateAttendance
  ): Promise<ServerErrorResponse | SuccessfulResponse<Attendance>> {
    try {
      const response = await fetch(`${baseApiURL}/attendance`, {
        method: 'POST',
        body: JSON.stringify(createAttendance),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return (await response.json()) as SuccessfulResponse<Attendance>;
    } catch (error) {
      return { success: false, message: 'Error al crear fecha de asistencia' };
    }
  }
  async update(
    attendance: Attendance
  ): Promise<ServerErrorResponse | SuccessfulResponse<Attendance>> {
    try {
      const response = await fetch(
        `${baseApiURL}/attendance/${attendance.id}`,
        {
          method: 'PUT',
          body: JSON.stringify(attendance),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      return (await response.json()) as SuccessfulResponse<Attendance>;
    } catch (error) {
      return {
        success: false,
        message: 'Error al actualizar fecha de asistencia',
      };
    }
  }
  async delete(
    attendanceId: number
  ): Promise<ServerErrorResponse | SuccessfulResponse<string>> {
    try {
      const response = await fetch(`${baseApiURL}/attendance/${attendanceId}`, {
        method: 'DELETE',
        body: JSON.stringify({ attendanceId }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return (await response.json()) as SuccessfulResponse<string>;
    } catch (error) {
      return {
        success: false,
        message: 'Error al eliminar fecha de asistencia',
      };
    }
  }
}
