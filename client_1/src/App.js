import React, { Component } from 'react';
import './App.css';
import LinkList from './components/LinkList';


import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-boost';
import { ApolloLink } from 'apollo-link';
import { withClientState } from 'apollo-link-state';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const memCache = new InMemoryCache();

const httpLink = new HttpLink({uri: 'http://localhost:3000/graphql'});

const client = new ApolloClient({
  link: httpLink,
  cache: memCache
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <h1>Here you go, bitches</h1>
          <LinkList />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
