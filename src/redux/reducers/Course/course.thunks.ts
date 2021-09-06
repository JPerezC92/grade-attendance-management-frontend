import { isServerErrorResponse } from 'src/helpers/assertions';
import { ServerErrorResponse } from 'src/interfaces';
import { AppThunk, courseAction } from 'src/redux';
import { LaravelCourseRepository } from 'src/repositories/LaravelCourseRepository';

const laravelCourseRepository = new LaravelCourseRepository();

export const startLoadingCourses = (): AppThunk<
  Promise<ServerErrorResponse | void>
> => async (dispatch, getState) => {
  dispatch(courseAction.startLoading());

  const { user } = getState().authReducer;
  const response = await laravelCourseRepository.getAll(parseInt(user.id, 10));

  dispatch(courseAction.finishLoading());

  if (isServerErrorResponse(response)) return response;

  dispatch(courseAction.setCourses(response.payload));
};
