import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media(min-width: ${({ theme }) => theme.breakpoints.laptopM}) {
        flex-wrap: nowrap;
    }
`;
