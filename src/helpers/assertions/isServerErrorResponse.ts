import { ApiResponse, ServerErrorResponse } from 'src/interfaces/Folder';

export function isServerErrorResponse(
  response: ApiResponse
): response is ServerErrorResponse {
  return response.success === false;
}
