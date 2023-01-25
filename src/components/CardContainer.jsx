import { useEffect, useState } from 'react';
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

  const shuffleArray = () => {
    // this is where the problem is; even though we are setting the the state to something else its not changing!!!!!
    const array = [...fruits];
    const shuffledArray = array
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    setFruits(shuffledArray);
    console.log(fruits);
  };

  const handleClickedFruit = (fruit) => {
    const index = fruits.findIndex((e) => e.id === fruit.id);
    const newArray = fruits.map((f, i) => {
      if (i === index) {
        if (f.clicked === false) {
          f.clicked = true;
          increaseScore();
          shuffleArray();
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

  useEffect(() => {
    console.log(`hello`);
  }, [fruits]);

  const renderFruits = () =>
    fruits.map((fruit) => (
      <Card
        name={fruit.name}
        photo={fruit.photo}
        key={fruit.id}
        onClick={() => {
          handleClickedFruit(fruit);
        }}
      />
    ));

  return <div className="card-container">{renderFruits()}</div>;
};

CardContainer.propTypes = {
  increaseScore: PropTypes.func,
  resetScore: PropTypes.func,
};

export default CardContainer;
