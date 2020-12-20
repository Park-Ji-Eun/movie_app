import React from 'react';

function Fruit({name, picture}) {
  return (
    <div>
      <h2>I like {name}!</h2>
      <img src={picture} alt={name} />
    </div>
  );
}

const fruitILike = [
  {
    id: 1,
    name: "apple",
    image: "http://1.bp.blogspot.com/_cYoDgrIrq5Q/TKjwPFAQxuI/AAAAAAAAAD8/akB4ZcrxWE4/s1600/Red+Apple+XSmall.jpg"
  },
  {
    id: 2,
    name : "strawberry",
    image : "https://theflavorcompany.com/wp-content/uploads/2018/03/Strawberry.jpg"
  },
  {
    id: 3,
    name : "peach",
    image : "https://befreshcorp.net/wp-content/uploads/2017/07/product-packshot-nactarine.jpg"
  },
  {
    id: 4,
    name : "orange",
    image : "https://southernhospitalityblog.com/wp-content/uploads/2011/07/orange.jpg"
  },
  {
    id: 5,
    name : "grape",
    image : "https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/263/263332/three-bunches-of-grapes.jpg?w=1155&h=978"
  }
]

function App() {
  return (
    <div>
      {fruitILike.map(fruits => (
        <Fruit key={fruits.id} name={fruits.name} picture={fruits.image} />
      ))}
    </div>
  );
}

export default App;
