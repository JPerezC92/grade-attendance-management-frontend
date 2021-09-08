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

  update(
    period: Period
  ): Promise<SuccessfulResponse<Period> | ServerErrorResponse>;

  archive(
    period: Period
  ): Promise<SuccessfulResponse<Period> | ServerErrorResponse>;

  unarchive(
    period: Period
  ): Promise<SuccessfulResponse<Period> | ServerErrorResponse>;
}

export class LaravelPeriodRepository implements PeriodRepository {
  async unarchive(
    period: Period
  ): Promise<SuccessfulResponse<Period> | ServerErrorResponse> {
    try {
      const response = await fetch(`${baseApiURL}/period`, {
        method: 'PUT',
        body: JSON.stringify({ ...period, status: 'activo' }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return (await response.json()) as SuccessfulResponse<Period>;
    } catch (error) {
      return { success: false, message: 'Error al desarchivar el periodo' };
    }
  }

  async archive(
    period: Period
  ): Promise<SuccessfulResponse<Period> | ServerErrorResponse> {
    try {
      const response = await fetch(`${baseApiURL}/period`, {
        method: 'PUT',
        body: JSON.stringify({ ...period, status: 'inactivo' }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return (await response.json()) as SuccessfulResponse<Period>;
    } catch (error) {
      return { success: false, message: 'Error al archivar el periodo' };
    }
  }

  async update(
    period: Period
  ): Promise<SuccessfulResponse<Period> | ServerErrorResponse> {
    try {
      const response = await fetch(`${baseApiURL}/period`, {
        method: 'PUT',
        body: JSON.stringify(period),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return (await response.json()) as SuccessfulResponse<Period>;
    } catch (error) {
      return { success: false, message: 'Error al actualizar el periodo' };
    }
  }

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
