export interface APIResult<T> {
  ok: boolean;
  message: string | null;
  result: T | null;
}
