import { Container } from '@mui/material';
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

function App() {
  // falseで初期化しているんで、現場のコーディング規約によりますが型を書く必要はないです。
  const [isCreatePostModalOpen, setIsCreatePostModalOpen] = useState(false);
  const [isDetailPostModalOpen, setIsDetailPostModalOpen] = useState(false);

  const { posts, users, error, isLoading } = usePostsAndUsers();
  // const { data: posts, error } = useGetPostsQuery(undefined);
  // const { posts } = (data as EntityState<IPost>) ?? {};
  // console.log(useSelector(api.endpoints.getPosts.select(undefined)));
  // console.log(error);

  // const test = store.dispatch(api.endpoints.getPosts.initiate());

  const handleCreatePostModalOpen = () => {
    // https://zenn.dev/stin/articles/use-appropriate-api
    setIsCreatePostModalOpen((prev) => !prev);
  };
  const handleDetailPostModalOpen = () => {
    setIsDetailPostModalOpen((prev) => !prev);
  };

  return (
    <div className="App">
      <Header createPostModalOpen={handleCreatePostModalOpen} />
      <Container maxWidth="xl">
        {posts.ids.map((id) => <StyledPostPreview postId={id} onClick={handleDetailPostModalOpen} key={id} />)}
      </Container>
      {isCreatePostModalOpen && <CreatePostModal handleCreatePostModalOpen={handleCreatePostModalOpen} />}
      {isDetailPostModalOpen && <DetailPostModal handleDetailPostModalOpen={handleDetailPostModalOpen} />}
    </div>
  );
}

const StyledPostPreview = styled(PostPreview)`
  margin-bottom: 10px;
`;

export default App;
