import React from 'react';
import { Consumer } from '../../context';

const Countdown = () => {
  return (
    <Consumer>
      {value => {
        const { secLeft, minLeft, hrsLeft, daysLeft } = value;
        return (
          <div className='countdown container'>
            <div className='countdown-about'>
              <p>NEXT BIG SHOW</p>
              <h1>Coachella Festival</h1>
              <p>We are one</p>
            </div>
            <div className='countdown-timer'>
              <div>
                <p>After</p>
              </div>
              <div className='counter'>
                <div className='days'>
                  <h1>{daysLeft}</h1>
                  <p>Days</p>
                </div>
                <div className='hrs'>
                  <h1>{hrsLeft}</h1>
                  <p>Hrs</p>
                </div>
                <div className='min'>
                  <h1>{minLeft}</h1>
                  <p>Mns</p>
                </div>
                <div className='secs'>
                  <h1>{secLeft}</h1>
                  <p>Sec</p>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </Consumer>
  );
};

export default Countdown;
