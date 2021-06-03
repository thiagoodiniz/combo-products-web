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

export const TableCellContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ExpandedItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 6rem;
    position: relative;
`;

export const ExpandedItemTitle = styled.h5`
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.blueDark};
    font-weight: 600;
    margin-bottom: 0.5rem;
`;

export const ExpandedItemContent = styled.div`
    display: flex;
    flex-direction: column;

    & > span {
        color: ${({ theme }) => theme.colors.blueGray};
    }
`;

export const SkuQtdContainer = styled.div`
    display: flex;
    justify-content: space-between;

    & > div {
        margin-right: 3rem;
    }
`;

export const VerticalDivisor = styled.hr`
    position: absolute;
    right: -2.125rem;
    height: 95%;  
    top: 50%;
    transform: translateY(-50%);
    border-right: 1px solid ${({ theme }) => theme.colors.gray6};
    opacity: 0.4;
`;

export const HalfVerticalDivisor = styled(VerticalDivisor)`
    height: 40%;
    top: 60%;
    margin: 0 0.5rem;
`;