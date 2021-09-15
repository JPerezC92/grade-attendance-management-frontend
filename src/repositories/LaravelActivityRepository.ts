import { baseApiURL } from 'src/helpers/global';
import {
  Activity,
  CreateActivity,
  ServerErrorResponse,
  SuccessfulResponse,
} from 'src/interfaces';

interface ActivityRepository {
  create(
    createActivity: CreateActivity
  ): Promise<SuccessfulResponse<Activity> | ServerErrorResponse>;
  update(
    activity: Activity
  ): Promise<SuccessfulResponse<Activity> | ServerErrorResponse>;

  delete(
    activityId: number
  ): Promise<SuccessfulResponse<string> | ServerErrorResponse>;
}

export class LaravelActivityRepository implements ActivityRepository {
  async create(
    createActivity: CreateActivity
  ): Promise<SuccessfulResponse<Activity> | ServerErrorResponse> {
    try {
      const response = await fetch(`${baseApiURL}/activity`, {
        method: 'POST',
        body: JSON.stringify(createActivity),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return (await response.json()) as SuccessfulResponse<Activity>;
    } catch (error) {
      return {
        success: false,
        message: 'Error alcrear actividad',
      };
    }
  }
  async update(
    activity: Activity
  ): Promise<SuccessfulResponse<Activity> | ServerErrorResponse> {
    try {
      const response = await fetch(`${baseApiURL}/activity/${activity.id}`, {
        method: 'PUT',
        body: JSON.stringify(activity),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return (await response.json()) as SuccessfulResponse<Activity>;
    } catch (error) {
      return {
        success: false,
        message: 'Error al actualizar actividad',
      };
    }
  }
  async delete(
    activityId: number
  ): Promise<ServerErrorResponse | SuccessfulResponse<string>> {
    try {
      const response = await fetch(`${baseApiURL}/activity/${activityId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return (await response.json()) as SuccessfulResponse<string>;
    } catch (error) {
      return {
        success: false,
        message: 'Error al eliminar actividad',
      };
    }
  }
}
