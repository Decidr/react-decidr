import React, { Component } from 'react';
import update from 'react-addons-update';
import { browserHistory } from 'react-router';

import Nav from '../Nav/Nav';

export default class NewUser extends Component {
  constructor(props){
    super(props);

    this.state = {
      user: {}
    };
  }



handleChange(event){
    let newState = update(this.state, {
        user: {
          $merge: {
            [event.target.name]: event.target.value
          }
        }
    });

  this.setState(newState);
} //closes handleChange

handleSubmit(event){
  event.preventDefault();

    fetch('http://localhost:8000/users', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(() => {
      browserHistory.push('/login');
      console.log('new user created')
    })
    .catch((err) => {
      console.log(err);
    })

}//closes handleSubmit

render() {
    return(
      <div>
        <Nav />



  <loginForm>


    <form onSubmit={this.handleSubmit.bind(this)}>

          <label><h3 className="createHolderText">First Name:</h3></label>
          <input className="createInput"  name="first_name"
          onChange={this.handleChange.bind(this)}
          type='text' placeholder="  First Name" /><br /><br />

          <label><h3 className="createHolderText">Last Name:</h3></label>
          <input className="createInput" name="last_name"
          onChange={this.handleChange.bind(this)}
          type='text' placeholder="  Last Name" /><br /><br />

          <label><h3 className="createHolderText">E-mail:</h3></label>
          <input className="createInput" name="email"
          onChange={this.handleChange.bind(this)}
          type='text' placeholder="  Electronic Mail" /><br /><br />

          <label><h3 className="createHolderText">Password:</h3> </label>
          <input className="createInput" name="password"
          onChange={this.handleChange.bind(this)}
          type='password' placeholder="  Password" /><br /><br />


          <div id="createSubmit" >
            <button className="createInputSubmit" type="submit">Submit</button>
          </div>
        </form>

  </loginForm>

      </div>
    )
  }
} //Closes component
