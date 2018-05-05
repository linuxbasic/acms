import React, { Component } from 'react'
import apollo from './apollo'
import { ApolloProvider } from 'react-apollo'
import { HashRouter, Route, Switch } from 'react-router-dom'
import OwnerAdminApp from './owner-admin/App'
import ClientPickupApp from './client-pickup/App'
import 'antd/dist/antd.css'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <ApolloProvider client={apollo}>
          <Switch>
            <Route path='/admin' component={OwnerAdminApp} />
            <Route path='/pickup/:containerId' component={ClientPickupApp} />x
            <Route path='/pickup' component={ClientPickupApp} />
          </Switch>
        </ApolloProvider>
      </HashRouter>
    );
  }
}

export default App;
