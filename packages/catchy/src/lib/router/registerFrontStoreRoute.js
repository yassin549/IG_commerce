import { addRoute } from './Router.js';

/**
 * Register a frontStore route
 *
 * @param   {string}  id      Id of route, this must be unique
 * @param   {string|array} method  HTTP method, can be string like "GET", array like ["GET", "POST"]
 * @param   {string}  path    The path of route
 *
 */
export function registerFrontStoreRoute(
  id,
  method,
  path,
  name,
  isApi = false,
  folder = '',
  payloadSchema = null,
  access = 'private'
) {
  // const route = validateRoute(id, method, path);
  const route = {
    id: String(id),
    method,
    path,
    payloadSchema,
    access
  };
  route.isAdmin = false;
  route.isApi = isApi;
  route.folder = folder;
  route.name = name;
  addRoute(route);
}
