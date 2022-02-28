import React, { Component } from 'react';
import { Layout, Avatar, Popover, Button } from 'antd';
import { isLogout, authorizedGET } from '../../../Base';
import { Link } from 'react-router-dom';
const { Header } = Layout;
class LayoutHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        };
    }

    componentDidMount() {
        this.loadUser();
    }

    loadUser = async () => {
        try {
            const reqUrl = "/v1/user/me";
            const result = await authorizedGET(reqUrl);
            if (result.status === 200) {
                let email = result.data.email;
                this.setState({email: email});
            }
        } catch (e) {
            console.log(e);
        }
    }

    logout = async () => {
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
                        <span>{this.state.email != null ? this.state.email : 'Nothing email!!!'}</span>
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
                    <Avatar size={40} src="https://gamek.mediacdn.vn/133514250583805952/2020/6/11/photo-1-1591863439028259696906.jpeg" />
                </Popover>
            </Header>
        );
    }
}

export default LayoutHeader;