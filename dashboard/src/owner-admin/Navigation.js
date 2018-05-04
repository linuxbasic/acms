import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
const { Header } = Layout;

class Navigation extends Component {
    render() {
        return (
            <Header>
                <div className="logo" />
                <Menu theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['containers']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="containers">Containers</Menu.Item>
                    <Menu.Item key="orders">Orders</Menu.Item>
                    <Menu.Item key="clients">Clients</Menu.Item>
                </Menu>
            </Header>
        );
    }
}

export default Navigation;
