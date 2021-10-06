import Cookies from 'js-cookie';
import { baseApiURL } from 'src/helpers/global';
import { CreatePeriod, Period } from 'src/modules/period/types';
import { ServerErrorResponse, SuccessfulResponse } from 'src/shared/types';

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
      const token = Cookies.get('token');
      const response = await fetch(`${baseApiURL}/period`, {
        method: 'PUT',
        body: JSON.stringify({ ...period, status: 'activo' }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
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
      const token = Cookies.get('token');
      const response = await fetch(`${baseApiURL}/period`, {
        method: 'PUT',
        body: JSON.stringify({ ...period, status: 'inactivo' }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
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
      const token = Cookies.get('token');
      const response = await fetch(`${baseApiURL}/period`, {
        method: 'PUT',
        body: JSON.stringify(period),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
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
      const token = Cookies.get('token');
      const response = await fetch(`${baseApiURL}/period`, {
        method: 'POST',
        body: JSON.stringify(createPeriod),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
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
      const token = Cookies.get('token');
      const response = await fetch(`${url}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      return (await response.json()) as SuccessfulResponse<Period[]>;
    } catch (error) {
      return { success: false, message: 'Error al cargar los periodos' };
    }
  }
}
