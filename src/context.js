import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
  state = {
    displaySideNav: false,
    showSearchBar: false,
    placeholder: '',
    secLeft: '',
    minLeft: '',
    hrsLeft: '',
    daysLeft: ''
  };

  navToggleClicked = e => {
    this.setState(prevState => {
      return {
        ...this.state,
        displaySideNav: !prevState.displaySideNav
      };
    });
  };

  showSearch = e => {
    if (e.target.getAttribute('data-link')) {
      switch (e.target.getAttribute('data-link')) {
        case 'artists':
          this.setState(prevState => {
            return {
              ...this.state,
              placeholder: 'Search artists',
              showSearchBar: true,
              displaySideNav: false
            };
          });
          break;
        case 'album':
          this.setState(prevState => {
            return {
              ...this.state,
              placeholder: 'Search album',
              showSearchBar: true,
              displaySideNav: false
            };
          });
          break;
        case 'tracks':
          this.setState(prevState => {
            return {
              ...this.state,
              placeholder: 'Search tracks',
              showSearchBar: true,
              displaySideNav: false
            };
          });
          break;
        case 'about':
          this.setState(prevState => {
            return {
              ...this.state,
              placeholder: 'Search about',
              showSearchBar: false,
              displaySideNav: false
            };
          });
          break;
        case 'home':
          this.setState(prevState => {
            return {
              ...this.state,
              placeholder: '',
              showSearchBar: false,
              displaySideNav: false
            };
          });
          break;
        default:
          this.setState(() => {
            return {
              ...this.state
            };
          });
      }
    }
  };
  componentDidMount = () => {
    //calculate time

    setInterval(() => {
      this.timeLeft();
    }, 1000);
  };

  //calculate time
  timeLeft = () => {
    let future_date = '04/12/2020';
    let t = Date.parse(future_date) - Date.parse(new Date());
    let secLeft = Math.floor((t / 1000) % 60);
    let minLeft = Math.floor((t / 1000 / 60) % 60);
    let hrsLeft = Math.floor((t / (1000 * 60 * 60)) % 24);
    let daysLeft = Math.floor(t / (1000 * 60 * 60 * 24));

    //check for double digit
    secLeft = this.check(secLeft);
    minLeft = this.check(minLeft);
    hrsLeft = this.check(hrsLeft);
    daysLeft = this.check(daysLeft);
    this.setState(() => {
      return {
        secLeft,
        minLeft,
        hrsLeft,
        daysLeft
      };
    });
  };
  //check Unit
  check(unit) {
    if (unit.toString().length < 2) {
      unit = '0' + unit;
    }
    return unit;
  }

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          navToggleClicked: this.navToggleClicked,
          showSearch: this.showSearch
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
