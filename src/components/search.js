import React, { Component } from 'react';
import {Link} from "react-router-dom"
import {search} from "../BooksAPI";

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    }
  
  }
  handleChange = async e => {
    try {
   const query = e.target.value
   const results = await search(query)
   console.log(results)
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
              <ol className="books-grid"></ol>
            </div>
          </div>
        )
    }
}

export default Search;
