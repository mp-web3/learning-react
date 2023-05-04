import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './App.css';
import SearchResults from '../SearchResults';
import testTracks from '../../testData';

function App() {

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
