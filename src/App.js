import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route, Link } from 'react-router-dom';
import Search from "./Search";
import BooksList from "./BooksList";

class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentDidMount() {
      // get all books from server
      BooksAPI.getAll()
          .then(books => {
              this.setState({books});
          });
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
        .then(response => {
            this.setState(currentState => {
                books: currentState.books
                    .filter(b => b.id !== book.id)
                    .concat(book)
            });
            book.shelf = shelf;

        });
  };

    render() {
        return (
            <div className="app">
                <Route path="/search" render={() => (
                    <Search/>
                )}
                />
                <Route exact path="/"
                       render={() => (
                           <BooksList
                               books={this.state.books}
                               onUpdateShelf={this.updateShelf}
                           />
                       )}
                />
            </div>
        )
    }
}

export default BooksApp
