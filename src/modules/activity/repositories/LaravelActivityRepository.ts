import Cookies from 'js-cookie';
import { baseApiURL } from 'src/helpers/global';
import { Activity, CreateActivity } from 'src/modules/activity/types';
import { ServerErrorResponse, SuccessfulResponse } from 'src/shared/types';

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
      const token = Cookies.get('token');
      const response = await fetch(`${baseApiURL}/activity`, {
        method: 'POST',
        body: JSON.stringify(createActivity),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
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
      const token = Cookies.get('token');
      const response = await fetch(`${baseApiURL}/activity/${activity.id}`, {
        method: 'PUT',
        body: JSON.stringify(activity),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
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
      const token = Cookies.get('token');
      const response = await fetch(`${baseApiURL}/activity/${activityId}`, {
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
        message: 'Error al eliminar actividad',
      };
    }
  }
}
