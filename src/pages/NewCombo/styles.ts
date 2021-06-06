import styled from 'styled-components';

export const Container = styled.div`
    margin: 5rem auto 1rem auto;
    max-width: ${({ theme }) => theme.breakpoints.laptopL};

    padding: 0 1.5rem;

    @media(min-width: ${({ theme }) => theme.breakpoints.laptopL}) {
        padding: unset;
    }
`;
