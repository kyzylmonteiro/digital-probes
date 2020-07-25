import React from 'react';
// import ReactDOM from 'react-dom';
import './App.css';
import FlipCard from './FlipCard';



let data = require("./data.json");
class App extends React.Component {


  generateCardsList(cards) {
    const cardsList = cards.map(card => (    
        <FlipCard image={card.image} heading={card.heading} text={card.text} />   
      ));
    return <>{cardsList}</>;
  }
  render(){return (
      <div>
        <center><h1 style={{color: "blue;"}}>{data.header}</h1>
        <h5>{data.subheader}</h5>
        </center>
        <div class="cardContainer">
          <FlipCard image="img_avatar.png" heading="UI" text="some sameple text"/>
          {this.generateCardsList(data.cards)}      
        </div>
      </div>
  );}
}

export default App;