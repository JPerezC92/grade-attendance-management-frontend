import { baseApiURL } from 'src/helpers/global';
import { Course, CourseWithCourseRecords } from 'src/modules/course/types';
import { ServerErrorResponse, SuccessfulResponse } from 'src/shared/types';

interface CourseRepository {
  getAll(
    userId: number
  ): Promise<SuccessfulResponse<Course[]> | ServerErrorResponse>;
  getById(
    courseId: number
  ): Promise<SuccessfulResponse<CourseWithCourseRecords> | ServerErrorResponse>;
  create(
    userId: number,
    courseName: string
  ): Promise<SuccessfulResponse<Course> | ServerErrorResponse>;

  update(
    course: Course
  ): Promise<SuccessfulResponse<Course> | ServerErrorResponse>;
}

export class LaravelCourseRepository implements CourseRepository {
  async update(
    course: Course
  ): Promise<ServerErrorResponse | SuccessfulResponse<Course>> {
    try {
      const response = await fetch(`${baseApiURL}/course/${course.id}`, {
        method: 'PUT',
        body: JSON.stringify(course),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return (await response.json()) as SuccessfulResponse<Course>;
    } catch (error) {
      return { success: false, message: 'Error al actualizar el curso' };
    }
  }

  async getAll(
    userId: number
  ): Promise<SuccessfulResponse<Course[]> | ServerErrorResponse> {
    const url = new URL(`${baseApiURL}/course`);
    url.searchParams.append('instructorId', userId.toString());

    try {
      const response = await fetch(`${url}`, {
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
    courseId: number
  ): Promise<
    ServerErrorResponse | SuccessfulResponse<CourseWithCourseRecords>
  > {
    try {
      const response = await fetch(`${baseApiURL}/course/${courseId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

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
      const response = await fetch(`${baseApiURL}/course`, {
        method: 'POST',
        body: JSON.stringify({ name: courseName, instructorId: userId }),
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
