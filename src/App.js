import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import {Switch, Route} from "react-router-dom";
import Home from './components/Home';
import Search from './components/search';
import BookShelf from './components/BookShelf';
import FavoriteBook from './components/FavoriteBook';

class BooksApp extends React.Component {
   
  render() {
    return (
      <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Search" component={Search} />

      </Switch>
     </div>
    );
}
}


export default BooksApp;
