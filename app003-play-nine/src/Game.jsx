import React, { Component } from 'react';
import _ from 'lodash';
import Stars from './Stars';
import Button from './Button';
import Answer from './Answer';
import Numbers from './Numbers';
import DoneFrame from './DoneFrame';


var possibleCombinationSum = function(arr, n) {
  if (arr.indexOf(n) >= 0) { return true; }
  if (arr[0] > n) { return false; }
  if (arr[arr.length - 1] > n) {
    arr.pop();
    return possibleCombinationSum(arr, n);
  }
  var listSize = arr.length, combinationsCount = (1 << listSize)
  for (var i = 1; i < combinationsCount ; i++ ) {
    var combinationSum = 0;
    for (var j=0 ; j < listSize ; j++) {
      if (i & (1 << j)) { combinationSum += arr[j]; }
    }
    if (n === combinationSum) { return true; }
  }
  return false;
};


export default class Game extends Component {
  static initialState = () => ({
    selectedNumbers : [],
    numberOfStars: Game.randomNumber(),
    usedNumbers: [],
    answerIsCorrect: null,
    redraws: 5,
    doneStatus: ''
  });
  state = Game.initialState();
  resetGame = () => {
    this.setState(Game.initialState());
  }
  static randomNumber = () => {
    return 1 + Math.floor(Math.random() * 9);
  }
  selectNumber = (clickedNumber) => {
    if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0 
    || this.state.usedNumbers.indexOf(clickedNumber) >= 0) { return; } 

    this.setState(prevState => ({
      answerIsCorrect: null,
      selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
   
    }));
  };
  unselectNumber = (clickedNumber) => {
    this.setState((prevState) => ({
      answerIsCorrect: null,
      selectedNumbers: prevState.selectedNumbers
                                .filter(number => number !== clickedNumber)
     
    }));
  };
  checkAnswer = () => {
    this.setState((prevState) => ({
      answerIsCorrect: prevState.numberOfStars === 
          prevState.selectedNumbers.reduce((acc, n) => acc + n, 0)
    }));
  };
  acceptAnswer = () => {
    this.setState((prevState) => ({
        usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
        selectedNumbers: [],
        answerIsCorrect: null,
        numberOfStars: Game.randomNumber()
    }), () => this.updateDoneStatus());
  };
  redraw = () => {
    this.setState((prevState) => ({
      redraws: --prevState.redraws,
      numberOfStars: Game.randomNumber()
    }), () => this.updateDoneStatus());
    
  }
  possibleSolutions = ({numberOfStars, usedNumbers}) => {
      const possibleNumbers = _.range(1, 10).filter(number => usedNumbers.indexOf(number) === -1);
      return possibleCombinationSum(possibleNumbers, numberOfStars);
  }
  updateDoneStatus = () => {
    this.setState((prevState) => {
        if (prevState.usedNumbers.length === 9)
        {
          return {doneStatus: 'Done. Nice!'};
        }
        if (prevState.redraws === 0 && !this.possibleSolutions(prevState))
        {
          return {doneStatus: 'Game Over!'};
        }
    });
  }
  render() {
    const { doneStatus, redraws, selectedNumbers, numberOfStars, answerIsCorrect, usedNumbers } = this.state;

    return (
      <div className="container">
        <h3>Play nine</h3>
        <hr/>
        <div className="row">
          <Stars numberOfStars={numberOfStars} />
          <Button selectedNumbers={selectedNumbers} 
                  checkAnswer={this.checkAnswer}
                  answerIsCorrect={answerIsCorrect} 
                  acceptAnswer={this.acceptAnswer}
                  redraw={this.redraw}
                  redraws={redraws} />
          <Answer selectedNumbers={selectedNumbers} unselectNumber={this.unselectNumber} />
        </div>
        <br/>
        
        { doneStatus? 
          <DoneFrame doneStatus={doneStatus} reset={this.resetGame} /> : 
          <Numbers selectedNumbers={selectedNumbers} 
                 selectNumber={this.selectNumber}
                 usedNumbers={usedNumbers} />
        }
      </div>
    );
  }
}

