import { baseApiURL } from 'src/helpers/global';
import {
  Period,
  ServerErrorResponse,
  SuccessfulResponse,
} from 'src/interfaces';

interface PeriodRepository {
  getAll(
    userId: number
  ): Promise<SuccessfulResponse<Period[]> | ServerErrorResponse>;
}

export class LaravelPeriodRepository implements PeriodRepository {
  async getAll(
    userId: number
  ): Promise<SuccessfulResponse<Period[]> | ServerErrorResponse> {
    const url = new URL(`${baseApiURL}/period`);
    url.searchParams.append('instructorId', userId.toString());

    try {
      const response = await fetch(`${url}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return (await response.json()) as SuccessfulResponse<Period[]>;
    } catch (error) {
      return { success: false, message: 'Error al cargar los periodos' };
    }
  }
}
