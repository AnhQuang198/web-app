import React, { Component } from 'react';
import { Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, GITHUB_AUTH_URL } from '../../../Base'

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

                    <div className='text-login-with'>
                        <hr />
                        <span>Login with</span>
                        <hr />
                    </div>

                    <div className='social-login'>
                        <ul>
                            <Button className='social-button'><a href={FACEBOOK_AUTH_URL}>Facebook</a></Button>
                            <Button className='social-button'><a href={GOOGLE_AUTH_URL}>Google</a></Button>
                            <Button className='social-button'><a href={GITHUB_AUTH_URL}>Github</a></Button>
                        </ul>
                    </div>

                </div>
                <h4 className='sign-up-text'>Don't have an account yet? <Link to="/register">Sign up</Link></h4>
            </div>
        );
    }
}

export default Login;