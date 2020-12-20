import React from 'react';
import PropTypes from 'prop-types';

const fruitILike = [
  {
    id: 1,
    name: "apple",
    image: "http://1.bp.blogspot.com/_cYoDgrIrq5Q/TKjwPFAQxuI/AAAAAAAAAD8/akB4ZcrxWE4/s1600/Red+Apple+XSmall.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "strawberry",
    image: "https://theflavorcompany.com/wp-content/uploads/2018/03/Strawberry.jpg",
    rating: 4.5
  },
  {
    id: 3,
    name: "peach",
    image: "https://befreshcorp.net/wp-content/uploads/2017/07/product-packshot-nactarine.jpg",
    rating: 4
  },
  {
    id: 4,
    name: "orange",
    image: "https://southernhospitalityblog.com/wp-content/uploads/2011/07/orange.jpg",
    rating: 3.5
  },
  {
    id: 5,
    name: "grape",
    image: "https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/263/263332/three-bunches-of-grapes.jpg?w=1155&h=978",
    rating: 3
  }
]

function Fruit({name, picture, rating}) {
  return (
    <div>
      <h2>I like {name}!</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Fruit.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function App() {
  return (
    <div>
      {fruitILike.map(fruits => (
        <Fruit key={fruits.id} name={fruits.name} picture={fruits.image} rating={fruits.rating} />
      ))}
    </div>
  );
}

export default App;
