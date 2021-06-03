import React from 'react';
import { Route, Switch, Redirect, useLocation, matchPath } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Header from './pages/Header';
import NewCombo from './pages/NewCombo';

export enum ERoutes {
    LOGIN = '/login',
    HOME = '/home',
    NEW_COMBO = '/new-combo',
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
                <Route path={ERoutes.NEW_COMBO} component={NewCombo} />

                <Route path="/">
                    <Redirect to={ERoutes.LOGIN} />
                </Route>

            </Switch>
        </>
    );
}

export default Routes;