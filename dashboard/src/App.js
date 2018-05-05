import React, { Component } from 'react'
import apollo from './apollo'
import { ApolloProvider } from 'react-apollo'
import OwnerAdminApp from './owner-admin/App'

class App extends Component {
  render() {
    return (
      <ApolloProvider client={apollo}>
        <OwnerAdminApp />
      </ApolloProvider>
    );
  }
}

export default App;
