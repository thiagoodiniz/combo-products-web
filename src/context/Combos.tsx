import React, { createContext, useState, useContext }  from 'react';
import { useHistory } from 'react-router-dom';
import { ERoutes } from '../routes';
import { ProductComboService } from '../services/ProductCombo';
import { ICombosState, IDiscountDeadlinePrice, IProductComboData, ISkuQuantItem } from '../services/ProductCombo/types';

const INITIAL_VALUE: ICombosState = {
    combos: undefined,
    channelsState: {
        channels: undefined,
        loading: false,
        error: false
    },
    loading: false,
    error: false,
} 

const ComboContext = createContext<{ combosState: ICombosState, setCombosState(newCombosState: ICombosState): void  } | undefined>(undefined);

export const ComboProvider: React.FC = ({ children }) => {
    const [combosState, setCombosState] = useState<ICombosState>(INITIAL_VALUE);

    return (
        <ComboContext.Provider 
            value={{ combosState, setCombosState }}
        >
            {children}
        </ComboContext.Provider>
    );
}

export function useCombosState() {
    const context = useContext(ComboContext);
    const history = useHistory();
    
    if (!context) throw new Error("useCombosState fail");
    const { combosState, setCombosState } = context;

    const comboSvc = new ProductComboService();

    const loadCombos = () => {
        setCombosState({
            ...combosState,
            loading: true,
            error: false,
        });

        comboSvc.loadCombos()
            .then(combos => {
                setTimeout(() => {
                    setCombosState({
                        ...combosState,
                        combos,
                        loading: false,
                    });
                }, 2000);
            })
            .catch(err => {
                console.log(err);
                setCombosState({
                    ...combosState,
                    loading: false,
                    error: true,
                });
            });
    }

    const loadChannels = () => {
        setCombosState({
            ...combosState,
            channelsState: {
                ...combosState.channelsState,
                loading: true,
                error: false,
            }
        });

        comboSvc.getChannels()
        .then(channels => 
            setCombosState({ 
                ...combosState,
                channelsState: {
                    channels,
                    loading: false,
                    error: false
                }
            }))
        .catch(err => {
            console.log('loadChannels', err)
            setCombosState({
                ...combosState,
                channelsState: {
                    ...combosState.channelsState,
                    loading: false,
                    error: true,
                }
            });
        });
    }

    const saveCombo = (name: string, salesOffice: string, gpdSkuQuantList: ISkuQuantItem[], uf: string, channels: string[], startDate: string, endDate: string, discountDeadlinePrice: IDiscountDeadlinePrice, base64FileImg: string, salesPlatform: string[]) => {
        comboSvc.saveCombo(name, salesOffice, gpdSkuQuantList, uf, channels, startDate, endDate, discountDeadlinePrice, base64FileImg, salesPlatform)
            .then(combos => {
                setCombosState({
                    ...combosState,
                    combos,
                    toastMessage: 'Combo salvo com sucesso.',
                });
            })
            .catch(err => console.log(err));

        history.push(ERoutes.HOME);
    }

    const editCombo = (combo: IProductComboData): void => {
        comboSvc.editCombo(combo)
            .then(combos => {
                setCombosState({
                    ...combosState,
                    combos,
                    toastMessage: 'Combo editado com sucesso.',
                });
            })
            .catch(err => console.log(err));
            
        history.push(ERoutes.HOME);
    }

    const removeCombo = (comboId: string) => {
        comboSvc.removeCombo(comboId)
            .then((combos) => {
                setCombosState({
                    ...combosState,
                    combos,
                    toastMessage: 'Combo removido com sucesso.',
                });
            })
            .catch((err) => {
                console.log(err)
            });
    }

    const duplicateCombo = (combo: IProductComboData) => {
        comboSvc.duplicateCombo(combo)
            .then(combos => { 
                setCombosState({
                    ...combosState,
                    combos,
                    toastMessage: 'Combo duplicado com sucesso.',
                });
            })
            .catch(err => console.log(err));
    }


    return { combosState, setCombosState, loadCombos, loadChannels, saveCombo, editCombo, removeCombo, duplicateCombo };
}