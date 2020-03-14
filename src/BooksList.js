import React, { Component } from "react";
import {Link} from "react-router-dom";
import BooksShelf from "./BooksShelf";
import PropTypes from 'prop-types';

class BooksList extends Component {
    static propType = {
        books: PropTypes.array.isRequired,
        onUpdateShelf: PropTypes.func.isRequired
    };

    render() {
        const { books, onUpdateShelf } = this.props;

        const shelfs = {
            currentlyReading: "Currently reading",
            wantToRead: "Want to read",
            read: "Read"
        };

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {
                            Object.entries(shelfs).map(shelf => (
                                <div key={shelf[0]}>
                                    <BooksShelf
                                        title={shelf[1]}
                                        books={books.filter(book => book.shelf === shelf[0])}
                                        onUpdateShelf={onUpdateShelf}
                                    />
                                </div>

                            ))
                        }
                    </div>
                </div>
                <div className="open-search">
                    <Link
                        to="/search"
                        className="open-search">Add Book</Link>
                </div>
            </div>
        );
    }
}

export default BooksList;
