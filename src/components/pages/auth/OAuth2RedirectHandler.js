import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { saveTokenAuth } from '../../../Base';

class OAuth2RedirectHandler extends Component {
    getUrlParameter(name) {
        let currentUrl = window.location.href;
        let tokenIndex = currentUrl.indexOf('=')
        console.log(currentUrl);
        console.log(tokenIndex);
        return currentUrl.slice(tokenIndex + 1);
    };

    render() {
        const token = this.getUrlParameter('token');
        const error = this.getUrlParameter('error');
        const refreshToken = '';
        console.log(token)

        if (token) {
            saveTokenAuth(token, refreshToken)
            return <Redirect to={{
                pathname: "/home",
                state: { from: this.props.location }
            }} />;
        } else {
            return <Redirect to={{
                pathname: "/login",
                state: {
                    from: this.props.location,
                    error: error
                }
            }} />;
        }
    }
}

export default OAuth2RedirectHandler;