import React, { Component } from 'react';
import { Spin } from 'antd';

class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: this.props.isLoading
        }
    }
    render() {
        return (
            this.state.isLoading === true ?
                <Spin />
                : <div></div>
        );
    }
}

export default Loading;