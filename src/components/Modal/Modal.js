import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Ovrelay, ModalStyle } from './Modal.styled';
const modalRoots = document.querySelector('#modal-root');
export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = evt => {
    if (evt.code === 'Escape') {
      this.props.closeKeyDown();
    }
  };
  render() {
    const { largeImage, onCloseModal } = this.props;
    return createPortal(
      <Ovrelay onClick={onCloseModal}>
        <ModalStyle>
          <img src={largeImage} alt="" />
        </ModalStyle>
      </Ovrelay>,
      modalRoots
    );
  }
}
