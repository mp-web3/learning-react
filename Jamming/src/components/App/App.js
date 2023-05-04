import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './App.css';
import SearchResults from '../SearchResults';
import Playlist from '../Playlist';
import testTracks from '../../testData';

function App() {
  // playlistName and setPlaylistName are a pair of state variables created using useState().
  // playlistName is the current state value, and setPlaylistName is the function to update it.
  // 'My Playlist' is the initial state value.
  const [playlistName, setPlaylistName] = useState('My Playlist');

  // playlistTracks and setPlaylistTracks are another pair of state variables created using useState().
  // playlistTracks is the current state value, an array that will contain all of the selected Tracks, and setPlaylistTracks is the function to update it.
  // [] is the initial state value.
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const addTrack = (track) => {
    // The expression [...playlistTracks, track] creates a new array that contains all the elements of
    // the existing playlistTracks array, followed by the new track object.
    if (!playlistTracks.includes(track)) {
      setPlaylistTracks([...playlistTracks, track]);
    }
  }

  // removeTrack is a function that accepts a track object and removes it from the playlistTracks state variable.
  const removeTrack = (track) => {
    // The expression playlistTracks.filter() creates a new array that contains only the elements of the
    // existing playlistTracks array that pass the filter condition (i.e. tracks whose id is not equal to track.id).
    const updatedTracks = playlistTracks.filter((t) => t.id !== track.id);
    setPlaylistTracks(updatedTracks);
  }

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  }

	return (
      <div className='App'>
        < SearchBar />
        <div>
          < SearchResults searchResults={testTracks} />
        </div>
      </div>
    );
};

export default App;
