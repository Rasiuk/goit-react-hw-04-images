import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
  state = { showModal: false };
  toggleModal = () => {
    this.setState(({ showModal }) => {
      return { showModal: !showModal };
    });
  };

  handleCloseModal = evt => {
    if (evt.currentTarget === evt.target) {
      this.toggleModal();
    }
  };
  render() {
    const { webformatURL, largeImageURL, tags } = this.props;
    return (
      <li className="gallery-item">
        <img onClick={this.toggleModal} src={webformatURL} alt={tags} />
        {this.state.showModal && (
          <Modal
            onCloseModal={this.handleCloseModal}
            closeKeyDown={this.toggleModal}
            largeImage={largeImageURL}
          />
        )}
      </li>
    );
  }
}
ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
