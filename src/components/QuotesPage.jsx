// QuotesPage.jsx
import React, { useEffect, useState } from 'react';

const QuotesPage = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch('https://seussology.info/api/quotes/random/10')
      .then((response) => response.json())
      .then((data) => setQuotes(data));
  }, []);

  return (
    <div>
      <h2>Quotes</h2>
      <div className="quotes-container">
        {quotes.map((quote) => (
          <div key={quote.id} className="quote-card">
            <p>"{quote.text}"</p>
            <p style={{ fontStyle: 'italic' }}>
              - {quote.book.author} ({quote.book.title})
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuotesPage;
