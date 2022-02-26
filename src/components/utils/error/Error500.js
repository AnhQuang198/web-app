import React, { Component } from 'react';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';

class Error500 extends Component {
    render() {
        return (
            <Result
                status="500"
                title="500"
                subTitle="Sorry, something went wrong."
                extra={<Button type="primary"><Link to="/home">Back Home</Link></Button>}
            />
        );
    }
}

export default Error500;