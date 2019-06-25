import React from 'react';

const Facts = () => {
  return (
    <div className='container facts'>
      <div className='facts-content'>
        <div className='content-facts-head'>
          <h1>Some Facts</h1>
        </div>
        <div className='content-facts-block'>
          <div className='facts-block'>
            <h1>Drake</h1>
            <p>Top Male Artist</p>
          </div>
          <div className='facts-block'>
            <h1>Ariana Grande</h1>
            <p>Top Female Artist</p>
          </div>
          <div className='facts-block'>
            <h1>Juice Wrld</h1>
            <p>Top New Artist</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;
