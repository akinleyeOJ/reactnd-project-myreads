import React, { Component } from 'react';
import {Link} from "react-router-dom"
import {search} from "../BooksAPI";
import Book from "./Book";
import { getAll } from "../BooksAPI";

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      books: []
    };
  
  }
  async componentDidMount(){
    try {
     const books = await getAll(); 
       this.props.addBooks(books);
       } catch(error) {
       console.log(error)
      }
   }
  handleChange = async e => {
    try {
   const query = e.target.value
   this.setState({query})
   if(query.trim()){
   
   const results = await search(query);
   if(results.error){
    this.setState({books: []})
  } else {
    this.setState({books: results});
  }
}else{
  this.setState({books: [] })
}
    }catch(error) {
      console.log(error)
  }
}

    render() {
        return (
            <div className="search-books">
            <div className="search-books-bar">
            <Link to="/"> <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button> </Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" onChange={this.handleChange} value={this.state.query}/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                 {this.state.books.length > 0 && this.state.books.map(book => {

        const foundShelf = this.props.books.find(searchBook => searchBook.id === book.id);
        
        if(foundShelf) {
                    book.shelf = foundShelf.shelf;
                  } else {
                    book.shelf = "none";
                  }
                 
                    return <Book key={book.id} {...book} moveBook={this.props.moveBook}/>
                  })
                 }
                 {this.state.books.length === 0 && (
                   <h1>Enter Correct Title </h1>
                 )}
              </ol>
            </div>
          </div>
        )
    }
}

export default Search;
