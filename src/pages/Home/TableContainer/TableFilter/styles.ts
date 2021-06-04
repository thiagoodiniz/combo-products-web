import { Button } from '@material-ui/core';
import styled from 'styled-components';
import searchIcon from '../../../../assets/images/icons/search.svg';

export const Container = styled.div`
    padding: 1rem 2rem;
    background-color: ${({ theme }) => theme.colors.gray3};
    border-bottom: 2px solid ${({ theme }) => theme.colors.gray6};
    display: flex;
    align-items: center;

    & > div {
        display: flex;
        margin-right: 2rem;

        & > span {
            font-size: 1rem;
            color: ${({ theme }) => theme.colors.blueDark};
            font-weight: 600;
            margin-right: 0.5rem;
        }

        & > input {
            max-width: 10rem;
            padding: 0 0.5rem;
            border: 2px solid ${({ theme }) => theme.colors.gray6};
            color: ${({ theme }) => theme.colors.blueDark};
            outline: none;
            border-radius: 0.25rem;
            font-size: 0.75rem;

            &.date {
                max-width: 5rem;
                margin-right: 0.5rem;

                &:last-child {
                    margin-left: 0.5rem;
                    margin-right: 0;
                }
            }
        }

        & > span.divisor {
            margin: 0 0.5rem;
        }
    }
`;

export const SearchButton = styled(Button)`
    && {
        background-color: ${({ theme }) => theme.colors.blue};
        min-width: 1.75rem;
        height: 1.5rem;
        background-image: url(${searchIcon});
        background-repeat: no-repeat;
        background-position: center;

        &:hover {
            background-color: ${({ theme }) => theme.colors.blue};
            opacity: 0.9;
        }
    }
`;