// src/mocks/handlers.js
import { rest } from 'msw';

import getPostsJson from '../types/getPostsResponse.json';
import getUsersJson from '../types/getUsersResponse.json';

export const handlers = [
  rest.post('/login', (req, res, ctx) => {
    // Persist user's authentication in the session
    sessionStorage.setItem('is-authenticated', 'true');

    return res(
      // Respond with a 200 status code
      ctx.status(200)
    );
  }),

  rest.get('/post', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(getPostsJson));
  }),
  rest.get('/user', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(getUsersJson));
  }),
];
