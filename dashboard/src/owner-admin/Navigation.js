import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import 'antd/dist/antd.css';
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
                    <Menu.Item key="containers"><Link to='/admin/containers'>Containers</Link></Menu.Item>
                    <Menu.Item key="orders"><Link to='/admin/orders'>Orders</Link></Menu.Item>
                    <Menu.Item key="clients"><Link to='/admin/clients'>Clients</Link></Menu.Item>
                </Menu>
            </Header>
        );
    }
}

export default Navigation;
