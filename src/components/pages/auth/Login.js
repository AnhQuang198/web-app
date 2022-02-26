import React, { Component } from 'react';
import { Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

class Login extends Component {
    render() {
        return (
            <div className='form-login-register'>
                <div className='border-form'>
                    <h1 className='box-title-h1'>Welcome Back</h1>
                    <Input className='input-form' size="large" placeholder="Email address" prefix={<UserOutlined />} />

                    <Input.Password className='input-form' size="large" placeholder="Password" prefix={<LockOutlined />} />

                    <h4 className='forgot-pass-text'><Link to="/forgot-password">Forgot password?</Link></h4>

                    <Button className='btn-form'>
                        Log In
                    </Button>

                    <div className='social-login'>
                        {/* <a className='social-button' href='#'>
                            <img className='social-img' alt="google" src="https://www.qries.com/images/banner_logo.png" />
                        </a>
                        <a className='social-button' href='#'>
                            <img className='social-img' alt="facebook" src="https://www.qries.com/images/banner_logo.png" />
                        </a>
                        <a className='social-button' href='#'>
                            <img className='social-img' alt="github" src="https://www.qries.com/images/banner_logo.png" />
                        </a> */}
                    </div>

                    <h4 className='sign-up-text'>Don't have an account yet? <Link to="/register">Sign up</Link></h4>
                </div>
            </div>
        );
    }
}

export default Login;