import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './App.css';
import SearchResults from '../SearchResults';

function App() {

	return (
      <div className='App'>
        < SearchBar />
        <div>
          < SearchResults />
        </div>
      </div>
    );
};

export default App;
