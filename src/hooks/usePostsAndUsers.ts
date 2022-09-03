import { skipToken } from '@reduxjs/toolkit/query/react';
import { useGetPostsQuery, useGetUsersQuery } from '../state/api';
import { IPost } from '../types/getPostsApi';
import { EntityState } from '@reduxjs/toolkit';

const retrieveUserIdsFromPosts = (posts: EntityState<IPost>) => {
  // postsレスポンスからuserIdを取り出す
  const rawUserIds = Object.values(posts.entities).map((post) => post?.author);
  // Setオブジェクトを介して重複分を削除
  const uniqueUserIds = new Set(rawUserIds);
  // 配列を介してstring型に変換
  const userIds = Array.from(uniqueUserIds).toString();

  return userIds;
};

export const usePostsAndUsers = () => {
  const { data: posts } = useGetPostsQuery(undefined);

  const {
    data: users,
    isSuccess,
    isLoading,
    isError,
    error,
  } = useGetUsersQuery(posts ? retrieveUserIdsFromPosts(posts) : skipToken);

  if (!posts || !users) {
    return {
      posts: undefined,
      users: undefined,
      isSuccess,
      isLoading,
      isError,
      error,
    };
  }

  return {
    posts,
    users,
    isSuccess,
    isLoading,
    isError,
    error,
  };
};
