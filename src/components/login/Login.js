import React, { Component } from 'react';
import update from 'react-addons-update';
import { browserHistory } from 'react-router';

import Nav from '../Nav/Nav';

export default class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      user: {}
    }
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
  console.log('handleSubmit is firing');

    fetch('http://localhost:8000/users/login', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json"
      }
    }).then((data) => {

      data.json()
      .then(Obj => {
        console.log('#########', Obj)
        window.localStorage.setItem('token', Obj.token);
        window.localStorage.setItem('firstname', Obj.firstname);
        window.localStorage.setItem('lastname', Obj.lastname);
        window.localStorage.setItem('user_id', Obj.id)
        browserHistory.push('/dashboard');

      })
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
          <h1 className="loginTitle">LOGIN</h1>
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

} //closes class Login
