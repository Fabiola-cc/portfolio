import PropTypes from 'prop-types';
import './galeria.css';

const PhotoGallery = ({ photos }) => {
  return (
    <div className="photo-gallery">
      {photos.map((photo, index) => (
        <div key={index} className="photo-item">
          <img src={photo.src} alt={photo.alt} />
        </div>
      ))}
    </div>
  );
};

PhotoGallery.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired
    })
  ).isRequired
};

export default PhotoGallery;
