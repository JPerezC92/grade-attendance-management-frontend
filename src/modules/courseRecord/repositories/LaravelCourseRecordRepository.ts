import { baseApiURL } from 'src/helpers/global';

import { Activity } from 'src/modules/activity/types';
import { Attendance } from 'src/modules/attendance/types';
import {
  CourseRecord,
  CourseRecordRegister,
} from 'src/modules/courseRecord/types';
import { ScoreCalculation } from 'src/modules/grade/types';
import { Student } from 'src/modules/student/types';
import { ServerErrorResponse, SuccessfulResponse } from 'src/shared/types';

interface CourseRecordInfo extends CourseRecord {
  students: Student[];
  activities: Activity[];
  scoresCalculation: ScoreCalculation[];
  attendances: Attendance[];
}

interface CourseRecordRepository {
  getById(
    courseRecordId: number
  ): Promise<SuccessfulResponse<CourseRecordInfo> | ServerErrorResponse>;

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
