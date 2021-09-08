import { baseApiURL } from 'src/helpers/global';
import {
  Activity,
  CourseRecord,
  CourseRecordRegister,
  ServerErrorResponse,
  SuccessfulResponse,
} from 'src/interfaces';
import { Student } from 'src/interfaces/Student';

interface CourseRecordWithStudentActivitiesAttendance extends CourseRecord {
  students: Student[];
  activities: Activity[];
  attendances: Activity[];
}

interface CourseRecordRepository {
  getById(
    courseRecordId: number
  ): Promise<
    | SuccessfulResponse<CourseRecordWithStudentActivitiesAttendance>
    | ServerErrorResponse
  >;

  create(
    courseRecord: CourseRecordRegister
  ): Promise<SuccessfulResponse<CourseRecord> | ServerErrorResponse>;
}

export class LaravelCourseRecordRepository implements CourseRecordRepository {
  async create(
    courseRecord: CourseRecordRegister
  ): Promise<SuccessfulResponse<CourseRecord> | ServerErrorResponse> {
    try {
      const response = await fetch(`${baseApiURL}/course-record`, {
        method: 'POST',
        body: JSON.stringify(courseRecord),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return (await response.json()) as SuccessfulResponse<CourseRecord>;
    } catch (error) {
      return {
        success: false,
        message: 'Error al crear nuevo registro',
      };
    }
  }
  async getById(
    courseRecordId: number
  ): Promise<
    | SuccessfulResponse<CourseRecordWithStudentActivitiesAttendance>
    | ServerErrorResponse
  > {
    try {
      const response = await fetch(
        `${baseApiURL}/course-record/${courseRecordId}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      return (await response.json()) as SuccessfulResponse<
        CourseRecordWithStudentActivitiesAttendance
      >;
    } catch (error) {
      return { success: false, message: 'Error al cargar el registro' };
    }
  }
}
