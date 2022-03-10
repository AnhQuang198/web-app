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
                    <SubMenu key="sub1" title="subnav 1">
                        <Menu.Item key="1"><Link to="/home">Home</Link></Menu.Item>
                        <Menu.Item key="2">option2</Menu.Item>
                        <Menu.Item key="3">option3</Menu.Item>
                        <Menu.Item key="4">option4</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title="subnav 2">
                        <Menu.Item key="5">option5</Menu.Item>
                        <Menu.Item key="6">option6</Menu.Item>
                        <Menu.Item key="7">option7</Menu.Item>
                        <Menu.Item key="8">option8</Menu.Item>
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