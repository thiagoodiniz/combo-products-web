import styled from 'styled-components';
import { TableCell, TableRow } from '@material-ui/core';

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    padding: 0 2rem 1rem 2rem;
`;

export const StyledTableRow = styled(TableRow)`
    && {
        &:nth-of-type(odd) {
            background-color: ${({ theme }) => theme.colors.gray2};
        }

        &:last-child {
            border-bottom: 1px solid ${({ theme }) => theme.colors.gray6};
        }
    }
`;

export const StyledTableCell = styled(TableCell)` 
    &.head {
        background-color: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.blueDark};
        font-weight: 600;
        font-size: 0.875rem;
    }  
    &.body {
        color: ${({ theme }) => theme.colors.blueGray};
        font-size: 0.875rem;
        border: unset;
    }    
`;