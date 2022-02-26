import React, { Component } from 'react';
import { Layout } from 'antd';
const { Header } = Layout;

class LayoutHeader extends Component {
    render() {
        return (
            <Header className="header">
                <div className="logo" />
            </Header>
        );
    }
}

export default LayoutHeader;