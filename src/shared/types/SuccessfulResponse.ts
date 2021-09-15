import { ApiResponse, Payload } from '.';

export interface SuccessfulResponse<Type = void> extends ApiResponse {
  success: true;
  payload: Payload<Type>;
}
