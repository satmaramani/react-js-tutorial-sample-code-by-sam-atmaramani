import React from 'react';
class BuggyCounter extends React.Component {
    constructor(props) {
      super(props);
      this.state = { counter: 0 };
      this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
      this.setState(({counter}) => ({
        counter: counter + 1
      }));
    }
    
    render() {
      if (this.state.counter === 5) {
        // Simulate a JS error
        // throw new Error('I crashed!');
        alert("Red Alert : I am crashed and I am inside buggy counter ")
      }
      return <>
        <h1 >{this.state.counter}</h1>
        <button onClick={this.handleClick}>Click here to increase Counter</button>
      </>;
    }
  }

  export default BuggyCounter;