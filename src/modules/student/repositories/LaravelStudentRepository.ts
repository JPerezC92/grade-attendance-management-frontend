import Cookies from 'js-cookie';
import { baseApiURL } from 'src/helpers/global';
import { CreateStudent, Student } from 'src/modules/student/types';
import { ServerErrorResponse, SuccessfulResponse } from 'src/shared/types';

interface StudentRepository {
  create(
    registerStudent: CreateStudent
  ): Promise<SuccessfulResponse<Student> | ServerErrorResponse>;

  createFromCSV(
    formData: FormData,
    courseRecordId: number
  ): Promise<SuccessfulResponse<string> | ServerErrorResponse>;

  update(
    student: Student
  ): Promise<SuccessfulResponse<Student> | ServerErrorResponse>;

  delete(
    studentId: number
  ): Promise<SuccessfulResponse<string> | ServerErrorResponse>;
}

export class LaravelStudentRepository implements StudentRepository {
  async createFromCSV(
    formData: FormData,
    courseRecordId: number
  ): Promise<SuccessfulResponse<string> | ServerErrorResponse> {
    try {
      const token = Cookies.get('token');
      const response = await fetch(
        `${baseApiURL}/student/csv-file?courseRecordId=${courseRecordId}`,
        {
          method: 'POST',
          body: formData,
          redirect: 'follow',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return (await response.json()) as SuccessfulResponse<string>;
    } catch (error) {
      return {
        success: false,
        message: 'Error al registrar estudiantes desde archivo',
      };
    }
  }

  async update(
    student: Student
  ): Promise<SuccessfulResponse<Student> | ServerErrorResponse> {
    try {
      const token = Cookies.get('token');
      const response = await fetch(`${baseApiURL}/student/${student.id}`, {
        method: 'PUT',
        body: JSON.stringify(student),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
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
      const token = Cookies.get('token');
      const response = await fetch(`${baseApiURL}/student/${studentId}`, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
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
      const token = Cookies.get('token');
      const response = await fetch(`${baseApiURL}/student`, {
        method: 'POST',
        body: JSON.stringify(registerStudent),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      return (await response.json()) as SuccessfulResponse<Student>;
    } catch (error) {
      return { success: false, message: 'Error al registrar estudiante' };
    }
  }
}
