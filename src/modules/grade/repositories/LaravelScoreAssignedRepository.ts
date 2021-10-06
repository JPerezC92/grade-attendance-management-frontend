import Cookies from 'js-cookie';
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
      const token = Cookies.get('token');
      const response = await fetch(`${baseApiURL}/scores-assigned`, {
        method: 'PUT',
        body: JSON.stringify(scoresAssigned),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      return (await response.json()) as SuccessfulResponse<string>;
    } catch (error) {
      return { success: false, message: 'Error al actualizar las notas' };
    }
  }
}
