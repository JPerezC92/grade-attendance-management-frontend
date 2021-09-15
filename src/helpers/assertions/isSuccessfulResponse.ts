import { ApiResponse, SuccessfulResponse } from 'src/shared/types';

export function isSuccessfulResponse<Type>(
  response: ApiResponse
): response is SuccessfulResponse<Type> {
  return response.success === true;
}
