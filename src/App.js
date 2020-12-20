import React from 'react';

function Fruit({fav}) {
  return (
    <h1>I like {fav}!!</h1>
  );
}

function App() {
  return (
    <div> 
      <h1>Hello!</h1>
      <Fruit fav = "apple"/>
      <Fruit fav = "strawberry"/>
      <Fruit fav = "peach"/>
      <Fruit fav = "orange"/>
      <Fruit fav = "grape"/>
    </div>
  );
}

export default App;
