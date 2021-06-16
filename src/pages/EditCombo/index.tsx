import React from 'react';
import { useParams } from 'react-router-dom';
import { IProductComboData } from '../../services/ProductCombo/types';
import NewCombo from '../NewCombo';

interface IEditComboProps {
    getComboToEdit(comboId: string): IProductComboData | undefined;
    editCombo(combo: IProductComboData): void;
}

const EditCombo: React.FC<IEditComboProps> = ({ getComboToEdit, editCombo }) => {
    let { comboId } = useParams<{ comboId: string }>();

    const comboToEdit = getComboToEdit(comboId);

    return (
        <>
            {   comboToEdit !== undefined &&
                <NewCombo 
                    saveCombo={() => undefined}
                    comboToEdit={comboToEdit}
                    editCombo={editCombo}
                />
            }
        </>
    );
}

export default EditCombo;