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
    const newArray = fruits.map((f) => ({ ...f, clicked: false }));
    setFruits(newArray);
  };

  const shuffleArray = (array) =>
    array
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

  // the problem is multiple updates in a single function.
  const handleClickedFruit = (fruit) => {
    if (fruit.clicked) {
      resetScore();
      resetClickedFruits();
    } else {
      fruit.clicked = true;
      increaseScore();
      setFruits((pendingState) => {
        const updatedFruits = pendingState.map((f) => {
          if (f.id === fruit.id) {
            return {
              ...f,
              clicked: true,
            };
          }
          return f;
        });
        return shuffleArray(updatedFruits);
      });
    }
  };

  return (
    <div className="container d-grid">
      <div className="row row-cols-5 justify-content-center">
        {fruits.map((fruit) => (
          <Card
            name={fruit.name}
            photo={fruit.photo}
            key={fruit.id}
            onClick={() => {
              handleClickedFruit(fruit); // this is the source of the problem. Its updating state within the same line not queuing so its only preforming the last step
            }}
          />
        ))}
      </div>
    </div>
  );
};

CardContainer.propTypes = {
  increaseScore: PropTypes.func,
  resetScore: PropTypes.func,
};

export default CardContainer;
