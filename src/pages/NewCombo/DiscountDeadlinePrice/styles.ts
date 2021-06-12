import styled from 'styled-components';

export const Container = styled.div`
    margin: 1rem 0;
    max-width: 22rem;
    display: flex;

    & .options {
        width: 50%;
        margin-right: 2rem;

        & .MuiSelect-selectMenu {
            color: ${({ theme }) => theme.colors.blueDark};
            font-size: 0.875rem;
        }
    }

    & .description {

        & input {
            color: ${({ theme }) => theme.colors.blueDark};
        }

        // remove as flechas de campo type number
        input[type=number]::-webkit-inner-spin-button, 
        input[type=number]::-webkit-outer-spin-button { 
            -webkit-appearance: none; 
            margin: 0; 
        }
    }
`;
