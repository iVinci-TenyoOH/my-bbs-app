import { Container } from "@mui/material";
import styled from "styled-components";
import { useState } from "react";

import Header from "./components/Header";
import PostPreview from "./components/PostPreview";
import CreatePostModal from "./components/CreatePostModal";
import DetailPostModal from "./components/DetailPostModal";

function App() {
  // falseで初期化しているんで、現場のコーディング規約によりますが型を書く必要はないです。
  const [isCreatePostModalOpen, setIsCreatePostModalOpen] = useState(false);
  const [isDetailPostModalOpen, setIsDetailPostModalOpen] = useState(false);

  const handleCreatePostModalOpen = () => {
    // https://zenn.dev/stin/articles/use-appropriate-api
    setIsCreatePostModalOpen(prev => !prev);
  };
  const handleDetailPostModalOpen = () => {
    setIsDetailPostModalOpen(prev => !prev);
  };

  return (
    <div className="App">
      <Header createPostModalOpen={handleCreatePostModalOpen} />
      <Container maxWidth="xl">
        <StyledPostPreview onClick={handleDetailPostModalOpen}/>
        <StyledPostPreview />
        <StyledPostPreview />
        <StyledPostPreview />
        <StyledPostPreview />
        <StyledPostPreview />
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
