import React, {Component} from "react";
import * as BooksAPI from './BooksAPI';
import {Link} from 'react-router-dom';
import Book from "./Book";
import PropTypes from "prop-types";

class Search extends Component {
    static propType = {
        books: PropTypes.array.isRequired,
        onUpdateShelf: PropTypes.func.isRequired
    };

    state = {
        query: '',
        newBooks: []
    };

    searchBooks = (query) => {
        this.setState({query: query});
        if (query) {
            BooksAPI.search(query.trim())
                .then(books =>
                    this.setState({
                        newBooks: books.length > 0 ? books : []
                    })
                );
        } else {
            this.setState({newBooks: []})
        }
    };

    render() {
        const {books, onUpdateShelf} = this.props;
        const {query, newBooks} = this.state;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={query}
                            onChange={event => this.searchBooks(event.target.value)}
                        />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {
                            newBooks.length > 0 ?
                                newBooks.map((book, idx) => (
                                    <li key={idx}>
                                        <Book
                                            book={book}
                                            books={books}
                                            onUpdateShelf={onUpdateShelf}
                                        />
                                    </li>
                                ))
                                :
                                query && (<li>No results, try another title/author. </li>)
                        }
                    </ol>
                </div>
            </div>
        );
    }
}

export default Search;
