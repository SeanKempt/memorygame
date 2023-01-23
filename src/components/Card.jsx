import PropTypes from 'prop-types';

const Card = (props) => {
  const { name, photo } = props;
  return (
    <div className="card">
      <img src={photo} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  photo: PropTypes.string,
};

export default Card;
