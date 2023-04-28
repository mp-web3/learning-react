import React from 'react';
import './App.css';
import {comments} from './commentData';
import Card from './Card'

/* In the App component body, map over the comments array with the 
argument named comment and return an instance of the Card component.
For each component, give it an attribute named commentObject and 
the value {comment}. */

function App() {
  return (
    <div className="App">
      {comments.map(comment => (
        <Card commentObject={comment} key={comment.id}/>
      ))}
    </div>
  );
}

export default App;
