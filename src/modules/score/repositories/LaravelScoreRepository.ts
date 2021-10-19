import Cookies from 'js-cookie';
import { baseApiURL } from 'src/helpers/global';
import { ServerErrorResponse, SuccessfulResponse } from 'src/shared/types';
import { ScoreAssignedWithStudentName } from 'src/modules/grade/types';

interface ScoreRepository {
  create(
    activityId: number
  ): Promise<SuccessfulResponse<string> | ServerErrorResponse>;
  getById(
    scoreId: number,
    courseRecordId: number
  ): Promise<
    SuccessfulResponse<ScoreAssignedWithStudentName[]> | ServerErrorResponse
  >;

  delete(
    scoreId: number
  ): Promise<SuccessfulResponse<string> | ServerErrorResponse>;
}

export class LaravelScoreRepository implements ScoreRepository {
  async create(
    activityId: number
  ): Promise<SuccessfulResponse<string> | ServerErrorResponse> {
    try {
      const token = Cookies.get('token');
      const response = await fetch(`${baseApiURL}/scores`, {
        method: 'POST',
        body: JSON.stringify({ activityId }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      return (await response.json()) as SuccessfulResponse<string>;
    } catch (error) {
      return {
        success: false,
        message: 'Ocurrio un error al intentar eliminar la calificación',
      };
    }
  }
  async delete(
    scoreId: number
  ): Promise<SuccessfulResponse<string> | ServerErrorResponse> {
    try {
      const token = Cookies.get('token');
      const response = await fetch(`${baseApiURL}/scores/${scoreId}`, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      return (await response.json()) as SuccessfulResponse<string>;
    } catch (error) {
      return {
        success: false,
        message: 'Ocurrio un error al intentar eliminar la calificación',
      };
    }
  }

  async getById(
    scoreId: number,
    courseRecordId: number
  ): Promise<
    SuccessfulResponse<ScoreAssignedWithStudentName[]> | ServerErrorResponse
  > {
    try {
      const token = Cookies.get('token');
      const response = await fetch(
        `${baseApiURL}/scores/${scoreId}/${courseRecordId}`,
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return (await response.json()) as SuccessfulResponse<
        ScoreAssignedWithStudentName[]
      >;
    } catch (error) {
      return { success: false, message: 'Error al cargar el curso' };
    }
  }
}
