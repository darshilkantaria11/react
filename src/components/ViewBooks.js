// src/components/ViewBooks.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewBooks = () => {
  const [books, setBooks] = useState([]);

  // Fetch books from the API
  useEffect(() => {
    axios.get('http://localhost:5157/api/books') // Replace with your API URL
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the books!', error);
      });
  }, []);

  return (
    <div>
      <h1 className='bg-red-500 text-xl'>Books in the Library</h1>
      <ul>
        {books.map((book) => (
          <li key={book.bookId}>
            {book.bookName} - {book.copies} copies
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewBooks;
