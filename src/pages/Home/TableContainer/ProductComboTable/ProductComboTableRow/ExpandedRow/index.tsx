import { TableCell } from '@material-ui/core';
import React from 'react';
import { ExpandedTableRow } from './styles';

const ExpandedRow: React.FC = () => {
    return (
        <ExpandedTableRow>
            <TableCell colSpan={9}>
                Expanded content 
            </TableCell>
        </ExpandedTableRow>
    );
}

export default ExpandedRow;