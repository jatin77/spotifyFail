import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Consumer } from '../../context';
import SideNav from '../sidenav/SideNav';
import Search from '../search/Search';

class Landing extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const {
            navToggleClicked,
            displaySideNav,
            showSearchBar,
            showSearch
          } = value;
          return (
            <div className='landing-page '>
              <nav className='nav container'>
                <div className='nav-brand'>
                  <p>mixtape</p>
                </div>
                <ul onClick={showSearch} className='nav-links'>
                  <Link data-link='home' className='nav-link' to='/'>
                    Home
                  </Link>
                  <Link data-link='artists' className='nav-link' to='/artists'>
                    Artist
                  </Link>
                  <Link data-link='album' className='nav-link' to='/album'>
                    Album
                  </Link>
                  <Link data-link='tracks' className='nav-link' to='/tracks'>
                    Tracks
                  </Link>
                  <Link data-link='about' className='nav-link' to='/about'>
                    About
                  </Link>
                  <Link data-link='contact' className='nav-link' to='/contact'>
                    Contact
                  </Link>
                </ul>
                <div
                  className={
                    displaySideNav ? 'nav-toggle active' : 'nav-toggle'
                  }
                  onClick={navToggleClicked}
                >
                  <div className='nav-toggle-long' />
                  <div className='nav-toggle-short' />
                </div>
              </nav>
              {displaySideNav ? <SideNav /> : null}
              <div className='landing-content '>
                <div className='landing-text container '>
                  <p>Top Trends</p>
                  <h1>Best Music</h1>
                  <p>Global new releases </p>
                </div>
              </div>
              {showSearchBar ? <Search /> : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Landing;
