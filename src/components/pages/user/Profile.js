import React, { Component } from 'react';
import { Image, Upload, Button, Input, Radio, DatePicker } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avatarUrl: ''
        }
    }

    render() {
        return (
            <div className='user-infor'>
                <h1>User Profile</h1>
                <hr />
                <div className='user-infor-tab'>
                    <div className='user-infor-avatar'>
                        <Image
                            style={{ width: '150px', height: '150px', borderRadius: '50%', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
                            src="https://img5.thuthuatphanmem.vn/uploads/2021/11/12/hinh-anh-anime-don-gian-hinh-nen-anime-don-gian-ma-dep_092443354.png"
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
                            <Radio.Group defaultValue={1}>
                                <Radio value={1}>Male</Radio>
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