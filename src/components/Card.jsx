/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from 'prop-types';

const Card = (props) => {
  const { name, photo, onClick } = props;
  return (
    <div className="card" role="button" tabIndex={0} onClick={onClick}>
      <img className="object-scale-down" src={photo} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  photo: PropTypes.string,
  onClick: PropTypes.func,
};

export default Card;
