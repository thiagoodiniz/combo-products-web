import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 1rem;
    box-shadow: ${({ theme }) => theme.commoms.boxShadow};
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: 0.5rem;
`;
