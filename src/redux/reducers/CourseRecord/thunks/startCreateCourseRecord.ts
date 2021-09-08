import { AppThunk } from 'src/redux/store/store';
import { CourseRecordRegister, ServerErrorResponse } from 'src/interfaces';
import { isServerErrorResponse } from 'src/helpers/assertions';
import { LaravelCourseRecordRepository } from 'src/repositories/LaravelCourseRecordRepository';
import { courseAction } from 'src/redux';

const laravelCourseRecordRepository = new LaravelCourseRecordRepository();

export const startCreateCourseRecord = (
  courseRecord: Omit<
    CourseRecordRegister,
    'instructorId' | 'courseId' | 'periodId'
  >
): AppThunk<Promise<ServerErrorResponse | void>> => async (
  dispatch,
  getState
) => {
  const {
    authReducer: { user },
    courseReducer: { currentCourse },
  } = getState();

  dispatch(courseAction.startLoadingCurrentCourse());
  const response = await laravelCourseRecordRepository.create({
    ...courseRecord,
    instructorId: user.id,
    courseId: currentCourse.id,
    periodId: 1,
  });

  if (isServerErrorResponse(response)) return response;

  dispatch(courseAction.finishLoadingCurrentCourse());

  dispatch(courseAction.addNewCourseRecord(response.payload));
};
