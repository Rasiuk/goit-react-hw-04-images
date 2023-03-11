import { ImageGalleryItem } from './ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';
import PropTypes from 'prop-types';

export const ImageGallery = ({ images }) => {
  return (
    <Gallery>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            tags={tags}
            largeImageURL={largeImageURL}
          />
        );
      })}
    </Gallery>
  );
};
ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};
