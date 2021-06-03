import styled from 'styled-components';
import { TableRow } from '@material-ui/core';

export const ExpandedTableRow = styled(TableRow)`
    && {
        border-top: 1px solid ${({ theme }) => theme.colors.gray6};
        border-bottom: unset;

        &.even {
            background-color: ${({ theme }) => theme.colors.gray2};
        }
    }
`;
