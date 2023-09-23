import { useState} from 'react';
import css from './ImageGalleryItem.module.css';
import { Modal } from '../Modal/Modal';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ image }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };
  const { webformatURL, tags, largeImageURL } = image;
  return (
    <li className={css.imageGalleryItem}>
      <img
        onClick={toggleModal}
        className={css.imageItem}
        src={webformatURL}
        alt={tags}
      />
      {isOpenModal && (
        <Modal largeImageURL={largeImageURL} onClose={toggleModal} />
      )}
    </li>
  );
};
ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
};