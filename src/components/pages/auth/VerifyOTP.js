import React, { Component } from 'react';
import { Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

class VerifyOTP extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            otp: ''
        }
    }

    handleChangeOTP = (event) => {
        this.setState({ otp: event.target.value });
    }

    render() {
        return (
            <div className='form-login-register'>
                <div className='border-form'>
                    <h1 className='box-title-h1'>Verify OTP</h1>
                    <Input className='input-form' size="large" 
                        placeholder="OTP" prefix={<UserOutlined />} 
                        value={this.state.otp} onChange={this.handleChangeOTP}
                    />
                    
                    <Button className='btn-form' style={{margin: '15px 0px 60px 0px'}}>
                        Reset Password
                    </Button>

                    <h4 className='sign-up-text'><Link to="/login">Back to login page</Link></h4>
                </div>
            </div>
        );
    }
}

export default VerifyOTP;