/**
 * An array of routes that are for authentication
 * These routes will redirect logged in users to /settings
 * @type {string[]}
 *  */

export const authRoutes: string[] = [
  '/auth/login',
  '/auth/register',
  '/auth/error',
];

/**
 * The prefix for api authentication routes
 * Routes that starts with this prefix are used for authentication purposes
 * @type {string}
 *  */
export const apiAuthPrefix = '/api/auth';

/**
 * The default redirect path after logging in
 * @type {string}
 *  */
export const DEFAULT_LOGIN_REDIRECT = '/';
