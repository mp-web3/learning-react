import React, { useState } from 'react';
import './SearchBar.css';
import Button from '../Button';

/*
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
*/

function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleTermChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const handleSearch = () => {
    props.onSearch(searchTerm);
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  }

  return (
    <div className='SearchBar'>
      <input 
      placeholder='Enter A Song, Album, or Artist'
      onChange={handleTermChange}
      onKeyDown={handleKeyPress}
      />
    
    </div>
  )

}

export default SearchBar;