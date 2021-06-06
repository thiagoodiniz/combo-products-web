import styled from 'styled-components';
import { TableCell } from '@material-ui/core';

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    padding: 0 1rem 0.5rem 1rem;

    @media(min-width: ${({ theme }) => theme.breakpoints.laptop}) {
        padding: 0 2rem 1rem 2rem;
    }
`;

export const TableContainer = styled.div`
    overflow-x: auto;
`;

export const StyledTableCell = styled(TableCell)` 
    &.head {
        background-color: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.blueDark};
        font-weight: 600;
        font-size: 0.875rem;
        line-height: 1.2;
        padding: 1rem 0.5rem;

    }  
    &.body {
        color: ${({ theme }) => theme.colors.blueGray};
        font-size: 0.875rem;
        border: unset;
        padding: 1rem 0.25rem;

        &.expand {
            border-right: 1px solid ${({ theme }) => theme.colors.gray6};
        }

        &.actions {
            border-left: 1px solid ${({ theme }) => theme.colors.gray6};
        }
    }    
`;