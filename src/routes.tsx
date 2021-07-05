import React, { useEffect } from 'react';
import { Route, Switch, Redirect, useLocation, matchPath } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Header from './pages/Header';
import NewCombo from './pages/NewCombo';
import EditCombo from './pages/EditCombo';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCombosState } from './context/Combos';

export enum ERoutes {
    LOGIN = '/login',
    HOME = '/home',
    NEW_COMBO = '/new-combo',
    EDIT_COMBO = '/edit',
}

const Routes: React.FC = () => {
    const { pathname } = useLocation();
    const { combosState, setCombosState, loadCombos } = useCombosState();

    useEffect(() => {
        if(!matchPath(pathname , ERoutes.LOGIN) && !combosState.loading && !combosState.error && combosState.combos === undefined) {
            loadCombos();
        }
    });

    useEffect(() => {
        if(combosState.toastMessage){
            toast.success(combosState.toastMessage, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });

            setCombosState({
                ...combosState,
                toastMessage: undefined,
            });
        }
    });

    return (
        <>
            {   !matchPath(pathname, ERoutes.LOGIN) &&
                <>
                    <Header />
                    <ToastContainer />
                </>
            }

            <Switch>
                <Route path={ERoutes.LOGIN} component={Login} />

                <Route path={ERoutes.HOME} render={() => 
                    <Home />} 
                />
                
                <Route path={ERoutes.NEW_COMBO} render={() =>
                    <NewCombo />
                } />

                <Route path={`${ERoutes.EDIT_COMBO}/:comboId`} render={() =>
                    <EditCombo />
                } />

                <Route path="/">
                    <Redirect to={ERoutes.LOGIN} />
                </Route>

            </Switch>
        </>
    );
}

export default Routes;