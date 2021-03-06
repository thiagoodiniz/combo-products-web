import styled from 'styled-components';
import { TableRow } from '@material-ui/core';

export const ExpandedTableRow = styled(TableRow)`
    && {
        border-top: 1px solid ${({ theme }) => theme.colors.gray6};
        border-bottom: unset;

        &.even {
            background-color: ${({ theme }) => theme.colors.gray2};
        }

        animation: opacity 0.75s ease;

        @keyframes opacity {
            0% {
                opacity: 0.25;
            }
            100% {
                opacity: 1;
            }
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
    min-height: 6rem;
    margin: 0 2rem 0 0.25rem;


    &.ecommerce-container {
        flex-grow: 1;
    }

    &.sku-quant {
        flex-grow: 4;
    }
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
    flex-wrap: wrap;
    margin-right: 2rem;
    max-height: 5rem;

    & > span {
        color: ${({ theme }) => theme.colors.blueGray};
        margin-right: 2rem;
    }

    & > img {
        height: 4.5rem;
        width: 4.5rem;
        border: 1px solid ${({ theme }) => theme.colors.gray6};
    }
`;