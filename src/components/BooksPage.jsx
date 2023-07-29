import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BooksPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://seussology.info/api/books')
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="container">
      <h1 className="page-title">Seuss Treasury</h1>
      <div className="books-container">
        {books.map((book) => (
          <Link to={`/books/${book.id}`} className="book-link" key={book.id}>
            <div className="book-item">
              <img src={book.image} alt={book.title} className="book-image" />
              <p className="book-title">{book.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BooksPage;
