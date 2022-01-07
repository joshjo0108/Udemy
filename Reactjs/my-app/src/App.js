import logo from './logo.svg';
import './App.css';
import React from 'react';
// import Item from './MyItem';


class FilmItemRow extends React.Component {
  render() {
    return(
      <li>
        {/* PASS DATA FROM ONE COMPONENT TO OTHER COMPONENTS */}
        <a href={this.props.url}>{this.props.url}</a>
      </li>
    )
  }
}

class StarWars extends React.Component {

  constructor() {
    super()
    this.state = {
    // SET AS DEFAULT
      name: null,
      height: null,
      homeworld: null,
      films: [],
      loadedCharacter: false
    }
  }

  getNewCharacter() {
    console.log("get new character")
    const randomNumber = Math.round( Math.random() * 82)
    const url = `https://swapi.dev/api/people/${randomNumber}/`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({
          name: data.name,
          height: data.height,
          homeworld: data.homeworld,
          films: data.films,
        // THIS GETS TRUE WHEN YOU CLICK ON THE BUTTON
          loadedCharacter: true
        })
      })
  }


  render() {
    const movies = this.state.films.map((film,i) => {
      return <FilmItemRow key={i} url={film} />
    })

    return (
      <div>
        {
          this.state.loadedCharacter &&
            <div>
              <h1>Name: {this.state.name}</h1>
              <p>{this.state.height} cm</p>
            {/* CURLY BRACES ARE ALWAYS JAVASCRIPT!!! */}
            {/* LINKING */}
              <p><a href={this.state.homeworld}>HomeWorld</a>: {this.state.homeworld}</p>
            {/* WITHOUT <ul></ul> */}
              {movies}
            </div>
        }
        
        <button 
          type="button" 
          onClick={() => this.getNewCharacter()} 
          className='btn'>
            Randomize Character
        </button>
      </div>
    )
  }
}


function App() {
  return (
    <div className="App">             //STRAIGHT XHTML WITHIN JAVASCRIPT
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />  
        {/* <p>
          LIVE CHANGE IN FRONT OF ME
        </p> */}
        {/* <Item name="Aaron"/> */}
        <StarWars />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// ALLOWS IT TO BE IMPORTABLE!!
export default App;
