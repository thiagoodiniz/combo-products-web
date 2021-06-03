import styled from 'styled-components';
import { TableCell } from '@material-ui/core';

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    padding: 0 2rem 1rem 2rem;
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