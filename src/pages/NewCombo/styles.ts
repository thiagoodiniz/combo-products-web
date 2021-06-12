import { Button } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled.div`
    margin: 5rem auto 1rem auto;
    max-width: ${({ theme }) => theme.breakpoints.laptopL};
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.commoms.boxShadow};
    border-radius: 0.25rem;
    padding: 0 1.5rem;
    display: flex;
    flex-direction: column;

    @media(min-width: ${({ theme }) => theme.breakpoints.laptopL}) {
        padding: 1rem 1.5rem;
    }

    & > h2 {
        font-size: 1.25rem;
        margin-bottom: 0.5rem;
    }
`;

export const NewComboForm = styled.div`
    display: flex;
    flex-direction: column;

    & > .form-input {
        margin: 0.5rem 0;
        max-width: 22rem;

        & input {
            font-size: 1rem;
            color: ${({ theme }) => theme.colors.blueDark};
        }


        &.dates {
            border-bottom: 1px solid ${({ theme }) => theme.colors.gray5};
            & > div { 
                display: flex;
                justify-content: space-between;
                margin-top: 0.5rem;

                & > label {
                    margin-left: 0;
                }
            }
        }

        &.states {
            & .MuiSelect-selectMenu {
                color: ${({ theme }) => theme.colors.blueDark};
                font-size: 0.875rem;
            }
        }
    }
`;

export const SaveFormButton = styled(Button)`
    && {
        background-color: ${({ theme }) => theme.colors.blue};
        color: ${({ theme }) => theme.colors.white};
        font-weight: 600;
        text-transform: none;
        width: 6rem;
        align-self: flex-end;
        
        &:hover {
            background-color: ${({ theme }) => theme.colors.blue};
            opacity: 0.85;
        }

        &:disabled {
            color: ${({ theme }) => theme.colors.white};
            opacity: 0.3;
        }
    }
`;
