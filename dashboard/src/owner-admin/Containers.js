import React, { Component } from 'react'
import { Query } from 'react-apollo'
import { Layout } from 'antd'
import ContainerList from './ContainerList'
import allContainers from './queries/allContainers'

import ContainerMap from './ContainerMap'

const { Sider, Content } = Layout;


class Containers extends Component {
    render() {
        return (
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
                    <Query query={allContainers} pollInterval={30 * 1000}>
                        {({ loading, error, data }) => {
                            if (loading) return <p>Loading...</p>
                            if (error) return <p>Error :(</p>

                            return (<ContainerMap containers={data.allContainers} />)
                        }}
                    </Query>
                </Content>
            </Layout>
        );
    }
}

export default Containers
