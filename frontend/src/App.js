import React, {Component} from 'react';
import BookList from './Components/BookList';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import AddBook from './Components/AddBook';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

class App extends Component {
  render(){
      return (
        <ApolloProvider client={client}>
          <div id='main'>
              <h1>GraphQL List</h1>
              <BookList/>
              <AddBook/>
          </div>
        </ApolloProvider>
      );
  }
}

export default App;
