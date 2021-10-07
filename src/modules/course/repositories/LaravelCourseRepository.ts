import Cookies from 'js-cookie';
import { baseApiURL } from 'src/helpers/global';
import { Course, CourseWithCourseRecords } from 'src/modules/course/types';
import { ServerErrorResponse, SuccessfulResponse } from 'src/shared/types';

interface CourseRepository {
  getAll(): Promise<SuccessfulResponse<Course[]> | ServerErrorResponse>;
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

  delete(
    courseId: number
  ): Promise<SuccessfulResponse<string> | ServerErrorResponse>;
}

export class LaravelCourseRepository implements CourseRepository {
  async delete(
    courseId: number
  ): Promise<ServerErrorResponse | SuccessfulResponse<string>> {
    try {
      const token = Cookies.get('token');
      const response = await fetch(`${baseApiURL}/course/${courseId}`, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      return (await response.json()) as SuccessfulResponse<string>;
    } catch (error) {
      return { success: false, message: 'Error al actualizar el curso' };
    }
  }

  async update(
    course: Course
  ): Promise<ServerErrorResponse | SuccessfulResponse<Course>> {
    try {
      const token = Cookies.get('token');
      const response = await fetch(`${baseApiURL}/course/${course.id}`, {
        method: 'PUT',
        body: JSON.stringify(course),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      return (await response.json()) as SuccessfulResponse<Course>;
    } catch (error) {
      return { success: false, message: 'Error al actualizar el curso' };
    }
  }

  async getAll(): Promise<SuccessfulResponse<Course[]> | ServerErrorResponse> {
    const token = Cookies.get('token');
    const url = new URL(`${baseApiURL}/course`);

    try {
      const response = await fetch(`${url}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
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
      const token = Cookies.get('token');
      const response = await fetch(`${baseApiURL}/course/${courseId}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
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
      const token = Cookies.get('token');
      const response = await fetch(`${baseApiURL}/course`, {
        method: 'POST',
        body: JSON.stringify({ name: courseName, instructorId: userId }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      return (await response.json()) as SuccessfulResponse<Course>;
    } catch (error) {
      return { success: false, message: 'Error al crear curso' };
    }
  }
}
