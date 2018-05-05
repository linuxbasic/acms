import React, { Component } from 'react'
import { Query } from 'react-apollo'
import { Layout, Table } from 'antd'
import allClients from './queries/allClients'

const dataSource = [{
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street'
  }, {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street'
  }];
  
  const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  }, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  }];

class Clients extends Component {
    render() {
        return (
            <Layout>
                <Query query={allClients}>
                    {({ loading, error, data }) => {
                        if (loading) return <p>Loading...</p>
                        if (error) return <p>Error :(</p>
                        return <Table dataSource={dataSource} columns={columns} />
                    }}
                </Query>
            </Layout>
        );
    }
}

export default Clients
