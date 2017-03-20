import React, { Component } from 'react';
import update from 'react-addons-update';

import Place from '../Place/Place';
import Nav from '../Nav/Nav';

export default class Main extends Component {
  constructor(props) {
    super(props);


    this.state = {
      search: {
        zip: '',
        category: 'restaurant'
      },

      place: {
      },

      lat: '',
      lng: ''
    }

    console.log(this.state);
    this.state.place ? console.log(this.state) : console.log('Did not retrieve Place from API');
  }

  handleChange(event){
    let newState = update(this.state, {
      search: {
        $merge: {
          [event.target.name]: event.target.value
        }
      }
    })

    this.setState(newState)
    console.log(this.state);
  }

  findPlaces() {
  fetch(`http://localhost:8000/restaurants/zip/${this.state.search.zip}/${this.state.search.category}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(r => r.json()
        .then((places) => {
          console.log('places: ', places);

          const randomIndex = Math.floor(Math.random() * places.length);
          console.log(randomIndex);
          const place = places[randomIndex];
          console.log(place);


          this.setState({
            place: place,
            lat: place.geometry.location.lat,
            lng: place.geometry.location.lng
             });

          this.setState({ place });

        })
      )
      .catch((err) => console.log(err));
  }


  render() {
    return(
      <div>
        <Nav />

        <searchbarflex>

          <div id="search">
            <div id="zipBar" >
                <label name="zipCode" className="toggleHolderText "></label>
                <input className="zipInput" type="text" name="zip" onChange={this.handleChange.bind(this)} value={this.state.search.zip} maxLength="5" placeholder="ENTER ZIP NOW." />

            </div>

            <div className="toggleHolder" id="toggleBar" > <h3 className="toggleHolderText">Restaurant</h3>
              <label className="switch">
                <input type="checkbox" />
                <div className="slider round"></div>
              </label>
                <h3 className="toggleHolderText">Bars</h3>
            </div>
          </div>

          <div >
            <label name="submitButton" placeholder="DECID"></label>
            <input id="submitButton" type="submit" value="" onClick={this.findPlaces.bind(this)} />
          </div>

      </searchbarflex>

        <Place place={this.state.place} lat={this.state.lat} lng={this.state.lng} />
      </div>
    )
  }
}
