import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: 'Sam',
        city: 'Fergus Falls',
        zip: 56537
      }
    }

    //makes 'this' in handleChange the same as 'this' in the constructor
    //similar to const self = this;
    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    // console.log('input was changed');
    // console.log('event.target', event.target);
    console.log('event.target.value', event.target.value);
    // this.state.user = event.target.value;

    this.setState({
      user: {
        ...this.state.user,
        name: event.target.value,
      }
    });
  }

  handleCity = (event) => {
    console.log('event.target.value', event.target.value);
    this.setState({
      user: {
        ...this.state.user,
        city: event.target.value,
      }
    });
  }

  handleZip = (event) => {
    console.log('event.target.value', event.target.value);
    this.setState({
      user: {
        ...this.state.user,
        zip: event.target.value,
      }
    });
  }

  consoleLog = () => {
    console.log(this.state.user + ' is from ' + this.state.city);
  }


  render() {
    return (
      <div>
        <p>
        <input onChange={this.handleChange} placeholder="User Name"/>
        <input onChange={this.handleCity} placeholder="City"/>
        <input onChange={this.handleZip} placeholder="Zip"/>
        </p>
        <p>
        {this.state.user.name} is from {this.state.user.city}, {this.state.user.zip}
        </p>
        <button onClick={this.consoleLog}>Console Log Info</button>
      </div>
    );
  }
}

export default App;
