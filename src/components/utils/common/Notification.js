import React, { Component } from 'react';


const openNotification = (type, msg, dsn) => {
    notification[type]({
        message: msg,
        description: dsn,
    });
};
class Notification extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Notification;