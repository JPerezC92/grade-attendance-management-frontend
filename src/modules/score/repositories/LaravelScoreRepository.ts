import { baseApiURL } from 'src/helpers/global';
import { ServerErrorResponse, SuccessfulResponse } from 'src/shared/types';
import { ScoreAssigned } from '../../grade/types';

interface ScoreRepository {
  create(
    activityId: number
  ): Promise<SuccessfulResponse<string> | ServerErrorResponse>;
  getById(
    scoreId: number
  ): Promise<SuccessfulResponse<ScoreAssigned[]> | ServerErrorResponse>;

  delete(
    scoreId: number
  ): Promise<SuccessfulResponse<string> | ServerErrorResponse>;
}

export class LaravelScoreRepository implements ScoreRepository {
  async create(
    activityId: number
  ): Promise<SuccessfulResponse<string> | ServerErrorResponse> {
    try {
      const response = await fetch(`${baseApiURL}/scores`, {
        method: 'POST',
        body: JSON.stringify({ activityId }),
        headers: {
          'Content-Type': 'application/json',
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
      const response = await fetch(`${baseApiURL}/scores/${scoreId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
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
    scoreId: number
  ): Promise<SuccessfulResponse<ScoreAssigned[]> | ServerErrorResponse> {
    try {
      const response = await fetch(`${baseApiURL}/scores/${scoreId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return (await response.json()) as SuccessfulResponse<ScoreAssigned[]>;
    } catch (error) {
      return { success: false, message: 'Error al cargar el curso' };
    }
  }
}
