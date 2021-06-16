import React, { useEffect, useState } from 'react';
import { StyledTableCell } from '../styles';
import { StyledTableRow, ActionButton, EditButton, DuplicateButton, RemoveButton } from './styles';
import activeCombo from '../../../../../assets/images/icons/active-combo.svg';
import inactiveCombo from '../../../../../assets/images/icons/inactive-combo.svg';
import expandTableRowIcon from '../../../../../assets/images/icons/expand-table-row.svg';
import retractTableRowIcon from '../../../../../assets/images/icons/retract-table-row.svg';
import ExpandedRow from './ExpandedRow';
import { EDiscountDeadlinePrice, IDiscountDeadlinePrice, IProductComboData } from '../../../../../services/ProductCombo/types';
import { useHistory } from 'react-router-dom';
import { ERoutes } from '../../../../../routes';
import ConfirmDialog from '../../../../../ components/ConfirmDialog';

interface IProductComboTableRowProps {
    rowData: IProductComboData;
    isOddRow: boolean;
    removeCombo(comboId: string): void;
    duplicateCombo(combo: IProductComboData): void;
}

const getDiscountDeadlinePriceText = (data: IDiscountDeadlinePrice): string => {

    const getDiscountDeadlinePriceFinalText = (type: EDiscountDeadlinePrice): string => {
        switch(type) {
            case EDiscountDeadlinePrice.DISCOUNT:
                return '%';
            case EDiscountDeadlinePrice.DEADLINE:
                return ' dias';
            default:
                return '';
        }
    }

    const type = data.type === EDiscountDeadlinePrice.DISCOUNT 
        ? 'Desconto / '
        : data.type === EDiscountDeadlinePrice.DEADLINE
            ? 'Prazo / '
            : 'Preço fixo';
    
    return `${type}${data.description}${getDiscountDeadlinePriceFinalText(data.type)}`;
}

const ProductComboTableRow: React.FC<IProductComboTableRowProps> = ({ rowData, isOddRow, removeCombo, duplicateCombo }) => {
    const history = useHistory();
    const [isExpanded, setIsExpanded] = useState(false);

    const [canShowRemoveConfirmationModal, setCanShowRemoveConfirmationModal] = useState(false);
    const [canShowDuplicateConfirmationModal, setCanShowDuplicateConfirmationModal] = useState(false);
    
    const onRemoveCombo = () => {
        setCanShowRemoveConfirmationModal(false);
        const row = document.getElementById(`combo-${rowData.id}`) as HTMLElement;
        row.classList.add('remove-combo');

        setTimeout(() => {
            row.classList.remove('remove-combo');
            removeCombo(rowData.id);
        }, 600);
    } 

    useEffect(() => {
        if(rowData.recentlyAdded === true){
            rowData.recentlyAdded = false;
            const row = document.getElementById(`combo-${rowData.id}`);
            if(row){
                row.classList.add('duplicated-combo');
                setTimeout(() => {
                    row.classList.remove('duplicated-combo');
                }, 1500);
            }
        }
    });

    return (
        <>
            <StyledTableRow
                id={`combo-${rowData.id}`}
                className={isOddRow ? 'odd' : 'even'}
            >
                <StyledTableCell className="body expand" align="center">
                    <ActionButton
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        <img src={isExpanded ? retractTableRowIcon : expandTableRowIcon} alt="Expand Retract" />
                    </ActionButton>
                </StyledTableCell>
                <StyledTableCell className="body" scope="row" align="center">
                    {   rowData.active 
                        ? <img src={activeCombo} alt="Active" />
                        : <img src={inactiveCombo} alt="Inactive" />
                    }
                </StyledTableCell>
                <StyledTableCell className="body" align="left">{rowData.name}</StyledTableCell>
                <StyledTableCell className="body" align="left">{rowData.salesOffice}</StyledTableCell>
                <StyledTableCell className="body" align="center">{rowData.uf}</StyledTableCell>
                <StyledTableCell className="body" align="left">{rowData.channels}</StyledTableCell>
                <StyledTableCell className="body" align="left">{`${rowData.startDate} - ${rowData.endDate}`}</StyledTableCell>
                <StyledTableCell className="body" align="left">{getDiscountDeadlinePriceText(rowData.discountDeadlinePrice)}</StyledTableCell>

                <StyledTableCell className="body actions" align="left">
                    <EditButton 
                        title="Editar"
                        onClick={() => history.push(`${ERoutes.EDIT_COMBO}/${rowData.id}`)}
                    />
                    <DuplicateButton 
                        title="Duplicar"
                        onClick={() => setCanShowDuplicateConfirmationModal(true)}
                    />
                    <RemoveButton
                        title="Remover"
                        onClick={() => setCanShowRemoveConfirmationModal(true)}
                    />
                </StyledTableCell>

            </StyledTableRow>

            {isExpanded &&
                <ExpandedRow 
                    isOddRow={isOddRow}
                    gpdSkuQuantItems={rowData.gpdSkuQuantList}
                    salesPlatform={rowData.salesPlatform}
                    base64FileImage={rowData.base64FileImg}
                />
            }

            <ConfirmDialog 
                title={<span>Tem certeza que deseja remover o combo <strong>{ rowData.name }</strong>?</span>}
                canShowDialog={canShowRemoveConfirmationModal}
                onCancel={() => setCanShowRemoveConfirmationModal(false)}
                onConfirm={onRemoveCombo}
            />

            <ConfirmDialog 
                title={<span>Tem certeza que deseja duplicar o combo <strong>{ rowData.name }</strong>?</span>}
                canShowDialog={canShowDuplicateConfirmationModal}
                onCancel={() => setCanShowDuplicateConfirmationModal(false)}
                onConfirm={() => { 
                    duplicateCombo(rowData);
                    setCanShowDuplicateConfirmationModal(false);
                }}
            />

        </>
    );
}

export default ProductComboTableRow;