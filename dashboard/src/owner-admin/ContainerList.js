import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import registerContainer from './mutations/registerContainer'
import allContainers from './queries/allContainers'
import 'antd/dist/antd.css'
import { List, Avatar, Modal, Button, Affix, Input } from 'antd'


class ContainerList extends Component {
    state = {
        showCreateModal: false
    }
    render() {
        let container, tracker
        const cancelNewContainer = () => {
            this.setState({
                showCreateModal: false,
            })
            container.input.value = ''
            tracker.input.value = ''
        }
        const showCreateModal = () => {
            this.setState({
                showCreateModal: true
            })
        }
        return (
            <div>
                <List
                    itemLayout="horizontal"
                    dataSource={this.props.containers}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar style={{ backgroundColor: 'red' }} size='large' />}
                                title={item.containerId}
                                description='Containerstrasse 5, 1234 Hinterbipp'
                            />
                        </List.Item>
                    )}
                />
                <Affix offsetBottom={0}>
                    <Button
                        type='primary'
                        shape='circle'
                        icon='plus'
                        size='large'
                        onClick={showCreateModal} />
                </Affix>
                <Mutation mutation={registerContainer}>
                    {
                        ((addTodo, { data }) => (<Modal
                            title='New Container'
                            visible={this.state.showCreateModal}
                            onOk={(e) => {
                                e.preventDefault()
                                const containerId = container.input.value
                                const trackerId = tracker.input.value
                                addTodo({ 
                                    variables: { containerId, trackerId },
                                    refetchQueries: [{
                                        query: allContainers
                                      }]
                                 })
                                cancelNewContainer()
                            }}
                            onCancel={cancelNewContainer}>
                            <Input ref={(input) => container = input} addonBefore='Container ID' />
                            <Input ref={(input) => tracker = input} addonBefore='Tracker ID' />
                        </Modal>))
                    }
                </Mutation>
            </div>
        );
    }
}

export default ContainerList;
