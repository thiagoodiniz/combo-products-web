import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useCombosState } from '../../context/Combos';
import { ERoutes } from '../../routes';
import { IProductComboData } from '../../services/ProductCombo/types';
import NewCombo from '../NewCombo';

const EditCombo: React.FC = () => {
    const history = useHistory();
    
    let { comboId } = useParams<{ comboId: string }>();
    const { combosState } = useCombosState();


    const getComboToEdit = (comboId: string): IProductComboData | undefined => {
        const combo = combosState.combos && combosState.combos.find(c => c.id === comboId);
        if(combo === undefined) {
            history.push(ERoutes.HOME);
        }  else {
            return combo;
        }
    }

    const comboToEdit = getComboToEdit(comboId);

    return (
        <>
            {   comboToEdit !== undefined &&
                <NewCombo 
                    comboToEdit={comboToEdit}
                />
            }
        </>
    );
}

export default EditCombo;