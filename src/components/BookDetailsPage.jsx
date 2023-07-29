import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BookDetailsPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`https://seussology.info/api/books/${id}`)
      .then((response) => response.json())
      .then((data) => setBook(data));
  }, [id]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className="book-details-container">
      <img src={book.image} alt={book.title} className="details-image" />
      <div className="details">
        <h1>{book.title}</h1>
        <p>
          <em>By {book.author}</em>
        </p>
        <p>{book.description}</p>
      </div>
    </div>
  );
};

export default BookDetailsPage;
