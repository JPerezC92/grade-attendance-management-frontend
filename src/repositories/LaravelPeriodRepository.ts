import { baseApiURL } from 'src/helpers/global';
import {
  CreatePeriod,
  Period,
  ServerErrorResponse,
  SuccessfulResponse,
} from 'src/interfaces';

interface PeriodRepository {
  getAll(
    userId: number
  ): Promise<SuccessfulResponse<Period[]> | ServerErrorResponse>;

  create(
    createPeriod: CreatePeriod
  ): Promise<SuccessfulResponse<Period> | ServerErrorResponse>;
}

export class LaravelPeriodRepository implements PeriodRepository {
  async create(
    createPeriod: CreatePeriod
  ): Promise<ServerErrorResponse | SuccessfulResponse<Period>> {
    try {
      const response = await fetch(`${baseApiURL}/period`, {
        method: 'POST',
        body: JSON.stringify(createPeriod),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return (await response.json()) as SuccessfulResponse<Period>;
    } catch (error) {
      return { success: false, message: 'Error al cargar los periodos' };
    }
  }

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
