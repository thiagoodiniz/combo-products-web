import React from 'react';
import { IProductComboData } from '..';
import { StyledTableCell } from '../styles';
import { StyledTableRow } from './styles';
import activeCombo from '../../../../../assets/images/icons/active-combo.svg';
import inactiveCombo from '../../../../../assets/images/icons/inactive-combo.svg';

interface IProductComboTableRowProps {
    rowData: IProductComboData;
}

const ProductComboTableRow: React.FC<IProductComboTableRowProps> = ({ rowData }) => {
    return (
        <StyledTableRow key={rowData.name}>
            <StyledTableCell className="body" component="th" scope="row" align="center">
                {   rowData.active 
                    ? <img src={activeCombo} alt="Active" />
                    : <img src={inactiveCombo} alt="Inactive" />
                }
            </StyledTableCell>
            <StyledTableCell className="body" align="left">{rowData.name}</StyledTableCell>
            <StyledTableCell className="body" align="left">{rowData.salesOffice}</StyledTableCell>
            <StyledTableCell className="body" align="left">{rowData.uf}</StyledTableCell>
            <StyledTableCell className="body" align="left">{rowData.segmentation}</StyledTableCell>
            <StyledTableCell className="body" align="left">{rowData.dateRange}</StyledTableCell>
            <StyledTableCell className="body" align="left">{rowData.discountDeadlinePrice}</StyledTableCell>
        </StyledTableRow>
    );
}

export default ProductComboTableRow;