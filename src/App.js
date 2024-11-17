// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ViewBooks from './components/ViewBooks';
import AddBook from './components/AddBook';

const App = () => {
  return (
    <Router>
      <div>
        <h1>First Read Library</h1>
        <nav>
          <ul>
            <li>
              <a href="/">View Books</a>
            </li>
            <li>
              <a href="/add">Add Book</a>
            </li>
          </ul>
        </nav>
        
        <Routes>
          <Route path="/" element={<ViewBooks />} />
          <Route path="/add" element={<AddBook />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
