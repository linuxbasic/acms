import React, { Component } from 'react'
import { Layout } from 'antd'
import Navigation from './Navigation'
import Containers from './Containers'
import Clients from './Clients'
import { Route, Switch, Redirect } from 'react-router-dom'


class App extends Component {
    render() {
        return (
            <Layout className="layout">
                <Navigation />
                <Switch>
                    <Route path='/admin/containers' component={Containers} />
                    <Route path='/admin/clients' component={Clients} />
                    <Route path='/admin/orders' component={Containers} />
                    <Route path='/admin'>
                        <Redirect to='/admin/containers' />
                    </Route>
                </Switch>
            </Layout>
        );
    }
}

export default App;
