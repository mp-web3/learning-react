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
  const [term, setTerm] = useState('')

  const handleTermChange = (event) => {
    setTerm(event.target.value);
  }

  const search = () => {
    props.onSearch(term);
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      search();
    }
  }

  return (
    <div className='SearchBar'>
      <input 
      placeholder='Enter A Song, Album, or Artist'
      onChange={handleTermChange}
      onKeyDown={handleKeyDown}
      />
      <button className='SearchButton' onClick={search}>Search</button>
    </div>
  )

}

export default SearchBar;