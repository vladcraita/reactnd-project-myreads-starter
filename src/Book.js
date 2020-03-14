import React, {Component} from "react";
import PropTypes from "prop-types";
import Bookmark from "./Bookmark";

class Book extends Component {
    static propType = {
        book: PropTypes.object.isRequired,
        books: PropTypes.array.isRequired,
        onUpdateShelf: PropTypes.func.isRequired
    };

    render() {
        const {book, books, onUpdateShelf} = this.props;
        const imageUrl = book.imageLinks ? book.imageLinks.thumbnail : "";

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageUrl})`}}></div>
                    <Bookmark
                        book={book}
                        books={books}
                        onUpdateShelf={onUpdateShelf}
                    />
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">
                    {
                        book.authors && book.authors.map((name, idx) => (
                            <span key={idx}>{name}</span>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default Book;
