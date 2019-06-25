import React from 'react';
import Landing from '../../components/landing/Landing';
import Countdown from '../../components/countdown/Countdown';
import Footer from '../../components/footer/Footer';
import { Consumer } from '../../context';

const Home = () => {
  return (
    <Consumer>
      {value => {
        return (
          <React.Fragment>
            <Landing />
            <Countdown />
            <Footer />
          </React.Fragment>
        );
      }}
    </Consumer>
  );
};

export default Home;
