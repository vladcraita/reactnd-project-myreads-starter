import React, {Component} from "react";
import Book from "./Book";
import PropTypes from "prop-types";

class BooksShelf extends Component {
    static propType = {
        book: PropTypes.object.isRequired,
        books: PropTypes.array.isRequired,
        onUpdateShelf: PropTypes.func.isRequired
    };

    render() {
        const { title, books, onUpdateShelf } = this.props;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {
                            books && books.map(book => (
                                <li key={book.id}>
                                    <Book
                                        book={book}
                                        books={books}
                                        onUpdateShelf={onUpdateShelf}
                                    />
                                </li>
                            ))
                        }
                    </ol>
                </div>
            </div>
        );
    }
}

export default BooksShelf;
