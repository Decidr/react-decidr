import React, { Component } from 'react';
import update from 'react-addons-update';
import Nav from '../Nav/Nav';
import { browserHistory } from 'react-router';
import Place from '../Place/Place'


export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      place: {},
      favorites: [],
      lat: '',
      lng: '',
      comment: ''
    }
  }


  componentWillMount(){
    if (!localStorage.getItem('token')) {
      browserHistory.push('/login');
    }
  } // closes componentWillMount

  componentDidMount(){
    this.getFavorites();
  } //closes componentDidMount

  getFavorites() {
    fetch('http://localhost:8000/users/restrict', {
      method: 'GET',
      headers: {
        'Authorization': window.localStorage.getItem('token')
      }
    })
    .then((results) => {
      results.json().then((content) => {

        console.log('content.message: ', content.message)

        fetch(`http://localhost:8000/restaurants/${localStorage.user_id}`, {
          method: 'GET'
        })
        .then((favorites) => {
          favorites.json().then((fav) => {
             console.log('***fav: ', fav);

            if(fav) {
              this.setState({
                favorites: fav,
                place: fav[0],
                lat: fav[0].lat,
                lng: fav[0].lng
              });
            }
          })
        })
      })
    })
    .catch((err) => {
      console.log('fail in catch', err);
      browserHistory.push('/login');
    })
  }

  nextPlace() {
    let index = this.state.favorites.indexOf(this.state.place);
    const endOfArray = this.state.favorites.length -1;
    index === endOfArray ? index = 0 : index++;

   this.setState({
    place: this.state.favorites[index]
   })
  }

  lastPlace() {
    let index = this.state.favorites.indexOf(this.state.place);
    const endOfArray = this.state.favorites.length -1;
    index === 0 ? index = endOfArray : index--;

   this.setState({
    place: this.state.favorites[index]
   })
  }

  deleteFavorite() {
    const id = window.localStorage.getItem('user_id');
    fetch(`http://localhost:8000/restaurants/${id}/${this.state.place.id}`, {
      method: 'DELETE'
    })
    .then(() => {
      console.log('You deleted this.')
      this.state.favorites.length > 0 ? this.lastPlace() : this.setState({ place: {} });
    })
    .catch(err => console.log('LOOK WHAT YOU DID:', err));
  }

  handleChange(event){
    let newState = update(this.state, {
        $merge: {
          [event.target.name]: event.target.value
        }
    })

    this.setState(newState)
    console.log(this.state);
  }

  handleSubmit(event) {
    event.preventDefault();

    const id = window.localStorage.getItem('user_id');
    fetch(`http://localhost:8000/restaurants/${id}/${this.state.place.id}`, {
      method: 'PUT',
      body: JSON.stringify({comment: this.state.comment}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(() => {
      console.log('Comment Added');
      this.getFavorites();
    })
    .catch(err => console.log('Oh no...', err));
  }

  render () {
    return (
  <div>
    <Nav />
    <div className="flexWCommentBox">
    <Place place={this.state.place} lat={this.state.lat} lng={this.state.lng}/>
    <div className="editButton">
    <div>
      <button className="next-last-buttons" onClick={this.nextPlace.bind(this)}>NEXT</button>
      <button className="next-last-buttons" onClick={this.lastPlace.bind(this)}>LAST</button>
      <button className="next-last-buttons" onClick={this.deleteFavorite.bind(this)}>DELETE</button>
        <input id="commentStyle" name="comment" type="text" placeholder="Enter a comment" onChange={this.handleChange.bind(this)} value={this.state.comment} />
        <button className="next-last-buttons" onClick={this.handleSubmit.bind(this)}>ADD COMMENT</button>
    </div>
    </div>
    </div>
  </div>
    )
  }

} //closes component
