import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './Pages/Login';

export enum ERoutes {
    LOGIN = '/login',
}

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={ERoutes.LOGIN} component={Login} />

                <Route path="*">
                    <Redirect to={ERoutes.LOGIN} />
                </Route>

            </Switch>
        </BrowserRouter>
    );
}

export default Routes;