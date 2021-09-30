import { baseApiURL } from 'src/helpers/global';
import { ServerErrorResponse, SuccessfulResponse } from 'src/shared/types';
import { ScoreAssigned } from '../types';

interface ScoreAssignedRepository {
  updateMany(
    scoresAssigned: ScoreAssigned[]
  ): Promise<SuccessfulResponse<string> | ServerErrorResponse>;
}

export class LaravelScoreAssignedRepository implements ScoreAssignedRepository {
  async updateMany(
    scoresAssigned: ScoreAssigned[]
  ): Promise<SuccessfulResponse<string> | ServerErrorResponse> {
    try {
      const response = await fetch(`${baseApiURL}/scoresAssigned`, {
        method: 'PUT',
        body: JSON.stringify(scoresAssigned),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return (await response.json()) as SuccessfulResponse<string>;
    } catch (error) {
      return { success: false, message: 'Error al actualizar las notas' };
    }
  }
}
