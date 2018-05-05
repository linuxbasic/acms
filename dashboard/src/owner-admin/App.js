import React, { Component } from 'react'
import { Query } from 'react-apollo'
import 'antd/dist/antd.css'
import { Layout } from 'antd'
import Navigation from './Navigation'
import ContainerList from './ContainerList'
import allContainers from './queries/allContainers'
const { Sider } = Layout;

class App extends Component {
    render() {
        return (
            <Layout className="layout">
                <Navigation />
                <Layout>
                    <Sider width={400} style={{ background: '#fff' }}>
                        <Query query={allContainers}>
                            {({ loading, error, data }) => {
                                if (loading) return <p>Loading...</p>
                                if (error) return <p>Error :(</p>

                                return <ContainerList containers={data.allContainers} />
                            }}
                        </Query>
                    </Sider>
                    
                </Layout>
            </Layout>
        );
    }
}

export default App;
