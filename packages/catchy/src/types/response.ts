import { Response as ExpressResponse } from 'express';

export interface CatchyResponse extends ExpressResponse {
  debugMiddlewares: { id: string; time: number }[];
}
