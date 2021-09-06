import { baseApiURL } from 'src/helpers/global';
import {
  Course,
  ServerErrorResponse,
  SuccessfulResponse,
} from 'src/interfaces';

interface CourseRepository {
  getAll(
    userId: number
  ): Promise<SuccessfulResponse<Course[]> | ServerErrorResponse>;
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
}
