import React from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import './index.css';

function App() {
  return (
    <>
      <h1 className='text-red-500'>TO-DO Using  Redux Toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
