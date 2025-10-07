import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { saveTokenAuth } from '../../../Base';

class OAuth2RedirectHandler extends Component {
    getUrlParameter(name) {
        let currentUrl = window.location.href;
        let tokenIndex = currentUrl.indexOf('=')
        return currentUrl.slice(tokenIndex + 1);
    };

    render() {
        const params = new URLSearchParams(window.location.search);
        const token = params.get('access_token');
        const error = params.get('error');
        const refreshToken = params.get('refresh_token');

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