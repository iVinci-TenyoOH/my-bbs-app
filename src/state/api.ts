import { createEntityAdapter, createSelector, EntityState } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_SERVER } from '../constants/envConfig';
import { IPost } from '../types/getPostsApi';
import { IUser } from '../types/getUsersApi';
import { RootState } from './store';

// EntityAdapterの初期化
const postsAdapter = createEntityAdapter<IPost>();
const postInitialState = postsAdapter.getInitialState();

const userAdapter = createEntityAdapter<IUser>();
const userInitialState = userAdapter.getInitialState();

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: API_SERVER }),
  endpoints: (builder) => ({
    getPosts: builder.query<EntityState<IPost>, undefined>({
      query: () => '/post',
      transformResponse: (res: IPost[]) => {
        return postsAdapter.setAll(postInitialState, res);
      },
    }),
    getUsers: builder.query<EntityState<IUser>, string>({
      query: () => './user',
      transformResponse: (res: IUser[]) => {
        return userAdapter.setAll(userInitialState, res);
      },
    }),
  }),
});

export const { useGetPostsQuery, useGetUsersQuery } = api;

// EntityAdapter Selectorsのexport
const selectPostsResult = api.endpoints.getPosts.select(undefined);
const selectPostsData = createSelector(selectPostsResult, (postsResult) => postsResult.data);
export const postsSelectors = postsAdapter.getSelectors(
  (state: RootState) => selectPostsData(state) ?? postInitialState
);

// usersのリクエストパラメータはいったん仮置き（[TODO] storeで管理するように実装）
const selectUsersResult = api.endpoints.getUsers.select('user1,user2,user3,user4,user6');
const selectUsersData = createSelector(selectUsersResult, (usersResult) => usersResult.data);
export const usersSelectors = userAdapter.getSelectors(
  (state: RootState) => selectUsersData(state) ?? userInitialState
);
