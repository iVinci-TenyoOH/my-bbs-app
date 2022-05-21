import { Box, Card, CardContent, Avatar } from "@mui/material";
import { lightGreen } from "@mui/material/colors";

import ReactionBtns from "../ReactionBtns";
import HashTag from "../HashTag";

interface Props {
  className?: string;
  onClick?: () => void;
}

const PostPreview: React.FunctionComponent<Props> = (props) => {
  const { className, onClick } = props;
  return (
    <Card sx={[{ width: "100%" }, { boxShadow: "none" }, { "&:hover": { bgcolor: lightGreen[50], cursor: "pointer" } }]} className={className} onClick={onClick}>
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex" }}>
            <Avatar sx={{ bgcolor: "pink", mr: 1 }}>W</Avatar>
            <div>
              <div>Ten</div>
              <div>2099-09-09 13:00:00</div>
            </div>
          </Box>
          <ReactionBtns reactionsCount={{ thumbsUp: 0, like: 0, comment: 0 }}></ReactionBtns>
        </Box>

        <Box sx={{ minHeight: 100, p: 2 }}>aaaaaa</Box>
        <Box sx={{ display: "flex" }}>
          <HashTag label="aaa"></HashTag>
          <HashTag label="bbb"></HashTag>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PostPreview;
