import { ApiResponse, SuccessfulResponse } from 'src/interfaces/Folder';

export function isSuccessfulResponse<Type>(
  response: ApiResponse
): response is SuccessfulResponse<Type> {
  return response.success === true;
}
