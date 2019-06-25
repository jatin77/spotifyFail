import React from 'react';
import { Link } from 'react-router-dom';
import { Consumer } from '../../context';
import logo from '../../style/images/iconfinder_Significon-LastFM_330379.png';
const SideNav = () => {
  return (
    <Consumer>
      {value => {
        const { navToggleClicked, showSearch } = value;
        return (
          <div className={navToggleClicked ? 'side-nav show' : 'side-nav'}>
            <ul onClick={showSearch} className='side-nav-links container'>
              <Link
                data-link='home'
                className='side-nav-link '
                onClick={navToggleClicked}
                to='/'
              >
                Home
              </Link>

              <Link
                data-link='artists'
                className='side-nav-link '
                to='/artists'
                onClick={navToggleClicked}
              >
                Artists
              </Link>
              <Link
                data-link='album'
                className='side-nav-link '
                to='/album'
                onClick={navToggleClicked}
              >
                Album
              </Link>
              <Link
                data-link='tracks'
                className='side-nav-link '
                to='/tracks'
                onClick={navToggleClicked}
              >
                Tracks
              </Link>
              <Link
                data-link='about'
                className='side-nav-link '
                to='/about'
                onClick={navToggleClicked}
              >
                About
              </Link>
            </ul>
            <div className='side-nav-logo '>
              <img src={logo} alt='' />
            </div>
          </div>
        );
      }}
    </Consumer>
  );
};

export default SideNav;
