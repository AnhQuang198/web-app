import React, { Component } from 'react';
import { Layout, Avatar, Popover, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { isLogout } from '../../../Base';
import { Link } from 'react-router-dom';
const { Header } = Layout;
class LayoutHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    logout = () => {
        isLogout();
    }

    render() {
        return (
            <Header className="header">
                <div className="logo">
                </div>
                <Popover placement="bottomRight" title={
                    <div>
                        <span>Signed in as</span>
                        <br />
                        <span>leequang198@gmail.com</span>
                    </div>
                } content={
                    <div>
                        <Button style={{ width: '100%', marginBottom: '10px' }}>
                            <Link to="/profile">Your profile</Link>
                        </Button>
                        <Button style={{ width: '100%' }} onClick={this.logout}>
                            Sign out
                        </Button>
                    </div>
                }>
                    <Avatar size={40} icon={<UserOutlined />} />
                </Popover>
            </Header>
        );
    }
}

export default LayoutHeader;