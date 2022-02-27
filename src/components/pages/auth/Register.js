import React, { Component } from 'react';
import { Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

class Register extends Component {
    render() {
        return (
            <div className='form-login-register'>
                <div className='border-form'>
                    <h1 className='box-title-h1'>Create Account</h1>
                    <Input className='input-form' size="large" placeholder="Name" prefix={<UserOutlined />} />

                    <Input className='input-form' size="large" placeholder="Email address" prefix={<UserOutlined />} />

                    <Input.Password className='input-form' size="large" placeholder="Password" prefix={<LockOutlined />} />

                    <Input.Password className='input-form' size="large" placeholder="Confirm Password" prefix={<LockOutlined />} />

                    <Button className='btn-form' style={{margin: '20px 0px 50px 0px'}}>
                        Create Account
                    </Button>

                </div>
                <h4 className='sign-up-text'>Already a member? <Link to="/login">Log In</Link></h4>
            </div>
        );
    }
}

export default Register;