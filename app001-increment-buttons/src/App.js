import React, { Component } from 'react';
import { default as Button } from './Button';
import './App.css';


const Result = (props) => {
  return (
    <div>{props.counter}</div>
  );
};


class App extends Component {
  state = { counter: 0 };

  incrementCounter = (incrementValue) => {
    this.setState((prevState) => ({
       counter: prevState.counter + incrementValue
    }));
  };

  render() {
    return (
      <div>
        <Button onClickFunction={this.incrementCounter} incrementValue={1} />
        <Button onClickFunction={this.incrementCounter} incrementValue={5} />
        <Button onClickFunction={this.incrementCounter} incrementValue={10} />
        <Button onClickFunction={this.incrementCounter} incrementValue={100} />
        <Result counter={this.state.counter} />
      </div>
    );
  }
}


export default App;
