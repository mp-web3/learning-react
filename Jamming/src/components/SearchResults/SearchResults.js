import React from 'react';
import TrackList from './TrackList';
import './SearchResults.css';


class SearchResults extends React.Component {
  render() {
    return (
      <div>
        <h2>Results</h2>
        <TrackList tracks={this.props.searchResults} isRemoval={false} onAdd={this.props.onAdd} onRemove={this.props.onRemove} />

      </div>
    );
  }
}

export const Default = () => <SearchResults />;