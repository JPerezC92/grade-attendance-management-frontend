import { isServerErrorResponse } from 'src/helpers/assertions';
import { AppThunk } from 'src/redux';
import { ServerErrorResponse } from 'src/shared/types';
import { courseAction } from './course.slice';
import { LaravelCourseRepository } from '../repositories';
import { Course } from '../types';

const laravelCourseRepository = new LaravelCourseRepository();

export const startLoadingCourses = (): AppThunk<
  Promise<ServerErrorResponse | void>
> => async (dispatch, _) => {
  dispatch(courseAction.startLoading());

  const response = await laravelCourseRepository.getAll();

  dispatch(courseAction.finishLoading());

  if (isServerErrorResponse(response)) return response;

  dispatch(courseAction.setCourses(response.payload));
};

export const startLoadingCourseContent = (
  courseId: number
): AppThunk<Promise<ServerErrorResponse | void>> => async (dispatch, _) => {
  const response = await laravelCourseRepository.getById(courseId);

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
  const response = await laravelCourseRepository.create(user.id, courseName);

  dispatch(courseAction.finishLoading());

  if (isServerErrorResponse(response)) return response;

  dispatch(courseAction.addNewCourse(response.payload));
};

export const startUpdateCourse = (
  course: Course
): AppThunk<Promise<ServerErrorResponse | void>> => async (dispatch, _) => {
  dispatch(courseAction.startLoading());

  const response = await laravelCourseRepository.update(course);

  dispatch(courseAction.finishLoading());

  if (isServerErrorResponse(response)) return response;

  dispatch(courseAction.updateCourse(response.payload));
};

export const startDeleteCourse = (
  course: Course
): AppThunk<Promise<ServerErrorResponse | void>> => async (dispatch, _) => {
  dispatch(courseAction.startLoading());

  const response = await laravelCourseRepository.delete(course.id);

  dispatch(courseAction.finishLoading());

  if (isServerErrorResponse(response)) return response;

  dispatch(courseAction.deleteCourse(course));
};
