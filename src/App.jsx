import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BooksPage from './components/BooksPage';
import BookDetailsPage from './components/BookDetailsPage';
import QuotesPage from './components/QuotesPage';
import Navbar from './components/Navbar';
import reactLogo from './assets/react.svg';

import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <h1 className="page-title">Seuss Treasury</h1>
        <Navbar />
        <Switch>
          <Route path="/books/:id" component={BookDetailsPage} />
          <Route path="/books" component={BooksPage} />
          <Route path="/quotes" component={QuotesPage} />
          <Route path="/" component={BooksPage} /> {/* Render BooksPage as the default route */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
