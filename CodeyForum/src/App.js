import React from 'react';
import logo from './logo.svg';
import './App.css';
import {comments} from './commentData';
import Body from './Body'

function App() {
  return (
    <div className="App">
      <Body comment={comments[0].comment}/>
    </div>
  );
}

export default App;
