import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: [
        {
          name: '', 
          city: '', 
          zip: '',
        },
      ],
      newUser: {
        name: '',
        city: '',
        zip: '',
      }
    }

    //makes 'this' in handleChange the same as 'this' in the constructor
    //similar to const self = this;
    // this.handleChange = this.handleChange.bind(this);
  }


  handleChangeFor = propertyName => event => {
    console.log('event.target.value', event.target.value);
    this.setState({
      newUser: {
        ...this.state.newUser,
        [propertyName]: event.target.value,
      }
    });
  }



  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.setState({
      user: [...this.state.user, this.state.newUser],
      newUser: {
        name: '',
        city: '',
        zip: '',
      }
    });
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.newUser.name} onChange={this.handleChangeFor('name')} placeholder="User Name" />
          <input value={this.state.newUser.city} onChange={this.handleChangeFor('city')} placeholder="City" />
          <input value={this.state.newUser.zip} onChange={this.handleChangeFor('zip')} placeholder="Zip" />
          <input type="submit" value="Click me to submit form" />
        </form>
 
        <ul>
          {this.state.user.map(person => (<li key={person.name}>
          {person.name} is from {person.city}, {person.zip}</li>))}
        </ul>
      </div>
    );
  }
}

export default App;
