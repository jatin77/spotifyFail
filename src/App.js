import React, { Component } from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import './style/style.css';
import Artists from './pages/artist/Artists';
import Album from './pages/album/Album';
import Tracks from './pages/tracks/Tracks';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';

class App extends Component {
  state = {
    root: 'http://ws.audioscrobbler.com/2.0/',
    api: '9d4b181067f960a86029d796064a2645'
  };

  componentDidMount = () => {
    const BASE_URL = 'https://api.spotify.com/v1/search?';
    const FETCH_URL =
      'https://api.spotify.com/v1/search?q=eminem&type=artist&limit=1';
    var accessToken =
      'Bearer' +
      'BQBWHlzmUsx4mGKTUE0DUDhP35ksPk6rjf3a4f6cz41usKC-T-I2E0PvG5V-EemCqgjjtCgKpnsBY5sZswqyFpXRit0jYGv6wJ1AzAawflYQuCUlbRKM9zoBuwu8XVFMJFlqiN86EVtBML3qht4PfxapsDdwlhv35TMcexfTMezekR9PI_dY&refresh_token=AQBMvXT1iJ7iT5ZzPwZ7J754g8DYMhTuFZIhsU1Pph5-Q3N6Ly-6JYWJ4tC_seGB2gOd5U3JeXRjbGd1XBEBqeQq7GYngtEKUFr-nUmcS7g5MqWEcXfNtjapg8RXqmVVGPvq5g';

    axios
      .get(FETCH_URL, { headers: { Authorization: accessToken } })
      .then(response => console.log(response))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/artists' component={Artists} />
          <Route path='/album' component={Album} />
          <Route path='/tracks' component={Tracks} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
