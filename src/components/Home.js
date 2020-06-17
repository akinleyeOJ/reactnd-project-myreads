import React, { Component } from 'react'
import BookShelf from './components/BookShelf';
import FavoriteBook from './components/FavoriteBook';

export class Home extends Component {
    render() {
        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <BookShelf />
            </div>
            <FavoriteBook />
          </div>
        )
    }
}

export default Home
