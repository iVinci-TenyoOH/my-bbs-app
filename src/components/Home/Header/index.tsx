import { faCheese, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AppBar, Button, Container, IconButton, Toolbar } from '@mui/material';

import { useOpenModal } from '../../../state/home/hooks';
import { ApplicationModal } from '../../../state/home/reducer';

const Header: React.FC = () => {
  const openModal = useOpenModal(ApplicationModal.CREATE_POST_MODAL);

  return (
    <>
      <AppBar position="sticky">
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <IconButton sx={{ color: 'primary.contrastText' }}>
              <FontAwesomeIcon icon={faCheese} />
            </IconButton>
            <Button variant="contained" sx={{ border: 1 }} onClick={openModal}>
              <FontAwesomeIcon icon={faPenToSquare} style={{ marginRight: 4 }} />
              投稿する
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
