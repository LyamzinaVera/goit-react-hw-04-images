import { useEffect } from 'react';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

export const Modal = ({ largeImageURL, tags, onClose }) => {
  useEffect(() => {
    const hendleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', hendleKeyDown);

    return () => {
      window.removeEventListener('keydown', hendleKeyDown);
    };
  }, [onClose]);

  const hendleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
  return (
    <div className={css.overlay} onClick={hendleOverlayClick}>
      <div className={css.modal}>
        <img src={largeImageURL} alt={tags} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};
