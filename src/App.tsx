import './App.css';
import React from 'react';
import TodoList from './components/TodoList/TodoList';
import {Route, Routes} from 'react-router-dom';
import TodoForm from './components/TodoForm/TodoForm';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
            <Route path={'/'} element={<TodoList/>}/>
            <Route path={'/form'} element={<TodoForm/>}/>
        </Routes>
    </div>
  )
}

export default App
