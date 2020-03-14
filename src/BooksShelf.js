import React, {Component} from "react";
import Book from "./Book";

class BooksShelf extends Component {
    render() {
        const { title, books, onUpdateShelf } = this.props;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {
                            books && books.map((book, idx) => (
                                <li key={idx}>
                                    <Book
                                        book={book}
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
