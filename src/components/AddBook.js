// src/components/AddBook.js
import React, { useState } from 'react';
import axios from 'axios';

const AddBook = () => {
  const [bookName, setBookName] = useState('');
  const [copies, setCopies] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Send a POST request to the API to add a book
    axios.post('http://localhost:5157/api/books', { bookName, copies })
      .then(response => {
        setMessage('Book added successfully!');
        setBookName('');
        setCopies('');
      })
      .catch(error => {
        setMessage('Error adding book. Please try again.');
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Add a New Book</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="bookName">Book Name</label>
          <input
            type="text"
            id="bookName"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="copies">Number of Copies</label>
          <input
            type="number"
            id="copies"
            value={copies}
            onChange={(e) => setCopies(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Book</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddBook;
