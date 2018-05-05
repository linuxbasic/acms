import React, { Component } from 'react'
import { Query, Mutation } from 'react-apollo'
import { Layout, Table, Input, Card } from 'antd'
import allClients from './queries/allClients'
import registerClient from './mutations/registerClient'
import { Button } from 'antd'

const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
}, {
    title: 'ClientId',
    dataIndex: 'clientId',
    key: 'clientId',
}, {
    title: 'PIN Code',
    dataIndex: 'pin',
    key: 'pin',
}];

class Clients extends Component {
    render() {
        let name, clientId
        return (
            <Layout>
                <Mutation mutation={registerClient}>
                    {((registerClient, { data }) => (
                        <Card title='New Client'>
                            <Input.Group compact>
                                <Input ref={input => name = input} addonBefore='Name' />
                                <Input ref={input => clientId = input} addonBefore='Client ID' />
                            </Input.Group>
                            <Button type='primary' icon='plus' onClick={() => {
                                registerClient({
                                    variables: {
                                        clientId: clientId.input.value, 
                                        name: name.input.value},
                                    refetchQueries: [{
                                        query: allClients
                                    }]
                                })
                                name.input.value = ''
                                clientId.input.value = ''
                            }}>
                                Add Client
                            </Button>
                        </Card>
                    ))}
                </Mutation>
                <Query query={allClients}>
                    {({ loading, error, data }) => {
                        if (loading) return <p>Loading...</p>
                        if (error) return <p>Error :(</p>
                        return <Table dataSource={data.allClients.map(client => ({
                            key: client.clientId,
                            name: client.name,
                            clientId: client.clientId,
                            pin: client.clientPin
                        }))} columns={columns} />
                    }}
                </Query>
            </Layout>
        );
    }
}

export default Clients
