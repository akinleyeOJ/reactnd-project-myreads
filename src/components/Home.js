import React, { Component } from 'react'
import BookShelf from './BookShelf';
import FavoriteBook from './FavoriteBook';
import { getAll } from "../BooksAPI";

export class Home extends Component {
    async componentDidMount(){
     try {
      const books = await getAll(); 
      console.log(books);
        } catch(error) {
        console.log(error)
       }
    }
    render() {
        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <BookShelf title="Currently Reading"/>
              <BookShelf title="Want To Read"/>
              <BookShelf title="Read"/>
            </div>
            <FavoriteBook />
          </div>
        )
    }
}

export default Home
