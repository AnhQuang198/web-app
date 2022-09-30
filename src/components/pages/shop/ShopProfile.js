import React, { Component } from 'react';
import {Input} from "antd";

class ShopProfile extends Component {
    render() {
        return (
            <div className='shop-infor'>
                <h1>Shop Infomation</h1>
                <hr />
                <div className='image'>
                    <img className='cover-image' src="https://img5.thuthuatphanmem.vn/uploads/2021/11/12/hinh-anh-anime-don-gian-hinh-nen-anime-don-gian-ma-dep_092443354.png" />
                    <img className='avatar-image' src='https://d3hm98fncxeohs.cloudfront.net/1646308927996.jpg' />
                    <div className='image-description'>Ảnh đại diện có kích thước tối đa là 500x500 và ảnh bìa là 1248x312 - định dạng jpg, gif, png</div>
                </div>
                <div className='detail'>
                    <div>
                        <div className='input-update-form'>
                            <span>Tên cửa hàng</span>
                            <Input className='input-form-update' />
                        </div>
                        <div className='input-update-form'>
                            <span>Tên người bán</span>
                            <Input className='input-form-update' />
                        </div>
                    </div>
                    <div>
                        <div className='input-update-form'>
                            <span>Email</span>
                            <Input className='input-form-update' />
                        </div>
                        <div className='input-update-form'>
                            <span>Số điện thoại</span>
                            <Input className='input-form-update' />
                        </div>
                    </div>
                    <div>
                        <div className='input-update-form'>
                            <span>Mô tả cửa hàng</span>
                            <textarea />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShopProfile;