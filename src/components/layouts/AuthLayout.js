import React, { Component } from 'react';
import { Layout } from 'antd';
import LayoutBreadcrumb from '../utils/common/LayoutBreadcrumb';
import LayoutHeader from '../utils/common/LayoutHeader';
import LayoutFooter from '../utils/common/LayoutFooter';
import Sidebar from '../utils/common/Sidebar';
const { Content } = Layout;

class AuthLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <React.Fragment>
                <Layout>
                    <LayoutHeader />
                    <Layout>
                        <Sidebar />
                        <Layout style={{ height: 'auto' }}>
                            <LayoutBreadcrumb />
                            <Content style={{ margin: '0px 16px 0' }}>
                                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                                    {this.props.children}
                                </div>
                            </Content>
                            <LayoutFooter />
                        </Layout>
                    </Layout>
                </Layout>
            </React.Fragment>
        );
    }
}

export default AuthLayout;