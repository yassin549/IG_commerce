import { NextFunction } from 'express';
import { CatchyRequest } from './request.js';
import { CatchyResponse } from './response.js';

export type SyncMiddlewareFunction<T, D> = (
  req: CatchyRequest,
  res: CatchyResponse,
  delegate?: D,
  next?: NextFunction
) => T;

export type AsyncMiddlewareFunction<T, D> = (
  req: CatchyRequest,
  res: CatchyResponse,
  delegate?: D,
  next?: NextFunction
) => Promise<T>;

export type ErrorMiddlewareFunction = (
  err: Error,
  req: CatchyRequest,
  res: CatchyResponse,
  delegate?: any,
  next?: NextFunction
) => void;

interface Delegate {}

export interface SyncMiddleware<T, D> extends Middleware {
  callback: SyncMiddlewareFunction<T, D>;
}

export interface AsyncMiddleware<T, D> extends Middleware {
  callback: AsyncMiddlewareFunction<T, D>;
}

// --------------------------------------------------------------------------

export type ENext = (error?: Error, ...args: any[]) => void;

export type MiddlewareFunction = (
  request: CatchyRequest,
  response: CatchyResponse,
  next: ENext
) => void;

export type MiddlewareFunctionWrapper = (
  request: CatchyRequest,
  response: CatchyResponse,
  next: ENext
) => void;

export type ErrorMiddlewareFunctionWrapper = (
  error: Error,
  request: CatchyRequest,
  response: CatchyResponse,
  next: ENext
) => void;

export interface Middleware {
  routeId: string;
  id: string;
  path: string;
  scope: 'app' | 'route';
  region: 'pages' | 'api';
  before?: string[];
  after?: string[];
  middleware: MiddlewareFunctionWrapper | ErrorMiddlewareFunctionWrapper;
}
