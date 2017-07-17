import React, { Component } from 'react';

class UserInput extends Component {
  state = {
    hometown: "",
    username: ""
  }

  handleChange = (e) => this.setState({[e.target.id]: e.target.value})

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.store.dispatch({type: "ADD_USER", user: this.state})
    console.log(this.state);
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Hometown</label>
          <input id="hometown" type="text" value={this.state.hometown} onChange={this.handleChange}></input>
          <label>Username</label>
          <input id="username" type="text" value={this.state.username} onChange={this.handleChange}></input>
          <button>Submit New User</button>
        </form>
      </div>
    );
  }
};

export default UserInput;
