import styled from 'styled-components';
import { TableRow } from '@material-ui/core';

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