import { Button } from '@material-ui/core';
import styled from 'styled-components';
import Pagination from '@material-ui/lab/Pagination';

export const Container = styled.div`
    display: flex;
    align-items: center;
    margin: 0.5rem auto 0 auto;
    padding: 0.5rem 0;
    position: relative;
`;

export const TablePagination = styled(Pagination)`
    && {
        margin: auto;
    }
`;

export const PaginationNumberButton = styled(Button)`
    && {
        min-width: 1.25rem;
        height: 1.25rem;
        margin: 0;

        background-color: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.blue};
        &:hover {
            background-color: ${({ theme }) => theme.colors.blue};
            color: ${({ theme }) => theme.colors.white};
            opacity: 0.75;
        }

        &.selected {
            background-color: ${({ theme }) => theme.colors.blue};
            color: ${({ theme }) => theme.colors.white};
            &:hover {
                background-color: ${({ theme }) => theme.colors.blue};
                opacity: 0.75;
            }
        }

        & > span {
            font-size: 0.75rem;
            font-weight: 600;
        }

        @media(min-width: ${({ theme }) => theme.breakpoints.mobileL}){
            min-width: 1.75rem;
            height: 1.75rem;
            margin: 0 0.5rem;

            & > span {
                font-size: 0.875rem;
            }
        }
    }
`;
