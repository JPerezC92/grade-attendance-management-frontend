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

export const startLoadingCourseDetail = (
  courseId: number
): AppThunk<Promise<ServerErrorResponse | void>> => async (
  dispatch,
  getState
) => {
  const { user } = getState().authReducer;
  const response = await laravelCourseRepository.getById(
    parseInt(user.id, 10),
    courseId
  );

  if (isServerErrorResponse(response)) return response;

  dispatch(courseAction.setCurrentCourse(response.payload));
};

export const startCreateCourse = (
  courseName: string
): AppThunk<Promise<ServerErrorResponse | void>> => async (
  dispatch,
  getState
) => {
  dispatch(courseAction.startLoading());

  const { user } = getState().authReducer;
  const response = await laravelCourseRepository.create(
    parseInt(user.id, 10),
    courseName
  );

  dispatch(courseAction.finishLoading());

  if (isServerErrorResponse(response)) return response;

  dispatch(courseAction.addNewCourse(response.payload));
};
