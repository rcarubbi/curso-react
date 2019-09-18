import React, { Component } from 'react';

class Button extends Component {


  // handleClick = () => {
  //   this.setState((prevState) => ({
  //     counter: prevState.counter + 1
  //   }));
  // }

  handleClick = () => {
    this.props.onClickFunction(this.props.incrementValue);
  };

  render() {
    return (

      // a cada nova chamada uma nova função é criada
      // <button onClick={() => this.props.onClickFunction(this.props.incrementValue)}>
      <button onClick={this.handleClick}>
        +{this.props.incrementValue}
      </button>
    );
  }
}

export default Button;