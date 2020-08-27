import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Import Styles
import './App.css';

//Import Other component
import CreateBook from './components/CreateBook';
import ShowBookList from './components/ShowBookList';
import ShowBookDetails from './components/ShowBookDetails';
import UpdateBookInfo from './components/UpdateBookInfo';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={ShowBookList} />
          <Route path="/create-book" component={CreateBook} />
          <Route path="/edit-book/:id" component={UpdateBookInfo} />
          <Route path="/show-book/:id" component={ShowBookDetails} />
        </div>
      </Router>
    );
  }
}

export default App;