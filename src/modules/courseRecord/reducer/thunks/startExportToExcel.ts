import { isCurrentCourseRecordLoaded } from 'src/helpers/assertions';
import { AppThunk } from 'src/redux';
import { ServerErrorResponse } from 'src/shared/types';
import { LaravelCourseRecordRepository } from '../../repositories';

const laravelCourseRecordRepository = new LaravelCourseRecordRepository();

export const startExportToExcel = (): AppThunk<
  Promise<ServerErrorResponse | void>
> => async (dispatch, getState) => {
  const {
    courseRecordReducer: { currentCourseRecord },
  } = getState();

  if (!isCurrentCourseRecordLoaded(currentCourseRecord)) {
    return;
  }

  const response = await laravelCourseRecordRepository.exportToExcel(
    currentCourseRecord.id
  );

  if (response) return response;
};
