import { ApiResponse, Message } from '.';

export interface ServerErrorResponse extends ApiResponse {
  success: false;
  message: Message;
}
