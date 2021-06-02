import React from 'react';
import { Route, Switch, Redirect, useLocation, matchPath } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Header from './Pages/Header';

export enum ERoutes {
    LOGIN = '/login',
    HOME = '/home',
}

const Routes: React.FC = () => {
    const location = useLocation();

    return (
        <>
            {   !matchPath(location.pathname , ERoutes.LOGIN) &&
                <Header />
            }

            <Switch>
                <Route path={ERoutes.LOGIN} component={Login} />

                <Route path={ERoutes.HOME} component={Home} />

                <Route path="/">
                    <Redirect to={ERoutes.LOGIN} />
                </Route>

            </Switch>
        </>
    );
}

export default Routes;