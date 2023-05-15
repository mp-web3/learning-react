import React from 'react';
import TrackList from './TrackList';
import './SearchResults.css';


class SearchResults extends React.Component {
  render() {

    const {searchResults, onAdd, onRemove } = this.props;

    return (
      <div className='SearchResults'>
        <h2>Results</h2>
        <TrackList 
        tracks={searchResults} 
        isRemoval={false} 
        onAdd={onAdd} 
        onRemove={onRemove} />

      </div>
    );
  }
}

export default SearchResults;