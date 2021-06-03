import { TableCell } from '@material-ui/core';
import React from 'react';
import { ExpandedTableRow } from './styles';

interface IExpandedRowProps {
    isOddRow: boolean;
}

const ExpandedRow: React.FC<IExpandedRowProps> = ({ isOddRow }) => {
    return (
        <ExpandedTableRow 
            className={isOddRow ? 'odd' : 'even'}
        >
            <TableCell />
            <TableCell colSpan={8}>
                Expanded content
            </TableCell>
        </ExpandedTableRow>
    );
}

export default ExpandedRow;