import { Box, IconButton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faHeart, faComment } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin-right: 8px;
`;

interface Prop {
  reactionsCount: {
    thumbsUp: number;
    like: number;
    comment: number;
  };
}

const ReactionBtns: React.FunctionComponent<Prop> = (props) => {
  const {
    reactionsCount: { thumbsUp, like, comment },
  } = props;
  return (
    <Box sx={{ display: "flex" }}>
      <IconButton>
        <StyledFontAwesomeIcon icon={faThumbsUp} />
        {thumbsUp}
      </IconButton>
      <IconButton>
        <StyledFontAwesomeIcon icon={faHeart} />
        {like}
      </IconButton>
      <IconButton>
        <StyledFontAwesomeIcon icon={faComment} />
        {comment}
      </IconButton>
    </Box>
  );
};

export default ReactionBtns;
