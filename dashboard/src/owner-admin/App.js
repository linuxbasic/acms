import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Navigation from './Navigation'
import ContainerList from './ContainerList'
const { Sider } = Layout;



class App extends Component {
    render() {
        return (
            <Layout className="layout">
                <Navigation />
                <Layout>
                    <Sider width={400} style={{ background: '#fff' }}>
                        <ContainerList />
                    </Sider>
                </Layout>
            </Layout>
        );
    }
}

export default App;
