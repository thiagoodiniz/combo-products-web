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
    position: relative;
    margin: 0 0.25rem;

    &.sku-item {
        margin: 0 0.75rem;
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

    & > span {
        color: ${({ theme }) => theme.colors.blueGray};
    }

    & > img {
        height: 4.5rem;
        width: 4.5rem;
        border: 1px solid ${({ theme }) => theme.colors.gray6};
    }
`;

export const SkuQtdContainer = styled.div`
    display: flex;
    justify-content: space-between;

    & > div {
        margin-right: 1rem;
    }
`;

// export const VerticalDivisor = styled.hr`
//     position: absolute;
//     right: -2.125rem;
//     height: 95%;  
//     top: 50%;
//     transform: translateY(-50%);
//     border-right: 1px solid ${({ theme }) => theme.colors.gray6};
//     opacity: 0.4;
// `;

// export const HalfVerticalDivisor = styled(VerticalDivisor)`
//     height: 40%;
//     top: 60%;
//     margin: 0 0.5rem;
// `;