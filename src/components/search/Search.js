import React from 'react';
import { Consumer } from '../../context';

const Search = () => {
  return (
    <Consumer>
      {value => {
        const { placeholder } = value;

        return (
          <div className='search-bar'>
            <form onSubmit=''>
              <input type='text' placeholder={placeholder} />
              <button>
                <i className='fas fa-search' />
              </button>
            </form>
          </div>
        );
      }}
    </Consumer>
  );
};

export default Search;
