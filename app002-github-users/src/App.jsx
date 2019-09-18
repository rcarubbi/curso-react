import React, { Component } from 'react';
import './App.css';
import CardList from './CardList';
import Form from './Form';

class App extends Component {

  state = {
    cards: [

    ]
  };

  removeCard = (id) => {
    this.setState((prevState) => ({
      cards: prevState.cards.filter((card) => card.id !== id)
    }));
  };

  addNewCard = (card) => {
    this.setState((prevState) => ({
       cards: prevState.cards.concat(card)
    }));
  };

  render() {

    return (
      <div>
        <Form onSubmit={this.addNewCard} />
        <CardList cards={this.state.cards} onRemoveCard={this.removeCard} />
      </div>

    );
  }
}

export default App;
