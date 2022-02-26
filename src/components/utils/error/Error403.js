import React, { Component } from 'react';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';

class Error403 extends Component {
    render() {
        return (
            <Result
                status="403"
                title="403"
                subTitle="Sorry, you are not authorized to access this page."
                extra={<Button type="primary"><Link to="/home">Back Home</Link></Button>}
            />
        );
    }
}

export default Error403;