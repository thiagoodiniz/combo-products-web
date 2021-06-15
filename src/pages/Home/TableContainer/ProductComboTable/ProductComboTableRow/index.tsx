import React, { useState } from 'react';
import { StyledTableCell } from '../styles';
import { StyledTableRow, ActionButton, EditButton, DuplicateButton, RemoveButton } from './styles';
import activeCombo from '../../../../../assets/images/icons/active-combo.svg';
import inactiveCombo from '../../../../../assets/images/icons/inactive-combo.svg';
import expandTableRowIcon from '../../../../../assets/images/icons/expand-table-row.svg';
import retractTableRowIcon from '../../../../../assets/images/icons/retract-table-row.svg';
import ExpandedRow from './ExpandedRow';
import { EDiscountDeadlinePrice, IDiscountDeadlinePrice, IProductComboData } from '../../../../../services/ProductCombo/types';
import { Button, Dialog, DialogActions, DialogContent } from '@material-ui/core';

interface IProductComboTableRowProps {
    rowData: IProductComboData;
    isOddRow: boolean;
    removeCombo(comboId: string): void;
}

const getDiscountDeadlinePriceText = (data: IDiscountDeadlinePrice): string => {
    const type = data.type === EDiscountDeadlinePrice.DISCOUNT 
        ? 'Desconto / '
        : data.type === EDiscountDeadlinePrice.DEADLINE
            ? 'Prazo / '
            : 'Preço fixo';
    
    return `${type}${data.description}`;
}

const ProductComboTableRow: React.FC<IProductComboTableRowProps> = ({ rowData, isOddRow, removeCombo }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const [canShowRemoveConfirmationModal, setCanShowRemoveConfirmationModal] = useState(false);
    
    const onRemoveCombo = () => {
        setCanShowRemoveConfirmationModal(false);
        const row = document.getElementById(`combo-${rowData.id}`) as HTMLElement;
        row.classList.add('remove-combo');

        setTimeout(() => {
            row.classList.remove('remove-combo');
            removeCombo(rowData.id);
        }, 600);
    } 

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
                    />
                    <DuplicateButton 
                        title="Duplicar"
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
                />
            }

            <Dialog
                open={canShowRemoveConfirmationModal}
                onClose={() => setCanShowRemoveConfirmationModal(false)}
            >
                <DialogContent style={{margin: '1rem 0'}}>
                        Tem certeza que deseja remover o combo <strong>{ rowData.name }</strong>?
                </DialogContent>
                <DialogActions>
                    <Button
                        style={{textTransform: 'none'}}
                        autoFocus 
                        onClick={() => setCanShowRemoveConfirmationModal(false)} 
                        color="secondary"
                        variant="contained"
                    >
                        Não
                    </Button>
                    <Button 
                        style={{textTransform: 'none'}}
                        onClick={onRemoveCombo} 
                        color="primary"
                        variant="contained"
                    >
                        Sim
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default ProductComboTableRow;