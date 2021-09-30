import { baseApiURL } from 'src/helpers/global';
import { ServerErrorResponse, SuccessfulResponse } from 'src/shared/types';
import { ScoreAssigned } from '../types';

interface ScoreRepository {
  getById(
    scoreId: number
  ): Promise<SuccessfulResponse<ScoreAssigned[]> | ServerErrorResponse>;
}

export class LaravelScoreRepository implements ScoreRepository {
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
