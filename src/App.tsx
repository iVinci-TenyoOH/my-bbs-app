import { Alert, Container, Skeleton } from '@mui/material';
import styled from 'styled-components';
import { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { EntityState } from '@reduxjs/toolkit';

import Header from './components/Header';
import PostPreview from './components/PostPreview';
import CreatePostModal from './components/CreatePostModal';
import DetailPostModal from './components/DetailPostModal';
// import { api, selectAllPosts, useGetPostsQuery, selectPostsResult, selectPostsData } from './state/api';
import { usePostsAndUsers } from './hooks/usePostsAndUsers';

const App: React.FC = () => {
  const [isCreatePostModalOpen, setIsCreatePostModalOpen] = useState(false);
  const [isDetailPostModalOpen, setIsDetailPostModalOpen] = useState(false);

  const { posts, users, isSuccess, isLoading, isError, error } = usePostsAndUsers();
  // const { data: posts, error } = useGetPostsQuery(undefined);
  // const { posts } = (data as EntityState<IPost>) ?? {};
  // console.log(useSelector(api.endpoints.getPosts.select(undefined)));
  console.log(posts);

  // const test = store.dispatch(api.endpoints.getPosts.initiate());

  const handleCreatePostModalOpen = () => {
    // https://zenn.dev/stin/articles/use-appropriate-api
    setIsCreatePostModalOpen((prev) => !prev);
  };
  const handleDetailPostModalOpen = () => {
    setIsDetailPostModalOpen((prev) => !prev);
  };

  const getContent = () => {
    if (isLoading) {
      return <Skeleton animation="wave" />;
    } else if (isSuccess) {
      return (
        <Container maxWidth="xl">
          {posts.ids.map((id) => (
            <StyledPostPreview postId={id} onClick={handleDetailPostModalOpen} key={id} />
          ))}
        </Container>
      );
    } else if (isError && error) {
      if ('status' in error) {
        return (
          <Alert variant="filled" severity="error" data-testId="errAlert">
            An error has occurred:
            {error.status}
          </Alert>
        );
      } else {
        // you can access all properties of `SerializedError` here
        return <div>{error.message}</div>;
      }
    }
  };

  return (
    <div className="App">
      <Header createPostModalOpen={handleCreatePostModalOpen} />
      {getContent()}
      {isCreatePostModalOpen && <CreatePostModal handleCreatePostModalOpen={handleCreatePostModalOpen} />}
      {isDetailPostModalOpen && <DetailPostModal handleDetailPostModalOpen={handleDetailPostModalOpen} />}
    </div>
  );
};

const StyledPostPreview = styled(PostPreview)`
  margin-bottom: 10px;
`;

export default App;
