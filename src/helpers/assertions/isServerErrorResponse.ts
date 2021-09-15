import { ApiResponse, ServerErrorResponse } from 'src/shared/types';

export function isServerErrorResponse(
  response: ApiResponse
): response is ServerErrorResponse {
  return response.success === false;
}
