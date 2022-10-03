import React, { Component } from 'react';
import { Layout } from 'antd';
import LayoutBreadcrumb from '../utils/common/LayoutBreadcrumb';
import LayoutHeader from '../utils/common/LayoutHeader';
import LayoutFooter from '../utils/common/LayoutFooter';
import Sidebar from '../utils/common/Sidebar';
import { callAPIRefreshToken, saveTokenAuth, isLogout, getTimeExpire, setTimeExpire } from '../../Base';
const { Content } = Layout;

class AuthLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    //run any 1 minute to check expired time of access token with current time. If its diffrent 30 second, call API to generate new access token
    componentDidMount() {
        const call = setInterval(() => {
            let currentTime = Date.now();
            let timeCall = parseInt(getTimeExpire()) - currentTime;
            if (timeCall <= 30000) {
                console.log("Step 3");
                callAPIRefreshToken().then(result => {
                    console.log(result.status); 
                    if (result.status === 200) {
                        saveTokenAuth(result.data.token, result.data.refreshToken);
                        setTimeExpire(result.data.expired);
                    } else {
                        isLogout();
                        clearInterval(call);
                    }
                });
            }
        }, 60000)
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