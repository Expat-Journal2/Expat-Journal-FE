import React from 'react';
import Dashboard from './Dashboard';
import {Route, Redirect} from 'react-router-dom';

// const PrivateRoute = ({component: Component, ...rest}) => {

//     if(localStorage.getItem('token')){
//         return <Component {...props} />
//     } else {
//         return <Redirect to="/" />
//     }
// }

// export default PrivateRoute;

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => {
                if (localStorage.getItem("token")) {
                    return <Component {...props} />; // render component passed into props
                } else {
                    return <Redirect to="/login" />;
                }
            }}
        />
    );
};
export default PrivateRoute;