import React, { Component } from 'react'
import { Query } from 'react-apollo'
import 'antd/dist/antd.css'
import { Layout } from 'antd'
import Navigation from './Navigation'
import ContainerList from './ContainerList'
import allContainers from './queries/allContainers'

import Map from '../map'

const { Sider, Content } = Layout;


class App extends Component {
    render() {
        return (
            <Layout className="layout">
                <Navigation />
                <Layout>
                    <Sider width='30vw' style={{ background: '#fff' }}>
                        <Query query={allContainers}>
                            {({ loading, error, data }) => {
                                if (loading) return <p>Loading...</p>
                                if (error) return <p>Error :(</p>

                                return <ContainerList containers={data.allContainers} />
                            }}
                        </Query>
                    </Sider>
                    <Content>
                        <Query query={allContainers}>
                            {({ loading, error, data }) => {
                                if (loading) return <p>Loading...</p>
                                if (error) return <p>Error :(</p>

                                return (<Map containers={data.allContainers} />)
                            }}
                        </Query>
                    </Content>
                    <Content>
                        <h1>Hallo</h1>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default App;
