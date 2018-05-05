import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { List, Avatar, Modal, Button, Affix, Input } from 'antd';


class ContainerList extends Component {
    state = {
        showCreateModal: false
    }
    showCreateModal = () => {
        this.setState({
            showCreateModal: true
        })
    }
    createNewContainer = (e) => {
        console.log(this.state.newContainerId)
        this.setState({
            showCreateModal: false,
        });
    }
    cancelNewContainer = (e) => {
        this.setState({
            showCreateModal: false,
        });
    }
    render() {
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
                        onClick={this.showCreateModal} />
                </Affix>
                <Modal
                    title='New Container'
                    visible={this.state.showCreateModal}
                    onOk={this.createNewContainer}
                    onCancel={this.cancelNewContainer}
                >
                    <Input addonBefore='Container ID'/>
                </Modal>
            </div>
        );
    }
}

export default ContainerList;
