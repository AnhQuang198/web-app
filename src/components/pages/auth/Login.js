import React, { Component } from 'react';
import { Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, GITHUB_AUTH_URL, nonAuthorizedPOST, saveTokenAuth, setTimeExpire } from '../../../Base'
import Notification from '../../utils/common/Notification';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            msgError: '',
            isError: false,
            isLoading: false
        }
    }

    handleChangeEmail = (event) => {
        this.setState({ email: event.target.value });
    }

    handleChangePassword = (event) => {
        this.setState({ password: event.target.value });
    }

    login = async () => {
        try {
            this.setState({ isLoading: true })
            const data = {
                email: this.state.email,
                password: this.state.password
            }
            const reqUrl = "/v1/auth/login";
            const result = await nonAuthorizedPOST(reqUrl, data);

            if (result.status === 200) {
                saveTokenAuth(result.data.token, result.data.refreshToken);
                setTimeExpire(result.data.expired);
                this.setState({ isLoading: false })
                // redirect to path when login success
                this.props.history.push("/home");
            } else {
                this.setState({
                    isError: true,
                    msgError: result.message,
                    isLoading: false
                })
            }
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div className='form-login-register'>
                <div className='border-form'>
                    <h1 className='box-title-h1'>Welcome Back</h1>
                    <Input className='input-form' size="large"
                        placeholder="Email address" prefix={<UserOutlined />}
                        value={this.state.email} onChange={this.handleChangeEmail}
                    />

                    <Input.Password className='input-form' size="large"
                        placeholder="Password" prefix={<LockOutlined />}
                        value={this.state.password} onChange={this.handleChangePassword}
                    />

                    <h4 className='forgot-pass-text'><Link to="/forgot-password">Forgot password?</Link></h4>

                    <Button className='btn-form' onClick={this.login} disabled={this.state.isLoading}>
                        {this.state.isLoading ? 'Loading...' : 'Log In'}
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
                {this.state.isError ? <Notification title="Login error" msg={this.state.msgError} /> : null}
            </div>
        );
    }
}

export default Login;