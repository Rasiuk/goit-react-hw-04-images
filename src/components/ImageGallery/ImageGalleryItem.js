import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ webformatURL, largeImageURL, tags }) => {
  const [showModal, setshowModal] = useState(false);

  const handleCloseModal = evt => {
    if (evt.currentTarget === evt.target) {
      toggleModal();
    }
  };
  const toggleModal = () => {
    setshowModal(!showModal);
  };

  return (
    <li className="gallery-item">
      <img onClick={toggleModal} src={webformatURL} alt={tags} />
      {showModal && (
        <Modal
          onCloseModal={handleCloseModal}
          closeKeyDown={toggleModal}
          largeImage={largeImageURL}
        />
      )}
    </li>
  );
};
ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
