import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect, useLocation, matchPath, useHistory } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Header from './pages/Header';
import NewCombo from './pages/NewCombo';
import { IDiscountDeadlinePrice, IGpdSkuQuantItem, IProductComboData } from './services/ProductCombo/types';
import { ProductComboService } from './services/ProductCombo';
import EditCombo from './pages/EditCombo';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export enum ERoutes {
    LOGIN = '/login',
    HOME = '/home',
    NEW_COMBO = '/new-combo',
    EDIT_COMBO = '/edit',
}

const Routes: React.FC = () => {
    const { pathname } = useLocation();
    const history = useHistory();

    const [combos, setCombos] = useState<IProductComboData[]>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchCombos = () => {
            const comboSvc = new ProductComboService();
            setLoading(true);
            setError(false);

            comboSvc.loadCombos()
                .then(combos => {
                    setTimeout(() => {
                        setCombos(combos);
                        setLoading(false);
                    }, 2000);
                })
                .catch(err => {
                    console.log(err);
                    setLoading(false);
                    setError(true);
                });
        }

        if(!matchPath(pathname , ERoutes.LOGIN) && !loading && !error && combos === undefined) {
            fetchCombos();
        }
    });

    const saveCombo = (name: string, salesOffice: string, gpdSkuQuantList: IGpdSkuQuantItem[], uf: string, channels: string[], startDate: string, endDate: string, discountDeadlinePrice: IDiscountDeadlinePrice, base64FileImg: string, salesPlatform: string[]) => {
        const comboSvc = new ProductComboService();
        comboSvc.saveCombo(name, salesOffice, gpdSkuQuantList, uf, channels, startDate, endDate, discountDeadlinePrice, base64FileImg, salesPlatform)
            .then(combos => {
                toast.success('Combo salvo com sucesso.', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                setCombos(combos);
            })
            .catch(err => console.log(err));

        history.push(ERoutes.HOME);
    }


    const removeCombo = (comboId: string) => {
        const comboSvc = new ProductComboService();
        comboSvc.removeCombo(comboId)
            .then((combos) => {
                toast.success('Combo removido com sucesso.', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                setCombos(combos);
            })
            .catch((err) => {
                console.log(err)
            });
    }

    const editCombo = (combo: IProductComboData): void => {
        const comboSvc = new ProductComboService();
        comboSvc.editCombo(combo)
            .then(combos => {
                toast.success('Combo editado com sucesso.', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                setCombos(combos);
            })
            .catch(err => console.log(err));
            
        history.push(ERoutes.HOME);
    }

    const getComboToEdit = (comboId: string): IProductComboData | undefined => {
        const combo = combos && combos.find(c => c.id === comboId);
        if(combo === undefined) {
            history.push(ERoutes.HOME);
        }  else {
            return combo;
        }
    }

    const duplicateCombo = (combo: IProductComboData) => {
        const comboSvc = new ProductComboService();
        comboSvc.duplicateCombo(combo)
            .then(combos => { 
                toast.success('Combo duplicado com sucesso.', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                setCombos(combos);
            })
            .catch(err => console.log(err));
    }

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
                    <Home 
                        combos={combos || []}
                        loading={loading}
                        error={error}
                        removeCombo={removeCombo}
                        duplicateCombo={duplicateCombo}
                    />} 
                />
                
                <Route path={ERoutes.NEW_COMBO} render={() =>
                    <NewCombo 
                        saveCombo={saveCombo}
                    />
                } />

                <Route path={`${ERoutes.EDIT_COMBO}/:comboId`} render={() =>
                    <EditCombo 
                        editCombo={editCombo}
                        getComboToEdit={(comboId: string) => getComboToEdit(comboId)}
                    />
                } />

                <Route path="/">
                    <Redirect to={ERoutes.LOGIN} />
                </Route>

            </Switch>
        </>
    );
}

export default Routes;