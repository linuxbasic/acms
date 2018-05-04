import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { List, Avatar, Modal, Button, Affix, Input } from 'antd';

const data = [
    {
        id: 'c0741c57-4a0a-4392-9b96-bde73741c64f',
        location: 'Containerstrasse 5, 1234 Hinterbipp'
    },
    {
        id: 'c576e50b-c521-453c-b379-00c018e1bf28',
        location: 'Containerstrasse 5, 1234 Hinterbipp'
    },
    {
        id: '694102aa-597e-4bca-97cd-ffc61040adb7',
        location: 'Containerstrasse 5, 1234 Hinterbipp'
    },
    {
        id: '6257ea9e-9dc0-4a19-97a0-13b3cf0cdd77',
        location: 'Containerstrasse 5, 1234 Hinterbipp'
    },
    {
        id: 'c576e50b-c521-453c-b379-00c018e1bf28',
        location: 'Containerstrasse 5, 1234 Hinterbipp'
    },
    {
        id: '694102aa-597e-4bca-97cd-ffc61040adb7',
        location: 'Containerstrasse 5, 1234 Hinterbipp'
    },
    {
        id: '6257ea9e-9dc0-4a19-97a0-13b3cf0cdd77',
        location: 'Containerstrasse 5, 1234 Hinterbipp'
    },
    {
        id: 'c576e50b-c521-453c-b379-00c018e1bf28',
        location: 'Containerstrasse 5, 1234 Hinterbipp'
    },
    {
        id: '694102aa-597e-4bca-97cd-ffc61040adb7',
        location: 'Containerstrasse 5, 1234 Hinterbipp'
    },
    {
        id: '6257ea9e-9dc0-4a19-97a0-13b3cf0cdd77',
        location: 'Containerstrasse 5, 1234 Hinterbipp'
    },
];


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
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar style={{ backgroundColor: 'red' }} size='large' />}
                                title={item.id}
                                description={item.location}
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
