import React, { Component } from 'react';

export default class Nav extends Component {
  constructor() {
    super()

    this.state = {
      jokeNotebook: [
        'Congratulate Jeff For Five Years At Lenwich',
        'Chris Will Have The Meatloaf',
        'Choose life. Choose a job. Choose a career. Choose a family. Choose a fucking big television, choose washing machines, cars, compact disc players and electrical tin openers. Choose good health, low cholesterol and dental insurance, but we got the restaurant covered.',
        'Deferring blame for questionable life and food choices',
        '#SheepLife',
        'At Least Get Out Of Bed Today',
        'Choose a nothing.',
        'Choice Not Included',
        'In Soviet America, Bodega Sandwich Chooses You',
        'We pick so you don\'t have to!',
        'Choice is for bots',
        'Don\'t think. Eat.',
        'Free will is not a choice.',
        'You Had Your Chance To Choose',
        'Because "I don\'t care" isn\'t a viable option',
        'CHOICE IS WASTED ON YOU.'
      ],
      tagline: ''
    }
  }

  componentDidMount() {
    const randomIndex = Math.floor(Math.random() * this.state.jokeNotebook.length);
    this.setState({ tagline: this.state.jokeNotebook[randomIndex]});
  }

  render() {
    return(
      <div>
        <div className="header">
            <h1>Decidr</h1>
        </div>

        <p>{this.state.tagline}</p>
      </div>
    )
  }

}
