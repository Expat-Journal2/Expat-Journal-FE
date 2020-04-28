import React from 'react';
import Dashboard from './Dashboard';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {

    if(localStorage.getItem('token')){
        return <Route component={Dashboard} />
    } else {
        return <Redirect to="/" />
    }
}

export default PrivateRoute;