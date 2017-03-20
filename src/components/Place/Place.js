import React, { Component } from 'react';
import Comment from './comment';
const mapKey = process.env.key;


class Place extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userComment: ''
    }

    if(this.props.place.comment) {
      this.setState({ userComment: this.props.place.comment });
    }
  }

  price(n) {
    let money = "";
     if (!n) {
        money = "unavailable"
      } else {
        for (var i=0; i < n; i++){
          money += "$";
        }
      }
    return money;
  }


  handleSubmit(event){
    event.preventDefault();

    fetch(`http://localhost:8000/restaurants/${localStorage.user_id}`, {
      method: 'POST',
      body: JSON.stringify({
        restaurant: this.props.place,
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(() => {

      console.log('something has been favorited')
    })
    .catch((err) => {
      console.log(err);
    })
  }


  render() {
    console.log('PROPS: ', this.props)
    console.log('STATE:', this.state)

    if (this.props.lat) {

      const name = this.props.place.name.replace(/&/g, '%26');
      console.log(name);

      return (
      <div>

  <div id="container" className="flexChild columnParent trackSeven">

    <div id="columnChild46481" className="flexChild restaurantName">
        <h1 >{this.props.place.name}</h1>
    </div>

    <div id="columnChild59480" className="flexChild rowParent">
      <div id="rowChild31757" className="flexChild columnParent">
        <div id="columnChild64584" className="flexChild labelText"><h1 className="backgroundColors" className="labelText">{this.props.place.formatted_address}</h1></div>


        <div id="columnChild74073" className="flexChild columnParent">
          <div id="columnChild67924" className="flexChild rowParent">
            <div id="rowChild70892" className="flexChild labelText priceRating priceRatingFixed" ><h2>Rating: {this.props.place.rating}/5</h2></div>

            <div id="rowChild27798" className="flexChild labelText priceRating priceRatingFixed"><h2>Price: {this.price(this.props.place.price_level)}</h2></div>

            <Comment place={this.props.place} />
          <favoritebutton className="offsetClass" >
          <button id="modalTrigger" className="shimmer"  onClick={this.handleSubmit.bind(this)}>
            Favorite
          </button>
          </favoritebutton>



          </div>
        </div>
      </div>

      <div id="rowChild78008" className="flexChild">
          <iframe className="mapcontain"
          width="350px"
          height="350px"
          frameBorder="0"
          src={`https://www.google.com/maps/embed/v1/place?key=${mapKey}&q=${this.props.place.name}${this.props.place.formatted_address}&center=${this.props.lat},${this.props.lng}`} allowFullScreen>
        </iframe>
         <div>


        </div>
    </div>
  </div>



 </div>
</div>
      )
    } else {
      return(<div></div>)
    }
  }
}

export default Place;
