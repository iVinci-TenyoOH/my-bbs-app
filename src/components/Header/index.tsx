import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheese, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { AppBar, Container, Toolbar, IconButton, Button } from "@mui/material";

interface Props {
  handleCreatePostModalOpen: () => void;
}

const Header: React.FunctionComponent<Props> = (props) => {
  const { handleCreatePostModalOpen } = props;
  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton sx={{ color: "primary.contrastText" }}>
            <FontAwesomeIcon icon={faCheese} />
          </IconButton>
          <Button variant="contained" sx={{ border: 1 }} onClick={handleCreatePostModalOpen}>
            <FontAwesomeIcon icon={faPenToSquare} style={{marginRight:4}}/>
            投稿する
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
