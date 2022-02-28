import React, { Component } from 'react';
import { notification } from 'antd';

const openNotification = (type, title, msg) => {
  notification[type]({
    message: title,
    description: msg
  });
};

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "info",
      title: this.props.title,
      msg: this.props.msg
    }
  }

  componentDidMount() {
    openNotification(this.state.type, this.state.title, this.state.msg);
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

export default Notification;