import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export class FavoriteBook extends Component {
    render() {
        return (
            <div className="open-search">
            <Link to="/search"><button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </Link>
          </div>
        )
    }
}

export default FavoriteBook
