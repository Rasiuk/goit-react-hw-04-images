import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Ovrelay, ModalStyle } from './Modal.styled';
const modalRoots = document.querySelector('#modal-root');
export const Modal = ({ closeKeyDown, onCloseModal, largeImage }) => {
  useEffect(() => {
    const handleKeyDown = evt => {
      if (evt.code === 'Escape') {
        closeKeyDown();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeKeyDown]);

  return createPortal(
    <Ovrelay onClick={onCloseModal}>
      <ModalStyle>
        <img src={largeImage} alt="" />
      </ModalStyle>
    </Ovrelay>,
    modalRoots
  );
};
