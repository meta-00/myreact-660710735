

import React from 'react';
import JSXExamples from './components/JSXExamples';
import TodoList from './components/TodoList' ;
import UserCard from './components/UserCard';

import './App.css';

function App() {
    return (
        <div className="App">
            <JSXExamples/>
      <UserCard/>
      <TodoList/>
        </div>
    );
}


export default App;
