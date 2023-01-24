import { useState } from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import Card from './Card';
import imgs from '../helpers/images.js';

const CardContainer = (props) => {
  const { increaseScore, resetScore } = props;
  const [fruits, setFruits] = useState([
    { name: `bananas`, clicked: false, photo: imgs.bananas, id: uniqid() },
    { name: `apple`, clicked: false, photo: imgs.apples, id: uniqid() },
    { name: `orange`, clicked: false, photo: imgs.orange, id: uniqid() },
    { name: `grapes`, clicked: false, photo: imgs.grapes, id: uniqid() },
    { name: `kiwi`, clicked: false, photo: imgs.kiwi, id: uniqid() },
    { name: `mango`, clicked: false, photo: imgs.mango, id: uniqid() },
    { name: `pineapple`, clicked: false, photo: imgs.pineapple, id: uniqid() },
    { name: `cherry`, clicked: false, photo: imgs.cherry, id: uniqid() },
  ]);

  const resetClickedFruits = () => {
    const newArray = fruits.map((f) => {
      f.clicked = false;
      return f;
    });
    setFruits(newArray);
  };

  const handleClickedFruit = (fruit) => {
    const index = fruits.findIndex((e) => e.id === fruit.id);
    const newArray = fruits.map((f, i) => {
      if (i === index) {
        if (f.clicked === false) {
          f.clicked = true;
          increaseScore();
        } else {
          resetScore();
          resetClickedFruits();
        }
        return f;
      }
      return f;
    });
    setFruits(newArray);
  };

  return (
    <div className="card-container">
      {fruits.map((fruit, index) => (
        <Card
          name={fruit.name}
          photo={fruit.photo}
          key={index}
          onClick={() => {
            handleClickedFruit(fruit);
          }}
        />
      ))}
    </div>
  );
};

CardContainer.propTypes = {
  increaseScore: PropTypes.func,
  resetScore: PropTypes.func,
};

export default CardContainer;
