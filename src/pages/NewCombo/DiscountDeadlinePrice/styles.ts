import styled from 'styled-components';

export const Container = styled.div`
    margin: 1rem 0;
    max-width: 20rem;
    display: flex;

    & .options {
        width: 50%;
        margin-right: 2rem;
    }

    & .description {
        input[type=number]::-webkit-inner-spin-button, 
        input[type=number]::-webkit-outer-spin-button { 
            -webkit-appearance: none; 
            margin: 0; 
        }
    }
`;
