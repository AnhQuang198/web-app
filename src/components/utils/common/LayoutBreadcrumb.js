import React, { Component } from 'react';
import { Breadcrumb } from 'antd';

class LayoutBreadcrumb extends Component {
    render() {
        return (
            <Breadcrumb style={{ margin: '15px 30px' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
        );
    }
}

export default LayoutBreadcrumb;