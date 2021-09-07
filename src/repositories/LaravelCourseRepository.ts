import { baseApiURL } from 'src/helpers/global';
import {
  Course,
  ServerErrorResponse,
  SuccessfulResponse,
} from 'src/interfaces';
import { CourseWithCourseRecords } from 'src/interfaces/CourseDetail';

interface CourseRepository {
  getAll(
    userId: number
  ): Promise<SuccessfulResponse<Course[]> | ServerErrorResponse>;
  getById(
    userId: number,
    courseId: number
  ): Promise<SuccessfulResponse<CourseWithCourseRecords> | ServerErrorResponse>;
  create(
    userId: number,
    courseName: string
  ): Promise<SuccessfulResponse<Course> | ServerErrorResponse>;
}

export class LaravelCourseRepository implements CourseRepository {
  async getAll(
    userId: number
  ): Promise<SuccessfulResponse<Course[]> | ServerErrorResponse> {
    try {
      const response = await fetch(`${baseApiURL}/${userId}/course`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return (await response.json()) as SuccessfulResponse<Course[]>;
    } catch (error) {
      return { success: false, message: 'Error al cargar los cursos' };
    }
  }

  async getById(
    userId: number,
    courseId: number
  ): Promise<
    ServerErrorResponse | SuccessfulResponse<CourseWithCourseRecords>
  > {
    try {
      const response = await fetch(
        `${baseApiURL}/${userId}/course/${courseId}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      return (await response.json()) as SuccessfulResponse<
        CourseWithCourseRecords
      >;
    } catch (error) {
      return { success: false, message: 'Error al cargar el curso' };
    }
  }

  async create(
    userId: number,
    courseName: string
  ): Promise<SuccessfulResponse<Course> | ServerErrorResponse> {
    try {
      const response = await fetch(`${baseApiURL}/${userId}/course`, {
        method: 'POST',
        body: JSON.stringify({ name: courseName }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return (await response.json()) as SuccessfulResponse<Course>;
    } catch (error) {
      return { success: false, message: 'Error al crear curso' };
    }
  }
}
