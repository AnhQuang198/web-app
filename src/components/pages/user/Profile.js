import React, { Component } from 'react';
import { Image, Upload, Button, Input, Radio, DatePicker } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
class Profile extends Component {
    render() {
        return (
            <div className='user-infor'>
                <h1>User Profile</h1>
                <hr />
                <div className='user-infor-tab'>
                    <div className='user-infor-avatar'>
                        <Image
                            style={{ width: '150px', height: '150px', borderRadius: '50%', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
                            src="https://gamek.mediacdn.vn/133514250583805952/2020/6/11/photo-1-1591863439028259696906.jpeg"
                        />
                        <Upload>
                            <Button style={{ marginTop: '20px' }} icon={<UploadOutlined />}>Upload</Button>
                        </Upload>
                    </div>
                    <div className='user-infor-form'>
                        <div className='input-update-form'>
                            <span>Full name</span>
                            <Input className='input-form-update' placeholder="Full name" />
                        </div>
                        <div className='input-update-form'>
                            <span>Phone number</span>
                            <Input className='input-form-update' placeholder="Phone number" />
                        </div>
                        <div className='input-update-form'>
                            <span>Email address</span>
                            <Input className='input-form-update' placeholder="Email address" />
                        </div>
                        <div className='input-update-form'>
                            <span style={{ display: 'block', marginBottom: '10px' }}>Date of birth</span>
                            <DatePicker />
                        </div>
                        <div className='input-update-form'>
                            <span style={{ display: 'block', marginBottom: '10px' }}>Gender</span>
                            <Radio.Group>
                                <Radio defaultChecked={true} value={1}>Male</Radio>
                                <Radio value={2}>Female</Radio>
                            </Radio.Group>
                        </div>
                        <div className='button-update-form'>
                            <Button style={{ width: '100%' }}>Save</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;