import { Button } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    margin: 1rem auto 0 auto;
`;

export const PaginationNumberButton = styled(Button)`
    && {
        min-width: 1.75rem;
        height: 1.75rem;
        margin: 0 0.5rem;

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
            font-size: 0.875rem;
            font-weight: 600;
        }
    }
`;
