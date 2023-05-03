import React from 'react';
import './SearchBar.css';
import Button from '../Button';

class SearchBar extends React.Component {
  render() {
    return (
      <div className='SearchBar'>
        <input placeholder='Enter a Song, Album, or Artist' />
        <Button text='SEARCHING'/>
      </div>
    );
  }
}

export default SearchBar;