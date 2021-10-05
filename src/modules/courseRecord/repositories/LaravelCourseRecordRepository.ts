import { baseApiURL } from 'src/helpers/global';

import { Activity } from 'src/modules/activity/types';
import { Attendance } from 'src/modules/attendance/types';
import {
  CourseRecord,
  CourseRecordRegister,
} from 'src/modules/courseRecord/types';
// import { ScoreCalculation } from 'src/modules/grade/types';
import { Student } from 'src/modules/student/types';
import { ServerErrorResponse, SuccessfulResponse } from 'src/shared/types';

interface CourseRecordInfo {
  courseRecord: CourseRecord;
  students: Student[];
  activities: Activity[];
  attendances: Attendance[];
}

interface CourseRecordRepository {
  getById(
    courseRecordId: number
  ): Promise<SuccessfulResponse<CourseRecordInfo> | ServerErrorResponse>;

  create(
    courseRecord: CourseRecordRegister
  ): Promise<SuccessfulResponse<CourseRecord> | ServerErrorResponse>;

  update(
    courseRecord: CourseRecord
  ): Promise<SuccessfulResponse<CourseRecord> | ServerErrorResponse>;

  delete(
    courseRecordId: number
  ): Promise<SuccessfulResponse<string> | ServerErrorResponse>;
}

export class LaravelCourseRecordRepository implements CourseRecordRepository {
  async delete(
    courseRecordId: number
  ): Promise<SuccessfulResponse<string> | ServerErrorResponse> {
    try {
      const response = await fetch(
        `${baseApiURL}/course-record/${courseRecordId}`,
        {
          method: 'DELETE',

          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      return (await response.json()) as SuccessfulResponse<string>;
    } catch (error) {
      return {
        success: false,
        message: 'Error al crear nuevo registro',
      };
    }
  }

  async update(
    courseRecord: CourseRecord
  ): Promise<SuccessfulResponse<CourseRecord> | ServerErrorResponse> {
    try {
      const response = await fetch(
        `${baseApiURL}/course-record/${courseRecord.id}`,
        {
          method: 'PUT',
          body: JSON.stringify(courseRecord),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      return (await response.json()) as SuccessfulResponse<CourseRecord>;
    } catch (error) {
      return {
        success: false,
        message: 'Error al editar el registro',
      };
    }
  }

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
  ): Promise<SuccessfulResponse<CourseRecordInfo> | ServerErrorResponse> {
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

      return (await response.json()) as SuccessfulResponse<CourseRecordInfo>;
    } catch (error) {
      return { success: false, message: 'Error al cargar el registro' };
    }
  }
}
