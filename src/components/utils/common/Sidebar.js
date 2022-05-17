import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
const { SubMenu } = Menu;
const { Sider } = Layout;

class Sidebar extends Component {
    render() {
        return (
            <Sider className="site-layout-background" style={{ overflow: 'auto', height: 'auto'}}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                >
                    <SubMenu key="sub1" title="Other">
                        <Menu.Item key="1"><Link to="/home">Home</Link></Menu.Item>
                        <Menu.Item key="2">Setting</Menu.Item>
                        <Menu.Item key="3">Image</Menu.Item>
                        <Menu.Item key="4">Other</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title="Shop">
                        <Menu.Item key="5"> <Link to="/shop/profile">Shop Infomation</Link></Menu.Item>
                        <Menu.Item key="6">Shop Address</Menu.Item>
                        <Menu.Item key="7">Order</Menu.Item>
                        <Menu.Item key="8">Rating</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" title="Admin">
                        <Menu.Item key="9">Shop</Menu.Item>
                        <Menu.Item key="10">User</Menu.Item>
                        <Menu.Item key="11">Product</Menu.Item>
                        <Menu.Item key="12">Rating</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        );
    }
}

export default Sidebar;