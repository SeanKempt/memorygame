import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';

const GameOverModal = (props) => {
  const { onHide } = props;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Game Over!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Do you want to play again?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
        <Button>Play Again</Button>
      </Modal.Footer>
    </Modal>
  );
};
GameOverModal.propTypes = {
  onHide: PropTypes.func,
};

export default GameOverModal;
