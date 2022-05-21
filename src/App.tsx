import { Container } from "@mui/material";
import styled from "styled-components";
import { useState } from "react";

import Header from "./components/Header";
import PostPreview from "./components/PostPreview";
import CreatePostModal from "./components/CreatePostModal";
import DetailPostModal from "./components/DetailPostModal";

function App() {
  const [isCreatePostModalOpen, setIsCreatePostModalOpen] = useState<boolean>(false);
  const [isDetailPostModalOpen, setIsDetailPostModalOpen] = useState<boolean>(false);
  const handleCreatePostModalOpen = () => {
    setIsCreatePostModalOpen(!isCreatePostModalOpen);
  };
  const handleDetailPostModalOpen = () => {
    setIsDetailPostModalOpen(!isDetailPostModalOpen);
  };
  return (
    <div className="App">
      <Header handleCreatePostModalOpen={handleCreatePostModalOpen} />
      <Container maxWidth="xl">
        <StyledPostPreview onClick={handleDetailPostModalOpen}/>
        <StyledPostPreview />
        <StyledPostPreview />
        <StyledPostPreview />
        <StyledPostPreview />
        <StyledPostPreview />
      </Container>
      <CreatePostModal isCreatePostModalOpen={isCreatePostModalOpen} handleCreatePostModalOpen={handleCreatePostModalOpen}></CreatePostModal>
      <DetailPostModal isDetailPostModalOpen={isDetailPostModalOpen} handleDetailPostModalOpen={handleDetailPostModalOpen}></DetailPostModal>
    </div>
  );
}

const StyledPostPreview = styled(PostPreview)`
  margin-bottom: 10px;
`;

export default App;
