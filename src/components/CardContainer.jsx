import Card from './Card';
import imgs from '../helpers/images.js';

// need to use map to render all the cards into the container

const CardContainer = () => {
  const fruits = [
    { name: `bananas`, clicked: false, photo: imgs.bananas },
    { name: `apple`, clicked: false, photo: imgs.apples },
    { name: `orange`, clicked: false, photo: imgs.orange },
    { name: `grapes`, clicked: false, photo: imgs.grapes },
    { name: `kiwi`, clicked: false, photo: imgs.kiwi },
    { name: `mango`, clicked: false, photo: imgs.mango },
    { name: `pineapple`, clicked: false, photo: imgs.pineapple },
    { name: `cherry`, clicked: false, photo: imgs.cherry },
  ];
  return (
    <div className="card-container">
      {fruits.map((fruit) => (
        <Card name={fruit.name} photo={fruit.photo} />
      ))}
    </div>
  );
};

export default CardContainer;
