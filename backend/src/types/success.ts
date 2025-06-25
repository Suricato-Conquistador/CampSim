export interface SuccessDTO<T = unknown> {
  error: false;
  message?: string;
  data?: T;
}
