import React, { useState } from 'react';
import { StyledTableCell } from '../styles';
import { StyledTableRow, ActionButton, EditButton, DuplicateButton, RemoveButton } from './styles';
import activeCombo from '../../../../../assets/images/icons/active-combo.svg';
import inactiveCombo from '../../../../../assets/images/icons/inactive-combo.svg';
import expandTableRowIcon from '../../../../../assets/images/icons/expand-table-row.svg';
import retractTableRowIcon from '../../../../../assets/images/icons/retract-table-row.svg';
import ExpandedRow from './ExpandedRow';
import { EDiscountDeadlinePrice, IDiscountDeadlinePrice, IProductComboData } from '../../../../../services/ProductCombo/types';

interface IProductComboTableRowProps {
    rowData: IProductComboData;
    isOddRow: boolean;
}

const getDiscountDeadlinePriceText = (data: IDiscountDeadlinePrice): string => {
    const type = data.type === EDiscountDeadlinePrice.DISCOUNT 
        ? 'Desconto / '
        : data.type === EDiscountDeadlinePrice.DEADLINE
            ? 'Prazo / '
            : 'Preço fixo';
    
    return `${type}${data.description}`;
}

const ProductComboTableRow: React.FC<IProductComboTableRowProps> = ({ rowData, isOddRow }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <>
            <StyledTableRow
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
                    />
                </StyledTableCell>

            </StyledTableRow>

            {isExpanded &&
                <ExpandedRow 
                    isOddRow={isOddRow}
                />
            }
        </>
    );
}

export default ProductComboTableRow;