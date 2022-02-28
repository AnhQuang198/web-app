import React, { Component } from 'react';
import { Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

class ForgotPassword extends Component {
    render() {
        return (
            <div className='form-login-register'>
                <div className='border-form'>
                    <h1 className='box-title-h1'>Forgot Password</h1>
                    <Input className='input-form' size="large" placeholder="Email address" prefix={<UserOutlined />} />
                    
                    <Button className='btn-form' style={{margin: '15px 0px 60px 0px'}}>
                        Retrieve Password
                    </Button>

                    <h4 className='sign-up-text'><Link to="/login">Back to login page</Link></h4>
                </div>
            </div>
        );
    }
}

export default ForgotPassword;