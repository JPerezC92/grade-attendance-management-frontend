import { baseApiURL } from 'src/helpers/global';
import {
  CreateStudent,
  ServerErrorResponse,
  Student,
  SuccessfulResponse,
} from 'src/interfaces';

interface StudentRepository {
  create(
    registerStudent: CreateStudent
  ): Promise<SuccessfulResponse<Student> | ServerErrorResponse>;

  update(
    student: Student
  ): Promise<SuccessfulResponse<Student> | ServerErrorResponse>;

  delete(
    studentId: number
  ): Promise<SuccessfulResponse<string> | ServerErrorResponse>;
}

export class LaravelStudentRepository implements StudentRepository {
  async update(
    student: Student
  ): Promise<SuccessfulResponse<Student> | ServerErrorResponse> {
    try {
      const response = await fetch(`${baseApiURL}/student/${student.id}`, {
        method: 'PUT',
        body: JSON.stringify(student),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return (await response.json()) as SuccessfulResponse<Student>;
    } catch (error) {
      return { success: false, message: 'Error al registrar estudiante' };
    }
  }
  async delete(
    studentId: number
  ): Promise<ServerErrorResponse | SuccessfulResponse<string>> {
    try {
      const response = await fetch(`${baseApiURL}/student/${studentId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return (await response.json()) as SuccessfulResponse<string>;
    } catch (error) {
      return { success: false, message: 'Error al borrar estudiante' };
    }
  }
  async create(
    registerStudent: CreateStudent
  ): Promise<SuccessfulResponse<Student> | ServerErrorResponse> {
    try {
      const response = await fetch(`${baseApiURL}/student`, {
        method: 'POST',
        body: JSON.stringify(registerStudent),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return (await response.json()) as SuccessfulResponse<Student>;
    } catch (error) {
      return { success: false, message: 'Error al registrar estudiante' };
    }
  }
}
