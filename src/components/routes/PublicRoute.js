import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../../Base';
import PublicLayout from "../layouts/PublicLayout";

const PublicRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={props => (
            !isLogin() ?
                <PublicLayout>
                    <Component {...props} />
                </PublicLayout> : <Redirect to="/home" />
        )} />
    );
};

export default PublicRoute;